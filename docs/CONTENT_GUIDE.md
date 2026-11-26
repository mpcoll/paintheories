# Content guide

How to write an entry for the Pain Theories Map. The audience is pain researchers and
advanced students: write precisely, neutrally, and only what the cited sources support.

## Files

- Theory: `src/content/theories/<id>.md`, starting from `docs/theory-template.md`.
  Use a lowercase, hyphenated, descriptive id (e.g. `motivation-decision-model`).
- Mechanism: `src/content/mechanisms/<id>.md` (front matter: title, summary, levels, references).
  Reuse an existing mechanism whenever one fits; check the folder first.
- Allowed values for every classification field: `src/data/taxonomy.ts`.

## Entry structure

Front matter carries the structured data. In particular:

- `summary`: one or two sentences, ≤ 400 characters, stating the central claim.
- `coreClaims`: 3–5 short, specific claims.
- `predictions`: 2–4 testable predictions that follow from the theory.
- `evidence`: **4–8 key empirical findings**, each with `direction` (supports /
  contradicts / mixed), `method`, and `refs` (≥ 1 paper that actually reports the finding).
  Aim for both supporting and contradicting/mixed findings whenever the literature has them.
  State what was found and in whom ("In people with chronic low back pain, …"), not
  interpretations. Prefer primary studies, large trials and meta-analyses over reviews.
- `relations`: link only to theory ids that exist (or are listed as planned in the brief).
- `foundational`: the paper(s) or book(s) that proposed the theory.
- `keyReferences`: key reviews, critiques and tests not already cited in `evidence`.
- `review: draft`, `updated: <today>`.

Body sections, in this order:

```
## Overview            what the theory says (2–3 paragraphs)
## Historical context  where it came from, what it reacted against
## Critiques           conceptual / methodological criticisms (not empirical findings)
## Legacy              current standing and influence
## Teaching notes      2–3 bullets: misconceptions, contrasts, discussion prompts
```

Cite in the body with `[@key]` or `[@key1; @key2]`. Every key must exist in
`src/data/references.yaml` (or in your batch's staging list, see below).

## References — non-negotiable rules

1. **Never invent a reference or a DOI.** Only cite papers whose DOI you have checked with
   `npm run ref:lookup -- <doi> [<doi> ...]` (read-only Crossref lookup), and confirm that
   the returned authors, year and title are the paper you mean.
2. If a lookup fails or returns a different paper, do not use that DOI. Find the right one
   or drop the citation.
3. Only attribute a finding to a paper if you are confident that paper reports it. If unsure,
   leave it out — fewer, solid findings are better than many shaky ones.
4. Books and old works without DOIs may be cited; record them as `manual` entries (below).
5. Citation keys: `<first author family name, ascii lowercase><year>`, e.g. `fordyce1976`,
   `vlaeyen2016`; add `b`, `c` … if that key is already taken by a different work.

## Adding references

Single-author workflow: `npm run ref:add -- <doi>` (or `key=<doi>` to force a key).

Parallel batches: do **not** edit `references.yaml`. Instead write
`staging/<batch>.refs.txt`, one line per new reference:

```
fordyce1976 = manual | Fordyce, W. E. | 1976 | Behavioral methods for chronic pain and illness | book | Mosby
vlaeyen2016 = 10.1097/j.pain.0000000000000xxx
```

Existing keys in `references.yaml` can be cited directly without listing them.
