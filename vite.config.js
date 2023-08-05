import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Add the external modules here
      external: [
        "@progress/kendo-react-layout",
        "@progress/kendo-react-intl",
        "@progress/kendo-svg-icons",
      ],
    },
  },
});
