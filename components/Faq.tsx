"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqItems = [
  {
    question: "Serve para a minha profissão na área de saúde ou bem-estar?",
    answer:
      "Sim. Nossa estrutura é desenhada especificamente para profissionais que vendem por confiança e relacionamento: Personal Trainers, Consultorias Esportivas, Nutricionistas, Fisioterapeutas, Psicólogos, Médicos e Clínicas Integradas. Adaptamos a linguagem do método, a estrutura de agendamento e a exibição de provas conforme as normas específicas da sua profissão.",
  },
  {
    question: "Quanto tempo leva para o meu site ficar pronto?",
    answer:
      "O prazo é objetivo e acordado antes de começar: para o Site Base, a entrega é em até 7 dias úteis após o envio dos materiais básicos (fotos, logotipo e dados de contato). Para o plano Site + Personalização, o prazo é de 10 a 14 dias úteis devido ao desenho de interface exclusivo e integração de agenda.",
  },
  {
    question: "Como funcionam o setup, a mensalidade e o cancelamento? O site continua meu?",
    answer:
      "A taxa de setup cobre o trabalho de arquitetura, design e personalização da sua estrutura. A mensalidade cobre a infraestrutura de hospedagem ultrarrápida, certificados SSL, manutenções preventivas e suporte técnico. O domínio é sempre 100% de sua propriedade. Você pode cancelar a hospedagem quando quiser, sem contratos de amarração ou multas rescisórias.",
  },
  {
    question: "Como é garantido o compliance com meu conselho (CFN, CREFITO, CFP, CFM)?",
    answer:
      "Conhecemos as restrições éticas de cada categoria — como as regras do CFN sobre garantias de emagrecimento, as normas do CREFITO e CFM sobre mercantilização e a vedação rigorosa do CFP sobre antes/depois. Construímos uma autoridade elegante baseada em depoimentos e metodologia, sem risco de você receber notificações do seu conselho de classe.",
  },
  {
    question: "O que acontece na Análise de 20 minutos?",
    answer:
      "É uma reunião rápida e objetiva com os fundadores da VIBE. Nós analisamos seu momento, mapeamos os gargalos de conversão do seu direct e apresentamos a estrutura de presença própria mais adequada. A contratação só acontece se você enxergar retorno real para o seu negócio.",
  },
  {
    question: "Preciso ter logotipo, fotos profissionais e textos prontos?",
    answer:
      "Não necessariamente. A conversa inicial serve justamente para mapear o que você já possui e organizar o que falta. Nossa equipe orienta os formatos de fotos recomendados e cuida da redação persuasiva e estratégica do seu método.",
  },
  {
    question: "O site funciona com carregamento rápido no celular?",
    answer:
      "Absolutamente. Como a grande maioria do seu público vem de links no Instagram, cada página é construída com metodologia mobile-first em Next.js e React, garantindo carregamento quase instantâneo e excelente usabilidade mesmo em redes 4G/5G.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const waLink =
    "https://wa.me/5592992027059?text=" +
    encodeURIComponent("Olá! Vim pelo FAQ da VIBE Design Tech e gostaria de tirar algumas dúvidas.");

  return (
    <section id="faq" className="relative overflow-hidden border-b border-line bg-bg-alt py-16 md:py-28">
      <div className="grid-lines" />

      {/* Glows sutis da identidade visual VIBE */}
      <div
        className="pointer-events-none absolute -left-28 top-1/4 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(85,241,239,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="container-vibe relative z-[1]">
        <ScrollReveal direction="up" delay={50}>
          <div className="max-w-2xl">
            <p className="eyebrow text-cyan font-mono text-xs uppercase tracking-widest">/ Dúvidas Frequentes</p>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
              Perguntas &<br />
              <span className="text-cyan glow-cyan">Respostas</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-fg-muted leading-relaxed">
              Tudo o que você precisa saber sobre prazos, conformidade ética, domínio e processo de entrega.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="mt-10 sm:mt-14 max-w-4xl space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={item.question} direction="up" delay={50 * (index + 1)}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-cyan/50 bg-[#071314] shadow-[0_10px_30px_-10px_rgba(85,241,239,0.2)]"
                      : "border-white/10 bg-[#0d0d0d] hover:border-white/20 hover:bg-[#121212]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg sm:text-xl font-bold uppercase text-white leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-cyan bg-cyan text-black rotate-180 shadow-[0_0_15px_rgba(85,241,239,0.5)]"
                          : "border-white/20 bg-white/5 text-fg-muted"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-5 pb-6 pt-4 sm:px-6">
                      <p className="text-sm sm:text-base leading-relaxed text-fg-muted font-body">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Floating Call to Action no final da FAQ */}
        <ScrollReveal direction="up" delay={450}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm">
            <div>
              <h4 className="font-display text-base sm:text-lg font-bold uppercase text-white">
                Sua dúvida não está aqui?
              </h4>
              <p className="text-xs sm:text-sm text-fg-muted">
                Fale diretamente com nossa equipe no WhatsApp para um esclarecimento rápido.
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-5 py-2.5 font-mono text-xs font-semibold text-cyan hover:bg-cyan/20 hover:border-cyan transition-all shrink-0"
            >
              <span>Conversar no WhatsApp</span>
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.77.814 2.791.814 3.178 0 5.767-2.587 5.767-5.766.001-3.18-2.586-5.766-5.767-5.766zm9.969 5.766c-.004 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654 1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414z" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
