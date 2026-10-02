/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#020014",
        lightBg: "#EEF1F4",
        silver1: "#C5CFD8",
        silver2: "#8C99A4",
        textLight: "#0A0A0A",
        mutedLight: "#6B7280",
      },
      fontFamily: {
        display: ['"Dela Gothic One"', '"Bowlby One SC"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
}