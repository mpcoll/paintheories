#!/usr/bin/env node
/**
 * Fetch approximate citation counts from OpenAlex for every reference and save
 * them to src/data/citations.json (committed, so builds do not depend on the API).
 *
 *   npm run citations:fetch
 *
 * DOI references are looked up by DOI. References without a DOI (old books,
 * chapters) are searched by title and year and accepted only when the title
 * matches closely; otherwise they are left out (shown as "unknown").
 */
import { readFile, writeFile } from 'node:fs/promises';
import { parse } from 'yaml';

const ROOT = new URL('../', import.meta.url);
const refs = parse(await readFile(new URL('src/data/references.yaml', ROOT), 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = { 'User-Agent': 'paintheories-citations/0.1 (https://github.com/mpcoll/paintheories)' };
const norm = (s) => (s ?? '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();

async function get(url) {
  for (let i = 0; i < 4; i++) {
    const r = await fetch(url, { headers: UA });
    if (r.status === 429) { await sleep(2000 * (i + 1)); continue; }
    if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
    return r.json();
  }
  throw new Error(`rate-limited: ${url}`);
}

const out = {};
// 1. DOI lookups in batches of 40
const withDoi = refs.filter((r) => r.doi);
for (let i = 0; i < withDoi.length; i += 40) {
  const batch = withDoi.slice(i, i + 40);
  const filter = batch.map((r) => r.doi.toLowerCase()).join('|');
  const data = await get(`https://api.openalex.org/works?filter=doi:${encodeURIComponent(filter)}&per-page=50&select=id,doi,cited_by_count`);
  const byDoi = new Map(data.results.map((w) => [w.doi?.replace('https://doi.org/', '').toLowerCase(), w]));
  for (const r of batch) {
    const w = byDoi.get(r.doi.toLowerCase());
    if (w) out[r.id] = { count: w.cited_by_count, openalex: w.id.replace('https://openalex.org/', ''), match: 'doi' };
  }
  process.stdout.write(`\rDOIs: ${Math.min(i + 40, withDoi.length)}/${withDoi.length}`);
  await sleep(300);
}
console.log();

// 2. Title searches for references without a DOI
for (const r of refs.filter((x) => !x.doi)) {
  const q = encodeURIComponent(r.title.slice(0, 120));
  try {
    const data = await get(`https://api.openalex.org/works?search=${q}&filter=publication_year:${r.year - 1}-${r.year + 1}&per-page=5&select=id,display_name,publication_year,cited_by_count,authorships`);
    const fam = norm(r.authors[0]?.split(',')[0]);
    const hit = data.results.find((w) => {
      const t1 = norm(w.display_name), t2 = norm(r.title);
      const titleOk = t1 === t2 || (t1.length > 15 && (t1.startsWith(t2.slice(0, 40)) || t2.startsWith(t1.slice(0, 40))));
      const authorOk = !fam || (w.authorships ?? []).some((a) => norm(a.author?.display_name).includes(fam));
      return titleOk && authorOk;
    });
    if (hit) { out[r.id] = { count: hit.cited_by_count, openalex: hit.id.replace('https://openalex.org/', ''), match: 'title' }; console.log(`title match: ${r.id} → ${hit.display_name} (${hit.cited_by_count})`); }
    else console.log(`no match:    ${r.id} (${r.title.slice(0, 60)})`);
  } catch (e) { console.log(`error:       ${r.id}: ${e.message}`); }
  await sleep(300);
}

const result = { source: 'OpenAlex (cited_by_count)', retrieved: new Date().toISOString().slice(0, 10), works: out };
await writeFile(new URL('src/data/citations.json', ROOT), JSON.stringify(result, null, 1) + '\n');
console.log(`Saved ${Object.keys(out).length} of ${refs.length} references to src/data/citations.json`);
