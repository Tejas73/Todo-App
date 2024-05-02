import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/api',
      'db': '/api/db.ts', // Alias for the directory containing your 'db.ts' file
    },
  },
  plugins: [react()],
})
