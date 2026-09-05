"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Enhance server-rendered content only after it has reached the browser. */
export default function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    let observer: IntersectionObserver | undefined;

    function reset() {
      observer?.disconnect();
      elements.forEach((element) => element.removeAttribute("data-reveal-state"));
    }

    function setup() {
      reset();
      if (preference.matches || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-reveal-state", "visible");
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0, rootMargin: "0px 0px -24px 0px" },
      );

      for (const element of elements) {
        // Never hide the initial viewport or restored scroll position.
        if (element.getBoundingClientRect().top >= window.innerHeight) {
          element.setAttribute("data-reveal-state", "pending");
          observer.observe(element);
        }
      }
    }

    setup();
    preference.addEventListener("change", setup);
    return () => {
      reset();
      preference.removeEventListener("change", setup);
    };
  }, [pathname]);

  return null;
}
