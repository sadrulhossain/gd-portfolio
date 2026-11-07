// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// Site and base path are overridable via env vars so the same build works both on
// GitHub Pages (served under /portfolio/) and on a root-domain host such as Cloudflare Pages.
// The GitHub Actions workflow sets BASE_PATH=/portfolio; other hosts should leave it unset.
const site = process.env.SITE_URL || 'https://sadrulhossain.github.io';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
