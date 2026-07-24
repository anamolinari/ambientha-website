"use client";
import Image from "next/image";
import RevealWords from "./RevealWords";
import SectionTitle from "./SectionTitle";

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.6665 7.33325L27.3332 15.9999L18.6665 24.6666"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
      <path
        d="M26.6665 16H4.6665"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

const stats = [
  {
    title: "20 anos",
    since: "Desde 2005",
    description: "Oferecendo o melhor para nossos clientes.",
  },
  {
    title: "+10 mil",
    since: "Projetos entregues",
    description:
      "Realizados com dedicação e o compromisso de qualidade Ambientha.",
  },
  {
    title: "4.9",
    icon: "/icons/star.svg",
    since: "Reviews no Google",
    description:
      "Excelência comprovada do atendimento inicial à entrega final de cada produto.",
  },
];

export default function Expertise() {
  return (
    <div className="flex flex-col">
      <SectionTitle>Nossa experiência</SectionTitle>

      <div
        className="flex px-4 gap-4 overflow-x-auto md:overflow-visible md:grid md:grid-cols-4 md:px-10"
        style={{ scrollbarWidth: "none" }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.title}
            className="flex flex-col justify-between min-w-[343px] aspect-square p-5 border border-beige shrink-0 md:min-w-0 md:shrink"
          >
            <div className="flex items-center gap-2">
              <RevealWords
                whenVisible
                delayMs={i * 150}
                text={stat.title}
                trailing={
                  stat.icon ? (
                    <Image src={stat.icon} alt="" width={32} height={32} />
                  ) : undefined
                }
                className="font-sans font-light text-[44px] leading-[94%] tracking-[-0.04em] text-ink"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-mono font-normal text-lg uppercase tracking-normal leading-none text-ink">
                {stat.since}
              </p>
              <p className="font-sans font-normal text-xs leading-[130%] tracking-normal text-ink opacity-70 max-w-[230px]">
                {stat.description}
              </p>
            </div>
          </div>
        ))}

        {/* Card extra */}
        <a
          href="https://wa.me/5547999810154?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden flex flex-col justify-between min-w-[343px] aspect-square bg-beige shrink-0 p-5 md:min-w-0 md:shrink"
        >
          {/* Hover wipe, entering from the left */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#878684] -translate-x-full transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0"
          />

          <RevealWords
            whenVisible
            delayMs={stats.length * 150}
            text="Entre em contato"
            className="relative font-sans font-light text-[32px] leading-[110%] tracking-[-0.04em] text-ink max-w-[150px] transition-colors duration-500 group-hover:text-white"
          />

          <div className="relative flex justify-between items-end">
            <p className="font-sans font-normal text-xs leading-[130%] tracking-normal text-ink opacity-70 max-w-[180px] transition-colors duration-500 group-hover:text-white">
              Fale com nossa equipe para solicitar um orçamento.
            </p>

            {/* Arrow swap: current slides out right while its twin enters from the left */}
            <span className="relative block size-8 overflow-hidden">
              <ArrowRight className="absolute inset-0 text-ink transition-[translate,color] duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-full group-hover:text-white" />
              <ArrowRight className="absolute inset-0 -translate-x-full text-white transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0" />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
