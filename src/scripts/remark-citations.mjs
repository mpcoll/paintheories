/**
 * Remark plugin: turns Pandoc-style citations in theory text into links to the
 * bibliography, e.g. `[@melzack1965]` -> (Melzack & Wall, 1965)
 * and `[@melzack1965; @wall1978]` -> (Melzack & Wall, 1965; Wall, 1978).
 *
 * Unknown keys fail the build, so every citation is guaranteed to resolve.
 */
import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

const CITE = /\[(@[\w-]+(?:\s*;\s*@[\w-]+)*)\]/g;

let cache;
function references() {
  // Re-read on each build/dev run; cheap and keeps dev in sync with edits.
  cache = new Map(parse(readFileSync('src/data/references.yaml', 'utf8')).map((r) => [r.id, r]));
  return cache;
}

export function citationLabel(ref) {
  const fam = (a) => a.split(',')[0];
  const a = ref.authors;
  const who = a.length === 1 ? fam(a[0]) : a.length === 2 ? `${fam(a[0])} & ${fam(a[1])}` : `${fam(a[0])} et al.`;
  return `${who}, ${ref.year}`;
}

export default function remarkCitations({ base = '/' } = {}) {
  return (tree, file) => {
    const refs = references();
    const walk = (node) => {
      if (!node.children) return;
      const out = [];
      for (const child of node.children) {
        if (child.type !== 'text' || !child.value.includes('[@')) {
          walk(child);
          out.push(child);
          continue;
        }
        let last = 0;
        for (const m of child.value.matchAll(CITE)) {
          if (m.index > last) out.push({ type: 'text', value: child.value.slice(last, m.index) });
          const keys = m[1].split(';').map((k) => k.trim().slice(1));
          const parts = keys.map((k) => {
            const ref = refs.get(k);
            if (!ref) throw new Error(`Unknown citation key "@${k}" in ${file.path}`);
            return `<a class="cite" href="${base}references/#${k}" data-ref="${k}">${citationLabel(ref)}</a>`;
          });
          out.push({ type: 'html', value: `(${parts.join('; ')})` });
          last = m.index + m[0].length;
        }
        if (last < child.value.length) out.push({ type: 'text', value: child.value.slice(last) });
      }
      node.children = out;
    };
    walk(tree);
  };
}
