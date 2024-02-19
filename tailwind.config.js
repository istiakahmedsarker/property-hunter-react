/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode:"class",
  theme: {
    
    extend: {
      colors:{
        'primary-light': "#076aa5",
        'secondary-light':"#f3f5ff",
        'in-light': "#f9faff",
        'primary-dark': "#011724",
        'card-dark':"#0d0d0d",
        'in-dark': "white"
      },
    },
  },
  plugins: [require('daisyui')],
};
