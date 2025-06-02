import {
  fontStyles,
  animations,
  utilityStyles,
  componentStyles,
} from "./jsStyles";

// Fungsi untuk menginjeksikan global styles
export const injectGlobalStyles = () => {
  if (typeof document === "undefined") return;

  // Buat style element
  const styleElement = document.createElement("style");
  styleElement.id = "global-styles";

  // CSS string
  let cssString = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    /* Custom Font */
    @font-face {
      font-family: "${fontStyles.customFont.fontFamily}";
      src: url("/fonts/custom-font.woff2") format("woff2");
      font-display: ${fontStyles.customFont.fontDisplay};
    }
    
    /* Animations */
    @keyframes fadeIn {
      from { opacity: ${animations.fadeIn.from.opacity}; transform: ${animations.fadeIn.from.transform}; }
      to { opacity: ${animations.fadeIn.to.opacity}; transform: ${animations.fadeIn.to.transform}; }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: ${animations.pulse["0%, 100%"].opacity}; }
      50% { opacity: ${animations.pulse["50%"].opacity}; }
    }
    
    /* Utility Classes */
    .animate-fade-in {
      animation: fadeIn ${utilityStyles.animateFadeIn.animationDuration} ${utilityStyles.animateFadeIn.animationTimingFunction} ${utilityStyles.animateFadeIn.animationFillMode};
    }
    
    .animate-pulse-slow {
      animation: pulse ${utilityStyles.animatePulseSlow.animationDuration} ${utilityStyles.animatePulseSlow.animationTimingFunction} ${utilityStyles.animatePulseSlow.animationIterationCount};
    }
    
    /* Component Styles */
    .section-title {
      font-size: ${componentStyles.sectionTitle.fontSize};
      font-family: ${componentStyles.sectionTitle.fontFamily};
      text-align: ${componentStyles.sectionTitle.textAlign};
      margin-bottom: ${componentStyles.sectionTitle.marginBottom};
      color: ${componentStyles.sectionTitle.color};
    }
    
    @media (min-width: 768px) {
      .section-title {
        font-size: ${componentStyles.sectionTitle["@media (min-width: 768px)"].fontSize};
        margin-bottom: ${componentStyles.sectionTitle["@media (min-width: 768px)"].marginBottom};
      }
    }
    
    .card {
      background-color: ${componentStyles.card.backgroundColor};
      padding: ${componentStyles.card.padding};
      border-radius: ${componentStyles.card.borderRadius};
      box-shadow: ${componentStyles.card.boxShadow};
      transition-property: ${componentStyles.card.transitionProperty};
      transition-duration: ${componentStyles.card.transitionDuration};
      border: ${componentStyles.card.border};
    }
    
    .card:hover {
      box-shadow: ${componentStyles.card["&:hover"].boxShadow};
    }
    
    @media (min-width: 768px) {
      .card {
        padding: ${componentStyles.card["@media (min-width: 768px)"].padding};
      }
    }
  `;

  styleElement.textContent = cssString;
  document.head.appendChild(styleElement);
};

// Export semua style untuk penggunaan inline
export const styles = {
  ...fontStyles,
  ...animations,
  ...utilityStyles,
  ...componentStyles,
};
