"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Phone, Send } from "lucide-react";
import { contactDetails } from "@/lib/contact";
import { contactFormSchema, inquiryOptions, type ContactFormData } from "@/lib/contact-form";

export default function ContactCTA() {
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

      toast.success("Message sent. VVJ will contact you shortly.");
      reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to send enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* BEGIN: Minimal Inquiry Form */}
      <section id="inquire" className="bg-slate-100 px-[5%] py-16 lg:py-24">
      <div className="max-content">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="bg-slate-950 p-7 text-white lg:sticky lg:top-28">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">
              Quick Contact
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-white">
              Send a short enquiry.
            </h2>
            <div className="mt-6 grid gap-3 text-sm text-slate-200">
              <a href={`tel:${contactDetails.phoneTel}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone size={15} className="text-emerald-200" />
                {contactDetails.phoneDisplay}
              </a>
              <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-white">
                <Mail size={15} className="shrink-0 text-emerald-200" />
                {contactDetails.email}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input {...register("name")} className="input-field" placeholder="Your name" />
              </Field>

              <Field label="Email or Phone" error={errors.contact?.message}>
                <input {...register("contact")} className="input-field" placeholder="you@company.com / +91..." />
              </Field>

              <Field label="Option" error={errors.option?.message} className="md:col-span-2">
                <select {...register("option")} className="input-field">
                  <option value="">Select option</option>
                  {inquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Message" error={errors.message?.message} className="md:col-span-2">
                <textarea
                  {...register("message")}
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Product, quantity, destination, or logistics support needed."
                />
              </Field>
            </div>

            <button type="submit" disabled={loading} className="btn-primary mt-6 w-full transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
              {loading ? "Sending..." : "Send Message"}
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
      </section>
      {/* END: Minimal Inquiry Form */}
    </>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-semibold text-red-600">{error}</span>}
    </label>
  );
}
