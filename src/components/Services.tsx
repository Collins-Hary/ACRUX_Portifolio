'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Desenvolvimento',
    description: 'Aplicações web de alta performance utilizando tecnologias modernas. Foco em arquiteturas escaláveis, sistemas full-stack robustos e interfaces de usuário premium.',
    icon: (
      <svg className="w-10 h-10 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: 'Redes',
    description: 'Arquitetura e segurança de redes. Implementação de infraestruturas críticas com foco em baixa latência, redundância e segurança perimetral avançada.',
    icon: (
      <svg className="w-10 h-10 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
      </svg>
    )
  },
  {
    title: 'Servidores',
    description: 'Gestão de ambientes cloud e on-premise. Otimização de performance, resiliência de dados e monitoramento contínuo para garantir disponibilidade total.',
    icon: (
      <svg className="w-10 h-10 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-brand-accent font-mono text-sm tracking-[0.3em] uppercase mb-4">Core Business</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Nossas <span className="text-brand-accent">Especialidades</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-10 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group text-left"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-brand-muted leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 w-12 h-[2px] bg-brand-accent/20 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}