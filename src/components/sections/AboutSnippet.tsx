"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ClipboardCheck, ShipWheel } from "lucide-react";

const highlights = [
  "Peanut candy production expertise",
  "Bulk B2B commodity supply",
  "Domestic and global shipping support",
  "Export documentation support",
];

export default function AboutSnippet() {
  return (
    <>
      {/* BEGIN: About & Legacy Section */}
      <section id="about" className="bg-white">
      <div className="max-content section-padding">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.86fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
              <Image
                src="/images/onion.jpg"
                alt="Indian agricultural cultivation for export sourcing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 430px"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06)_0%,rgba(15,23,42,0.58)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-md border border-white/16 bg-white/92 p-5 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <ShipWheel className="mt-1 flex-none text-emerald-700" size={22} />
                  <div>
                    <p className="m-0 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      Logistics Led Trade
                    </p>
                    <p className="m-0 mt-1 text-sm font-semibold leading-6 text-slate-950">
                      Sourcing, packing, documents, domestic shipping, freight, and buyer updates handled as one workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            <span className="label-tag">About VVJ</span>
            <h2 className="heading-lg mt-5 max-w-3xl">VVJ International & Logistics</h2>
            <p className="mt-6 max-w-2xl text-base">
              Based in Kovilpatti, Tamil Nadu, VVJ International & Logistics is an established merchant exporter
              specializing in premium agricultural commodities, food products, and traditional peanut candy.
            </p>
            <p className="mt-4 max-w-2xl text-base">
              As an APEDA-registered enterprise, we bridge the gap between India&apos;s rich agricultural sectors
              and commercial buyers, offering end-to-end domestic shipping, international supply chain, and
              shipment management.
            </p>
            <p className="mt-4 max-w-2xl text-base">
              Our foundational expertise in the food sector dates back to 1962, and today we translate that
              procurement, processing, and manufacturing background into the global trade landscape.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50">
                  <CheckCircle2 size={18} className="flex-none text-emerald-700" />
                  <span className="text-sm font-semibold text-slate-700">{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/about" className="btn-primary">
                Company Profile
                <ArrowRight size={15} />
              </Link>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <ClipboardCheck size={18} className="text-emerald-700" />
                Trade-ready compliance and paperwork
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
      {/* END: About & Legacy Section */}
    </>
  );
}
