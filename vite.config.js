import { defineConfig } from "vite";

export default defineConfig({
  // Use relative paths so GitHub Pages (served from /<repo>/) can load assets
  base: "./",
  build: {
    outDir: "docs",
  },
});
