import VGlass3D from "./VGlass3D";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line pb-12 pt-10 sm:pb-16 sm:pt-16 md:pt-20">
      <div className="absolute inset-0 z-0">
        <div
          className="blob h-[680px] w-[680px] opacity-60"
          style={{ top: "-220px", right: "-200px", background: "radial-gradient(circle, rgba(85,241,239,0.55), rgba(85,241,239,0) 70%)" }}
        />
        <div
          className="blob h-[420px] w-[420px] opacity-30"
          style={{ bottom: "-160px", left: "-140px", background: "radial-gradient(circle, rgba(85,241,239,0.18), rgba(85,241,239,0) 70%)" }}
        />
      </div>
      <div className="grid-lines" />

      {/* V-glass hero visual: interactive 3D, drag to rotate, scroll to zoom */}
      <div className="pointer-events-none absolute right-[-45px] top-[15px] z-[1] h-[290px] w-[290px] opacity-40 sm:pointer-events-auto sm:opacity-100 sm:right-[-60px] sm:top-[10px] sm:h-[435px] sm:w-[420px] md:right-[-40px] md:h-[540px] md:w-[520px]">
        <VGlass3D />
      </div>

      <div className="container-vibe relative z-[3] pointer-events-none">
        <p className="pill-glass text-[11px] sm:text-xs mb-6 sm:mb-7 animate-fade-up [animation-delay:0ms]">
          <span className="dot"></span>Presença própria, não presença alugada
        </p>

        <h1 className="max-w-3xl font-display text-[clamp(2.15rem,9.5vw,3.6rem)] leading-[0.98] font-extrabold uppercase tracking-tight text-fg animate-fade-up [animation-delay:80ms] sm:text-7xl sm:leading-[1.02] md:text-8xl break-words">
          Seu Instagram cresce.
          <br />
          <span className="glow-cyan">Seu negócio, não.</span>
        </h1>

        <p className="mt-5 max-w-lg text-base text-fg-muted animate-fade-up [animation-delay:160ms] sm:mt-8 sm:text-lg md:text-xl">
          A gente transforma audiência alugada em{" "}
          <strong className="font-semibold text-fg">site, funil e sistema que ficam com você</strong>{" "}
          — não com o algoritmo. Design de alto impacto, na velocidade
          da inteligência artificial.
        </p>

        <div className="pointer-events-auto mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-fade-up [animation-delay:240ms]">
          <a
            href="#final-cta"
            className="rounded-full bg-cyan px-7 py-3.5 text-center font-body text-sm font-semibold text-black shadow-[0_18px_50px_-14px_rgba(85,241,239,0.55)] transition-transform hover:scale-[1.03]"
          >
            Agendar demo
          </a>
          <a
            href="#como-funciona"
            className="rounded-full border border-line px-7 py-3.5 text-center font-body text-sm font-semibold text-fg transition-colors hover:border-cyan hover:text-cyan"
          >
            Ver como funciona
          </a>
        </div>
      </div>

      <div className="grain" />
    </section>
  );
}
