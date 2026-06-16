'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Efeito de brilho ao fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-accent font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Inovação & Tecnologia
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Guiamos quem <br /> vai além.
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 text-balance">
            Desenvolvemos soluções digitais de alto impacto que conectam sua marca ao futuro. 
            Performance premium para projetos ambiciosos.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-brand-accent transition-all duration-300 w-full md:w-auto">
              VER PROJETOS
            </button>
            <button className="px-8 py-4 border border-white/10 glass-effect text-white font-bold rounded-full hover:border-brand-accent transition-all duration-300 w-full md:w-auto">
              NOSSA VISÃO
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Indicador de Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.div>
    </section>
  );
}