"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import SectionTag from "@/components/ui/SectionTag";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { contactDetails } from "@/lib/contact";
import { contactFormSchema, inquiryOptions, type ContactFormData } from "@/lib/contact-form";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Unable to send enquiry.");
      }

      toast.success("Enquiry sent. VVJ will contact you shortly.");
      reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to send enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-surface px-[5%] pb-16 pt-36 border-b border-vvj-border">
        <div className="mx-auto max-w-5xl">
          <SectionTag>Contact</SectionTag>
          <h1 className="mt-2 font-serif text-[clamp(38px,5vw,64px)] font-semibold leading-none">
            Reach <em className="italic text-emerald-mid">VVJ International</em>
          </h1>
        </div>
      </div>

      <section className="bg-bg px-[5%] py-14 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-3">
            <a href={`tel:${contactDetails.phoneTel}`} className="flex items-center gap-3 border border-vvj-border bg-surface p-4 text-sm text-vvj-text transition-colors hover:border-emerald-border">
              <Phone size={17} className="text-emerald-mid" />
              {contactDetails.phoneDisplay}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-3 break-all border border-vvj-border bg-surface p-4 text-sm text-vvj-text transition-colors hover:border-emerald-border">
              <Mail size={17} className="shrink-0 text-emerald-mid" />
              {contactDetails.email}
            </a>
            <a href={contactDetails.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-[rgba(37,211,102,0.3)] bg-surface p-4 text-sm text-[#25d366] transition-colors hover:bg-[rgba(37,211,102,0.08)]">
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </aside>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 border border-vvj-border bg-surface p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input {...register("name")} className="input-field" placeholder="Your name" />
              </Field>

              <Field label="Email or Phone" error={errors.contact?.message}>
                <input {...register("contact")} className="input-field" placeholder="you@company.com / +91..." />
              </Field>
            </div>

            <Field label="What do you need?" error={errors.option?.message}>
              <select {...register("option")} className="input-field">
                <option value="">Select option</option>
                {inquiryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={5}
                className="input-field resize-none"
                placeholder="Tell us the product, quantity, destination, or logistics support needed."
              />
            </Field>

            <button type="submit" disabled={loading} className="btn-primary w-full transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
              {loading ? "Sending..." : "Send Message"}
              <Send size={15} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label>
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-vvj-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-semibold text-red-500">{error}</span>}
    </label>
  );
}
