import type { APIRoute } from 'astro';
import { getTheories, theoryRecord } from '../../lib/data';
import { computeMetrics } from '../../lib/metrics';

const cell = (v: unknown) => {
  const s = Array.isArray(v) ? v.join('; ') : v == null ? '' : String(v);
  return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export const GET: APIRoute = async () => {
  const entries = await getTheories();
  const metrics = computeMetrics(entries);
  const rows = entries.map(theoryRecord).map((t) => ({
    ...t,
    citations: metrics.get(t.id)!.citations ?? '',
    influence: metrics.get(t.id)!.influence,
    relations: t.relations.map((r) => `${r.type}:${r.target}`),
  }));
  const cols = ['id', 'title', 'year', 'kind', 'domain', 'status', 'levels', 'questions', 'painTypes',
    'proponents', 'aliases', 'summary', 'coreClaims', 'predictions', 'mechanisms', 'relations',
    'foundational', 'keyReferences', 'citations', 'influence', 'review', 'updated'] as const;
  const csv = [cols.join(','), ...rows.map((r) => cols.map((c) => cell((r as any)[c])).join(','))].join('\n');
  return new Response(csv + '\n', { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
