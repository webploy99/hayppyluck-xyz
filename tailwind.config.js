/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
      theme: {
        container: {
          center: true,
          padding: '1rem',
          screens: {
            sm: '600px',
            md: '728px',
            lg: '984px',
            xl: '1240px',
            '2xl': '1240px',
          },
          
        },
      },
    },
    plugins: [],
  }