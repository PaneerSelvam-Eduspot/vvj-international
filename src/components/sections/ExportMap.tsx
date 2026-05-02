"use client";

import { motion } from "framer-motion";

const exportCountries = [
  "Sri Lanka", "Malaysia", "Bangladesh",
  "UAE", "Singapore", "Oman",
  "Qatar", "Djibouti", "Indonesia",
];

const importCountries = [
  "Canada", "Australia", "Myanmar", "Tanzania",
];

export default function ExportMap() {
  return (
    <section style={{ background: "var(--bg)" }}>
      <div className="max-content section-padding">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="label-tag">Why Choose Us?</span>
          <h2
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Exports /{" "}
            <span style={{ color: "var(--emerald-mid)" }}>Imports</span>
          </h2>
          <p
            className="text-[15px] mt-4 max-w-xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Our network is spread all over the world. We export India&apos;s finest
            agricultural produce and import select commodities for distribution
            across India.
          </p>
        </div>

        {/* Map + country list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* ── Country lists ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Exports */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "2rem",
              }}
            >
              <h3
                className="font-serif text-xl font-semibold mb-5"
                style={{ color: "var(--emerald-mid)" }}
              >
                Exports
              </h3>
              <ul>
                {exportCountries.map((c) => (
                  <li key={c} className="country-item">
                    <span style={{ color: "var(--text)" }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Imports */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "2rem",
              }}
            >
              <h3
                className="font-serif text-xl font-semibold mb-5"
                style={{ color: "var(--gold)" }}
              >
                Imports
              </h3>
              <ul>
                {importCountries.map((c) => (
                  <li
                    key={c}
                    className="country-item"
                    style={{ "--dot-color": "var(--gold)" } as React.CSSProperties}
                  >
                    <span style={{ color: "var(--text)" }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── SVG World Map ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "2rem",
              position: "relative",
            }}
          >
            {/* Map label */}
            <div
              className="absolute top-4 left-4 flex items-center gap-2"
              style={{ zIndex: 2 }}
            >
              <span
                className="text-[9px] tracking-[3px] uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                Global Reach
              </span>
            </div>

            {/* Legend */}
            <div className="absolute top-4 right-4 flex items-center gap-4" style={{ zIndex: 2 }}>
              <div className="flex items-center gap-2">
                <div style={{ width: "10px", height: "10px", background: "var(--emerald-mid)", borderRadius: "50%" }} />
                <span className="text-[9px] tracking-[2px] uppercase" style={{ color: "var(--text-muted)" }}>Export</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ width: "10px", height: "10px", background: "var(--gold)", borderRadius: "50%" }} />
                <span className="text-[9px] tracking-[2px] uppercase" style={{ color: "var(--text-muted)" }}>Import</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ width: "12px", height: "12px", background: "rgba(82,183,136,0.8)", borderRadius: "50%", border: "2px solid var(--emerald-mid)" }} />
                <span className="text-[9px] tracking-[2px] uppercase" style={{ color: "var(--text-muted)" }}>Origin</span>
              </div>
            </div>

            <svg
              viewBox="0 0 900 480"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", height: "auto", display: "block", marginTop: "2rem" }}
            >
              {/* Ocean bg */}
              <rect width="900" height="480" fill="transparent" />

              {/* ── Continents ── */}
              {/* North America */}
              <path d="M75 55 L185 48 L210 88 L205 150 L185 195 L155 215 L120 205 L85 170 L62 128 Z"
                fill="rgba(82,183,136,0.07)" stroke="rgba(82,183,136,0.2)" strokeWidth="0.8" />
              {/* Greenland */}
              <path d="M190 25 L240 20 L255 45 L235 65 L195 60 Z"
                fill="rgba(82,183,136,0.05)" stroke="rgba(82,183,136,0.15)" strokeWidth="0.8" />
              {/* South America */}
              <path d="M145 240 L200 228 L225 268 L235 345 L215 410 L180 420 L148 385 L130 310 Z"
                fill="rgba(82,183,136,0.07)" stroke="rgba(82,183,136,0.2)" strokeWidth="0.8" />
              {/* Europe */}
              <path d="M365 38 L460 32 L478 72 L465 118 L410 130 L368 108 L348 72 Z"
                fill="rgba(82,183,136,0.07)" stroke="rgba(82,183,136,0.2)" strokeWidth="0.8" />
              {/* Africa */}
              <path d="M370 148 L452 135 L485 178 L498 268 L475 365 L432 405 L390 395 L355 330 L340 225 L352 178 Z"
                fill="rgba(82,183,136,0.07)" stroke="rgba(82,183,136,0.2)" strokeWidth="0.8" />
              {/* Russia */}
              <path d="M462 28 L790 18 L808 78 L670 95 L560 90 L468 78 Z"
                fill="rgba(82,183,136,0.06)" stroke="rgba(82,183,136,0.15)" strokeWidth="0.8" />
              {/* Middle East — HIGHLIGHTED (export dest) */}
              <path d="M490 115 L568 108 L590 148 L578 195 L532 205 L498 182 L480 148 Z"
                fill="rgba(82,183,136,0.2)" stroke="rgba(82,183,136,0.5)" strokeWidth="1" />
              {/* India — SOURCE (bright) */}
              <path d="M592 128 L648 118 L672 152 L684 202 L660 248 L628 270 L598 238 L578 195 L582 158 Z"
                fill="rgba(82,183,136,0.45)" stroke="rgba(82,183,136,0.9)" strokeWidth="1.5" />
              {/* India label */}
              <text x="630" y="175" textAnchor="middle" fill="rgba(82,183,136,0.9)" fontSize="9"
                fontFamily="system-ui" letterSpacing="2">INDIA</text>
              {/* India center dot */}
              <circle cx="630" cy="192" r="5" fill="var(--emerald-mid)" />
              {/* India pulse ring */}
              <circle cx="630" cy="192" r="12" fill="none" stroke="rgba(82,183,136,0.3)" strokeWidth="1">
                <animate attributeName="r" values="8;18;8" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* SE Asia */}
              <path d="M688 168 L762 162 L782 200 L772 240 L740 252 L710 232 L692 200 Z"
                fill="rgba(82,183,136,0.18)" stroke="rgba(82,183,136,0.4)" strokeWidth="1" />
              {/* Sri Lanka */}
              <ellipse cx="648" cy="278" rx="9" ry="11"
                fill="rgba(82,183,136,0.35)" stroke="rgba(82,183,136,0.7)" strokeWidth="1" />
              {/* Bangladesh */}
              <ellipse cx="692" cy="178" rx="10" ry="9"
                fill="rgba(82,183,136,0.3)" stroke="rgba(82,183,136,0.6)" strokeWidth="1" />
              {/* Australia */}
              <path d="M718 308 L818 295 L852 345 L840 408 L782 425 L725 408 L698 362 Z"
                fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
              {/* Canada */}
              <path d="M75 55 L185 48 L195 80 L150 90 L80 82 Z"
                fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
              {/* East Africa — Djibouti */}
              <ellipse cx="488" cy="245" rx="7" ry="7"
                fill="rgba(82,183,136,0.25)" stroke="rgba(82,183,136,0.5)" strokeWidth="1" />

              {/* ── Export route lines from India ── */}
              {/* India → UAE */}
              <line x1="630" y1="192" x2="535" y2="152"
                stroke="rgba(82,183,136,0.4)" strokeWidth="1" strokeDasharray="5 4" />
              {/* India → Sri Lanka */}
              <line x1="630" y1="192" x2="648" y2="272"
                stroke="rgba(82,183,136,0.4)" strokeWidth="1" strokeDasharray="5 4" />
              {/* India → SE Asia */}
              <line x1="630" y1="192" x2="728" y2="208"
                stroke="rgba(82,183,136,0.4)" strokeWidth="1" strokeDasharray="5 4" />
              {/* India → Bangladesh */}
              <line x1="630" y1="192" x2="692" y2="180"
                stroke="rgba(82,183,136,0.35)" strokeWidth="1" strokeDasharray="4 4" />
              {/* India → Djibouti */}
              <line x1="630" y1="192" x2="490" y2="244"
                stroke="rgba(82,183,136,0.3)" strokeWidth="1" strokeDasharray="5 5" />
              {/* India → Australia */}
              <line x1="630" y1="192" x2="775" y2="355"
                stroke="rgba(82,183,136,0.25)" strokeWidth="1" strokeDasharray="6 5" />

              {/* ── Import route lines (gold) ── */}
              {/* Canada → India */}
              <path d="M130 70 Q400 -20 630 192"
                fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1" strokeDasharray="6 5" />
              {/* Australia → India */}
              <line x1="780" y1="355" x2="630" y2="192"
                stroke="rgba(201,168,76,0.25)" strokeWidth="1" strokeDasharray="5 5" />

              {/* ── Destination dots ── */}
              <circle cx="535" cy="152" r="4" fill="var(--emerald-mid)" opacity="0.8" />
              <circle cx="728" cy="208" r="4" fill="var(--emerald-mid)" opacity="0.8" />
              <circle cx="490" cy="244" r="4" fill="var(--emerald-mid)" opacity="0.7" />
              <circle cx="775" cy="355" r="4" fill="var(--gold)" opacity="0.7" />
              <circle cx="130" cy="70"  r="4" fill="var(--gold)" opacity="0.7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}