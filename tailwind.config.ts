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
        // Design System Center Fitness
        brand: "#2a2f47", // Botoes CTA, cabecalhos (H1/H2) e navegacao primaria
        ink: "#000000", // Texto de corpo (maximo contraste, WCAG AA)
        muted: "#999999", // Bordas sutis, placeholders e divisores (nao-critico)
        surface: "#ffffff", // Fundo principal
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      lineHeight: {
        // Altura de linha fixada em 150% para paragrafos
        relaxed: "1.5",
      },
      boxShadow: {
        cta: "0 4px 14px rgba(42, 47, 71, 0.25)",
        "cta-hover": "0 8px 24px rgba(42, 47, 71, 0.35)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
