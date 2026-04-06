"use client";
import Image from "next/image";

const logos = [
  { src: "/images/highlights/casa-vogue-logo.png", alt: "Casa Vogue", width: 80, height: 40 },
  { src: "/images/highlights/nucleo-logo.png", alt: "NCD", width: 56, height: 56 },
];

export default function Highlights() {
  // Repeat logos enough times to fill the marquee seamlessly
  const repeatedLogos = Array.from({ length: 10 }, () => logos).flat();

  return (
    <div className="flex flex-col gap-10 py-10 bg-beige overflow-hidden">
      <p className="text-center font-mono font-normal text-lg uppercase tracking-normal leading-none text-ink">
        Destaque em
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee w-max">
          {repeatedLogos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
