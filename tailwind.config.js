/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // crucial for manual toggling
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
      },
    },
  },
  plugins: [],
};