export function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

export function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4C12 4 6 8 6 14c0 3 2 5 5 5 6 0 9-7 9-15Z" fill="currentColor" opacity=".18" />
      <path d="M5 20c3-5 7-8 12-11M10 14c2 0 4 .3 6 1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function WindIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="22" r="3" fill="currentColor" />
      <path d="M32 25v31M32 22l-2-17c8 1 13 6 14 12L32 22Zm0 0 16 8c-4 7-10 10-17 7l1-15Zm0 0-13 11c-4-7-3-14 2-18l11 7Z" fill="currentColor" opacity=".82" />
    </svg>
  );
}

export function SolarIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="48" cy="14" r="7" fill="currentColor" opacity=".55" />
      <path d="m12 25 34 0 6 22H6l6-22Zm3 6h29M11 39h37M22 25l-3 22M35 25l3 22" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
