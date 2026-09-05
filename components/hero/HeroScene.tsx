import { LocalizedText } from "@/components/LanguageProvider";
import { translationPair } from "@/data/i18n";
import { profile } from "@/data/profile";
import LeoPortrait from "./LeoPortrait";
import LeoSignature from "./LeoSignature";

export default function HeroScene() {
  const [firstName, ...remainingName] = profile.names.public.split(" ");

  return (
    <div className="hero-scene site-container" data-hero-scene>
      <div className="hero-scene-top">
        <p className="eyebrow"><LocalizedText value={translationPair("home", "fieldNotes")} /></p>
        <a className="text-link hero-skip" href="#home-content">
          <LocalizedText value={translationPair("cinematic", "skipIntro")} />
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="hero-scene-body" data-hero-body>
        <div className="hero-opening-copy">
          <p className="eyebrow"><LocalizedText value={translationPair("home", "greeting")} /></p>
          <h1 id="intro-heading" className="hero-name">
            <span>{firstName}</span>{" "}
            <span className="hero-name-serif">
              {remainingName.join(" ")}<span className="hero-period" aria-hidden="true">.</span>
            </span>
          </h1>
          <div className="hero-identity">
            <p><LocalizedText value={profile.heroHeadline} /></p>
            <p><LocalizedText value={profile.university} /></p>
          </div>
          <p className="hero-summary"><LocalizedText value={profile.heroSummary} /></p>
        </div>

        <div className="hero-portrait-anchor" data-portrait-anchor>
          <div className="hero-portrait"><LeoPortrait /></div>
        </div>

        <div className="hero-signature">
          <LeoSignature />
          <p className="hero-signature-name">
            {profile.names.formal} <span aria-hidden="true">/</span> {profile.names.chinese}
          </p>
          <p className="hero-signature-caption">
            <LocalizedText value={translationPair("home", "inProgress")} />
          </p>
        </div>
      </div>

      <div className="hero-scene-footer">
        <p className="hero-scroll-hint">
          <LocalizedText value={translationPair("cinematic", "scrollHint")} />
          <span aria-hidden="true">↓</span>
        </p>
        <p className="hero-static-hint">
          <LocalizedText value={translationPair("cinematic", "staticHint")} />
        </p>
        <span className="hero-sequence-label" aria-hidden="true">01 — 02 — 03</span>
        <div className="hero-scene-progress" aria-hidden="true" />
      </div>
    </div>
  );
}
