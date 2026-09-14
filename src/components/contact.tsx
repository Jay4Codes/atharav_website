import { site } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="border-b border-line bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-[13px] text-white/60">Contact</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Open to conversations about analytics, operations, and consulting work.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/65">
          Based in Richardson, TX. Best reached by email or LinkedIn.
        </p>

        <div className="mt-10 grid gap-px bg-white/15 sm:grid-cols-3">
          <a href={`mailto:${site.email}`} className="bg-navy p-6 transition-colors hover:bg-navy-2">
            <p className="text-[13px] text-white/55">Email</p>
            <p className="mt-3 text-sm font-medium break-all">{site.email}</p>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-navy p-6 transition-colors hover:bg-navy-2"
          >
            <p className="text-[13px] text-white/55">LinkedIn</p>
            <p className="mt-3 text-sm font-medium">linkedin.com/in/atharav-samant</p>
          </a>
          <a href="tel:+12142237218" className="bg-navy p-6 transition-colors hover:bg-navy-2">
            <p className="text-[13px] text-white/55">Phone</p>
            <p className="mt-3 text-sm font-medium">{site.phone}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
