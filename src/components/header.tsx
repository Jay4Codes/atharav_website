"use client";

import { useState } from "react";
import { nav, site } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/92 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-h-11 items-center gap-2.5 sm:gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-navy text-[11px] font-semibold text-white">
            {site.shortName}
          </span>
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-line md:hidden"
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
        <div className="border-t border-line px-4 py-3 md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-sm text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
