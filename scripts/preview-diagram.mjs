#!/usr/bin/env node
/**
 * Render theory diagrams to PNG (light + dark) for checking, without building the site.
 *   npm run diagram:preview -- <theory-id> [<theory-id> ...]
 * Output: .diagram-previews/<id>-light.png and <id>-dark.png
 * Also reports problems: missing file, text outside the viewBox, forbidden attributes.
 */
import { readFile, mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { parse } from 'yaml';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = new URL('../', import.meta.url);
const out = new URL('.diagram-previews/', root);
await mkdir(out, { recursive: true });

const css = (await readFile(new URL('src/styles/global.css', root), 'utf8')).replace(/^@import.*$/gm, '');
const dcss = await readFile(new URL('src/styles/diagram.css', root), 'utf8');

const ids = process.argv.slice(2);
if (!ids.length) { console.log('usage: diagram:preview -- <id> [...]'); process.exit(1); }
const browser = await chromium.launch();
let failed = 0;
for (const id of ids) {
  let svg, domain = 'neurobiological';
  try { svg = await readFile(new URL(`src/diagrams/${id}.svg`, root), 'utf8'); }
  catch { console.log(`✗ ${id}: no src/diagrams/${id}.svg`); failed++; continue; }
  try {
    const md = await readFile(new URL(`src/content/theories/${id}.md`, root), 'utf8');
    domain = parse(md.split(/^---$/m)[1]).domain ?? domain;
  } catch {}
  const problems = [];
  if (/style=|fill="#|stroke="#|<image|<script|font-family=/i.test(svg)) problems.push('uses inline colours/styles/images/scripts');
  if (!/viewBox="0 0 640 360"/.test(svg)) problems.push('viewBox must be "0 0 640 360"');
  if (!/class="dg"/.test(svg)) problems.push('root <svg> needs class="dg"');
  for (const theme of ['light', 'dark']) {
    const page = await browser.newPage({ viewport: { width: 760, height: 460 }, deviceScaleFactor: 1 });
    await page.setContent(`<!doctype html><html data-theme="${theme}"><head><style>${css}${dcss} body{padding:24px} .fig{width:700px}</style></head>
      <body><div class="fig d-${domain}">${svg}</div></body></html>`);
    if (theme === 'light') {
      const outside = await page.evaluate(() => {
        const s = document.querySelector('svg.dg'); if (!s) return ['no svg.dg'];
        const res = [];
        for (const el of s.querySelectorAll('text, rect, circle, path, line, ellipse, polygon')) {
          const b = el.getBBox();
          if (b.x < 0 || b.y < 0 || b.x + b.width > 640.5 || b.y + b.height > 360.5)
            res.push(`${el.tagName}${el.textContent ? ` "${el.textContent.trim().slice(0, 30)}"` : ''} at ${Math.round(b.x)},${Math.round(b.y)} ${Math.round(b.width)}×${Math.round(b.height)}`);
        }
        return res;
      });
      if (outside.length) problems.push('outside viewBox: ' + outside.slice(0, 4).join('; '));
    }
    await page.locator('.fig').screenshot({ path: new URL(`${id}-${theme}.png`, out).pathname });
    await page.close();
  }
  if (problems.length) { failed++; console.log(`✗ ${id}: ${problems.join(' | ')}`); }
  else console.log(`✓ ${id} → .diagram-previews/${id}-light.png, -dark.png`);
}
await browser.close();
process.exitCode = failed ? 1 : 0;
