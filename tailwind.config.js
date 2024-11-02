/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary :"#ffe4e0",
        secondary:"#c0908c",
        secondary2 :'#0057ae'
      },
      fontFamily:{
        playfair:['"Playfair Display"'],
      }
    },
  },
  plugins: [],
}

