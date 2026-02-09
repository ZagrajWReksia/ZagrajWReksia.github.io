import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import games from '../src/data/games';
import { routing } from '../src/i18n/routing';

const __dirname = dirname(fileURLToPath(import.meta.url));

const baseUrl = 'https://zagrajwreksia.pl';
const primaryLocale = 'pl';
const gameIds = Object.keys(games);
const today = new Date().toISOString().split('T')[0];

function generateHreflangLinks(path: string): string {
  let links = '';
  for (const locale of routing.locales) {
    links += `    <xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}${path}" />\n`;
  }
  links += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/${primaryLocale}${path}" />\n`;
  return links;
}

function generateUrl(locale: string, path: string, priority: string): string {
  return `  <url>
    <loc>${baseUrl}/${locale}${path}</loc>
    <lastmod>${today}</lastmod>
${generateHreflangLinks(path)}    <priority>${priority}</priority>
  </url>\n`;
}

function generatePageGroup(path: string, plPriority: string, otherPriority: string): string {
  let xml = '';
  // Put primary locale first
  const sortedLocales = [primaryLocale, ...routing.locales.filter(l => l !== primaryLocale)];
  for (const locale of sortedLocales) {
    const priority = locale === primaryLocale ? plPriority : otherPriority;
    xml += generateUrl(locale, path, priority);
  }
  return xml;
}

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

`;

  // Homepages
  xml += generatePageGroup('/', '1.0', '0.8');
  xml += '\n';

  // Game pages
  for (const gameId of gameIds) {
    xml += generatePageGroup(`/game/${gameId}/`, '0.9', '0.7');
    xml += '\n';
  }

  // About pages
  xml += generatePageGroup('/about/', '0.5', '0.5');

  xml += `</urlset>\n`;

  return xml;
}

const sitemap = generateSitemap();
const outputPath = join(__dirname, '../public/sitemap.xml');
writeFileSync(outputPath, sitemap);
console.log(`Sitemap generated: ${gameIds.length} games × ${routing.locales.length} locales`);
