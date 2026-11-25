import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// When deploying to https://sonia1maslova.github.io/academic-site/
// keep `base: '/academic-site'`.
// If you later switch to a custom domain or rename this repo to
// `sonia1maslova.github.io`, set `base: '/'`.
export default defineConfig({
  site: 'https://sonia1maslova.github.io',
  base: '/academic-site',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
