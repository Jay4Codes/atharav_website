import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";
import { SectionKicker } from "@/components/section-kicker";
import { about, site } from "@/data/content";

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionKicker index="01" icon="user" label="About" />
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          Technical depth, <em className="em">business exposure</em>, and an operator’s view of how work gets done
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5 text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>
                  <RichText text={paragraph} />
                </p>
              ))}
              <p className="hidden sm:block">
                <RichText text={site.seeking} />
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="lens-rail space-y-3">
              {about.lenses.map((lens) => (
                <div key={lens.title} className="relative border border-line bg-surface/90 p-4 pl-11 sm:p-5 sm:pl-12">
                  <span className="absolute top-5 left-4 flex h-[10px] w-[10px] items-center justify-center border border-accent bg-white">
                    <span className="h-1.5 w-1.5 bg-accent" />
                  </span>
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <Icon name={lens.icon as IconName} className="h-4 w-4 text-navy" />
                    {lens.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{lens.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold">Areas of interest</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.interests.map((item) => (
                <li key={item}>
                  <span className="chip inline-block cursor-default px-3 py-1.5 text-sm text-ink-soft">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
