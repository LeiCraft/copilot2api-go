import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  // Use relative paths so the console works when mounted under a subpath
  // (e.g. https://domain.com/copilot2go/ -> /copilot2go/assets/... and /copilot2go/api/...).
  base: "./",
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash]-v2.js",
      },
    },
  },
})
