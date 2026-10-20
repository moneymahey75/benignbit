import type { APIRoute } from 'astro';
import { services, projects } from '@/lib/data';

export const GET: APIRoute = () => {
  const base = 'https://benignbit.com';
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/get-quote',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const projectRoutes = projects.map((p) => `/portfolio/${p.slug}`);
  const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes];

  const urls = allRoutes
    .map((path) => `  <url>
    <loc>${base}${path}</loc>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : path.includes('/services/') || path === '/services' || path === '/portfolio' ? '0.8' : '0.6'}</priority>
  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
