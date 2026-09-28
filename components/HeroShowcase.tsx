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
  color?: "cyan" | "lime";
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "site",
    label: "SITE",
    tag: "Estrutura Própria",
    title: "Presença & Autoridade Imediata",
    description: "Sua casa digital com design de alto impacto, carregamento instantâneo e identidade premium.",
    metric: "100% sob seu controle",
    top: "16%",
    left: "14%",
    align: "left",
    color: "cyan",
  },
  {
    id: "metodo",
    label: "MÉTODO",
    tag: "Diferenciação",
    title: "Metodologia Visual & Clara",
    description: "Explica suas etapas de treino, nutrição e acompanhamento para valorizar o ticket do seu serviço.",
    metric: "Elimina dúvidas e objeções",
    top: "50%",
    left: "4%",
    align: "left",
    color: "cyan",
  },
  {
    id: "prova",
    label: "PROVA",
    tag: "Credibilidade",
    title: "Resultados & Depoimentos Reais",
    description: "Galeria de antes e depois com avaliações 5 estrelas que despertam desejo imediato no lead.",
    metric: "+Confiança comprovada",
    top: "58%",
    right: "4%",
    align: "right",
    color: "cyan",
  },
  {
    id: "agendamento",
    label: "AGENDAMENTO",
    tag: "Conversão",
    title: "Chamada de Ação Direta",
    description: "Botão estratégico direto para WhatsApp ou formulário, transformando cliques em alunos pagantes.",
    metric: "Zero atrito de fechamento",
    top: "80%",
    right: "12%",
    align: "right",
    color: "lime",
  },
];

export default function HeroShowcase() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth 3D mouse parallax effect
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

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
      className="relative w-full max-w-[640px] mx-auto select-none perspective-[1200px]"
    >
      {/* Ambient cyan background glow aura */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-cyan/20 blur-3xl transition-opacity duration-700 opacity-70 group-hover:opacity-100" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] transition-all duration-700"
        style={{
          background: isHovered
            ? "radial-gradient(circle, rgba(85,241,239,0.4) 0%, rgba(85,241,239,0.1) 60%, transparent 80%)"
            : "radial-gradient(circle, rgba(85,241,239,0.25) 0%, rgba(85,241,239,0.05) 60%, transparent 80%)",
        }}
      />

      {/* 3D Card Container */}
      <div
        className="relative overflow-visible transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        }}
      >
        {/* The Base download.png Image */}
        <div className="relative aspect-[1.12/1] w-full overflow-hidden rounded-2xl transition-all duration-500">
          <Image
            src="/download.png"
            alt="VIBE Sistema e Site Base Interativo para Saúde e Fitness"
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            priority
            className="object-contain object-center transition-transform duration-700 ease-out"
          />

          {/* Interactive hotspot touch areas overlaid on top */}
          <div className="absolute inset-0 z-20 pointer-events-auto">
            {HOTSPOTS.map((spot) => {
              const isActive = activeHotspot === spot.id;
              const isLime = spot.color === "lime";

              return (
                <div
                  key={spot.id}
                  className="absolute cursor-pointer"
                  style={{
                    top: spot.top,
                    left: spot.left,
                    right: spot.right,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  onClick={() => setActiveHotspot(isActive ? null : spot.id)}
                >
                  {/* Hotspot interactive halo and trigger target */}
                  <div
                    className={`h-12 w-32 rounded-full transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? isLime
                          ? "bg-[#d8ff3f]/15 ring-2 ring-[#d8ff3f]/60"
                          : "bg-cyan/15 ring-2 ring-cyan/60"
                        : "hover:bg-cyan/10"
                    }`}
                  />

                  {/* Popup Tooltip Details */}
                  <div
                    className={`absolute z-40 w-64 p-3.5 rounded-xl border bg-[#080d0e]/95 backdrop-blur-xl transition-all duration-300 pointer-events-none ${
                      isLime
                        ? "border-[#d8ff3f]/40 shadow-[0_12px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(216,255,63,0.25)]"
                        : "border-cyan/30 shadow-[0_12px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(85,241,239,0.25)]"
                    } ${
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
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest font-semibold ${
                          isLime ? "text-[#d8ff3f]" : "text-cyan"
                        }`}
                      >
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
        </div>
      </div>
    </div>
  );
}
