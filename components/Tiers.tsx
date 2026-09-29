import Image from "next/image";

const tiers = [
  {
    n: "01",
    name: "High-Converting Landing Pages",
    badge: "SITE BASE • CONVERSÃO MÁXIMA",
    desc: "Páginas ultra otimizadas para lançamentos, SaaS, serviços B2B, infoprodutos e especialistas que precisam escalar vendas e gerar autoridade imediata.",
    deliverables: [
      "Copywriting persuasivo e estratégico",
      "UI/UX exclusivo e 100% responsivo",
      "SEO avançado e estruturação de dados",
      "Velocidade máxima de carregamento (< 1s)",
    ],
    image: "/site-base.png",
    demoUrl: "https://victor-belichar-personal.vercel.app/",
  },
  {
    n: "02",
    name: "Web Apps & Dashboards",
    badge: "DESIGN TECH • PERSONALIZAÇÃO",
    desc: "Interfaces complexas, plataformas web e sistemas responsivos construídos com stacks modernas, foco na experiência do usuário e design tech exclusivo.",
    deliverables: [
      "Prototipagem rápida em alta fidelidade",
      "Integração com APIs & automações (n8n)",
      "Design Systems modulares e escaláveis",
      "Engenharia com Next.js, React e IA",
    ],
    image: "/site-personalizacao.png",
  },
  {
    n: "03",
    name: "Templates & Soluções Sob Medida",
    badge: "SISTEMA COMPLETO • ESCALA",
    desc: "Ativos pré-construídos e ecossistemas completos com automações inteligentes via WhatsApp e n8n para acelerar seu time-to-market e escala comercial.",
    deliverables: [
      "Implementação em tempo recorde",
      "Customização visual completa para sua marca",
      "Automações WhatsApp e integrações n8n",
      "Hospedagem, setup e suporte técnico dedicado",
    ],
    image: "/app-sistema-completo.png",
  },
];

export default function Tiers() {
  return (
    <section id="caminhos" className="relative overflow-hidden border-b border-line bg-bg-alt py-16 md:py-28">
      <div className="pointer-events-none absolute right-[-60px] top-[-40px] z-0 w-[220px] opacity-[0.14] sm:w-[280px]">
        <Image src="/v-glass.webp" alt="" width={1094} height={1134} className="v-glass h-auto w-full rotate-[14deg]" aria-hidden />
      </div>

      <div className="container-vibe relative z-[1]">
        <p className="eyebrow text-cyan">/ O QUE FAZEMOS • CAMINHOS DE ENTRADA</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
          Soluções Estratégicas em <span className="glow-cyan text-cyan">Design & Tecnologia</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-fg-muted leading-relaxed">
          Três profundidades de entrega sob medida para negócios que exigem sofisticação visual, engenharia moderna e foco obsessivo em conversão. Você escolhe onde entrar.
        </p>

        <div className="mt-10 sm:mt-14 flex flex-col gap-6 sm:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.n}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)] md:flex-row md:items-stretch"
            >
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 sm:px-3.5 sm:py-1.5 transition-colors duration-300 group-hover:border-[#1FA2A0]/60 group-hover:bg-[#0D5251]/25">
                      <span className="font-mono text-lg sm:text-2xl font-bold tracking-wider text-cyan drop-shadow-[0_0_12px_rgba(85,241,239,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(85,241,239,0.65)]">
                        {tier.n}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan/80 bg-cyan/10 border border-cyan/30 px-2.5 py-1 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl md:text-[2rem] font-extrabold uppercase tracking-tight text-white break-words">
                  {tier.name}
                </h3>

                <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-fg-muted">
                  {tier.desc}
                </p>

                {/* Deliverables List */}
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/10 pt-4">
                  {tier.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                      <span className="text-cyan text-xs">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {tier.demoUrl && (
                  <div className="mt-6">
                    <a
                      href={tier.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan/60 bg-cyan/10 px-5 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan transition-all duration-200 hover:border-cyan hover:bg-cyan hover:text-black hover:shadow-[0_0_20px_rgba(85,241,239,0.45)] hover:-translate-y-0.5"
                    >
                      <span>VER MODELO AO VIVO</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-black md:aspect-auto md:w-[38%] lg:w-[36%] min-h-[220px]">
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
