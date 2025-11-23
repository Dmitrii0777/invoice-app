/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        bgAlt: "var(--color-bg-alt)",
        text: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        bgDropdown: "var(--color-bg-dropdown)",
        txDrop: "var(--color-text-dropdown)",
        "logo-purple": "var(--color-bg-logo-purple)",

        /* Hover */
        "hover-purple": "var(--color-hover-purple)",
      },
    },
  },
  plugins: [],
};
