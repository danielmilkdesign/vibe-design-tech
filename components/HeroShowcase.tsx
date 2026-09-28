"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

interface Hotspot {
  id: string;
  label: string;
  tag: string;
  title: string;
  description: string;
  metric: string;
  top: string;
  left?: string;
  right?: string;
  align: "left" | "right";
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "site",
    label: "SITE",
    tag: "Estrutura Própria",
    title: "Presença & Autoridade Imediata",
    description: "Sua casa digital com design de alto impacto, carregamento instantâneo e identidade premium.",
    metric: "100% sob seu controle",
    top: "14%",
    left: "14%",
    align: "left",
  },
  {
    id: "metodo",
    label: "MÉTODO",
    tag: "Diferenciação",
    title: "Metodologia Visual & Clara",
    description: "Explica suas etapas de treino, nutrição e acompanhamento para valorizar o preço do seu serviço.",
    metric: "Elimina dúvidas e objeções",
    top: "47%",
    left: "4%",
    align: "left",
  },
  {
    id: "prova",
    label: "PROVA",
    tag: "Credibilidade",
    title: "Resultados & Depoimentos Reais",
    description: "Galeria de antes e depois com avaliações 5 estrelas que despertam desejo inegável no lead.",
    metric: "+Confiança comprovada",
    top: "58%",
    right: "6%",
    align: "right",
  },
  {
    id: "agendamento",
    label: "AGENDAMENTO",
    tag: "Conversão",
    title: "Chamada de Ação Direta",
    description: "Botão estratégico direto para WhatsApp ou formulário, transformando cliques em alunos pagantes.",
    metric: "Zero atrito de fechamento",
    top: "82%",
    right: "8%",
    align: "right",
  },
];

export default function HeroShowcase() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
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

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

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
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] mx-auto select-none perspective-[1200px]"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-cyan/20 blur-3xl transition-opacity duration-700 opacity-60 group-hover:opacity-90" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] transition-all duration-700"
        style={{
          background: isHovered
            ? "radial-gradient(circle, rgba(85,241,239,0.35) 0%, rgba(85,241,239,0.08) 60%, transparent 80%)"
            : "radial-gradient(circle, rgba(85,241,239,0.22) 0%, rgba(85,241,239,0.04) 60%, transparent 80%)",
        }}
      />

      {/* 3D Card Container */}
      <div
        className="relative overflow-visible rounded-2xl transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        }}
      >
        {/* The Base Image */}
        <div className="relative aspect-[1.12/1] w-full overflow-hidden rounded-2xl border border-cyan/20 bg-black/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(85,241,239,0.15)] transition-shadow duration-500 hover:shadow-[0_25px_70px_-10px_rgba(0,0,0,0.95),0_0_50px_rgba(85,241,239,0.3)]">
          <Image
            src="/site base.png"
            alt="VIBE Sistema e Site Base Interativo para Saúde e Fitness"
            fill
            sizes="(max-width: 768px) 100vw, 620px"
            priority
            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.01]"
          />

          {/* Cyber glass scanline overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(85,241,239,0.12),_transparent_70%)]" />
        </div>

        {/* Interactive Hotspot Badges with Pointer Lines */}
        {HOTSPOTS.map((spot) => {
          const isActive = activeHotspot === spot.id;

          return (
            <div
              key={spot.id}
              className="absolute z-30 transition-all duration-300"
              style={{
                top: spot.top,
                left: spot.left,
                right: spot.right,
              }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(isActive ? null : spot.id)}
            >
              {/* Hotspot Pill Button */}
              <button
                type="button"
                className={`group/btn relative flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer backdrop-blur-md ${
                  isActive
                    ? "border-cyan bg-cyan/25 text-white shadow-[0_0_20px_rgba(85,241,239,0.8)] scale-105"
                    : "border-cyan/40 bg-black/60 text-cyan hover:border-cyan hover:bg-cyan/15 hover:shadow-[0_0_15px_rgba(85,241,239,0.5)] hover:scale-105"
                }`}
                aria-label={`Ver detalhes de ${spot.label}`}
              >
                {/* Radar pulsing dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_8px_#55f1ef]" />
                </span>

                <span>{spot.label}</span>
              </button>

              {/* Popup Tooltip Details */}
              <div
                className={`absolute z-40 w-64 p-3.5 rounded-xl border border-cyan/30 bg-[#080d0e]/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(85,241,239,0.2)] transition-all duration-300 pointer-events-none ${
                  isActive
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-1"
                } ${
                  spot.align === "left"
                    ? "left-0 top-full mt-2"
                    : "right-0 top-full mt-2"
                }`}
              >
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan font-semibold">
                    {spot.tag}
                  </span>
                  <span className="text-[9px] font-mono text-fg-muted bg-white/[0.06] px-1.5 py-0.5 rounded">
                    {spot.metric}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white mb-1 font-display tracking-wide uppercase">
                  {spot.title}
                </h4>
                <p className="text-[11px] leading-snug text-white/80 font-body">
                  {spot.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Helper caption below showcase */}
      <div className="mt-3 flex items-center justify-center gap-2 text-center text-[11px] font-mono text-cyan/70">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
        <span>Passe o mouse ou toque nos pontos para explorar a estrutura</span>
      </div>
    </div>
  );
}
