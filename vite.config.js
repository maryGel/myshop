import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Replace with your backend server URL
      },
      '/uploads': {
        target: 'http://localhost:3000', // Replace with your backend server URL for file uploads
        changeOrigin: true,
        secure: false,
      },
    }
  },
})
