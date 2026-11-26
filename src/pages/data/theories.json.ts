import type { APIRoute } from 'astro';
import { getTheories, theoryRecord } from '../../lib/data';
import { computeMetrics, CITATION_SOURCE, CITATION_DATE } from '../../lib/metrics';
import * as taxonomy from '../../data/taxonomy';

export const GET: APIRoute = async () => {
  const entries = await getTheories();
  const metrics = computeMetrics(entries);
  const theories = entries.map((t) => ({ ...theoryRecord(t), metrics: metrics.get(t.id) }));
  const vocab = Object.fromEntries(
    ['KINDS', 'DOMAINS', 'LEVELS', 'QUESTIONS', 'PAIN_TYPES', 'STATUSES', 'RELATIONS'].map((k) => [
      k.toLowerCase(),
      (taxonomy as any)[k],
    ]),
  );
  const body = {
    name: 'Pain Knowledge: Pain Theories',
    license: 'CC-BY-4.0',
    source: 'https://github.com/mpcoll/paintheories',
    generated: new Date().toISOString(),
    vocabularies: vocab,
    metricsNote: `metrics.citations: summed citation counts of founding publications (${CITATION_SOURCE}, retrieved ${CITATION_DATE}); null if none indexed. metrics.influence: number of theories on the map with a relation to this theory.`,
    theories,
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json' } });
};
