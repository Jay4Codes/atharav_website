"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`fixed right-4 z-[80] flex h-11 w-11 items-center justify-center bg-navy text-white shadow-[var(--shadow-hover)] transition-[opacity,transform] duration-200 ease-[var(--ease)] sm:right-5 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))" }}
    >
      <Icon name="arrowUp" className="h-5 w-5" />
    </button>
  );
}
