// Keep this eligibility query aligned with the cinematic media block in globals.css.
export const CINEMATIC_MEDIA = "(prefers-reduced-motion: no-preference)";
// Layout modes are selected by CSS; this query is only for responsive image sizing.
export const WIDE_CINEMATIC_MEDIA = `(min-width: 900px) and (min-height: 700px) and ${CINEMATIC_MEDIA}`;

// Reference coordinates retain the centered hold and sequential signature handoff.
// Normalize them independently of the physical scroll distance: globals.css applies
// --hero-scroll-distance-ratio to the whole track without changing stage proportions.
// Keep this normalization scale aligned with the cinematic height in globals.css.
export const HERO_SCROLL_SCALE = 1.332;

export const HERO_TIMELINE = {
  // Preserve stage proportions when the CSS scroll-distance ratio changes.
  center: [0.08 / HERO_SCROLL_SCALE, 0.48 / HERO_SCROLL_SCALE],
  introFade: [0.06 / HERO_SCROLL_SCALE, 0.32 / HERO_SCROLL_SCALE],
  // Fully visible at center between the center endpoint (0.48) and fade start.
  portraitFade: [0.60 / HERO_SCROLL_SCALE, 0.80 / HERO_SCROLL_SCALE],
  signatureReveal: [0.80 / HERO_SCROLL_SCALE, 1.00 / HERO_SCROLL_SCALE],
  signatureDraw: [0.88 / HERO_SCROLL_SCALE, 1.312 / HERO_SCROLL_SCALE],
  finalPortraitScale: 0.58,
} as const;

export function clampProgress(value: number) {
  return Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0;
}

function segment(progress: number, [start, end]: readonly [number, number]) {
  const value = clampProgress((progress - start) / (end - start));
  return value * value * (3 - 2 * value);
}

/** Pure, reversible timeline; no clocks or accumulated scroll deltas. */
export function getHeroFrame(progress: number) {
  const p = clampProgress(progress);
  const center = segment(p, HERO_TIMELINE.center);
  const signature = segment(p, HERO_TIMELINE.signatureReveal);
  return {
    progress: p,
    center,
    portraitScale: 1 - center * (1 - HERO_TIMELINE.finalPortraitScale),
    portraitOpacity: 1 - segment(p, HERO_TIMELINE.portraitFade),
    introOpacity: 1 - segment(p, HERO_TIMELINE.introFade),
    signatureOpacity: signature,
    signatureScale: 0.94 + signature * 0.06,
    signatureDraw: segment(p, HERO_TIMELINE.signatureDraw),
  };
}
