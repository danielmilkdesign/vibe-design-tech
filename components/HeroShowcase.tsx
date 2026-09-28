"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

interface TagItem {
  id: string;
  label: string;
  className: string;
  lineClass: string;
  tag: string;
  title: string;
  description: string;
  metric: string;
}

const TAGS: TagItem[] = [
  {
    id: "site",
    label: "SITE",
    className: "tag-site",
    lineClass: "line-site",
    tag: "Estrutura Própria",
    title: "Presença & Autoridade Imediata",
    description: "Sua casa digital com design de alto impacto, carregamento instantâneo e identidade premium.",
    metric: "100% sob seu controle",
  },
  {
    id: "proof",
    label: "PROVA",
    className: "tag-proof",
    lineClass: "line-proof",
    tag: "Credibilidade",
    title: "Resultados & Depoimentos Reais",
    description: "Galeria de antes e depois com avaliações 5 estrelas que despertam desejo imediato no lead.",
    metric: "+Confiança comprovada",
  },
  {
    id: "agenda",
    label: "AGENDAMENTO",
    className: "tag-agenda",
    lineClass: "line-agenda",
    tag: "Conversão",
    title: "Chamada de Ação Direta",
    description: "Botão estratégico direto para WhatsApp ou formulário, transformando cliques em alunos pagantes.",
    metric: "Zero atrito de fechamento",
  },
];

export default function HeroShowcase() {
  const [activeTag, setActiveTag] = useState<string>("site");
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[680px] mx-auto select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[#12e9da]/20 blur-3xl opacity-60 transition-opacity duration-700 hover:opacity-90" />

      {/* Main Site Component Container */}
      <div
        className="site-interactive-wrapper relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[rgba(18,233,218,0.42)] bg-[#041010] shadow-[0_30px_75px_rgba(0,0,0,0.7),0_0_50px_rgba(18,233,218,0.15)] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-[-9%_-8%] h-[118%] w-[116%] transition-all duration-500 ease-out">
          <Image
            src="/vibe-hero-interativo.png"
            alt="VIBE Site Interativo com tags"
            fill
            sizes="(max-width: 768px) 100vw, 680px"
            priority
            className="object-cover object-[76%_50%] transition-transform duration-500 hover:scale-[1.025]"
          />
        </div>

        {/* Shading Layer */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(2, 7, 7, 0.25), transparent 48%), linear-gradient(0deg, rgba(2, 7, 7, 0.32), transparent 45%)",
          }}
        />

        {/* Cyber Grid Layer */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(186, 255, 56, 0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(186, 255, 56, 0.24) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
            maskImage: "linear-gradient(120deg, transparent, #000 48%, transparent)",
            WebkitMaskImage: "linear-gradient(120deg, transparent, #000 48%, transparent)",
          }}
        />

        {/* Interactive Tags */}
        {TAGS.map((tag) => {
          const isActive = activeTag === tag.id;

          return (
            <div key={tag.id}>
              <button
                type="button"
                className={`tag-btn absolute z-10 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.14em] backdrop-blur-md transition-all duration-200 cursor-pointer ${
                  tag.className === "tag-site"
                    ? "top-[12%] left-[22%]"
                    : tag.className === "tag-proof"
                    ? "top-[54%] right-[6%]"
                    : "right-[7%] bottom-[12%]"
                } ${
                  isActive
                    ? "border-[#baff38] bg-[#030e0f]/95 text-[#baff38] shadow-[0_0_0_4px_rgba(186,255,56,0.1),0_0_28px_rgba(186,255,56,0.22)] -translate-y-1"
                    : "border-[rgba(18,233,218,0.68)] bg-[#030e0f]/80 text-[#12e9da] shadow-[0_0_22px_rgba(18,233,218,0.14)] hover:border-[#baff38] hover:text-[#baff38] hover:-translate-y-1 hover:bg-[#030e0f]/95 hover:shadow-[0_0_0_4px_rgba(186,255,56,0.1),0_0_28px_rgba(186,255,56,0.22)]"
                }`}
                onMouseEnter={() => setActiveTag(tag.id)}
                onClick={() => setActiveTag(tag.id)}
              >
                <span
                  className={`h-[7px] w-[7px] rounded-full transition-colors ${
                    isActive
                      ? "bg-[#baff38] shadow-[0_0_12px_#baff38]"
                      : "bg-[#12e9da] shadow-[0_0_12px_#12e9da]"
                  }`}
                />
                <span>{tag.label}</span>
              </button>

              {/* Popup details card */}
              <div
                className={`absolute z-30 w-60 rounded-xl border border-[#12e9da]/40 bg-[#041010]/95 p-3 backdrop-blur-xl transition-all duration-300 pointer-events-none ${
                  isActive
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-1"
                } ${
                  tag.className === "tag-site"
                    ? "top-[24%] left-[22%]"
                    : tag.className === "tag-proof"
                    ? "top-[66%] right-[6%]"
                    : "right-[7%] bottom-[24%]"
                }`}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1.5">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#12e9da]">
                    {tag.tag}
                  </span>
                  <span className="rounded bg-white/[0.06] px-1 py-0.5 font-mono text-[8px] text-white/70">
                    {tag.metric}
                  </span>
                </div>
                <h4 className="font-display text-xs font-bold uppercase text-white mb-0.5">
                  {tag.title}
                </h4>
                <p className="text-[10px] leading-snug text-white/80">
                  {tag.description}
                </p>
              </div>
            </div>
          );
        })}

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
