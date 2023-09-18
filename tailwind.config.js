const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./_includes/**/*.html", "./work/a288d20020c6de3a6926698a5b7f0a39adce6c79/*.html","./_data/*.json", "./_layouts/**/*.html", "./blog/*.html", "./music/*.html", "./work/*.html","./_posts/*.html","./_blog/archive/*.html","./*.html"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        slate: {
          css: {
            '--tw-prose-body': theme('colors.slate[600]'),
            '--tw-prose-headings': theme('colors.slate[800]'),
            '--tw-prose-lead': theme('colors.slate[700]'),
            '--tw-prose-links': theme('colors.teal[700]'),
            '--tw-prose-bold': theme('colors.slate[800]'),
            '--tw-prose-counters': theme('colors.slate[600]'),
            '--tw-prose-bullets': theme('colors.slate[400]'),
            '--tw-prose-hr': theme('colors.slate[200]'),
            '--tw-prose-quotes': theme('colors.slate[800]'),
            '--tw-prose-quote-borders': theme('colors.slate[200]'),
            '--tw-prose-captions': theme('colors.slate[700]'),
            '--tw-prose-code': theme('colors.slate[800]'),
            '--tw-prose-pre-code': theme('colors.slate[200]'),
            '--tw-prose-pre-bg': theme('colors.slate[800]'),
            '--tw-prose-th-borders': theme('colors.slate[300]'),
            '--tw-prose-td-borders': theme('colors.slate[200]'),
            '--tw-prose-invert-body': theme('colors.slate[400]'),
            '--tw-prose-invert-headings': theme('colors.slate[200]'),
            '--tw-prose-invert-lead': theme('colors.slate[300]'),
            '--tw-prose-invert-links': theme('colors.teal[500]'),
            '--tw-prose-invert-bold': theme('colors.slate[200]'),
            '--tw-prose-invert-counters': theme('colors.slate[400]'),
            '--tw-prose-invert-bullets': theme('colors.slate[600]'),
            '--tw-prose-invert-hr': theme('colors.slate[800]'),
            '--tw-prose-invert-quotes': theme('colors.slate[200]'),
            '--tw-prose-invert-quote-borders': theme('colors.slate[800]'),
            '--tw-prose-invert-captions': theme('colors.slate[400]'),
            '--tw-prose-invert-code': theme('colors.slate[200]'),
            '--tw-prose-invert-pre-code': theme('colors.slate[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.slate[600]'),
            '--tw-prose-invert-td-borders': theme('colors.slate[800]'),
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
