"use client";

import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { proof } from "@/data/content";

export function ProofStrip() {
  return (
    <div className="border-t border-line bg-navy text-white">
      <div className="mx-auto grid max-w-6xl md:grid-cols-3">
        {proof.map((item, index) => (
          <Reveal
            key={item.kicker}
            delay={index * 80}
            className="border-b border-white/10 px-4 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:px-6 lg:px-8"
          >
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/55">{item.kicker}</p>
            <p className="display mt-2 text-3xl tracking-tight sm:text-4xl">
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
            <p className="mt-1 text-sm text-white/70">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
