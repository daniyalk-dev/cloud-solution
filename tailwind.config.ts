import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-switzer)'],
        mono: ['var(--font-geist)'],
      },
      colors: {
        stroke: "#c4c7cB",
        textPrimary: "#121216",
        textSecondary: "#313846"
      },
    },
  },
  plugins: [],
} satisfies Config;
