'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Plataforma E-commerce B2B',
    description: 'Desenvolvimento de uma plataforma robusta para transações B2B, otimizada para alta performance e escalabilidade.',
    image: '/placeholder-project-1.jpg', // Adicione imagens reais na pasta public
    link: '#',
  },
  {
    id: 2,
    title: 'Sistema de Gestão de Conteúdo (CMS)',
    description: 'CMS customizado para gerenciamento eficiente de conteúdo digital, com foco em usabilidade e flexibilidade.',
    image: '/placeholder-project-2.jpg', // Adicione imagens reais na pasta public
    link: '#',
  },
  {
    id: 3,
    title: 'Aplicativo Mobile de Finanças',
    description: 'Criação de um aplicativo móvel intuitivo para gestão financeira pessoal, com integração de APIs bancárias.',
    image: '/placeholder-project-3.jpg', // Adicione imagens reais na pasta public
    link: '#',
  },
];

export default function Portfolio() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-brand-black">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
        >
          Nossos <span className="text-brand-accent">Projetos</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="glass-effect p-6 rounded-lg text-left flex flex-col h-full"
            >
              <div className="relative w-full h-48 bg-brand-gray rounded-md mb-4 overflow-hidden">
                {/* Placeholder para imagem */}
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-md" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-brand-muted flex-grow">{project.description}</p>
              <a href={project.link} className="mt-4 text-brand-accent hover:underline font-medium self-start">
                Ver Detalhes &rarr;
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}