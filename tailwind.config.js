import defaultTheme from 'tailwindcss/defaultTheme';

const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['"Noto Serif Georgian"', ...defaultTheme.fontFamily.serif],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require("tailwindcss-animate")],
};