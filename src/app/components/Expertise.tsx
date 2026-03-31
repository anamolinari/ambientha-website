"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const stats = [
  {
    title: "20 anos",
    since: "Desde 2005",
    description: "Oferecendo o melhor para nossos clientes.",
  },
  {
    title: "+3 mil",
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
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex flex-col justify-between min-w-[343px] h-[343px] p-5 border border-beige shrink-0 md:min-w-0 md:shrink"
          >
            <div className="flex items-center gap-2">
              <p className="font-sans font-light text-[44px] leading-[94%] tracking-[-0.04em] text-ink">
                {stat.title}
              </p>
              {stat.icon && (
                <Image src={stat.icon} alt="" width={32} height={32} />
              )}
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
        <div className="flex flex-col justify-between min-w-[343px] h-[343px] bg-beige shrink-0 p-5 md:min-w-0 md:shrink">
          <p className="font-sans font-light text-[32px] leading-[110%] tracking-[-0.04em] text-ink max-w-[150px]">
            Entre em contato
          </p>

          <div className="flex justify-between items-end">
            <p className="font-sans font-normal text-xs leading-[130%] tracking-normal text-ink opacity-70 max-w-[180px] ">
              Fale com nossa equipe para solicitar um orçamento.
            </p>

            <a
              href="https://wa.me/5547999810154?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/icons/IconArrowRight.svg"
                alt="Arrow Right"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
