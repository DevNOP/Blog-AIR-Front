/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-gradient-card': '#133557',
        'blue-dark': '#1D2D44',
        'primary': '#0F121D',
        'button-blue': '#125D97',
        'button-purple': '#31085D',
        'button-green': '#0BD31F',
        'button-sky': '#351BD2',
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
