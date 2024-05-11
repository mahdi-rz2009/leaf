/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        green:"#73895D",
        gray: "#A3A3A3",
      },
      fontFamily:{
        Poppins: "Poppins",
      }
    },
  },
  plugins: [],
}

