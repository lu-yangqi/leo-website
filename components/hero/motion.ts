// Keep this eligibility query aligned with the cinematic media block in globals.css.
export const CINEMATIC_MEDIA =
  "(min-width: 900px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)";

// On the original 160svh track, the ink spans 0.432 (= 0.36 * 1.2).
// Add that extra 0.072 to the track, preserving the 0.62 start and 0.02 final hold.
// Keep this scale aligned with the cinematic height in globals.css.
export const HERO_SCROLL_SCALE = 1.072;

export const HERO_TIMELINE = {
  // Normalize to the longer track so earlier stages keep their scroll positions.
  center: [0.08 / HERO_SCROLL_SCALE, 0.48 / HERO_SCROLL_SCALE],
  introFade: [0.06 / HERO_SCROLL_SCALE, 0.32 / HERO_SCROLL_SCALE],
  portraitFade: [0.48 / HERO_SCROLL_SCALE, 0.64 / HERO_SCROLL_SCALE],
  signatureReveal: [0.54 / HERO_SCROLL_SCALE, 0.74 / HERO_SCROLL_SCALE],
  signatureDraw: [0.62 / HERO_SCROLL_SCALE, 1.052 / HERO_SCROLL_SCALE],
  finalPortraitScale: 0.34,
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
