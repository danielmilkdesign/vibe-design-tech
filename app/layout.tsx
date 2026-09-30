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
    default: "VIBE Design Tech — Produtos Digitais de Alta Performance, Landing Pages & IA",
    template: "%s | VIBE Design Tech",
  },
  description:
    "Estúdio de design de interface de alto nível, engenharia moderna e inteligência artificial. Criamos landing pages de alta conversão, web apps sob medida e automações para acelerar o seu negócio.",
  keywords: [
    "VIBE Design Tech",
    "Landing Page de Alta Conversão",
    "Desenvolvimento de Web Apps",
    "Design Engineering",
    "UI UX Design",
    "Next.js e React",
    "Automação WhatsApp n8n",
    "Criação de Sites Profissionais",
    "Estúdio de Produtos Digitais"
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
    title: "VIBE Design Tech — Produtos Digitais de Alta Performance & IA",
    description:
      "Unimos design de interface de alto nível, engenharia moderna e IA para construir landing pages, web apps e soluções prontas focadas em conversão.",
    images: [
      {
        url: "/LOGO VIBE TECH.png",
        width: 1200,
        height: 630,
        alt: "VIBE Design Tech — Produtos Digitais de Alta Performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIBE Design Tech — Produtos Digitais de Alta Performance & IA",
    description:
      "Design de interface de alto nível, engenharia moderna e automações de IA focadas em conversão.",
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
        "name": "VIBE Design Tech — Soluções Digitais & IA",
        "url": "https://vibedesigntech.com.br",
        "parentOrganization": {
          "@id": "https://vibedesigntech.com.br/#organization"
        },
        "description": "Estúdio especializado em criação de landing pages de alta conversão, web apps sob medida, design systems e automações de vendas com inteligência artificial.",
        "priceRange": "R$ 1.500 - R$ 15.000",
        "telephone": "+55-92-99202-7059",
        "areaServed": {
          "@type": "Country",
          "name": "Brazil"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços Digitais VIBE",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Site Base / Landing Page de Alta Conversão",
                "description": "One-page profissional com vitrine, sobre, serviços e integração com WhatsApp."
              },
              "price": "1500.00",
              "priceCurrency": "BRL"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Site + Personalização & Agendamento",
                "description": "Design exclusivo, agendamento automático e manutenção mensal dedicada."
              },
              "price": "399.00",
              "priceCurrency": "BRL"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "App / Sistema Web Completo sob Medida",
                "description": "Desenvolvimento full-stack, dashboards, automação de WhatsApp e CRM."
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
