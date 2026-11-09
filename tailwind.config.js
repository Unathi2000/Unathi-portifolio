/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
      },
      // Colours come from CSS variables in index.css so light/dark mode is a single class switch.
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        alt: "rgb(var(--alt) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent2) / <alpha-value>)",
        onaccent: "rgb(var(--on-accent) / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 10px 30px rgb(0 0 0 / 0.07)",
      },
    },
  },
  plugins: [],
};
