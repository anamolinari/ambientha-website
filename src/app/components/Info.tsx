"use client";
import Image from "next/image";

export function Info() {
  return (
    <div>
      <div className="relative w-full h-[90vh] md:h-[800px]">
        <Image
          src="/images/info/info-1.png"
          alt="Ambientha"
          fill
          className="object-cover"
        />
        <div className="absolute flex flex-col inset-0 items-center justify-center gap-5">
          <p className="font-mono font-normal text-lg uppercase tracking-normal leading-none text-white">
            Nossa casa é sua
          </p>
          <p className="uppercase font-sans font-light text-[44px] leading-none tracking-[-0.04em] text-white text-center whitespace-nowrap">
            A loja Ambientha
          </p>

          <a
            href="https://wa.me/5547999810154?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-normal text-lg uppercase tracking-normal leading-none text-white underline hover:opacity-70 transition-opacity"
          >
            Agende uma visita
          </a>
        </div>
      </div>

      <div className="flex pt-10 pb-[120px] px-4 md:pt-10 md:pb-[120px] md:px-10 font-mono font-normal text-lg uppercase tracking-normal leading-none text-ink">
        <div className="w-1/2 md:w-1/3">
          <p>Onde Estamos:</p>
        </div>

        <div className="w-1/2 md:w-1/3 flex flex-col gap-4">
          <p>
            Rua Almirante Barroso, 615,
            <br />
            Vila Nova, Blumenau
          </p>
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Ambientha+Decorações+Blumenau+SC",
                "_blank",
              )
            }
            className="underline text-left md:hidden uppercase hover:opacity-70 transition-opacity"
          >
            Como chegar
          </button>
        </div>

        <div className="hidden md:flex md:w-1/3 justify-end items-start">
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Ambientha+Decorações+Blumenau+SC",
                "_blank",
              )
            }
            className="underline uppercase cursor-pointer hover:opacity-70 transition-opacity"
          >
            Como chegar
          </button>
        </div>
      </div>
    </div>
  );
}
