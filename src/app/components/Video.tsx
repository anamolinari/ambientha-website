"use client";
import { useState } from "react";
import Image from "next/image";

export default function Video() {
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = () => {
    setHasStarted(true);
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      {hasStarted ? (
        <iframe
          src="https://www.youtube.com/embed/zTb80S9dArI?autoplay=1&controls=0"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vh] h-[58vw] min-w-full min-h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src="/videos/thumbnail-desktop.png"
            alt="Video thumbnail"
            fill
            className="object-cover cursor-pointer"
            onClick={handlePlay}
          />
          <div className="absolute inset-0 flex items-center justify-center gap-6 pb-2 font-mono font-normal text-lg uppercase tracking-normal leading-none text-white">
            <p className="hidden md:block">Assista agora</p>
            <button
              onClick={handlePlay}
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              <Image
                src="/icons/IconPlay.svg"
                alt="Play"
                width={64}
                height={64}
              />
            </button>
            <p className="hidden md:block">Nosso manifesto</p>
          </div>
        </>
      )}
    </div>
  );
}
