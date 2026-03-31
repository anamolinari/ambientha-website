"use client";
import SectionTitle from "./SectionTitle";
import TextDescription from "./TextDescription";

export default function About() {
  return (
    <div className="flex flex-col">
      <SectionTitle>Sobre nós</SectionTitle>
      <TextDescription>
        Há 20 anos trabalhando com grandes marcas e oferecendo o melhor para nossos
        clientes, buscando satisfazê-los em cada etapa de sua obra, do atendimento inicial à instalação
        final de cada produto.
      </TextDescription>
    </div>
  );
}
