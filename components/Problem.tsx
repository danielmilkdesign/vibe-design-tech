import Image from "next/image";

const items = [
  {
    title: "Sem funil",
    body: "Todo lead esbarra no mesmo link da bio. Sem página que filtra, explica e vende antes do WhatsApp, você fecha por sorte — não por processo.",
    image: "/problem-funil.jpg",
  },
  {
    title: "Sem prova estruturada",
    body: "Resultado de aluno vira story que some em 24h. Sem um lugar fixo pra mostrar antes/depois, cada novo prospect começa a confiar do zero.",
    image: "/problem-prova.jpg",
  },
  {
    title: "Sem recorrência",
    body: "Preço trava porque a entrega parece informal. Sem presença própria, fica difícil cobrar como quem realmente entrega resultado.",
    image: "/problem-recorrencia.jpg",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="relative overflow-hidden border-b border-line py-16 md:py-28">
      <div className="grid-lines" />
      <div className="container-vibe relative z-[1]">
        <p className="eyebrow text-cyan">O problema</p>
        <div className="mt-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1.02] text-fg break-words">
            O link da bio é uma porta.<br />
            <span className="text-cyan">Não é uma casa.</span>
          </h2>
          <p className="max-w-md text-sm sm:text-base text-fg-muted leading-relaxed">
            Você pode continuar alugando a atenção do algoritmo — ou começar a construir um lugar que trabalha para o seu negócio todos os dias.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1FA2A0] hover:bg-[#0D5251]/15 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_25px_rgba(31,162,160,0.3)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <h3 className="font-display text-2xl sm:text-[1.75rem] font-extrabold uppercase tracking-tight text-cyan leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-white">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
