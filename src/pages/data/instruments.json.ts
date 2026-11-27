import type { APIRoute } from 'astro';
import { getInstruments, instrumentRecord } from '../../lib/assessment';
import * as tax from '../../data/assessment-taxonomy';

export const GET: APIRoute = async () => {
  const instruments = (await getInstruments()).map(instrumentRecord);
  const body = {
    name: 'Pain Knowledge: Pain Assessment',
    license: 'CC-BY-4.0',
    source: 'https://github.com/mpcoll/paintheories',
    note: 'Measurement properties are reported as the cited source reports them. Licence terms change: check the developer page before use. This file describes instruments; it does not reproduce them.',
    generated: new Date().toISOString(),
    vocabularies: { categories: tax.CATEGORIES, constructs: tax.CONSTRUCTS, populations: tax.POPULATIONS, immpactDomains: tax.IMMPACT_DOMAINS, propertyKinds: tax.PROPERTY_KINDS, availability: tax.AVAILABILITY },
    instruments,
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json' } });
};
