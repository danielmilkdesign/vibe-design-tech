export default function WhatChanges() {
  const items = [
    {
      num: "01",
      tag: "CLAREZA",
      title: "O visitante entende o próximo passo.",
      body: "Seu método, sua oferta e seu diferencial deixam de depender de explicações no direct.",
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
      tag: "PROVA",
      title: "Seu resultado continua trabalhando.",
      body: "Antes e depois, depoimentos e transformações ganham um lugar fixo para construir confiança.",
      icon: (
        <svg className="h-6 w-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "03",
      tag: "CONVERSÃO",
      title: "A atenção vira ação.",
      body: "O lead chega mais preparado ao WhatsApp, ao agendamento ou ao próximo passo da venda.",
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
        <p className="eyebrow text-cyan">/ O que muda</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
          Não entregamos só um site.<br />
          <span className="text-cyan glow-cyan">Construímos uma estrutura.</span>
        </h2>

        <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.num}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl sm:text-3xl font-bold tracking-wider text-cyan drop-shadow-[0_0_12px_rgba(85,241,239,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(85,241,239,0.65)]">
                    {item.num}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:border-[#1FA2A0]/60 group-hover:bg-[#0D5251]/25">
                    {item.icon}
                  </div>
                </div>

                <p className="mt-6 font-mono text-xs font-bold uppercase tracking-widest text-cyan">
                  {item.tag}
                </p>

                <h3 className="mt-3 font-display text-2xl sm:text-[1.75rem] font-extrabold uppercase leading-tight tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-white/80">
                  {item.body}
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-2 transition-colors duration-300 group-hover:border-[#1FA2A0]/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
