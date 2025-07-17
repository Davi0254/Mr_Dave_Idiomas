import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "@svgr/rollup"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), tailwindcss(), svgr()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  server: {
    proxy: {
     '/api': {
      target: 'https://drive.google.com',
      changeOrigin: true,
      secure: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
     }
    },
    cors: true,
    allowedHosts: [
      '40e8-177-131-129-225.ngrok-free.app'
    ],
  },
})
