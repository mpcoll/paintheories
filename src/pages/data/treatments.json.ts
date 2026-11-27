import type { APIRoute } from 'astro';
import { getTreatments, treatmentRecord } from '../../lib/treatments';
import * as tax from '../../data/treatments-taxonomy';

export const GET: APIRoute = async () => {
  const treatments = (await getTreatments()).map(treatmentRecord);
  const body = {
    name: 'Pain Knowledge: Pain Treatments',
    license: 'CC-BY-4.0',
    source: 'https://github.com/mpcoll/paintheories',
    note: 'Teaching and research summary, not medical advice. Effect labels follow the rules on /treatments/reading-evidence/.',
    generated: new Date().toISOString(),
    vocabularies: { modalities: tax.MODALITIES, targets: tax.TARGETS, groups: tax.GROUPS, effectSizes: tax.EFFECT_SIZES, certainty: tax.CERTAINTY, recommendations: tax.RECOMMENDATIONS, guidelines: tax.GUIDELINES },
    treatments,
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json' } });
};
