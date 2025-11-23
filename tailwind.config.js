/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        bgAlt: "var(--color-bg-alt)",

        // Text
        text: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
        "text-gray": "var(--color-text-gray-blue)",

        // Buttons
        primary: "var(--color-btn-primary)",
        danger: "var(--color-btn-danger)",
        accent: "var(--accent-btn-bg)",

        // btn text
        "text-accent": "var(--accent-btn-text)",

        bgDropdown: "var(--color-bg-dropdown)",
        txDrop: "var(--color-text-dropdown)",
        "logo-purple": "var(--color-bg-logo-purple)",

        /* Hover */
        "hover-purple": "var(--color-hover-purple)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
