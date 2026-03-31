"use client";
import SectionTitle from "./SectionTitle";
import ImageCard from "./ImageCard";
import ScrollableCards from "./ScrollableCards";
import TextDescription from "./TextDescription";

const services = [
  {
    image: "/images/services/service-1.png",
    title: "Mão de obra qualificada",
    description:
      "Possuímos toda a documentação para atender empresas de grande porte, garantindo plena conformidade com normas legais, técnicas e de segurança.",
  },
  {
    image: "/images/services/service-2.png",
    title: "Ateliê Ambientha",
    description:
      "Um espaço dedicado à criação de peças exclusivas e personalizadas, desenvolvidas sob medida com precisão, cuidado, carinho e atenção aos minímos detalhes.",
  },
  {
    image: "/images/services/service-3.png",
    title: "Lavação de cortinas e persianas",
    description:
      "Oferecemos também o serviço de lavação de cortinas e persianas, complementando o nosso catálogo de produtos e serviços com cuidado e qualidade.",
  },
];

export default function Services() {
  return (
    <div>
      <SectionTitle>Nossos serviços</SectionTitle>

      <ScrollableCards paddingX="flex md:justify-center pb-20" gap="gap-0">
        {services.map((service) => (
          <ImageCard
            key={service.title}
            src={service.image}
            title={service.title}
            description={service.description}
            className="w-[343px] h-[458px] md:w-[calc(33.333vw-27px)] md:h-[calc(44vw-27px)]"
          />
        ))}
      </ScrollableCards>

      <TextDescription>
        Nada substitui a experiência de estar presente. Na loja Ambientha, você
        vê de perto os materiais, sente as texturas e conversa com quem cuida de
        cada projeto com atenção.
      </TextDescription>
    </div>
  );
}
