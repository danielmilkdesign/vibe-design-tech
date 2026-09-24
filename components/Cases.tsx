"use client";

import { useState } from "react";
import Image from "next/image";

const realCases = [
  {
    tag: "B2B & FINANÇAS",
    title: "CEI Contab",
    desc: "Tradução visual de dados contábeis complexos, Landing Page de alta retenção e estratégia visual B2B.",
    metric: "+340% em Leads Qualificados",
    image: "/case1_cei_contab.jpg",
  },
  {
    tag: "VAREJO & EVENTOS",
    title: "Floraeto",
    desc: "Direção de arte editorial botânica e Key Visual exclusivo para datas sazonais de alto faturamento.",
    metric: "Posicionamento Premium",
    image: "/case2_floraeto.jpg",
  },
  {
    tag: "GASTRONOMIA",
    title: "Hon Café & Marinara",
    desc: "Branding gastronômico, menu interativo e apetite appeal para experiência digital e presencial.",
    metric: "Identidade & Conversão",
    image: "/case3_hon_cafe.jpg",
  },
  {
    tag: "ECOTURISMO & SPORT",
    title: "Amazon Ecofishing",
    desc: "Sistema de marca e landing page para ecoturismo e expedições de pesca esportiva na Amazônia.",
    metric: "Alcance Internacional",
    image: "/case4_amazon_ecofishing.jpg",
  },
];

export default function Cases() {
  const [activeTab, setActiveTab] = useState<"cases" | "antesDepois">("cases");

  return (
    <section id="cases" className="border-b border-line py-16 md:py-28">
      <div className="container-vibe">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-cyan">Portfólio & Resultados</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
              Marcas que subiram de nível com a VIBE
            </h2>
          </div>

          {/* Toggle buttons */}
          <div className="inline-flex max-w-full rounded-full border border-white/10 bg-black/60 p-1 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("cases")}
              className={`rounded-full px-4 py-2 sm:px-5 sm:py-2.5 font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all ${
                activeTab === "cases"
                  ? "bg-cyan text-black font-bold shadow-[0_0_15px_rgba(85,241,239,0.5)]"
                  : "text-fg-muted hover:text-white"
              }`}
            >
              Cases Reais
            </button>
            <button
              onClick={() => setActiveTab("antesDepois")}
              className={`rounded-full px-4 py-2 sm:px-5 sm:py-2.5 font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all ${
                activeTab === "antesDepois"
                  ? "bg-cyan text-black font-bold shadow-[0_0_15px_rgba(85,241,239,0.5)]"
                  : "text-fg-muted hover:text-white"
              }`}
            >
              Antes vs Depois
            </button>
          </div>
        </div>

        {/* Tab 1: Real Cases */}
        {activeTab === "cases" && (
          <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2">
            {realCases.map((c) => (
              <div
                key={c.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80 pointer-events-none" />
                  <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan backdrop-blur-md">
                    {c.tag}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-display text-2xl font-extrabold uppercase text-white break-words">
                      {c.title}
                    </h3>
                    <span className="font-mono text-xs font-semibold text-cyan drop-shadow-[0_0_8px_rgba(85,241,239,0.4)]">
                      {c.metric}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Antes vs Depois */}
        {activeTab === "antesDepois" && (
          <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-2">
            {/* Antes */}
            <div className="flex flex-col justify-between rounded-3xl border border-line bg-white/[0.03] p-5 sm:p-8 transition-all duration-300 hover:border-[#1FA2A0]">
              <div>
                <span className="eyebrow text-fg-muted">Antes VIBE</span>
                <div className="mt-5 flex h-[260px] sm:h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-black/40 p-3 sm:p-4">
                  <Image
                    src="/antes.png"
                    alt="Antes — Link na bio com empilhado de links"
                    width={393}
                    height={792}
                    className="h-full w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
              <p className="mt-5 sm:mt-6 text-[15px] leading-relaxed text-white/90">
                Empilhado de links genéricos, sem hierarquia visual, sem prova social e sem direcionamento para vendas.
              </p>
            </div>

            {/* Depois */}
            <div className="flex flex-col justify-between rounded-3xl border border-cyan/40 bg-white/[0.03] p-5 sm:p-8 shadow-[0_0_24px_rgba(85,241,239,0.08)] transition-all duration-300 hover:border-cyan hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),0_0_40px_rgba(85,241,239,0.35)]">
              <div>
                <span className="eyebrow text-cyan">Depois VIBE</span>
                <div className="mt-5 flex h-[260px] sm:h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border border-cyan/20 bg-black/40 p-3 sm:p-4">
                  <Image
                    src="/depois.png"
                    alt="Depois — Página própria de alta conversão"
                    width={843}
                    height={759}
                    className="h-full w-auto max-w-full object-contain drop-shadow-[0_12px_28px_rgba(85,241,239,0.18)] transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
              <p className="mt-5 sm:mt-6 text-[15px] leading-relaxed text-white/90">
                Vitrine própria de alto impacto, prova de resultados, glassmorphism e autoridade máxima para sua marca.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
