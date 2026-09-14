import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Portrait } from "@/components/portrait";
import { ProofStrip } from "@/components/proof-strip";
import { RichText } from "@/components/rich-text";
import { affiliations, site } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[minmax(14rem,38%)_1fr] lg:grid-cols-[minmax(17rem,22rem)_1fr]">
        <div className="media-zoom border-b border-line md:border-r md:border-b-0">
          <Portrait />
        </div>

        <div className="flex flex-col justify-center px-4 py-6 sm:px-6 sm:py-12 lg:px-12 lg:py-14">
          <p className="label rise">
            <span className="live-dot" />
            Open to internships
            <span className="text-muted">/</span>
            {site.location}
          </p>
          <h1 className="display mt-3 text-[2.05rem] leading-[1.06] tracking-tight text-ink sm:mt-4 sm:text-5xl sm:leading-[0.95] md:text-6xl lg:text-[4.1rem]">
            <span className="word-mask">
              <span>Atharav</span>
            </span>
            <span className="word-mask d-word-1">
              <span>Samant</span>
            </span>
          </h1>
          <span className="mt-4 block h-0.5 w-16 bg-[image:var(--grad-accent)] rise d1 sm:mt-5" />
          <p className="rise d2 mt-4 hidden max-w-xl text-base leading-7 text-ink-soft sm:block sm:text-lg sm:leading-8">
            <RichText text={site.summary} />
          </p>
          <p className="rise d3 mt-3 max-w-xl text-sm leading-6 text-muted sm:mt-4 sm:text-[15px] sm:leading-7">
            <span className="hidden sm:inline">
              <strong className="mark">{site.headline}</strong> at{" "}
              <strong className="mark">{site.school}</strong>.{" "}
            </span>
            <RichText text={site.seeking} />
          </p>
          <div className="rise d4 mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href="#work"
              className="btn-primary inline-flex min-h-11 w-full items-center justify-center px-5 text-sm font-semibold sm:w-auto"
            >
              See selected work
            </a>
            <a
              href={`mailto:${site.email}`}
              className="btn-secondary inline-flex min-h-11 w-full items-center justify-center gap-2 px-5 text-sm font-semibold sm:w-auto"
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
              className={`group flex min-h-[4.75rem] items-center gap-3 border-b border-line px-4 py-3.5 last:border-b-0 md:min-h-[5.25rem] md:border-b-0 md:border-r md:last:border-r-0 sm:gap-4 sm:px-6 sm:py-4 lg:px-8 ${
                item.onDark
                  ? `row-link-dark ${"theme" in item && item.theme === "utd" ? "bg-utd" : "bg-davis"}`
                  : "row-link bg-surface"
              }`}
            >
              <Logo
                src={item.src}
                alt=""
                className="h-8 w-auto max-w-[7.5rem] shrink-0 object-contain object-left transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:max-w-[10rem]"
              />
              <span className="min-w-0">
                <span
                  className={`block text-[15px] font-semibold leading-5 tracking-tight sm:text-base ${
                    item.onDark ? "text-white" : "text-ink"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`mt-0.5 block text-[13px] leading-5 sm:text-sm ${
                    item.onDark ? "text-white/80" : "text-muted"
                  }`}
                >
                  {item.role}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <ProofStrip />
    </section>
  );
}
