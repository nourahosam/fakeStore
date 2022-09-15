/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'KumbhSans': ['Kumbh Sans', 'sans-serif']
      },
      colors: {
        bg: {
          DEFAULT: '#f7f8fd',

        }
      }
    },
  },
  plugins: [],
}


