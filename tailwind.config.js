/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // put your email paths here
  ],
  theme: {
    corePlugins: {
      preflight: false,
      backgroundOpacity: false,
      borderOpacity: false,
      boxShadow: false,
      divideOpacity: false,
      placeholderOpacity: false,
      textOpacity: false,
    },
  },
  plugins: [],
};