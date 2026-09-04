import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ── DEPLOYMENT SETTINGS ──────────────────────────────────────────────────────
// If your repo is  <username>.github.io   → keep BASE = '/'
// If your repo is  <username>.github.io/<repo>  → set BASE = '/<repo>/'
// Also set SITE to your final URL (used for sitemap + SEO tags).
const SITE = 'https://rabbilnmoor-lang.github.io';
const BASE = '/rahat-chowdhury-portfolio/';
// ─────────────────────────────────────────────────────────────────────────────

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [tailwind()],
});
