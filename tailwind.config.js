/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // Add Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin'), ],
}

