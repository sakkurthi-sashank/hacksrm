/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin_sans: "var(--font-josefin-sans)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
