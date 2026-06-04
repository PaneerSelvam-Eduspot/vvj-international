"use client";

import { motion } from "framer-motion";

const certs = ["IEC Registered", "APEDA", "FSSAI", "Phytosanitary Support", "Fumigation Docs"];

export default function CertificationsStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-950 px-[5%] py-12">
      <div className="max-content flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="m-0 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">
            Trade Readiness
          </p>
          <h2 className="mt-2 font-sans text-xl font-semibold text-white">
            Documentation and compliance signals for import buyers.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {certs.map((cert, i) => (
            <motion.span
              key={cert}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-full border border-white/14 bg-white/6 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-200"
            >
              {cert}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
