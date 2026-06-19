// @ts-check
import { defineConfig } from 'astro/config';

// nervepack.app — static site, served from GitHub Pages on the apex domain
// (custom domain, so no base subpath).
export default defineConfig({
  site: 'https://nervepack.app',
});
