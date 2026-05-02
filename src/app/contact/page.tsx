"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import SectionTag from "@/components/ui/SectionTag";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

const schema = z.object({
  name:        z.string().min(2, "Name is required"),
  company:     z.string().min(1, "Company name is required"),
  email:       z.string().email("Valid email required"),
  phone:       z.string().min(7, "Phone number required"),
  product:     z.string().min(1, "Please select a product"),
  destination: z.string().min(2, "Destination country required"),
  quantity:    z.string().min(1, "Approximate quantity required"),
  message:     z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // Demo: just simulate a delay and show toast
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form data:", data);
    toast.success("Enquiry sent! We'll respond within 24 hours.");
    reset();
    setLoading(false);
  };

  return (
    <>
      <div className="pt-40 pb-20 px-[5%] bg-surface border-b border-vvj-border">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Get In Touch</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2">
            Start a <em className="italic text-emerald-mid">Conversation</em>
          </h1>
        </div>
      </div>

      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Contact info */}
          <div>
            <h2 className="font-serif text-2xl font-semibold mb-8">
              Contact Details
            </h2>
            <div className="space-y-6">
              {[
                { icon: Phone,  label: "Phone",    value: "+91 XXXXX XXXXX" },
                { icon: Mail,   label: "Email",    value: "info@vvjinternational.com" },
                { icon: MapPin, label: "Location", value: "Tamil Nadu, India" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <Icon size={18} strokeWidth={1.5} className="text-emerald-mid mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] tracking-[2px] uppercase text-vvj-muted block mb-0.5">
                        {item.label}
                      </span>
                      <span className="text-sm text-vvj-text">{item.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 p-6 border border-emerald-border bg-surface">
              <p className="text-sm text-vvj-muted leading-relaxed mb-5">
                Prefer a quicker response? Reach us directly on WhatsApp for
                B2B trade enquiries.
              </p>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border border-[rgba(37,211,102,0.3)] text-[#25d366] text-[11px] tracking-[2px] uppercase hover:bg-[rgba(37,211,102,0.08)] transition-colors"
              >
                <MessageCircle size={14} />
                Open WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="text-[10px] tracking-[2px] uppercase text-vvj-muted block mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register("name")}
                    className="w-full bg-surface border border-vvj-border px-4 py-3 text-sm text-vvj-text placeholder-vvj-muted focus:outline-none focus:border-emerald-border transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="text-[10px] tracking-[2px] uppercase text-vvj-muted block mb-2">
                    Company Name *
                  </label>
                  <input
                    {...register("company")}
                    className="w-full bg-surface border border-vvj-border px-4 py-3 text-sm text-vvj-text placeholder-vvj-muted focus:outline-none focus:border-emerald-border transition-colors"
                    placeholder="Your company"
                  />
                  {errors.company && (
                    <p className="text-xs text-red-400 mt-1">{errors.company.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] tracking-[2px] uppercase text-vvj-muted block mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-surface border border-vvj-border px-4 py-3 text-sm text-vvj-text placeholder-vvj-muted focus:outline-none focus:border-emerald-border transition-colors"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[10px] tracking-[2px] uppercase text-vvj-muted block mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full bg-surface border border-vvj-border px-4 py-3 text-sm text-vvj-text placeholder-vvj-muted focus:outline-none focus:border-emerald-border transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Product */}
                <div>
                  <label className="text-[10px] tracking-[2px] uppercase text-vvj-muted block mb-2">
                    Product Interested In *
                  </label>
                  <select
                    {...register("product")}
                    className="w-full bg-surface border border-vvj-border px-4 py-3 text-sm text-vvj-text focus:outline-none focus:border-emerald-border transition-colors"
                  >
                    <option value="">Select product</option>
                    <option value="onion">Onion</option>
                    <option value="peanut">Peanut</option>
                    <option value="peanut-candy">Peanut Candy</option>
                    <option value="mango-alphonso">Mango — Alphonso</option>
                    <option value="mango-kesar">Mango — Kesar</option>
                    <option value="mango-banganapalli">Mango — Banganapalli</option>
                    <option value="mango-totapuri">Mango — Totapuri</option>
                    <option value="mango-dasheri">Mango — Dasheri</option>
                    <option value="multiple">Multiple Products</option>
                  </select>
                  {errors.product && (
                    <p className="text-xs text-red-400 mt-1">{errors.product.message}</p>
                  )}
                </div>

                {/* Destination */}
                <div>
                  <label className="text-[10px] tracking-[2px] uppercase text-vvj-muted block mb-2">
                    Destination Country *
                  </label>
                  <input
                    {...register("destination")}
                    className="w-full bg-surface border border-vvj-border px-4 py-3 text-sm text-vvj-text placeholder-vvj-muted focus:outline-none focus:border-emerald-border transition-colors"
                    placeholder="e.g. UAE, Malaysia"
                  />
                  {errors.destination && (
                    <p className="text-xs text-red-400 mt-1">{errors.destination.message}</p>
                  )}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-[10px] tracking-[2px] uppercase text-vvj-muted block mb-2">
                  Approximate Quantity *
                </label>
                <input
                  {...register("quantity")}
                  className="w-full bg-surface border border-vvj-border px-4 py-3 text-sm text-vvj-text placeholder-vvj-muted focus:outline-none focus:border-emerald-border transition-colors"
                  placeholder="e.g. 1 FCL (20MT), 500kg, 1000 cartons"
                />
                {errors.quantity && (
                  <p className="text-xs text-red-400 mt-1">{errors.quantity.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-[10px] tracking-[2px] uppercase text-vvj-muted block mb-2">
                  Additional Notes
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-surface border border-vvj-border px-4 py-3 text-sm text-vvj-text placeholder-vvj-muted focus:outline-none focus:border-emerald-border transition-colors resize-none"
                  placeholder="Packaging requirements, target price, delivery timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-10 py-4 bg-emerald text-vvj-text text-[11px] tracking-[2.5px] uppercase font-medium hover:bg-emerald-mid transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : (
                  <>
                    Send Enquiry
                    <Send size={13} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}