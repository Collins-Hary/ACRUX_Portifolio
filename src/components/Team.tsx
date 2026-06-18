'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Cléusio Cristóvão Hari || CEO & Co-Founder',
    role: 'desenvolvedor full-stack e Tecnico de Redes',
    bio: 'Desde os 15 anos, Cléusio ajuda a construir a base tecnológica da ACRUX. Movido por uma paixão antiga por tecnologia, ele atua no desenvolvimento das soluções e da infraestrutura que entregamos. Sua dedicação ao desenvolvimento full-stack e redes é o que nos impulsiona a buscar sempre os melhores resultados para nossos parceiros.',
    image: '/team-member-1.jpeg', // Extensão corrigida para minúsculas
  },
//   {
//     name: 'Nome do Integrante',
//     role: 'Especialista em Redes',
//     bio: 'Expert em infraestrutura crítica, segurança perimetral e latência zero.',
//     image: '/team-member-2.jpg',
//   },
//   {
//     name: 'Nome do Integrante',
//     role: 'Especialista em Servidores',
//     bio: 'Gestão de ambientes cloud e on-premise com foco em resiliência.',
//     image: '/team-member-3.jpg',
//   },
];

export default function Team() {
  return (
    <section id="equipe" className="py-20 md:py-32 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-brand-accent font-mono text-sm tracking-[0.3em] uppercase mb-4">Nossa Origem</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Inovação que nasce da <br /> <span className="text-brand-accent">necessidade técnica.</span>
            </h3>
            <p className="text-brand-muted text-lg leading-relaxed mb-6">
              A ACRUX surgiu da união de Estudantes que perceberam uma lacuna no mercado: a falta de sinergia entre o desenvolvimento de software e a infraestrutura de rede. 
            </p>
            <p className="text-brand-muted text-lg leading-relaxed">
              Hoje, operamos como uma startup de tecnologia, entregando soluções onde o código e o servidor trabalham em harmonia absoluta para garantir que sua plataforma nunca pare de crescer.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-brand-accent/5 z-10" />
            <Image 
              src="/acrux_logo.PNG" 
              alt="Equipe ACRUX em operação" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-colors group"
            >
              <div className="w-20 h-20 bg-brand-gray rounded-full mb-6 overflow-hidden border-2 border-brand-accent/20 group-hover:border-brand-accent transition-colors">
                <Image src={member.image} alt={member.name} width={80} height={80} className="object-cover" />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-brand-accent text-sm font-mono uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-brand-muted text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}