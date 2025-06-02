import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tailwindPlugin from "eslint-plugin-tailwindcss"; // Tambahkan ini

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx,cjs,mjs}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      tailwindcss: tailwindPlugin, // Tambahkan plugin Tailwind
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Tambahkan aturan Tailwind
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/no-contradicting-classname": "error",
    },
    settings: {
      tailwindcss: {
        // Tambahkan konfigurasi Tailwind
        callees: ["classnames", "clsx", "tw"],
        config: "tailwind.config.js", // Pastikan path ini benar
        cssFiles: ["**/*.css", "!**/node_modules", "!**/.*", "!**/dist"],
      },
    },
  },
  {
    // Tambahkan konfigurasi khusus untuk file CSS
    files: ["**/*.css"],
    plugins: {
      tailwindcss: tailwindPlugin,
    },
    rules: {
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "warn",
    },
  },
];
