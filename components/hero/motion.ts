// Keep this eligibility query aligned with the cinematic media block in globals.css.
export const CINEMATIC_MEDIA =
  "(min-width: 900px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)";

export const HERO_TIMELINE = {
  center: [0.08, 0.48],
  introFade: [0.06, 0.32],
  portraitFade: [0.48, 0.64],
  signatureReveal: [0.54, 0.74],
  signatureDraw: [0.62, 0.88],
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
