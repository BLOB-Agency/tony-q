"use client";
import Link from "next/link";
import Burger from "../Burger";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const switchMenu = () =>{
    console.log('switchMenu');
    setIsOpen(!isOpen);
  } 

  return (
    <header className=" flex flex-col gap-[120px] justify-between">
      <div className=" flex justify-between items-center">
        <Link href="/">
          <h1 className="text-[36px]">TONY QUERREC</h1>
        </Link>
        <Burger switchMenu={switchMenu} isOpen={isOpen} />
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col  text-[30px] gap-[24px]">
          <Link href="/portraits">Portraits</Link>
          <Link href="/fine-art">Fine Art</Link>
          <Link href="/commercial">Commercial</Link>
          <Link href="/reportage">Reportage</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      )}

      <nav className="hidden md:flex flex-col text-[24px] gap-[8px]">
        <Link href="/portraits">Portraits</Link>
        <Link href="/fine-art">Fine Art</Link>
        <Link href="/commercial">Commercial</Link>
        <Link href="/reportage">Reportage</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
