import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-[#020405] py-12 sm:py-16 text-fg-muted font-body">
      <div className="container-vibe flex flex-col gap-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:text-left md:flex-row border-b border-white/5 pb-8">
          <div>
            <Image
              src="/logo-vibe-tech.png"
              alt="VIBE Design Tech"
              width={224}
              height={68}
              className="h-10 sm:h-12 w-auto opacity-95 mx-auto md:mx-0"
            />
            <p className="mt-2 text-xs text-fg-muted max-w-sm">
              Presença própria e estruturas de conversão para especialistas de saúde e bem-estar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 font-mono text-xs">
            <a
              href="https://wa.me/5592992027059"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cyan"
            >
              WhatsApp: (92) 99202-7059
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <a
              href="https://instagram.com/vibedesigntech"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cyan"
            >
              @vibedesigntech
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Atendimento Nacional</span>
          </div>
        </div>

        {/* Informações Regulatórias e LGPD */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] font-mono text-fg-muted/80">
          <div>
            <span>VIBE DESIGN TECH • CNPJ: 54.218.910/0001-44</span>
            <span className="block sm:inline sm:ml-3 text-white/40">
              Manaus - AM • Brasil
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-fg transition-colors cursor-pointer" title="Seus dados são protegidos conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018)">
              Privacidade & LGPD
            </span>
            <span>•</span>
            <span>© {currentYear} VIBE Design Tech. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
