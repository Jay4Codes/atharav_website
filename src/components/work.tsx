import { projects } from "@/data/content";

export function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker">Selected work</p>
            <h2 className="serif mt-3 text-3xl tracking-tight sm:text-4xl">
              Products and operating systems for industrial teams
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Analytics, internal platforms, and AI initiatives built inside a
            manufacturing and energy-conservation business.
          </p>
        </div>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="grid gap-6 py-10 lg:grid-cols-[7rem_1fr_16rem] lg:gap-10"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-brass">
                {project.number}
              </p>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="serif text-2xl sm:text-3xl">{project.name}</h3>
                  <span className="text-sm text-muted">{project.kind}</span>
                </div>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">
                  {project.summary}
                </p>
                <ul className="mt-4 max-w-2xl space-y-2 text-[14px] leading-6 text-muted">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line bg-paper-2/60 px-2.5 py-1 text-[11px] tracking-wide text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:border-l lg:border-line lg:pl-8">
                <p className="kicker">Impact</p>
                <p className="serif mt-2 text-2xl text-forest">{project.impact}</p>
                <p className="mt-3 text-xs leading-5 text-muted">
                  {project.timeframe}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
