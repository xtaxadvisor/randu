/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Enable JIT mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.tsx", // Ensure deep components are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};