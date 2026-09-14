import { Icon } from "@/components/icon";
import { RichText } from "@/components/rich-text";
import { about, site } from "@/data/content";

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="label">
          <Icon name="user" className="h-4 w-4" />
          About
        </p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
          Technical depth, <em className="em">business exposure</em>, and an operator’s view of how work gets done
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="space-y-5 text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>
                <RichText text={paragraph} />
              </p>
            ))}
            <p>
              <RichText text={site.seeking} />
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Areas of interest</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.interests.map((item) => (
                <li key={item}>
                  <span className="chip inline-block cursor-default px-3 py-1.5 text-sm text-ink-soft">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
