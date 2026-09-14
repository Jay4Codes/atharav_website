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

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed z-50 flex h-11 w-11 items-center justify-center border border-line bg-navy text-white shadow-sm transition-colors hover:bg-navy-2 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))]"
    >
      <Icon name="arrowUp" className="h-5 w-5" />
    </button>
  );
}
