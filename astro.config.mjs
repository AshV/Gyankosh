// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: set to your repo URL, e.g. 'https://yourusername.github.io'
  // For a custom domain, use that domain. For subdirectory deploy, add base: '/repo-name'
  site: 'https://gyankosh.in',

  output: 'static',

  integrations: [
    sitemap(),
  ],

  // Disable Markdown remark/rehype plugins — we use our own parser
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
