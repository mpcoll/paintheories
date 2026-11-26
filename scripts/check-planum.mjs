#!/usr/bin/env node
/**
 * Check the pain-circuit stations against Planum's published manifest:
 * every region and mark id must exist, belong to the station's cortical atlas
 * (for cortical parcels), and have a 3D mesh (otherwise Planum cannot draw it).
 *   npm run planum:check
 */
import { readFile } from 'node:fs/promises';
import { parse } from 'yaml';

const MANIFEST = 'https://planumatlas.com/models/cdmd/manifest.json';
const res = await fetch(MANIFEST);
if (!res.ok) { console.error(`Could not fetch ${MANIFEST}: HTTP ${res.status}`); process.exit(2); }
const man = await res.json();
const regions = new Map(man.regions.map((r) => [r.id, r]));
const hasMesh = (r) => Object.keys(r).some((k) => /mesh|file|vertex/i.test(k));
const CORTICAL = new Set(['destrieux', 'desikan', 'julich', 'hcp-mmp', 'schaefer']);

const stations = parse(await readFile(new URL('../src/data/circuit-stations.yaml', import.meta.url), 'utf8'));
let problems = 0;
for (const s of stations) {
  const atlas = s.planum.atlas ?? 'destrieux';
  for (const id of [s.planum.region, ...(s.planum.mark ?? [])]) {
    const r = regions.get(id);
    const issue = !r ? 'unknown id'
      : CORTICAL.has(id.split(':')[0]) && id.split(':')[0] !== atlas ? `cortical parcel not in station atlas (${atlas})`
      : !hasMesh(r) ? 'no 3D mesh (not drawn in Planum)' : null;
    if (issue) { problems++; console.log(`✗ ${s.id}: ${id}: ${issue}`); }
  }
}
console.log(`${stations.length} stations checked, ${problems} problem(s).`);
process.exitCode = problems ? 1 : 0;
