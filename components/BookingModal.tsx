"use client";

import { useEffect, useState, FormEvent } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calLink?: string;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [segment, setSegment] = useState("");
  const [period, setPeriod] = useState("Manhã (09h às 12h)");
  const [goal, setGoal] = useState("");

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const finalGoal = goal.trim() || "Apresentação da esteira de crescimento VIBE";
    const text = `Olá Victor e Daniel! Gostaria de agendar uma Análise Estratégica de 20 minutos:\n\n• Nome: ${name.trim()}\n• Segmento: ${segment}\n• Melhor período: ${period}\n• Objetivo: ${finalGoal}`;
    const url = `https://wa.me/5592992027059?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-3 sm:p-5 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-xl overflow-hidden rounded-3xl border border-cyan/40 bg-[#080d11] p-6 sm:p-8 shadow-[0_0_60px_rgba(85,241,239,0.25)] text-fg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow de fundo */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan/15 blur-3xl" />

        {/* Header do Modal */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
              <p className="eyebrow text-cyan font-mono text-xs uppercase tracking-wider">
                Análise Estratégica de 20 minutos
              </p>
            </div>
            <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold uppercase text-white">
              Agendar com os Fundadores
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-fg-muted">
              Reunião rápida pelo Google Meet. Preencha abaixo para alinharmos o horário no WhatsApp.
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fg-muted hover:border-cyan/40 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            ✕
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-fg-muted mb-1.5">
              Seu Nome / Especialista ou Empresa *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Dr. Lucas Silva ou Tech Solutions"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-fg-muted/50 focus:border-cyan focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-fg-muted mb-1.5">
              Seu Segmento de Atuação *
            </label>
            <select
              required
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0a1116] px-4 py-3 text-sm text-white focus:border-cyan focus:outline-none transition-colors cursor-pointer"
            >
              <option value="" disabled>Selecione seu segmento...</option>
              <option value="Empresas & B2B">Empresas & B2B</option>
              <option value="Saúde & Bem-Estar">Saúde & Bem-Estar (Nutrição, Fisio, Psicologia)</option>
              <option value="Clínicas">Clínicas Médicas & Odonto</option>
              <option value="Contabilidade & BPO">Contabilidade & BPO Financeiro</option>
              <option value="Advocacia & Jurídico">Advocacia & Jurídico</option>
              <option value="Personal Trainer & Fitness">Personal Trainer & Fitness</option>
              <option value="Outro Setor">Demais Setores / Especialista Liberal</option>
            </select>
          </div>

          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-fg-muted mb-1.5">
              Melhor Período para a Reunião *
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "manha", label: "Manhã", period: "Manhã (09h às 12h)" },
                { id: "tarde", label: "Tarde", period: "Tarde (14h às 18h)" },
                { id: "noite", label: "Noite", period: "Noite (19h às 21h)" },
              ].map((p) => {
                const isSelected = period === p.period;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPeriod(p.period)}
                    className={`rounded-xl py-2.5 px-3 font-mono text-xs font-semibold text-center border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-cyan/15 border-cyan text-cyan shadow-[0_0_12px_rgba(85,241,239,0.25)]"
                        : "bg-white/[0.03] border-white/10 text-fg-muted hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-fg-muted mb-1.5">
              Principal Objetivo ou Gargalo (Opcional)
            </label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Ex: Criar site novo, esteira de crescimento para Instagram..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-fg-muted/50 focus:border-cyan focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 mt-2 rounded-full font-bold text-sm btn-cyan flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(85,241,239,0.35)] hover:scale-[1.01] transition-transform cursor-pointer"
          >
            <span>Confirmar e Enviar no WhatsApp</span>
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.77.814 2.791.814 3.178 0 5.767-2.587 5.767-5.766.001-3.18-2.586-5.766-5.767-5.766zm9.969 5.766c-.004 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654 1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414z" />
            </svg>
          </button>

          <p className="text-[11px] text-center text-fg-muted pt-1">
            🔒 Reunião direta com os fundadores Victor Belichar e Daniel Leite. Sem compromisso.
          </p>
        </form>
      </div>
    </div>
  );
}
