"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  className = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const formatted = `${prefix}${to}${suffix}`;
  const { ref, visible } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(to);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = performance.now();
    const duration = 1100;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setAnimating(true);
      setValue(Math.round(to * eased));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }
      setAnimating(false);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, visible]);

  return (
    <span ref={ref} className={`relative inline-grid justify-items-start ${className}`}>
      <span className={animating ? "invisible" : undefined}>{formatted}</span>
      <span aria-hidden="true" className={`absolute inset-0 ${animating ? "" : "invisible"}`}>
        {`${prefix}${value}${suffix}`}
      </span>
    </span>
  );
}
