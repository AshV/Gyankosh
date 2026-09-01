// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain deployment URL and repository base path
  site: 'https://www.ashishvishwakarma.com',
  base: '/Gyankosh',

  output: 'static',

  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      priority: 0.7,
      serialize(item) {
        // Homepage gets highest priority
        if (item.url.endsWith('/Gyankosh/') || item.url.endsWith('/Gyankosh')) {
          item.changefreq = 'daily';
          item.priority = 1.0;
        }
        // Reader pages
        else if (item.url.includes('/read/')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        }
        // Category pages
        else if (item.url.includes('/category/')) {
          item.changefreq = 'weekly';
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],

  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
