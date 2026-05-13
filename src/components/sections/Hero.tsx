"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import shipHeroImage from "../../../public/images/ship.jpg";

const heroStats = [
  { value: "25+", label: "Trade Lanes" },
  { value: "48h", label: "Freight Ready" },
  { value: "B2B", label: "Export Partner" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--bg)" }} />

      
      <div className="absolute inset-0">
        <Image
          src={shipHeroImage}
          alt="Cargo ship loaded with containers at a seaport"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center saturate-[0.92] contrast-110"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.74)_34%,rgba(5,5,5,0.28)_70%,rgba(5,5,5,0.16)_100%),linear-gradient(180deg,rgba(5,5,5,0.26)_0%,rgba(5,5,5,0.42)_54%,rgba(5,5,5,0.92)_100%)]" />
      <div className="absolute inset-0 bg-grid opacity-35" />
      <div className="absolute inset-x-[5%] top-28 h-px bg-[linear-gradient(90deg,rgba(201,168,76,0.5),transparent_64%)]" />
      <div className="absolute bottom-24 right-[5%] hidden h-[42vh] w-px bg-[linear-gradient(180deg,transparent,rgba(201,168,76,0.42),transparent)] lg:block" />

      <div className="relative z-10 flex min-h-screen items-end px-[5%] pb-28 pt-36 lg:items-center lg:pb-20">
        <div className="max-content w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div
              className="mb-7 inline-flex items-center gap-3 border px-5 py-2"
              style={{
                borderColor: "var(--emerald-border)",
                background: "rgba(5,5,5,0.42)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ background: "var(--gold)" }} />
              <span className="text-[9px] uppercase tracking-[2.5px]" style={{ color: "var(--gold)" }}>
                VVJ International & Logistics
              </span>
            </div>

            <h1
              className="font-serif font-medium"
              style={{
                color: "var(--text)",
                fontSize: "clamp(36px, 5vw, 76px)",
                letterSpacing: "0",
                lineHeight: 1,
                textWrap: "balance",
              }}
            >
              Delivering India&apos;s Produce
              <span className="block italic" style={{ color: "var(--gold)" }}>
                Across Global Seas
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[14px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Premium agricultural exports backed by disciplined sourcing, documentation, and freight coordination
              for buyers across international markets.
            </p>

            <div className="mt-10 mb-5 flex flex-wrap items-center gap-4">
              <Link href="/products" className="btn-primary">
                Our Products
                <ArrowRight size={14} />
              </Link>
              <Link href="/exports" className="btn-outline">
                Export Reach
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-4 left-[5%] right-[5%] z-10 hidden items-center justify-between gap-8 border-t border-[rgba(201,168,76,0.22)] lg:flex"
      >
        {/* 
        <div className="grid grid-cols-3 gap-8">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-2xl leading-none" style={{ color: "var(--gold)" }}>
                {stat.value}
              </div>
              <div className="mt-2 text-[9px] uppercase tracking-[2.4px]" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
       */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <span className="text-[9px] uppercase tracking-[4px]" style={{ color: "var(--text-muted)" }}>
            Scroll
          </span>
          <div className="scroll-line" />
        </div>
      </motion.div>
      
    </section>
  );
}
