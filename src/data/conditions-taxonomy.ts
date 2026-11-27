/**
 * Vocabularies for the Pain Conditions module (/conditions/).
 *
 * Three lenses on the same condition entries:
 *  - FAMILIES: traditional clinical grouping (body region / specialty)
 *  - ICD-11 chronic pain categories (WHO ICD-11 MMS, MG30), see ICD_MG30 below
 *  - IASP mechanistic descriptors (nociceptive, neuropathic, nociplastic)
 *
 * ICD-11 codes and titles are verbatim from the WHO ICD-11 MMS 2026-01 release
 * (CC BY-ND 3.0 IGO) and are checked with `npm run icd:check`. Descriptions are
 * our own paraphrases.
 */

type Vocab = Record<string, { label: string; description: string }>;

export const ICD_RELEASE = '2026-01';
export const icdBrowser = (code: string) => `https://icd.who.int/browse/${ICD_RELEASE}/mms/en#${encodeURIComponent(code)}`;

/** Traditional clinical families (the "Traditional" lens). */
export const FAMILIES = {
  headache: { label: 'Headache and orofacial', description: 'Head, face, jaw and mouth: migraine, tension-type headache, facial neuralgias, temporomandibular and oral pain.' },
  spine: { label: 'Back and neck', description: 'Spinal pain, the commonest cause of years lived with disability worldwide.' },
  joints: { label: 'Joints and muscles', description: 'Rheumatic and musculoskeletal disease such as osteoarthritis and inflammatory arthritis.' },
  widespread: { label: 'Widespread pain', description: 'Pain across many body regions, such as fibromyalgia.' },
  nerve: { label: 'Nerve pain', description: 'Pain from injury or disease of peripheral nerves, the spinal cord or the brain.' },
  visceral: { label: 'Visceral and pelvic', description: 'Pain from or referred from internal organs of the chest, abdomen and pelvis.' },
  cancer: { label: 'Cancer pain', description: 'Pain caused by cancer or by its treatment.' },
  injury: { label: 'After surgery or injury', description: 'Pain that persists after an operation or a tissue injury has healed.' },
} as const satisfies Vocab;

/** Body-map regions (front and back views). */
export const REGIONS = {
  head: { label: 'Head', description: 'Head and scalp.' },
  face: { label: 'Face and mouth', description: 'Face, jaw, teeth and mouth.' },
  neck: { label: 'Neck', description: 'Neck and cervical spine.' },
  'upper-limb': { label: 'Shoulders and arms', description: 'Shoulders, arms and hands.' },
  chest: { label: 'Chest', description: 'Chest wall and thoracic organs.' },
  abdomen: { label: 'Abdomen', description: 'Abdominal wall and organs.' },
  pelvis: { label: 'Pelvis', description: 'Pelvic organs, perineum and genitals.' },
  back: { label: 'Back', description: 'Thoracic and lumbar back.' },
  'lower-limb': { label: 'Hips and legs', description: 'Hips, legs and feet.' },
  widespread: { label: 'Widespread', description: 'Many regions at once.' },
} as const satisfies Vocab;

/** ICD-11 chronic pain categories (second level of MG30). */
export const ICD_CATEGORIES = {
  'MG30.0': { label: 'Chronic primary pain', short: 'Primary', kind: 'primary', description: 'Chronic pain that is a condition in its own right: pain in one or more regions with significant emotional distress or functional disability, not better accounted for by another diagnosis.' },
  'MG30.1': { label: 'Chronic cancer related pain', short: 'Cancer', kind: 'secondary', description: 'Pain caused by a cancer or its metastases, or by cancer treatment.' },
  'MG30.2': { label: 'Chronic postsurgical or post traumatic pain', short: 'Postsurgical / posttraumatic', kind: 'secondary', description: 'Pain that develops or increases after surgery or tissue injury and persists beyond healing, at least 3 months after the event.' },
  'MG30.3': { label: 'Chronic secondary musculoskeletal pain', short: 'Musculoskeletal', kind: 'secondary', description: 'Pain from persistent nociception in bones, joints, muscles, spine or tendons, due to inflammation, structural change or neurological disease.' },
  'MG30.4': { label: 'Chronic secondary visceral pain', short: 'Visceral', kind: 'secondary', description: 'Pain from internal organs of the head and neck, chest, abdomen or pelvis, from mechanical factors, vascular mechanisms or persistent inflammation.' },
  'MG30.5': { label: 'Chronic neuropathic pain', short: 'Neuropathic', kind: 'secondary', description: 'Pain caused by a lesion or disease of the peripheral or central somatosensory nervous system, in a neuroanatomically plausible distribution.' },
  'MG30.6': { label: 'Chronic secondary headache or orofacial pain', short: 'Headache / orofacial', kind: 'secondary', description: 'Headache or orofacial pain with an underlying cause, on at least half the days for at least 3 months and at least 2 hours a day.' },
} as const;
export type IcdCategory = keyof typeof ICD_CATEGORIES;
export const icdCategoryOf = (code: string) => (Object.keys(ICD_CATEGORIES) as IcdCategory[]).find((c) => code === c || code.startsWith(c)) ?? null;

/** Third level of MG30 (verbatim WHO titles, 2026-01). Residual Y/Z codes omitted. */
export const ICD_MG30: { code: string; title: string }[] = [
  { code: 'MG30', title: 'Chronic pain' },
  { code: 'MG30.0', title: 'Chronic primary pain' },
  { code: 'MG30.00', title: 'Chronic primary visceral pain' },
  { code: 'MG30.01', title: 'Chronic widespread pain' },
  { code: 'MG30.02', title: 'Chronic primary musculoskeletal pain' },
  { code: 'MG30.03', title: 'Chronic primary headache or orofacial pain' },
  { code: 'MG30.04', title: 'Complex regional pain syndrome' },
  { code: 'MG30.1', title: 'Chronic cancer related pain' },
  { code: 'MG30.10', title: 'Chronic cancer pain' },
  { code: 'MG30.11', title: 'Chronic post cancer treatment pain' },
  { code: 'MG30.2', title: 'Chronic postsurgical or post traumatic pain' },
  { code: 'MG30.20', title: 'Chronic post traumatic pain' },
  { code: 'MG30.21', title: 'Chronic postsurgical pain' },
  { code: 'MG30.3', title: 'Chronic secondary musculoskeletal pain' },
  { code: 'MG30.30', title: 'Chronic secondary musculoskeletal pain from persistent inflammation' },
  { code: 'MG30.31', title: 'Chronic secondary musculoskeletal pain associated with structural changes' },
  { code: 'MG30.32', title: 'Chronic secondary musculoskeletal pain due to disease of the nervous system' },
  { code: 'MG30.4', title: 'Chronic secondary visceral pain' },
  { code: 'MG30.40', title: 'Chronic visceral pain from mechanical factors' },
  { code: 'MG30.41', title: 'Chronic visceral pain from vascular mechanisms' },
  { code: 'MG30.42', title: 'Chronic visceral pain from persistent inflammation' },
  { code: 'MG30.5', title: 'Chronic neuropathic pain' },
  { code: 'MG30.50', title: 'Chronic central neuropathic pain' },
  { code: 'MG30.51', title: 'Chronic peripheral neuropathic pain' },
  { code: 'MG30.6', title: 'Chronic secondary headache or orofacial pain' },
  { code: 'MG30.61', title: 'Chronic dental pain' },
  { code: 'MG30.62', title: 'Chronic neuropathic orofacial pain' },
  { code: 'MG30.63', title: 'Headache or orofacial pain associated with chronic secondary temporomandibular disorders' },
  { code: 'MG30.64', title: 'Chronic headache or orofacial pain associated with disorders of homoeostasis or their nonpharmacological treatment' },
  { code: 'MG30.65', title: 'Chronic headache or orofacial pain associated with cranial or cervical vascular disorder' },
  { code: 'MG30.66', title: 'Chronic headache or orofacial pain associated with non-vascular intracranial disorder' },
  { code: 'MG30.67', title: 'Chronic headache associated with a substance or its withdrawal' },
];

/** ICD-11 extension codes for chronic pain severity and psychosocial factors (verbatim titles). */
export const ICD_EXTENSIONS: { scale: string; description: string; codes: { code: string; title: string }[] }[] = [
  { scale: 'Pain intensity', description: 'How strong the pain is, rated on a numerical or verbal scale.', codes: [
    { code: 'XS5B', title: 'No pain' }, { code: 'XS5D', title: 'Mild pain' }, { code: 'XS9Q', title: 'Moderate pain' }, { code: 'XS2E', title: 'Severe pain' }] },
  { scale: 'Pain-related distress', description: 'The emotional burden of the pain, such as worry, frustration or low mood.', codes: [
    { code: 'XS1J', title: 'No distress' }, { code: 'XS3R', title: 'Mild distress' }, { code: 'XS7C', title: 'Moderate distress' }, { code: 'XS7N', title: 'Severe distress' }] },
  { scale: 'Pain-related interference', description: 'How much the pain gets in the way of daily activities and roles.', codes: [
    { code: 'XS71', title: 'No pain-related interference' }, { code: 'XS5R', title: 'Mild pain-related interference' }, { code: 'XS2L', title: 'Moderate pain-related interference' }, { code: 'XS2U', title: 'Severe pain-related interference' }] },
  { scale: 'Psychosocial factors', description: 'Whether cognitive, emotional, behavioural or social factors contribute to the pain or disability.', codes: [
    { code: 'XS7G', title: 'Psychosocial factors present' }, { code: 'XS8B', title: 'No psychosocial factors present' }] },
];

/** IASP mechanistic descriptors. */
export const DESCRIPTORS = {
  nociceptive: { label: 'Nociceptive', description: 'Pain that arises from actual or threatened damage to non-neural tissue and is due to the activation of nociceptors.' },
  neuropathic: { label: 'Neuropathic', description: 'Pain caused by a lesion or disease of the somatosensory nervous system.' },
  nociplastic: { label: 'Nociplastic', description: 'Pain that arises from altered nociception despite no clear evidence of actual or threatened tissue damage causing the activation of peripheral nociceptors or evidence for disease or lesion of the somatosensory system causing the pain.' },
} as const satisfies Vocab;

/** How a descriptor applies to a condition as a whole (not a patient-level grade). */
export const DESCRIPTOR_ROLES = {
  defining: { label: 'Defining', description: 'The condition is defined by, or almost always involves, this mechanism.' },
  common: { label: 'Common', description: 'This mechanism contributes in many or most patients.' },
  subset: { label: 'In a subset', description: 'This mechanism is found in some patients, or its role is debated.' },
} as const satisfies Vocab;
