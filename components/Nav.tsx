"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#problema", label: "O problema" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#sobre", label: "Sobre" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-black/80 backdrop-blur-xl">
      <div className="container-vibe flex h-16 sm:h-20 md:h-24 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Image src="/logo.png" alt="VIBE Design Tech" width={264} height={80} priority className="h-8 sm:h-11 md:h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow text-fg-muted transition-colors hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#final-cta" className="pill-glass text-[10px] sm:text-xs px-3 py-1.5 sm:px-4 sm:py-2 transition-transform hover:scale-[1.03]">
            <span className="dot"></span>Agendar demo
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-fg md:hidden"
            aria-label="Toggle Menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="eyebrow py-2 text-sm text-fg-muted transition-colors hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
