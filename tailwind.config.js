
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'tilt-and-fade': 'tilt-and-fade 3s ease-in-out infinite',
      },
      keyframes: {
        'tilt-and-fade': {
          '0%, 100%': { transform: 'rotate(0deg)', opacity: '1' },
          '20%': { transform: 'rotate(-10deg)', opacity: '1' },
          '40%': { transform: 'rotate(10deg)', opacity: '1' },
          '60%': { transform: 'rotate(-10deg)', opacity: '1' },
          '80%': { transform: 'rotate(10deg)', opacity: '1' },
          '85%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

