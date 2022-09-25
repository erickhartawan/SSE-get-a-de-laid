/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'primary': '#6c7cb9',// light blue
        'secondary':'#485da8',// deeper blue
        'tertiary': '#f59eb8', // pinkish
        'dark': '#383a3c', // greyish
        'white': '#ffffff' //white
      },
    },
  },
  plugins: [],
}
