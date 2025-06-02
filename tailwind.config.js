const { fontStyles, componentStyles } = require("./src/assets/styles/jsStyles");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        sans: ["Poppins", "sans-serif"],
        custom: [fontStyles.customFont.fontFamily, "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".section-title": componentStyles.sectionTitle,
        ".card": componentStyles.card,
      });
    },
  ],
};
