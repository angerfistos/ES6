module.exports = {
  mode: 'jit',
  content: [
    './*.html',
    './assets/js/components/*.html',
    './assets/js/*.js',
    './assets/js/components/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
