const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./_includes/**/*.html", "./work/a288d20020c6de3a6926698a5b7f0a39adce6c79/*.html","./_data/*.json", "./_layouts/**/*.html", "./blog/*.html", "./music/*.html", "./work/*.html","./_posts/*.html","./_blog/archive/*.html","./*.html"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        stone: {
          css: {
            '--tw-prose-body': theme('colors.stone[600]'),
            '--tw-prose-headings': theme('colors.stone[800]'),
            '--tw-prose-lead': theme('colors.stone[700]'),
            '--tw-prose-links': theme('colors.orange[700]'),
            '--tw-prose-bold': theme('colors.stone[800]'),
            '--tw-prose-counters': theme('colors.stone[600]'),
            '--tw-prose-bullets': theme('colors.stone[400]'),
            '--tw-prose-hr': theme('colors.stone[200]'),
            '--tw-prose-quotes': theme('colors.stone[800]'),
            '--tw-prose-quote-borders': theme('colors.stone[200]'),
            '--tw-prose-captions': theme('colors.stone[700]'),
            '--tw-prose-code': theme('colors.stone[800]'),
            '--tw-prose-pre-code': theme('colors.stone[200]'),
            '--tw-prose-pre-bg': theme('colors.stone[800]'),
            '--tw-prose-th-borders': theme('colors.stone[300]'),
            '--tw-prose-td-borders': theme('colors.stone[200]'),
            '--tw-prose-invert-body': theme('colors.stone[400]'),
            '--tw-prose-invert-headings': theme('colors.stone[200]'),
            '--tw-prose-invert-lead': theme('colors.stone[300]'),
            '--tw-prose-invert-links': theme('colors.orange[500]'),
            '--tw-prose-invert-bold': theme('colors.stone[200]'),
            '--tw-prose-invert-counters': theme('colors.stone[400]'),
            '--tw-prose-invert-bullets': theme('colors.stone[600]'),
            '--tw-prose-invert-hr': theme('colors.stone[800]'),
            '--tw-prose-invert-quotes': theme('colors.stone[200]'),
            '--tw-prose-invert-quote-borders': theme('colors.stone[800]'),
            '--tw-prose-invert-captions': theme('colors.stone[400]'),
            '--tw-prose-invert-code': theme('colors.stone[200]'),
            '--tw-prose-invert-pre-code': theme('colors.stone[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.stone[600]'),
            '--tw-prose-invert-td-borders': theme('colors.stone[800]'),
          },
        },
      }),
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
