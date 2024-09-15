/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      buttonbg: "#f59e0b",
      commonbg: "#f5f5f4",
      cardbg: "#fff",
      signin: "#e11d48",
    }
  },
  plugins: [],
}

