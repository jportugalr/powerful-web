import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const indexingEnabled = process.env.PUBLIC_INDEXING_ENABLED === 'true';
const rawSiteUrl = process.env.PUBLIC_SITE_URL?.trim();
const excludedSitemapPaths = new Set([
  '/404',
  '/404.html',
  '/privacidad',
  '/privacidad.html',
  '/terminos',
  '/terminos.html',
]);
let siteUrl;

if (rawSiteUrl) {
  try {
    const parsedSiteUrl = new URL(rawSiteUrl);
    const isHttpsOrigin = parsedSiteUrl.protocol === 'https:'
      && parsedSiteUrl.hostname.length > 0
      && parsedSiteUrl.username === ''
      && parsedSiteUrl.password === ''
      && parsedSiteUrl.pathname === '/'
      && parsedSiteUrl.search === ''
      && parsedSiteUrl.hash === '';

    if (isHttpsOrigin) {
      siteUrl = parsedSiteUrl.origin;
    }
  } catch {
    // An invalid URL is ignored while indexing is disabled and rejected below when enabled.
  }
}

if (indexingEnabled && !siteUrl) {
  throw new Error(
    'PUBLIC_INDEXING_ENABLED=true requires PUBLIC_SITE_URL to be a valid HTTPS origin, such as https://example.com.',
  );
}

export default defineConfig({
  output: 'static',
  ...(siteUrl ? { site: siteUrl } : {}),
  build: {
    format: 'preserve',
  },
  integrations: indexingEnabled
    ? [sitemap({
      filter: (page) => !excludedSitemapPaths.has(new URL(page).pathname.replace(/\/$/, '')),
      serialize: (item) => {
        const pageUrl = new URL(item.url);

        if (pageUrl.pathname !== '/' && !pageUrl.pathname.endsWith('.html')) {
          pageUrl.pathname += '.html';
        }

        return { ...item, url: pageUrl.toString() };
      },
    })]
    : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
