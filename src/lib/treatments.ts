import { getCollection, type CollectionEntry } from 'astro:content';
import { MODALITIES, TARGETS, GROUPS, EFFECT_SIZES, CERTAINTY, RECOMMENDATIONS, GUIDELINES } from '../data/treatments-taxonomy';
import { url } from './data';

export type Treatment = CollectionEntry<'treatments'>;
export type GroupId = keyof typeof GROUPS;
export const MODALITY_ORDER = Object.keys(MODALITIES) as (keyof typeof MODALITIES)[];
export const TARGET_ORDER = ['periphery', 'spinal', 'descending', 'brain', 'mind', 'behaviour'] as (keyof typeof TARGETS)[];
export const GROUP_ORDER = Object.keys(GROUPS) as GroupId[];
export const SIZE_ORDER = ['large', 'moderate', 'small', 'none', 'unclear'] as (keyof typeof EFFECT_SIZES)[];
export const CERTAINTY_ORDER = ['high', 'moderate', 'low', 'very-low', 'not-graded'] as (keyof typeof CERTAINTY)[];
export const REC_ORDER = ['strong-for', 'weak-for', 'insufficient', 'against'] as (keyof typeof RECOMMENDATIONS)[];
export const GUIDELINE_ORDER = Object.keys(GUIDELINES) as (keyof typeof GUIDELINES)[];

export async function getTreatments() {
  return (await getCollection('treatments')).sort((a, b) => a.data.title.localeCompare(b.data.title));
}
export const treatmentUrl = (id: string) => url(`treatments/${id}/`);

/** Best-supported evidence record for a group: highest certainty, then largest effect. */
export function bestEvidence(t: Treatment, group: GroupId) {
  const recs = t.data.evidence.filter((e) => e.group === group);
  if (!recs.length) return null;
  return [...recs].sort((a, b) => CERTAINTY_ORDER.indexOf(a.certainty) - CERTAINTY_ORDER.indexOf(b.certainty) || SIZE_ORDER.indexOf(a.size) - SIZE_ORDER.indexOf(b.size))[0];
}

/** Treatments relevant to a condition id (evidence for it, or for a group that includes it). */
export function treatmentsForCondition(all: Treatment[], conditionId: string) {
  return all.filter((t) => t.data.evidence.some((e) => e.condition?.id === conditionId || (GROUPS[e.group].conditions as readonly string[]).includes(conditionId)));
}

export const guidelineCounts = (t: Treatment) => ({
  for: t.data.guidelines.filter((g) => g.recommendation === 'strong-for' || g.recommendation === 'weak-for').length,
  against: t.data.guidelines.filter((g) => g.recommendation === 'against').length,
});

export function treatmentRecord(t: Treatment) {
  const d = t.data;
  return {
    id: t.id, title: d.title, aliases: d.aliases, summary: d.summary, modality: d.modality, class: d.class, targets: d.targets,
    evidence: d.evidence.map((e) => ({ group: e.group, condition: e.condition?.id ?? null, comparator: e.comparator, outcome: e.outcome, effect: e.effect, size: e.size, certainty: e.certainty, refs: e.refs.map((r) => r.id) })),
    guidelines: d.guidelines, review: d.review, updated: d.updated.toISOString().slice(0, 10),
  };
}
