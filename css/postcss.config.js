module.exports = {
  plugins: [
    // /build
    require("postcss-apply"),
    require("postcss-minify"),
    require("postcss-discard-comments"),
    require('postcss-each'),
    require("postcss-nested"),
    // /.storybook
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}
