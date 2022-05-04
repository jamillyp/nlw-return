module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      brand: {
        300: '#996DFF',
        500: '#8257e6',
      },
      transparent: 'transparent',
      zinc: {
        700: '#52525B'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
