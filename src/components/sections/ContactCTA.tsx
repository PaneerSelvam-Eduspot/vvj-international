"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      className="relative text-center overflow-hidden"
      style={{
        background: "var(--surface)",
        padding: "8rem 5%",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(45,106,79,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto">
        <span className="label-tag">Start Trading</span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif font-semibold mb-5"
          style={{
            fontSize: "clamp(32px, 4vw, 56px)",
            lineHeight: 1.05,
            color: "var(--text)",
          }}
        >
          Ready to Source{" "}
          <em
            className="italic"
            style={{ color: "var(--emerald-mid)" }}
          >
            Premium Produce?
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[15px] mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          Let&apos;s discuss your requirements. We respond within 24 hours for all
          genuine B2B enquiries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link href="/contact" className="btn-primary">
            Send Enquiry
            <ArrowRight size={14} />
          </Link>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            style={{
              padding: "14px 32px",
              border: "1px solid rgba(37,211,102,0.25)",
              color: "#25d366",
              fontSize: "11px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              transition: "background 0.25s ease",
            }}
          >
            <MessageCircle size={14} />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
