"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Anchor, CheckCircle2 } from "lucide-react";

const highlights = [
  "APEDA Certified Export House",
  "FSSAI Licensed",
  "IEC Registered",
  "B2B Focused",
];

export default function AboutSnippet() {
  return (
    <section style={{ background: "var(--bg)" }}>
      <div className="max-content section-padding-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ── Left: Image frame ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image frame */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", maxWidth: "380px" }}>
              <Image
                src="/vvj-logo.png"
                alt="VVJ International & Logistics "
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
                priority={false}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,28,20,0.65) 0%, rgba(11,28,20,0.2) 45%, rgba(11,28,20,0.15) 100%)",
                }}
              />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 opacity-85">
                <Anchor size={16} strokeWidth={1.1} style={{ color: "var(--emerald-mid)" }} />
                <span className="text-[8px] tracking-[2.5px] uppercase text-vvj-text">
                  Trusted Export House
                </span>
              </div>

              {/* Corner accents */}
              <div className="corner-tl" />
              <div className="corner-br" />

              {/* Inner border */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "12px",
                  border: "1px solid rgba(82,183,136,0.15)",
                }}
              />
            </div>

            {/* Floating badge 
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 hidden md:flex flex-col items-center justify-center"
              style={{
                width: "120px",
                height: "120px",
                background: "var(--emerald)",
                border: "4px solid var(--bg)",
              }}
            >
              <span
                className="font-serif text-3xl font-bold leading-none"
                style={{ color: "var(--text)" }}
              >
                15+
              </span>
              <span
                className="text-[9px] tracking-[1.5px] uppercase text-center mt-1 leading-tight"
                style={{ color: "rgba(240,247,242,0.7)" }}
              >
                Years of Trade
              </span>
            </motion.div>
            */}
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            <span className="label-tag">About Us</span>

            <h2
              className="font-serif font-semibold mb-4"
              style={{
                fontSize: "clamp(28px, 3.4vw, 42px)",
                lineHeight: 1.08,
                color: "var(--text)",
              }}
            >
              VVJ{" "}
              <span style={{ color: "var(--emerald-mid)" }}>International</span>
              <br />
              <em className="italic" style={{ color: "var(--gold)" }}>
                & Logistics
              </em>
            </h2>

            <p
              className="text-[14px] leading-relaxed mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              VVJ International & Logistics is a premier agricultural export house,
              proudly backed by the legacy of the Jeyaraj family. We are engaged in
              trading and marketing of premium agricultural produce — onion, peanut,
              peanut candy and India&apos;s finest mango varieties.
            </p>

            <p
              className="text-[14px] leading-relaxed mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              We are B2B traders, highly specialized in bulk agricultural exports.
              Our network spans across Asia, the Middle East and Africa. We maintain
              strict quality standards and distribute to institutional buyers,
              manufacturers and exporters worldwide.
            </p>

            {/* Highlights */}
            <ul className="space-y-2.5 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <CheckCircle2
                    size={15}
                    style={{ color: "var(--emerald-mid)", flexShrink: 0 }}
                  />
                  <span
                    className="text-[12px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {h}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bottom row */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/about" className="btn-primary">
                Read More
                <ArrowRight size={14} />
              </Link>

              {/* Call to ask */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ background: "var(--emerald-dim)" }}
                >
                  <Phone size={14} style={{ color: "var(--emerald-mid)" }} />
                </div>
                <div>
                  <div
                    className="text-[9px] tracking-[2px] uppercase mb-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Call to ask any question
                  </div>
                  <div
                    className="text-[13px] font-medium"
                    style={{ color: "var(--text)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    +91 XXXXX XXXXX
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
