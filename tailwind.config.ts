import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        "bg-alt": "#0A0A0A",
        fg: "#FFFFFF",
        "fg-muted": "rgba(255,255,255,0.62)",
        cyan: "#55F1EF",
        line: "rgba(255,255,255,0.14)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(.2,.7,.3,1) forwards",
        "float-slow": "floatSlow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
