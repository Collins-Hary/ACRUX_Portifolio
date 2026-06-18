'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
        >
          Acesso Imediato à <span className="text-brand-accent">Performance</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass-effect p-8 md:p-12 rounded-lg text-left"
        >
          <p className="text-white text-xl font-semibold mb-2 text-center">
            Um investimento estratégico, não um custo operacional.
          </p>
          <p className="text-brand-muted text-lg mb-8 text-center text-balance">
            Consultorias de arquitetura custam milhares de Kwanzas. O "ACRUX Performance Blueprint" entrega o mesmo rigor técnico de elite por uma fração do valor, por tempo limitado.
          </p>

          {/* Formulário de Contato */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-brand-muted text-sm font-bold mb-2">Nome</label>
              <input type="text" id="name" name="name" className="w-full p-3 bg-brand-gray border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brand-accent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-brand-muted text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 bg-brand-gray border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brand-accent" />
            </div>
            <div>
              <label htmlFor="message" className="block text-brand-muted text-sm font-bold mb-2">Mensagem</label>
              <textarea id="message" name="message" rows={5} className="w-full p-3 bg-brand-gray border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-accent text-brand-black px-6 py-3 rounded-md font-bold hover:bg-white transition-colors duration-300">
              ENVIAR MENSAGEM
            </button>
          </form>

          {/* Redes Sociais */}
          <div className="flex justify-center gap-6 mt-12">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-brand-accent transition-colors">
              {/* Ícone do LinkedIn */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted hover:text-brand-accent transition-colors">
              {/* Ícone do Instagram */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.92.333 4.06.752c-.878.428-1.635.956-2.31 1.631-.676.675-1.203 1.432-1.632 2.31-.429.86-.63 1.716-.69 2.993C.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.277.261 2.135.68 3.003.428.878.956 1.635 1.631 2.31.675.676 1.432 1.203 2.31 1.632.86.429 1.716.63 2.993.69C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.135-.261 3.003-.68.878-.428 1.635-.956 2.31-1.631.676-.675 1.203-1.432 1.632-2.31.429-.86.63-1.716.69-2.993.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.261-2.135-.68-3.003-.428-.878-.956-1.635-1.631-2.31-.675-.676-1.432-1.203-2.31-1.632-.86-.429-1.716-.63-2.993-.69C15.667.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.423.42.179.772.416 1.005.649.234.233.471.585.649 1.005.174.422.368 1.057.423 2.227.056 1.265.07 1.647.07 4.85s-.014 3.585-.07 4.85c-.055 1.17-.249 1.805-.423 2.227-.179.42-.416.772-.649 1.005-.233.234-.585.471-1.005.649-.422.174-1.057.368-2.227.423-1.265.056-1.647.07-4.85.07s-3.585-.014-4.85-.07c-1.17-.055-1.805-.249-2.227-.423-.42-.179-.772-.416-1.005-.649-.234-.233-.471-.585-.649-1.005-.174-.422-.368-1.057-.423-2.227-.056-1.265-.07-1.647-.07-4.85s.014-3.585.07-4.85c.055-1.17.249-1.805.423-2.227.179-.42.416-.772.649-1.005.233-.234.471-.585.649-1.005.174-.422.368-1.057.423-2.227C8.415 2.176 8.823 2.16 12 2.16zm0 3.635c-3.444 0-6.235 2.791-6.235 6.235s2.791 6.235 6.235 6.235 6.235-2.791 6.235-6.235-2.791-6.235-6.235-6.235zm0 10.27c-2.235 0-4.035-1.8-4.035-4.035s1.8-4.035 4.035-4.035 4.035 1.8 4.035 4.035-1.8 4.035-4.035 4.035zm6.406-11.45c-.667 0-1.21.543-1.21 1.21s.543 1.21 1.21 1.21c.667 0 1.21-.543 1.21-1.21s-.543-1.21-1.21-1.21z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}