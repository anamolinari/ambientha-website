"use client";
import Image from "next/image";

const logos = [
  { src: "/images/highlights/arteforma.png", alt: "Arteforma", width: Math.round(347 / 3), height: Math.round(240 / 3) },
  { src: "/images/highlights/tece-brasil.png", alt: "Tece Brasil", width: Math.round(516 / 3), height: Math.round(120 / 3) },
  { src: "/images/highlights/triangulo.png", alt: "Triângulo", width: Math.round(288 / 3), height: Math.round(288 / 3) },
  { src: "/images/highlights/belgotex.png", alt: "Belgotex", width: Math.round(456 / 3), height: Math.round(114 / 3) },
  { src: "/images/highlights/tapetah.png", alt: "Tapetah", width: Math.round(525 / 3), height: Math.round(88 / 3) },
  { src: "/images/highlights/bucalo.png", alt: "Bucalo", width: Math.round(468 / 3), height: Math.round(132 / 3) },
  { src: "/images/highlights/unilux.png", alt: "Unilux", width: Math.round(455 / 3), height: Math.round(252 / 3) },
  { src: "/images/highlights/tarkett.png", alt: "Tarkett", width: Math.round(519 / 3), height: Math.round(114 / 3) },
  { src: "/images/highlights/nucleo-logo.png", alt: "Núcleo", width: Math.round(339 / 3), height: Math.round(339 / 3) },
];

export default function Highlights() {
  const repeatedLogos = Array.from({ length: 4 }, () => logos).flat();

  return (
    <div className="flex flex-col gap-10 py-10 bg-beige overflow-hidden">
      <p className="text-center font-mono font-normal text-lg uppercase tracking-normal leading-none text-ink">
        Parceiros
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-[120px] animate-marquee w-max">
          {repeatedLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-[120px] px-4 shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
