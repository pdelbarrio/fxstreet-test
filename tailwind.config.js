/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "fx-dark-blue": "#242D38",
        "fx-orange": "#E4871B",
        "fx-gray": "#ECECF1",
        "fx-gray-dot": "#DDDEDF",
        "fx-gray-dark": "#8C8D91",
        "fx-gray-post": "#A3A3A8",
        "fx-text-post": "#49494F",
        "fx-white": "#FFFFFF",
        "fx-blue-clear": "#304C70",
        "fx-blue-light": "#7598C4",
      },
    },
  },
  plugins: [],
};
