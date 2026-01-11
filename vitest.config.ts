import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '.next/',
        'coverage/',
        '**/*.config.*',
        '**/*.test.*',
        'tests/',
      ],
    },
    include: ['**/*.test.ts', '**/*.test.tsx'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@/core': path.resolve(__dirname, './core'),
      '@/ai': path.resolve(__dirname, './ai'),
      '@/lib': path.resolve(__dirname, './lib'),
      '@/components': path.resolve(__dirname, './components'),
    },
  },
});
