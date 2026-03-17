import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Search, ArrowRight, Thermometer, Euro, PiggyBank } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pagina Niet Gevonden | Warmtepompkenner.nl',
  description: 'De pagina die je zoekt bestaat niet of is verplaatst.',
};

const popularPages = [
  { title: 'Kosten warmtepomp', href: '/kosten', icon: Euro, description: 'Bekijk actuele prijzen' },
  { title: 'Subsidies (ISDE)', href: '/subsidies', icon: PiggyBank, description: 'Ontdek subsidies' },
  { title: 'Soorten warmtepompen', href: '/soorten', icon: Thermometer, description: 'Vergelijk types' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="bg-primary-light w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Search size={40} className="text-primary" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-text-main mb-4">404</h1>
        <p className="text-xl text-text-muted mb-2">Pagina niet gevonden</p>
        <p className="text-text-muted mb-12 max-w-md mx-auto">
          De pagina die je zoekt bestaat niet of is verplaatst. Bekijk een van onze populaire pagina&apos;s hieronder.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {popularPages.map((page) => (
            <Link key={page.href} href={page.href}
              className="group bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:border-sky-400 transition-all text-left">
              <div className="bg-primary-light p-3 rounded-xl w-fit mb-4">
                <page.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-text-main mb-1">{page.title}</h3>
              <p className="text-sm text-text-muted mb-3">{page.description}</p>
              <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Bekijken <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          <Home size={18} />
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
