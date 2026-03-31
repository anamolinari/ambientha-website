"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-beige pt-10 px-4 pb-25 font-mono font-normal text-sm uppercase tracking-normal leading-none text-ink md:pb-10">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <Image
            src="/images/footer.png"
            alt="Logo Full"
            width={361}
            height={64}
            className="md:w-[944px] md:h-auto"
          />
        </div>

        <div className="md:flex md:justify-center">
          <Image
            src="/icons/line-footer.svg"
            alt="line"
            width={361}
            height={0}
            className="md:w-[944px] md:h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 md:flex md:justify-between pt-10 md:px-10">
        {/*<nav className="flex flex-col gap-2">
          <a href="#">Coleções</a>
          <a href="#">Projetos</a>
          <a href="#">Prêmios</a>
          <a href="#">Sobre</a>
        </nav>*/}

        <div className="flex flex-col gap-2">
          <Link
            href="https://www.instagram.com/ambienthadecoracoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link
            href="https://www.youtube.com/@ambienthadecoracoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </Link>
          <Link
            href="https://br.pinterest.com/ambienthadecoracoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pinterest
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {/*<Link href="/">teste@ambientha.com</Link>
          <Link href="/">teste@ambientha.com</Link>
          <Link href="/">teste@ambientha.com</Link>*/}
        </div>
        <div className="opacity-40 flex flex-col gap-10 md:hidden">
          <p>2026 - Ambientha Decorações</p>
          <p>Créditos</p>
          <p>Studio B&Co</p>
        </div>
      </div>

      <div className="hidden opacity-40 md:flex justify-between px-10 pt-20 ">
        <p>2026 - Ambientha Decorações</p>
        <p>Créditos</p>
        <p>Studio B&Co</p>
      </div>
    </footer>
  );
}
