/** @type {import('tailwindcss').Config} */

// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      colors: { pizza: "#e2e" },
      fontSize: { huge: ["80rem", { lineHeight: "1" }] },
    },
  },
  plugins: [],
};
