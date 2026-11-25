#!/usr/bin/env node
/**
 * Bibliography helper backed by Crossref.
 *
 *   npm run ref:add -- <doi> [<doi> ...]   fetch metadata and append to src/data/references.yaml
 *   npm run ref:verify                      re-check every DOI entry against Crossref
 *
 * Keys are generated as <firstauthor><year>[a-z], e.g. melzack1965.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { parse, stringify } from 'yaml';

const FILE = new URL('../src/data/references.yaml', import.meta.url);
const UA = 'paintheories-bibliography/0.1 (https://github.com/mpcoll/paintheories)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function crossref(doi) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
      headers: { 'User-Agent': UA },
    });
    if (res.status === 429) { await sleep(3000 * (attempt + 1)); continue; }
    if (!res.ok) throw new Error(`Crossref HTTP ${res.status} for ${doi}`);
    return (await res.json()).message;
  }
  throw new Error(`Crossref rate-limited for ${doi}`);
}

const clean = (s) => s?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const titleCase = (s) =>
  s === s.toUpperCase() ? s.toLowerCase().replace(/(^|[\s(-])(\p{L})/gu, (m, p, c) => p + c.toUpperCase()) : s;
const sentenceTitle = (s) => (s === s.toUpperCase() ? s.charAt(0) + s.slice(1).toLowerCase() : s);

function toEntry(m) {
  const authors = (m.author ?? []).map((a) => {
    const family = titleCase(a.family ?? a.name ?? '');
    const initials = (a.given ?? '')
      .split(/[\s.-]+/)
      .filter(Boolean)
      .map((g) => g[0].toUpperCase() + '.')
      .join(' ');
    return initials ? `${family}, ${initials}` : family;
  });
  const typeMap = { 'journal-article': 'article', book: 'book', 'book-chapter': 'chapter' };
  const e = {
    type: typeMap[m.type] ?? 'other',
    authors,
    year: m.issued?.['date-parts']?.[0]?.[0] ?? m.published?.['date-parts']?.[0]?.[0],
    title: sentenceTitle(clean(m.title?.[0] ?? '')),
    container: clean(m['container-title']?.[0]),
    volume: m.volume,
    issue: m.issue,
    pages: m.page ?? m['article-number'],
    publisher: m.type === 'journal-article' ? undefined : m.publisher,
    doi: m.DOI.toLowerCase(),
    source: 'crossref',
  };
  for (const k of Object.keys(e)) if (e[k] === undefined || e[k] === '') delete e[k];
  return e;
}

function makeKey(entry, existing) {
  const family = (entry.authors[0] ?? 'anon').split(',')[0];
  const base =
    family.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z]/g, '') + entry.year;
  if (!existing.has(base)) return base;
  for (const s of 'bcdefghijklmnopqrstuvwxyz') if (!existing.has(base + s)) return base + s;
  throw new Error('key space exhausted');
}

async function load() {
  return parse(await readFile(FILE, 'utf8')) ?? [];
}
async function save(list) {
  const header =
    '# Shared bibliography. Entries with `source: crossref` were generated from Crossref by DOI\n' +
    '# (npm run ref:add -- <doi>). `source: manual` entries were typed by hand and should be checked.\n';
  await writeFile(FILE, header + stringify(list, { lineWidth: 0 }));
}

const [cmd, ...args] = process.argv.slice(2);
const list = await load();

if (cmd === 'add') {
  const keys = new Set(list.map((e) => e.id));
  for (const raw of args) {
    const doi = raw.replace(/^https?:\/\/(dx\.)?doi\.org\//, '').toLowerCase();
    const dup = list.find((e) => e.doi?.toLowerCase() === doi);
    if (dup) { console.log(`= ${dup.id} already present (${doi})`); continue; }
    const entry = toEntry(await crossref(doi));
    const id = makeKey(entry, keys);
    keys.add(id);
    list.push({ id, ...entry });
    console.log(`+ ${id}: ${entry.authors[0]} (${entry.year}) ${entry.title}`);
    await sleep(1000);
  }
  await save(list);
} else if (cmd === 'verify') {
  let problems = 0;
  for (const e of list) {
    if (!e.doi) { console.log(`? ${e.id}: no DOI (source: ${e.source}) — check by hand`); continue; }
    try {
      const m = toEntry(await crossref(e.doi));
      const issues = [];
      if (m.year !== e.year) issues.push(`year ${e.year} ≠ ${m.year}`);
      const norm = (s) => (s ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');
      if (!norm(m.title).startsWith(norm(e.title).slice(0, 25))) issues.push(`title differs: "${m.title}"`);
      if (norm(m.authors[0]?.split(',')[0]) !== norm(e.authors[0]?.split(',')[0]))
        issues.push(`first author ${e.authors[0]} ≠ ${m.authors[0]}`);
      if (issues.length) { problems++; console.log(`✗ ${e.id}: ${issues.join('; ')}`); }
      else console.log(`✓ ${e.id}`);
    } catch (err) {
      problems++;
      console.log(`✗ ${e.id}: ${err.message}`);
    }
    await sleep(800);
  }
  process.exitCode = problems ? 1 : 0;
} else {
  console.log('usage: refs.mjs add <doi...> | verify');
  process.exitCode = 1;
}
