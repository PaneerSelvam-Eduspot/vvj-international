"use client";

import { motion } from "framer-motion";
import { Boxes, ClipboardCheck, Handshake, PackageCheck, Route, Sprout } from "lucide-react";

const advantages = [
  {
    icon: Sprout,
    title: "Direct Sourcing",
    text: "Direct farm-gate procurement from India's agricultural heartlands.",
  },
  {
    icon: PackageCheck,
    title: "Uncompromising Quality",
    text: "Dual-layer internal quality checks prior to container loading.",
  },
  {
    icon: Route,
    title: "End-to-End Logistics",
    text: "Seamless domestic shipping and multimodal freight management from processing yard to destination port.",
  },
  {
    icon: ClipboardCheck,
    title: "Absolute Transparency",
    text: "Clear documentation, real-time tracking milestones, and strict trade compliance.",
  },
  {
    icon: Boxes,
    title: "Custom Packaging",
    text: "Flexible bulk packing configurations matching country-specific import guidelines.",
  },
  {
    icon: Handshake,
    title: "Customer-Centric Execution",
    text: "Dedicated account managers catering to diverse time zones.",
  },
];

export default function WhyVVJ() {
  return (
    <>
      {/* BEGIN: VVJ Advantage Section */}
      <section id="advantage" className="bg-white">
      <div className="max-content section-padding">
        <div className="mb-12 max-w-3xl">
          <span className="label-tag">The VVJ Advantage</span>
          <h2 className="heading-lg mt-5">Six operating principles behind every shipment.</h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="bg-white p-7 transition-all duration-300 hover:bg-slate-50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-emerald-100 bg-emerald-50 text-emerald-700">
                  <Icon size={24} strokeWidth={1.6} />
                </div>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
      </section>
      {/* END: VVJ Advantage Section */}
    </>
  );
}
