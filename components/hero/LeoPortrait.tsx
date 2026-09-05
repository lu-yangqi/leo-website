"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { CINEMATIC_MEDIA } from "./motion";

/** Image loading and its localized description stay separate from parent motion. */
export default function LeoPortrait() {
  const { translations } = useLanguage();

  return (
    <div className="leo-portrait">
      <Image
        src="/images/hero/leo-portrait.jpg"
        alt={translations.cinematic.portraitAlt}
        fill
        preload
        sizes={`${CINEMATIC_MEDIA} min(38vw, 30rem, calc((100svh - 17rem) * 0.75)), (max-width: 640px) 240px, 280px`}
        className="leo-portrait-image"
      />
    </div>
  );
}
