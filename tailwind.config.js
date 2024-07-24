/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontHenriette: ['henriette'],
        fontHenrietteC: ['henriette-Compressed'],
        fontPrentonRP: ['prenton'],
        fontPrentonRPC: ['prenton-condensed'],
        fontBookmania: ['bookmania'],
      },
      
    },
    },
  plugins: [],
}

