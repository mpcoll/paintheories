/**
 * Vocabularies for the Pain Assessment module (/assessment/).
 * Measurement properties are recorded as the source reports them (COSMIN terms,
 * Mokkink et al. 2010). Availability is stated as the developer or licence holder publishes it.
 */

type Vocab = Record<string, { label: string; description: string }>;

export const CATEGORIES = {
  'self-report': { label: 'Self-report', description: 'Questionnaires and rating scales completed by the person in pain.' },
  observational: { label: 'Observation', description: 'Scales completed by an observer, for people who cannot self-report.' },
  psychophysical: { label: 'Psychophysics', description: 'Standardised stimuli and the person\'s responses: thresholds, summation, modulation.' },
  neurophysiological: { label: 'Neurophysiology', description: 'Recordings of nerve or brain responses.' },
} as const satisfies Vocab;

/** What an instrument measures (columns of the "what can be measured" map). */
export const CONSTRUCTS = {
  intensity: { label: 'Pain intensity', description: 'How much it hurts.' },
  quality: { label: 'Pain quality', description: 'What the pain feels like (burning, shooting, aching).' },
  interference: { label: 'Function and interference', description: 'How pain affects daily activities, work and roles.' },
  emotional: { label: 'Emotional functioning', description: 'Mood, distress and pain-related affect.' },
  cognitive: { label: 'Beliefs and coping', description: 'Catastrophizing, fear of movement, self-efficacy, acceptance.' },
  symptoms: { label: 'Symptom burden', description: 'Somatic and emotional symptoms beyond pain, such as fatigue, poor sleep and concentration problems.' },
  risk: { label: 'Risk of persistence', description: 'Prognostic screening for poor outcome.' },
  neuropathic: { label: 'Neuropathic features', description: 'Screening for a neuropathic component.' },
  sensory: { label: 'Sensory profile', description: 'Detection and pain thresholds, gain or loss of function.' },
  modulation: { label: 'Pain modulation', description: 'Endogenous facilitation and inhibition, such as temporal summation and conditioned pain modulation.' },
  behaviour: { label: 'Observed pain behaviour', description: 'Facial expression, vocalisation, body movement.' },
  global: { label: 'Overall improvement', description: 'The person\'s global rating of change.' },
} as const satisfies Vocab;

export const POPULATIONS = {
  adults: { label: 'Adults', description: 'Adults able to self-report.' },
  children: { label: 'Children', description: 'Children and adolescents.' },
  'older-adults': { label: 'Older adults', description: 'Older adults, including those with mild cognitive impairment.' },
  dementia: { label: 'Dementia', description: 'People with advanced dementia who cannot self-report.' },
  'critical-care': { label: 'Critical care', description: 'Critically ill adults, including those who are intubated.' },
  infants: { label: 'Infants', description: 'Neonates and infants.' },
} as const satisfies Vocab;

/** IMMPACT core outcome domains for chronic pain trials (Turk et al. 2003; measures in Dworkin et al. 2005, 2008). */
export const IMMPACT_DOMAINS = {
  pain: { label: 'Pain', description: 'Pain intensity and other aspects of pain.' },
  physical: { label: 'Physical functioning', description: 'Interference with activities and roles.' },
  emotional: { label: 'Emotional functioning', description: 'Mood, depression and anxiety.' },
  global: { label: 'Participant ratings of improvement and satisfaction', description: 'Participant ratings of improvement and satisfaction with treatment.' },
  symptoms: { label: 'Symptoms and adverse events', description: 'Adverse events and other symptoms during treatment.' },
  disposition: { label: 'Participant disposition', description: 'For example adherence to the treatment regimen and reasons for premature withdrawal.' },
} as const satisfies Vocab;

export const PROPERTY_KINDS = {
  reliability: { label: 'Reliability', description: 'Consistency: internal consistency, test-retest, inter-rater.' },
  validity: { label: 'Validity', description: 'Whether it measures what it should: content, structural, construct and criterion validity.' },
  responsiveness: { label: 'Responsiveness', description: 'Ability to detect change over time.' },
  mic: { label: 'Meaningful change', description: 'Smallest change that people consider important (minimal important change or difference).' },
  cutoff: { label: 'Cut-off', description: 'Score used to classify, with its sensitivity and specificity.' },
  norms: { label: 'Reference values', description: 'Normative or reference data.' },
} as const satisfies Vocab;

export const AVAILABILITY = {
  free: { label: 'Free to use', description: 'Public domain or free for clinical and research use.' },
  permission: { label: 'Free with permission', description: 'Free, but the developer asks users to register or request permission.' },
  licensed: { label: 'Licensed', description: 'Requires a licence, which may involve a fee.' },
  method: { label: 'Method, no licence', description: 'A test procedure rather than a proprietary instrument: no licence applies, but it needs equipment and trained staff.' },
  unclear: { label: 'Check terms', description: 'We could not confirm the terms of use.' },
} as const satisfies Vocab;
