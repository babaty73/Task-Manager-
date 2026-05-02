/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {
      animation: {
        'rotate': 'rotate 15s linear infinite',
        'tilt': 'tilt 5s linear infinite',
      }
    },
  },
  plugins: [],
}

