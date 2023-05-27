/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      "send-receive": "url('./assets/send-receive.png')",
      "business-woman": "url('./assets/business-woman.png')",
      "business-man": "url('./assets/business-man.png')",
    },
    fontFamily: {
      sans: ['Arial', 'Helvetica', 'sans-serif'],
    },
    colors: {
      white: "#ffffff",
      black: "#383838",
      green: "#22B573",
    },
    extend: {},
  },
  plugins: [],
};
