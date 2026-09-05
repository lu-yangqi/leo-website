import { LocalizedText } from "@/components/LanguageProvider";
import { translationPair } from "@/data/i18n";

/** SVG slot inherits currentColor; --signature-draw reserves the drawing phase. */
export default function SignaturePlaceholder() {
  return (
    <div className="signature-placeholder">
      <svg viewBox="0 0 520 160" fill="none" aria-hidden="true">
        <path d="M28 12H12v24M508 36V12h-16M12 124v24h16M492 148h16v-24" stroke="currentColor" />
        <path className="signature-guide" d="M60 130H460" stroke="currentColor" pathLength="1" />
      </svg>
      <p><LocalizedText value={translationPair("cinematic", "signaturePlaceholder")} /></p>
    </div>
  );
}
