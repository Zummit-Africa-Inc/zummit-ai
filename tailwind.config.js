/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      dm: ['DM Sans', 'sans-serif'],
      work: ['Work Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        ellipse: "url('/ellipse.svg')",
      },
      colors: {
        primary: '#081F4A',
        secondary: '#FFEA00',
      }
    },
  },
  plugins: [],
}

