import { Icon } from "@/components/icon";
import { site } from "@/data/content";
import { SectionKicker } from "@/components/section-kicker";

export function Contact() {
  return (
    <section id="contact" className="navy-panel relative overflow-hidden border-b border-line text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionKicker index="05" icon="mail" label="Contact" invert />
        <h2 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-3xl lg:text-4xl">
          Get in touch about <em className="em">analytics</em>, <em className="em">operations</em>, and{" "}
          <em className="em">consulting</em> work.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/65">
          Based in <strong className="mark">Richardson, TX</strong>. Best reached by email or LinkedIn.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="email-xl display mt-8 hidden max-w-full break-all text-2xl leading-tight tracking-tight text-white sm:inline-block sm:text-3xl lg:text-4xl"
        >
          {site.email}
        </a>

        <div className="mt-10 grid gap-px bg-white/15 md:grid-cols-3">
          <a
            href={`mailto:${site.email}`}
            className="row-link-dark flex min-h-24 items-start gap-3 bg-transparent p-5 sm:p-6"
          >
            <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
            <span>
              <span className="block text-[13px] text-white/55">Email</span>
              <span className="mt-2 block text-sm font-medium break-all">{site.email}</span>
            </span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="row-link-dark flex min-h-24 items-start gap-3 bg-transparent p-5 sm:p-6"
          >
            <Icon name="linkedin" className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
            <span>
              <span className="block text-[13px] text-white/55">LinkedIn</span>
              <span className="mt-2 block text-sm font-medium break-all">linkedin.com/in/atharav-samant</span>
            </span>
          </a>
          <a
            href="tel:+12142237218"
            className="row-link-dark flex min-h-24 items-start gap-3 bg-transparent p-5 sm:p-6"
          >
            <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
            <span>
              <span className="block text-[13px] text-white/55">Phone</span>
              <span className="mt-2 block text-sm font-medium">{site.phone}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
