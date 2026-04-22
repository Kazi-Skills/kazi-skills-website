"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Courses", href: "#courses" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,backdrop-filter,color] duration-300 ${
        solid
          ? "border-brand-light bg-white/90 text-slate-800 backdrop-blur-md"
          : "border-white/15 bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/logo-cropped.png"
            alt="Kazi Skills logo"
            width={819}
            height={151}
            className={`h-9 w-auto sm:h-10 transition-[filter] duration-300 ${
              solid
                ? ""
                : "drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)] brightness-110 contrast-110"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                solid
                  ? "text-slate-600 hover:text-brand"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {solid ? (
          <Button href="#contact" className="hidden sm:inline-flex">
            Get Started
          </Button>
        ) : (
          <Link
            href="#contact"
            className="hidden border border-white/70 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white/10 sm:inline-flex"
          >
            Get Started
          </Link>
        )}
      </div>
    </header>
  );
}
