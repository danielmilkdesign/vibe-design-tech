"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroInteractive() {
  const [activeTag, setActiveTag] = useState<string>("site");

  return (
    <div className="relative w-full max-w-[580px] lg:max-w-[620px] mx-auto select-none">
      {/* Glow ambient background */}
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-[#12e9da]/15 blur-2xl opacity-70" />

      {/* Site Component Container */}
      <div className="site-component relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[rgba(18,233,218,0.42)] bg-[#041010] shadow-[0_30px_75px_rgba(0,0,0,0.6),0_0_50px_rgba(18,233,218,0.12)] transition-all duration-300">
        
        {/* Site Image with hover zoom */}
        <div className="absolute inset-[-9%_-8%] h-[118%] w-[116%] transition-transform duration-500 ease-out hover:scale-[1.025]">
          <Image
            src="/vibe-hero-interativo.png"
            alt="Site profissional e interativo para personal trainer"
            fill
            sizes="(max-width: 768px) 100vw, 620px"
            priority
            className="object-cover object-[76%_50%] saturate-[0.98] contrast-[1.05] transition-all duration-500 hover:saturate-[1.08] hover:contrast-[1.08]"
          />
        </div>

        {/* Shading Layer */}
        <span
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(2, 7, 7, 0.25), transparent 48%), linear-gradient(0deg, rgba(2, 7, 7, 0.32), transparent 45%)",
          }}
          aria-hidden="true"
        />

        {/* Cyber Grid Layer */}
        <span
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(186, 255, 56, 0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(186, 255, 56, 0.24) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
            maskImage: "linear-gradient(120deg, transparent, #000 48%, transparent)",
            WebkitMaskImage: "linear-gradient(120deg, transparent, #000 48%, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Tag 1: SITE */}
        <button
          type="button"
          onClick={() => setActiveTag("site")}
          onMouseEnter={() => setActiveTag("site")}
          className={`absolute top-[12%] left-[22%] z-[3] inline-flex min-h-[30px] sm:min-h-[34px] items-center gap-2 rounded-full border px-2.5 sm:px-3 py-1 font-sans text-[10px] sm:text-xs font-extrabold tracking-[0.14em] backdrop-blur-[10px] transition-all duration-200 cursor-pointer ${
            activeTag === "site"
              ? "border-[#baff38] bg-[rgba(3,14,15,0.94)] text-[#baff38] shadow-[0_0_0_4px_rgba(186,255,56,0.1),0_0_28px_rgba(186,255,56,0.18)] -translate-y-1"
              : "border-[rgba(18,233,218,0.68)] bg-[rgba(3,14,15,0.78)] text-[#12e9da] shadow-[0_0_22px_rgba(18,233,218,0.14)] hover:border-[#baff38] hover:text-[#baff38] hover:bg-[rgba(3,14,15,0.94)] hover:-translate-y-1 hover:shadow-[0_0_0_4px_rgba(186,255,56,0.1),0_0_28px_rgba(186,255,56,0.18)]"
          }`}
        >
          <span
            className={`h-[6px] w-[6px] sm:h-[7px] sm:w-[7px] rounded-full transition-colors ${
              activeTag === "site"
                ? "bg-[#baff38] shadow-[0_0_12px_#baff38]"
                : "bg-[#12e9da] shadow-[0_0_12px_#12e9da]"
            }`}
          />
          SITE
        </button>

        {/* Tag 2: PROVA */}
        <button
          type="button"
          onClick={() => setActiveTag("proof")}
          onMouseEnter={() => setActiveTag("proof")}
          className={`absolute top-[54%] right-[6%] z-[3] inline-flex min-h-[30px] sm:min-h-[34px] items-center gap-2 rounded-full border px-2.5 sm:px-3 py-1 font-sans text-[10px] sm:text-xs font-extrabold tracking-[0.14em] backdrop-blur-[10px] transition-all duration-200 cursor-pointer ${
            activeTag === "proof"
              ? "border-[#baff38] bg-[rgba(3,14,15,0.94)] text-[#baff38] shadow-[0_0_0_4px_rgba(186,255,56,0.1),0_0_28px_rgba(186,255,56,0.18)] -translate-y-1"
              : "border-[rgba(18,233,218,0.68)] bg-[rgba(3,14,15,0.78)] text-[#12e9da] shadow-[0_0_22px_rgba(18,233,218,0.14)] hover:border-[#baff38] hover:text-[#baff38] hover:bg-[rgba(3,14,15,0.94)] hover:-translate-y-1 hover:shadow-[0_0_0_4px_rgba(186,255,56,0.1),0_0_28px_rgba(186,255,56,0.18)]"
          }`}
        >
          <span
            className={`h-[6px] w-[6px] sm:h-[7px] sm:w-[7px] rounded-full transition-colors ${
              activeTag === "proof"
                ? "bg-[#baff38] shadow-[0_0_12px_#baff38]"
                : "bg-[#12e9da] shadow-[0_0_12px_#12e9da]"
            }`}
          />
          PROVA
        </button>

        {/* Tag 3: AGENDAMENTO */}
        <button
          type="button"
          onClick={() => setActiveTag("agenda")}
          onMouseEnter={() => setActiveTag("agenda")}
          className={`absolute right-[7%] bottom-[12%] z-[3] inline-flex min-h-[30px] sm:min-h-[34px] items-center gap-2 rounded-full border px-2.5 sm:px-3 py-1 font-sans text-[10px] sm:text-xs font-extrabold tracking-[0.14em] backdrop-blur-[10px] transition-all duration-200 cursor-pointer ${
            activeTag === "agenda"
              ? "border-[#baff38] bg-[rgba(3,14,15,0.94)] text-[#baff38] shadow-[0_0_0_4px_rgba(186,255,56,0.1),0_0_28px_rgba(186,255,56,0.18)] -translate-y-1"
              : "border-[rgba(18,233,218,0.68)] bg-[rgba(3,14,15,0.78)] text-[#12e9da] shadow-[0_0_22px_rgba(18,233,218,0.14)] hover:border-[#baff38] hover:text-[#baff38] hover:bg-[rgba(3,14,15,0.94)] hover:-translate-y-1 hover:shadow-[0_0_0_4px_rgba(186,255,56,0.1),0_0_28px_rgba(186,255,56,0.18)]"
          }`}
        >
          <span
            className={`h-[6px] w-[6px] sm:h-[7px] sm:w-[7px] rounded-full transition-colors ${
              activeTag === "agenda"
                ? "bg-[#baff38] shadow-[0_0_12px_#baff38]"
                : "bg-[#12e9da] shadow-[0_0_12px_#12e9da]"
            }`}
          />
          AGENDAMENTO
        </button>

        {/* Dashed Connector Lines */}
        <span
          className="pointer-events-none absolute z-[2] h-[1px] border-t border-dashed border-[rgba(18,233,218,0.82)] origin-left"
          style={{ top: "18%", left: "31%", width: "15%", transform: "rotate(24deg)" }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute z-[2] h-[1px] border-t border-dashed border-[rgba(18,233,218,0.82)] origin-left"
          style={{ top: "59%", left: "71%", width: "11%", transform: "rotate(24deg)" }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute z-[2] h-[1px] border-t border-dashed border-[rgba(18,233,218,0.82)] origin-left"
          style={{ top: "72%", left: "74%", width: "10%", transform: "rotate(-17deg)" }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
