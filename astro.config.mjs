// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
    site: 'https://snoringpony.app',
    devToolbar: {
        enabled: false
    },
    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [alpinejs()],

    redirects: {
        '/': '/fr/',
    },
});
