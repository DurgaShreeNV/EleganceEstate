import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

  // Here we create the proxy 
  server: {
    proxy: {
      // where ever we are starting the path with /api, prepend it is http://localhost:3000
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },

  plugins: [react()],
})
