"use client";

import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, TrendingUp, Globe, Package, ShieldCheck } from "lucide-react";
import { motion, useInView, animate } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctrl = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => ctrl.stop();
  }, [inView, target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { icon: TrendingUp,   num: 15,  suffix: "+", label: "Years of Trade"    },
  { icon: Globe,        num: 12,  suffix: "+", label: "Export Markets"    },
  { icon: Package,      num: 4,   suffix: "",  label: "Premium Products"  },
  { icon: ShieldCheck,  num: 100, suffix: "%", label: "Quality Certified" },
];

const contactInfo = [
  { icon: Phone,  value: "+91 XXXXX XXXXX",          label: "Call Us"  },
  { icon: Mail,   value: "info@vvjexports.com", label: "Email Us" },
  { icon: MapPin, value: "Tamil Nadu, India",         label: "Location" },
];

export default function StatsBar() {
  return (
    <>
      {/* ── Top contact info bar (UMA style) ── */}
      <div
        style={{
          background: "var(--surface-2)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="max-content flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-0"
          style={{ padding: "14px 5%" }}
        >
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3">
                {/* Divider */}
                {i > 0 && (
                  <div
                    className="hidden sm:block w-px h-6 mx-4"
                    style={{ background: "var(--border)" }}
                  />
                )}
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ background: "var(--emerald-dim)", border: "1px solid var(--emerald-border)" }}
                >
                  <Icon size={13} style={{ color: "var(--emerald-mid)" }} />
                </div>
                <div>
                  <div
                    className="text-[9px] tracking-[2px] uppercase"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-[12px] font-medium"
                    style={{ color: "var(--text)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Stats counter bar ── 
      <div
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-content grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="stat-item flex flex-col items-center"
              >
                <Icon
                  size={18}
                  className="mb-3"
                  style={{ color: "var(--emerald-mid)", opacity: 0.7 }}
                />
                <span
                  className="font-serif font-bold block leading-none mb-2"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "var(--emerald-mid)" }}
                >
                  <Counter target={stat.num} suffix={stat.suffix} />
                </span>
                <span
                  className="text-[10px] tracking-[2px] uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
        
      </div>
      */}
    </>
  );
}
