"use client";

export default function Video() {
  return (
    <div className="relative w-full h-[50vh] md:h-full">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/videos/video-full-screen.png"
        />
        <img
          src="/videos/video-full.png"
          alt="Video Full"
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  );
}
