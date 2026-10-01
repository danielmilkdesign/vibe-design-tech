"use client";

export default function HeroInteractive() {
  return (
    <div className="relative w-full max-w-[700px] mx-auto select-none flex items-center justify-center">
      {/* Ambient background glow and 3D frame matching the official standard */}
      <div className="relative w-full aspect-[1760/1328] transform scale-[1.04] origin-center">
        <div
          className="absolute -inset-3 rounded-[2rem] pointer-events-none"
          style={{
            background: "rgba(85, 241, 239, 0.16)",
            filter: "blur(45px)",
          }}
          aria-hidden="true"
        />
        <iframe
          src="/vibe-hero-interativo-generico.html"
          title="VIBE Hero Interativo — Presença Digital e Ecossistema"
          className="w-full h-full border-0 bg-transparent overflow-hidden block"
          scrolling="no"
        />
      </div>
    </div>
  );
}

