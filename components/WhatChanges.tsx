"use client";

import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

export default function WhatChanges() {
  const items = [
    {
      num: "01",
      tag: "CLAREZA",
      title: "O visitante entende o método e o próximo passo.",
      body: "Sua metodologia de atendimento ou treino, suas modalidades e seus diferenciais deixam de depender de áudios e textos soltos no direct.",
      icon: (
        <svg className="h-6 w-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      tag: "PROVA ÉTICA",
      title: "Sua credibilidade trabalha continuamente.",
      body: "Depoimentos, casos de sucesso e relatos reais organizados com elegância — sempre em conformidade com as regras éticas do seu conselho.",
      icon: (
        <svg className="h-6 w-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      num: "03",
      tag: "CONVERSÃO",
      title: "A atenção do seguidor vira agendamento real.",
      body: "O paciente ou cliente chega ciente do seu posicionamento, pronto para escolher o horário na sua agenda ou avançar com segurança.",
      icon: (
        <svg className="h-6 w-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="o-que-muda" className="relative overflow-hidden border-b border-line bg-bg-alt py-16 md:py-28">
      <div className="grid-lines" />
      <div className="container-vibe relative z-[1]">
        <ScrollReveal direction="up" delay={50}>
          <p className="eyebrow text-cyan font-mono text-xs uppercase tracking-widest">/ O que muda</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
            Não entregamos só um site.<br />
            <span className="text-cyan glow-cyan">Construímos uma presença própria.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <ScrollReveal key={item.num} direction="up" delay={150 * (idx + 1)}>
              <SpotlightCard
                enableTilt
                spotlightColor="rgba(85, 241, 239, 0.14)"
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 transition-all duration-300 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)] h-full"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl sm:text-3xl font-bold tracking-wider text-cyan drop-shadow-[0_0_12px_rgba(85,241,239,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(85,241,239,0.65)]">
                      {item.num}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/10">
                      {item.icon}
                    </div>
                  </div>

                  <span className="mt-4 inline-block font-mono text-xs font-semibold uppercase tracking-wider text-cyan">
                    {item.tag}
                  </span>

                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-extrabold uppercase leading-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-fg-muted group-hover:text-white/90 transition-colors">
                    {item.body}
                  </p>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Selo de Compliance Regulatório */}
        <ScrollReveal direction="up" delay={550}>
          <div className="mt-10 sm:mt-12 rounded-2xl border border-cyan/20 bg-cyan/[0.03] p-5 sm:p-6 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-cyan/15 border border-cyan/30 flex items-center justify-center text-cyan">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-base sm:text-lg font-bold uppercase text-white">
                  Compliance Ético Integrado
                </h4>
                <p className="text-xs sm:text-sm text-fg-muted">
                  Estruturas pensadas e validadas conforme os códigos de ética profissionais: <span className="text-cyan font-mono font-semibold">CFN (Nutrição)</span>, <span className="text-cyan font-mono font-semibold">CREFITO (Fisio)</span>, <span className="text-cyan font-mono font-semibold">CFP (Psicologia)</span> e <span className="text-cyan font-mono font-semibold">CFM (Medicina)</span>.
                </p>
              </div>
            </div>

            <div className="shrink-0 text-xs font-mono text-cyan/90 border border-cyan/30 rounded-full px-3.5 py-1.5 bg-cyan/10">
              Zero Risco Ético
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
