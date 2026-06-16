import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACRUX | Guiamos quem vai além",
  description: "Portfólio oficial da ACRUX. Performance, escalabilidade e experiência premium.",
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