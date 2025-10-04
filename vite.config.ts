import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'content': resolve(__dirname, 'src/content/index.ts'),
        'styles': resolve(__dirname, 'src/content/styles.css'),
        'background': resolve(__dirname, 'src/background/index.ts'),
        'theme-blue': resolve(__dirname, 'src/theme/blue.css'),
        'theme-red': resolve(__dirname, 'src/theme/red.css'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
