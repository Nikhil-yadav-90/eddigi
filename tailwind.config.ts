import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
      sm: '0px', // Set `sm` to 0 so it's always active
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      },
      fontFamily:{
        sans: ['var(--font-sora)', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
