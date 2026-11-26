/**
 * Bibliometric and map-based metrics for theories.
 * - citations: summed OpenAlex citation counts of the theory's founding publications
 *   (src/data/citations.json, refreshed with `npm run citations:fetch`). null when none
 *   of the founding works is indexed.
 * - influence: number of other theories on this map whose relations point to it.
 * Marker scales use a square-root mapping so marker area grows with the value.
 */
import citationData from '../data/citations.json';

type TheoryLike = { id: string; data: { foundational: { id: string }[]; relations: { target: { id: string } }[] } };
export const CITATION_SOURCE = citationData.source as string;
export const CITATION_DATE = citationData.retrieved as string;
const works = citationData.works as Record<string, { count: number }>;

export type TheoryMetrics = { citations: number | null; known: number; total: number; influence: number };

export function computeMetrics(theories: TheoryLike[]) {
  const incoming = new Map<string, number>();
  for (const t of theories) for (const r of t.data.relations) incoming.set(r.target.id, (incoming.get(r.target.id) ?? 0) + 1);
  const m = new Map<string, TheoryMetrics>();
  for (const t of theories) {
    const found = t.data.foundational.filter((r) => works[r.id]);
    m.set(t.id, {
      citations: found.length ? found.reduce((s, r) => s + works[r.id].count, 0) : null,
      known: found.length,
      total: t.data.foundational.length,
      influence: incoming.get(t.id) ?? 0,
    });
  }
  return m;
}

/** Marker scale factors (1 = default size) for each sizing mode. */
export const SCALE_MIN = 0.55, SCALE_MAX = 2.2;
export function scales(metrics: Map<string, TheoryMetrics>) {
  const vals = [...metrics.values()];
  const maxC = Math.max(1, ...vals.map((v) => v.citations ?? 0));
  const maxI = Math.max(1, ...vals.map((v) => v.influence));
  const f = (v: number, max: number) => SCALE_MIN + (SCALE_MAX - SCALE_MIN) * Math.sqrt(v / max);
  const out = new Map<string, { citations: number | null; influence: number }>();
  for (const [id, v] of metrics) out.set(id, { citations: v.citations === null ? null : +f(v.citations, maxC).toFixed(3), influence: +f(v.influence, maxI).toFixed(3) });
  return { out, maxC, maxI, f };
}

export const fmt = (n: number) => n.toLocaleString('en-US');
