"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    badge:    "Welcome to VVJ International",
    title:    "Delivering India's Finest Produce",
    subtitle: "To The World",
    desc:     "A trusted B2B export partner for premium agricultural commodities — onion, peanut, peanut candy and India&apos;s finest mangoes. From farm to freight, with integrity.",
    cta:      { label: "More About Us", href: "/about" },
    cta2:     { label: "Our Products",  href: "/products" },
    bg:       "radial-gradient(ellipse 120% 80% at 70% 40%, rgba(45,106,79,0.25) 0%, transparent 65%), radial-gradient(ellipse 60% 60% at 10% 80%, rgba(201,168,76,0.06) 0%, transparent 60%)",
  },
  {
    id: 2,
    badge:    "Premium Agricultural Exports",
    title:    "The Best",
    subtitle: "Agricultural Products",
    desc:     "Onion, Peanut, Peanut Candy, Mango — sourced from India&apos;s finest growing regions, certified and shipped globally.",
    cta:      { label: "Explore Products", href: "/products" },
    cta2:     { label: "Global Reach",     href: "/exports" },
    bg:       "radial-gradient(ellipse 100% 80% at 30% 60%, rgba(45,106,79,0.2) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 90% 20%, rgba(201,168,76,0.07) 0%, transparent 60%)",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background layer ── */}
      <div className="absolute inset-0" style={{ background: "var(--bg)" }} />

      <div className="absolute inset-0 opacity-25">
        <Image
          src="https://source.unsplash.com/1920x1280/?agriculture,export,warehouse"
          alt="Agricultural export logistics"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* ── Animated bg gradient per slide ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id + "-bg"}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{ background: slide.bg }}
        />
      </AnimatePresence>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 bg-grid"
        style={{
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)",
          opacity: 0.6,
        }}
      />

      {/* ── Decorative circles ── */}
      <div
        className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(82,183,136,0.06)",
          background: "radial-gradient(circle, rgba(45,106,79,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-[5%] top-[5%] w-[400px] h-[400px] rounded-full pointer-events-none float-slow"
        style={{ border: "1px solid rgba(201,168,76,0.06)" }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center px-[5%] pt-28 pb-20">
        <div className="max-content w-full">
          <div className="max-w-3xl">

            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-badge"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-7"
                style={{
                  padding: "8px 20px",
                  border: "1px solid var(--emerald-border)",
                  background: "var(--emerald-dim)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full pulse-dot"
                  style={{ background: "var(--emerald-mid)" }}
                />
                <span
                  className="text-[10px] tracking-[3px] uppercase"
                  style={{ color: "var(--emerald-mid)" }}
                >
                  {slide.badge}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-title"}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, delay: 0.05 }}
              >
                <h1
                  className="font-serif font-semibold mb-2"
                  style={{
                    fontSize: "clamp(48px, 7vw, 90px)",
                    lineHeight: 0.95,
                    letterSpacing: "-1.5px",
                    color: "var(--text)",
                  }}
                >
                  {slide.title}
                </h1>
                <h1
                  className="font-serif font-semibold italic mb-7"
                  style={{
                    fontSize: "clamp(48px, 7vw, 90px)",
                    lineHeight: 1.0,
                    letterSpacing: "-1.5px",
                    color: "var(--emerald-mid)",
                  }}
                >
                  {slide.subtitle}
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id + "-desc"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="text-[15px] leading-relaxed mb-10 max-w-xl"
                style={{ color: "var(--text-muted)" }}
              >
                {slide.desc}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-ctas"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="flex items-center gap-4 flex-wrap"
              >
                <Link href={slide.cta.href} className="btn-primary">
                  {slide.cta.label}
                  <ArrowRight size={14} />
                </Link>
                <Link href={slide.cta2.href} className="btn-outline">
                  {slide.cta2.label}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Slide indicators ── */}
      <div className="relative z-10 flex items-center gap-3 px-[5%] pb-14">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            className="relative overflow-hidden transition-all duration-300"
            style={{
              height: "2px",
              width: i === current ? "48px" : "24px",
              background: i === current ? "var(--emerald-mid)" : "rgba(255,255,255,0.15)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === current && (
              <motion.span
                className="absolute inset-y-0 left-0"
                style={{ background: "var(--gold)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5.5, ease: "linear" }}
                key={current}
              />
            )}
          </button>
        ))}
        <span
          className="ml-3 text-[10px] tracking-[3px] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span
          className="text-[9px] tracking-[4px] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <div className="scroll-line" />
      </div>

      {/* ── Right side decorative text ── */}
      <div
        className="absolute right-[3%] top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10"
        style={{ writingMode: "vertical-rl" }}
      >
        <span
          className="text-[9px] tracking-[4px] uppercase"
          style={{ color: "rgba(82,183,136,0.3)" }}
        >
          India · Global Trade · Since Est.
        </span>
      </div>
    </section>
  );
}