"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import shipHeroImage from "../../../public/images/ship.jpg";

export default function Hero() {
  return (
    <>
      {/* BEGIN: Hero Section */}
      <header id="home" className="relative min-h-[92vh] overflow-hidden bg-slate-950">
      <Image
        src={shipHeroImage}
        alt="Container vessel for international agricultural export shipments"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.94)_0%,rgba(15,23,42,0.82)_39%,rgba(15,23,42,0.32)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.2)_0%,rgba(15,23,42,0.24)_58%,rgba(15,23,42,0.76)_100%)]" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 flex min-h-[92vh] items-end px-[5%] pb-10 pt-32 lg:items-center lg:pb-0">
        <div className="max-content w-full">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.7fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-300 pulse-dot" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  India based export, domestic shipping and logistics partner
                </span>
              </div>

              <h1 className="heading-xl text-white">
                VVJ International
                <span className="block italic text-emerald-200">& Logistics</span>
              </h1>

              <p className="mt-3 text-sm italic text-emerald-200">Connecting Indian Agriculture with Global Markets</p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                Premium agricultural exports, domestic shipping, and dependable end-to-end global logistics,
                with strong expertise in traditional peanut candy. Certified by APEDA, FSSAI, and the Spices
                Board of India.
              </p>

              <div className="mt-9 mb-5 flex flex-wrap items-center gap-3">
                <Link href="/#inquire" className="btn-outline border-white bg-white/10 text-white transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-700 hover:text-white">
                  Request Latest FOB Prices
                  <ArrowRight size={16} />
                </Link>
                <Link href="/products" className="btn-outline border-white/30 bg-white/10 text-white transition-all duration-300 hover:border-white hover:bg-slate-100 hover:text-black">
                  Explore Product Catalog
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-[5%] z-10 hidden flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/60">Scroll</span>
        <div className="scroll-line" />
      </div>
      </header>

      {/* END: Hero Section */}
    </>
  );
}
