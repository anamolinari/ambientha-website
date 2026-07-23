"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import "lenis/dist/lenis.css";

// Smooth scrolling via Lenis (https://lenis.darkroom.engineering).
// Default settings (lerp 0.1, smoothWheel) — the same feel as sites
// built on Lenis / Locomotive Scroll v5, e.g. adovasio.it.
// Touch devices keep native scrolling (Lenis default).
export default function SmoothScroll() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) return null;

  return <ReactLenis root />;
}
