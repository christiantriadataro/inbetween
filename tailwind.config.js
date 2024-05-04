/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary-black': '#0F0E13',
        'primary-yellow': '#EFAB53',
        'primary-gray': '#818085'
      },
      backgroundImage: {
        'gradient-180': 'linear-gradient(180deg, var(--tw-gradient-stops))'
      },

    },
  },
  plugins: [],
}