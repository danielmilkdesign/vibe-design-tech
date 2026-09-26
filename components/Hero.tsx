export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line pb-12 pt-8 sm:pb-16 sm:pt-14 md:pt-20">
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

      <div className="container-vibe relative z-[3]">
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-center gap-y-3 md:gap-x-8 text-center md:text-left">
          
          {/* 1. Eyebrow badge */}
          <div className="order-1 md:col-span-7 flex justify-center md:justify-start">
            <p className="pill-glass text-[11px] sm:text-xs">
              <span className="dot" />
              Presença própria, não presença alugada
            </p>
          </div>

          {/* 2. Headline */}
          <div className="order-2 md:col-span-7">
            <h1 className="font-display text-[clamp(2.35rem,10vw,3.75rem)] leading-[0.98] font-extrabold uppercase tracking-tight text-fg sm:text-7xl sm:leading-[1.02] md:text-8xl break-words">
              Seu Instagram cresce.
              <br />
              <span className="glow-cyan text-cyan">Seu negócio, não.</span>
            </h1>
          </div>

          {/* 3. 3D V Video animation: on mobile order-3 (between title and text); on desktop placed on the right */}
          <div className="order-3 md:col-span-5 md:col-start-8 md:row-start-1 md:row-span-4 relative flex items-center justify-center my-3 md:my-0 h-[220px] sm:h-[270px] md:h-[480px] w-full max-w-[260px] md:max-w-none mx-auto pointer-events-none">
            <div className="relative h-full w-full flex items-center justify-center">
              <video
                className="absolute inset-0 h-full w-full object-contain mix-blend-screen opacity-75 blur-[28px]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Create_3D_V_video_202608251618.mp4" type="video/mp4" />
              </video>
              <video
                className="relative h-full w-full object-contain mix-blend-screen"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Create_3D_V_video_202608251618.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* 4. Description Subtext */}
          <div className="order-4 md:col-span-7">
            <p className="mx-auto md:mx-0 max-w-lg text-[0.9375rem] sm:text-base md:text-lg leading-relaxed text-fg-muted">
              A gente transforma audiência alugada em site, funil e sistema que ficam com você — não com o algoritmo. Design de alto impacto, na velocidade da inteligência artificial.
            </p>
          </div>

          {/* 5. Action CTAs */}
          <div className="order-5 md:col-span-7 mt-3 md:mt-6 flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
            <a
              href="#final-cta"
              className="rounded-full bg-cyan px-5 sm:px-7 py-3 sm:py-3.5 text-center font-body text-xs sm:text-sm font-semibold text-black shadow-[0_0_25px_rgba(85,241,239,0.5)] transition-transform hover:scale-[1.03] whitespace-nowrap"
            >
              Agendar análise
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-white/20 bg-white/[0.04] px-5 sm:px-7 py-3 sm:py-3.5 text-center font-body text-xs sm:text-sm font-semibold text-fg transition-colors hover:border-cyan hover:text-cyan whitespace-nowrap"
            >
              Ver como funciona
            </a>
          </div>

        </div>
      </div>

      <div className="grain" />
    </section>
  );
}
