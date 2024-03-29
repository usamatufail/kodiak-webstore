import { defineConfig } from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

export default defineConfig({
  plugins: [hydrogen({ experimental: { css: 'global' } })],
  resolve: {
    alias: [{ find: /^~\/(.*)/, replacement: '/src/$1' }],
  },
  optimizeDeps: {
    include: ['@headlessui/react', 'clsx', 'react-use', 'typographic-base'],
  },
});
