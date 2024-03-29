import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  compressHTML: true,
  adapter: netlify(),
  server: {
    port: 3000
  },
});