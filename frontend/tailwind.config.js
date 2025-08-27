import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        [#5F6FFF]: "#5f6FFF", // 💙 your custom [#5F6FFF] color
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px, 1fr))", // 💡 dynamic grid layout
      },
    },
  },

  plugins: [],
}
