"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navClass =
  "hidden md:flex gap-8 uppercase font-mono font-normal text-sm tracking-normal leading-none text-white";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 p-4 flex items-center justify-between  md:p-8">
      {/* Nav esquerda — só desktop */}
      <nav className={navClass}></nav>

      {/* Logo — esquerda no mobile, centro no desktop */}
      <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
        <Image
          src="/icons/logo.svg"
          alt="Ambientha"
          width={36}
          height={44}
          className="cursor-pointer"
        />
      </Link>

      {/* Hamburguer — só mobile */}
      <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <Image
          src="/icons/IconBarsThree.svg"
          alt="Menu"
          width={32}
          height={32}
          className="md:hidden"
        />
      </button>

      {/* Nav direita — só desktop */}
      <nav className={navClass}>
        <a
          href="https://wa.me/5547999810154?text=Olá!%20Gostaria%20de%20mais%20informações"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp
        </a>
        <a href="mailto:ambientha@ambientha.com.br">Email</a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Ambientha+Decorações+Blumenau+SC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Onde Estamos
        </a>
      </nav>
    </header>
  );
}
