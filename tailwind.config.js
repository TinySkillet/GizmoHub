/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#fed2cd',
        'secondary':'#f3e5d8',
        'primary-dark': '#3E4650',
        'primary-white': '#fdfaf7',
        'secondary-white': '#ffeeec', 
      },
      fontFamily: {
        'heading': ['Laila', 'sans-serif'],
        'content': ['Nunito', 'sans-serif'],
        'navigation': ['Andika', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}

