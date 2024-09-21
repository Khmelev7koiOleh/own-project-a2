/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      qxl: '1470px'
    },
    extend: {
      screens: {}
    }
  },
  plugins: []
}
