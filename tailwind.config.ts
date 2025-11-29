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
        background: "var(--background)",
        foreground: "var(--foreground)",
        olive: {
          50: '#f4f7f2',
          100: '#e6efe0',
          200: '#cddfc3',
          300: '#a6c69c',
          400: '#7aa66f',
          500: '#58884d',
          600: '#436c3a',
          700: '#365630',
          800: '#2d4529',
          900: '#263923',
        },
        earth: {
          50: '#fbf7f4',
          100: '#f5ede6',
          200: '#ebdccf',
          300: '#dec2ad',
          400: '#ce9f82',
          500: '#c0805c',
          600: '#b36646',
          700: '#955038',
          800: '#7b4332',
          900: '#64392c',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f5ebd8',
          300: '#eddbb8',
          400: '#e4c593',
          500: '#dbad70',
          600: '#ce9056',
          700: '#ab7243',
          800: '#8d5c3b',
          900: '#724b33',
        },
      },
    },
  },
  plugins: [],
};
export default config;

// Force Tailwind rebuild
