import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const indexingEnabled = import.meta.env.PUBLIC_INDEXING_ENABLED === 'true';
  const sitemapLine = indexingEnabled && site
    ? `Sitemap: ${new URL('/sitemap-index.xml', site).toString()}\n`
    : '';

  return new Response(`User-agent: *\nAllow: /\n${sitemapLine}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
