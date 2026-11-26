#!/usr/bin/env node
/**
 * Merge staged reference lists (staging/*.refs.txt) into src/data/references.yaml.
 *
 *   key = <doi>
 *   key = manual | Authors; separated; by; semicolons | year | title | type | container-or-publisher [| volume | pages]
 *
 * DOI entries are fetched from Crossref. If a DOI already exists under another key,
 * the mapping is reported so the citing files can be updated (use --rewrite to do it).
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { parse, stringify } from 'yaml';

const ROOT = new URL('../', import.meta.url);
const FILE = new URL('src/data/references.yaml', ROOT);
const UA = 'paintheories-bibliography/0.1 (https://github.com/mpcoll/paintheories)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const rewrite = process.argv.includes('--rewrite');

const { toEntryFromCrossref } = await import('./refs-lib.mjs');

const text = await readFile(FILE, 'utf8');
const header = text.split('\n').filter((l) => l.startsWith('#')).join('\n') + '\n';
const list = parse(text) ?? [];
const byKey = new Map(list.map((e) => [e.id, e]));
const byDoi = new Map(list.filter((e) => e.doi).map((e) => [e.doi.toLowerCase(), e.id]));

const renames = []; // [fromKey, toKey]
const problems = [];

const files = (await readdir(new URL('staging/', ROOT))).filter((f) => f.endsWith('.refs.txt'));
for (const f of files) {
  const lines = (await readFile(new URL(`staging/${f}`, ROOT), 'utf8')).split('\n');
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const m = line.match(/^([a-z0-9]+)\s*=\s*(.+)$/i);
    if (!m) { problems.push(`${f}: cannot parse "${line}"`); continue; }
    const [, key, rest] = m;
    if (rest.startsWith('manual')) {
      const [, authors, year, title, type, container, volume, pages] = rest.split('|').map((s) => s.trim());
      const entry = {
        id: key, type: type || 'book', authors: authors.split(';').map((a) => a.trim()).filter(Boolean),
        year: Number(year), title,
        ...(type === 'article' ? { container } : { publisher: container }),
        ...(volume ? { volume } : {}), ...(pages ? { pages } : {}),
        source: 'manual',
      };
      if (byKey.has(key)) {
        const ex = byKey.get(key);
        if (ex.source !== 'manual' || ex.title.toLowerCase() !== title.toLowerCase()) problems.push(`${f}: key ${key} already used for "${ex.title}"`);
        continue;
      }
      list.push(entry); byKey.set(key, entry); console.log(`+ ${key} (manual) ${title}`);
      continue;
    }
    const doi = rest.replace(/^https?:\/\/(dx\.)?doi\.org\//, '').trim().toLowerCase();
    if (byDoi.has(doi)) {
      const existing = byDoi.get(doi);
      if (existing !== key) { renames.push([key, existing]); console.log(`~ ${key} → ${existing} (same DOI)`); }
      continue;
    }
    if (byKey.has(key)) { problems.push(`${f}: key ${key} already used for a different work (${byKey.get(key).title}); staged DOI ${doi}`); continue; }
    let msg;
    for (let attempt = 0; attempt < 5; attempt++) {
      const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, { headers: { 'User-Agent': UA } });
      if (res.status === 429) { await sleep(3000 * (attempt + 1)); continue; }
      if (!res.ok) { problems.push(`${f}: ${key} DOI ${doi} → HTTP ${res.status}`); break; }
      msg = (await res.json()).message; break;
    }
    if (!msg) continue;
    const entry = { id: key, ...toEntryFromCrossref(msg) };
    list.push(entry); byKey.set(key, entry); byDoi.set(doi, key);
    console.log(`+ ${key}: ${entry.authors[0]} (${entry.year}) ${entry.title}`);
    await sleep(600);
  }
}

await writeFile(FILE, header + stringify(list, { lineWidth: 0 }));

if (renames.length && rewrite) {
  const dirs = ['src/content/theories/', 'src/content/mechanisms/'];
  for (const d of dirs) {
    for (const f of await readdir(new URL(d, ROOT))) {
      const u = new URL(d + f, ROOT);
      let s = await readFile(u, 'utf8');
      const before = s;
      for (const [from, to] of renames) s = s.replace(new RegExp(`\\b${from}\\b`, 'g'), to);
      if (s !== before) { await writeFile(u, s); console.log(`rewrote keys in ${d}${f}`); }
    }
  }
}
if (problems.length) { console.log('\nProblems:\n' + problems.join('\n')); process.exitCode = 1; }
