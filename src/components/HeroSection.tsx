import React from 'react';
import { Reveal } from './Reveal'; // Certifique-se de que o caminho está correto

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Guiamos quem vai além.
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-xl md:text-2xl">Soluções inovadoras para o seu futuro digital.</p>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;