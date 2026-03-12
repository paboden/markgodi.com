// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://paboden.github.io/markgodi_com',
  base: '/',
  redirects: {
    '/about': '/#about',
    '/book': '/#book',
    '/workshops': '/#workshops',
    '/connect': '/#connect',
    '/blog': '/#blog',
  }
});
