import { LocalizedText } from "@/components/LanguageProvider";
import { translationPair } from "@/data/i18n";

/** Replace only this content with the final portrait; the parent owns motion. */
export default function PortraitPlaceholder() {
  return (
    <div className="portrait-placeholder">
      <span className="portrait-index" aria-hidden="true">01 / PORTRAIT</span>
      <svg viewBox="0 0 300 400" fill="none" aria-hidden="true">
        <path d="M150 24v352M24 200h252" stroke="currentColor" strokeDasharray="2 8" />
        <path d="M12 44V12h32M256 12h32v32M288 356v32h-32M44 388H12v-32" stroke="currentColor" />
      </svg>
      <p><LocalizedText value={translationPair("cinematic", "portraitPlaceholder")} /></p>
      <span className="portrait-ratio" aria-hidden="true">3 : 4</span>
    </div>
  );
}
