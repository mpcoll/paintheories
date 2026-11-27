# Pain Theories Map — project plan

An exhaustive, structured map of pain theories that serves both teaching and research.
Every theory is stored once as a structured record; all views (pages, network map,
timeline, comparison, exports) are generated from those records.

## Decisions (2026-11-25)

| Question | Decision |
|---|---|
| Language | English only |
| Audience | Researchers and advanced students |
| Scope | All theories, with a focus on scientific ones; philosophical, evolutionary and sociocultural accounts included where they bear on research |
| Editors | Project owner + Claude, via the Git repository |
| Classification | Kind, domain, level, question, pain type, status and relation vocabularies as below (open to revision) |
| Stack | Astro static site, Cytoscape.js map, Pagefind search, GitHub Pages |
| Licence | Content CC BY 4.0, code MIT |

## 1. Conceptual model

**Inclusion tiers** (`kind`): *theory* (general account of what pain is, why it varies or
persists), *model* (narrower, testable account of a process), *framework* (integrative /
meta-level). Narrower **mechanisms and constructs** are a separate collection that theories link to.

**Classification** (controlled vocabularies in `src/data/taxonomy.ts`):

- **Domain** (one per entry; drives colour + shape on the map): neurobiological, cognitive &
  computational, behavioural & psychosocial, integrative, conceptual/evolutionary/sociocultural.
- **Levels of explanation** (several): cellular, circuit, brain systems, cognitive/computational,
  behavioural/learning, psychosocial, sociocultural, evolutionary, philosophical.
- **Question addressed**: what pain is, how noxious input is signalled, why pain varies, why it
  persists, why it disables, what it is for.
- **Pain type**: acute, chronic, nociceptive, neuropathic, nociplastic, general.
- **Status**: historical, superseded, active, contested, emerging.
- **Relations** (map edges): builds on, extends, challenges, integrates, related to.

## 2. Entry structure

Front matter (validated at build): title, aliases, kind, year, proponents, summary, domain,
levels, questions, pain types, status, core claims, predictions, mechanisms, relations,
foundational references, key references, review state, last updated.
Body sections: Overview · Historical context · Evidence for · Evidence against and critiques ·
Legacy · Teaching notes. Inline citations use `[@key]`.

References live in one shared bibliography (`src/data/references.yaml`). DOI entries are
generated from and verified against Crossref (`npm run ref:add`, `npm run ref:verify`); entries
without a DOI are marked `source: manual`.

## 3. Views

| View | Status |
|---|---|
| Theory pages | ✅ |
| Network map (time × domain and force layouts, mechanisms toggle, focus links) | ✅ |
| Timeline | ✅ |
| Filterable / sortable table with shareable URLs | ✅ |
| Side-by-side comparison (2–4 theories, shareable URLs) | ✅ |
| Mechanism pages | ✅ |
| Bibliography with BibTeX export | ✅ |
| Data exports: JSON, CSV, edge list, BibTeX | ✅ |
| Full-text search (Pagefind) | ✅ |
| Key findings per theory (supporting / contradicting / mixed, linked to papers) | ✅ |
| Evidence page (all findings, balance table, filters) + evidence.csv | ✅ |
| Gaps page: open questions with competing predictions + decisive tests; automatic coverage analysis | ✅ |
| Learning paths, case vignettes, glossary | ⬜ Phase 5 |

## 4. Phases

1. **Foundations** — schema, taxonomy, site scaffold, deployment. ✅
2. **Exemplar entries** — 11 draft entries (Cartesian, specificity, intensive, pattern, gate
   control, Melzack–Casey, neuromatrix, central sensitization, fear-avoidance, biopsychosocial,
   predictive processing). ✅ drafted → **owner review** ⬜, then revise schema if needed.
3. **Core views** — ✅ (see table above).
4. **Breadth** — 53 draft entries with 336 key findings and 522 Crossref-verified references (2026-11-26). ✅ drafted → **owner review** ⬜
5. **Teaching layer** — learning paths, case vignettes, glossary. ⬜
6. **Research layer** — prediction matrix, Zenodo DOI per release, contributor guide. ⬜

## Pain Biology module (started 2026-11-26)

- `/biology/`: interactive pain-circuit figure (lateral, medial, spinoparabrachial,
  descending) with 14 stations, each shown in 3D through embedded Planum views.
- `/biology/periphery/`: nociceptor classes (skin → DRG → laminae), gate-control simulator, stimulus–response functions (heat, force), transduction by modality (mechanical, thermal, chemical, encoding).
- `/biology/sensitization/`: allodynia vs hyperalgesia (stimulus–response shift), primary vs secondary hyperalgesia zones by test stimulus, inflammatory soup and neurogenic inflammation.
- `/biology/imaging/`: neuroimaging of acute experimental pain: methods chart, Neurosynth maps via Planum (pain, painful, noxious, touch, salience, placebo, comparisons), reverse-inference demo, LEP figure, signatures (NPS, SIIPS1, ToPS, gamma ERS), 20 findings with timeline. Next: chronic pain (structure, connectivity, transition, neuroinflammation PET, replication).
- Next: station pages; deeper cellular level (nociceptor types, dorsal horn laminae and
  interneurons, receptors/channels); more circuits (trigeminal, spinoreticular);
  propose pain tours to Planum (descending PAG–RVM, spinoparabrachial).

## 5. Candidate entries still to add

- Müller's doctrine of specific nerve energies (separate from specificity theory?)
- Sherrington's nociception concept; Hardy–Wolff–Goodell
- Peripheral sensitization as its own entry
- Pain as need state (Wall 1999)
- Social/interpersonal: empathy and vicarious pain accounts
- Sex/gender and developmental accounts (e.g. early-life programming of pain)
- Computational: reinforcement-learning models of pain avoidance

## Pain Conditions module (started 2026-11-27)

- `/conditions/`: explorer with three lenses (traditional family, ICD-11 MG30 category, IASP descriptor), body-map and descriptor filters.
- `/conditions/prevalence/`: ranked prevalence chart (general population vs people with an underlying condition, never mixed).
- `/conditions/classification/`: ICD-11 chronic pain tree (WHO 2026-01), primary vs secondary, extension codes, worked example, history.
- `/conditions/descriptors/`: nociceptive / neuropathic / nociplastic, grading flowcharts (Finnerup 2016; Kosek 2021 simplified), mixed pain, condition matrix, debates.
- `/conditions/crosswalk/`: alluvial strands family → ICD-11 → descriptor, plus category × descriptor matrix.
- Decisions (owner, 2026-11-27): chronic conditions only; ICD-11 only (no ICD-10); no AAPT lens; prevalence included; treatment left for the Pain Treatments module; body map included.
- Next: owner review of all condition entries (review: draft); more conditions on request.

## Pain Treatments module (started 2026-11-27)

- `/treatments/`: "where it acts" figure (periphery → spinal → descending → brain → thoughts and emotions → behaviour) and the list by modality, with evidence for a chosen condition group.
- `/treatments/evidence/`: evidence map (treatments × condition groups; marker size = effect, fill = GRADE certainty).
- `/treatments/guidelines/`: NICE NG193/NG59/NG226, NeuPSIG 2025/2015, CDC 2022, EULAR 2017, ACP 2017; matrix and per-guideline lists with quoted wording.
- `/treatments/reading-evidence/`: NNT demo with placebo response, effect-size rules, GRADE, recommendation strength, sources of bias.
- Treatment pages; links from conditions, theories and mechanisms; treatments.json export.
- Next: owner review of entries (review: draft); more treatments and condition groups on request.
