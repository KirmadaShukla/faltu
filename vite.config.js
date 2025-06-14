import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})

.text-gray-400 {
  font-size: 12px;
  color: rgb(171, 95, 95);
  background-color: rgb(238, 129, 129);
  margin: 10px;
}