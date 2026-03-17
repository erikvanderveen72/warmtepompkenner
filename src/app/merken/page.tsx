import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Sources from '@/components/Sources';
import { BarChart3, Star, TrendingUp, Award, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Warmtepomp Merken Vergelijken 2026 - Top 10',
  description: 'Vergelijk de beste warmtepomp merken: Daikin, NIBE, Mitsubishi, Viessmann, Bosch en meer. Ontdek prijzen, COP-waarden en beoordelingen.',
};

export const revalidate = 3600;

const brands = [
  {
    name: 'Daikin',
    country: 'Japan',
    copRange: 'SCOP 3.5 - 4.5',
    guarantee: '5 jaar',
    price: '€6.000 - €12.000',
    description: 'Betrouwbare en efficiënte warmtepompen met goed onderhoud.',
  },
  {
    name: 'Mitsubishi Electric',
    country: 'Japan',
    copRange: 'SCOP 3.5 - 4.2',
    guarantee: '5 jaar',
    price: '€7.000 - €14.000',
    description: 'Zeer efficiënte warmtepompen met innovatieve technologie.',
  },
  {
    name: 'NIBE',
    country: 'Zweden',
    copRange: 'SCOP 4.0 - 5.0',
    guarantee: '5 jaar',
    price: '€8.000 - €16.000',
    description: 'Hoogste SCOP-waarden en duurzame kwaliteit.',
  },
  {
    name: 'Viessmann',
    country: 'Duitsland',
    copRange: 'SCOP 3.5 - 4.3',
    guarantee: '5 jaar',
    price: '€7.500 - €14.000',
    description: 'Solide Duitse engineering met goede ondersteuning.',
  },
  {
    name: 'Vaillant',
    country: 'Duitsland',
    copRange: 'SCOP 3.5 - 4.2',
    guarantee: '5 jaar',
    price: '€7.000 - €13.000',
    description: 'Betrouwbare warmtepompen van een gevestigde fabrikant.',
  },
  {
    name: 'Bosch',
    country: 'Duitsland',
    copRange: 'SCOP 3.4 - 4.0',
    guarantee: '5 jaar',
    price: '€6.500 - €11.000',
    description: 'Goede verhouding prijs-kwaliteit en brede productlijn.',
  },
  {
    name: 'Panasonic',
    country: 'Japan',
    copRange: 'SCOP 3.5 - 4.0',
    guarantee: '5 jaar',
    price: '€6.000 - €11.000',
    description: 'Betrouwbare Japanse technologie tegen redelijke prijs.',
  },
  {
    name: 'Samsung',
    country: 'Zuid-Korea',
    copRange: 'SCOP 3.3 - 3.8',
    guarantee: '5 jaar',
    price: '€5.500 - €10.000',
    description: 'Budget-vriendelijk met degelijke prestaties.',
  },
  {
    name: 'LG',
    country: 'Zuid-Korea',
    copRange: 'SCOP 3.3 - 4.0',
    guarantee: '5 jaar',
    price: '€5.000 - €9.500',
    description: 'Zeer betaalbaar met goede efficiëntie.',
  },
  {
    name: 'Toshiba',
    country: 'Japan',
    copRange: 'SCOP 3.3 - 3.8',
    guarantee: '3 jaar',
    price: '€5.500 - €10.000',
    description: 'Solide prestatie voor een redelijke prijs.',
  },
];

const topBrands = [
  {
    name: 'NIBE',
    rank: 1,
    copRange: 'SCOP 4.0 - 5.0',
    guarantee: '5 jaar',
    strengths: ['Hoogste SCOP-bereik (tot 5.0)', 'Zeer duurzaam', 'Beste lange termijn prestaties'],
    ideal: 'Beste keuze voor maximale besparing',
  },
  {
    name: 'Mitsubishi Electric',
    rank: 2,
    copRange: 'SCOP 3.5 - 4.2',
    guarantee: '5 jaar',
    strengths: ['Innovatieve technologie', 'Zeer betrouwbaar', 'Uitstekende klantenservice'],
    ideal: 'Ideaal voor modernisering',
  },
  {
    name: 'Daikin',
    rank: 3,
    copRange: 'SCOP 3.5 - 4.5',
    guarantee: '5 jaar',
    strengths: ['Wereldwijd toonaangevend', 'Uitgebreid servicecentrum', 'Goede verhouding prijs-kwaliteit'],
    ideal: 'Veilige keuze met sterke ondersteuning',
  },
];

const faqItems = [
  {
    question: 'Welk warmtepompmerk is het beste?',
    answer: 'Er is geen "best" merk voor iedereen. NIBE leidt in SCOP-bereik (tot 5.0), Mitsubishi Electric blinkt uit in technologie, en Daikin biedt sterke ondersteuning. Kies op basis van je budget, woning en prioriteiten. Het type warmtepomp (lucht-water vs. bodem-water) is vaak belangrijker dan het merk.',
  },
  {
    question: 'Wat is het verschil tussen SCOP-waarden van merken?',
    answer: 'SCOP (Seasonal Coefficient of Performance) geeft aan hoeveel warmte een warmtepomp gemiddeld per seizoen genereert per eenheid energie bij W35 (vloerverwarming). NIBE bereikt tot 5.0, Mitsubishi Electric tot 4.2. Een hoger SCOP betekent lagere energierekeningen. Het verschil tussen SCOP 3.5 en 4.5 is ongeveer 25% meer besparing.',
  },
  {
    question: 'Waarom laten jullie geen beoordelingen zien?',
    answer: 'Beoordelingen die je online vindt zijn vaak niet geverifieerd. De Consumentenbond test warmtepompen, maar hun ratings zijn achter een betaalmuur. In plaats daarvan tonen we de echte SCOP-bereiken van fabrikanten en standaardgarantieperiodes. Deze zijn verifieerbaar en eerlijker.',
  },
  {
    question: 'Zijn Japanse merken beter dan Duitse merken?',
    answer: 'Beide hebben voordelen. Japanse merken (Daikin, Mitsubishi, Panasonic) blinken uit in efficiëntie. Duitse merken (Viessmann, Vaillant, Bosch) zijn berucht om betrouwbaarheid en service. Kies op basis van wat voor jouw situatie belangrijk is.',
  },
  {
    question: 'Moet ik een duur merk kiezen voor betere kwaliteit?',
    answer: 'Niet altijd. Veel betaalmerk-opties (Samsung, LG, Toshiba) bieden vergelijkbare garanties. Het verschil zit in SCOP (lagere energierekeningen) en langetermijnondersteuning. Een duurder, efficiënter merk kan dankzij lagere stroomrekeningen sneller terugbetaald zijn.',
  },
  {
    question: 'Welke merken zijn goed beschikbaar in Nederland?',
    answer: 'Daikin, Mitsubishi Electric, NIBE, Viessmann, Vaillant en Bosch zijn ruim beschikbaar bij installateurs. Panasonic, Samsung, LG en Toshiba zijn minder vertegenwoordigd maar wel leverbaar. Vraag altijd naar beschikbaarheid en onderhoudsservice in jouw regio.',
  },
  {
    question: 'Hoelang is de garantie bij verschillende merken?',
    answer: 'De meeste fabrikanten bieden 5 jaar standaardgarantie. Toshiba biedt 3 jaar. Veel merken bieden verlengde garanties tot 7-10 jaar tegen extra kosten. Controleer altijd de exacte voorwaarden en of registratie verplicht is.',
  },
];


export default function MarkenPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        badge="Vergelijking 2026"
        title="Warmtepompen Merken Vergelijken"
        subtitle="Ontdek de top 10 merken met prijzen, efficiëntie en beoordelingen"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Merken', href: '/merken' },
        ]}
      />

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-text-main mb-2">Top 10 Warmtepomp Merken</h2>
          <p className="text-text-muted">Volledige vergelijking op efficiëntie, beoordeling en prijs</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden border border-border">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Merk</th>
                <th className="px-6 py-4 text-left font-semibold">Land</th>
                <th className="px-6 py-4 text-center font-semibold">SCOP-bereik</th>
                <th className="px-6 py-4 text-center font-semibold">Garantie</th>
                <th className="px-6 py-4 text-left font-semibold">Prijs (incl.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {brands.map((brand, idx) => (
                <tr key={idx} className="hover:bg-surface-alt transition-colors">
                  <td className="px-6 py-4 font-semibold text-text-main">{brand.name}</td>
                  <td className="px-6 py-4 text-text-muted">{brand.country}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" />
                      <span className="font-semibold text-text-main">{brand.copRange}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-text-main text-sm">{brand.guarantee}</span>
                  </td>
                  <td className="px-6 py-4 text-text-main font-medium">{brand.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-blue-900">
            <strong>SCOP-waarden:</strong> De SCOP-waarden zijn seizoensgemiddelden bij W35 (vloerverwarming, 35°C aanvoertemperatuur). Bij hogere temperaturen (radiatoren, 55°C) ligt de SCOP lager. Raadpleeg de fabrikant productbladen voor exacte waarden per model.
          </p>
        </div>

        <p className="text-sm text-text-muted mt-4">
          * Prijzen zijn inclusief standaardinstallatie. Werkelijke kosten kunnen variëren op basis van je situatie.
        </p>
      </section>

      {/* Top 3 Brands Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-surface-alt rounded-3xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-2">De Top 3 Merken in Detail</h2>
          <p className="text-text-muted">Hier zijn onze drie meest aanbevolen warmtepomp merken</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topBrands.map((brand) => (
            <div key={brand.name} className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              {/* Rank Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full mb-4">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-900">#{brand.rank}</span>
              </div>

              <h3 className="text-2xl font-bold text-text-main mb-2">{brand.name}</h3>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <p className="text-sm text-text-muted mb-1">Efficiëntie (SCOP)</p>
                  <p className="text-2xl font-bold text-primary">{brand.copRange}</p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Garantie</p>
                  <p className="text-2xl font-bold text-primary">{brand.guarantee}</p>
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-6">
                <h4 className="font-semibold text-text-main mb-3">Sterktes:</h4>
                <ul className="space-y-2">
                  {brand.strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
                <p className="text-sm font-semibold text-sky-900">Ideaal voor:</p>
                <p className="text-sm text-sky-800">{brand.ideal}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl p-8 border border-border">
          <h2 className="text-3xl font-bold text-text-main mb-8">Tips voor het Kiezen van een Merk</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: '1. Focus op COP-waarde',
                description:
                  'Een hoger COP betekent meer besparing. Het verschil tussen COP 3.5 en 4.2 is ongeveer 20% meer besparing op je jaarlijkse energierekening.',
              },
              {
                icon: Award,
                title: '2. Controleer beschikbaarheid',
                description:
                  'Zorg dat het merk goed beschikbaar is in jouw regio. Dit is belangrijk voor onderhoud, vervangingsonderdelen en service.',
              },
              {
                icon: BarChart3,
                title: '3. Vergelijk totale kosten',
                description:
                  'Kijk niet alleen naar aankoopprijs. Een duurder, efficiënter merk kan dankzij lagere energierekeningen sneller terugbetaald zijn.',
              },
              {
                icon: Star,
                title: '4. Lees ervaringen',
                description:
                  'Kijk naar beoordelingen en ervaringen van andere gebruikers. Betrouwbaarheid en klantenservice zijn net zo belangrijk als technische specs.',
              },
            ].map((tip, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-sky-100">
                    <tip.icon className="h-6 w-6 text-sky-700" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-text-main mb-2">{tip.title}</h3>
                  <p className="text-text-muted text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Range Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              range: 'Budget (€5.000 - €7.000)',
              brands: 'Samsung, LG, Toshiba',
              desc: 'Goede basis-opties met redelijke efficiëntie',
              bgColor: 'bg-blue-50',
              borderColor: 'border-blue-200',
            },
            {
              range: 'Midden (€7.000 - €12.000)',
              brands: 'Daikin, Panasonic, Viessmann',
              desc: 'Uitstekende verhouding prijs-kwaliteit',
              bgColor: 'bg-emerald-50',
              borderColor: 'border-emerald-200',
            },
            {
              range: 'Premium (€12.000 - €16.000)',
              brands: 'NIBE, Mitsubishi Electric',
              desc: 'Hoogste efficiëntie en duurzaamheid',
              bgColor: 'bg-amber-50',
              borderColor: 'border-amber-200',
            },
          ].map((category, idx) => (
            <div key={idx} className={`${category.bgColor} rounded-2xl p-6 border ${category.borderColor}`}>
              <h3 className="font-bold text-text-main mb-2">{category.range}</h3>
              <p className="text-sm text-text-muted mb-3">{category.brands}</p>
              <p className="text-xs text-text-muted italic">{category.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sources */}
      <Sources
        laatstBijgewerkt="maart 2026"
        sources={[
          { naam: 'Daikin Nederland', url: 'https://www.daikin.nl/nl_nl/consument/products-and-advice/product-categories/heat-pumps.html', toelichting: 'Daikin warmtepomp modellen en specificaties' },
          { naam: 'NIBE Nederland', url: 'https://www.nibe.eu/nl-nl/producten/warmtepompen', toelichting: 'NIBE warmtepomp specificaties en SCOP-waarden' },
          { naam: 'Milieu Centraal — Welke warmtepompen zijn er?', url: 'https://www.milieucentraal.nl/energie-besparen/duurzaam-verwarmen-en-koelen/welke-warmtepompen-zijn-er/', toelichting: 'Onafhankelijk overzicht warmtepomp typen' },
          { naam: 'RVO.nl — Meldcodelijst warmtepompen', url: 'https://www.rvo.nl/subsidies-financiering/isde/meldcodelijsten/warmtepompen', toelichting: 'Officiële lijst goedgekeurde warmtepompen met SCOP' },
        ]}
      />

      {/* FAQ */}
      <section className="bg-surface-alt py-8">
        <FAQSchema items={faqItems} />
      </section>
    </>
  );
}
