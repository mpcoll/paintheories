// @ts-check
import { defineConfig } from 'astro/config';
import remarkCitations from './src/scripts/remark-citations.mjs';

const base = '/';

// Deployed to GitHub Pages with the custom domain https://painknowledge.com
export default defineConfig({
  site: 'https://painknowledge.com',
  base,
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [[remarkCitations, { base }]],
  },
});
