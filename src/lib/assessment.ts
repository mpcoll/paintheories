import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES, CONSTRUCTS, POPULATIONS, IMMPACT_DOMAINS, PROPERTY_KINDS, AVAILABILITY } from '../data/assessment-taxonomy';
import { url } from './data';

export type Instrument = CollectionEntry<'instruments'>;
export const CATEGORY_ORDER = Object.keys(CATEGORIES) as (keyof typeof CATEGORIES)[];
export const CONSTRUCT_ORDER = Object.keys(CONSTRUCTS) as (keyof typeof CONSTRUCTS)[];
export const POPULATION_ORDER = Object.keys(POPULATIONS) as (keyof typeof POPULATIONS)[];
export const DOMAIN_ORDER = Object.keys(IMMPACT_DOMAINS) as (keyof typeof IMMPACT_DOMAINS)[];
export const PROPERTY_ORDER = Object.keys(PROPERTY_KINDS) as (keyof typeof PROPERTY_KINDS)[];
export const AVAILABILITY_ORDER = Object.keys(AVAILABILITY) as (keyof typeof AVAILABILITY)[];

export async function getInstruments() {
  return (await getCollection('instruments')).sort((a, b) => a.data.title.localeCompare(b.data.title));
}
export const instrumentUrl = (id: string) => url(`assessment/${id}/`);

/** Instruments that list a given condition, theory or mechanism id. */
export const instrumentsFor = (all: Instrument[], field: 'conditions' | 'theories' | 'mechanisms', id: string) =>
  all.filter((i) => i.data[field].some((r) => r.id === id));

export function instrumentRecord(i: Instrument) {
  const d = i.data;
  return {
    id: i.id, title: d.title, short: d.short, aliases: d.aliases, summary: d.summary, category: d.category,
    constructs: d.constructs, populations: d.populations, format: d.format,
    properties: d.properties.map((p) => ({ kind: p.kind, value: p.value, population: p.population ?? null, refs: p.refs.map((r) => r.id) })),
    immpact: d.immpact ? { domain: d.immpact.domain, note: d.immpact.note, refs: d.immpact.refs.map((r) => r.id) } : null,
    availability: d.availability,
    conditions: d.conditions.map((r) => r.id), theories: d.theories.map((r) => r.id), mechanisms: d.mechanisms.map((r) => r.id),
    review: d.review, updated: d.updated.toISOString().slice(0, 10),
  };
}
