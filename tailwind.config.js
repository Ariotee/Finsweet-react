/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#232536',
      },
    },
    fontFamily: {
      sen: ['Sen', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
