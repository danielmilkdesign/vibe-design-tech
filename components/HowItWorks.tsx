import React from "react";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-pad border-b relative overflow-hidden bg-[#020606]"
    >
      <div
        className="blob"
        style={{
          width: "520px",
          height: "520px",
          top: "-100px",
          left: "-100px",
          opacity: 0.18,
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.4), rgba(0,0,0,0) 70%)",
        }}
      />
      <div
        className="blob"
        style={{
          width: "480px",
          height: "480px",
          bottom: "-80px",
          right: "-80px",
          opacity: 0.22,
          background:
            "radial-gradient(circle, rgba(85, 241, 239, 0.35), rgba(0,0,0,0) 70%)",
        }}
      />
      <div className="grid-lines" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="como-funciona-header">
          <div className="como-funciona-title-col">
            <p className="eyebrow text-[#2ee59d] flex items-center gap-1.5">
              / COMO FUNCIONA
            </p>
            <h2 className="section-h2 como-funciona-h2">
              EM 20 MINUTOS, VOCÊ SAI
              <br />
              <span className="glow-cyan text-cyan">COM CLAREZA.</span>
            </h2>
          </div>
          <div className="como-funciona-desc-col">
            <p className="como-funciona-desc">
              A demo não é uma apresentação genérica. A gente olha para o seu
              negócio e mostra uma estrutura adequada ao seu momento.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="como-funciona-divider" />

        {/* 4 Colunas */}
        <div className="como-funciona-grid">
          {/* 01 */}
          <div className="como-funciona-col">
            <span className="como-funciona-num">01</span>
            <div className="como-funciona-num-line" />
            <h3 className="como-funciona-col-title">ENTENDEMOS O CENÁRIO</h3>
            <p className="como-funciona-col-text">
              Instagram, atendimento, oferta e os gargalos que estão travando o
              crescimento.
            </p>
          </div>

          {/* 02 */}
          <div className="como-funciona-col">
            <span className="como-funciona-num">02</span>
            <div className="como-funciona-num-line" />
            <h3 className="como-funciona-col-title">DESENHAMOS A OPORTUNIDADE</h3>
            <p className="como-funciona-col-text">
              O que pode virar página, prova, agendamento ou automação para o seu
              momento.
            </p>
          </div>

          {/* 03 */}
          <div className="como-funciona-col">
            <span className="como-funciona-num">03</span>
            <div className="como-funciona-num-line" />
            <h3 className="como-funciona-col-title">CONSTRUÍMOS A ESTRUTURA</h3>
            <p className="como-funciona-col-text">
              Design, copy e tecnologia em uma experiência que faz sentido para
              o seu negócio.
            </p>
          </div>

          {/* 04 */}
          <div className="como-funciona-col">
            <span className="como-funciona-num">04</span>
            <div className="como-funciona-num-line" />
            <h3 className="como-funciona-col-title">VOCÊ EVOLUI COM CLAREZA</h3>
            <p className="como-funciona-col-text">
              Suporte e próximos passos sem dependência de improviso ou promessa
              nebulosa.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="como-funciona-divider" />

        {/* Footer */}
        <div className="como-funciona-footer">
          <div className="como-funciona-footer-left">
            <div className="como-funciona-badge-item">
              <svg
                className="como-funciona-badge-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Atendimento direto com a equipe VIBE</span>
            </div>

            <div className="como-funciona-badge-item">
              <svg
                className="como-funciona-badge-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7v5l3 2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Duração aproximada: 20 minutos</span>
            </div>
          </div>

          <div className="como-funciona-footer-right">
            <a href="#final-cta" className="como-funciona-cta-link">
              <span>QUERO AGENDAR MINHA ANÁLISE</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
