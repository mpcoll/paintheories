/** Shared helpers: convert Crossref metadata to a bibliography entry. */

const clean = (s) => s?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const titleCase = (s) =>
  s === s.toUpperCase() ? s.toLowerCase().replace(/(^|[\s(-])(\p{L})/gu, (m, p, c) => p + c.toUpperCase()) : s;
const sentenceTitle = (s) => (s === s.toUpperCase() ? s.charAt(0) + s.slice(1).toLowerCase() : s);

export function toEntryFromCrossref(m) {
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

