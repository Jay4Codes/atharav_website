"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { nav, site } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <a href="#top" className="group flex min-h-11 items-center gap-2.5 sm:gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-navy text-[11px] font-semibold text-white transition-transform duration-200 ease-[var(--ease)] group-hover:scale-105">
            {site.shortName}
          </span>
          <span className="text-sm font-semibold tracking-tight transition-colors group-hover:text-navy">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-4 md:flex lg:gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link inline-flex min-h-11 items-center gap-1.5 text-[13px] font-medium text-ink-soft"
            >
              <Icon name={item.icon} className="hidden h-4 w-4 lg:inline" />
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-line transition-colors hover:border-navy hover:bg-navy hover:text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1">
            <span className="block h-px bg-current" />
            <span className="block h-px bg-current" />
            <span className="block h-px bg-current" />
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
                className="flex min-h-11 items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-navy"
                onClick={() => setOpen(false)}
              >
                <Icon name={item.icon} className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
