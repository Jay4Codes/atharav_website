import { Logo } from "@/components/logo";
import { experience, partners, speaking } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-[13px] text-muted">Experience</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-[2rem]">
          From plant floor to product
        </h2>

        <div className="mt-10 space-y-10">
          {experience.map((job) => (
            <article key={job.company} className="border border-line">
              <div className="flex flex-col gap-4 border-b border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <a
                  href={job.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center border border-line bg-white">
                    <Logo src={job.logo} alt={job.company} className="h-8 w-8 object-contain" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold">{job.company}</span>
                    <span className="text-sm text-muted">{job.location}</span>
                  </span>
                </a>
                <p className="text-sm text-muted">Energy conservation · steel & power</p>
              </div>
              <div className="divide-y divide-line">
                {job.roles.map((role) => (
                  <div
                    key={role.title}
                    className="grid gap-4 px-5 py-7 sm:px-7 md:grid-cols-[16rem_1fr]"
                  >
                    <div>
                      <p className="font-semibold">{role.title}</p>
                      <p className="mono mt-1 text-[13px] text-muted">{role.dates}</p>
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

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <aside className="border border-line bg-bg px-6 py-7 sm:px-8">
            <p className="text-[13px] text-muted">Leadership & presentations</p>
            <h3 className="mt-2 text-xl font-semibold">{speaking.event}</h3>
            <p className="mono mt-2 text-[13px] text-muted">
              {speaking.short} · {speaking.role} · {speaking.date}
            </p>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-ink-soft">
              {speaking.detail}
            </p>
          </aside>
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 border border-line bg-white px-6 py-7"
            >
              <Logo src={partner.src} alt={partner.name} className="h-16 w-16 object-contain" />
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
