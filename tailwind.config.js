/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {

        'bg-lr': '#111111',
        'bt-log-1': '#5098CC',
        'bt-lr-2': '#D9D9D9',
        'bt-log-h-1': '#002A48',
        'bt-log-h-2': '#143751',
        'bt-text-log-h': '#C8B4B4',
        'bt-reg-1': '#3ACBBA',
        'bt-reg-h-1': '#05A04D',
        'bt-reg-h-2': '#7EECB0',
        'blue-gradient-card': '#133557',
        'blue-dark': '#1D2D44',
        'background-page-dark': '#0F121D',
        primary: '#0F121D',
        'button-blue': '#125D97',
        'button-purple': '#31085D',
        'button-green': '#0BD31F',
        'button-sky': '#351BD2',
      },
      spacing: {
        'card-width': '900px',
        'card-text-width': '600px',
        26: '6.5rem',
      },
      backgroundImage: {
        'rectangle-gradient': 'url(../src/assets/images/RectangleGradiend.png)',
      },
    },
    screens: {
      sm: '300px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',

      xl: '1280px',
    },
  },
  plugins: [],
}
