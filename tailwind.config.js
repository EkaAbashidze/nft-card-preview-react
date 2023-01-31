/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        mainbg: "hsl(217, 54%, 11%)",
        cardbg: "hsl(216, 50%, 16%)",
        line: "hsl(215, 32%, 27%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      outfit: ["Outfit, sans-serif"],
    },
    screens: {
      sm: { min: "375px", max: "767px" },
      md: { min: "768px", max: "1439px" },
      lg: { min: "1440px" },
    },
  },
  plugins: [],
};
