/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363"
      },
      fontSize: {
        mammoth: "8rem"
      }
    },
  },
  plugins: [],
}

