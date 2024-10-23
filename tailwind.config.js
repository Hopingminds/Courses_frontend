/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: false,
  content: ["./src/**/*.{html,js,jsx}"],
  // content: ["./src/**/*.{js,jsx,ts,tsx"],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-slow-alter': 'float-slow-alter 6s ease-in-out infinite',
        'float-fast': 'float-fast 8s ease-in-out infinite',
        'float-rendom': 'float-rendom 6s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          "100%": { transform: "translateX(-100%)" },
        },
        scroll2: {
          "100%": { transform: "translateX(100%)" },
          "0%": { transform: "translateX(0%)" },
        },
        'float-slow': {
          '0%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        'float-slow-alter': {
          '0%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(10px)' },
        },
        'float-fast': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'float-rendom': {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
      fontFamily: {
        Gorditas: ["Gorditas"],
        mons: ["Montserrat", "sans-serif"],
        outfit: ["Outfit"],
        pop: ["Poppins"],
        nu: ["Nunito Sans"],
        int: ["Inter"],
      },
    },
    screens: {
      xsm: { min: "320px", max: "480px" },
      sm: { min: "481px", max: "720px" },
      md: { min: "721px", max: "1024px" },
      lg: { min: "1025px", max: "1599px" },
      xl: { min: "1600px", max: "1999px" },
      "2xl": { min: "2000px" },
      // fold: { min: "660px", max: "690px" },
    },
  },
  plugins: [],
};
