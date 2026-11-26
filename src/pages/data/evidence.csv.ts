import type { APIRoute } from 'astro';
import { getTheories } from '../../lib/data';

const cell = (s: string) => (/[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s);

/** One row per finding: which theory it bears on, in which direction, and the citing papers. */
export const GET: APIRoute = async () => {
  const lines = ['theory,direction,method,finding,refs'];
  for (const t of await getTheories())
    for (const e of t.data.evidence)
      lines.push([t.id, e.direction, e.method ?? '', e.finding, e.refs.map((r) => r.id).join('; ')].map(cell).join(','));
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
