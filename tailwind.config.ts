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
        covenant: {
          navy: {
            DEFAULT: "#071F41",
            dark: "#051630",
            light: "#102F58",
            surface: "#0A254D",
            subtle: "#1B3B6F",
          },
          gold: {
            DEFAULT: "#C79A3B",
            dark: "#B98A2E",
            light: "#DFB758",
            subtle: "rgba(199, 154, 59, 0.12)",
          },
          offwhite: "#F7F7F4",
          altbg: "#F4F5F6",
          charcoal: "#1E293B",
          muted: "#555B64",
          border: "#E8E9EA",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 8px -2px rgba(7, 31, 65, 0.05), 0 1px 4px -1px rgba(7, 31, 65, 0.03)",
        card: "0 10px 30px -5px rgba(7, 31, 65, 0.07), 0 4px 10px -2px rgba(7, 31, 65, 0.04)",
        elevated: "0 20px 40px -10px rgba(7, 31, 65, 0.12)",
        gold: "0 4px 20px -2px rgba(199, 154, 59, 0.25)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      opacity: {
        15: "0.15",
        85: "0.85",
        98: "0.98",
      },
    },
  },
  plugins: [],
};

export default config;
