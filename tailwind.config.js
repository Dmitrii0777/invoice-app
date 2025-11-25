/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // Main text (13px / 18px)
        body: [
          "var(--fs-body)",
          {
            lineHeight: "var(--lh-body)",
            letterSpacing: "var(--ls-body)",
          },
        ],
        // Compact body (13px / 15px) - tables, narrow elements
        bodyVar: [
          "var(--fs-body-variant)",
          {
            lineHeight: "var(--lh-body-variant)",
            letterSpacing: "var(--ls-body-variant)",
          },
        ],
        // Small header (15px / 24px)
        headingS: [
          "var(--fs-heading-s)",
          {
            lineHeight: "var(--lh-heading-s)",
            letterSpacing: "var(--ls-heading-s)",
          },
        ],
        // Compact version of the small heading (15px / 15px)
        headingSVar: [
          "var(--fs-heading-s-var)",
          {
            lineHeight: "var(--lh-heading-s-var)",
            letterSpacing: "var(--ls-heading-s-var)",
          },
        ],
        // Medium Header (24px / 22px)
        headingM: [
          "var(--fs-heading-m)",
          {
            lineHeight: "var(--lh-heading-m)",
            letterSpacing: "var(--ls-heading-m)",
          },
        ],
        // Large Headline (36px / 33px)
        headingL: [
          "var(--fs-heading-l)",
          {
            lineHeight: "var(--lh-heading-l)",
            letterSpacing: "var(--ls-heading-l)",
          },
        ],
      },
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
