"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface FinalCtaProps {
  onOpenBooking?: () => void;
}

export default function FinalCta({ onOpenBooking }: FinalCtaProps) {
  const waLink =
    "https://wa.me/5592992027059?text=" +
    encodeURIComponent("Olá! Vim pelo site da VIBE Design Tech e gostaria de agendar uma Análise de 20 minutos para o meu projeto.");

  return (
    <section id="final-cta" className="relative overflow-hidden border-b border-line py-16 sm:py-24 md:py-32 bg-[#020507]">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div
          className="blob h-[560px] w-[560px] opacity-40 animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(85,241,239,0.5), rgba(85,241,239,0) 70%)",
            animationDuration: "6s",
          }}
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] w-[220px] sm:w-[340px] -translate-x-1/2 -translate-y-1/2 opacity-[0.16]">
        <Image src="/v-glass.webp" alt="" width={1094} height={1134} className="v-glass h-auto w-full" aria-hidden />
      </div>

      <div className="container-vibe relative z-[3] text-center">
        <ScrollReveal direction="up" delay={50}>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-mono font-semibold text-cyan mb-4 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span>/ ANÁLISE ESTRATÉGICA SEM COMPROMISSO</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <h2 className="mx-auto max-w-3xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
            Sua presença própria começa numa <br />
            <span className="text-cyan glow-cyan">conversa de 20 minutos.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={250}>
          <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-base sm:text-[20px] md:text-[22px] leading-relaxed text-fg-muted">
            Mostramos como ficaria a estrutura ideal para seu consultório ou assessoria, sem empurrar vendas. Você decide os próximos passos com clareza total.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={350}>
          <div className="mt-8 sm:mt-9 flex flex-col items-stretch sm:items-center justify-center gap-3 sm:gap-4 sm:flex-row">
            {onOpenBooking ? (
              <button
                type="button"
                onClick={onOpenBooking}
                className="btn-cyan gap-3 px-8 py-4 font-body text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_35px_rgba(85,241,239,0.5)] cursor-pointer"
              >
                <span>Agendar Análise de 20 min</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            ) : (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan gap-3 px-8 py-4 font-body text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_35px_rgba(85,241,239,0.5)]"
              >
                <span>Agendar Análise de 20 min</span>
              </a>
            )}

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline gap-2.5 px-6 py-4 font-body text-sm font-medium hover:border-cyan/50 hover:scale-[1.02]"
            >
              <svg className="h-4 w-4 fill-current text-cyan" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.77.814 2.791.814 3.178 0 5.767-2.587 5.767-5.766.001-3.18-2.586-5.766-5.767-5.766zm9.969 5.766c-.004 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654 1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414z" />
              </svg>
              <span>Tirar dúvidas no WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/vibedesigntech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-body text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-[#E1306C] hover:bg-[#E1306C]/15 hover:shadow-[0_0_30px_rgba(225,48,108,0.4)] hover:-translate-y-0.5"
            >
              <svg className="h-4 w-4 fill-current text-[#E1306C]" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span>Instagram @vibedesigntech</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
