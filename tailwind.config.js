/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "script.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppin: ["Poppins", 'sans-serif'],
        robot: ["Roboto"],
      },
    },
  },
  plugins: [],
}

