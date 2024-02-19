/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#1476ff',
        'secondary-light': '#f3f5ff',
        'in-light': '#f9faff',
        'primary-dark': '#19181e',
        'secondary-dark': '#cfa55b',
        'in-dark': '#a8a8a9',
      },
    },
  },
  plugins: [require('daisyui')],
};
