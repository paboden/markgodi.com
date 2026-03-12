// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://paboden.github.io',
  base: '/markgodi_com',
  publicDir: './public/markgodi_com',
  redirects: {
    '/about': '/#about',
    '/book': '/#book',
    '/workshops': '/#workshops',
    '/connect': '/#connect',
    '/blog': '/#blog',
  }
});
