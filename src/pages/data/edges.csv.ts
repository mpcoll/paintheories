import type { APIRoute } from 'astro';
import { getTheories } from '../../lib/data';

/** Edge list of theory-to-theory relations, ready for network analysis. */
export const GET: APIRoute = async () => {
  const lines = ['source,relation,target'];
  for (const t of await getTheories())
    for (const r of t.data.relations) lines.push(`${t.id},${r.type},${r.target.id}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
