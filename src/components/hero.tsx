import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Portrait } from "@/components/portrait";
import { RichText } from "@/components/rich-text";
import { affiliations, site } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[minmax(14rem,38%)_1fr] lg:grid-cols-[minmax(17rem,22rem)_1fr]">
        <div className="media-zoom border-b border-line md:border-r md:border-b-0">
          <Portrait />
        </div>

        <div className="flex flex-col justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-14">
          <p className="label rise">
            <Icon name="pin" className="h-4 w-4 shrink-0" />
            {site.location}
          </p>
          <h1 className="display rise d1 mt-3 text-[2rem] leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            {site.name}
          </h1>
          <span className="mt-4 block h-0.5 w-16 bg-[image:var(--grad-accent)] rise d1" />
          <p className="rise d2 mt-4 max-w-xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            <RichText text={site.summary} />
          </p>
          <p className="rise d3 mt-4 max-w-xl text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
            <strong className="mark">{site.headline}</strong> at{" "}
            <strong className="mark">{site.school}</strong>. <RichText text={site.seeking} />
          </p>
          <div className="rise d4 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#about"
              className="btn-primary inline-flex min-h-11 items-center justify-center px-5 text-sm font-semibold"
            >
              About Atharav
            </a>
            <a
              href={`mailto:${site.email}`}
              className="btn-secondary inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-semibold"
            >
              <Icon name="mail" className="h-4 w-4" />
              Email Atharav
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          {affiliations.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`group flex min-h-[4.75rem] items-center gap-3 border-b border-line px-4 py-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:gap-4 sm:px-6 lg:px-8 ${
                item.onDark ? "row-link-dark bg-davis" : "row-link bg-surface"
              }`}
            >
              <Logo
                src={item.src}
                alt={item.name}
                className="h-7 w-auto max-w-[8.5rem] object-contain object-left transition-transform duration-300 group-hover:scale-105 sm:h-8 sm:max-w-[10rem]"
              />
              <span className={`text-[12px] leading-5 ${item.onDark ? "text-white/80" : "text-muted"}`}>
                {item.role}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
