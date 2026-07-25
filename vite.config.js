import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// football-data.org faqat "http://localhost" (portsiz) manzilidan CORS so'rovlarga ruxsat beradi,
// shuning uchun dev/preview serverida so'rovlarni proksi orqali yuboramiz.
const footballApiProxy = {
  '/football-api': {
    target: 'https://api.football-data.org/v4',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/football-api/, ''),
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: footballApiProxy,
  },
  preview: {
    proxy: footballApiProxy,
  },
})
