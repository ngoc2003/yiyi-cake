module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      primary: { main: "#FFD43E", light: "#FFDF70", lighter: "#FFDF70" },
      secondary: { main: "#F55555", light: "#FFC8C3" },
      text: {
        main: "#3C3939",
        light: "#888484",
      },
      smoke: {
        main: "#E8E7E3",
        light: "#EEEEEE",
      },
      background: "#F8F7F1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
