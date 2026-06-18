'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Navegação principal" className="fixed top-0 w-full z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative glass-effect flex items-center justify-between px-8 py-4 rounded-full w-full max-w-5xl"
      >
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
          <Image 
            src="/acrux_logo.svg" 
            alt="ACRUX Logo" 
            width={180} // Aumentado de 120 para 180
            height={48} // Aumentado de 32 para 48
            className="h-10 md:h-12 w-auto" // Ajustado para ser levemente menor em telas pequenas
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-brand-muted">
          <Link href="#sobre" className="hover:text-white transition-colors">Sobre</Link>
          <Link href="#equipe" className="hover:text-white transition-colors">Equipe</Link>
          <Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link>
          <Link href="#portfolio" className="hover:text-white transition-colors">Portfólio</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="#contato" 
            className="hidden sm:block bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-accent transition-all duration-300"
          >
            CONTATO
          </Link>

          {/* Botão Hamburger para Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none p-2"
            aria-label="Alternar menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-20 left-0 right-0 glass-effect rounded-3xl p-8 flex flex-col items-center gap-6 md:hidden z-40"
            >
              <Link href="#sobre" onClick={() => setIsOpen(false)} className="text-white text-lg font-medium uppercase tracking-widest hover:text-brand-accent transition-colors">Sobre</Link>
              <Link href="#equipe" onClick={() => setIsOpen(false)} className="text-white text-lg font-medium uppercase tracking-widest hover:text-brand-accent transition-colors">Equipe</Link>
              <Link href="#servicos" onClick={() => setIsOpen(false)} className="text-white text-lg font-medium uppercase tracking-widest hover:text-brand-accent transition-colors">Serviços</Link>
              <Link href="#portfolio" onClick={() => setIsOpen(false)} className="text-white text-lg font-medium uppercase tracking-widest hover:text-brand-accent transition-colors">Portfólio</Link>
              <Link href="#contato" onClick={() => setIsOpen(false)} className="sm:hidden bg-brand-accent text-brand-black w-full text-center py-3 rounded-full font-bold">CONTATO</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}