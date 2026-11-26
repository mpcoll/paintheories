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

export const collections = { references, mechanisms, theories, gaps };
