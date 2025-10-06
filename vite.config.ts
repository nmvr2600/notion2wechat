import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/content/index.ts'),
        styles: resolve(__dirname, 'src/content/styles.css'),
        background: resolve(__dirname, 'src/background/index.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500, // 将警告限制从默认的500KB调整到1500KB
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
