/** @type {import('tailwindcss').Config} */

// const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./project/website.html'],
  darkMode:'class',
  theme: {

   
    fontFamily:{
      vazir:['Vazir']
    },
    
    extend: {
      colors: {
        primary:'var(--primary-color)'
        
    },

 
  },
},
  plugins: []

  
}

