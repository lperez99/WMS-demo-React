// tailwind.config.js
module.exports = {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
       colors: {
         blueBar: '#446FEB',
         buttons: "#B592EB",
         headTable1: "#CA76EB",
         headTable2: "#B592EB"
       },
       fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
     },
  },
  plugins: [],
 }
 
