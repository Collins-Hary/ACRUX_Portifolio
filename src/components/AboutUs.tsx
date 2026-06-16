'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="sobre" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
        >
          Sobre a <span className="text-brand-accent">ACRUX</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-lg text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Nossa Missão</h3>
            <p className="text-brand-muted">Capacitar empresas a alcançar seu potencial máximo através de soluções digitais inovadoras e estratégicas, focando em performance e escalabilidade.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-lg text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Nossa Visão</h3>
            <p className="text-brand-muted">Ser a referência em desenvolvimento de software de alta performance, reconhecida pela excelência técnica e pelo impacto positivo nos negócios de nossos clientes.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-lg text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Nossos Valores</h3>
            <p className="text-brand-muted">Inovação contínua, qualidade intransigente, transparência, colaboração e paixão por tecnologia.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}