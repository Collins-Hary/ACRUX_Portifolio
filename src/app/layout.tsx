import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ACRUX | Guiamos quem vai além",
    template: "%s | ACRUX",
  },
  description: "Portfólio oficial da ACRUX. Performance, escalabilidade e experiência premium. Soluções digitais de alto impacto para o seu futuro.",
  openGraph: {
    title: "ACRUX | Guiamos quem vai além",
    description: "Portfólio oficial da ACRUX. Performance, escalabilidade e experiência premium. Soluções digitais de alto impacto para o seu futuro.",
    url: "https://www.seu-site-acrux.com.br", // Substitua pela URL real do seu portfólio
    siteName: "ACRUX Portfólio",
    images: [
      {
        url: "https://www.seu-site-acrux.com.br/og-image.jpg", // Substitua pela URL real da sua imagem OG
        width: 1200,
        height: 630,
        alt: "ACRUX - Guiamos quem vai além",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACRUX | Guiamos quem vai além",
    description: "Portfólio oficial da ACRUX. Performance, escalabilidade e experiência premium. Soluções digitais de alto impacto para o seu futuro.",
    creator: "@seu_twitter_acrux", // Substitua pelo seu handle do Twitter
    images: ["https://www.seu-site-acrux.com.br/twitter-image.jpg"], // Substitua pela URL real da sua imagem para Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} selection:bg-brand-accent/30`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}