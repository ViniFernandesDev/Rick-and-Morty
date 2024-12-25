/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        portalGreenLight: '#1EE48F',
        portalGreen: '#19A974',
        rickBlueLight: '#B7E4F9',
        rickBlue: '#247BA0',
        mortyYellow: '#F2D600',
        spaceBlack: '#10141E'
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        getSchwifty: ['getSchwifty', 'sans-serif']
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
        portalGlow: '3px 3px 10px #19A974'
      },
      dropShadow: {
        //prettier-ignore
        'portalGlow': '0 0 15px #19A974'
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'slide-up-and-fade':
          'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-and-fade':
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'overlay-show': 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'content-show': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  }
}
