#!/usr/bin/env node
/**
 * Check every ICD-11 code used on the site against the official WHO ICD-11 MMS
 * simple tabulation (release in src/data/conditions-taxonomy.ts, ICD_RELEASE).
 *
 *   npm run icd:check
 *
 * Checks: codes in src/content/conditions/*.md (icd.pain, icd.condition) and the
 * MG30 / extension-code lists in conditions-taxonomy.ts exist, and that our titles
 * match WHO's titles exactly (ignoring case and whitespace).
 * The tabulation is downloaded once and cached in node_modules/.cache/icd11/
 * (not committed: ICD-11 is CC BY-ND 3.0 IGO, we only quote codes and titles).
 */
import { readFile, readdir, mkdir, writeFile, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { parse } from 'yaml';

const ROOT = new URL('../', import.meta.url);
const tax = await readFile(new URL('src/data/conditions-taxonomy.ts', ROOT), 'utf8');
const release = tax.match(/ICD_RELEASE = '([\d-]+)'/)[1];
const cacheDir = new URL(`node_modules/.cache/icd11/${release}/`, ROOT);
const txt = new URL('SimpleTabulation-ICD-11-MMS-en.txt', cacheDir);

try {
  await access(txt);
} catch {
  await mkdir(cacheDir, { recursive: true });
  const url = `https://icdcdn.who.int/static/releasefiles/${release}/SimpleTabulation-ICD-11-MMS-en.zip`;
  console.log(`Downloading ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const zip = new URL('st.zip', cacheDir);
  await writeFile(zip, Buffer.from(await res.arrayBuffer()));
  execFileSync('unzip', ['-o', '-q', zip.pathname, '-d', cacheDir.pathname]);
}

const who = new Map();
for (const line of (await readFile(txt, 'utf8')).split('\n').slice(1)) {
  const c = line.split('\t');
  if (!c[2]) continue;
  who.set(c[2], c[4].replace(/^"|"$/g, '').replace(/^[-\s]+/, '').trim());
}
const norm = (s) => s.toLowerCase().replace(/\s+/g, ' ').trim();

const problems = [];
let n = 0;
function check(where, code, title) {
  n++;
  if (!who.has(code)) return problems.push(`${where}: ${code} does not exist in ICD-11 ${release}`);
  if (title && norm(who.get(code)) !== norm(title)) problems.push(`${where}: ${code} title "${title}" ≠ WHO "${who.get(code)}"`);
}

// Taxonomy lists
for (const m of tax.matchAll(/\{ code: '([A-Z0-9.]+)', title: '([^']+)' \}/g)) check('conditions-taxonomy.ts', m[1], m[2]);
for (const m of tax.matchAll(/^  '(MG30\.\d)': \{ label: '([^']+)'/gm)) check('ICD_CATEGORIES', m[1], m[2]);

// Condition entries
const dir = new URL('src/content/conditions/', ROOT);
let files = [];
try { files = (await readdir(dir)).filter((f) => f.endsWith('.md')); } catch {}
for (const f of files) {
  const fm = parse((await readFile(new URL(f, dir), 'utf8')).split(/^---$/m)[1]);
  for (const e of fm.icd?.pain ?? []) check(f, e.code, e.title);
  for (const e of fm.icd?.condition ?? []) check(f, e.code, e.title);
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem(s) in ${n} codes.`);
  process.exit(1);
}
console.log(`${n} ICD-11 codes checked against the WHO ${release} release, 0 problems.`);
