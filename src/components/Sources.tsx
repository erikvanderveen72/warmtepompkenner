import { ExternalLink } from 'lucide-react';

interface Source {
  naam: string;
  url: string;
  toelichting: string;
}

export default function Sources({ sources, laatstBijgewerkt }: { sources: Source[]; laatstBijgewerkt?: string }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-stone-50 rounded-2xl border border-border p-6 md:p-8">
        <h2 className="text-lg font-bold text-text-main mb-1">Bronnen</h2>
        <p className="text-sm text-text-muted mb-4">
          Alle informatie op deze pagina is gebaseerd op officiële en onafhankelijke bronnen.
          {laatstBijgewerkt && <> Laatst geverifieerd: {laatstBijgewerkt}.</>}
        </p>
        <ul className="space-y-3">
          {sources.map((source, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <ExternalLink size={14} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {source.naam}
                </a>
                <span className="text-text-muted"> — {source.toelichting}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-xs text-stone-400 mt-4">
          Disclaimer: De informatie op warmtepompkenner.nl is puur informatief. Prijzen, subsidies en rendementen zijn indicatief en kunnen afwijken. Raadpleeg altijd een erkend installateur voor advies op maat.
        </p>
      </div>
    </section>
  );
}
