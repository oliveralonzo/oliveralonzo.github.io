// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    redirects: {
        "/cv": "/OliverAlonzoCV.pdf",
    },
    vite: {
        plugins: [tailwindcss()],
    },
    site: 'https://oliveralonzo.github.io'
});
