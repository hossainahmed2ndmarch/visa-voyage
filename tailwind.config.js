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
  plugins: [
    require('daisyui'),
    require('tailwindcss-neumorphism') // Add the Neumorphism plugin here
  ],
  neumorphism: {
    // Optional: Customize default neumorphic box shadows
    lightSource: 'top-left', // Change light source direction (default: 'top-left')
    borderRadius: '1rem', // Set a default border-radius for neumorphic elements
  },
};
