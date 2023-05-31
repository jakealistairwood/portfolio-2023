/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'accent': '#D8FF69'
      },
      fontFamily: {
        'aloha': ['Aloha', 'sans-serif']
      },
      zIndex: {
        "negative": -1,
        "max": 1000
      },
      screens: {
        'xxl': '1980'
      }
    },
  },
  plugins: [],
}

