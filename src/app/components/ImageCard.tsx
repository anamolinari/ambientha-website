import Image from "next/image";

interface ImageCardProps {
  src: string;
  title: string;
  description: string;
  className?: string;
}

export default function ImageCard({
  src,
  title,
  description,
  className = "w-[343px] h-[458px]",
}: ImageCardProps) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <Image src={src} alt={title} fill className="object-cover" />
      <div className="absolute bottom-0 left-0 p-5">
        <p className="pb-2 font-mono font-normal text-lg uppercase tracking-normal leading-none text-white">
          {title}
        </p>
        <p className="font-sans font-normal text-xs leading-[140%] tracking-normal text-white whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
