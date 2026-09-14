import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/data/content";

export function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label">Selected work</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Products built inside industrial operations
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Analytics, internal platforms, and AI initiatives at Abhitech Energycon.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="card group flex flex-col overflow-hidden"
            >
              <div className="media-zoom relative h-36 sm:h-40">
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
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight sm:text-xl">
                    <Icon
                      name={project.visual}
                      className="h-4 w-4 shrink-0 text-navy transition-colors group-hover:text-accent"
                    />
                    {"href" in project ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                      >
                        {project.name}
                        <Icon
                          name="arrowOut"
                          className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent"
                        />
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="mono text-[13px] text-accent">{project.impact}</p>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {project.kind}
                  {"href" in project ? (
                    <>
                      {" · "}
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mono text-[12px] text-navy transition-colors hover:text-accent"
                      >
                        {new URL(project.href).host}
                      </a>
                    </>
                  ) : null}
                </p>
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
                    <span key={tag} className="chip px-2.5 py-1 text-[11px] text-ink-soft">
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
