import { metrics, site } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        <div>
          <p className="kicker">
            {site.location} · {site.status}
          </p>
          <h1 className="serif mt-5 max-w-xl text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft sm:text-xl">
            {site.summary}
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
            {site.headline} at {site.school}. Previously Project Manager at
            Abhitech Energycon, working with steel plants and power utilities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center bg-forest px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-forest-deep"
            >
              Selected work
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
            >
              Email Atharav
            </a>
          </div>
        </div>

        <aside className="flex flex-col justify-end border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="kicker">Currently</p>
          <p className="serif mt-3 text-2xl leading-snug">
            Dual MBA / M.S. Analytics & AI
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Naveen Jindal School of Management · expected June 2028
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="kicker">{metric.label}</dt>
                <dd className="serif mt-2 text-3xl tracking-tight text-forest">
                  {metric.value}
                </dd>
                <p className="mt-1 text-xs leading-5 text-muted">{metric.detail}</p>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
