/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        kumbh: "'Kumbh Sans', sans-serif"
      },
      colors:{
        primary: "#FF7D1A",
        semiGray: '#848589',
      }
    },
  },
  plugins: [],
}
