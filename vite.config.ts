import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "motion-vendor": ["framer-motion", "motion"],
          "radix-vendor": ["radix-ui", "@base-ui/react"],
          "icons-vendor": ["@heroicons/react", "lucide-react", "react-icons", "@tabler/icons-react"],
          "three-vendor": ["three", "ogl"],
          "shiki-vendor": ["shiki"],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  }
})
