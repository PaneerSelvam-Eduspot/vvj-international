import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:           "#FFFFFF",
        surface:      "#F8FAFC",
        "surface-2":  "#EEF4F1",
        emerald:      "#065F46",
        "emerald-mid":"#15803D",
        "emerald-light":"#DFF3E8",
        "emerald-dim": "rgba(6,95,70,0.08)",
        "emerald-border": "rgba(6,95,70,0.18)",
        gold:         "#B08A3C",
        "gold-light": "#D8BD7A",
        "gold-dim":   "rgba(176,138,60,0.1)",
        "gold-border":"rgba(176,138,60,0.22)",
        "vvj-text":   "#0F172A",
        "vvj-muted":  "#475569",
        "vvj-border": "#E2E8F0",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":   "fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-dot": "pulseDot 2s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
