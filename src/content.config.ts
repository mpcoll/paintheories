import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { KINDS, DOMAINS, LEVELS, QUESTIONS, PAIN_TYPES, STATUSES, RELATIONS, EVIDENCE_DIRECTIONS, EVIDENCE_METHODS, keys } from './data/taxonomy';
import { FAMILIES, REGIONS, DESCRIPTORS, DESCRIPTOR_ROLES } from './data/conditions-taxonomy';
import { MODALITIES, TARGETS, GROUPS, EFFECT_SIZES, CERTAINTY, RECOMMENDATIONS, GUIDELINES } from './data/treatments-taxonomy';

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
    edges: z
      .array(
        z.object({
          from: reference('circuitStations'),
          to: reference('circuitStations'),
          reciprocal: z.boolean().default(false), // drawn with arrowheads at both ends
          note: z.string(), // what the connection is and what kind of evidence shows it
          refs: z.array(reference('references')).min(1),
        }),
      )
      .min(1),
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

/** Pain Biology: sensitization page (/biology/sensitization/). */
const inflammatoryMediators = defineCollection({
  loader: file('src/data/inflammatory-mediators.yaml'),
  schema: z.object({
    name: z.string(),
    short: z.string(),
    source: z.string(),
    sourceCell: z.enum(['plasma', 'immune', 'mast', 'tissue']),
    receptor: z.string(),
    effect: z.string(),
    refs: z.array(reference('references')).min(1),
  }),
});

/** Pain Biology: neuroimaging page (/biology/imaging/). */
const IMAGING_METHODS = ['eeg', 'meg', 'ieeg', 'fmri', 'spinal-fmri', 'pet', 'structural'] as const;
const imagingMethods = defineCollection({
  loader: file('src/data/imaging-methods.yaml'),
  schema: z.object({
    name: z.string(),
    short: z.string(),
    measures: z.string(), // what the signal is
    spatial: z.tuple([z.number().positive(), z.number().positive()]), // typical range, mm (approximate orders of magnitude)
    temporal: z.tuple([z.number().positive(), z.number().positive()]), // typical range, seconds
    strengths: z.string(),
    limits: z.string(),
    painUse: z.string(), // how it is used in pain research
    refs: z.array(reference('references')).min(1),
  }),
});
const imagingFindings = defineCollection({
  loader: file('src/data/imaging-findings.yaml'),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    method: z.enum(IMAGING_METHODS),
    kind: z.enum(['mapping', 'specificity', 'decoding', 'modulation', 'timing', 'molecular', 'connectivity']),
    population: z.enum(['experimental', 'clinical']), // acute experimental pain in healthy people vs patients
    finding: z.string().max(500),
    significance: z.string().max(400),
    evidence: z.enum(['robust', 'debated', 'single-study']),
    stations: z.array(reference('circuitStations')).default([]),
    theories: z.array(reference('theories')).default([]),
    conditions: z.array(reference('conditions')).default([]),
    refs: z.array(reference('references')).min(1),
  }),
});
const painSignatures = defineCollection({
  loader: file('src/data/pain-signatures.yaml'),
  schema: z.object({
    name: z.string(),
    short: z.string(),
    year: z.number().int(),
    method: z.enum(IMAGING_METHODS),
    target: z.string(), // what it is meant to track
    development: z.string(), // training data
    validation: z.string(), // tests and performance, as reported
    specificity: z.string(), // tests against other states (warmth, rejection, anticipation...)
    caveats: z.string(),
    availability: z.enum(['open', 'on-request', 'not-shared']),
    availabilityNote: z.string().optional(),
    refs: z.array(reference('references')).min(1),
  }),
});

/**
 * Pain Conditions (/conditions/): chronic pain conditions seen through three lenses,
 * traditional family, ICD-11 (MG30 chronic pain codes) and IASP mechanistic descriptors.
 * ICD codes/titles are checked against the WHO release with `npm run icd:check`.
 */
const icdCode = z.object({ code: z.string(), title: z.string() });
const conditions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/conditions' }),
  schema: z.object({
    title: z.string(),
    aliases: z.array(z.string()).default([]),
    summary: z.string().max(400),
    family: z.enum(keys(FAMILIES)),
    regions: z.array(z.enum(keys(REGIONS))).min(1),
    icd: z.object({
      // MG30 chronic pain code(s); `when` explains a conditional mapping (e.g. primary vs secondary);
      // `descriptors` (optional) limits which of the condition's descriptors apply under this code
      pain: z.array(icdCode.extend({ code: z.string().regex(/^MG30\.\d/), when: z.string().optional(), descriptors: z.array(z.enum(keys(DESCRIPTORS))).optional() })).min(1),
      condition: z.array(icdCode).default([]), // underlying disease code(s) to "code also"
      note: z.string().optional(),
      refs: z.array(reference('references')).min(1),
    }),
    descriptors: z
      .array(
        z.object({
          type: z.enum(keys(DESCRIPTORS)),
          role: z.enum(keys(DESCRIPTOR_ROLES)),
          note: z.string(),
          refs: z.array(reference('references')).min(1),
        }),
      )
      .min(1),
    prevalence: z
      .object({
        value: z.string(),
        population: z.string(),
        refs: z.array(reference('references')).min(1),
        // Numbers for the prevalence chart (percent). basis: population = % of the general (or stated
        // sub-)population; group = % of people with an underlying condition. rangeOnly: no point estimate.
        // derived: computed by us (e.g. global count / world population), shown as a hollow marker.
        chart: z
          .object({
            basis: z.enum(['population', 'group']),
            pct: z.number().positive().optional(),
            low: z.number().positive().optional(),
            high: z.number().positive().optional(),
            derived: z.boolean().default(false),
            group: z.string().optional(),
            note: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    criteria: z.object({ name: z.string(), summary: z.string(), refs: z.array(reference('references')).min(1) }).optional(),
    mechanisms: z.array(reference('mechanisms')).default([]),
    theories: z.array(reference('theories')).default([]),
    related: z.array(reference('conditions')).default([]),
    references: z.array(reference('references')).default([]),
    review: z.enum(['stub', 'draft', 'reviewed']).default('draft'),
    updated: z.coerce.date(),
  }),
});

/**
 * Pain Treatments (/treatments/). Evidence records are per condition group, with the
 * effect as the source reports it (e.g. NNT) and GRADE certainty when given.
 * Guideline records state the guideline's own direction and cite its wording in `note`.
 */
const treatments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/treatments' }),
  schema: z.object({
    title: z.string(),
    aliases: z.array(z.string()).default([]),
    summary: z.string().max(400),
    modality: z.enum(keys(MODALITIES)),
    class: z.string(), // e.g. "Serotonin-noradrenaline reuptake inhibitor"
    targets: z.array(z.enum(keys(TARGETS))).min(1),
    mechanism: z.object({ summary: z.string(), refs: z.array(reference('references')).min(1) }),
    evidence: z
      .array(
        z.object({
          group: z.enum(keys(GROUPS)),
          condition: reference('conditions').optional(), // when the evidence is for one specific condition
          comparator: z.string(),
          outcome: z.string(),
          effect: z.string(), // as the source reports it, e.g. "NNT 7.4 (95% CI 5.6 to 10.9) for 50% pain relief"
          size: z.enum(keys(EFFECT_SIZES)),
          certainty: z.enum(keys(CERTAINTY)),
          refs: z.array(reference('references')).min(1),
        }),
      )
      .default([]),
    harms: z.object({ summary: z.string(), refs: z.array(reference('references')).min(1) }).optional(),
    guidelines: z
      .array(
        z.object({
          guideline: z.enum(keys(GUIDELINES)),
          recommendation: z.enum(keys(RECOMMENDATIONS)),
          population: z.string(),
          note: z.string(), // the guideline's direction in its own terms, briefly quoted or paraphrased
        }),
      )
      .default([]),
    mechanisms: z.array(reference('mechanisms')).default([]),
    theories: z.array(reference('theories')).default([]),
    related: z.array(reference('treatments')).default([]),
    references: z.array(reference('references')).default([]),
    review: z.enum(['stub', 'draft', 'reviewed']).default('draft'),
    updated: z.coerce.date(),
  }),
});

export const collections = { references, mechanisms, theories, gaps, circuitStations, circuitPathways, fibreTypes, transducers, inflammatoryMediators, conditions, imagingMethods, imagingFindings, painSignatures, treatments };
