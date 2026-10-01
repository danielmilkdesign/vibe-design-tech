"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

interface Segment {
  id: string;
  badge: string;
  sectorNum: string;
  title: string;
  pain: string;
  solution: string;
  sampleLink?: string;
  sampleLabel?: string;
  isFullWidth?: boolean;
}

const segments: Segment[] = [
  {
    id: "empresas",
    badge: "CORPORATIVO & B2B",
    sectorNum: "SETOR 01",
    title: "Empresas & Negócios",
    pain: "Dependência de indicações boca a boca, envio de propostas frias por PDF que ninguém lê e dificuldade de justificar valor diante da concorrência.",
    solution: "Posicionamento corporativo de alto padrão nas redes + site institucional que transmite solidez imediata e formulário inteligente de orçamento.",
    sampleLink: "https://wa.me/5592992027059?text=Ol%C3%A1!%20Tenho%20uma%20empresa%20e%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20vendas.",
    sampleLabel: "Consultoria para Empresas",
  },
  {
    id: "saude",
    badge: "NUTRIÇÃO, FISIO & TERAPIAS",
    sectorNum: "SETOR 02",
    title: "Saúde & Bem-Estar",
    pain: "Perder horas tirando dúvidas repetitivas no direct, falta de triagem prévia do paciente e insegurança ética com órgãos reguladores (CFN, CFP, CREFITO).",
    solution: "Design elegante para posts educativos + site próprio apresentando seu método, etapas da consulta e agendamento digital sem atrito.",
    sampleLink: "#amostra",
    sampleLabel: "Ver Modelo de Saúde",
  },
  {
    id: "clinicas",
    badge: "CORPO CLÍNICO & GESTÃO",
    sectorNum: "SETOR 03",
    title: "Clínicas Médicas & Odonto",
    pain: "Múltiplos especialistas com agendas concorrentes, recepção sobrecarregada no WhatsApp e perda de pacientes por demora no atendimento.",
    solution: "Portal completo com vitrine de profissionais da clínica, roteamento inteligente de horários para WhatsApp e automação de lembretes.",
    sampleLink: "#planos",
    sampleLabel: "Ver Sistema para Clínicas",
  },
  {
    id: "contabilidade",
    badge: "FINANCEIRO, FISCAL & BPO",
    sectorNum: "SETOR 04",
    title: "Contabilidade & BPO",
    pain: "Clientes que enxergam a contabilidade apenas como 'emissora de guias', guerra predatória de honorários e atração de leads desqualificados.",
    solution: "Posicionamento de consultoria estratégica nas redes + site focado em inteligência tributária e BPO financeiro que atrai empresários qualificados.",
    sampleLink: "https://wa.me/5592992027059?text=Ol%C3%A1!%20Sou%20da%20%C3%A1rea%20cont%C3%A1bil%20e%20gostaria%20de%20conhecer%20a%20esteira%20da%20VIBE.",
    sampleLabel: "Estrutura para Contabilidade",
  },
  {
    id: "advocacia",
    badge: "COMPLIANCE OAB & JURÍDICO",
    sectorNum: "SETOR 05",
    title: "Advocacia & Jurídico",
    pain: "Rigor do Código de Ética e Provimento 205 da OAB, receio de infrações por propaganda e dificuldade de gerar consultas formais sem mercantilismo.",
    solution: "Comunicação institucional sóbria e 100% ética, artigos de autoridade jurídica nas redes e página institucional para triagem e agendamento reservado.",
    sampleLink: "https://wa.me/5592992027059?text=Ol%C3%A1!%20Sou%20advogado(a)%20e%20gostaria%20de%20uma%20estrutura%20em%20conformidade%20com%20a%20OAB.",
    sampleLabel: "Compliance OAB & Jurídico",
  },
  {
    id: "personal",
    badge: "FITNESS & PERFORMANCE",
    sectorNum: "SETOR 06",
    title: "Personal Trainers & Fitness",
    pain: "Passar horas respondendo preços soltos no direct, antes/depois esquecidos no feed e alunos perdidos por negociações informais.",
    solution: "Posicionamento de treinador de elite no Instagram + página de consultoria com tabela de planos, fases de treino e avaliação física agendada no WhatsApp.",
    sampleLink: "https://victor-belichar-personal.vercel.app/",
    sampleLabel: "Ver Case em Produção",
  },
  {
    id: "demais",
    badge: "OUTROS SEGMENTOS & ESPECIALISTAS",
    sectorNum: "SETOR 07",
    title: "Demais Setores & Especialistas",
    pain: "Ter um excelente produto ou serviço, mas parecer amador na internet por não ter um ecossistema digital integrado, dependendo apenas de postagens avulsas.",
    solution: "Desenhamos a esteira ideal para o seu modelo de negócio: redes sociais com design de autoridade, site próprio de alta conversão e automações de vendas.",
    sampleLink: "https://wa.me/5592992027059?text=Ol%C3%A1!%20Meu%20setor%20%C3%A9%20espec%C3%ADfico%20e%20gostaria%20de%20uma%20an%C3%A1lise.",
    sampleLabel: "Analisar Meu Setor",
    isFullWidth: true,
  },
];

const filters = [
  { id: "todos", label: "✦ Todos os Setores" },
  { id: "empresas", label: "Empresas" },
  { id: "saude", label: "Saúde & Bem-Estar" },
  { id: "clinicas", label: "Clínicas" },
  { id: "contabilidade", label: "Contabilidade" },
  { id: "advocacia", label: "Advocacia" },
  { id: "personal", label: "Personal Trainers" },
  { id: "demais", label: "Demais Setores" },
];

export default function Segments() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const visibleSegments =
    activeFilter === "todos"
      ? segments
      : segments.filter((s) => s.id === activeFilter);

  return (
    <section id="para-quem-e" className="relative overflow-hidden border-b border-line bg-[#04080a] py-16 md:py-28">
      <div className="grid-lines" />

      {/* Glow de fundo */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />

      <div className="container-vibe relative z-[1]">
        <ScrollReveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow text-cyan font-mono text-xs uppercase tracking-widest">
              / SEGMENTOS & SOLUÇÕES SOB MEDIDA
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
              Para quem é a <span className="text-cyan glow-cyan">VIBE Design Tech?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-fg-muted leading-relaxed">
              Adaptamos o vocabulário, as normas éticas e o funil comercial de acordo com o seu segmento de atuação:
            </p>

            {/* Seletor de Nichos */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {filters.map((f) => {
                const isActive = activeFilter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveFilter(f.id)}
                    className={`rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-cyan text-black font-bold shadow-[0_0_20px_rgba(85,241,239,0.4)] border border-cyan"
                        : "bg-white/5 text-fg-muted hover:text-white hover:bg-cyan/10 hover:border-cyan/30 border border-white/10"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSegments.map((item, idx) => {
            const spanClass = item.isFullWidth && activeFilter === "todos" ? "sm:col-span-2 lg:col-span-3" : "";

            return (
              <ScrollReveal key={item.id} direction="up" delay={80 * (idx + 1)} className={spanClass}>
                <SpotlightCard
                  enableTilt
                  spotlightColor="rgba(85, 241, 239, 0.14)"
                  className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0d1216] p-6 sm:p-7 transition-all duration-300 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)] h-full"
                >
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white leading-tight">
                      {item.title}
                    </h3>

                    <div className="mt-4 space-y-3 text-xs sm:text-[13px] leading-relaxed">
                      <div className="rounded-xl bg-white/[0.03] p-3 border border-white/5">
                        <span className="font-semibold text-rose-400/90 block mb-1">O gargalo hoje:</span>
                        <p className="text-fg-muted">{item.pain}</p>
                      </div>

                      <div className="rounded-xl bg-cyan/[0.04] p-3 border border-cyan/15">
                        <span className="font-semibold text-cyan block mb-1">Com a VIBE:</span>
                        <p className="text-fg">{item.solution}</p>
                      </div>
                    </div>
                  </div>

                  {item.sampleLink && (
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <a
                        href={item.sampleLink}
                        target={item.sampleLink.startsWith("http") ? "_blank" : undefined}
                        rel={item.sampleLink.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan hover:text-white transition-colors"
                      >
                        <span>{item.sampleLabel}</span>
                        <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
