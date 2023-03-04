/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira_code: "var(--font-fira-code)",
        inter: "var(--font-inter)",
        jetbrains_mono: "var(--font-jetbrains-mono)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
