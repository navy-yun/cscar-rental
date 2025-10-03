import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans KR", "sans-serif"],
      },
      colors: {
        primary: "#326996",
        secondary: "#205cb7",
        dark: "#2f2f2f",
        yellow: {
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#5f5f5f",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      maxWidth: {
        '1500': '1500px',
      },
    },
  },
  plugins: [],
};

export default config;