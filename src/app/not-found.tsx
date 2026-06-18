import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center bg-background">
      <div className="space-y-6">
        <h1 className="text-9xl font-bold tracking-tighter text-foreground opacity-20">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-brand-accent uppercase tracking-widest">
            Perdido no Espaço?
          </h2>
          <p className="text-muted max-w-md mx-auto">
            A página que você procura não existe ou foi movida para outra coordenada.
          </p>
        </div>
        <Link 
          href="/" 
          className="inline-block mt-8 px-8 py-3 border border-brand-accent text-brand-accent font-bold hover:bg-brand-accent hover:text-brand-black transition-all duration-300"
        >
          RETORNAR À BASE
        </Link>
      </div>
    </main>
  );
}