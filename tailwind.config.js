/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif']
      },
      height: {
        screen: '100dvh'
      },
      colors: {
        primary: '#2C74B3',
        secondary: '#595959',
        cardBg: '#EEEEEE',
        blackText: '#000000',
        whiteText: '#FFFFFF'
      }
    }
  },
  plugins: []
}
