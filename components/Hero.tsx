export default function Hero() {
  return (
    <section id="top" className="hero relative overflow-hidden border-b border-line pb-20 pt-24 sm:pb-24 sm:pt-32 md:pt-36 md:pb-28">
      {/* Background ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="blob h-[720px] w-[720px] opacity-40"
          style={{ top: "-220px", right: "-180px", background: "radial-gradient(circle, rgba(85,241,239,0.35), rgba(85,241,239,0) 70%)" }}
        />
        <div
          className="blob h-[460px] w-[460px] opacity-25"
          style={{ bottom: "-160px", left: "-140px", background: "radial-gradient(circle, rgba(85,241,239,0.18), rgba(85,241,239,0) 70%)" }}
        />
      </div>
      <div className="grid-lines" />

      <div className="container-vibe relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Conteúdo textual */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-display text-[clamp(2.5rem,5vw,72px)] xl:text-[80px] leading-[0.98] font-extrabold uppercase tracking-tight text-white break-words">
              Criamos produtos
              <br />
              digitais de alta
              <br />
              performance que
              <br />
              <span className="glow-cyan text-cyan">
                aceleram o seu
                <br />
                negócio.
              </span>
            </h1>

            <p className="subtext mt-5 sm:mt-7 max-w-xl text-[0.9375rem] sm:text-base md:text-lg leading-relaxed text-fg-muted">
              Unimos design de interface de alto nível, engenharia moderna e IA para construir landing pages, web apps e soluções prontas focadas em conversão.
            </p>

            <div className="hero-ctas mt-7 sm:mt-9 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
              <a
                href="#caminhos"
                className="btn-cyan text-xs sm:text-sm whitespace-nowrap"
              >
                Explorar soluções
              </a>
              <a
                href="#final-cta"
                className="btn-outline text-xs sm:text-sm whitespace-nowrap"
              >
                Agendar Diagnóstico Gratuito
              </a>
            </div>
          </div>

          {/* Coluna Direita: Componente Interativo Genérico (Ampliado) */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <div className="relative w-full aspect-[1760/1328] max-w-[700px] lg:max-w-none mx-auto lg:scale-[1.12] xl:scale-[1.20] origin-center transition-transform">
              {/* Glow sutil atrás do mockup interativo */}
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-cyan/15 blur-3xl opacity-70" />
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
