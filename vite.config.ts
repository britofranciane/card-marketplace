import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@services': path.resolve(__dirname, 'src/services'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
});
