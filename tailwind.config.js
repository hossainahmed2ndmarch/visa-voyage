/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        logo: ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
      },

    },
  },
  plugins: [require('daisyui')],
}


