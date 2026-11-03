import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { PUPPIES, SHOWROOM, FAMILIES } from './src/data.js';

const ORIGIN = 'https://puppy.instabizweb.com';
const headers = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  Referer: ORIGIN + '/',
  Accept: 'image/avif,image/webp,image/*,*/*;q=0.8',
};

const paths = [
  '/brand/logo.png',
  ...PUPPIES.map((p) => p.src),
  ...SHOWROOM,
  ...FAMILIES.map((f) => f.src),
];

async function grab(url) {
  const res = await fetch(url, { headers });
  const type = res.headers.get('content-type') || '';
  if (!res.ok || !type.startsWith('image/')) throw new Error(`${res.status} ${type}`);
  return Buffer.from(await res.arrayBuffer());
}

let ok = 0;
for (const p of paths) {
  const out = join('public', p);
  try {
    let buf;
    try {
      buf = await grab(ORIGIN + p); // direct file
    } catch {
      buf = await grab(`${ORIGIN}/_next/image?url=${encodeURIComponent(p)}&w=1920&q=75`); // fallback
    }
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, buf);
    ok++;
    console.log('✔', p);
  } catch (e) {
    console.log('✘', p, '→', e.message);
  }
}
console.log(`\nDone: ${ok}/${paths.length} images saved in /public`);