const { colors } = require("./src/theme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: colors,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
