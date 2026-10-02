"use client";

import ScrollReveal from "./ScrollReveal";
import HeroInteractive from "./HeroInteractive";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="top" className="hero relative overflow-hidden border-b border-line pb-16 pt-24 sm:pb-24 sm:pt-32 md:pt-36 md:pb-28">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Coluna Esquerda: Conteúdo textual */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">

            <ScrollReveal direction="up" delay={100} duration={800}>
              <h1 className="font-display text-[clamp(2.5rem,5vw,68px)] xl:text-[68px] leading-[0.96] font-extrabold uppercase tracking-tight text-white break-words">
                Criamos produtos digitais de alta performance
                <br />
                <span className="glow-cyan text-cyan">
                  que aceleram seu negócio.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250} duration={800}>
              <p className="subtext mt-5 sm:mt-6 max-w-xl text-[0.9375rem] sm:text-base md:text-lg leading-relaxed text-fg-muted">
                Unimos design de interface de alto nível, engenharia moderna e IA para construir landing pages, web apps, sites e soluções prontas focadas em conversão e aumento de vendas.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} duration={800}>
              <div className="hero-ctas mt-7 sm:mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
                {onOpenBooking ? (
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="btn-cyan text-xs sm:text-sm whitespace-nowrap shadow-[0_0_25px_rgba(85,241,239,0.35)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Agendar Análise de 20 min
                  </button>
                ) : (
                  <a
                    href="https://wa.me/5592992027059?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20VIBE%20Design%20Tech%20e%20gostaria%20de%20uma%20an%C3%A1lise%20de%2020%20minutos%20para%20o%20meu%20projeto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyan text-xs sm:text-sm whitespace-nowrap shadow-[0_0_25px_rgba(85,241,239,0.35)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Agendar Análise de 20 min
                  </a>
                )}
                <a
                  href="#planos"
                  className="btn-outline text-xs sm:text-sm whitespace-nowrap hover:border-cyan/50 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Conhecer Planos & Estrutura
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Coluna Direita: Showcase Interativo Nativo com Hotspots e Parallax */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <ScrollReveal direction="none" delay={200} duration={1000} className="w-full">
              <HeroInteractive />
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="grain" />
    </section>
  );
}
