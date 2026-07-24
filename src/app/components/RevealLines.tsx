"use client";

import { Fragment, useLayoutEffect, useRef } from "react";

const EASE = "cubic-bezier(0.19, 1, 0.22, 1)";
const DURATION_MS = 1400;
const LINE_STAGGER_MS = 120;
const WORD_STAGGER_MS = 30;

interface RevealLinesProps {
  text: string;
  className?: string;
}

export default function RevealLines({ text, className }: RevealLinesProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.trim().split(/\s+/);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const masks = Array.from(
      el.querySelectorAll<HTMLSpanElement>("[data-mask]")
    );
    let revealed = false;
    let cleanupTimeout: number | undefined;

    // Masks sharing the same offsetTop are on the same rendered line
    const assignLines = () => {
      let line = -1;
      let wordInLine = 0;
      let lastTop: number | null = null;
      for (const mask of masks) {
        if (mask.offsetTop !== lastTop) {
          line += 1;
          wordInLine = 0;
          lastTop = mask.offsetTop;
        }
        mask.dataset.line = String(line);
        mask.dataset.word = String(wordInLine);
        wordInLine += 1;
      }
    };

    const hide = () => {
      for (const mask of masks) {
        const word = mask.firstElementChild as HTMLSpanElement;
        word.style.transition = "none";
        word.style.transform = "translateY(110%)";
        word.style.willChange = "transform";
      }
    };

    const reveal = () => {
      revealed = true;
      let lastDelay = 0;
      for (const mask of masks) {
        const word = mask.firstElementChild as HTMLSpanElement;
        const line = Number(mask.dataset.line ?? 0);
        const wordInLine = Number(mask.dataset.word ?? 0);
        const delay = line * LINE_STAGGER_MS + wordInLine * WORD_STAGGER_MS;
        lastDelay = Math.max(lastDelay, delay);
        word.style.transition = `transform ${DURATION_MS}ms ${EASE} ${delay}ms`;
        word.style.transform = "translateY(0)";
      }
      cleanupTimeout = window.setTimeout(() => {
        for (const mask of masks) {
          (mask.firstElementChild as HTMLSpanElement).removeAttribute("style");
        }
      }, DURATION_MS + lastDelay + 100);
    };

    assignLines();
    hide();

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    const onResize = () => {
      if (!revealed) assignLines();
    };
    window.addEventListener("resize", onResize);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.clearTimeout(cleanupTimeout);
      for (const mask of masks) {
        (mask.firstElementChild as HTMLSpanElement).removeAttribute("style");
      }
    };
  }, [text]);

  return (
    <p ref={ref} className={className} aria-label={text.trim()}>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Fragment key={i}>
            <span data-mask className="inline-block overflow-hidden align-top">
              <span className="inline-block">{word}</span>
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </p>
  );
}
