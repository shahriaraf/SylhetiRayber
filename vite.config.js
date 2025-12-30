import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Your existing tailwind plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Your plugins are correct

  // --- ADD THIS ENTIRE 'server' BLOCK ---
  server: {
    proxy: {
      // string shorthand for simple cases
      // any request to a path starting with /api will be proxied
      '/api': {
        target: 'https://syleti-rayber-backend.vercel.app', // Your backend server address
        changeOrigin: true, // Recommended for virtual hosts
        secure: false,      // Can be needed if your backend is not HTTPS
      },
    },
  },
})