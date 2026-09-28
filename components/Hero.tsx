export default function Hero() {
  return (
    <section id="top" className="hero relative overflow-hidden border-b border-line pb-16 pt-24 sm:pb-20 sm:pt-32 md:pt-36">
      {/* Background ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="blob h-[680px] w-[680px] opacity-40"
          style={{ top: "-220px", right: "-180px", background: "radial-gradient(circle, rgba(85,241,239,0.35), rgba(85,241,239,0) 70%)" }}
        />
        <div
          className="blob h-[420px] w-[420px] opacity-25"
          style={{ bottom: "-160px", left: "-140px", background: "radial-gradient(circle, rgba(85,241,239,0.18), rgba(85,241,239,0) 70%)" }}
        />
      </div>
      <div className="grid-lines" />

      <div className="container-vibe relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Coluna Esquerda: Conteúdo textual */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="pill-glass text-[11px] sm:text-xs inline-flex mb-4 sm:mb-6">
              <span className="dot" />
              Sites e sistemas para negócios de saúde e fitness
            </p>

            <h1 className="font-display text-[clamp(2.3rem,4.8vw,64px)] xl:text-[72px] leading-[0.98] font-extrabold uppercase tracking-tight text-white break-words">
              Criamos produtos digitais
              <br />
              de alta performance que
              <br />
              <span className="glow-cyan text-cyan">
                aceleram o seu negócio
              </span>
            </h1>

            <p className="subtext mt-5 sm:mt-7 max-w-xl text-[0.9375rem] sm:text-base md:text-lg leading-relaxed text-fg-muted">
              Unimos design de interface de alto nível, engenharia moderna e IA para construir landing pages, web apps e soluções prontas focadas em conversão.
            </p>

            <div className="hero-ctas mt-7 sm:mt-9 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
              <a
                href="#caminhos"
                className="btn-cyan rounded-full bg-cyan px-6 sm:px-8 py-3.5 sm:py-4 text-center font-body text-xs sm:text-sm font-semibold text-black shadow-[0_0_25px_rgba(85,241,239,0.5)] transition-transform hover:scale-[1.03] whitespace-nowrap"
              >
                Explorar soluções
              </a>
              <a
                href="#final-cta"
                className="btn-outline rounded-full border border-white/20 bg-white/[0.04] px-6 sm:px-8 py-3.5 sm:py-4 text-center font-body text-xs sm:text-sm font-semibold text-fg transition-colors hover:border-cyan hover:text-cyan whitespace-nowrap"
              >
                Agendar Diagnóstico Gratuito
              </a>
            </div>
          </div>

          {/* Coluna Direita: Componente Interativo Genérico */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <div className="relative w-full aspect-[1760/1328] max-w-[620px] lg:max-w-none mx-auto">
              {/* Glow sutil atrás do mockup interativo */}
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-cyan/15 blur-3xl opacity-60" />
              <iframe
                src="/vibe-hero-interativo-generico.html"
                title="VIBE Hero Interativo"
                className="w-full h-full border-0 bg-transparent overflow-hidden select-none"
                style={{ overflow: "hidden" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grain" />
    </section>
  );
}
