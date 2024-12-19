import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/", // Set the base URL for your project (root or sub-directory)
  plugins: [react()],
  build: {
    outDir: "dist/client", // Output directory for the production build
  },
});
