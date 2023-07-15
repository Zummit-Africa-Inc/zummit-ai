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
        adornment: "url('/images/hero-adornment.png')",
        "startup-1": "url('/images/startup-1.png')",
        "startup-2": "url('/images/startup-2.png')",
        "startup-3": "url('/images/startup-3.png')",
        "what": "url('/images/what.png')",
      },
      colors: {
        primary: '#081F4A',
        secondary: '#FFEA00',
      }
    },
  },
  plugins: [],
}

