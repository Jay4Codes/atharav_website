import { Logo } from "@/components/logo";
import { Portrait } from "@/components/portrait";
import { affiliations, metrics, site } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-[minmax(17rem,22rem)_1fr]">
        <div className="border-b border-line lg:border-b-0 lg:border-r">
          <Portrait />
        </div>

        <div className="flex flex-col justify-between px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div>
            <p className="text-[13px] text-muted">
              {site.location} · {site.status}
            </p>
            <h1 className="display mt-4 text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
              {site.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">
              {site.summary}
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
              {site.headline} at {site.school}. Previously Project Manager at
              Abhitech Energycon, working with steel plants and power utilities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-2"
              >
                Selected work
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Email Atharav
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
          {affiliations.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`flex min-h-[5.5rem] items-center gap-4 border-b border-line px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-8 ${
                item.onDark ? "bg-davis" : "bg-surface"
              }`}
            >
              <Logo
                src={item.src}
                alt={item.name}
                className="h-8 w-auto max-w-[9.5rem] object-contain object-left"
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
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-b border-line px-5 py-6 last:border-b-0 sm:border-r sm:px-8 lg:border-b-0 lg:even:border-r lg:[&:nth-child(2)]:border-r lg:last:border-r-0"
            >
              <dt className="text-[13px] text-muted">{metric.label}</dt>
              <dd className="mono mt-2 text-2xl text-navy">{metric.value}</dd>
              <p className="mt-2 text-[12px] leading-5 text-muted">{metric.detail}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
