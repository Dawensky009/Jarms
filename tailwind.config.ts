import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // brand accent — the exact yellow from the Jarms logo background (#F1AC23).
        // `deep` is a darker amber tuned for accent text on light backgrounds.
        gold: {
          DEFAULT: "#F1AC23",
          deep: "#9C6A07",
          soft: "#F7C95A",
        },
        ink: {
          DEFAULT: "#14161D",
          soft: "#3C4150",
          muted: "#6B7180",
        },
        paper: "#F8F7F2", // warm off-white canvas
        mist: "#EFECE4", // warm light neutral (one step down from paper)
        night: {
          DEFAULT: "#0E1116",
          soft: "#171B22",
        },
        // accent colours for the "How it works" steps
        step: {
          violet: "#7C5CFF",
          green: "#22B07D",
          blue: "#3B82F6",
          pink: "#EC5C8D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-body)", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Space Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.6rem, 6.6vw, 5.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        section: ["clamp(2rem, 4vw, 3.4rem)", { lineHeight: "1.04", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        blink: "blink 1s steps(1) infinite",
      },
      transitionTimingFunction: {
        // strong ease-out — built-in CSS easings are too weak (Emil Kowalski)
        "out-strong": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
