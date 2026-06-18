'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Core Architecture Audit',
    description: 'Análise profunda da sua arquitetura de "desenvolvimento" e "servidores", identificando pontos de fricção, otimizando a performance e mitigando riscos de segurança em "redes" complexas.',
    image: '/placeholder-project-1.avif', // Extensão corrigida para minúsculas
    link: '#',
  },
  {
    id: 2,
    title: 'Conversion-First Web Vitals',
    description: 'Otimização cirúrgica para os índices que o Google prioriza, focando na performance de "desenvolvimento" e na entrega eficiente dos "servidores". Mais velocidade não é apenas luxo, é posicionamento no ranking e redução de CAC.',
    image: '/placeholder-project-2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Scalability Roadmap',
    description: 'Um guia passo a passo para preparar sua infraestrutura de "REDES" e "SERVIDORES" para picos de acesso massivos, garantindo escalabilidade e resiliência sem aumento exponencial de custo, com base em práticas de "DESENVOLVIMENTO" robustas.',
    image: '/placeholder-project-3.jpeg', // Extensão corrigida para minúsculas
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
          O ACRUX <span className="text-brand-accent">Blueprint</span>
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
              <div className="relative w-full h-48 bg-brand-gray rounded-md mb-4 overflow-hidden aspect-video">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-md object-cover"
                  loading="lazy"
                />
            </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-brand-muted flex-grow">{project.description}</p>
              <a href={project.link} aria-label={`Ver detalhes do projeto ${project.title}`} className="mt-4 text-brand-accent hover:underline font-medium self-start">
                Ver Detalhes &rarr;
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}