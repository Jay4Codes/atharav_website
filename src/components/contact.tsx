import { Icon } from "@/components/icon";
import { site } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="border-b border-line bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="flex items-center gap-2 text-[13px] text-white/60">
          <Icon name="mail" className="h-4 w-4" />
          Contact
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
          Get in touch about analytics, operations, and consulting work.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/65">
          Based in Richardson, TX. Best reached by email or LinkedIn.
        </p>

        <div className="mt-8 grid gap-px bg-white/15 md:grid-cols-3">
          <a
            href={`mailto:${site.email}`}
            className="flex min-h-24 items-start gap-3 bg-navy p-5 transition-colors hover:bg-navy-2 sm:p-6"
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
            className="flex min-h-24 items-start gap-3 bg-navy p-5 transition-colors hover:bg-navy-2 sm:p-6"
          >
            <Icon name="linkedin" className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
            <span>
              <span className="block text-[13px] text-white/55">LinkedIn</span>
              <span className="mt-2 block text-sm font-medium">linkedin.com/in/atharav-samant</span>
            </span>
          </a>
          <a
            href="tel:+12142237218"
            className="flex min-h-24 items-start gap-3 bg-navy p-5 transition-colors hover:bg-navy-2 sm:p-6"
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
