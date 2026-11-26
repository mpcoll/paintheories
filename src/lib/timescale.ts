/**
 * Horizontal time scale shared by the home-page overview and the network map.
 * Years before 1850 are squeezed into a narrow band; from 1850 on, the scale is
 * logarithmic in "years before 2035", so recent decades (where most theories
 * are) get more room than the 19th century.
 */
export const SPLIT = 1850;
const ANCHOR = 2035;

export function makeTimeScale(minYear: number, maxYear: number, x0: number, x1: number, earlyWidth = 60, gap = 70) {
  const early = minYear < SPLIT;
  const start = early ? x0 + earlyWidth + gap : x0;
  const f = (y: number) => -Math.log(ANCHOR - Math.min(y, ANCHOR - 1));
  const lo = f(SPLIT), hi = f(Math.max(maxYear, SPLIT + 1));
  return (y: number) =>
    y < SPLIT
      ? x0 + ((y - minYear) / Math.max(1, SPLIT - minYear)) * earlyWidth
      : start + ((f(y) - lo) / (hi - lo)) * (x1 - start);
}

export function tickYears(minYear: number, maxYear: number) {
  return [...(minYear < SPLIT ? [minYear] : []), 1850, 1900, 1950, 1975, 2000, 2010, 2020].filter((t) => t <= maxYear + 3);
}
