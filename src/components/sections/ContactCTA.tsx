"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTag from "@/components/ui/SectionTag";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-32 px-[5%] bg-surface text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(45,106,79,0.1)_0%,transparent_70%)]" />

      <div className="relative max-w-2xl mx-auto">
        <SectionTag className="mb-6">Start Trading</SectionTag>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(32px,4vw,56px)] font-semibold leading-tight mb-5"
        >
          Ready to Source{" "}
          <em className="italic text-emerald-mid">Premium Produce?</em>
        </motion.h2>
        <p className="text-vvj-muted text-[15px] mb-10">
          Let&apos;s discuss your requirements. We respond within 24 hours for all
          genuine B2B enquiries.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-3.5 bg-emerald text-vvj-text text-[11px] tracking-[2.5px] uppercase font-medium hover:bg-emerald-mid transition-colors"
          >
            Send Enquiry
            <ArrowRight size={14} />
          </Link>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 border border-[rgba(37,211,102,0.3)] text-[#25d366] text-[11px] tracking-[2.5px] uppercase hover:bg-[rgba(37,211,102,0.08)] transition-colors"
          >
            <MessageCircle size={14} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}