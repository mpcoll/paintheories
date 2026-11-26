import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const gaps = (await getCollection('gaps')).sort((a, b) => a.data.order - b.data.order).map((g) => ({
    id: g.id,
    title: g.data.title,
    summary: g.data.summary,
    questions: g.data.questions,
    predictions: g.data.predictions.map((p) => ({ theory: p.theory.id, prediction: p.prediction })),
    test: g.data.test,
    references: g.data.references.map((r) => r.id),
    review: g.data.review,
    updated: g.data.updated.toISOString().slice(0, 10),
  }));
  return new Response(JSON.stringify({ name: 'Pain Theories Map — open questions', license: 'CC-BY-4.0', gaps }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
