/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("./build")
  ],
}

