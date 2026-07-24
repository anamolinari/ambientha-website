"use client";

import { ReactLenis } from "lenis/react";
import { useSyncExternalStore } from "react";
import "lenis/dist/lenis.css";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

// Smooth scrolling via Lenis (https://lenis.darkroom.engineering).
// Default settings (lerp 0.1, smoothWheel) — the same feel as sites
// built on Lenis / Locomotive Scroll v5, e.g. adovasio.it.
// Touch devices keep native scrolling (Lenis default).
export default function SmoothScroll() {
  const reducedMotion = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );

  if (reducedMotion) return null;

  return <ReactLenis root />;
}
