/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Manrope', 'system-ui', 'sans-serif'] },
      colors: {
        forest: '#123D32',
        primary: '#1F6B50',
        mist: '#EAF3ED',
        sand: '#F4F0E6',
        ink: '#17251F',
        gold: '#C9A45C',
      },
    },
  },
  plugins: [],
}
