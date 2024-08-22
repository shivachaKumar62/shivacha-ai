/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['"Work+Sans"'],
      },
      letterSpacing: {
        36: "0.36em",
      },
      keyframes: {
        "slide-right-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-right-to-left": "slide-right-to-left 10s linear infinite",
      },
      opacity: {
        64: "0.64",
      },
      
    },
  },
  plugins: [],
};

