/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ['"Red Hat Text"'],
    },
    screens: {
      small: "720px",
    },
  },
  plugins: [],
};
