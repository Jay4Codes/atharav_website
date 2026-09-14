"use client";

import Image from "next/image";
import type { KeyboardEvent, MouseEvent } from "react";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { RichText } from "@/components/rich-text";
import { experience } from "@/data/content";

type Job = (typeof experience)[number];

function keepCompanyLink(event: MouseEvent<HTMLAnchorElement>) {
  event.stopPropagation();
}

function keepCompanyLinkKey(event: KeyboardEvent<HTMLAnchorElement>) {
  if (event.key === "Enter" || event.key === " ") {
    event.stopPropagation();
  }
}

export function ExperienceCard({ job }: { job: Job }) {
  return (
    <details open className="card group overflow-hidden">
      <summary className="exp-summary flex cursor-pointer list-none items-start gap-3 px-4 py-5 sm:items-center sm:px-7 group-open:border-b group-open:border-line">
        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={job.href}
            target="_blank"
            rel="noreferrer"
            onClick={keepCompanyLink}
            onKeyDown={keepCompanyLinkKey}
            className="group/company relative z-10 flex min-w-0 items-center gap-4"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-white transition-colors group-hover/company:border-navy">
              <Logo src={job.logo} alt={job.company} className="h-8 w-8 object-contain" />
            </span>
            <span className="min-w-0">
              <span className="block text-base font-semibold transition-colors group-hover/company:text-navy sm:text-lg">
                {job.company}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted">
                <Icon name="pin" className="h-3.5 w-3.5" />
                {job.location}
              </span>
            </span>
          </a>
          <p className="text-sm text-muted">{job.focus}</p>
        </div>
        <span className="mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted transition-colors group-hover:text-navy sm:mt-0">
          <Icon
            name="chevronDown"
            className="h-4 w-4 transition-transform duration-300 ease-[var(--ease)] group-open:rotate-180"
          />
        </span>
      </summary>
      <div className="divide-y divide-line">
        {job.roles.map((role) => (
          <div
            key={role.title}
            className={`grid gap-4 px-4 py-6 transition-colors hover:bg-bg/80 sm:px-7 md:grid-cols-[14rem_1fr] ${
              "certificate" in role
                ? "lg:grid-cols-[16rem_1fr_7.25rem]"
                : "lg:grid-cols-[16rem_1fr]"
            }`}
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
                  <span>
                    <RichText text={bullet} />
                  </span>
                </li>
              ))}
            </ul>
            {"certificate" in role ? (
              <a
                href={role.certificate}
                target="_blank"
                rel="noreferrer"
                className="group/cert w-24 shrink-0 justify-self-start lg:w-full"
              >
                <span className="media-zoom relative block aspect-[3/4] overflow-hidden border border-line bg-white transition-[border-color,box-shadow] duration-200 ease-[var(--ease)] group-hover/cert:border-navy group-hover/cert:shadow-[var(--shadow-hover)]">
                  <Image
                    src={role.certificate}
                    alt={`${job.company} internship certificate`}
                    fill
                    sizes="112px"
                    className="object-cover object-top"
                  />
                </span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-medium text-navy transition-colors group-hover/cert:text-accent">
                  <Icon name="doc" className="h-3.5 w-3.5" />
                  Certificate
                </span>
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </details>
  );
}
