import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajustaremos el "base" más adelante para el despliegue en Github Pages
  // base: '/Juan.Camacho.dev/',
})
