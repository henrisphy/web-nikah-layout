// Fonts
export const fontStyles = {
  customFont: {
    fontFamily: "CustomFont, sans-serif",
    fontDisplay: "swap",
  },
};

// Animations
export const animations = {
  fadeIn: {
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  pulse: {
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0.5 },
  },
};

// Utility Classes
export const utilityStyles = {
  animateFadeIn: {
    animation: "fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
    // Untuk implementasi JS murni:
    animationKeyframes: animations.fadeIn,
    animationDuration: "0.8s",
    animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    animationFillMode: "forwards",
  },
  animatePulseSlow: {
    animation: "pulse 3s ease-in-out infinite",
    // Untuk implementasi JS murni:
    animationKeyframes: animations.pulse,
    animationDuration: "3s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
};

// Component Styles
export const componentStyles = {
  sectionTitle: {
    fontSize: "2.25rem", // text-4xl
    "@media (min-width: 768px)": {
      fontSize: "3rem", // md:text-5xl
    },
    fontFamily: "Great Vibes, cursive", // font-script
    textAlign: "center",
    marginBottom: "3rem", // mb-12
    "@media (min-width: 768px)": {
      marginBottom: "4rem", // md:mb-16
    },
    color: "#d4af37", // text-primary
  },
  card: {
    backgroundColor: "background: rgba(254, 234, 241, 1)",
    padding: "1.5rem",

    "@media (min-width: 768px)": {
      padding: "2rem",
    },
    borderRadius: "0.75rem", // rounded-xl
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)", // shadow-md
    transitionProperty: "all",
    transitionDuration: "300ms",
    border: "1px solid #f3f4f6", // border border-gray-100
    "&:hover": {
      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)", // hover:shadow-lg
    },
  },
};
