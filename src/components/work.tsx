import Image from "next/image";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";
import { SectionKicker } from "@/components/section-kicker";
import { projects } from "@/data/content";

export function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionKicker index="02" icon="ops" label="Selected work" />
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Products built inside industrial operations
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            <RichText text="**Analytics**, internal platforms, and **AI** initiatives at **Abhitech Energycon**." />
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 70}>
              <article id={project.id} className="card card-rail group flex h-full flex-col overflow-hidden">
                <div className="media-zoom relative h-48 sm:h-56">
                  {"image" in project ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} product interface`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                  ) : (
                    <ProjectVisual kind={project.visual} />
                  )}
                  <span className="work-index mono px-2 py-1 text-[11px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="impact-band px-4 py-3">
                    <p className="mono text-[13px] text-white">{project.impact}</p>
                    <p className="mt-1 text-[11px] tracking-wide text-white/80">{project.kind}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <Logo
                      src="/logos/abhitech.svg"
                      alt="Abhitech Energycon"
                      className="h-5 w-5 object-contain"
                    />
                    <span className="text-[11px] font-medium text-muted">{project.timeframe}</span>
                  </div>
                  <h3 className="mt-3 flex min-w-0 items-center gap-2 text-lg font-semibold tracking-tight sm:text-xl">
                    <Icon
                      name={project.visual}
                      className="h-4 w-4 shrink-0 text-navy transition-colors group-hover:text-accent"
                    />
                    {"href" in project ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-accent"
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
                  {"href" in project ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mono mt-1 text-[12px] text-navy transition-colors hover:text-accent"
                    >
                      {new URL(project.href).host}
                    </a>
                  ) : null}
                  <p className="mt-4 text-[15px] leading-7 text-ink-soft">
                    <RichText text={project.summary} />
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                        <span>
                          <RichText text={detail} />
                        </span>
                      </li>
                    ))}
                  </ul>
                  {"process" in project ? (
                    <p className="mt-4 text-[13px] leading-6 text-ink-soft">
                      <span className="font-semibold text-ink">Process: </span>
                      <span className="text-muted">{project.process}</span>
                    </p>
                  ) : null}
                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip px-2.5 py-1 text-[11px] text-ink-soft">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {"demoHref" in project ? (
                      <a
                        href={(project as { demoHref: string }).demoHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex min-h-10 items-center gap-2 border border-navy bg-navy px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:bg-accent"
                      >
                        Try demo
                        <Icon name="arrowOut" className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
