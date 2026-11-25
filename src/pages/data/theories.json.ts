import type { APIRoute } from 'astro';
import { getTheories, theoryRecord } from '../../lib/data';
import * as taxonomy from '../../data/taxonomy';

export const GET: APIRoute = async () => {
  const theories = (await getTheories()).map(theoryRecord);
  const vocab = Object.fromEntries(
    ['KINDS', 'DOMAINS', 'LEVELS', 'QUESTIONS', 'PAIN_TYPES', 'STATUSES', 'RELATIONS'].map((k) => [
      k.toLowerCase(),
      (taxonomy as any)[k],
    ]),
  );
  const body = {
    name: 'Pain Theories Map',
    license: 'CC-BY-4.0',
    source: 'https://github.com/mpcoll/paintheories',
    generated: new Date().toISOString(),
    vocabularies: vocab,
    theories,
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json' } });
};
