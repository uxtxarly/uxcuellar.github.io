const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./_includes/**/*.html", "./_layouts/**/*.html", "./blog/*.html", "./music/*.html", "./work/*.html","./_posts/*.html","./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
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
