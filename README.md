# Pain Theories Map

An open, structured map of scientific theories and models of pain, for research and teaching.

**Site:** https://mpcoll.github.io/paintheories/

Each theory is a Markdown file with structured front matter (classification, core claims,
predictions, mechanisms, relations to other theories, references). The site generates theory
pages, an interactive network map, a timeline, a comparison tool, a bibliography and
downloadable datasets from these files. See [PLAN.md](PLAN.md) for the roadmap.

## Working on the site

```bash
npm install
npm run dev          # local preview at http://localhost:4321/paintheories/
npm run build        # production build + search index in dist/
npm run check        # type and schema checks
```

## Adding content

- **Theory:** copy [docs/theory-template.md](docs/theory-template.md) to
  `src/content/theories/<id>.md`. Allowed values for each classification field are in
  [src/data/taxonomy.ts](src/data/taxonomy.ts). The build fails on unknown values, missing
  fields, or links to theories, mechanisms or references that don't exist.
- **Mechanism:** add `src/content/mechanisms/<id>.md` (title, summary, levels, references).
- **Reference:** `npm run ref:add -- <doi> [<doi> ...]` fetches metadata from Crossref and
  appends an entry to `src/data/references.yaml` with a generated key (e.g. `melzack1965`).
  Works without a DOI are added by hand with `source: manual`.
  `npm run ref:verify` re-checks every DOI entry against Crossref.
- **Citing in text:** `[@melzack1965]` or `[@melzack1965; @wall1978]`.

## Data

Built files under `/data/`: `theories.json`, `theories.csv`, `edges.csv`, `references.bib`.

## Licence

Content (theory descriptions, data) is licensed under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code is under the [MIT licence](LICENSE).
See [CITATION.cff](CITATION.cff) for how to cite.
