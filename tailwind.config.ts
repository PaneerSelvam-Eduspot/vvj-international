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
        bg:           "#0B1C14",
        surface:      "#112318",
        "surface-2":  "#163020",
        emerald:      "#2D6A4F",
        "emerald-mid":"#52B788",
        "emerald-light":"#B7E4C7",
        "emerald-dim": "rgba(45,106,79,0.15)",
        "emerald-border": "rgba(82,183,136,0.3)",
        gold:         "#C9A84C",
        "gold-light": "#E8C97A",
        "gold-dim":   "rgba(201,168,76,0.15)",
        "gold-border":"rgba(201,168,76,0.3)",
        "vvj-text":   "#F0F7F2",
        "vvj-muted":  "#7A9E8A",
        "vvj-border": "rgba(255,255,255,0.07)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-dm-sans)", "system-ui", "sans-serif"],
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