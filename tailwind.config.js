const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./_includes/**/*.html", "./work/a288d20020c6de3a6926698a5b7f0a39adce6c79/*.html","./_data/*.json", "./_layouts/**/*.html", "./blog/*.html", "./music/*.html", "./work/*.html","./_posts/*.html","./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
    },
      screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
