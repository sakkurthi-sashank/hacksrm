/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin_sans: "var(--font-josefin-sans)",
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
