"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import { ShieldCheck, Globe, FileText, Star, TrendingUp, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    text: "Every consignment is backed by APEDA, FSSAI and IEC certifications. Quality checks at source, during processing, and pre-shipment — non-negotiable.",
    num: "01",
  },
  {
    icon: Globe,
    title: "Reliable Logistics",
    text: "End-to-end freight management — FCL, LCL and air freight. We coordinate customs clearance, phytosanitary certificates, and final-mile delivery.",
    num: "02",
  },
  {
    icon: FileText,
    title: "Documentation Integrity",
    text: "Clean, audit-ready export documentation. Bills of lading, phytosanitary certificates, CoO, and fumigation reports — all handled in-house.",
    num: "03",
  },
  {
    icon: Star,
    title: "Family Legacy",
    text: "The Jeyaraj name has been synonymous with honest trade for decades. That legacy isn't a tagline — it's accountability built into every deal.",
    num: "04",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    text: "Direct sourcing from farmers and processing units eliminates intermediary costs. Sharp, transparent B2B pricing passed forward to every buyer.",
    num: "05",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    text: "Your business gets a named contact, not a call queue. Real-time shipment updates, proactive issue resolution, post-delivery support.",
    num: "06",
  },
];

export default function WhyVVJ() {
  return (
    <section className="section-padding bg-bg">
      <div className="max-w-7xl mx-auto">
        <SectionTag>Why Choose Us</SectionTag>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold leading-tight mb-16">
          The <em className="italic text-emerald-mid">VVJ Advantage</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-vvj-border">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-surface p-10 overflow-hidden group"
              >
                {/* Ghost number */}
                <span className="absolute top-6 right-6 font-serif text-7xl font-bold text-emerald-mid opacity-[0.05] leading-none pointer-events-none">
                  {r.num}
                </span>

                <Icon
                  size={36}
                  strokeWidth={1}
                  className="text-emerald-mid mb-6"
                />
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {r.title}
                </h3>
                <p className="text-sm text-vvj-muted leading-relaxed">
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