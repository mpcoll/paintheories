import { getCollection, type CollectionEntry } from 'astro:content';
import { ICD_CATEGORIES, icdCategoryOf, DESCRIPTORS, DESCRIPTOR_ROLES, FAMILIES, REGIONS, type IcdCategory } from '../data/conditions-taxonomy';
import { url } from './data';

export type Condition = CollectionEntry<'conditions'>;
export type DescriptorType = keyof typeof DESCRIPTORS;
export type DescriptorRole = keyof typeof DESCRIPTOR_ROLES;

export const DESC_ORDER: DescriptorType[] = ['nociceptive', 'neuropathic', 'nociplastic'];
export const ROLE_ORDER: DescriptorRole[] = ['defining', 'common', 'subset'];
export const CATEGORY_ORDER = Object.keys(ICD_CATEGORIES) as IcdCategory[];
export const FAMILY_ORDER = Object.keys(FAMILIES) as (keyof typeof FAMILIES)[];
export const REGION_ORDER = Object.keys(REGIONS) as (keyof typeof REGIONS)[];

export async function getConditions() {
  return (await getCollection('conditions')).sort((a, b) => a.data.title.localeCompare(b.data.title));
}

/** ICD-11 chronic pain categories a condition can be coded under (in category order). */
export const categoriesOf = (c: Condition) =>
  CATEGORY_ORDER.filter((cat) => c.data.icd.pain.some((p) => icdCategoryOf(p.code) === cat));

/** Descriptor types that apply when the condition is coded under an ICD-11 category. */
export function descriptorsUnder(c: Condition, cat: IcdCategory): DescriptorType[] {
  const codes = c.data.icd.pain.filter((p) => icdCategoryOf(p.code) === cat);
  const present = DESC_ORDER.filter((t) => c.data.descriptors.some((d) => d.type === t));
  if (!codes.length) return [];
  if (codes.some((p) => !p.descriptors)) return present;
  return present.filter((t) => codes.some((p) => p.descriptors!.includes(t)));
}

/** Strongest role per descriptor type, or null when the descriptor does not apply. */
export function descriptorProfile(c: Condition): Record<DescriptorType, DescriptorRole | null> {
  const out = { nociceptive: null, neuropathic: null, nociplastic: null } as Record<DescriptorType, DescriptorRole | null>;
  for (const d of c.data.descriptors) {
    const cur = out[d.type];
    if (!cur || ROLE_ORDER.indexOf(d.role) < ROLE_ORDER.indexOf(cur)) out[d.type] = d.role;
  }
  return out;
}

export const conditionUrl = (id: string) => url(`conditions/${id}/`);

/** Compact JSON record for client scripts and the data export. */
export function conditionRecord(c: Condition) {
  const d = c.data;
  return {
    id: c.id,
    title: d.title,
    aliases: d.aliases,
    summary: d.summary,
    family: d.family,
    regions: d.regions,
    icd: {
      pain: d.icd.pain.map((p) => ({ code: p.code, title: p.title, category: icdCategoryOf(p.code), when: p.when ?? null })),
      condition: d.icd.condition,
    },
    descriptors: d.descriptors.map((x) => ({ type: x.type, role: x.role, note: x.note, refs: x.refs.map((r) => r.id) })),
    prevalence: d.prevalence ? { value: d.prevalence.value, population: d.prevalence.population, refs: d.prevalence.refs.map((r) => r.id) } : null,
    criteria: d.criteria ? { name: d.criteria.name, refs: d.criteria.refs.map((r) => r.id) } : null,
    theories: d.theories.map((t) => t.id),
    mechanisms: d.mechanisms.map((m) => m.id),
    review: d.review,
    updated: d.updated.toISOString().slice(0, 10),
  };
}
