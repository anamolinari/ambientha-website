"use client";
import Image from "next/image";

const features = [
  {
    icon: "/icons/features/IconWreath.svg",
    title: "Curadoria",
    text: "Produtos que unem funcionalidade, qualidade e estilo às principais tendências do mercado.",
  },
  {
    icon: "/icons/features/IconGrowth.svg",
    title: "Projetos",
    text: "Referência para arquitetos e decoradores que buscam qualidade e variedade em um só lugar.",
  },
  {
    icon: "/icons/features/IconStore2.svg",
    title: "Materiais",
    text: "Trabalhamos com fornecedores de confiança e produtos de excelência para o seu projeto.",
  },
  {
    icon: "/icons/features/IconHandshake.svg",
    title: "Atendimento",
    text: "Escutamos suas necessidades e oferecemos um atendimento personalizado e atencioso.",
  },
];

export default function Features() {
  return (
    <div className="flex overflow-x-auto px-4 py-10 gap-10 md:px-10 bg-beige scrollbar-none md:grid md:grid-cols-4">
      {features.map((feature) => (
        <div key={feature.title} className="min-w-[280px] md:min-w-0 flex flex-col gap-2">
          <Image
            src={feature.icon}
            alt={feature.title}
            width={32}
            height={32}
          />
          <p className="py-2 font-mono font-normal text-lg uppercase tracking-normal leading-none text-ink">
            {feature.title}
          </p>
          <p className="font-sans font-normal text-sm leading-[150%] tracking-[-0.02em] text-ink">
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  );
}
