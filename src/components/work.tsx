import { Logo } from "@/components/logo";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/data/content";

export function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] text-muted">Selected work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-[2rem]">
              Products built inside industrial operations
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Analytics, internal platforms, and AI initiatives at Abhitech Energycon.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="flex flex-col overflow-hidden border border-line bg-surface"
            >
              <div className="relative h-40">
                <ProjectVisual kind={project.visual} />
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/95 px-2.5 py-1.5">
                  <Logo
                    src="/logos/abhitech.svg"
                    alt="Abhitech Energycon"
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-[11px] font-medium text-ink-soft">
                    {project.timeframe}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
                  <p className="mono text-[13px] text-accent">{project.impact}</p>
                </div>
                <p className="mt-1 text-sm text-muted">{project.kind}</p>
                <p className="mt-4 text-[15px] leading-7 text-ink-soft">{project.summary}</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line bg-bg px-2.5 py-1 text-[11px] text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
