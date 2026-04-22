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
        brand: {
          DEFAULT: "#AB43D0",
          dark: "#8B2DB0",
          deep: "#6A1A8A",
          mid: "#C96EE8",
          light: "#F5E6FC",
          bg: "#FAF5FF",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(171, 67, 208, 0.2)",
      },
      borderRadius: {
        xl: "0.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
