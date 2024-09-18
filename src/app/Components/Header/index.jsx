"use client";
import Link from "next/link";
import Burger from "../Burger";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const switchMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Portraits" },
    { href: "/fine-art", label: "Fine Art" },
    { href: "/commercial", label: "Commercial" },
    { href: "/reportage", label: "Reportage" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="flex flex-col gap-[120px] justify-between lg:fixed lg:left-0 lg:px-[48px] lg:w-[360px] lg:h-[100vh] lg:justify-start lg:bg-white">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-[36px]">TONY QUERREC</h1>
        </Link>
        <Burger switchMenu={switchMenu} isOpen={isOpen} />
      </div>

      {isOpen && (
        <nav className="lg:hidden flex flex-col text-[30px] gap-[24px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "underline" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <nav className="hidden lg:flex flex-col text-[24px] gap-[8px]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "underline" : ""} 
          >
            {link.label}
      
          </Link>
        ))}
      </nav>
    </header>
  );
}
