/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poiret: ['"Poiret One"', "serif"],
        lexend: ['"Lexend"', "serif"],
      },
    },
  },
  plugins: [],
};
