import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background py-12 md:py-16 border-t border-foreground/10">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Logo */}
        <Link href="/" className="mb-8 hover:opacity-80 transition-opacity">
          <Image 
            src="/acrux_logo.svg" 
            alt="ACRUX Logo" 
            width={150} 
            height={40} 
            className="h-10 w-auto"
          />
        </Link>

        {/* Links de Navegação */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium uppercase tracking-widest text-muted mb-8">
          <Link href="#sobre" className="hover:text-foreground transition-colors">Sobre</Link>
          <Link href="#servicos" className="hover:text-foreground transition-colors">Serviços</Link>
          <Link href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</Link>
          <Link href="#contato" className="hover:text-foreground transition-colors">Contato</Link>
        </nav>

        {/* Redes Sociais (placeholders) */}
        <div className="flex gap-6 mb-8">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent transition-colors">
            {/* Ícone do LinkedIn */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent transition-colors">
            {/* Ícone do Instagram */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.92.333 4.06.752c-.878.428-1.635.956-2.31 1.631-.676.675-1.203 1.432-1.632 2.31-.429.86-.63 1.716-.69 2.993C.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.277.261 2.135.68 3.003.428.878.956 1.635 1.631 2.31.675.676 1.432 1.203 2.31 1.632.86.429 1.716.63 2.993.69C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.135-.261 3.003-.68.878-.428 1.635-.956 2.31-1.631.676-.675 1.203-1.432 1.632-2.31.429-.86.63-1.716.69-2.993.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.261-2.135-.68-3.003-.428-.878-.956-1.635-1.631-2.31-.675-.676-1.432-1.203-2.31-1.632-.86-.429-1.716-.63-2.993-.69C15.667.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.423.42.179.772.416 1.005.649.234.233.471.585.649 1.005.174.422.368 1.057.423 2.227.056 1.265.07 1.647.07 4.85s-.014 3.585-.07 4.85c-.055 1.17-.249 1.805-.423 2.227-.179.42-.416.772-.649 1.005-.233.234-.585.471-1.005.649-.422.174-1.057.368-2.227.423-1.265.056-1.647.07-4.85.07s-3.585-.014-4.85-.07c-1.17-.055-1.805-.249-2.227-.423-.42-.179-.772-.416-1.005-.649-.234-.233-.471-.585-.649-1.005-.174-.422-.368-1.057-.423-2.227-.056-1.265-.07-1.647-.07-4.85s.014-3.585.07-4.85c.055-1.17.249-1.805.423-2.227.179-.42.416-.772.649-1.005.233-.234.471-.585.649-1.005.174-.422.368-1.057.423-2.227C8.415 2.176 8.823 2.16 12 2.16zm0 3.635c-3.444 0-6.235 2.791-6.235 6.235s2.791 6.235 6.235 6.235 6.235-2.791 6.235-6.235-2.791-6.235-6.235-6.235zm0 10.27c-2.235 0-4.035-1.8-4.035-4.035s1.8-4.035 4.035-4.035 4.035 1.8 4.035 4.035-1.8 4.035-4.035 4.035zm6.406-11.45c-.667 0-1.21.543-1.21 1.21s.543 1.21 1.21 1.21c.667 0 1.21-.543 1.21-1.21s-.543-1.21-1.21-1.21z" clipRule="evenodd" /></svg>
          </a>
          {/* Adicione mais ícones de redes sociais conforme necessário */}
        </div>

        {/* Copyright */}
        <p className="text-muted text-xs md:text-sm">
          &copy; {new Date().getFullYear()} ACRUX. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}