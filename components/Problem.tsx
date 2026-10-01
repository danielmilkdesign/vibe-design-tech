"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    title: "Sem Funil no Direct",
    badge: "CONVERSÃO TRAVADA",
    body: "Todo lead cai na mesma conversa desorganizada do direct. Sem uma página que filtra, explica seu método e prepara a decisão antes do WhatsApp, você perde tempo negociando e fecha por insistência — não por processo.",
    image: "/problem-funil.jpg",
  },
  {
    title: "Sem Prova Estruturada",
    badge: "CONFIANÇA EFÊMERA",
    body: "Seus resultados, depoimentos e transformações viram stories que somem em 24h. Sem um lugar fixo e profissional para demonstrar autoridade (dentro das normas do seu conselho), cada novo prospect começa a confiar do zero.",
    image: "/problem-prova.jpg",
  },
  {
    title: "Percepção de Valor Travada",
    badge: "PREÇO COMPARADO",
    body: "Seu preço trava porque a apresentação parece informal. Sem presença própria, o cliente compara seu honorário ou mensalidade com qualquer amador das redes sociais, em vez de enxergar o valor de um acompanhamento comprovado.",
    image: "/problem-recorrencia.jpg",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="relative overflow-hidden border-b border-line bg-[#060b0d] py-16 md:py-28">
      <div className="grid-lines" />
      <div className="container-vibe relative z-[1]">
        <ScrollReveal direction="up" delay={50}>
          <p className="eyebrow text-cyan font-mono text-xs uppercase tracking-widest">
            / O PROBLEMA • A LOJA ALUGADA
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
              O link da bio é uma porta.<br />
              <span className="text-cyan glow-cyan">Não é uma casa.</span>
            </h2>
            <p className="max-w-md text-sm sm:text-base text-fg-muted leading-relaxed">
              Você pode continuar refém das oscilações do algoritmo — ou começar a construir uma estrutura própria que trabalha pelo seu posicionamento 24h por dia.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={150 * (idx + 1)}>
              <div className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d1216] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)] h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1216] via-transparent to-transparent opacity-70 pointer-events-none" />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-cyan mb-2">
                    {item.badge}
                  </span>
                  <h3 className="font-display text-2xl sm:text-[1.65rem] font-extrabold uppercase tracking-tight text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-[14px] leading-relaxed text-fg-muted group-hover:text-white/90 transition-colors">
                    {item.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
