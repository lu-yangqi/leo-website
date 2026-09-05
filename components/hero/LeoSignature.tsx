import { LocalizedText } from "@/components/LanguageProvider";
import { translationPair } from "@/data/i18n";

/** The unchanged external SVG supplies the silhouette; CSS owns color and reveal. */
export default function LeoSignature() {
  return (
    <figure className="leo-signature" role="img" aria-labelledby="leo-signature-label">
      <span className="leo-signature-ink" aria-hidden="true" />
      <figcaption id="leo-signature-label" className="sr-only">
        <LocalizedText value={translationPair("cinematic", "signatureLabel")} />
      </figcaption>
    </figure>
  );
}
