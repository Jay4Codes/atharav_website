import { education, skills } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="kicker">Education</p>
          <h2 className="serif mt-3 text-3xl tracking-tight sm:text-4xl">
            Technical foundation, dual graduate path
          </h2>
          <div className="mt-10 space-y-8">
            {education.map((item) => (
              <article key={item.school} className="border-t border-line pt-6">
                <p className="text-xs tracking-[0.16em] uppercase text-brass">
                  {item.note}
                </p>
                <h3 className="mt-2 text-lg font-medium">{item.school}</h3>
                <p className="mt-1 text-sm text-muted">{item.college}</p>
                <p className="mt-3 text-[15px] leading-6 text-ink-soft">
                  {item.degree}
                </p>
                <p className="mt-2 font-mono text-xs text-muted">{item.dates}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="skills">
          <p className="kicker">Capabilities</p>
          <h2 className="serif mt-3 text-3xl tracking-tight sm:text-4xl">
            How I work
          </h2>
          <div className="mt-10 space-y-8">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-medium">{group.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-3 py-1.5 text-sm text-ink-soft"
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
