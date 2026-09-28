"use client";

import { useState } from "react";
import Image from "next/image";

interface Founder {
  name: string;
  role: string;
  desc: string;
  image: string;
  minibio?: string;
}

const founders: Founder[] = [
  {
    name: "VICTOR BELICHAR",
    role: "CEO - COMERCIAL E RELACIONAMENTO",
    desc: "Estrutura as ofertas, atende cada cliente e mantém o Instagram da VIBE — a ponte entre quem procura presença própria e o produto certo.",
    image: "/VICTOR2.png",
    minibio:
      "Victor Belichar é Coordenador de Projetos de Design com mais de 12 anos de experiência na criação e gestão de produtos digitais, marcas e estratégias visuais. Com sólida bagagem em UX/UI, Design Thinking e Direção de Criação, lidera equipes multidisciplinares alinhando inovação, organização de processos e foco nos objetivos de negócio e na experiência do usuário. Une visão estratégica de produto, facilidade de comunicação e gestão ágil para orquestrar entregas eficientes entre times de design, desenvolvimento e clientes, transformando problemas complexos em soluções intuitivas e de alto impacto.",
  },
  {
    name: "DANIEL LEITE",
    role: "CTO - Tecnologia e Produto",
    desc: "Constrói cada site e sistema — da estrutura técnica ao design final. É quem faz a presença online acontecer com os mais altos padrões de qualidade.",
    image: "/DANIEL.png",
  },
];

export default function About() {
  const [activeBio, setActiveBio] = useState<Founder | null>(null);

  return (
    <section id="sobre" className="border-b border-line py-16 md:py-28 relative">
      <div className="container-vibe">
        <p className="eyebrow text-cyan">Sobre</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
          Quem faz o seu projeto acontecer
        </h2>

        <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-2">
          {founders.map((person) => (
            <div
              key={person.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)]"
            >
              <div className="relative flex h-60 sm:h-72 md:h-80 w-full items-end justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black/60 pt-4">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(85,241,239,0.12),transparent_70%)]" />
                <Image
                  src={person.image}
                  alt={person.name}
                  width={600}
                  height={750}
                  className="h-full w-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-8">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white break-words">
                  {person.name}
                </h3>
                <p className="eyebrow mt-1 text-cyan font-mono text-xs sm:text-sm tracking-wider uppercase">
                  {person.role}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                  {person.desc}
                </p>

                {person.minibio && (
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveBio(person)}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 text-xs font-semibold text-cyan transition-all hover:scale-[1.03] hover:border-cyan hover:bg-cyan/20 hover:shadow-[0_0_20px_rgba(85,241,239,0.35)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                      Minibio
                      <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Minibio */}
      {activeBio && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md transition-opacity"
          onClick={() => setActiveBio(null)}
        >
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-cyan/40 bg-[#080d11] p-6 sm:p-8 shadow-[0_0_60px_rgba(85,241,239,0.25)]"
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
                  <span className="pill-glass text-[10px] inline-flex mb-1">
                    <span className="dot" />
                    Minibio
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase text-white">
                    {activeBio.name}
                  </h3>
                  <p className="font-mono text-xs text-cyan tracking-wider uppercase">
                    {activeBio.role}
                  </p>
                </div>
              </div>

              {/* Botão Fechar */}
              <button
                type="button"
                onClick={() => setActiveBio(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-fg-muted transition-colors hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
                aria-label="Fechar modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Texto da Minibio */}
            <div className="mt-5 max-h-[60vh] overflow-y-auto pr-1">
              <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                {activeBio.minibio}
              </p>
            </div>

            {/* Footer com botão fechar */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveBio(null)}
                className="rounded-full bg-cyan px-5 py-2 text-xs font-semibold text-black transition-transform hover:scale-[1.03] shadow-[0_0_20px_rgba(85,241,239,0.4)]"
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
