// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages deployment URL and repository base path
  site: 'https://ashv.github.io',
  base: '/Gyankosh',

  output: 'static',

  integrations: [
    sitemap(),
  ],

  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
