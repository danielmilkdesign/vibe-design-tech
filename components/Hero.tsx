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

      {/* 3D V Hero video animation */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden md:bottom-0 md:top-0 md:right-0 md:inset-auto md:w-[48%]">
        <video
          className="absolute inset-0 h-full w-full object-contain md:object-cover mix-blend-screen opacity-80 blur-[34px]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Create_3D_V_video_202608251618.mp4" type="video/mp4" />
        </video>
        <video
          className="relative h-full w-full object-contain md:object-cover mix-blend-screen"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Create_3D_V_video_202608251618.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container-vibe relative z-[3] pointer-events-none">
        <p className="pill-glass text-[11px] sm:text-xs mb-6 sm:mb-7 animate-fade-up [animation-delay:0ms]">
          <span className="dot"></span>Presença própria, não presença alugada
        </p>

        <h1 className="max-w-3xl font-display text-[clamp(2.15rem,9.5vw,3.6rem)] leading-[0.98] font-extrabold uppercase tracking-tight text-fg animate-fade-up [animation-delay:80ms] sm:text-7xl sm:leading-[1.02] md:text-8xl break-words">
          Seu Instagram cresce.
          <br />
          <span className="glow-cyan">Seu site converte.</span>
        </h1>

        <p className="mt-5 max-w-lg text-base text-fg-muted animate-fade-up [animation-delay:160ms] sm:mt-8 sm:text-lg md:text-xl">
          Transformamos sua audiência em uma presença própria que explica seu método, organiza suas provas e leva o lead até o agendamento, sem depender apenas do direct ou do algoritmo.
        </p>

        <div className="pointer-events-auto mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-fade-up [animation-delay:240ms]">
          <a
            href="#final-cta"
            className="rounded-full bg-cyan px-7 py-3.5 text-center font-body text-sm font-semibold text-black shadow-[0_18px_50px_-14px_rgba(85,241,239,0.55)] transition-transform hover:scale-[1.03]"
          >
            Agendar análise
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
