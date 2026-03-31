"use client";

interface TextDescriptionProps {
  children: React.ReactNode;
}

export default function TextDescription({ children }: TextDescriptionProps) {
  return (
    <div>
      <p className="px-4 pb-10 md:px-10 font-sans font-light text-[32px] leading-[130%] tracking-[-0.04em] text-ink">
        {children}
      </p>
    </div>
  );
}
