/** Decorative monogram: no canvas, downloaded artwork, or animation runtime. */
export default function HeroMark() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="hero-mark" aria-hidden="true">
      <g className="mark-grid" stroke="currentColor" strokeWidth="0.65">
        <path d="M40 0v400M120 0v400M200 0v400M280 0v400M360 0v400M0 40h400M0 120h400M0 200h400M0 280h400M0 360h400" />
        <circle cx="200" cy="200" r="158" />
        <path d="M42 42l316 316M358 42 42 358" strokeDasharray="3 7" />
      </g>
      <g className="mark-orbit">
        <circle cx="200" cy="200" r="184" stroke="currentColor" strokeWidth="1" strokeDasharray="210 946" />
        <circle cx="384" cy="200" r="4" fill="currentColor" />
      </g>
      <path className="mark-letter" d="M98 117v166h98" strokeWidth="19" />
      <path className="mark-letter mark-letter-accent" d="m204 117 48 78 48-78M252 195v88" strokeWidth="19" />
      <path d="M16 200h14M23 193v14M370 200h14M377 193v14M200 16v14M193 23h14M200 370v14M193 377h14" stroke="currentColor" />
    </svg>
  );
}
