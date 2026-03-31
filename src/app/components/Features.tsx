"use client";
import Image from "next/image";

const title =
  "py-2 font-mono font-normal text-lg uppercase tracking-normal leading-none text-ink";
const text =
  "font-sans font-normal text-sm leading-[150%] tracking-[-0.02em] text-ink";

const features = [
  {
    icon: "/icons/features/feature-1.svg",
    title: "Curadoria",
    text: "Produtos que unem funcionalidade, qualidade e estilo às principais tendências do mercado.",
  },
  {
    icon: "/icons/features/feature-2.svg",
    title: "Projetos",
    text: "Referência para arquitetos e decoradores que buscam qualidade e variedade em um só lugar.",
  },
  {
    icon: "/icons/features/feature-3.svg",
    title: "Materiais",
    text: "Trabalhamos com fornecedores de confiança e produtos de excelência para o seu projeto.",
  },
  {
    icon: "/icons/features/feature-4.svg",
    title: "Atendimento",
    text: "Escutamos suas necessidades e oferecemos um atendimento personalizado e atencioso.",
  },
];

export default function Features() {
  return (
    <div className="flex overflow-x-auto py-10 px-4 gap-4 bg-beige scrollbar-none">
      {features.map((feature) => (
        <div key={feature.title} className="min-w-[330px]">
          <Image
            src={feature.icon}
            alt={feature.title}
            width={32}
            height={32}
          />
          <p className={title}>{feature.title}</p>
          <p className={text}>{feature.text}</p>
        </div>
      ))}
    </div>
  );
}
