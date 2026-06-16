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
          O Custo Invisível da <span className="text-brand-accent">Ineficiência</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-lg text-left">
            <h3 className="text-xl font-semibold text-white mb-4">O Gargalo Técnico</h3>
            <p className="text-brand-muted">Você investe em tráfego e design, mas sua plataforma trava no momento crucial. Cada segundo de atraso é uma fatia de lucro que desaparece para o concorrente.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-lg text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Complexidade Desnecessária</h3>
            <p className="text-brand-muted">Sistemas inchados que impedem a agilidade. Se você tem medo de escalar porque o site "pode cair", sua tecnologia é seu maior risco.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-lg text-left">
            <h3 className="text-xl font-semibold text-white mb-4">A Falta de Clareza</h3>
            <p className="text-brand-muted">Você recebe relatórios técnicos confusos que não explicam o porquê da baixa conversão. É hora de trocar suposições por dados de arquitetura de elite.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}