import HeroInteractive from "./HeroInteractive";

export default function Hero() {
  return (
    <section id="top" className="hero relative overflow-hidden border-b border-line pb-14 pt-10 sm:pb-20 sm:pt-16 md:pt-20">
      {/* Background ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="blob h-[680px] w-[680px] opacity-50"
          style={{ top: "-220px", right: "-200px", background: "radial-gradient(circle, rgba(85,241,239,0.5), rgba(85,241,239,0) 70%)" }}
        />
        <div
          className="blob h-[420px] w-[420px] opacity-25"
          style={{ bottom: "-160px", left: "-140px", background: "radial-gradient(circle, rgba(85,241,239,0.18), rgba(85,241,239,0) 70%)" }}
        />
      </div>
      <div className="grid-lines" />

      {/* Grid com texto na esquerda e o componente interativo no lugar do V na direita */}
      <div className="container-vibe relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="hero-content lg:col-span-7 text-center md:text-left mx-auto md:mx-0">
            <p className="pill-glass text-[11px] sm:text-xs inline-flex mb-4 sm:mb-6">
              <span className="dot" />
              Sites e sistemas para negócios de saúde e fitness
            </p>

            <h1 className="font-display text-[clamp(2.35rem,8.5vw,4.2rem)] leading-[0.95] font-extrabold uppercase tracking-tight text-fg sm:text-7xl sm:leading-[0.98] md:text-8xl break-words">
              Seu Instagram
              <br />
              atrai.
              <br />
              Seu site converte.
            </h1>

            {/* Componente Interativo no Mobile */}
            <div className="my-8 block lg:hidden">
              <HeroInteractive />
            </div>

            <p className="subtext mt-0 md:mt-8 max-w-xl text-[0.9375rem] sm:text-base md:text-xl leading-relaxed text-fg-muted mx-auto md:mx-0">
              Criamos sites, funis e sistemas que explicam seu método, organizam suas provas e levam o lead até o agendamento — sem depender apenas do direct ou do algoritmo.
            </p>

            <div className="hero-ctas mt-6 sm:mt-8 flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
              <a
                href="#final-cta"
                className="btn-cyan rounded-full bg-cyan px-5 sm:px-7 py-3 sm:py-3.5 text-center font-body text-xs sm:text-sm font-semibold text-black shadow-[0_0_25px_rgba(85,241,239,0.5)] transition-transform hover:scale-[1.03] whitespace-nowrap"
              >
                Agendar análise
              </a>
              <a
                href="#como-funciona"
                className="btn-outline rounded-full border border-white/20 bg-white/[0.04] px-5 sm:px-7 py-3 sm:py-3.5 text-center font-body text-xs sm:text-sm font-semibold text-fg transition-colors hover:border-cyan hover:text-cyan whitespace-nowrap"
              >
                Ver como funciona
              </a>
            </div>
          </div>

          {/* Coluna do Componente Interativo no Desktop (no lugar do V) */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <HeroInteractive />
          </div>
        </div>
      </div>

      <div className="grain" />
    </section>
  );
}
