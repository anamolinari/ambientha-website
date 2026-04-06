"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="44"
      viewBox="0 0 36 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.494 7.33333L25.5451 28.6035L26.2846 30.814H26.2834C26.6426 31.8901 27.85 32.2838 28.8 32.2839V33H19.933V32.1955L22.1924 32.0213L20.2389 25.8284H12.6996L10.7789 32.0213L13.0377 32.1955V33H7.80002V32.1955L9.82502 32.0213L17.741 7.33333H18.494ZM13.0852 24.5113H19.8305L16.4356 13.8365L13.0852 24.5113Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0C29.3466 0.284709 36.0182 11.8764 35.9994 21.9397C35.9995 21.9597 35.9993 21.98 35.9994 22C35.9993 22.0201 36.0001 22.0402 36 22.0603L35.9994 22.0597C36.0183 32.1231 29.3467 43.7153 18 44C6.64931 43.9024 -0.0169816 31.9684 3.24895e-05 22.0597V21.9397C-0.0168448 12.031 6.64942 0.0976324 18 0ZM18 0.606337C7.07656 0.993213 1.83088 12.585 1.86214 21.9523L1.86273 22.3933C1.95974 31.6976 7.2105 43.0115 18 43.3937C28.9737 43.1865 34.2041 31.182 34.1379 21.9523C34.1675 12.7354 28.9359 0.812837 18 0.606337Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="8" y1="8" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="8" x2="8" y2="24" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="6" y1="10" x2="26" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDark = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 p-4 flex items-center justify-between md:px-8 md:py-6 transition-all duration-500 ease-in-out ${
          isDark ? "bg-white" : "bg-transparent"
        }`}
      >
        {/* Nav left — Whatsapp + Email (desktop only) */}
        <nav
          className={`hidden md:flex gap-8 uppercase font-mono font-normal text-sm tracking-normal leading-none transition-colors duration-500 ${
            isDark ? "text-ink" : "text-white"
          }`}
        >
          <a
            href="https://wa.me/5547999810154?text=Olá!%20Gostaria%20de%20mais%20informações"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            Whatsapp
          </a>
          <a href="mailto:ambientha@ambientha.com.br" className="hover:opacity-70 transition-opacity">Email</a>
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className={`md:absolute md:left-1/2 md:-translate-x-1/2 transition-colors duration-500 hover:opacity-70 ${
            isDark ? "text-ink" : "text-white"
          }`}
        >
          <Logo />
        </Link>

        {/* Hamburger / Close — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`md:hidden transition-colors duration-500 ${
            isDark ? "text-ink" : "text-white"
          }`}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Nav right — Onde Estamos (desktop only) */}
        <nav
          className={`hidden md:flex gap-8 uppercase font-mono font-normal text-sm tracking-normal leading-none transition-colors duration-500 ${
            isDark ? "text-ink" : "text-white"
          }`}
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ambientha+Decorações+Blumenau+SC"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            Onde Estamos
          </a>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between h-full pt-[120px] pb-10 px-4">
          {/* Main nav links */}
          <nav className="flex flex-col gap-10 font-mono font-light text-2xl uppercase tracking-normal leading-none text-ink">
            <a
              href="https://wa.me/5547999810154?text=Olá!%20Gostaria%20de%20mais%20informações"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              Whatsapp
            </a>
            <a
              href="mailto:ambientha@ambientha.com.br"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              Email
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ambientha+Decorações+Blumenau+SC"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              Onde Estamos
            </a>
          </nav>

          {/* Bottom links */}
          <div className="flex flex-col gap-10 font-mono font-normal text-sm uppercase tracking-normal leading-none text-ink">
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/ambienthadecoracoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@ambienthadecoracoes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                YouTube
              </a>
              <a
                href="https://br.pinterest.com/ambienthadecoracoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                Pinterest
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5547999810154?text=Olá!%20Gostaria%20de%20mais%20informações"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                Whatsapp
              </a>
              <a href="mailto:ambientha@ambientha.com.br" className="underline hover:opacity-70 transition-opacity">
                Email
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ambientha+Decorações+Blumenau+SC"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                Onde Estamos
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
