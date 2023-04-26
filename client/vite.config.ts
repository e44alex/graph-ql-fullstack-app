import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import csp from 'vite-plugin-csp';

const hosts = [
  'https://localhost:7107'
]

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/graphql': 'http://localhost:5064',
      '/health': 'http://localhost:5064',
    }
  },
  plugins: [react()],
})
