/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-gradient-card': '#133557',
        'blue-dark': '#1D2D44',
        'background-page-dark': '#0F121D',
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
  },
  plugins: [],
}
