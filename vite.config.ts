import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor:         ["react", "react-dom", "react-router-dom", "@tanstack/react-query"],
          "framer-motion": ["framer-motion"],
          i18n:           ["i18next", "react-i18next"],
          ui:             ["lucide-react", "sonner", "yet-another-react-lightbox"],
        },
      },
    },
  },
});
