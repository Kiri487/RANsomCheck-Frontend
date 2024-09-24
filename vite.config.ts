import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://140.124.181.155:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  },
  plugins: [react()],
});