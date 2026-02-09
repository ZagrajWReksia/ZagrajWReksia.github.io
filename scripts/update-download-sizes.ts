import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import games from '../src/data/games';

const __dirname = dirname(fileURLToPath(import.meta.url));

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';

  const units = ['B', 'KiB', 'MiB', 'GiB'];
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);

  const rounded = i === 0 ? value : Math.round(value * 10) / 10;
  return `${rounded} ${units[i]}`;
}

async function fetchSize(url: string): Promise<number | null> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    if (!response.ok) {
      console.error(`  Failed to fetch ${url}: ${response.status}`);
      return null;
    }
    const contentLength = response.headers.get('content-length');
    return contentLength ? parseInt(contentLength, 10) : null;
  } catch (error) {
    console.error(`  Error fetching ${url}:`, error);
    return null;
  }
}

function extractUrls(): string[] {
  const urls: string[] = [];
  const domain = 'iso.zagrajwreksia.pl';

  for (const game of Object.values(games)) {
    for (const lang of game.languages) {
      for (const download of lang.downloads) {
        if (download.url.includes(domain)) {
          urls.push(download.url);
        }
      }
    }
    if (game.mods) {
      for (const mod of game.mods) {
        if (mod.download.url.includes(domain)) {
          urls.push(mod.download.url);
        }
      }
    }
  }

  return [...new Set(urls)];
}

async function updateDownloadSizes() {
  const urls = extractUrls();
  console.log(`Found ${urls.length} unique download URLs\n`);

  const sizes: Record<string, string> = {};

  for (const url of urls) {
    const filename = decodeURIComponent(url.split('/').pop() || url);
    process.stdout.write(`Fetching: ${filename}...`);

    const size = await fetchSize(url);
    if (size !== null) {
      const formattedSize = formatBytes(size);
      sizes[url] = formattedSize;
      console.log(` ${formattedSize}`);
    } else {
      console.log(' FAILED');
    }
  }

  const outputPath = join(__dirname, '../src/data/download-sizes.json');
  writeFileSync(outputPath, JSON.stringify(sizes, null, 2));
  console.log(`\nSaved ${Object.keys(sizes).length} sizes to download-sizes.json`);
}

updateDownloadSizes().catch(console.error);
