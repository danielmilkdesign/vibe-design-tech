import Image from "next/image";

export default function SampleDelivery() {
  return (
    <section id="amostra" className="relative overflow-hidden border-b border-line bg-[#030909] py-16 md:py-28">
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="blob h-[580px] w-[580px] opacity-40"
          style={{ top: "10%", right: "-100px", background: "radial-gradient(circle, rgba(13,82,81,0.6), rgba(0,0,0,0) 70%)" }}
        />
        <div
          className="blob h-[420px] w-[420px] opacity-25"
          style={{ bottom: "-80px", left: "-100px", background: "radial-gradient(circle, rgba(85,241,239,0.3), rgba(0,0,0,0) 70%)" }}
        />
      </div>
      <div className="grid-lines" />

      <div className="container-vibe relative z-[1]">
        <div className="grid items-center gap-10 md:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Text */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center">
            <p className="eyebrow text-cyan font-mono text-xs font-bold uppercase tracking-widest">
              / AMOSTRA DE ENTREGA
            </p>

            <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold uppercase leading-[1.02] text-fg break-words">
              Do primeiro clique ao<br />
              <span className="text-cyan glow-cyan">próximo passo.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-fg-muted max-w-lg">
              Uma experiência que organiza a atenção em camadas: posicionamento, prova, ação. Sem excesso, sem ruído.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#caminhos"
                className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan transition-all duration-300 hover:text-white"
              >
                <span className="border-b-2 border-cyan/60 pb-0.5 group-hover:border-white transition-colors">Conhecer os caminhos</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Perspective Showcase with Floating Mini Cards */}
          <div className="md:col-span-7 lg:col-span-7 relative flex items-center justify-center pt-8 pb-8 pr-2 sm:pr-6">
            <div className="relative w-full">
              {/* Card Aura / Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan/20 to-[#0D5251]/40 opacity-70 blur-xl transition-all duration-500" />

              {/* Browser Mockup */}
              <a
                href="https://victor-belichar-personal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full transition-transform duration-500 perspective-1000"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-black/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:scale-[1.01] group-hover:border-cyan/50 sm:rotate-[-2deg] md:rotate-[-3deg] group-hover:rotate-0">
                  {/* Browser bar mockup */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-4 py-2.5 sm:px-5 sm:py-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56]/80" />
                      <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e]/80" />
                      <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f]/80" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-white/40 truncate max-w-[200px] sm:max-w-none">
                      victor-belichar-personal.vercel.app
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Screenshot image */}
                  <div className="relative aspect-[16/9] w-full bg-black">
                    <Image
                      src="/sample-delivery.png"
                      alt="Amostra de Entrega — Victor Belichar Treinador"
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </a>

              {/* Floating Mini Card 1: Top Right (Prova organizada) */}
              <div className="absolute -top-5 -right-2 sm:-top-6 sm:-right-4 lg:-top-7 lg:-right-6 z-20 flex items-center gap-3 rounded-xl border border-white/15 bg-[#061414]/95 px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_16px_36px_rgba(0,0,0,0.85)] backdrop-blur-md transition-all duration-300 hover:border-cyan/50 hover:scale-105 pointer-events-auto">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#0D5251] text-cyan shadow-[0_0_15px_rgba(13,82,81,0.6)]">
                  {/* Sparkle Icon */}
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-fg leading-tight">
                    Prova organizada
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-fg-muted leading-tight mt-0.5">
                    Antes, depois, confiança.
                  </p>
                </div>
              </div>

              {/* Floating Mini Card 2: Bottom Right (Próximo passo claro) */}
              <div className="absolute -bottom-5 -right-2 sm:-bottom-6 sm:-right-4 lg:-bottom-7 lg:-right-6 z-20 flex items-center gap-3 rounded-xl border border-white/15 bg-[#061414]/95 px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_16px_36px_rgba(0,0,0,0.85)] backdrop-blur-md transition-all duration-300 hover:border-cyan/50 hover:scale-105 pointer-events-auto">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#55F1EF] text-black shadow-[0_0_15px_rgba(85,241,239,0.45)]">
                  {/* Clock Icon */}
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 7v5l3 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-fg leading-tight">
                    Próximo passo claro
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-fg-muted leading-tight mt-0.5">
                    WhatsApp + agenda.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
