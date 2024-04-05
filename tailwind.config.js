/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#9de045",
        "secondary": "#0e2031",
        "tertiary": "#57802E",
      }
    },
  },
  plugins: [],
}