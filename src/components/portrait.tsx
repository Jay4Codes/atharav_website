import { existsSync } from "node:fs";
import { join } from "node:path";
import { site } from "@/data/content";

export function Portrait() {
  const photo = existsSync(join(process.cwd(), "public/images/atharav.jpg"));

  if (photo) {
    return (
      <img
        src="/images/atharav.jpg"
        alt={site.name}
        className="h-full w-full object-cover object-top"
      />
    );
  }

  return (
    <div className="relative flex h-full min-h-[22rem] w-full flex-col justify-between overflow-hidden bg-navy p-7 text-white sm:min-h-[26rem]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg viewBox="0 0 400 480" className="h-full w-full" aria-hidden="true">
          <rect width="400" height="480" fill="#0c1b2e" />
          <path d="M0 320 L160 180 L260 250 L400 90 V480 H0 Z" fill="#16324f" />
          <path d="M0 390 L120 300 L240 360 L400 220 V480 H0 Z" fill="#c45c12" opacity="0.28" />
          <circle cx="292" cy="118" r="54" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.35" />
          <circle cx="292" cy="118" r="18" fill="#c45c12" opacity="0.85" />
        </svg>
      </div>
      <p className="relative text-[13px] tracking-wide text-white/70">{site.location}</p>
      <div className="relative">
        <p className="text-4xl font-semibold tracking-tight">{site.shortName}</p>
        <p className="mt-3 max-w-[14rem] text-sm leading-6 text-white/75">
          {site.headline}
        </p>
      </div>
    </div>
  );
}
