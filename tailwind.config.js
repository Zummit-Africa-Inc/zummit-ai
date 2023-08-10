/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
      work: ["Work Sans", "sans-serif"],
    },
    extend: {
      animation: {
        dash: "dash 1s ease-in-out infinite",
      },
      backgroundImage: {
        ellipse: "url('/ellipse.svg')",
        adornment: "url('/images/hero-adornment.png')",
        "startup-1": "url('/images/startup-1.png')",
        "startup-2": "url('/images/startup-2.png')",
        "startup-3": "url('/images/startup-3.png')",
        "what": "url('/images/what.png')",
      },
      colors: {
        primary: "#081F4A",
        secondary: {
          100: "#FFEA00",
          200: "#FBC93D",
        },
        ash: {
          100: "#AFAFAF",
          200: "#616161",
          300: "#333",
        }
      },
      keyframes: {
        dash: {
          "0%": {
            strokeDasharray: "1, 200",
            strokeDashoffset: 0,
          },
          "50%": {
            strokeDasharray: "90, 200",
            strokeDashoffset: "-35px",
          },
          "100%": {
            strokeDashoffset: "-125px",
          },
        },
      },
      transitionTimingFunction: {
        "width": "width cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
}

