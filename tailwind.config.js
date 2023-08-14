/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        shimmer: "url('../public/images/shimmer.png')",
        frame: "url('../public/images/yellowFrame.svg')",
        cadetsLoadingPlaceholder: "url('../public/images/silhouette.png')",
      },
      fontFamily: {
        cyber: ["var(--orbitron)"],
      },
      keyframes: {
        panImage: {
          "0%": {
            transform: "scale(1) translate(-2%, 12%)",
          },

          "20%": {
            transform: "scale(1) translate(20%, 12%)",
          },

          "20.0001%": {
            /* -- View 2 -- */ transform: "scale(1) translate(12%, -12%)",
          },

          "40%": {
            transform: "scale(1) translate(12%, 5%)",
          },

          "40.0001%": {
            /* -- View 3 -- */ transform: "scale(1) translate(20%, 12%)",
          },

          "60%": {
            transform: "scale(1) translate(-24%, -13%)",
          },

          "60.0001%": {
            /* -- View 4 -- */ transform: "scale(1) translate(20%, -45%)",
          },

          "80%": {
            transform: "scale(1) translate(-2%, -45%)",
          },

          "80.0001%": {
            /* -- View 5 -- */ transform: "scale(1) translate(0%, 0%)",
          },

          "100%": {
            transform: "scale(1) translate(18%, -14%)",
          },
        },
      },
      animation: {
        camera: "panImage 40s linear infinite",
        slideUp: "slideUp 0.5s",
      },
      slideUp: {
        from: { transform: "translateY(100%)" },
        to: { transform: "translateY(0)" },
      },
    },
  },
  plugins: [],
};
