/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 640px) { ... }

      'tablet': '744px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      '4k':'1440px',
    },
    extend: {
      maxWidth: {
        'card': '355px',
      },
      colors:{
        'primary':"#788DEC",
        'secondary':'#363946',
        'darkgray':'#18181B'
      },
      fontFamily:{
        'poppins':'Poppins'
      }
    },
  },
  plugins: [],
}

