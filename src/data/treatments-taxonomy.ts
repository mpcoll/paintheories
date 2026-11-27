/**
 * Vocabularies for the Pain Treatments module (/treatments/).
 * Evidence is recorded per condition group as reported by the source (effect as
 * reported, GRADE certainty when the source gives one). Guideline recommendations
 * quote the guideline's own direction (offer / consider / do not offer).
 */

type Vocab = Record<string, { label: string; description: string }>;

export const MODALITIES = {
  drug: { label: 'Medicines', description: 'Oral, topical or injected medicines.' },
  psychological: { label: 'Psychological therapies', description: 'Therapies that change how people think about, attend to and respond to pain.' },
  physical: { label: 'Physical therapies', description: 'Exercise, manual therapy and physical modalities.' },
  interventional: { label: 'Interventional procedures', description: 'Injections, nerve ablation and implanted devices.' },
  neuromodulation: { label: 'Non-invasive brain stimulation', description: 'Stimulating the brain through the scalp with magnetic fields or weak currents.' },
  complementary: { label: 'Complementary approaches', description: 'Approaches such as acupuncture, and placebo given openly.' },
  multidisciplinary: { label: 'Interdisciplinary programmes', description: 'Coordinated programmes that combine physical, psychological and educational components.' },
} as const satisfies Vocab;

/** Where along the pain system a treatment is thought to act (for the "where it acts" figure). */
export const TARGETS = {
  periphery: { label: 'Periphery', description: 'Nociceptors, peripheral nerves and inflamed tissue.' },
  spinal: { label: 'Spinal cord', description: 'Transmission and gating in the dorsal horn.' },
  descending: { label: 'Descending modulation', description: 'Brainstem pathways that inhibit or facilitate spinal transmission.' },
  brain: { label: 'Brain processing', description: 'Cortical and subcortical processing, central sensitization and network activity.' },
  mind: { label: 'Thoughts and emotions', description: 'Beliefs, attention, expectation, fear and mood.' },
  behaviour: { label: 'Behaviour', description: 'Activity, avoidance and daily function.' },
} as const satisfies Vocab;

/** Condition groups for the evidence map; `conditions` links to /conditions/ entries. */
export const GROUPS = {
  neuropathic: { label: 'Neuropathic pain', description: 'Peripheral and central neuropathic pain.', conditions: ['painful-diabetic-neuropathy', 'postherpetic-neuralgia', 'trigeminal-neuralgia', 'radiculopathy', 'central-post-stroke-pain', 'spinal-cord-injury-pain', 'multiple-sclerosis-pain', 'chemotherapy-induced-neuropathy', 'phantom-limb-pain'] },
  'low-back-pain': { label: 'Chronic low back pain', description: 'Mostly non-specific chronic low back pain.', conditions: ['chronic-low-back-pain'] },
  fibromyalgia: { label: 'Fibromyalgia', description: 'Fibromyalgia and chronic widespread pain.', conditions: ['fibromyalgia'] },
  osteoarthritis: { label: 'Osteoarthritis', description: 'Knee and hip osteoarthritis pain.', conditions: ['osteoarthritis'] },
  'chronic-primary': { label: 'Chronic primary pain', description: 'Mixed chronic primary pain populations, as in NICE NG193.', conditions: ['fibromyalgia', 'chronic-low-back-pain', 'irritable-bowel-syndrome'] },
  'chronic-pain': { label: 'Chronic pain (mixed)', description: 'Trials or reviews that pool several chronic pain conditions.', conditions: [] },
  migraine: { label: 'Migraine', description: 'Episodic and chronic migraine.', conditions: ['migraine'] },
  cancer: { label: 'Cancer pain', description: 'Pain from cancer or its treatment.', conditions: ['cancer-pain'] },
} as const;

export const EFFECT_SIZES = {
  large: { label: 'Large', description: 'Large benefit over the comparator, as the source reports it.' },
  moderate: { label: 'Moderate', description: 'Moderate benefit.' },
  small: { label: 'Small', description: 'Small benefit, often below what patients consider important.' },
  none: { label: 'No benefit', description: 'No benefit over the comparator.' },
  unclear: { label: 'Unclear', description: 'Too little or too inconsistent evidence to say.' },
} as const satisfies Vocab;

export const CERTAINTY = {
  high: { label: 'High', description: 'Further research is very unlikely to change confidence in the estimate (GRADE).' },
  moderate: { label: 'Moderate', description: 'Further research is likely to have an important impact on confidence (GRADE).' },
  low: { label: 'Low', description: 'Further research is very likely to change the estimate (GRADE).' },
  'very-low': { label: 'Very low', description: 'Any estimate of effect is very uncertain (GRADE).' },
  'not-graded': { label: 'Not graded', description: 'The source did not rate certainty with GRADE.' },
} as const satisfies Vocab;

export const RECOMMENDATIONS = {
  'strong-for': { label: 'Recommended', description: 'Strong recommendation for use (e.g. "offer", or a strong GRADE recommendation).' },
  'weak-for': { label: 'Consider', description: 'Conditional or weak recommendation (e.g. "consider").' },
  against: { label: 'Not recommended', description: 'Recommendation against use (e.g. "do not offer").' },
  insufficient: { label: 'No recommendation', description: 'The guideline found the evidence insufficient to recommend for or against.' },
} as const satisfies Vocab;

/** Guidelines cited by treatment entries. `ref` is a key in references.yaml. */
export const GUIDELINES = {
  'nice-ng193': { label: 'NICE NG193 (2021)', body: 'NICE', year: 2021, scope: 'Chronic primary pain in people aged 16 and over (England).', ref: 'nice2021' },
  'nice-ng59': { label: 'NICE NG59 (2016, updated 2026)', body: 'NICE', year: 2016, scope: 'Low back pain and sciatica in people aged 16 and over (England).', ref: 'nice2016' },
  'nice-ng226': { label: 'NICE NG226 (2022)', body: 'NICE', year: 2022, scope: 'Osteoarthritis in people aged 16 and over (England).', ref: 'nice2022' },
  'neupsig-2025': { label: 'NeuPSIG (2025)', body: 'IASP NeuPSIG', year: 2025, scope: 'Pharmacotherapy and non-invasive neuromodulation for neuropathic pain in adults.', ref: 'soliman2025' },
  'neupsig-2015': { label: 'NeuPSIG (2015)', body: 'IASP NeuPSIG', year: 2015, scope: 'Pharmacotherapy for neuropathic pain in adults.', ref: 'finnerup2015' },
  'cdc-2022': { label: 'CDC (2022)', body: 'US CDC', year: 2022, scope: 'Prescribing opioids for acute, subacute and chronic pain in outpatients (United States).', ref: 'dowell2022' },
  'eular-2017': { label: 'EULAR (2017)', body: 'EULAR', year: 2017, scope: 'Management of fibromyalgia.', ref: 'macfarlane2017' },
  'acp-2017': { label: 'ACP (2017)', body: 'American College of Physicians', year: 2017, scope: 'Non-invasive treatments for acute, subacute and chronic low back pain.', ref: 'qaseem2017' },
} as const;
export type GuidelineId = keyof typeof GUIDELINES;
