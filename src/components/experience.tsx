import { experience, speaking } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="kicker">Experience</p>
        <h2 className="serif mt-3 text-3xl tracking-tight sm:text-4xl">
          From plant floor to product
        </h2>

        <div className="mt-12 space-y-14">
          {experience.map((job) => (
            <article key={job.company}>
              <div className="flex flex-col gap-1 border-b border-line pb-5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-medium">{job.company}</h3>
                <p className="text-sm text-muted">{job.location}</p>
              </div>
              <div className="divide-y divide-line">
                {job.roles.map((role) => (
                  <div
                    key={role.title}
                    className="grid gap-4 py-8 md:grid-cols-[16rem_1fr]"
                  >
                    <div>
                      <p className="font-medium">{role.title}</p>
                      <p className="mt-1 text-sm text-muted">{role.dates}</p>
                    </div>
                    <ul className="space-y-3 text-[15px] leading-7 text-ink-soft">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-forest" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="mt-6 border border-line bg-paper-2/50 p-6 sm:p-8">
          <p className="kicker">Leadership & presentations</p>
          <h3 className="serif mt-3 text-2xl">{speaking.event}</h3>
          <p className="mt-1 text-sm text-muted">
            {speaking.role} · {speaking.date}
          </p>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-ink-soft">
            {speaking.detail}
          </p>
        </aside>
      </div>
    </section>
  );
}
