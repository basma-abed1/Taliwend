import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // تأكدي من وجود هذا السطر

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // تأكدي من إضافة تيلويند هنا كمحرك أساسي
  ],
})