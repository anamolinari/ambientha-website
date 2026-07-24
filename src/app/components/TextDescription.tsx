"use client";

import RevealLines from "./RevealLines";

interface TextDescriptionProps {
  children: React.ReactNode;
}

const textClassName =
  "px-4 pb-10 md:px-10 font-sans font-light text-[32px] leading-[130%] tracking-[-0.04em] text-ink";

export default function TextDescription({ children }: TextDescriptionProps) {
  if (typeof children === "string") {
    return <RevealLines text={children} className={textClassName} />;
  }

  return (
    <div>
      <p className={textClassName}>{children}</p>
    </div>
  );
}
