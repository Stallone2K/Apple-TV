/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#000",
      backgroundContrast: "#111",
      textBlack: "#1d1d1f",
      white: "#fff",
    },
    fontFamily: {
      san: [
        "SF Pro Display",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1.0625rem",
      lg: ["1.1875rem", "1.21"],
      xl: "1.3125rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": ["2.5rem", 1.1],
      "5xl": ["4.5rem", "1.05"],
    },
    extend: {},
  },
  plugins: [],
};
