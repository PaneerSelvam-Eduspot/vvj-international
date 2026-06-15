import { contactDetails } from "@/lib/contact";
import { contactFormSchema } from "@/lib/contact-form";

export const runtime = "nodejs";

type NotifyResult = {
  ok: boolean;
  channel: "email" | "sms";
  error?: string;
};

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return Response.json(
      { error: "Please check the form details.", fields: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const emailResult = await sendEmailNotification(parsed.data);
  const smsResult = await sendSmsNotification(parsed.data);

  if (!emailResult.ok) {
    console.error("Contact email notification failed:", emailResult.error);

    return Response.json(
      {
        error: "Unable to send notification email.",
      },
      { status: 503 }
    );
  }

  return Response.json({
    ok: true,
    smsNotified: smsResult.ok,
  });
}

async function sendEmailNotification(data: {
  name: string;
  contact: string;
  option: string;
  message: string;
}): Promise<NotifyResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || contactDetails.email;
  const from = process.env.RESEND_FROM || "VVJ Website <onboarding@resend.dev>";

  if (!apiKey) {
    return { ok: false, channel: "email", error: "Missing RESEND_API_KEY." };
  }

  const text = [
    "New VVJ International website enquiry",
    "",
    `Name: ${data.name}`,
    `Contact: ${data.contact}`,
    `Option: ${data.option}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New website enquiry: ${data.option}`,
      text,
      reply_to: data.contact.includes("@") ? data.contact : undefined,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    return { ok: false, channel: "email", error };
  }

  return { ok: true, channel: "email" };
}

async function sendSmsNotification(data: {
  name: string;
  contact: string;
  option: string;
}): Promise<NotifyResult> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.NOTIFY_PHONE_NUMBER;

  if (!accountSid || !authToken || !from || !to) {
    return { ok: false, channel: "sms", error: "SMS notification is not configured." };
  }

  const body = new URLSearchParams({
    From: from,
    To: to,
    Body: `VVJ enquiry: ${data.option} from ${data.name}. Contact: ${data.contact}`,
  });

  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    const error = await response.text();
    return { ok: false, channel: "sms", error };
  }

  return { ok: true, channel: "sms" };
}
