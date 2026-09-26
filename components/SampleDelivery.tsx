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
        <div className="grid items-center gap-10 md:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Text */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center">
            <p className="eyebrow text-cyan font-mono text-xs font-bold uppercase tracking-widest">
              AMOSTRA DE ENTREGA
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
                href="https://victor-belichar-personal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan/60 bg-cyan/10 px-6 py-3 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan transition-all duration-300 hover:border-cyan hover:bg-cyan hover:text-black hover:shadow-[0_0_25px_rgba(85,241,239,0.45)] hover:-translate-y-0.5"
              >
                <span>Ver projeto ao vivo</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Perspective Showcase */}
          <div className="md:col-span-7 lg:col-span-7 flex items-center justify-center">
            <a
              href="https://victor-belichar-personal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full transition-transform duration-500 perspective-1000"
            >
              {/* Card Aura / Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan/20 to-[#0D5251]/40 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-black/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-cyan/50 sm:rotate-[-2deg] md:rotate-[-3.5deg] group-hover:rotate-0">
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
          </div>

        </div>
      </div>
    </section>
  );
}
