"use client";

import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="top" className="hero relative overflow-hidden border-b border-line pb-20 pt-24 sm:pb-24 sm:pt-32 md:pt-36 md:pb-28">
      {/* Background ambient glows with subtle animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="blob h-[720px] w-[720px] opacity-40 animate-pulse"
          style={{
            top: "-220px",
            right: "-180px",
            background: "radial-gradient(circle, rgba(85,241,239,0.35), rgba(85,241,239,0) 70%)",
            animationDuration: "8s",
          }}
        />
        <div
          className="blob h-[460px] w-[460px] opacity-25"
          style={{
            bottom: "-160px",
            left: "-140px",
            background: "radial-gradient(circle, rgba(85,241,239,0.18), rgba(85,241,239,0) 70%)",
          }}
        />
      </div>
      <div className="grid-lines" />

      <div className="container-vibe relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Conteúdo textual */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <ScrollReveal direction="up" delay={100} duration={800}>
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,68px)] xl:text-[68px] leading-[0.98] font-extrabold uppercase tracking-tight text-white break-words">
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
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250} duration={800}>
              <p className="subtext mt-5 sm:mt-7 max-w-xl text-[0.9375rem] sm:text-base md:text-lg leading-relaxed text-fg-muted">
                Unimos design de interface de alto nível, engenharia moderna e IA para construir landing pages, web apps e soluções prontas focadas em conversão.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} duration={800}>
              <div className="hero-ctas mt-7 sm:mt-9 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
                <a
                  href="https://wa.me/5592992027059?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20VIBE%20Design%20Tech%20e%20gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20para%20o%20meu%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyan text-xs sm:text-sm whitespace-nowrap shadow-[0_0_25px_rgba(85,241,239,0.35)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  Agendar Diagnóstico no WhatsApp
                </a>
                <a
                  href="#planos"
                  className="btn-outline text-xs sm:text-sm whitespace-nowrap hover:border-cyan/50 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Ver Planos & Preços
                </a>
              </div>
            </ScrollReveal>

            {/* Micro-prova de confiança */}
            <ScrollReveal direction="up" delay={550} duration={800}>
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-xs text-fg-muted">
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.03] border border-white/10 px-3 py-1 backdrop-blur-sm transition-all hover:border-cyan/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                  <span>Entrega em até 7 dias úteis</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.03] border border-white/10 px-3 py-1 backdrop-blur-sm transition-all hover:border-emerald-400/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Design 100% exclusivo</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Coluna Direita: Componente Interativo Genérico (Ampliado) */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <ScrollReveal direction="none" delay={200} duration={1000} className="w-full">
              <div className="relative w-full aspect-[1760/1328] max-w-[700px] lg:max-w-none mx-auto lg:scale-[1.12] xl:scale-[1.20] origin-center transition-all duration-500 hover:scale-[1.14] xl:hover:scale-[1.22]">
                {/* Glow sutil atrás do mockup interativo com pulso orgânico */}
                <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-cyan/15 blur-3xl opacity-70 animate-pulse" style={{ animationDuration: "6s" }} />
                <iframe
                  src="/vibe-hero-interativo-generico.html"
                  title="VIBE Hero Interativo"
                  className="w-full h-full border-0 bg-transparent overflow-hidden select-none"
                  style={{ overflow: "hidden" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="grain" />
    </section>
  );
}
