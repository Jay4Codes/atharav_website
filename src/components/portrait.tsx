import Image from "next/image";
import { site } from "@/data/content";

export function Portrait() {
  return (
    <div className="relative h-64 overflow-hidden sm:h-80 md:h-full md:min-h-[24rem] lg:min-h-[28rem]">
      <span className="frame-tick frame-tl" />
      <span className="frame-tick frame-tr" />
      <span className="frame-tick frame-bl" />
      <span className="frame-tick frame-br" />
      <Image
        src={site.photo}
        alt={`${site.name}, ${site.headline} candidate at ${site.school}`}
        width={1984}
        height={2976}
        priority
        className="h-full w-full object-cover object-[center_12%]"
      />
      <span className="scanline max-md:hidden" />
      <span className="absolute bottom-4 left-4 z-[2] inline-flex items-center gap-2 bg-navy/80 px-2.5 py-1.5 text-[11px] font-medium tracking-wide text-white backdrop-blur-sm">
        <span className="live-dot" />
        Richardson, TX
      </span>
    </div>
  );
}
