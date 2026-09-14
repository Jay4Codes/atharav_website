"use client";

import { useState } from "react";
import { nav, site } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-forest text-[11px] font-semibold tracking-wide text-paper">
            {site.shortName}
          </span>
          <span className="text-sm font-medium tracking-tight">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resumeHref}
            className="border border-ink bg-ink px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-paper transition-colors hover:bg-transparent hover:text-ink"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center border border-line md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1">
            <span className="block h-px bg-ink" />
            <span className="block h-px bg-ink" />
            <span className="block h-px bg-ink" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={site.resumeHref} className="text-sm font-medium">
              Download resume
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
