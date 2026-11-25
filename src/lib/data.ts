import { getCollection, getEntries, type CollectionEntry } from 'astro:content';
import { citationLabel } from '../scripts/remark-citations.mjs';

export type Theory = CollectionEntry<'theories'>;
export type Reference = CollectionEntry<'references'>;
export type Mechanism = CollectionEntry<'mechanisms'>;

const BASE = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';

/** Prefix an internal path with the site base ("/paintheories/"). */
export const url = (path = '') => BASE + path.replace(/^\//, '');

export async function getTheories() {
  const all = await getCollection('theories');
  return all.sort((a, b) => a.data.year - b.data.year || a.data.title.localeCompare(b.data.title));
}

export async function getReferences() {
  const all = await getCollection('references');
  return all.sort(
    (a, b) =>
      a.data.authors[0].localeCompare(b.data.authors[0]) || a.data.year - b.data.year || a.id.localeCompare(b.id),
  );
}

export const cite = (r: Reference) => citationLabel(r.data);

/** APA-like plain-text formatting; used on pages and in exports. */
export function formatReference(r: Reference['data']): { text: string; doiUrl?: string } {
  const authors =
    r.authors.length <= 1
      ? r.authors.join('')
      : r.authors.length === 2
        ? `${r.authors[0]}, & ${r.authors[1]}`
        : `${r.authors.slice(0, -1).join(', ')}, & ${r.authors.at(-1)}`;
  const end = (s: string) => (/[.?!]$/.test(s) ? s : s + '.');
  let text = `${authors} (${r.year}). ${end(r.title)}`;
  if (r.type === 'chapter') {
    const eds = r.editors?.length ? `In ${r.editors.join(', ')} (Ed${r.editors.length > 1 ? 's' : ''}.), ` : 'In ';
    text += ` ${eds}${r.container ?? ''}${r.pages ? ` (pp. ${r.pages})` : ''}.${r.publisher ? ` ${r.publisher}.` : ''}`;
  } else if (r.type === 'book') {
    text += r.publisher ? ` ${r.publisher}.` : '';
  } else if (r.container) {
    text += ` ${r.container}`;
    if (r.volume) text += `, ${r.volume}${r.issue ? `(${r.issue})` : ''}`;
    if (r.pages) text += `, ${r.pages}`;
    text += '.';
  }
  return { text, doiUrl: r.doi ? `https://doi.org/${r.doi}` : undefined };
}

export async function resolveRefs(refs: { id: string }[]) {
  return refs.length ? (await getEntries(refs as any)) as Reference[] : [];
}

/** Compact, JSON-serialisable view of a theory for client scripts and data exports. */
export function theoryRecord(t: Theory) {
  const d = t.data;
  return {
    id: t.id,
    title: d.title,
    shortTitle: d.shortTitle ?? d.title,
    aliases: d.aliases,
    kind: d.kind,
    year: d.year,
    proponents: d.proponents,
    summary: d.summary,
    domain: d.domain,
    levels: d.levels,
    questions: d.questions,
    painTypes: d.painTypes,
    status: d.status,
    coreClaims: d.coreClaims,
    predictions: d.predictions,
    mechanisms: d.mechanisms.map((m) => m.id),
    relations: d.relations.map((r) => ({ type: r.type, target: r.target.id, note: r.note ?? null })),
    foundational: d.foundational.map((r) => r.id),
    keyReferences: d.keyReferences.map((r) => r.id),
    review: d.review,
    updated: d.updated.toISOString().slice(0, 10),
    url: url(`theories/${t.id}/`),
  };
}
export type TheoryRecord = ReturnType<typeof theoryRecord>;
