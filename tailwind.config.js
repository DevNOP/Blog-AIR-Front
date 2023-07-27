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
      },
    },
  },
  plugins: [],
}
