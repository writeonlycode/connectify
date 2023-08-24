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
        primary: {
          300: "#4DD969",
          400: "#28CD56",
        },
        secondary: "#919191",
        dark: "#1A1B23",
      },
    },
  },
  plugins: [],
};
export default config;
