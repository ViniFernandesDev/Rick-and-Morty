/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blackSpace: '#000000',
        yellowJedi: '#FFE81F',
        blueHolo: '#00BFFF',
        redSith: '#FF3C3C',
        grayText: '#B3B3B3',
        grayImperial: '#333333',
        grayMedium: '#666666',
        grayLight: '#CCCCCC'
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        starWars: ['StarWars', 'sans-serif']
      },
      fontSize: {
        lg: '1.5rem',
        base: '1rem',
        sm: '0.875rem',
        xl: '2.5rem'
      },
      backgroundImage: {
        stars: "url('assets/background_stars.jpg')"
      },
      boxShadow: {
        jedi: '3px 3px 10px #c9b037'
      }
    }
  },
  plugins: []
}
