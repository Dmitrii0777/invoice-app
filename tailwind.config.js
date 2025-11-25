/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Backgrounds */
        bg: "var(--bg-primary)",
        bgAlt: "var(--bg-secondary)",
        bgTable: "var(--bg-table)",
        bgTotal: "var(--bg-details-total)",
        bgDropdown: "var(--bg-dropdown)",
        logoPurple: "var(--bg-logo-purple)",

        /* Text */
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textGrayBlue: "var(--text-gray-blue)",
        textDropdown: "var(--text-dropdown)",
        textCardId: "var(--text-card-id)",
        textCardDue: "var(--text-card-due)",
        textCardClient: "var(--text-card-client)",
        textCardTotal: "var(--text-card-total)",

        /* Buttons */
        btnPrimary: "var(--btn-primary)",
        btnDanger: "var(--btn-danger)",
        btnAccentBg: "var(--btn-bg-accent)",
        btnTextAccent: "var(--btn-text-accent)",

        /* Hover */
        hoverPurple: "var(--hover-purple)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
