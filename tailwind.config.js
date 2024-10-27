/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        mainShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
      },
      colors: {
        mainColor: '#FF6633'
      }
    },
  },
  plugins: [],
}

