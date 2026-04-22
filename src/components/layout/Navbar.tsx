"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MVP_DEMO_URL } from "@/lib/mvp-demo";

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
          : "border-transparent bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="#home"
          aria-label="Kazi Skills home"
          className="relative inline-flex h-9 shrink-0 items-center sm:h-10"
        >
          {/* Light wordmark for dark hero; dark wordmark when bar is solid on white */}
          <Image
            src="/logo-footer.png"
            alt=""
            width={819}
            height={151}
            priority
            className={`h-9 w-auto sm:h-10 transition-opacity duration-300 ${
              solid ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/logo-cropped.png"
            alt=""
            width={819}
            height={151}
            priority
            className={`absolute left-0 top-0 h-9 w-auto sm:h-10 transition-opacity duration-300 ${
              solid ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
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
          <Button href={MVP_DEMO_URL} className="hidden sm:inline-flex">
            View demo
          </Button>
        ) : (
          <a
            href={MVP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-white/70 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white/10 sm:inline-flex"
          >
            View demo
          </a>
        )}
      </div>
    </header>
  );
}
