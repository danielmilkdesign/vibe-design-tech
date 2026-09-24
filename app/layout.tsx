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
  title: "VIBE Design Tech — Presença Própria para Saúde e Fitness",
  description:
    "Design de alto impacto com a velocidade da inteligência artificial. Sites e sistemas para personal trainers e nutricionistas que querem parar de depender do Instagram.",
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
  return (
    <html lang="pt-BR" className={`${display.variable} ${mono.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
