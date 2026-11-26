# Pain Theories Map — notes for Claude

Astro 7 static site deployed to GitHub Pages at base `/paintheories/` (see PLAN.md for roadmap).

- Content: `src/content/theories/*.md`, `src/content/mechanisms/*.md`, bibliography in
  `src/data/references.yaml`. Schema in `src/content.config.ts`; vocabularies in `src/data/taxonomy.ts`.
- Never invent references. Add DOIs with `npm run ref:add -- <doi>` (Crossref) and check
  that the returned title/authors match the intended paper. Works without DOIs get
  `source: manual`. Only cite claims that the cited source supports.
- Open questions / gaps: `src/content/gaps/*.md` (schema `gaps` in content.config.ts); each lists ≥2 theories' competing predictions and a decisive test. Rendered at /gaps/ together with an automatic coverage analysis.
- Writing conventions and the evidence format: docs/CONTENT_GUIDE.md.
- New or substantially changed entries get `review: draft`; only the owner sets `reviewed`.
- Cite in body text with `[@key]` (remark plugin `src/scripts/remark-citations.mjs`; unknown keys fail the build).
- Internal links must go through `url()` from `src/lib/data.ts` (base path).
- Before committing: `npm run check && npm run build`.
- Map colours: 5 domain slots validated for CVD in light and dark; domain shape is the
  secondary channel. Don't add a sixth domain without revisiting this.
