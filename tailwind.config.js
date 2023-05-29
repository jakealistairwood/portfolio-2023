/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aloha': ['Aloha', 'sans-serif']
      },
      zIndex: {
        "negative": -1,
        "max": 1000
      }
    },
  },
  plugins: [],
}

