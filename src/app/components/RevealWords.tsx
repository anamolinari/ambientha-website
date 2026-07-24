"use client";

import { Fragment, useLayoutEffect, useRef } from "react";

const EASE = "cubic-bezier(0.19, 1, 0.22, 1)";
const DURATION_MS = 1300;
const WORD_STAGGER_MS = 90;
const MOUNT_DELAY_MS = 300;

interface RevealWordsProps {
  text: string;
  className?: string;
  /** Extra delay before this text starts, on top of the shared base delay */
  delayMs?: number;
  /** Reveal when scrolled into view instead of on mount */
  whenVisible?: boolean;
  /** Element to render — use "span" to nest inside a link */
  as?: "p" | "span";
  /** Inline content (e.g. an icon) that fades and scales in after the last word */
  trailing?: React.ReactNode;
}

export default function RevealWords({
  text,
  className,
  delayMs = 0,
  whenVisible = false,
  as: Tag = "p",
  trailing,
}: RevealWordsProps) {
  const ref = useRef<HTMLElement | null>(null);
  const words = text.trim().split(/\s+/);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wordEls = Array.from(
      el.querySelectorAll<HTMLSpanElement>("[data-mask] > span")
    );
    const trailingEl = el.querySelector<HTMLSpanElement>("[data-trailing]");
    let cleanupTimeout: number | undefined;
    let raf: number | undefined;
    let io: IntersectionObserver | undefined;

    for (const word of wordEls) {
      word.style.transition = "none";
      word.style.transform = "translateY(110%)";
      word.style.willChange = "transform";
    }
    if (trailingEl) {
      trailingEl.style.transition = "none";
      trailingEl.style.opacity = "0";
      trailingEl.style.transform = "scale(0.9)";
      trailingEl.style.willChange = "transform, opacity";
    }

    // Mount reveals wait for the page to settle; scroll reveals fire right away
    const baseDelay = (whenVisible ? 0 : MOUNT_DELAY_MS) + delayMs;

    const reveal = () => {
      wordEls.forEach((word, i) => {
        const delay = baseDelay + i * WORD_STAGGER_MS;
        word.style.transition = `transform ${DURATION_MS}ms ${EASE} ${delay}ms`;
        word.style.transform = "translateY(0)";
      });
      // Trailing content follows once the last word is on its way in
      const trailingDelay = baseDelay + wordEls.length * WORD_STAGGER_MS + 150;
      if (trailingEl) {
        trailingEl.style.transition = `opacity ${DURATION_MS}ms ${EASE} ${trailingDelay}ms, transform ${DURATION_MS}ms ${EASE} ${trailingDelay}ms`;
        trailingEl.style.opacity = "1";
        trailingEl.style.transform = "scale(1)";
      }
      cleanupTimeout = window.setTimeout(() => {
        for (const word of wordEls) word.removeAttribute("style");
        trailingEl?.removeAttribute("style");
      }, (trailingEl ? trailingDelay : baseDelay + (wordEls.length - 1) * WORD_STAGGER_MS) + DURATION_MS + 100);
    };

    if (whenVisible) {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();
            io?.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      io.observe(el);
    } else {
      // Double rAF so the hidden state is committed before transitioning
      raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(reveal);
      });
    }

    return () => {
      if (raf !== undefined) cancelAnimationFrame(raf);
      io?.disconnect();
      window.clearTimeout(cleanupTimeout);
      for (const word of wordEls) word.removeAttribute("style");
      trailingEl?.removeAttribute("style");
    };
  }, [text, delayMs, whenVisible]);

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={className}
      aria-label={text.trim()}
    >
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Fragment key={i}>
            {/* leading keeps accented caps inside the clip box */}
            <span
              data-mask
              className="inline-block overflow-hidden align-top leading-[1.2]"
            >
              <span className="inline-block">{word}</span>
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
        {trailing ? (
          <>
            {" "}
            <span data-trailing className="inline-block align-middle">
              {trailing}
            </span>
          </>
        ) : null}
      </span>
    </Tag>
  );
}
