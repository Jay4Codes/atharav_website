import Image from "next/image";
import { site } from "@/data/content";

export function Portrait() {
  return (
    <div className="relative h-[20rem] overflow-hidden sm:h-80 md:h-full md:min-h-[24rem] lg:min-h-[28rem]">
      <span className="frame-tick frame-tl hidden md:block" />
      <span className="frame-tick frame-tr hidden md:block" />
      <span className="frame-tick frame-bl hidden md:block" />
      <span className="frame-tick frame-br hidden md:block" />
      <Image
        src={site.photo}
        alt={`${site.name}, ${site.headline} candidate at ${site.school}`}
        width={1984}
        height={2976}
        preload
        sizes="(min-width: 768px) 22rem, 100vw"
        className="h-full w-full object-cover object-[center_18%] sm:object-[center_12%]"
      />
      <span className="scanline max-md:hidden" />
    </div>
  );
}
