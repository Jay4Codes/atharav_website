"use client";

import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { proof } from "@/data/content";

export function ProofStrip() {
  return (
    <div className="border-t border-line bg-navy text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-3">
        {proof.map((item, index) => (
          <Reveal
            key={item.kicker}
            delay={index * 80}
            className="min-w-0 border-r border-white/10 px-2 py-4 last:border-r-0 sm:px-6 sm:py-5 lg:px-8"
          >
            <p className="mono text-[9px] uppercase tracking-[0.12em] text-white/55 sm:text-[11px] sm:tracking-[0.16em]">
              {item.kicker}
            </p>
            <p className="display mt-1.5 text-[clamp(1.05rem,4.4vw,1.35rem)] leading-none tracking-tight sm:mt-2 sm:text-3xl md:text-4xl">
              {"count" in item ? (
                <CountUp
                  to={item.count}
                  prefix={"prefix" in item ? item.prefix : ""}
                  suffix={"suffix" in item ? item.suffix : ""}
                />
              ) : (
                item.value
              )}
            </p>
            <p className="mt-1 text-[11px] leading-4 text-white/70 sm:text-sm sm:leading-5">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
