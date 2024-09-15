import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress', // Use Brotli compression for better efficiency
      ext: '.br', // Use .br extension for Brotli compressed files
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Aliases '@' to the 'src' directory
    },
     build: {
    outDir: 'dist', // Ensure this is 'dist'
  },
  },
  build: {
    outDir: 'dist', // Specifies the output directory for the build
    chunkSizeWarningLimit: 1000, // Increases the limit for chunk size warnings
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split third-party libraries into a separate chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Split components or libraries that are large or used across multiple files
          if (id.includes('src/components')) {
            return 'components';
          }
          if (id.includes('src/pages')) {
            return 'pages';
          }
          // Additional splitting conditions can be added here
        },
      },
    },
  },
});
