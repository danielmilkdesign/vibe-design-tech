import Image from "next/image";

const tiers = [
  {
    n: "01",
    name: "Site Base",
    desc: "Uma página de vitrine: sobre, alunos, valores e contato. Você mesmo edita fotos e textos. Hospedagem inclusa.",
    image: "/tier-base.jpg",
    demoUrl: "https://victor-belichar-personal.vercel.app/",
  },
  {
    n: "02",
    name: "Site + Personalização",
    desc: "Tudo do Site Base, com design exclusivo pro seu posicionamento, agendamento integrado e manutenção mensal feita por nós.",
    image: "/tier-custom.jpg",
  },
  {
    n: "03",
    name: "App / Sistema Completo",
    desc: "Sistema sob medida com automações via WhatsApp e n8n — do primeiro contato ao acompanhamento do aluno. Escopo em consultoria dedicada.",
    image: "/tier-sistema.jpg",
  },
];

export default function Tiers() {
  return (
    <section id="como-funciona" className="relative overflow-hidden border-b border-line bg-bg-alt py-16 md:py-28">
      <div className="pointer-events-none absolute right-[-60px] top-[-40px] z-0 w-[220px] opacity-[0.14] sm:w-[280px]">
        <Image src="/v-glass.webp" alt="" width={1094} height={1134} className="v-glass h-auto w-full rotate-[14deg]" aria-hidden />
      </div>

      <div className="container-vibe relative z-[1]">
        <p className="eyebrow text-cyan">Como funciona</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
          Três profundidades. Você escolhe onde entrar.
        </h2>

        <div className="mt-10 sm:mt-14 flex flex-col gap-6 sm:gap-7">
          {tiers.map((tier) => (
            <div
              key={tier.n}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)] md:flex-row md:items-stretch"
            >
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-8 md:p-11">
                <div className="flex items-center gap-3.5 sm:gap-5">
                  <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 sm:px-4 sm:py-2 transition-colors duration-300 group-hover:border-[#1FA2A0]/60 group-hover:bg-[#0D5251]/25">
                    <span className="font-mono text-xl sm:text-3xl md:text-4xl font-bold tracking-wider text-cyan drop-shadow-[0_0_12px_rgba(85,241,239,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(85,241,239,0.65)]">
                      {tier.n}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold uppercase tracking-tight text-white break-words">
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-[18px] leading-relaxed text-white">
                  {tier.desc}
                </p>
                {tier.demoUrl && (
                  <div className="mt-6">
                    <a
                      href={tier.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan/60 bg-cyan/10 px-5 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan transition-all duration-200 hover:border-cyan hover:bg-cyan hover:text-black hover:shadow-[0_0_20px_rgba(85,241,239,0.45)] hover:-translate-y-0.5"
                    >
                      <span>VER MODELO</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
              <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-black md:aspect-auto md:w-[38%] lg:w-[36%]">
                <Image
                  src={tier.image}
                  alt={tier.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
