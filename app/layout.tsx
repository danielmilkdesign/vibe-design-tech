import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: "../assets/fonts/BigShouldersDisplay-Variable.ttf",
  weight: "600 800",
  variable: "--font-display",
  display: "swap",
});

const mono = localFont({
  src: [
    { path: "../assets/fonts/SpaceMono-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/SpaceMono-Bold.ttf", weight: "700" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const body = localFont({
  src: "../assets/fonts/Inter-Variable.ttf",
  weight: "400 600",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibedesigntech.com.br"),
  title: {
    default: "VIBE Design Tech — Presença Própria para Especialistas de Saúde e Bem-Estar",
    template: "%s | VIBE Design Tech",
  },
  description:
    "Sites e sistemas de alta conversão para profissionais de saúde, bem-estar e especialistas que vendem por relacionamento. Explique seu método, organize suas provas e automatize seu agendamento.",
  keywords: [
    "Presença Própria",
    "Site para Personal Trainer",
    "Site para Nutricionista",
    "Site para Fisioterapeuta",
    "Site para Psicólogo",
    "Site para Clínicas e Consultórios",
    "Agendamento Automático Saúde",
    "Compliance Ético CFN CREFITO CFP CFM",
    "VIBE Design Tech",
    "Landing Page para Saúde"
  ],
  authors: [{ name: "VIBE Design Tech", url: "https://vibedesigntech.com.br" }],
  creator: "VIBE Design Tech",
  publisher: "VIBE Design Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vibedesigntech.com.br",
    siteName: "VIBE Design Tech",
    title: "VIBE Design Tech — Presença Própria para Saúde e Bem-Estar",
    description:
      "Seu Instagram atrai. Seu site converte. Sites e sistemas que explicam seu método, organizam suas provas e levam o paciente direto para o agendamento.",
    images: [
      {
        url: "/LOGO VIBE TECH.png",
        width: 1200,
        height: 630,
        alt: "VIBE Design Tech — Presença Própria para Especialistas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIBE Design Tech — Presença Própria para Especialistas de Saúde",
    description:
      "Seu Instagram atrai. Seu site converte. Estruturas completas para profissionais de saúde e especialistas que vendem por relacionamento.",
    images: ["/LOGO VIBE TECH.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/FAVICON.png",
    shortcut: "/FAVICON.png",
    apple: "/FAVICON.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vibedesigntech.com.br/#organization",
        "name": "VIBE Design Tech",
        "url": "https://vibedesigntech.com.br",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vibedesigntech.com.br/LOGO%20VIBE%20TECH.png"
        },
        "sameAs": [
          "https://instagram.com/vibedesigntech"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-92-99202-7059",
          "contactType": "sales",
          "areaServed": "BR",
          "availableLanguage": "Portuguese"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://vibedesigntech.com.br/#service",
        "name": "VIBE Design Tech — Presença Própria & Sistemas para Especialistas",
        "url": "https://vibedesigntech.com.br",
        "parentOrganization": {
          "@id": "https://vibedesigntech.com.br/#organization"
        },
        "description": "Criação de presença própria, sites e sistemas de agendamento de alta conversão para profissionais de saúde, bem-estar e especialistas que vendem por relacionamento.",
        "priceRange": "R$ 1.500 - R$ 15.000",
        "telephone": "+55-92-99202-7059",
        "areaServed": {
          "@type": "Country",
          "name": "Brazil"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços de Presença Própria VIBE",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Site Base / Estrutura Validada",
                "description": "One-page profissional com identidade personalizada, vitrine, sobre, serviços e integração com WhatsApp em até 7 dias."
              },
              "price": "1500.00",
              "priceCurrency": "BRL"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Site + Personalização & Agendamento Integrado",
                "description": "Design visual exclusivo sob medida, sistema de agendamento automático, páginas dedicadas e suporte contínuo."
              },
              "price": "1800.00",
              "priceCurrency": "BRL"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sistema Sob Medida / Clínicas & Estúdios",
                "description": "Plataforma Web, automações inteligentes de atendimento via WhatsApp API e n8n, CRM e agendamento multi-profissional."
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="pt-BR" className={`${display.variable} ${mono.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ldjson"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
