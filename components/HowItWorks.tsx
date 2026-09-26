import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "ENTENDEMOS O CENÁRIO",
      body: "Instagram, atendimento, oferta e os gargalos que estão travando o crescimento.",
    },
    {
      num: "02",
      title: "DESENHAMOS A OPORTUNIDADE",
      body: "O que pode virar página, prova, agendamento ou automação para o seu momento.",
    },
    {
      num: "03",
      title: "CONSTRUÍMOS A ESTRUTURA",
      body: "Design, copy e tecnologia em uma experiência que faz sentido para o seu negócio.",
    },
    {
      num: "04",
      title: "VOCÊ EVOLUI COM CLAREZA",
      body: "Suporte e próximos passos sem dependência de improviso ou promessa nebulosa.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden border-b border-line bg-bg-alt py-16 md:py-28"
    >
      <div className="grid-lines" />

      {/* Glows sutis da identidade visual VIBE (apenas ciano/teal da marca, zero verde) */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(85,241,239,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(13,82,81,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="container-vibe relative z-[1]">
        {/* Header no padrão do site */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-cyan">/ Como funciona</p>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
              EM 20 MINUTOS, VOCÊ SAI
              <br />
              <span className="text-cyan glow-cyan">COM CLAREZA.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-fg-muted leading-relaxed">
            A demo não é uma apresentação genérica. A gente olha para o seu
            negócio e mostra uma estrutura adequada ao seu momento.
          </p>
        </div>

        {/* Grid de Cards dos Passos - Padrão do site */}
        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 sm:px-3.5 sm:py-1.5 transition-colors duration-300 group-hover:border-[#1FA2A0]/60 group-hover:bg-[#0D5251]/25">
                    <span className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-cyan drop-shadow-[0_0_12px_rgba(85,241,239,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(85,241,239,0.65)]">
                      {step.num}
                    </span>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-cyan/60 shadow-[0_0_8px_rgba(85,241,239,0.8)]" />
                </div>

                <h3 className="mt-5 font-display text-xl sm:text-2xl font-extrabold uppercase leading-tight tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {step.body}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-2 transition-colors duration-300 group-hover:border-[#1FA2A0]/40" />
            </div>
          ))}
        </div>

        {/* Barra de Rodapé / Ação no padrão de componentes do site */}
        <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6 rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-cyan flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Atendimento direto com a equipe VIBE</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-cyan flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7v5l3 2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Duração aproximada: 20 minutos</span>
            </div>
          </div>

          <div>
            <a
              href="#final-cta"
              className="btn-cyan group flex w-full md:w-auto items-center justify-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-cyan rounded-full px-6 py-3 transition-transform hover:scale-[1.03] shadow-[0_18px_50px_-14px_rgba(85,241,239,0.55)]"
            >
              <span>QUERO AGENDAR MINHA ANÁLISE</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
