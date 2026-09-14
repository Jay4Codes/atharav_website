import { Logo } from "@/components/logo";
import { education, skills } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-[13px] text-muted">Education</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-[2rem]">
            Technical foundation, dual graduate path
          </h2>
          <div className="mt-8 grid gap-4">
            {education.map((item) => (
              <a
                key={item.school}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`border border-line p-6 ${item.onDark ? "bg-davis text-white" : "bg-surface"}`}
              >
                <Logo
                  src={item.logo}
                  alt={item.school}
                  className="h-8 w-auto max-w-[13rem] object-contain object-left"
                />
                <p className={`mt-5 text-[12px] ${item.onDark ? "text-white/70" : "text-muted"}`}>
                  {item.note}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{item.school}</h3>
                <p className={`mt-1 text-sm ${item.onDark ? "text-white/75" : "text-muted"}`}>
                  {item.college}
                </p>
                <p className={`mt-3 text-[15px] leading-6 ${item.onDark ? "text-white/90" : "text-ink-soft"}`}>
                  {item.degree}
                </p>
                <p className={`mono mt-3 text-[12px] ${item.onDark ? "text-white/60" : "text-muted"}`}>
                  {item.dates}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div id="skills">
          <p className="text-[13px] text-muted">Capabilities</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-[2rem]">
            How I work
          </h2>
          <div className="mt-8 space-y-8">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-semibold">{group.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line bg-surface px-3 py-1.5 text-sm text-ink-soft"
                    >
                      {item}
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
