"use client";

import { motion } from "framer-motion";

const certs = ["APEDA", "FSSAI", "IEC", "Spice Board", "FEIO", "ISO 9001"];

export default function CertificationsStrip() {
  return (
    <div className="bg-surface-2 border-y border-vvj-border py-12 px-[5%]">
      <p className="text-center text-[10px] tracking-[4px] uppercase text-vvj-muted mb-8">
        Trusted Certifications & Memberships
      </p>
      <div className="flex items-center justify-center flex-wrap gap-4 max-w-3xl mx-auto">
        {certs.map((cert, i) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="px-6 py-2.5 border border-vvj-border text-[11px] tracking-[2px] uppercase text-vvj-muted hover:border-emerald-border hover:text-emerald-mid transition-colors cursor-default"
          >
            {cert}
          </motion.div>
        ))}
      </div>
    </div>
  );
}