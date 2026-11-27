import type { APIRoute } from 'astro';
import { getConditions, conditionRecord } from '../../lib/conditions';
import { FAMILIES, REGIONS, ICD_CATEGORIES, DESCRIPTORS, DESCRIPTOR_ROLES, ICD_RELEASE } from '../../data/conditions-taxonomy';

export const GET: APIRoute = async () => {
  const conditions = (await getConditions()).map(conditionRecord);
  const body = {
    name: 'Pain Knowledge: Pain Conditions',
    license: 'CC-BY-4.0 (ICD-11 codes and titles: WHO, CC BY-ND 3.0 IGO)',
    source: 'https://github.com/mpcoll/paintheories',
    icdRelease: ICD_RELEASE,
    generated: new Date().toISOString(),
    vocabularies: { families: FAMILIES, regions: REGIONS, icdCategories: ICD_CATEGORIES, descriptors: DESCRIPTORS, descriptorRoles: DESCRIPTOR_ROLES },
    conditions,
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json' } });
};
