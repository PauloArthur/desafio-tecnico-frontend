import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@consts': path.resolve(__dirname, './src/consts'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@types': `${path.resolve(__dirname, './src/types')}`,
      '@helpers': `${path.resolve(__dirname, './src/helpers')}`,
      '@services': `${path.resolve(__dirname, './src/services')}`,
    },
  },
});
