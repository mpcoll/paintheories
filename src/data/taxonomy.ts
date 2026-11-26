/**
 * Controlled vocabularies for the pain-theory map.
 *
 * Every classification field in a theory file must use one of the keys below;
 * the content schema (src/content.config.ts) enforces this at build time.
 * To add a category, add it here — labels and descriptions propagate to the site.
 */

type Vocab = Record<string, { label: string; description: string; inverse?: string }>;

/** What kind of entry this is (inclusion tiers; see PLAN.md §1). */
export const KINDS = {
  theory: {
    label: 'Theory',
    description:
      'A general account of what pain is, why it varies, or why it persists, intended to explain a broad range of pain phenomena.',
  },
  model: {
    label: 'Model',
    description:
      'A narrower, often testable account of a specific process or population (e.g. how acute pain becomes disabling chronic pain).',
  },
  framework: {
    label: 'Framework',
    description:
      'An integrative or meta-level perspective that organises other theories and models rather than proposing a single mechanism.',
  },
} as const satisfies Vocab;

/**
 * Broad explanatory domain. Used for the colour + shape of nodes on the map,
 * so it is deliberately limited to five values (one per entry).
 */
export const DOMAINS = {
  neurobiological: {
    label: 'Neurobiological',
    description: 'Explains pain primarily through peripheral, spinal, or brain mechanisms.',
  },
  cognitive: {
    label: 'Cognitive & computational',
    description: 'Explains pain through information processing, inference, attention, or decision-making.',
  },
  psychosocial: {
    label: 'Behavioural & psychosocial',
    description: 'Explains pain and disability through learning, emotion, beliefs, behaviour, and social context.',
  },
  integrative: {
    label: 'Integrative',
    description: 'Combines several domains into a single framework.',
  },
  conceptual: {
    label: 'Conceptual, evolutionary & sociocultural',
    description: 'Philosophical, evolutionary, historical, or sociocultural accounts of pain.',
  },
} as const satisfies Vocab;

/** Levels of explanation a theory operates at (multiple allowed). */
export const LEVELS = {
  cellular: { label: 'Molecular / cellular', description: 'Receptors, ion channels, cells, glia, immune signalling.' },
  circuit: { label: 'Neural circuit', description: 'Peripheral fibres, spinal cord, brainstem circuits.' },
  systems: { label: 'Brain systems', description: 'Large-scale brain networks and their dynamics.' },
  computational: { label: 'Cognitive / computational', description: 'Information processing, inference, attention, prediction.' },
  behavioural: { label: 'Behavioural / learning', description: 'Conditioning, avoidance, reinforcement, habits.' },
  psychosocial: { label: 'Psychosocial', description: 'Emotions, beliefs, coping, interpersonal and social context.' },
  sociocultural: { label: 'Sociocultural', description: 'Culture, meaning, institutions, history.' },
  evolutionary: { label: 'Evolutionary', description: 'Function and adaptive value of pain.' },
  philosophical: { label: 'Philosophical', description: 'The nature of pain as a mental state.' },
} as const satisfies Vocab;

/** The explanatory questions a theory addresses (multiple allowed). */
export const QUESTIONS = {
  nature: { label: 'What is pain?', description: 'The nature, constituents, or definition of pain.' },
  transmission: { label: 'How is noxious input signalled?', description: 'How information about tissue damage reaches the brain.' },
  variability: { label: 'Why does pain vary?', description: 'Why the same input produces different pain across people and contexts.' },
  chronicity: { label: 'Why does pain persist?', description: 'Why pain becomes chronic, or persists without ongoing tissue damage.' },
  disability: { label: 'Why does pain disable?', description: 'Why pain leads to disability, distress, and reduced function.' },
  function: { label: 'What is pain for?', description: 'The biological or social function of pain.' },
} as const satisfies Vocab;

/** Types of pain a theory primarily addresses (multiple allowed). */
export const PAIN_TYPES = {
  acute: { label: 'Acute', description: 'Short-lasting pain, typically linked to injury or noxious stimulation.' },
  chronic: { label: 'Chronic', description: 'Pain persisting or recurring for more than 3 months.' },
  nociceptive: { label: 'Nociceptive', description: 'Pain arising from actual or threatened damage to non-neural tissue.' },
  neuropathic: { label: 'Neuropathic', description: 'Pain caused by a lesion or disease of the somatosensory nervous system.' },
  nociplastic: { label: 'Nociplastic', description: 'Pain arising from altered nociception without clear evidence of tissue or nerve damage.' },
  general: { label: 'Pain in general', description: 'Not specific to a pain type.' },
} as const satisfies Vocab;

/** Current standing of the theory in the field. */
export const STATUSES = {
  historical: { label: 'Historical', description: 'Mainly of historical interest; foundational but no longer defended in its original form.' },
  superseded: { label: 'Superseded', description: 'Largely replaced by a successor theory, though elements survive.' },
  active: { label: 'Active', description: 'Widely used and actively researched.' },
  contested: { label: 'Contested', description: 'Actively researched but with substantial open debate about its validity or scope.' },
  emerging: { label: 'Emerging', description: 'Recent proposal with a growing but limited evidence base.' },
} as const satisfies Vocab;

/**
 * Directed relationships between entries: "<this theory> <relation> <target>".
 * These become the edges of the network map.
 */
export const RELATIONS = {
  'builds-on': { label: 'builds on', inverse: 'built upon by', description: 'Adopts and develops core ideas of the target.' },
  extends: { label: 'extends', inverse: 'extended by', description: 'Is a direct successor or revision of the target by overlapping authors.' },
  challenges: { label: 'challenges', inverse: 'challenged by', description: 'Was proposed against, or provides evidence against, the target.' },
  integrates: { label: 'integrates', inverse: 'integrated into', description: 'Incorporates the target as one component of a broader framework.' },
  'related-to': { label: 'related to', inverse: 'related to', description: 'Shares mechanisms or constructs without a direct lineage.' },
} as const satisfies Vocab;

/** How strongly a finding bears on the theory. */
export const EVIDENCE_DIRECTIONS = {
  supports: { label: 'Supports', description: 'The finding is consistent with, or was predicted by, the theory.' },
  contradicts: { label: 'Contradicts', description: 'The finding is inconsistent with a core claim or prediction of the theory.' },
  mixed: { label: 'Mixed', description: 'Results are inconsistent across studies, or the finding supports one claim and challenges another.' },
} as const satisfies Vocab;

/** Type of study a finding comes from. */
export const EVIDENCE_METHODS = {
  animal: { label: 'Animal study', description: 'Experimental work in non-human animals.' },
  'human-experimental': { label: 'Human experimental', description: 'Laboratory studies in humans (psychophysics, QST, experimental pain).' },
  neuroimaging: { label: 'Neuroimaging', description: 'fMRI, PET, EEG/MEG or structural imaging.' },
  clinical: { label: 'Clinical observation', description: 'Patient series, case reports and cross-sectional clinical studies.' },
  longitudinal: { label: 'Prospective cohort', description: 'Longitudinal studies following people over time.' },
  intervention: { label: 'Intervention trial', description: 'Randomised or controlled trials of treatments.' },
  'meta-analysis': { label: 'Meta-analysis', description: 'Quantitative synthesis of multiple studies.' },
  review: { label: 'Review', description: 'Narrative or systematic review.' },
  computational: { label: 'Computational modelling', description: 'Formal models fitted to or simulating data.' },
  genetic: { label: 'Genetic / molecular', description: 'Genetic, molecular or cellular studies.' },
} as const satisfies Vocab;

export type Key<V> = Extract<keyof V, string>;
export const keys = <V extends object>(v: V) => Object.keys(v) as [Key<V>, ...Key<V>[]];

/** Colour slot (1–5) and node shape for each domain; shape is the non-colour channel. */
export const DOMAIN_STYLE: Record<Key<typeof DOMAINS>, { slot: number; shape: string; symbol: string }> = {
  neurobiological: { slot: 1, shape: 'ellipse', symbol: '●' },
  cognitive: { slot: 2, shape: 'diamond', symbol: '◆' },
  psychosocial: { slot: 3, shape: 'round-rectangle', symbol: '■' },
  integrative: { slot: 4, shape: 'hexagon', symbol: '⬢' },
  conceptual: { slot: 5, shape: 'triangle', symbol: '▲' },
};
