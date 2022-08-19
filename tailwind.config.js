/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors:{
        green:{
          DEFAULT:'#00f260'
        }
      }
    },
  },
  plugins: [],
}
