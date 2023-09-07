module.exports = (ctx) => ({
  plugins: ctx.env === 'storybook' 
    ? [
      require("postcss-minify"),
      require("postcss-discard-comments"),
      require("postcss-apply"),
      require("postcss-nested"),
      require("postcss-each"),
    ]
    : [
      require("tailwindcss"),
      require("autoprefixer")
    ],
})
