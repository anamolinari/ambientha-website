"use client";
import { useRef } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import ImageCard from "./ImageCard";
import ScrollableCards from "./ScrollableCards";

const products = [
  {
    image: "/images/products/product-1.png",
    title: "Cortinas de tecido",
    text: "Feitas sob medida para o seu projeto, do jeito que você imaginou.",
  },
  {
    image: "/images/products/product-2.png",
    title: "Persianas",
    text: "Soluções funcionais e elegantes para as suas janelas, unindo praticidade e design sofisticado.",
  },
  {
    image: "/images/products/product-4.png",
    title: "Papéis de parede",
    text: "Uma infinidade de texturas, estampas e cores para transformar o seu espaço.",
  },
  {
    image: "/images/products/product-3.png",
    title: "Pisos",
    text: "Madeira, laminados e vinílicos. \nRevestimentos que unem beleza e funcionalidade.",
  },

  {
    image: "/images/products/product-5.png",
    title: "Roupas de Cama",
    text: "Desenvolvemos peças exclusivas que unem conforto e qualidade.",
  },
  {
    image: "/images/products/product-6.png",
    title: "Almofadas",
    text: "Produzidas artesanalmente em nosso ateliê, combinando diferentes tecidos e acabamentos.",
  },
  {
    image: "/images/products/product-7.png",
    title: "Carpetes",
    text: "Residenciais e comerciais.\nConforto e sofisticação que você sente a cada passo.",
  },
  {
    image: "/images/products/product-8.png",
    title: "Tapetes",
    text: "Elementos que transformarm espaços com estilo, conforto e personalidade.",
  },
];

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  }

  return (
    <div>
      <div className="md:flex items-center justify-between md:pr-10">
        <SectionTitle>Nossos produtos</SectionTitle>
        <div className="hidden md:flex gap-3">
          <button
            onClick={scrollLeft}
            aria-label="Back"
            className="cursor-pointer hover:opacity-50"
          >
            <Image
              src="/icons/IconArrowLeft.svg"
              alt="Arrow Left"
              width={32}
              height={32}
            />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next"
            className="cursor-pointer hover:opacity-50"
          >
            <Image
              src="/icons/IconArrowRight.svg"
              alt="Arrow Right"
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>

      <ScrollableCards
        scrollRef={scrollRef}
        paddingX="px-4 md:px-10"
        gap="gap-4"
      >
        {products.map((product) => (
          <ImageCard
            key={product.title}
            src={product.image}
            title={product.title}
            description={product.text}
          />
        ))}
      </ScrollableCards>
    </div>
  );
}
