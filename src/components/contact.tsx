import { site } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="kicker">Contact</p>
        <h2 className="serif mt-4 max-w-2xl text-4xl leading-tight tracking-tight sm:text-5xl">
          Open to conversations about analytics, operations, and consulting work.
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
          Based in Richardson, TX. Best reached by email or LinkedIn.
        </p>

        <div className="mt-10 grid gap-px bg-line sm:grid-cols-3">
          <a
            href={`mailto:${site.email}`}
            className="bg-paper p-6 transition-colors hover:bg-paper-2"
          >
            <p className="kicker">Email</p>
            <p className="mt-3 text-sm font-medium break-all">{site.email}</p>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-paper p-6 transition-colors hover:bg-paper-2"
          >
            <p className="kicker">LinkedIn</p>
            <p className="mt-3 text-sm font-medium">linkedin.com/in/atharav-samant</p>
          </a>
          <a
            href={`tel:+12142237218`}
            className="bg-paper p-6 transition-colors hover:bg-paper-2"
          >
            <p className="kicker">Phone</p>
            <p className="mt-3 text-sm font-medium">{site.phone}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
