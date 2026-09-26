export default function Hero() {
  return (
    <section id="top" className="hero relative overflow-hidden border-b border-line pb-12 pt-10 sm:pb-16 sm:pt-16 md:pt-20">
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

      {/* 3D V Hero video:
          - Mobile: preenche toda a tela (inset-0) com degradê preto suave e máscara radial
          - Web / Desktop: como estava antes, ocupando o lado direito em tela cheia com fade lateral
      */}
      <div className="hero-vglass-wrap pointer-events-none absolute inset-0 z-[1] overflow-hidden md:bottom-0 md:top-0 md:right-0 md:left-auto md:w-[48%]">
        <video
          className="v-glass-blur absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-85 blur-[34px]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Create_3D_V_video_202608251618.mp4" type="video/mp4" />
        </video>
        <video
          className="v-glass relative h-full w-full object-cover mix-blend-screen"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Create_3D_V_video_202608251618.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container-vibe relative z-[3]">
        <div className="hero-content max-w-3xl text-center md:text-left mx-auto md:mx-0">
          <p className="pill-glass text-[11px] sm:text-xs inline-flex mb-4 sm:mb-6">
            <span className="dot" />
            Presença própria, não presença alugada
          </p>

          <h1 className="font-display text-[clamp(2.35rem,9.5vw,3.6rem)] leading-[0.98] font-extrabold uppercase tracking-tight text-fg sm:text-7xl sm:leading-[1.02] md:text-8xl break-words">
            Seu Instagram cresce.
            <br />
            <span className="glow-cyan text-cyan">Seu negócio, não.</span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-lg text-[0.9375rem] sm:text-base md:text-xl leading-relaxed text-fg-muted mx-auto md:mx-0">
            A gente transforma audiência alugada em site, funil e sistema que ficam com você — não com o algoritmo. Design de alto impacto, na velocidade da inteligência artificial.
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
      </div>

      <div className="grain" />
    </section>
  );
}
