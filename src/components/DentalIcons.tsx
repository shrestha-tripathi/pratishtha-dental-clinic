import type { SVGProps } from "react";

// Tooth-based dental SVG icon set — purpose-built for dentistry.
// All icons share a 24x24 viewBox and use currentColor.

const Tooth = ({ children, ...p }: SVGProps<SVGSVGElement> & { children?: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    {/* base tooth silhouette */}
    <path d="M7.2 3.4c-2.4.6-3.7 2.6-3.7 5 0 1.7.6 3.2 1.2 4.7.5 1.2.8 2.5.9 3.8.1 1.6.4 3.4 1.5 4.4.7.6 1.7.5 2.2-.3.6-1 .8-2.3 1-3.6.1-1 .4-1.7 1.7-1.7s1.6.7 1.7 1.7c.2 1.3.4 2.6 1 3.6.5.8 1.5.9 2.2.3 1.1-1 1.4-2.8 1.5-4.4.1-1.3.4-2.6.9-3.8.6-1.5 1.2-3 1.2-4.7 0-2.4-1.3-4.4-3.7-5-2-.5-3.7.5-5 .5s-3-1-5-.5z" />
    {children}
  </svg>
);

export const ToothSpark = (p: SVGProps<SVGSVGElement>) => (
  <Tooth {...p}>
    <path d="M12 9.5l.7 1.3 1.3.7-1.3.7-.7 1.3-.7-1.3-1.3-.7 1.3-.7z" fill="currentColor" stroke="none" />
  </Tooth>
);

export const ToothSmile = (p: SVGProps<SVGSVGElement>) => (
  <Tooth {...p}>
    <path d="M9.5 11c.6.7 1.5 1 2.5 1s1.9-.3 2.5-1" />
    <circle cx="10" cy="9.2" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="14" cy="9.2" r="0.5" fill="currentColor" stroke="none" />
  </Tooth>
);

export const ToothImplant = (p: SVGProps<SVGSVGElement>) => (
  <Tooth {...p}>
    <path d="M12 7v8" />
    <path d="M10.5 9h3M10.5 11h3M10.5 13h3" />
  </Tooth>
);

export const ToothShine = (p: SVGProps<SVGSVGElement>) => (
  <Tooth {...p}>
    <path d="M15.5 6.5l.6 1.1 1.2.5-1.2.5-.6 1.1-.6-1.1-1.2-.5 1.2-.5z" fill="currentColor" stroke="none" />
    <path d="M9 13l.4.8.8.4-.8.4-.4.8-.4-.8-.8-.4.8-.4z" fill="currentColor" stroke="none" />
  </Tooth>
);

export const ToothBaby = (p: SVGProps<SVGSVGElement>) => (
  <Tooth {...p}>
    <path d="M10 11.2c.5.4 1.2.7 2 .7s1.5-.3 2-.7" />
    <circle cx="9.7" cy="9" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="14.3" cy="9" r="0.6" fill="currentColor" stroke="none" />
  </Tooth>
);

export const ToothCrown = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 9l3 3 2.5-4 2.5 4 2.5-4 2.5 4 3-3-1.5 8.5h-13z" />
    <circle cx="6.2" cy="8.6" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="12" cy="6.6" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="17.8" cy="8.6" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const ToothBraces = (p: SVGProps<SVGSVGElement>) => (
  <Tooth {...p}>
    <path d="M7 11h10" />
    <rect x="9" y="10.2" width="1.6" height="1.6" rx="0.3" fill="currentColor" stroke="none" />
    <rect x="13.4" y="10.2" width="1.6" height="1.6" rx="0.3" fill="currentColor" stroke="none" />
  </Tooth>
);

export const ToothClean = (p: SVGProps<SVGSVGElement>) => (
  // Toothbrush
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 14l6-6c1-1 2.5-1 3.5 0l1.5 1.5c1 1 1 2.5 0 3.5l-6 6c-.5.5-1.5.5-2 0l-3-3c-.5-.5-.5-1.5 0-2z" />
    <path d="M14 9l4-4" />
    <path d="M16 5l3 3" />
    <path d="M5 12l1 1M7 10l1 1M9 8l1 1" />
  </svg>
);

export const ToothShield = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 2.5l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6z" />
    <path d="M9.5 9.5c0-1 .8-1.8 1.6-1.8.4 0 .7.1.9.3.2-.2.5-.3.9-.3.8 0 1.6.8 1.6 1.8 0 .8-.4 1.5-.7 2.2-.2.5-.3 1-.4 1.5-.1.7-.2 1.5-.7 1.5s-.6-.6-.6-1.2c0-.4-.2-.6-.5-.6s-.5.2-.5.6c0 .6-.1 1.2-.6 1.2s-.6-.8-.7-1.5c-.1-.5-.2-1-.4-1.5-.3-.7-.7-1.4-.7-2.2z" fill="currentColor" stroke="none" />
  </svg>
);

const map = {
  "tooth-spark": ToothSpark,
  "tooth-smile": ToothSmile,
  "tooth-implant": ToothImplant,
  "tooth-shine": ToothShine,
  "tooth-baby": ToothBaby,
  "tooth-crown": ToothCrown,
  "tooth-braces": ToothBraces,
  "tooth-clean": ToothClean,
  "tooth-shield": ToothShield,
} as const;

export type DentalIconName = keyof typeof map;

export function DentalIcon({ name, ...p }: { name: string } & SVGProps<SVGSVGElement>) {
  const Cmp = map[name as DentalIconName] ?? ToothSpark;
  return <Cmp {...p} />;
}
