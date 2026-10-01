"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  setupPrice: string;
  monthlyPrice: string;
  billingDetail: string;
  deliveryTime: string;
  image: string;
  highlight: boolean;
  forWhom: string;
  deliverables: string[];
  ownershipNote: string;
  waMsg: string;
}

const plans: PlanItem[] = [
  {
    id: "site-base",
    name: "Presença Própria",
    tagline: "Estrutura validada com identidade personalizada",
    badge: "ENTRADA RÁPIDA • ESTRUTURA VALIDADA",
    setupPrice: "R$ 1.500",
    monthlyPrice: "+ R$ 99/mês",
    billingDetail: "Setup em até 3x • Hospedagem e suporte inclusos",
    deliveryTime: "Entrega em até 7 dias úteis",
    image: "/site-base.png",
    highlight: false,
    forWhom: "Profissionais que precisam de presença própria imediata com baixo investimento inicial e alta conversão.",
    deliverables: [
      "One-page completa: Apresentação, Método, Prova e Contato",
      "Identidade visual personalizada (suas cores, fontes, fotos e logotipo)",
      "Painel intuitivo para você editar fotos e textos quando quiser",
      "Hospedagem ultrarrápida inclusa (zero preocupação com servidor)",
      "Botão WhatsApp direto integrado e rastreamento de conversão",
      "Design 100% responsivo para celular, tablet e computador",
    ],
    ownershipNote: "O domínio é 100% seu. Cancele a hospedagem quando quiser sem multas.",
    waMsg: "Olá! Gostaria de saber mais sobre o plano Presença Própria (R$ 1.500 setup + R$ 99/mês).",
  },
  {
    id: "esteira-crescimento",
    name: "Esteira de Crescimento",
    tagline: "Site Exclusivo + Design para Redes Sociais & Assessoria Mensal.",
    badge: "MAIS ESCOLHIDO • GERAÇÃO DE LEADS",
    setupPrice: "R$ 2.200",
    monthlyPrice: "+ R$ 890/mês",
    billingDetail: "Setup do Site + Assessoria Mensal de Redes & Otimização",
    deliveryTime: "Entrega em até 10 a 14 dias úteis",
    image: "/site-personalizacao.png",
    highlight: true,
    forWhom: "Especialistas e empresas que buscam diferenciação máxima, atração de clientes nas redes sociais e assessoria contínua da equipe VIBE.",
    deliverables: [
      "Site Exclusivo: Layout desenhado sob medida + Agendamento",
      "Design para Redes Sociais: 12 artes estratégicas por mês",
      "Copywriting Estratégico: Textos focados em converter seguidores",
      "Compliance Ético: Conteúdo dentro das regras do seu conselho",
      "Assessoria Mensal: Reuniões de calibração para vender mais",
    ],
    ownershipNote: "Domínio próprio garantido. Parceria contínua focada em geração real de leads e agendamentos.",
    waMsg: "Olá! Gostaria de agendar uma análise para a Esteira de Crescimento (R$ 2.200 setup + R$ 890/mês).",
  },
  {
    id: "sistema-completo",
    name: "Sistema Sob Medida",
    tagline: "Plataforma Web, automações WhatsApp e gestão",
    badge: "CLÍNICAS & ESTÚDIOS • ESCALA",
    setupPrice: "Sob consulta",
    monthlyPrice: "Conforme escopo",
    billingDetail: "Projeto arquitetado sob medida para sua operação",
    deliveryTime: "Cronograma por sprint",
    image: "/app-sistema-completo.png",
    highlight: false,
    forWhom: "Clínicas com múltiplos profissionais, estúdios ou assessorias que precisam de automações inteligentes e painel de gestão.",
    deliverables: [
      "Plataforma Web ou WebApp totalmente sob medida (Next.js / Node)",
      "Automações de atendimento inteligente via WhatsApp API & n8n",
      "Agendamento multi-profissional para clínicas e secretárias",
      "Dashboard de métricas, gestão de pacientes/alunos e CRM",
      "Integração com sistemas de prontuário, pagamento e notas fiscais",
      "Consultoria contínua de tecnologia e arquitetura de produto",
    ],
    ownershipNote: "Código e infraestrutura dedicados com total autonomia para o seu negócio.",
    waMsg: "Olá! Gostaria de um orçamento para o Sistema Sob Medida / Clínica Pro.",
  },
];

interface PlansProps {
  onOpenBooking?: () => void;
}

export default function Plans({ onOpenBooking }: PlansProps) {
  const [esteiraTier, setEsteiraTier] = useState<"simples" | "completa">("completa");

  const getWaLink = (msg: string) =>
    `https://wa.me/5592992027059?text=${encodeURIComponent(msg)}`;

  return (
    <section id="planos" className="relative overflow-hidden border-b border-line bg-[#04090b] py-16 md:py-28">
      <div className="grid-lines" />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[700px] -translate-x-1/2 opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(85,241,239,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="container-vibe relative z-[1]">
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow text-cyan font-mono text-xs uppercase tracking-widest">
              / SOLUÇÕES & INVESTIMENTO
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
              Estruturas claras.<br />
              <span className="text-cyan glow-cyan">Sem custos ocultos.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-fg-muted leading-relaxed">
              Do modelo de entrada em 7 dias a sistemas sob medida para clínicas. Escolha o caminho ideal para o momento do seu negócio.
            </p>
          </div>
        </ScrollReveal>

        {/* Unified 3-Card Grid */}
        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((plan, idx) => {
            const isEsteira = plan.id === "esteira-crescimento";

            const currentBadge = isEsteira
              ? esteiraTier === "simples"
                ? "5 ARTES • MANUTENÇÃO"
                : "MAIS ESCOLHIDO • 12 ARTES & ASSESSORIA"
              : plan.badge;

            const currentTagline = isEsteira
              ? esteiraTier === "simples"
                ? "Site Exclusivo + 5 artes para redes sociais, 5 alterações do site e manutenção."
                : "Site Exclusivo + Design para Redes Sociais & Assessoria Mensal."
              : plan.tagline;

            const currentMonthlyPrice = isEsteira
              ? esteiraTier === "simples"
                ? "+ R$ 390/mês"
                : "+ R$ 890/mês"
              : plan.monthlyPrice;

            const currentBillingDetail = isEsteira
              ? esteiraTier === "simples"
                ? "Setup do Site + 5 Artes/mês, 5 Alterações e Manutenção"
                : "Setup do Site + Assessoria Mensal de Redes & Otimização"
              : plan.billingDetail;

            const currentDeliverables = isEsteira
              ? esteiraTier === "simples"
                ? [
                    "Site Exclusivo: Layout desenhado sob medida + Agendamento",
                    "Design para Redes Sociais: 5 artes estratégicas por mês",
                    "Alterações no Site: Até 5 alterações de fotos/textos por mês",
                    "Manutenção & Suporte: Hospedagem ultrarrápida e suporte técnico",
                    "Compliance Ético: Conteúdo alinhado às regras do seu conselho",
                  ]
                : [
                    "Site Exclusivo: Layout desenhado sob medida + Agendamento",
                    "Design para Redes Sociais: 12 artes estratégicas por mês",
                    "Copywriting Estratégico: Textos focados em converter seguidores",
                    "Compliance Ético: Conteúdo dentro das regras do seu conselho",
                    "Assessoria Mensal: Reuniões de calibração para vender mais",
                  ]
              : plan.deliverables;

            const currentOwnershipNote = isEsteira
              ? esteiraTier === "simples"
                ? "Domínio próprio garantido. Manutenção contínua e redes sociais com design profissional."
                : "Domínio próprio garantido. Parceria contínua focada em geração real de leads e agendamentos."
              : plan.ownershipNote;

            const currentWaMsg = isEsteira
              ? esteiraTier === "simples"
                ? "Olá! Gostaria de agendar uma análise para a Esteira de Crescimento Essencial (R$ 2.200 setup + R$ 390/mês - 5 artes e manutenção)."
                : "Olá! Gostaria de agendar uma análise para a Esteira de Crescimento Completa (R$ 2.200 setup + R$ 890/mês - 12 artes e assessoria)."
              : plan.waMsg;

            return (
              <ScrollReveal key={plan.id} direction="up" delay={150 * (idx + 1)}>
                <SpotlightCard
                  enableTilt
                  spotlightColor={plan.highlight ? "rgba(85, 241, 239, 0.22)" : "rgba(85, 241, 239, 0.12)"}
                  className={`group flex flex-col justify-between rounded-3xl border transition-all duration-300 h-full overflow-hidden ${
                    plan.highlight
                      ? "border-cyan/50 bg-[#081517] shadow-[0_20px_50px_-10px_rgba(85,241,239,0.25)] hover:border-cyan"
                      : "border-white/10 bg-[#090e11] hover:border-[#1FA2A0] hover:bg-[#0c1518]"
                  }`}
                >
                  <div>
                    {/* Card Mockup Visual Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 border-b border-white/10">
                      <Image
                        src={plan.image}
                        alt={plan.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090e11] via-transparent to-transparent opacity-80" />

                      {/* Prazo Badge sobre a imagem */}
                      <div className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/80 px-3 py-1 font-mono text-[10px] text-white backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                        <span>{plan.deliveryTime}</span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      {/* Badge */}
                      <span className={`inline-block font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${
                        plan.highlight ? "text-cyan" : "text-fg-muted"
                      }`}>
                        {currentBadge}
                      </span>

                      {/* Name & Tagline */}
                      <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold uppercase text-white leading-tight">
                        {plan.name}
                      </h3>
                      <p className="mt-1 text-xs text-fg-muted leading-relaxed">
                        {currentTagline}
                      </p>

                      {/* Seletor de Modalidade exclusivo da Esteira */}
                      {isEsteira && (
                        <div className="mt-3.5 flex gap-1 rounded-full border border-cyan/25 bg-black/60 p-1">
                          <button
                            type="button"
                            onClick={() => setEsteiraTier("simples")}
                            className={`flex-1 rounded-full py-1.5 px-2 font-mono text-[11px] font-bold transition-all cursor-pointer ${
                              esteiraTier === "simples"
                                ? "bg-cyan text-black shadow-[0_0_12px_rgba(85,241,239,0.35)]"
                                : "text-fg-muted hover:text-white"
                            }`}
                          >
                            5 Artes • R$ 390/mês
                          </button>
                          <button
                            type="button"
                            onClick={() => setEsteiraTier("completa")}
                            className={`flex-1 rounded-full py-1.5 px-2 font-mono text-[11px] font-bold transition-all cursor-pointer ${
                              esteiraTier === "completa"
                                ? "bg-cyan text-black shadow-[0_0_12px_rgba(85,241,239,0.35)]"
                                : "text-fg-muted hover:text-white"
                            }`}
                          >
                            12 Artes • R$ 890/mês ★
                          </button>
                        </div>
                      )}

                      {/* Preço */}
                      <div className="mt-4 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                            {plan.setupPrice}
                          </span>
                          {currentMonthlyPrice && (
                            <span className="font-mono text-sm sm:text-base font-semibold text-cyan">
                              {currentMonthlyPrice}
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 font-mono text-[11px] text-fg-muted">
                          {currentBillingDetail}
                        </p>
                      </div>

                      <p className="mt-4 text-xs sm:text-[13px] text-fg-muted italic leading-relaxed">
                        {plan.forWhom}
                      </p>

                      {/* Deliverables List */}
                      <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-cyan font-bold mb-3">
                          O que está incluso:
                        </p>
                        <ul className="space-y-2.5 text-xs sm:text-[13px] text-fg leading-snug">
                          {currentDeliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <svg className="h-4 w-4 shrink-0 text-cyan mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Footer do Card com CTA e Nota de Propriedade */}
                  <div className="p-6 sm:p-7 pt-0">
                    <div className="mb-4 rounded-xl bg-cyan/[0.04] p-3 border border-cyan/15 text-[11px] font-mono text-cyan/90 leading-tight">
                      ✓ {currentOwnershipNote}
                    </div>

                    <div className="flex flex-col gap-2">
                      {onOpenBooking ? (
                        <button
                          type="button"
                          onClick={onOpenBooking}
                          className={`w-full py-3.5 text-center text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                            plan.highlight
                              ? "btn-cyan shadow-[0_0_25px_rgba(85,241,239,0.35)] hover:scale-[1.02]"
                              : "btn-outline hover:border-cyan/50 hover:scale-[1.02]"
                          }`}
                        >
                          Agendar Análise Estratégica
                        </button>
                      ) : (
                        <a
                          href={getWaLink(currentWaMsg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3.5 text-center text-xs sm:text-sm font-semibold rounded-full btn-outline"
                        >
                          Conversar no WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
