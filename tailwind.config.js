/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "fx-dark-blue": "#242D38",
      "fx-orange": "#E4871B",
      "fx-gray": "#ECECF1",
      "fx-white": "#FFFFFF",
      "fx-blue-clear": "#304C70",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
