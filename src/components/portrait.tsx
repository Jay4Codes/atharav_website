import Image from "next/image";
import { site } from "@/data/content";

export function Portrait() {
  return (
    <Image
      src={site.photo}
      alt={`${site.name}, ${site.headline} candidate at ${site.school}`}
      width={1200}
      height={1200}
      priority
      className="h-64 w-full object-cover object-[center_18%] sm:h-80 md:h-full md:min-h-[24rem] lg:min-h-[28rem]"
    />
  );
}

