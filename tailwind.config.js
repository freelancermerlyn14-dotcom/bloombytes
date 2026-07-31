/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F8CFF",
          glow: "#7FADFF",
          dim: "#3A6BD9",
        },
        background: "#0B0F19",
        surface: {
          DEFAULT: "#151B2D",
          raised: "#1B2338",
        },
        ink: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
          faint: "#64748B",
        },
        bloom: "#34D399",
        border: {
          DEFAULT: "rgba(248,250,252,0.08)",
          hover: "rgba(248,250,252,0.16)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-lg": ["3.25rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,140,255,0.16), transparent 70%)",
        "primary-gradient": "linear-gradient(135deg, #4F8CFF 0%, #7FADFF 50%, #34D399 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(79,140,255,0.15), 0 8px 40px -8px rgba(79,140,255,0.35)",
        card: "0 1px 0 rgba(248,250,252,0.04), 0 24px 48px -24px rgba(0,0,0,0.6)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "spin-slow": "spin 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
