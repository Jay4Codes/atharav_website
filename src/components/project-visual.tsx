type VisualId = "chart" | "ops" | "plant" | "field";

export function ProjectVisual({ kind }: { kind: VisualId }) {
  if (kind === "chart") {
    return (
      <svg viewBox="0 0 320 160" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="chartBg" x1="0" y1="0" x2="320" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#16324f" />
            <stop offset="1" stopColor="#0c1b2e" />
          </linearGradient>
        </defs>
        <rect width="320" height="160" fill="url(#chartBg)" />
        <path d="M28 118h264" stroke="#ffffff" strokeOpacity="0.15" />
        <path d="M28 86h264" stroke="#ffffff" strokeOpacity="0.08" />
        <path d="M28 54h264" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="48" y="72" width="28" height="46" fill="#c45c12" />
        <rect x="96" y="58" width="28" height="60" fill="#ffffff" opacity="0.85" />
        <rect x="144" y="40" width="28" height="78" fill="#c45c12" />
        <rect x="192" y="50" width="28" height="68" fill="#ffffff" opacity="0.55" />
        <rect x="240" y="32" width="28" height="86" fill="#c45c12" />
        <polyline
          points="48,96 110,78 158,46 206,62 254,36"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (kind === "ops") {
    return (
      <svg viewBox="0 0 320 160" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="opsBg" x1="0" y1="0" x2="0" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1c3f5f" />
            <stop offset="1" stopColor="#0c1b2e" />
          </linearGradient>
        </defs>
        <rect width="320" height="160" fill="url(#opsBg)" />
        <rect x="28" y="28" width="80" height="104" rx="2" fill="#0c1b2e" />
        <rect x="120" y="28" width="80" height="104" rx="2" fill="#0c1b2e" />
        <rect x="212" y="28" width="80" height="104" rx="2" fill="#0c1b2e" />
        <rect x="40" y="40" width="56" height="10" fill="#c45c12" />
        <rect x="40" y="60" width="56" height="18" fill="#ffffff" opacity="0.16" />
        <rect x="40" y="84" width="56" height="18" fill="#ffffff" opacity="0.16" />
        <rect x="132" y="40" width="56" height="10" fill="#ffffff" opacity="0.7" />
        <rect x="132" y="60" width="56" height="18" fill="#ffffff" opacity="0.16" />
        <rect x="132" y="84" width="56" height="32" fill="#c45c12" opacity="0.7" />
        <rect x="224" y="40" width="56" height="10" fill="#ffffff" opacity="0.7" />
        <rect x="224" y="60" width="56" height="32" fill="#ffffff" opacity="0.16" />
        <rect x="224" y="100" width="56" height="18" fill="#ffffff" opacity="0.16" />
      </svg>
    );
  }

  if (kind === "plant") {
    return (
      <svg viewBox="0 0 320 160" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="plantBg" x1="0" y1="160" x2="320" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0c1b2e" />
            <stop offset="1" stopColor="#1a3a58" />
          </linearGradient>
        </defs>
        <rect width="320" height="160" fill="url(#plantBg)" />
        <rect x="36" y="86" width="248" height="42" fill="#16324f" />
        <rect x="56" y="58" width="36" height="70" fill="#2a455f" />
        <rect x="108" y="40" width="44" height="88" fill="#2a455f" />
        <rect x="172" y="50" width="36" height="78" fill="#2a455f" />
        <rect x="226" y="64" width="40" height="64" fill="#2a455f" />
        <path d="M74 58 V28" stroke="#c45c12" strokeWidth="4" />
        <path d="M130 40 V18" stroke="#c45c12" strokeWidth="4" />
        <path d="M190 50 V24" stroke="#ffffff" strokeWidth="3" opacity="0.7" />
        <circle cx="74" cy="24" r="7" fill="#c45c12" />
        <circle cx="130" cy="14" r="7" fill="#c45c12" />
        <circle cx="190" cy="20" r="6" fill="#ffffff" />
        <path d="M36 128 H284" stroke="#ffffff" strokeOpacity="0.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 160" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="fieldBg" x1="320" y1="0" x2="0" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#16324f" />
          <stop offset="1" stopColor="#0c1b2e" />
        </linearGradient>
      </defs>
      <rect width="320" height="160" fill="url(#fieldBg)" />
      <rect x="40" y="36" width="150" height="92" rx="2" fill="#0c1b2e" />
      <rect x="52" y="48" width="88" height="8" fill="#ffffff" opacity="0.7" />
      <rect x="52" y="64" width="126" height="6" fill="#ffffff" opacity="0.2" />
      <rect x="52" y="76" width="110" height="6" fill="#ffffff" opacity="0.2" />
      <rect x="52" y="88" width="126" height="6" fill="#ffffff" opacity="0.2" />
      <rect x="52" y="106" width="54" height="10" fill="#c45c12" />
      <circle cx="236" cy="80" r="34" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="8" />
      <circle cx="236" cy="80" r="34" fill="none" stroke="#c45c12" strokeWidth="8" strokeDasharray="70 160" />
    </svg>
  );
}
