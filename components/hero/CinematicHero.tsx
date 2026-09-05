"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { CINEMATIC_MEDIA, getHeroFrame } from "./motion";

const MOTION_PROPERTIES = [
  "--hero-progress", "--portrait-x", "--portrait-y", "--portrait-scale", "--portrait-opacity",
  "--intro-opacity", "--signature-opacity", "--signature-scale", "--signature-draw",
] as const;

export default function CinematicHero({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const scene = root?.querySelector<HTMLElement>("[data-hero-scene]");
    const body = root?.querySelector<HTMLElement>("[data-hero-body]");
    const anchor = root?.querySelector<HTMLElement>("[data-portrait-anchor]");
    const intro = root?.querySelector<HTMLElement>(".hero-opening-copy");
    if (!root || !scene || !body || !anchor) return;

    const header = document.querySelector<HTMLElement>(".site-header");
    const eligibility = window.matchMedia(CINEMATIC_MEDIA);
    let animationFrame: number | null = null;
    let needsMeasurement = true;
    let start = 0;
    let distance = 1;
    let centerOffset = 0;
    let centerOffsetY = 0;
    let previousProgress = -1;
    let resizeObserver: ResizeObserver | undefined;

    function render() {
      animationFrame = null;
      if (!eligibility.matches || !root || !scene || !body || !anchor) return;

      const measured = needsMeasurement;
      if (needsMeasurement) {
        // CSS is the mode source of truth. Refresh geometry after any mode/header change.
        const mode = getComputedStyle(root).getPropertyValue("--hero-mode").trim();
        root.dataset.heroMode = mode;
        if (mode === "wide") root.style.removeProperty("--hero-header-height");
        else root.style.setProperty("--hero-header-height", `${header?.offsetHeight ?? 88}px`);
        // Measure the stationary anchor, never the transformed portrait itself.
        const rootRect = root.getBoundingClientRect();
        const bodyRect = body.getBoundingClientRect();
        const anchorRect = anchor.getBoundingClientRect();
        const stickyTop = Number.parseFloat(getComputedStyle(scene).top) || 0;
        start = rootRect.top + window.scrollY - stickyTop;
        distance = Math.max(1, rootRect.height - scene.offsetHeight);
        centerOffset = bodyRect.left + bodyRect.width / 2
          - (anchorRect.left + anchorRect.width / 2);
        let centerY = bodyRect.height / 2;
        if (mode === "wide") root.style.removeProperty("--hero-center-y");
        else {
          // Short scenes can lock above the header. Center both identities in the
          // visible body at that lock position, not in its off-screen text area.
          const lockedBodyTop = stickyTop + bodyRect.top - scene.getBoundingClientRect().top;
          const visibleTop = Math.max(lockedBodyTop, header?.offsetHeight ?? 88);
          const visibleBottom = Math.min(lockedBodyTop + bodyRect.height, window.innerHeight);
          centerY = (visibleTop + visibleBottom) / 2 - lockedBodyTop;
          root.style.setProperty("--hero-center-y", `${centerY}px`);
        }
        centerOffsetY = mode === "wide" ? 0
          : bodyRect.top + centerY - (anchorRect.top + anchorRect.height / 2);
        needsMeasurement = false;
      }

      const frame = getHeroFrame((window.scrollY - start) / distance);
      if (!measured && frame.progress === previousProgress) return;
      previousProgress = frame.progress;

      const values = [
        frame.progress, `${centerOffset * frame.center}px`, `${centerOffsetY * frame.center}px`, frame.portraitScale,
        frame.portraitOpacity, frame.introOpacity, frame.signatureOpacity,
        frame.signatureScale, frame.signatureDraw,
      ];
      MOTION_PROPERTIES.forEach((property, index) => {
        root.style.setProperty(property, String(values[index]));
      });
      root.dataset.heroRunning = String(frame.progress > 0 && frame.progress < 1);
    }

    function schedule() {
      if (eligibility.matches && animationFrame === null) {
        animationFrame = window.requestAnimationFrame(render);
      }
    }

    function measure() {
      needsMeasurement = true;
      schedule();
    }

    function stop() {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      window.removeEventListener("pageshow", measure);
      resizeObserver?.disconnect();
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      animationFrame = null;
      delete root!.dataset.heroMotion;
      delete root!.dataset.heroRunning;
      delete root!.dataset.heroMode;
      root!.style.removeProperty("--hero-header-height");
      root!.style.removeProperty("--hero-center-y");
      MOTION_PROPERTIES.forEach((property) => root!.style.removeProperty(property));
    }

    function setup() {
      stop();
      if (!eligibility.matches) return;
      root!.dataset.heroMotion = "active";
      needsMeasurement = true;
      previousProgress = -1;
      // Set the restored-scroll frame immediately, then update only on events.
      render();
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", measure);
      window.addEventListener("pageshow", measure);
      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(root!);
      resizeObserver.observe(body!);
      resizeObserver.observe(anchor!);
      if (intro) resizeObserver.observe(intro);
      if (header) resizeObserver.observe(header);
    }

    setup();
    eligibility.addEventListener("change", setup);
    return () => {
      stop();
      eligibility.removeEventListener("change", setup);
    };
  }, []);

  return (
    <section ref={rootRef} className="cinematic-hero" aria-labelledby="intro-heading">
      <noscript>
        <style>{`.cinematic-hero { --hero-mode: static !important; height: auto !important; }
          .hero-scene { position: static !important; height: auto !important; }
          .hero-scene-body { display: grid !important; grid-template-rows: none !important; }
          .hero-opening-copy, .hero-portrait-anchor, .hero-signature {
            position: static !important; transform: none !important; opacity: 1 !important;
          }
          .hero-opening-copy { width: auto !important; }
          .hero-portrait-anchor { width: min(100%, 280px) !important; }
          .hero-signature { width: min(100%, 480px) !important; }
          .leo-signature-ink { clip-path: none !important; }
          .hero-scroll-hint { display: none !important; }
          .hero-static-hint { display: block !important; }`}</style>
      </noscript>
      {children}
    </section>
  );
}
