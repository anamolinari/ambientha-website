"use client";
import Image from "next/image";

export default function Highlights() {
  return (
    <div className="flex flex-col gap-10 py-10 bg-beige">
      <p className="text-center font-mono font-normal text-lg uppercase tracking-normal leading-none text-ink">
        Destaque em
      </p>

      <div className="flex items-center justify-center">
        <Image
          src="/images/highlights/ncd.png"
          alt="NCD"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
