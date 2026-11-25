import type { APIRoute } from 'astro';
import { getReferences } from '../../lib/data';

const esc = (s: string) => s.replace(/[{}]/g, '').replace(/&/g, '\\&');
const bibAuthors = (a: string[]) => a.join(' and ');

export const GET: APIRoute = async () => {
  const entries = (await getReferences()).map(({ id, data: r }) => {
    const type = { article: 'article', book: 'book', chapter: 'incollection', other: 'misc' }[r.type];
    const f: [string, string | undefined][] = [
      ['author', bibAuthors(r.authors)],
      ['title', `{${esc(r.title)}}`],
      [r.type === 'chapter' ? 'booktitle' : 'journal', r.type === 'book' ? undefined : r.container && esc(r.container)],
      ['editor', r.editors && bibAuthors(r.editors)],
      ['year', String(r.year)],
      ['volume', r.volume],
      ['number', r.issue],
      ['pages', r.pages?.replace(/[-–]/, '--')],
      ['publisher', r.publisher && esc(r.publisher)],
      ['doi', r.doi],
      ['note', r.note && esc(r.note)],
    ];
    const body = f.filter(([, v]) => v).map(([k, v]) => `  ${k} = {${v}}`).join(',\n');
    return `@${type}{${id},\n${body}\n}`;
  });
  return new Response(entries.join('\n\n') + '\n', { headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' } });
};
