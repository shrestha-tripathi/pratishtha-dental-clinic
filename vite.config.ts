import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages base path: repo name. Override with VITE_BASE for custom domain.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/pratishtha-dental-clinic/',
  plugins: [react(), tailwindcss()],
});
