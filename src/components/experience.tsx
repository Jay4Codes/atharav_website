import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { experience, partners, speaking } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="label">
          <Icon name="briefcase" className="h-4 w-4" />
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          From plant floor to product
        </h2>

        <div className="mt-8 space-y-8 md:mt-10">
          {experience.map((job) => (
            <article key={job.company} className="card overflow-hidden">
              <div className="flex flex-col gap-3 border-b border-line px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <a
                  href={job.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-white transition-colors group-hover:border-navy">
                    <Logo src={job.logo} alt={job.company} className="h-8 w-8 object-contain" />
                  </span>
                  <span>
                    <span className="block text-base font-semibold transition-colors group-hover:text-navy sm:text-lg">
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted">
                      <Icon name="pin" className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </span>
                </a>
                <p className="text-sm text-muted">Energy conservation · steel & power</p>
              </div>
              <div className="divide-y divide-line">
                {job.roles.map((role) => (
                  <div
                    key={role.title}
                    className="grid gap-4 px-4 py-6 transition-colors hover:bg-bg/80 sm:px-7 md:grid-cols-[14rem_1fr] lg:grid-cols-[16rem_1fr]"
                  >
                    <div>
                      <p className="font-semibold">{role.title}</p>
                      <p className="mono mt-1 flex items-center gap-1.5 text-[13px] text-muted">
                        <Icon name="clock" className="h-3.5 w-3.5" />
                        {role.dates}
                      </p>
                    </div>
                    <ul className="space-y-3 text-[15px] leading-7 text-ink-soft">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2.5 h-1 w-1 shrink-0 bg-navy" />
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
            <p className="mt-4 text-[15px] leading-7 text-ink-soft">{speaking.detail}</p>
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
