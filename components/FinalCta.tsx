import Image from "next/image";

export default function FinalCta() {
  const waLink =
    "https://wa.me/5592992027059?text=" +
    encodeURIComponent("Olá! Vim pelo site da VIBE Design Tech e gostaria de agendar uma análise de 20 minutos.");

  const igLink = "https://instagram.com/vibedesigntech";

  return (
    <section id="final-cta" className="relative overflow-hidden border-b border-line py-16 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div
          className="blob h-[560px] w-[560px] opacity-40"
          style={{ background: "radial-gradient(circle, rgba(85,241,239,0.5), rgba(85,241,239,0) 70%)" }}
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] w-[220px] sm:w-[340px] -translate-x-1/2 -translate-y-1/2 opacity-[0.16]">
        <Image src="/v-glass.webp" alt="" width={1094} height={1134} className="v-glass h-auto w-full" aria-hidden />
      </div>

      <div className="container-vibe relative z-[3] text-center">
        <p className="pill-glass mx-auto text-[11px] sm:text-xs"><span className="dot"></span>Agendar análise</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
          Sua presença própria começa numa conversa de 20 minutos
        </h2>
        <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-base sm:text-[22px] md:text-[24px] leading-relaxed text-fg-muted">
          Mostramos como ficaria o seu site, sem compromisso. Você decide se quer seguir depois.
        </p>

        <div className="mt-8 sm:mt-9 flex flex-col items-stretch sm:items-center justify-center gap-3 sm:gap-4 sm:flex-row">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan px-7 py-3.5 sm:px-8 sm:py-4 font-body text-sm font-semibold text-black shadow-[0_18px_55px_-14px_rgba(85,241,239,0.55)] transition-all hover:scale-[1.03] hover:shadow-[0_20px_55px_-10px_rgba(85,241,239,0.75)]"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Falar no WhatsApp</span>
          </a>

          <a
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-7 py-3.5 sm:px-8 sm:py-4 font-body text-sm font-semibold text-fg transition-all hover:scale-[1.03] hover:border-[#E1306C] hover:bg-[#E1306C]/15 hover:shadow-[0_0_30px_rgba(225,48,108,0.35)]"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Ver Instagram</span>
          </a>
        </div>
      </div>

      <div className="grain" />
    </section>
  );
}
