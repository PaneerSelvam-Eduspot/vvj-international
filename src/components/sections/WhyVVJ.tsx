"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, Globe, FileText,
  Star, TrendingUp, Headphones,
} from "lucide-react";

const reasons = [
  {
    icon:  ShieldCheck,
    title: "Certified Quality",
    text:  "Every consignment is backed by APEDA, FSSAI and IEC certifications. Quality checks at source, during processing, and pre-shipment — non-negotiable.",
    num:   "01",
  },
  {
    icon:  Globe,
    title: "Reliable Logistics",
    text:  "End-to-end freight management — FCL, LCL and air freight. We coordinate customs clearance, phytosanitary certificates, and final-mile delivery.",
    num:   "02",
  },
  {
    icon:  FileText,
    title: "Documentation Integrity",
    text:  "Clean, audit-ready export documentation. Bills of lading, phytosanitary certificates and fumigation reports — all handled in-house.",
    num:   "03",
  },
  {
    icon:  Star,
    title: "Family Legacy",
    text:  "The Jeyaraj name has been synonymous with honest trade for decades. That legacy isn't a tagline — it's accountability built into every deal.",
    num:   "04",
  },
  {
    icon:  TrendingUp,
    title: "Competitive Pricing",
    text:  "Direct sourcing from farmers and processing units eliminates intermediary costs. Sharp, transparent B2B pricing passed forward to every buyer.",
    num:   "05",
  },
  {
    icon:  Headphones,
    title: "Dedicated Support",
    text:  "Your business gets a named contact, not a call queue. Real-time shipment updates, proactive issue resolution, post-delivery support.",
    num:   "06",
  },
];

export default function WhyVVJ() {
  return (
    <section style={{ background: "var(--bg)" }}>
      <div className="max-content section-padding">

        {/* Header */}
        <div className="mb-14">
          <span className="label-tag">Why Choose Us</span>
          <h2
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.05,
              color: "var(--text)",
            }}
          >
            The{" "}
            <em
              className="italic"
              style={{ color: "var(--emerald-mid)" }}
            >
              VVJ Advantage
            </em>
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1px", background: "var(--border)" }}
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="why-card"
              >
                {/* Ghost number */}
                <span
                  className="absolute top-6 right-6 font-serif font-bold leading-none pointer-events-none"
                  style={{
                    fontSize: "72px",
                    color: "var(--emerald-mid)",
                    opacity: 0.05,
                  }}
                >
                  {r.num}
                </span>

                {/* Icon */}
                <Icon
                  size={36}
                  strokeWidth={1}
                  style={{ color: "var(--emerald-mid)", marginBottom: "24px" }}
                />

                {/* Title */}
                <h3
                  className="font-serif font-semibold mb-3"
                  style={{ fontSize: "20px", color: "var(--text)" }}
                >
                  {r.title}
                </h3>

                {/* Text */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {r.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}