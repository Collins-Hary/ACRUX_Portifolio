'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-effect flex items-center justify-between px-8 py-4 rounded-full w-full max-w-5xl"
      >
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
          <Image 
            src="/acrux_logo.svg" 
            alt="ACRUX Logo" 
            width={180} // Aumentado de 120 para 180
            height={48} // Aumentado de 32 para 48
            className="h-12 w-auto" // Ajustado para h-12 (48px)
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-brand-muted">
          <Link href="#sobre" className="hover:text-white transition-colors">Sobre</Link>
          <Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link>
          <Link href="#portfolio" className="hover:text-white transition-colors">Portfólio</Link>
        </div>

        <Link 
          href="#contato" 
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-accent transition-all duration-300"
        >
          CONTATO
        </Link>
      </motion.div>
    </nav>
  );
}