// @ts-check
import { defineConfig } from 'astro/config';
import remarkCitations from './src/scripts/remark-citations.mjs';

const base = '/paintheories/';

// Deployed to GitHub Pages at https://mpcoll.github.io/paintheories/
export default defineConfig({
  site: 'https://mpcoll.github.io',
  base,
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [[remarkCitations, { base }]],
  },
});
