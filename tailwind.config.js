/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        primry: "Inter",
      },
      screens:{
        'mob':'810px',
        'tab':'1000px'
      }
    },
  },
  plugins: [],
};
