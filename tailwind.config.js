module.exports = {
  purge: ["./src/**/*.{html,ts}"], // Purge unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/images/image.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
