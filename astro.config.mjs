import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://lenouvellouis.github.io',  // domaine racine
    base: '/portfolio/',                      // nom du repo GitHub
    integrations: [react()],
    output: 'static',
    vite: {
        ssr: {
            external: ['react', 'react-dom'],
        },
    },
});
