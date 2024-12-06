/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
  },
  plugins: [
    require('daisyui'),
    
  ],
  daisyui: {
    themes: ['light', 'dark'], // Add more themes if needed
  },
}