/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '150': '37.5rem',
      }, 
      width: {
        '128': '32rem',
      },
      container: {
        center: true
      },
      fontFamily: {
        'sans': ['Verdana', 'sans-serif',]
      },
      fontSize: {
        '3xl': '1.775rem',
      }
    },
  },
  plugins: [],
}
