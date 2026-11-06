import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite = यह मशीन आपकी वेबसाइट को लोकल (अपने कंप्यूटर पर) चलाती है
export default defineConfig({
  plugins: [react()],
})
