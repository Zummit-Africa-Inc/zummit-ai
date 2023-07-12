/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      dm: ['DM Sans', 'sans-serif'],
      work: ['Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#081F4A',
        secondary: '#FFEA00',
      }
    },
  },
  plugins: [],
}

