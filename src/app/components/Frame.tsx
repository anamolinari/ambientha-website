"use client";

export default function Frame() {
  return (
    <section className="w-full flex flex-col md:flex-row h-screen">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <video
          src="/videos/Video-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1E1E1E]/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-mono text-white text-2xl font-light uppercase tracking-normal leading-none">
            Referência e bom gosto
          </p>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <video
          src="/videos/Video-2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1E1E1E]/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-mono text-white text-2xl font-light uppercase tracking-normal leading-none">
            Para ambientes encantadores
          </p>
        </div>
      </div>
    </section>
  );
}
