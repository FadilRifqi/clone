import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.jsx', 'resources/css/app.css'],
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
    },
  },
  build: {
    minify: 'terser',
    sourcemap: false,
    manifest: 'manifest.json',
    rollupOptions: {
      output: {
        assetFileNames: `assets/[hash].[ext]`,
        chunkFileNames: `assets/[hash].js`,
        entryFileNames: `assets/[hash].js`,
      },
      onwarn(warning, defaultHandler) {
        if (warning.code === 'SOURCEMAP_ERROR') {
          return;
        }
        defaultHandler(warning);
      },
    },
  },
});
