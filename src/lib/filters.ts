/** Filter state emitted by MapFilters ('mapfilter' event). Empty array = no filter on that dimension. */
export type MapFilter = { kinds: string[]; questions: string[] };

export function matchesFilter(kind: string, questions: string[], f: MapFilter) {
  return (!f.kinds.length || f.kinds.includes(kind)) && (!f.questions.length || questions.some((q) => f.questions.includes(q)));
}

export function filterCounts(theories: { data: { kind: string; questions: string[] } }[]) {
  const kinds: Record<string, number> = {};
  const questions: Record<string, number> = {};
  for (const t of theories) {
    kinds[t.data.kind] = (kinds[t.data.kind] ?? 0) + 1;
    for (const q of t.data.questions) questions[q] = (questions[q] ?? 0) + 1;
  }
  return { kinds, questions };
}
