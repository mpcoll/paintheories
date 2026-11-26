/**
 * Links into Planum (https://planumatlas.com), the open 3D brain atlas used to
 * illustrate the pain circuits. Views are encoded in the URL fragment
 * (see planumatlas.com/docs/features/sharing-and-snapshots.html).
 */
export const PLANUM = 'https://planumatlas.com/';

export type PlanumView = {
  region: string;
  atlas?: string;
  detail?: string;
  view: string;
  cortex: boolean;
  hemi?: string;
  mark?: string[];
};

export function planumLink(v: PlanumView, opts: { embed?: boolean } = {}) {
  const p = new URLSearchParams({
    anatomy: 'cdmd',
    lang: 'en',
    atlas: v.atlas ?? 'destrieux',
    detail: v.detail ?? 'learning',
    region: v.region,
    focus: '1',
    view: v.view,
  });
  if (v.hemi) p.set('hemi', v.hemi);
  if (!v.cortex) p.set('cortex', '0');
  // Highlight every part of a multi-parcel structure (Planum 'mark': region:colour,…).
  if (v.mark?.length) p.set('mark', v.mark.map((r) => `${r}:raspberry`).join(','));
  if (opts.embed) p.set('embed', '1');
  // Planum writes ids with literal ':' and ','; keep them readable.
  return PLANUM + '#' + p.toString().replace(/%3A/g, ':').replace(/%2C/g, ',');
}

export function planumTourLink(circuit: string) {
  return `${PLANUM}#anatomy=cdmd&lang=en&atlas=destrieux&detail=learning&tab=circuits&circuit=${circuit}`;
}
