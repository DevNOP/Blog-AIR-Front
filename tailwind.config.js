/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-gradient-card': '#133557',
        'blue-dark': '#1D2D44',
      },
    },
  },
  plugins: [],
}
