/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: false,
  content: ["./src/**/*.{html,js,jsx}"],
  // content: ["./src/**/*.{js,jsx,ts,tsx"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '100%': { transform: 'translateX(-100%)' }
        },
        scroll2: {
          '100%': { transform: 'translateX(100%)' },
          '0%': { transform: 'translateX(0%)' },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        },
      },
      fontFamily: {
        'Gorditas': ['Gorditas'],
        'mons': ['Montserrat', 'sans-serif'],
        'outfit': ['Outfit'],
        'pop': ['Poppins'],
        'nu': ['Nunito Sans'],
        'int': ['Inter'],
      },
    },
    screens: {
      'xsm': { 'min': '320px', 'max': '480px' },
      'sm': { 'min': '721px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1500px', 'max': '1999px' },
      '2xl': { 'min': '2000px' },
    },
  },
  plugins: [],
}

