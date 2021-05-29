module.exports = {
  purge: {
    mode: 'layers',
    enabled: process.env.NODE_EVN === 'production',
    content: [
      './components/**/*.vue',
      './containers/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js',
      './nuxt.config.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#fc0303',
        secondary: '#0071e3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
