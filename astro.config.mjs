// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    redirects: {
        "/cv": "/Oliver Alonzo CV.pdf",
    },
    vite: {
        plugins: [tailwindcss()],
    }
});
