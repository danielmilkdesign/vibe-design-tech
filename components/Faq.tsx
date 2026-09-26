"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "O domínio está incluído?",
    answer:
      "O domínio pode ser contratado à parte ou conectado ao projeto. A gente orienta o registro para que a propriedade fique sempre com você.",
  },
  {
    question: "Eu posso editar o conteúdo?",
    answer:
      "Sim. No Site Base, você recebe acesso ao painel para editar fotos e textos. Nos planos com suporte, a equipe também pode fazer as atualizações combinadas.",
  },
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer:
      "O prazo depende do plano e do envio dos materiais. Na demo, apresentamos o cronograma adequado ao seu projeto antes de começar.",
  },
  {
    question: "Preciso ter logo, fotos e textos prontos?",
    answer:
      "Não necessariamente. A conversa inicial serve justamente para mapear o que você já tem, o que precisa ser organizado e o que deve ser produzido.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. Todos os projetos são pensados mobile-first e testados para celular, tablet e desktop.",
  },
  {
    question: "O que acontece depois da demo?",
    answer:
      "Você recebe uma recomendação do caminho mais adequado ao seu momento. A contratação só acontece se fizer sentido para você.",
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
      <div
        className="pointer-events-none absolute -right-28 bottom-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(13,82,81,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="container-vibe relative z-[1]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna Esquerda - Título e Informações */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-cyan">/ FAQ</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.98] text-fg break-words">
              ANTES DE COMEÇAR,
              <br />
              <span className="text-cyan glow-cyan">TIRE O RUÍDO.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed text-fg-muted">
              Sem promessa nebulosa. Sem letra miúda escondida. Se ainda faltar alguma resposta, a demo é o lugar certo para perguntar.
            </p>

            <div className="mt-8">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-b border-cyan/40 pb-1 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan transition-all hover:border-cyan hover:text-cyan"
              >
                <span>FALAR COM A EQUIPE</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna Direita - Accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="group transition-colors duration-200">
                    <button
                      type="button"
                      onClick={() => toggleItem(idx)}
                      className="flex w-full items-center justify-between py-6 text-left transition-colors duration-200 group-hover:text-cyan focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 font-display text-lg sm:text-2xl font-extrabold uppercase tracking-wide text-white transition-colors duration-200 group-hover:text-cyan">
                        {item.question}
                      </span>
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan transition-all duration-300 group-hover:border-cyan/50 group-hover:bg-cyan/10">
                        <svg
                          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base leading-relaxed text-fg-muted font-body">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
