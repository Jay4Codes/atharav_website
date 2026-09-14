import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { RichText } from "@/components/rich-text";
import { education, skills } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <p className="label">
            <Icon name="grad" className="h-4 w-4" />
            Education
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Technical foundation, dual graduate path
          </h2>
          <div className="mt-8 grid gap-4">
            {education.map((item) => (
              <a
                key={item.school}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`card block p-5 sm:p-6 ${
                  "theme" in item && item.theme === "utd"
                    ? "utd-panel text-white hover:border-accent"
                    : item.onDark
                      ? "navy-panel text-white hover:border-accent"
                      : ""
                }`}
              >
                <Logo
                  src={item.logo}
                  alt={item.school}
                  className="h-8 w-auto max-w-[min(16rem,78vw)] object-contain object-left sm:h-9"
                />
                <p
                  className={`mt-5 text-[12px] font-medium uppercase tracking-[0.14em] ${
                    item.onDark ? "text-white/70" : "text-muted"
                  }`}
                >
                  {item.note}
                </p>
                <h3 className="display mt-1.5 text-xl font-semibold tracking-tight sm:text-[1.35rem]">
                  {item.school}
                </h3>
                <p className={`mt-1 text-sm ${item.onDark ? "text-white/75" : "text-muted"}`}>
                  {item.college}
                </p>
                <p className={`mt-3 text-[15px] leading-6 ${item.onDark ? "text-white/90" : "text-ink-soft"}`}>
                  <RichText text={`**${item.degree}**`} />
                </p>
                {"detail" in item ? (
                  <p className={`mt-3 text-sm leading-6 ${item.onDark ? "text-white/75" : "text-muted"}`}>
                    <RichText text={item.detail} />
                  </p>
                ) : null}
                <p className={`mono mt-3 text-[12px] ${item.onDark ? "text-white/60" : "text-muted"}`}>
                  {item.dates}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div id="skills">
          <p className="label">
            <Icon name="chart" className="h-4 w-4" />
            Capabilities
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            How I work
          </h2>
          <div className="mt-8 space-y-8">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="flex items-center gap-2 text-sm font-semibold">
                  <Icon name={group.icon} className="h-4 w-4 text-navy" />
                  {group.group}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <span className="chip inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-ink-soft">
                        <Icon
                          name={item.icon}
                          className="h-3.5 w-3.5 text-navy transition-colors"
                        />
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
