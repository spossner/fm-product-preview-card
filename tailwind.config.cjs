/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        aquamarine: "hsl(158, 36%, 37%)",
        "dark-aquamarine": "hsl(157, 43%, 18%)",
        cream: "hsl(30, 38%, 92%)",
        gunmetal: "hsl(212, 21%, 14%)",
        "aurometal-saurus": "hsl(228, 12%, 48%)",
      },
    },
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      serif: ["Fraunces", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      base: ["0.875rem"],
      "product-lg": ["2rem", "2rem"],
      product: ["0.875rem", "1.4375rem"],
    },
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
