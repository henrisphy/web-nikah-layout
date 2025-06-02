import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Base paths
      "@": path.resolve(__dirname, "./src"),

      // Assets
      "@assets": path.resolve(__dirname, "./src/assets"),

      // Styles
      "@styles": path.resolve(__dirname, "./src/assets/styles"),

      // Components (rekomendasi struktur yang lebih baik)
      "@components": path.resolve(__dirname, "./src/components"),
      "@common": path.resolve(__dirname, "./src/components/common"),
      "@sections": path.resolve(__dirname, "./src/components/sections"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),

      // Data
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  optimizeDeps: {
    include: ["tailwindcss", "autoprefixer"],
  },
});
