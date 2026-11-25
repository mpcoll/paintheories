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
| Prediction matrix (where theories make diverging predictions) | ⬜ Phase 6 |
| Learning paths, case vignettes, glossary | ⬜ Phase 5 |

## 4. Phases

1. **Foundations** — schema, taxonomy, site scaffold, deployment. ✅
2. **Exemplar entries** — 11 draft entries (Cartesian, specificity, intensive, pattern, gate
   control, Melzack–Casey, neuromatrix, central sensitization, fear-avoidance, biopsychosocial,
   predictive processing). ✅ drafted → **owner review** ⬜, then revise schema if needed.
3. **Core views** — ✅ (see table above).
4. **Breadth** — stub entries for the full candidate list (below), then fill by priority. ⬜
5. **Teaching layer** — learning paths, case vignettes, glossary. ⬜
6. **Research layer** — prediction matrix, Zenodo DOI per release, contributor guide. ⬜

## 5. Candidate entries still to add

- **Historical:** Müller's specific nerve energies (as its own entry?), Livingston's reverberatory
  circuits, Noordenbos fast/slow fibre theory, Beecher's context effects, Sherrington's nociception.
- **Neural:** labeled lines vs population coding, pain as homeostatic emotion (Craig), dynamic pain
  connectome, corticostriatal / mesolimbic learning theory of chronic pain (Apkarian, Baliki),
  neuroimmune / glial theories, allostatic load (Borsook), sensorimotor incongruence (Harris),
  cortical body matrix (Moseley), nociplastic pain, peripheral sensitization, salience / pain matrix critique.
- **Cognitive:** motivation-decision model (Fields), interruptive function of pain and
  neurocognitive model of attention (Eccleston & Crombez; Legrain), misdirected problem solving,
  expectation / placebo theories, imprecision hypothesis.
- **Behavioural & psychosocial:** operant model (Fordyce), respondent / classical conditioning,
  avoidance-endurance (Hasenbring), cognitive-behavioural model (Turk), psychological flexibility
  (McCracken), shared vulnerability and mutual maintenance, diathesis-stress, communal coping
  (Sullivan), interpersonal fear-avoidance, social communication model (Craig, K.).
- **Integrative:** Loeser's onion model, mature organism model, pain as protective output
  (Moseley & Butler), enactive approaches.
- **Conceptual:** evolutionary accounts (Williams), social pain overlap (Eisenberger),
  sociocultural accounts (Morris, Kleinman), perceptualist / evaluativist / imperativist
  philosophical theories, pain asymbolia as a test case.
