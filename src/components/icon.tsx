import type { ReactNode } from "react";

export type IconName =
  | "chart"
  | "ops"
  | "plant"
  | "field"
  | "mail"
  | "linkedin"
  | "phone"
  | "pin"
  | "arrowUp"
  | "chevronDown"
  | "briefcase"
  | "grad"
  | "mic"
  | "clock"
  | "arrowOut"
  | "download"
  | "user"
  | "doc"
  | "codeBraces"
  | "coffee"
  | "table"
  | "trend"
  | "nodes"
  | "layers"
  | "chevrons"
  | "cube"
  | "spark"
  | "checklist"
  | "grid"
  | "people"
  | "flag"
  | "chat"
  | "refresh"
  | "shuttle"
  | "racquet"
  | "pawn"
  | "paddle"
  | "ball"
  | "bike"
  | "calendar"
  | "camera";

const paths: Record<IconName, ReactNode> = {
  chart: (
    <>
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19v-8" />
      <path d="M22 19V7" />
    </>
  ),
  ops: (
    <>
      <rect x="3" y="4" width="7" height="16" rx="1" />
      <rect x="13" y="4" width="8" height="7" rx="1" />
      <rect x="13" y="13" width="8" height="7" rx="1" />
    </>
  ),
  plant: (
    <>
      <path d="M4 20V11h4v9" />
      <path d="M10 20V7h5v13" />
      <path d="M17 20v-6h3v6" />
      <path d="M6 11V6" />
      <path d="M12.5 7V3" />
    </>
  ),
  field: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0" />
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 18h4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </>
  ),
  chevronDown: <path d="M6 9l6 6 6-6" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),
  grad: (
    <>
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12.5v4.2c0 .6 2.2 2.3 5 2.3s5-1.7 5-2.3v-4.2" />
      <path d="M21 10v6" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v4" />
      <path d="M9 21h6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrowOut: (
    <>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 20h14" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c.8-3.2 3.3-5 6.5-5s5.7 1.8 6.5 5" />
    </>
  ),
  doc: (
    <>
      <path d="M7 4h7l4 4v12H7z" />
      <path d="M14 4v4h4" />
      <path d="M10 13h6" />
      <path d="M10 17h4" />
    </>
  ),
  codeBraces: (
    <>
      <path d="M9 6c-2.4 1.2-2.6 10.8 0 12" />
      <path d="M15 6c2.4 1.2 2.6 10.8 0 12" />
    </>
  ),
  coffee: (
    <>
      <path d="M6 9h10v6a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 6 15V9Z" />
      <path d="M16 11h1.8a2.2 2.2 0 1 1 0 4.4H16" />
      <path d="M9 5.5c.4-1 1.2-1 1.6 0" />
      <path d="M12.2 5.5c.4-1 1.2-1 1.6 0" />
    </>
  ),
  table: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <path d="M4 10h16" />
      <path d="M4 15h16" />
      <path d="M10 5v14" />
    </>
  ),
  trend: (
    <>
      <path d="M4 19h16" />
      <path d="M4 19V6" />
      <polyline points="7,15 11,10 14,12.5 20,6" />
    </>
  ),
  nodes: (
    <>
      <circle cx="6.5" cy="7.5" r="2.2" />
      <circle cx="17.5" cy="7.5" r="2.2" />
      <circle cx="12" cy="17" r="2.2" />
      <path d="M8.3 8.8 10.4 15" />
      <path d="M15.7 8.8 13.6 15" />
      <path d="M8.7 7.5h6.6" />
    </>
  ),
  layers: (
    <>
      <rect x="5" y="4" width="14" height="6.5" rx="1" />
      <rect x="5" y="13.5" width="14" height="6.5" rx="1" />
    </>
  ),
  chevrons: (
    <>
      <path d="M8 7 4 12l4 5" />
      <path d="M16 7l4 5-4 5" />
    </>
  ),
  cube: (
    <>
      <path d="M12 4.5 19.5 8.5v7L12 19.5 4.5 15.5v-7Z" />
      <path d="M12 4.5v7.5" />
      <path d="M12 12 19.5 8.5" />
      <path d="M12 12 4.5 8.5" />
    </>
  ),
  spark: (
    <>
      <rect x="4.5" y="8" width="10.5" height="10.5" rx="1.2" />
      <path d="M16.5 7.5 20 4" />
      <path d="M20 4v3.2" />
      <path d="M20 4h-3.2" />
    </>
  ),
  checklist: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="1.5" />
      <path d="M8 9.2 9.4 10.6 12.2 7.8" />
      <path d="M8 13h8" />
      <path d="M8 16.5h5.5" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="2.4" />
      <path d="M4.2 18.5c.7-3 2.8-4.7 4.8-4.7s4.1 1.7 4.8 4.7" />
      <circle cx="16.2" cy="9" r="2" />
      <path d="M16.2 13.2c2 0 3.5 1.2 4.2 3.3" />
    </>
  ),
  flag: (
    <>
      <path d="M6 4v16" />
      <path d="M6 5h11l-2.2 3.2L17 11.5H6" />
    </>
  ),
  chat: (
    <>
      <path d="M5 6h14v9H9l-4 3.5V6Z" />
    </>
  ),
  refresh: (
    <>
      <path d="M7.2 8.2A6 6 0 0 1 18 9.5" />
      <path d="M18 6.2V9.5h-3.2" />
      <path d="M16.8 15.8A6 6 0 0 1 6 14.5" />
      <path d="M6 17.8V14.5h3.2" />
    </>
  ),
  shuttle: (
    <>
      <circle cx="12" cy="16.2" r="2.4" />
      <path d="M12 13.8 8.2 5.2" />
      <path d="M12 13.8 12 4.5" />
      <path d="M12 13.8 15.8 5.2" />
    </>
  ),
  racquet: (
    <>
      <ellipse cx="14.2" cy="8.2" rx="5.8" ry="5" />
      <path d="M10 12 5.2 20.2" />
    </>
  ),
  pawn: (
    <>
      <circle cx="12" cy="5.6" r="2" />
      <path d="M9.2 13.2c0-2.1 1.2-3.4 2.8-3.4s2.8 1.3 2.8 3.4" />
      <path d="M8.2 13.4h7.6L18 20.2H6z" />
    </>
  ),
  paddle: (
    <>
      <ellipse cx="10" cy="9" rx="5.8" ry="5.2" />
      <circle cx="9.2" cy="9" r="1.5" />
      <path d="M14.2 12.4 19.2 20" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8.2 14.8 10.2 13.7 13.6h-3.4L9.2 10.2Z" />
    </>
  ),
  bike: (
    <>
      <circle cx="6.5" cy="16" r="3" />
      <circle cx="17.5" cy="16" r="3" />
      <path d="M6.5 16 11.2 8.2h3.4L18 16" />
      <path d="M11.2 8.2 9.4 16" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="6" width="16" height="14" rx="1.5" />
      <path d="M8 4v4" />
      <path d="M16 4v4" />
      <path d="M4 11h16" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <circle cx="12" cy="14" r="3.4" />
      <path d="M9 8 10.4 5h3.2L15 8" />
    </>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const filled = name === "linkedin";

  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? undefined : "1.7"}
      strokeLinecap={filled ? undefined : "round"}
      strokeLinejoin={filled ? undefined : "round"}
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
