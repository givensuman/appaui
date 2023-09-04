
const plugin = require("tailwindcss/plugin");

const button = require("./jss/button.js");

module.exports = plugin(({ addComponents }) => {
  addComponents({
    ...button
  });
});
  