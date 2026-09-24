import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 sm:py-14">
      <div className="container-vibe flex flex-col items-center justify-between gap-6 text-center md:text-left md:flex-row">
        <Image src="/logo.png" alt="VIBE Design Tech" width={224} height={68} className="h-10 sm:h-14 w-auto opacity-90" />

        <p className="font-mono text-[11px] uppercase tracking-wide text-fg-muted">
          Design de alto impacto com a velocidade da inteligência artificial.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center md:text-right font-mono text-[11px] text-fg-muted">
          <a
            href="https://wa.me/5592992027059"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan"
          >
            WhatsApp: (92) 99202-7059
          </a>
          <span>© {new Date().getFullYear()} VIBE Design Tech</span>
        </div>
      </div>
    </footer>
  );
}
