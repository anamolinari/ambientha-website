"use client";
import { useRef, RefObject } from "react";

interface ScrollableCardsProps {
  children: React.ReactNode;
  className?: string;
  paddingX?: string;
  gap?: string;
  scrollRef?: RefObject<HTMLDivElement | null>;
  draggable?: boolean;
}

export default function ScrollableCards({
  children,
  className = "",
  paddingX = "px-4",
  gap = "gap-4",
  scrollRef: externalRef,
  draggable = true,
}: ScrollableCardsProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  const ref = externalRef || internalRef;
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function onMouseDown(e: React.MouseEvent) {
    if (!draggable) return;
    isDragging.current = true;
    startX.current = e.pageX - ref.current!.offsetLeft;
    scrollLeft.current = ref.current!.scrollLeft;
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!draggable || !isDragging.current) return;
    const x = e.pageX - ref.current!.offsetLeft;
    ref.current!.scrollLeft = scrollLeft.current - (x - startX.current);
  }

  function onMouseUp() {
    isDragging.current = false;
  }

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      className={`flex overflow-x-auto ${draggable ? "cursor-grab active:cursor-grabbing" : ""} ${paddingX} ${gap} ${className}`}
      style={
        {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
