"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

interface Founder {
  name: string;
  role: string;
  desc: string;
  image: string;
  minibio?: string;
  highlights: string[];
}

const founders: Founder[] = [
  {
    name: "VICTOR BELICHAR",
    role: "CEO - COMERCIAL E RELACIONAMENTO",
    desc: "Estrutura as ofertas, atende cada cliente e mantém o Instagram da VIBE — a ponte entre quem procura presença própria e o produto certo.",
    image: "/VICTOR2.png",
    highlights: ["12+ anos de experiência", "Especialista em UX e Marcas", "Atendimento e alinhamento direto"],
    minibio:
      "Victor Belichar é Coordenador de Projetos de Design com mais de 12 anos de experiência na criação e gestão de produtos digitais, marcas e estratégias visuais. Com sólida bagagem em UX/UI, Design Thinking e Direção de Criação, lidera equipes multidisciplinares alinhando inovação, organização de processos e foco nos objetivos de negócio e na experiência do usuário. Une visão estratégica de produto, facilidade de comunicação e gestão ágil para orquestrar entregas eficientes entre times de design, desenvolvimento e clientes, transformando problemas complexos em soluções intuitivas e de alto impacto.",
  },
  {
    name: "DANIEL LEITE",
    role: "CTO - TECNOLOGIA E PRODUTO",
    desc: "Constrói cada site e sistema — da estrutura técnica ao design final. É quem faz a presença online acontecer com os mais altos padrões de qualidade.",
    image: "/DANIEL.png",
    highlights: ["16 anos em Design", "6+ anos em Produtos Complexos", "Healthtech, Fintechs & Design Systems"],
    minibio:
      "Daniel Rodrigo Leite é Senior Product Designer e Engenheiro de Interface com mais de 16 anos de trajetória em design e 6+ anos dedicados a produtos digitais complexos (healthtech, fintech e sistemas de pagamento). Especialista em Product Discovery, UX Research e Design Systems, combina metodologia sólida com IA Generativa para construir experiências digitais simples, escaláveis e orientadas a resultados. Desenvolve cada site e sistema com arquitetura Next.js, segurança e velocidade máxima.",
  },
];

export default function About() {
  const [activeBio, setActiveBio] = useState<Founder | null>(null);

  return (
    <section id="sobre" className="border-b border-line py-16 md:py-28 relative bg-[#040809]">
      <div className="container-vibe relative z-[1]">
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <p className="eyebrow text-cyan font-mono text-xs uppercase tracking-widest">/ SOBRE A VIBE</p>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
              Projetos de produto de verdade <br />
              <span className="text-cyan glow-cyan">aplicados ao seu negócio.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-fg-muted leading-relaxed">
              Não somos uma agência tradicional que usa templates lentos de WordPress. Trazemos a bagagem de engenharia e design de grandes plataformas digitais para a presença própria de especialistas e clínicas.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 sm:mt-16 grid gap-8 md:grid-cols-2">
          {founders.map((person, idx) => (
            <ScrollReveal key={person.name} direction="up" delay={150 * (idx + 1)}>
              <SpotlightCard
                enableTilt
                spotlightColor="rgba(85, 241, 239, 0.12)"
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white/[0.02] transition-all duration-300 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)] h-full"
              >
                <div className="relative flex h-64 sm:h-72 md:h-80 w-full items-end justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black/60 pt-4">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(85,241,239,0.12),transparent_70%)]" />
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={600}
                    height={750}
                    className="h-full w-auto object-contain object-bottom transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8 justify-between">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white break-words">
                      {person.name}
                    </h3>
                    <p className="eyebrow mt-1 text-cyan font-mono text-xs sm:text-sm tracking-wider uppercase">
                      {person.role}
                    </p>
                    <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-white/90">
                      {person.desc}
                    </p>

                    {/* Highlights de Autoridade */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {person.highlights.map((h) => (
                        <span key={h} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-cyan/90">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {person.minibio && (
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => setActiveBio(person)}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 text-xs font-mono font-semibold text-cyan transition-all hover:scale-[1.03] hover:border-cyan hover:bg-cyan/20 hover:shadow-[0_0_20px_rgba(85,241,239,0.35)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                        <span>Conhecer trajetória completa</span>
                        <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal de Trajetória Completa */}
      {activeBio && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md transition-opacity"
          onClick={() => setActiveBio(null)}
        >
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-cyan/40 bg-[#080d11] p-6 sm:p-8 shadow-[0_0_60px_rgba(85,241,239,0.25)] text-fg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient glow inside modal */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan/15 blur-3xl" />

            {/* Header do modal */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-cyan/30 bg-white/5">
                  <Image
                    src={activeBio.image}
                    alt={activeBio.name}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold uppercase text-white">
                    {activeBio.name}
                  </h4>
                  <p className="font-mono text-xs text-cyan">
                    {activeBio.role}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveBio(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fg-muted hover:border-cyan/40 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Texto da trajetória */}
            <div className="mt-5 space-y-3 font-sans text-sm sm:text-base leading-relaxed text-fg-muted">
              <p>{activeBio.minibio}</p>
            </div>

            {/* Footer do modal */}
            <div className="mt-6 flex justify-end border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => setActiveBio(null)}
                className="rounded-full border border-cyan/40 bg-cyan/10 px-5 py-2 text-xs font-mono font-semibold text-cyan hover:bg-cyan/20 transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
