"use client";
import Image from "next/image";

export default function Frame() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-[50vw]">
        <Image
          src="/videos/video-1.png"
          alt="Ambientha"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-[50vw]">
        <Image
          src="/videos/video-2.png"
          alt="Ambientha"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
