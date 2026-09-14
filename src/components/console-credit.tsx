"use client";

import { useEffect } from "react";

export function ConsoleCredit() {
  useEffect(() => {
    console.log(
      "%cDesigned and Developed by Ekalon Solutions",
      "font-weight:600;font-size:12px;color:#0c1b2e;",
    );
    console.log("%chttps://ekalonsolutions.com", "color:#0b65c2;text-decoration:underline;");
  }, []);

  return null;
}
