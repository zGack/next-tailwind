/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cromatica: {
          100: "#FFCFD2",
          200: "#8EECF5",
          300: "#B9FBC0"
        }
      },
      fontSize: {
        base: '18px'
      },
    },
  },
  plugins: [],
}
