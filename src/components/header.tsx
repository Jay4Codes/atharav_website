"use client";

import { useState } from "react";
import { nav, site } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-navy text-[11px] font-semibold text-white">
            {site.shortName}
          </span>
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
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
          </nav>
        </div>
      ) : null}
    </header>
  );
}
