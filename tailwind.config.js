/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pa-green-light': '#8B8E69',
        'pa-green-dark': '#5B5E49',
        'pa-gold': '#D4982F',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-slower': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [],
}