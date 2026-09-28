"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

interface Hotspot {
  id: string;
  label: string;
  tag: string;
  title: string;
  description: string;
  top: string;
  left: string;
  tooltipPos: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "site",
    label: "SITE",
    tag: "Estrutura Própria",
    title: "Presença & Autoridade",
    description: "Sua casa digital com design de alto impacto, carregamento ultrarrápido e controle total.",
    top: "14.1%",
    left: "22.6%",
    tooltipPos: { top: "calc(14.1% + 26px)", left: "10%" },
  },
  {
    id: "metodo",
    label: "MÉTODO",
    tag: "Diferenciação",
    title: "Metodologia Clara",
    description: "Explica suas etapas de treino e acompanhamento para valorizar o ticket do seu serviço.",
    top: "51.0%",
    left: "10.0%",
    tooltipPos: { top: "calc(51.0% + 26px)", left: "4%" },
  },
  {
    id: "prova",
    label: "PROVA",
    tag: "Credibilidade",
    title: "Resultados Reais",
    description: "Casos de sucesso com fotos de transformações e avaliações que despertam desejo imediato.",
    top: "61.6%",
    left: "86.3%",
    tooltipPos: { top: "calc(61.6% + 26px)", right: "4%" },
  },
  {
    id: "agendamento",
    label: "AGENDAMENTO",
    tag: "Conversão",
    title: "Ação Direta",
    description: "Botão estratégico direto para WhatsApp, transformando visitantes em alunos pagantes.",
    top: "86.3%",
    left: "83.9%",
    tooltipPos: { bottom: "calc(13.7% + 26px)", right: "4%" },
  },
];

export default function HeroShowcase() {
  const [activeHotspot, setActiveHotspot] = useState<string>("site");
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle 3D mouse parallax effect
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="relative w-full max-w-[620px] mx-auto select-none">
      {/* Ambient cyan background glow aura */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-cyan/20 blur-3xl transition-opacity duration-700 opacity-60 group-hover:opacity-90" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] transition-all duration-700"
        style={{
          background: isHovered
            ? "radial-gradient(circle, rgba(18,233,218,0.35) 0%, rgba(18,233,218,0.08) 60%, transparent 80%)"
            : "radial-gradient(circle, rgba(18,233,218,0.2) 0%, rgba(18,233,218,0.04) 60%, transparent 80%)",
        }}
      />

      {/* 3D Parallax Wrapper */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-visible transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
        }}
      >
        {/* Main site-component matching vibe-hero-component */}
        <section
          className="group relative w-full aspect-[1680/1440] overflow-hidden rounded-2xl sm:rounded-3xl border border-[rgba(18,233,218,0.42)] bg-[#041010] shadow-[0_30px_75px_rgba(0,0,0,0.5),0_0_50px_rgba(18,233,218,0.12)] transition-all duration-300 hover:border-[rgba(18,233,218,0.65)] hover:shadow-[0_35px_85px_rgba(0,0,0,0.6),0_0_65px_rgba(18,233,218,0.2)]"
          aria-label="VIBE Sistema e Site Interativo para Saúde e Fitness"
        >
          {/* Base Showcase Image */}
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/vibe-hero-showcase.png"
              alt="VIBE Estrutura de Site de Alta Conversão"
              fill
              sizes="(max-width: 768px) 100vw, 620px"
              priority
              className="object-cover object-center filter saturate-[0.98] contrast-[1.05] transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:saturate-[1.08] group-hover:contrast-[1.08]"
            />
          </div>

          {/* Site shade gradient overlay */}
          <span
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(2, 7, 7, 0.25), transparent 30%), linear-gradient(0deg, rgba(2, 7, 7, 0.25), transparent 30%)",
            }}
            aria-hidden="true"
          />

          {/* Site cyber grid overlay */}
          <span
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(186, 255, 56, 0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(186, 255, 56, 0.24) 1px, transparent 1px)",
              backgroundSize: "58px 58px",
              maskImage: "linear-gradient(120deg, transparent, #000 48%, transparent)",
              WebkitMaskImage: "linear-gradient(120deg, transparent, #000 48%, transparent)",
            }}
            aria-hidden="true"
          />

          {/* Interactive Tag Buttons and Tooltips */}
          {HOTSPOTS.map((spot) => {
            const isActive = activeHotspot === spot.id;

            return (
              <div key={spot.id} className="contents">
                {/* Hotspot Tag Button */}
                <button
                  type="button"
                  onClick={() => setActiveHotspot(isActive ? "" : spot.id)}
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  className={`absolute z-30 inline-flex items-center gap-2 min-h-[30px] sm:min-h-[36px] px-2.5 sm:px-3.5 rounded-full font-mono text-[9px] sm:text-[11px] font-extrabold uppercase tracking-[0.14em] cursor-pointer backdrop-blur-md transition-all duration-200 select-none ${
                    isActive
                      ? "text-[#baff38] border border-[#baff38] bg-[#030e0f]/95 shadow-[0_0_0_4px_rgba(186,255,56,0.12),0_0_28px_rgba(186,255,56,0.28)] -translate-x-1/2 -translate-y-[calc(50%+3px)]"
                      : "text-[#12e9da] border border-[rgba(18,233,218,0.68)] bg-[#030e0f]/85 shadow-[0_0_22px_rgba(18,233,218,0.18)] -translate-x-1/2 -translate-y-1/2 hover:text-[#baff38] hover:border-[#baff38] hover:bg-[#030e0f]/95 hover:shadow-[0_0_0_4px_rgba(186,255,56,0.12),0_0_28px_rgba(186,255,56,0.28)] hover:-translate-y-[calc(50%+3px)]"
                  }`}
                  style={{
                    top: spot.top,
                    left: spot.left,
                  }}
                  aria-label={`Ver estrutura: ${spot.label}`}
                >
                  <span
                    className={`h-[6px] w-[6px] sm:h-[7px] sm:w-[7px] rounded-full transition-colors duration-200 ${
                      isActive
                        ? "bg-[#baff38] shadow-[0_0_12px_#baff38]"
                        : "bg-[#12e9da] shadow-[0_0_12px_#12e9da]"
                    }`}
                  />
                  <span>{spot.label}</span>
                </button>

                {/* Interactive Tooltip Card */}
                <div
                  className={`absolute z-40 w-[210px] sm:w-[250px] p-3 sm:p-3.5 rounded-xl border border-[#baff38]/50 bg-[#041010]/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(186,255,56,0.15)] transition-all duration-200 pointer-events-none ${
                    isActive
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 translate-y-1.5 pointer-events-none"
                  }`}
                  style={{
                    ...spot.tooltipPos,
                  }}
                >
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.12em] text-[#baff38] uppercase mb-1">
                    {spot.tag}
                  </div>
                  <h4 className="text-[11px] sm:text-[12px] font-bold text-white mb-1 uppercase tracking-wide font-display">
                    {spot.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] leading-snug text-white/85 font-body">
                    {spot.description}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* Helper caption below showcase matching the design */}
      <div className="mt-3.5 flex items-center justify-center gap-2 text-center text-[10px] sm:text-[11px] font-mono text-[#12e9da]/75">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#12e9da] shadow-[0_0_8px_#12e9da] animate-pulse" />
        <span>Passe o mouse ou toque nos pontos para explorar a estrutura</span>
      </div>
    </div>
  );
}
