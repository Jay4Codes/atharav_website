import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Portrait } from "@/components/portrait";
import { affiliations, metrics, site } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[minmax(14rem,38%)_1fr] lg:grid-cols-[minmax(17rem,22rem)_1fr]">
        <div className="border-b border-line md:border-r md:border-b-0">
          <Portrait />
        </div>

        <div className="flex flex-col justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-14">
          <p className="flex items-center gap-2 text-[13px] text-muted">
            <Icon name="pin" className="h-4 w-4 shrink-0" />
            {site.location}
          </p>
          <h1 className="display mt-3 text-[2rem] leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            {site.summary}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
            {site.headline} at {site.school}. Previously Project Manager at
            Abhitech Energycon, working with steel plants and power utilities.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="inline-flex min-h-11 items-center justify-center bg-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-2"
            >
              Selected work
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-navy px-5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
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
              className={`flex min-h-[4.75rem] items-center gap-3 border-b border-line px-4 py-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:gap-4 sm:px-6 lg:px-8 ${
                item.onDark ? "bg-davis" : "bg-surface"
              }`}
            >
              <Logo
                src={item.src}
                alt={item.name}
                className="h-7 w-auto max-w-[8.5rem] object-contain object-left sm:h-8 sm:max-w-[10rem]"
              />
              <span className={`text-[12px] leading-5 ${item.onDark ? "text-white/80" : "text-muted"}`}>
                {item.role}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-line bg-bg">
        <dl className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`border-b border-line px-4 py-5 sm:px-6 lg:px-8 lg:border-b-0 ${
                index % 2 === 0 ? "sm:border-r" : "sm:border-r-0"
              } ${index !== 3 ? "lg:border-r" : "lg:border-r-0"}`}
            >
              <dt className="flex items-center gap-2 text-[13px] text-muted">
                <Icon name={metric.icon} className="h-4 w-4 shrink-0 text-navy" />
                {metric.label}
              </dt>
              <dd className="mono mt-2 text-xl text-navy sm:text-2xl">{metric.value}</dd>
              <p className="mt-2 text-[12px] leading-5 text-muted">{metric.detail}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
