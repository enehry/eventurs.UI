/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif']
    },
    height: {
      screen: '100dvh'
    },
    extend: {}
  },
  plugins: []
}
