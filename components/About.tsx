import Image from "next/image";

const founders = [
  {
    name: "VICTOR BELICHAR",
    role: "CEO - COMERCIAL E RELACIONAMENTO",
    desc: "Estrutura as ofertas, atende cada cliente e mantém o Instagram da VIBE — a ponte entre quem procura presença própria e o produto certo.",
    image: "/VICTOR.png",
  },
  {
    name: "DANIEL LEITE",
    role: "CTO - Tecnologia e Produto",
    desc: "Constrói cada site e sistema — da estrutura técnica ao design final. É quem faz a presença online acontecer com os mais altos padrões de qualidade.",
    image: "/DANIEL.png",
  },
];

export default function About() {
  return (
    <section id="sobre" className="border-b border-line py-16 md:py-28">
      <div className="container-vibe">
        <p className="eyebrow text-cyan">Sobre</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
          Quem faz o seu projeto acontecer
        </h2>

        <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-2">
          {founders.map((person) => (
            <div
              key={person.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)]"
            >
              <div className="relative flex h-60 sm:h-72 md:h-80 w-full items-end justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black/60 pt-4">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(85,241,239,0.12),transparent_70%)]" />
                <Image
                  src={person.image}
                  alt={person.name}
                  width={600}
                  height={750}
                  className="h-full w-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-8">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white break-words">
                  {person.name}
                </h3>
                <p className="eyebrow mt-1 text-cyan font-mono text-xs sm:text-sm tracking-wider uppercase">
                  {person.role}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                  {person.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
