"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setHasStarted(true);
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="relative w-full h-[50vh] md:h-full">
      <video
        ref={videoRef}
        onClick={handlePlayPause}
        poster="/videos/thumbnail-desktop.png"
        className="w-full h-full object-cover cursor-pointer"
      >
        <source src="/videos/video-manifesto-ambientha.mov" type="video/mp4" />
      </video>

      {!hasStarted && (
        <div className="absolute inset-0 flex items-center justify-center gap-6 font-mono font-normal text-lg uppercase tracking-normal leading-none text-white">
          <p>Assista agora</p>
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
          <p>Nosso manifesto</p>
        </div>
      )}
    </div>
  );
}
