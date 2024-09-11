"use client";
import Link from "next/link";
import Burger from "../Burger";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const switchMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" flex flex-col gap-[120px] justify-between lg:fixed lg:left-0 lg:px-[48px] lg:w-[360px] lg:h-[100vh] lg:justify-start lg:bg-white">
      <div className=" flex justify-between items-center">
        <Link href="/">
          <h1 className="text-[36px]">TONY QUERREC</h1>
        </Link>
        <Burger switchMenu={switchMenu} isOpen={isOpen} />
      </div>

      {isOpen && (
        <nav className="lg:hidden flex flex-col  text-[30px] gap-[24px]">
          <Link href="/">Portraits</Link>
          <Link href="/fine-art">Fine Art</Link>
          <Link href="/commercial">Commercial</Link>
          <Link href="/reportage">Reportage</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      )}

      <nav className="hidden lg:flex flex-col text-[24px] gap-[8px]">
        <Link href="/">Portraits</Link>
        <Link href="/fine-art">Fine Art</Link>
        <Link href="/commercial">Commercial</Link>
        <Link href="/reportage">Reportage</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
