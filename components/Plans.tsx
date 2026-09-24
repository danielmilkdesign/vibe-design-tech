const plans = [
  {
    name: "Site Base",
    price: "R$ 1.500",
    period: "+ R$ 99/mês",
    note: "Setup + hospedagem e manutenção",
    badge: "Essencial",
    waMsg: "Olá! Gostaria de saber mais sobre o plano Site Base (R$ 1.500 + R$ 99/mês).",
    features: [
      "One-page de alta conversão: vitrine, sobre, serviços e contato",
      "Painel onde você edita fotos e textos quando quiser",
      "Hospedagem de alta performance inclusa",
      "Design responsivo & otimizado para mobile",
      "Integração direta de botão WhatsApp",
    ],
    highlight: false,
  },
  {
    name: "Site + Personalização",
    price: "R$ 399",
    period: "/mês",
    note: "Solução completa de posicionamento",
    badge: "Mais Escolhido",
    waMsg: "Olá! Quero agendar uma demo para o plano Site + Personalização (R$ 399/mês).",
    features: [
      "Tudo do Site Base",
      "Design exclusivo sob medida pro seu posicionamento",
      "Sistema de agendamento automático integrado",
      "Manutenção, atualizações e suporte mensal dedicado",
      "Otimização SEO e velocidade máxima",
    ],
    highlight: true,
  },
  {
    name: "App / Sistema Completo",
    price: "Sob consulta",
    period: "",
    note: "Consultoria & Dev sob medida",
    badge: "Enterprise",
    waMsg: "Olá! Gostaria de um orçamento para App/Sistema Completo sob medida.",
    features: [
      "Sistema Web ou WebApp totalmente sob medida",
      "Automações de Vendas via WhatsApp API & n8n",
      "Dashboard de métricas, gestão e CRM",
      "Arquitetura escalável Next.js / Node / Cloud",
      "Acompanhamento técnico & consultoria contínua",
    ],
    highlight: false,
  },
];

export default function Plans() {
  const getWaLink = (msg: string) =>
    `https://wa.me/5592992027059?text=${encodeURIComponent(msg)}`;

  return (
    <section id="planos" className="border-b border-line bg-bg-alt py-16 md:py-28">
      <div className="container-vibe">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-cyan">Planos & Investimento</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
              Entre no nível que faz sentido hoje
            </h2>
          </div>
          <p className="max-w-xs text-sm text-fg-muted">
            Transparência total. Sem surpresas ou custos ocultos. Cancele ou faça upgrade quando quiser.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative group flex flex-col rounded-3xl border p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.highlight
                  ? "border-cyan bg-white/[0.04] shadow-[0_0_60px_-20px_rgba(85,241,239,0.4)] hover:border-cyan hover:bg-[#0D5251]/20 hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),0_0_45px_rgba(85,241,239,0.45),0_0_25px_rgba(31,162,160,0.5)]"
                  : "border-line bg-white/[0.02] hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)]"
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3 right-6 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${
                    plan.highlight
                      ? "bg-cyan text-black shadow-[0_0_15px_rgba(85,241,239,0.6)]"
                      : "border border-white/20 bg-black text-cyan"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <h3 className="font-display text-2xl font-bold uppercase text-fg">
                {plan.name}
              </h3>

              <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-fg">{plan.price}</span>
                {plan.period && (
                  <span className="font-mono text-sm font-semibold text-cyan">{plan.period}</span>
                )}
              </div>
              <span className="eyebrow mt-1 text-fg-muted">{plan.note}</span>

              <hr className="my-6 border-white/10" />

              <ul className="flex flex-1 flex-col gap-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] leading-snug text-fg-muted">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWaLink(plan.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-center font-body text-sm font-semibold transition-all duration-200 hover:scale-[1.02] ${
                  plan.highlight
                    ? "bg-cyan text-black hover:bg-cyan/90 hover:shadow-[0_0_20px_rgba(85,241,239,0.5)]"
                    : "border border-line text-fg group-hover:border-[#1FA2A0] group-hover:text-cyan group-hover:shadow-[0_0_15px_rgba(31,162,160,0.25)]"
                }`}
              >
                <span>Falar sobre esse plano</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
