import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import { ThemedButton } from "@/components/ThemedButton"; // Removed due to module not found error
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: "/", // Ensures correct base path
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: "terser",
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"), // Ensures index.html is included in the build
      },
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});