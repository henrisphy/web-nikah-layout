// Warna
export const colors = {
  primary: "#d4af37",
  primaryDark: "#b89930",
  secondary: "#8b4513",
  secondaryDark: "#6d370d",
  accent: "#e6d5b8",
  white: "#ffffff",
  black: "#000000",
  gray: "#f5f5f5",
  darkGray: "#333333",
};

// Typography
export const typography = {
  fontFamily: {
    sans: '"Poppins", sans-serif',
    script: '"Great Vibes", cursive',
  },
  fontSize: {
    small: "0.875rem",
    base: "1rem",
    large: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
};

// Spacing
export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
};

// Breakpoints
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

// Animasi
export const animations = {
  fadeIn: `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      animation: fadeIn 0.5s ease-in-out;
    `,
  slideUp: `
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      animation: slideUp 0.5s ease-out;
    `,
};

// Utility Classes
export const utilityClasses = {
  card: `
      background-color: ${colors.white};
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: ${spacing.lg};
    `,
  button: `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: ${spacing.sm} ${spacing.md};
      border-radius: 0.375rem;
      font-weight: 500;
      transition: all 0.2s ease;
      cursor: pointer;
      &:hover {
        transform: translateY(-1px);
      }
    `,
  section: `
      padding: ${spacing["3xl"]} 1rem;
      max-width: 1200px;
      margin: 0 auto;
    `,
};
