// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // 👇 Yeh add karo
    hmr: {
      host: 'localhost',
      protocol: 'ws',
      port: 5173,
    },
  },
})