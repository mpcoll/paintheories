# Theory diagrams

One original schematic per theory: `src/diagrams/<theory-id>.svg`, shown at the top of
the theory page with the caption from the theory's `diagram` front matter.

Rules (see `src/styles/diagram.css` for the class vocabulary):

- Root: `<svg class="dg" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="dg-title"><title id="dg-title">…</title>`.
  Keep everything inside 640 × 360 with a 16px margin.
- Use only the `dg` classes: no inline colours, no `style=`, no fonts, no images, no scripts.
  Colour comes from the theme and the theory's domain (`--dc`) automatically.
- Markers: define what you use inside `<defs>` with these ids:
  `dg-arr` (arrowhead, class `mk`), `dg-arr-accent` (class `mk-accent`), `dg-bar` (inhibitory flat end, class `mk-bar`).
- Text: minimum 12px (`t-xs`), normally 13–15px; at most ~40 words in total. Labels, not sentences.
- Draw the theory's core mechanism as stated in its `coreClaims` — no new factual claims.
  It is a schematic drawn for this site, never a copy of a published figure.
- Check with `npm run diagram:preview -- <id> [<id> ...]` (writes light and dark PNGs to `.diagram-previews/`).
