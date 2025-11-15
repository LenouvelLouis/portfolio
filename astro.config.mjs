import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://LenouvelLouis.github.io',
  base: '/',
  integrations: [react()],
  output: 'static',
  vite: {
    ssr: {
      external: ['react', 'react-dom']
    }
  }
});
