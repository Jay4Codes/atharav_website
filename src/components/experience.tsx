import { ExperienceCard } from "@/components/experience-card";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";
import { SectionKicker } from "@/components/section-kicker";
import { experience, partners, speaking } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionKicker index="03" icon="briefcase" label="Experience" />
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          From plant floor to product
        </h2>

        <div className="mt-8 space-y-8 md:mt-10">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 80}>
              <ExperienceCard job={job} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <aside className="surface-wash border border-line px-5 py-6 sm:px-8 sm:py-7">
            <p className="label">
              <Icon name="mic" className="h-4 w-4" />
              Leadership & presentations
            </p>
            <h3 className="mt-2 text-lg font-semibold sm:text-xl">{speaking.event}</h3>
            <p className="mono mt-2 text-[13px] text-muted">
              {speaking.short} · {speaking.role} · {speaking.date}
            </p>
            <p className="mt-4 text-[15px] leading-7 text-ink-soft">
              <RichText text={speaking.detail} />
            </p>
          </aside>
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              className="card row-link flex items-center gap-4 px-5 py-6 sm:gap-5 sm:px-6 sm:py-7"
            >
              <Logo
                src={partner.src}
                alt={partner.name}
                className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
              />
              <span>
                <span className="block font-semibold">{partner.name}</span>
                <span className="mt-1 block text-sm text-muted">{partner.role}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
