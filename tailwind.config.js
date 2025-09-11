/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        avengero: ['Avengero', 'sans-serif'], // custom font
        dback: ['3D_Back', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

