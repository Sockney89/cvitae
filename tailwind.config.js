/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors:{
      primary: '#474747',
      primaryStrong: '#282828',
      secondary: {
        100: '#9b9b9b',
        200: '#8c8c8c',
      },
      onPrimary:"#e7e7e7",

    },
    extend: {
      fontFamily:{
        jersey:['"Jersey 15"',...fontFamily.sans],
        bruno :['"Bruno Ace SC"',...fontFamily.sans],
        squada:['"Squada One"',...fontFamily.sans],
      }
    },
  },
  plugins: [],
}

