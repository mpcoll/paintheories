import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { KINDS, DOMAINS, LEVELS, QUESTIONS, PAIN_TYPES, STATUSES, RELATIONS, EVIDENCE_DIRECTIONS, EVIDENCE_METHODS, keys } from './data/taxonomy';

/**
 * Bibliography. One shared list so that a paper cited by several theories is
 * stored once. Entries with a DOI are generated and checked with
 * `npm run ref:add -- <doi>` / `npm run ref:verify` (Crossref).
 */
const references = defineCollection({
  loader: file('src/data/references.yaml'),
  schema: z.object({
    type: z.enum(['article', 'book', 'chapter', 'other']).default('article'),
    authors: z.array(z.string()).min(1), // "Family, G." format
    year: z.number().int(),
    title: z.string(),
    container: z.string().optional(), // journal or book title
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    publisher: z.string().optional(),
    editors: z.array(z.string()).optional(),
    doi: z.string().optional(),
    url: z.url().optional(),
    // crossref = metadata pulled from Crossref by DOI; manual = typed by hand and needs checking
    source: z.enum(['crossref', 'manual']),
    note: z.string().optional(),
  }),
});

/** Mechanisms and constructs that theories invoke (nodes theories point to). */
const mechanisms = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mechanisms' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    levels: z.array(z.enum(keys(LEVELS))).min(1),
    references: z.array(reference('references')).default([]),
  }),
});

const theories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/theories' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(), // label used on the map
    aliases: z.array(z.string()).default([]),
    kind: z.enum(keys(KINDS)),
    year: z.number().int(), // year of the founding publication (negative = BCE)
    proponents: z.array(z.string()).min(1),
    summary: z.string().max(400), // one or two sentences
    domain: z.enum(keys(DOMAINS)),
    levels: z.array(z.enum(keys(LEVELS))).min(1),
    questions: z.array(z.enum(keys(QUESTIONS))).min(1),
    painTypes: z.array(z.enum(keys(PAIN_TYPES))).min(1),
    status: z.enum(keys(STATUSES)),
    coreClaims: z.array(z.string()).min(1),
    predictions: z.array(z.string()).default([]),
    mechanisms: z.array(reference('mechanisms')).default([]),
    relations: z
      .array(
        z.object({
          type: z.enum(keys(RELATIONS)),
          target: reference('theories'),
          note: z.string().optional(),
        }),
      )
      .default([]),
    // Key empirical findings bearing on the theory; each must cite at least one paper.
    evidence: z
      .array(
        z.object({
          finding: z.string(),
          direction: z.enum(keys(EVIDENCE_DIRECTIONS)),
          method: z.enum(keys(EVIDENCE_METHODS)).optional(),
          refs: z.array(reference('references')).min(1),
        }),
      )
      .default([]),
    // Original schematic in src/diagrams/<id>.svg; caption shown under it.
    diagram: z.object({ caption: z.string(), after: z.array(reference('references')).default([]) }).optional(),
    foundational: z.array(reference('references')).min(1), // the papers that proposed it
    keyReferences: z.array(reference('references')).default([]), // reviews, critiques, tests
    // draft = written but not yet reviewed by a domain expert; reviewed = checked
    review: z.enum(['stub', 'draft', 'reviewed']).default('draft'),
    updated: z.coerce.date(),
  }),
});

/**
 * Open questions / research gaps: where theories make competing, testable predictions.
 * Predictions are derived by the editors from each theory's core claims.
 */
const gaps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gaps' }),
  schema: z.object({
    title: z.string(), // phrased as a question
    order: z.number().int(),
    summary: z.string().max(500), // why it matters
    questions: z.array(z.enum(keys(QUESTIONS))).min(1),
    predictions: z
      .array(z.object({ theory: reference('theories'), prediction: z.string() }))
      .min(2),
    test: z.object({
      design: z.string(), // a study that would discriminate between the predictions
      decisive: z.string(), // what result would favour which theory
    }),
    references: z.array(reference('references')).default([]),
    review: z.enum(['stub', 'draft', 'reviewed']).default('draft'),
    updated: z.coerce.date(),
  }),
});

/** Pain Biology: stations and pathways of the pain-circuit figure (/biology/). */
const LEVELS_ANAT = ['spinal', 'medulla', 'pons', 'midbrain', 'limbic', 'striatum', 'thalamus', 'cortex'] as const;
const circuitStations = defineCollection({
  loader: file('src/data/circuit-stations.yaml'),
  schema: z.object({
    name: z.string(),
    short: z.string(),
    level: z.enum(LEVELS_ANAT),
    role: z.string(),
    refs: z.array(reference('references')).min(1),
    theories: z.array(reference('theories')).default([]),
    mechanisms: z.array(reference('mechanisms')).default([]),
    planum: z.object({
      region: z.string(),
      atlas: z.string().default('destrieux'),
      detail: z.string().default('learning'),
      view: z.enum(['oblique', 'left', 'right', 'anterior', 'posterior', 'superior', 'inferior']),
      cortex: z.boolean(),
      hemi: z.enum(['left', 'right']).optional(),
      mark: z.array(z.string()).max(12).optional(), // extra regions highlighted together (whole structure)
    }),
    note: z.string().optional(),
  }),
});
const circuitPathways = defineCollection({
  loader: file('src/data/circuit-pathways.yaml'),
  schema: z.object({
    name: z.string(),
    kind: z.enum(['ascending', 'descending', 'cortical']),
    summary: z.string(),
    stations: z.array(reference('circuitStations')).min(2),
    edges: z.array(z.tuple([reference('circuitStations'), reference('circuitStations')])).min(1),
    refs: z.array(reference('references')).min(1),
    planumTour: z.string().optional(),
  }),
});

/** Pain Biology: periphery page (/biology/periphery/). */
const fibreTypes = defineCollection({
  loader: file('src/data/fibre-types.yaml'),
  schema: z.object({
    name: z.string(),
    short: z.string(),
    myelin: z.string(),
    diameter: z.string(),
    velocity: z.string(),
    velocityMid: z.number().positive(), // m/s, for the travel-time comparison
    threshold: z.string(),
    signals: z.string(),
    laminae: z.array(z.enum(['I', 'IIo', 'IIi', 'III', 'IV', 'V'])).min(1),
    markers: z.string(),
    role: z.string(),
    refs: z.array(reference('references')).min(1),
    theories: z.array(reference('theories')).default([]),
  }),
});
const transducers = defineCollection({
  loader: file('src/data/transducers.yaml'),
  schema: z.object({
    name: z.string(),
    modality: z.enum(['mechanical', 'thermal', 'chemical', 'encoding']),
    kind: z.string(),
    detects: z.string(),
    role: z.string(),
    refs: z.array(reference('references')).min(1),
  }),
});

export const collections = { references, mechanisms, theories, gaps, circuitStations, circuitPathways, fibreTypes, transducers };
