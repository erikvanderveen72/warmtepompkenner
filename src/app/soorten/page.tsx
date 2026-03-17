import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Sources from '@/components/Sources';
import { Thermometer, Check, X } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Soorten Warmtepompen 2026 - Welk Type Past Bij Jou?',
  description: 'Vergelijk alle 5 types warmtepompen: lucht-water, bodem-water, hybride, lucht-lucht en water-water. Ontdek COP, prijzen en welk type het beste bij jou past.',
  keywords: 'warmtepompen types, lucht-water, bodem-water, hybride, lucht-lucht, water-water',
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen lucht-water en bodem-water warmtepompen?',
    answer:
      'Lucht-water warmtepompen halen warmte uit de lucht (lager COP, goedkoper), terwijl bodem-water warmtepompen warmte uit de grond halen (hoger COP, duurder). Bodem-water is efficiënter maar vereist graafwerk.',
  },
  {
    question: 'Wat betekent COP en hoe hoger hoe beter?',
    answer:
      'COP (Coefficient of Performance) is het rendement van een warmtepomp. Een COP van 4 betekent dat je voor elke kWh elektriciteit 4 kWh warmte krijgt. Hoger = efficiënter = lager energieverbruik.',
  },
  {
    question: 'Is een hybride warmtepomp geschikt voor mijn woning?',
    answer:
      'Hybride systemen combineren een warmtepomp met een gasboiler. Ze zijn ideaal als je al een gasketel hebt en wilt upgraden zonder alles te vervangen. Goede tussenvorm met lager COP maar lagere investering.',
  },
  {
    question: 'Wat zijn de voordelen van lucht-lucht warmtepompen?',
    answer:
      'Lucht-lucht systemen (split units) zijn het goedkoopst, makkelijk te installeren en geven ook koeling. Nadeel: lager COP en geschikt vooral voor mild klimaat of als aanvulling op andere verwarming.',
  },
  {
    question: 'Waarom is water-water warmtepomp het meest efficient?',
    answer:
      'Water-water systemen halen warmte uit grondwater, wat stabiel blijft rond 10-12°C. Dit geeft het hoogste COP (5.0). Nadeel: vereist bronnen en diepe putten, dus duur en niet overal toegestaan.',
  },
  {
    question: 'Hoeveel duurder is een bodem-water dan lucht-water?',
    answer:
      'Bodem-water kost €15.000-€25.000, lucht-water €6.000-€12.000. Het verschil wordt deels terugverdiend door lagere energiekosten dankzij hoger COP en langere levensduur.',
  },
];

const heatPumpTypes = [
  {
    name: 'Lucht-Water',
    cop: 3.5,
    priceMin: 5000,
    priceMax: 12000,
    description:
      'De meest voorkomende keuze in Nederland. Haalt warmte uit buitenlucht voor verwarming en warm water.',
    voordelen: [
      'Goedkoopste optie',
      'Makkelijk te installeren',
      'Werkt bijna overal',
      'Weinig onderhoud nodig',
      'Geen graafwerk',
    ],
    nadelen: [
      'Lager rendement (COP 3.5)',
      'Minder efficient in koude winters',
      'Geluid buitenunit',
      'Niet geschikt voor zeer lage temperaturen',
    ],
  },
  {
    name: 'Bodem-Water',
    cop: 4.5,
    priceMin: 15000,
    priceMax: 30000,
    description:
      'Haalt warmte uit de grond via buizen. Zeer efficient vanwege stabiele grondtemperatuur.',
    voordelen: [
      'Hoogste rendement (COP 4.5)',
      'Werkt optimaal in winter',
      'Zacht en stil',
      'Langste levensduur (25+ jaar)',
      'Kostenbesparing op lange termijn',
    ],
    nadelen: [
      'Duurste optie',
      'Vereist graafwerk/boren',
      'Niet overal toegestaan',
      'Langere installatietijd',
      'Grondonderzoek nodig',
    ],
  },
  {
    name: 'Hybride',
    cop: 3.0,
    priceMin: 4000,
    priceMax: 7000,
    description:
      'Combineert warmtepomp met bestaande gasboiler. Schakelt automatisch over als nodig.',
    voordelen: [
      'Laagste installatiekosten',
      'Kan met bestaande cv aansluiting',
      'Backup op vorstdagen',
      'Geleidelijke overgang naar duurzaam',
      'Geschikt voor oudere woningen',
    ],
    nadelen: [
      'Lager COP (3.0)',
      'Nog afhankelijk van gas',
      'Twee systemen onderhouden',
      'Minder duurzaam',
      'Hogere operationele kosten',
    ],
  },
  {
    name: 'Lucht-Lucht',
    cop: 3.2,
    priceMin: 1500,
    priceMax: 4000,
    description:
      'Split units die lucht verwarmen/koelen. Geen radiators nodig. Compact en snel geïnstalleerd.',
    voordelen: [
      'Goedkoopste totaal',
      'Snelle installatie (1-2 dagen)',
      'Ook koeling mogelijk',
      'Zichtbaar rendement',
      'Geen radiators nodig',
    ],
    nadelen: [
      'Lager COP (3.2)',
      'Binnenunit zichtbaar',
      'Werkt niet met radiators',
      'Geluid van unit',
      'Regelgeving verschilt per gemeente',
    ],
  },
  {
    name: 'Water-Water',
    cop: 5.0,
    priceMin: 18000,
    priceMax: 30000,
    description:
      'Haalt warmte uit grondwater via bronnen. Meest efficient en duurzaam.',
    voordelen: [
      'Hoogste COP (5.0)',
      'Meest duurzaam',
      'Zeer betrouwbaar',
      'Optimaal rendement jaar-rond',
      'Zacht en stil',
    ],
    nadelen: [
      'Zeer duur (tot €30.000)',
      'Vereist twee diepe bronnen',
      'Zeer strenge regelgeving',
      'Niet overal toegestaan',
      'Onderzoekskosten hoog',
    ],
  },
];

const decisionFactors = [
  {
    title: 'Budget',
    items: [
      { type: 'Lucht-Lucht', text: '€1.500-€4.000 (minst duur)' },
      { type: 'Hybride', text: '€4.000-€7.000' },
      { type: 'Lucht-Water', text: '€5.000-€12.000' },
      { type: 'Bodem-Water', text: '€15.000-€30.000' },
      { type: 'Water-Water', text: '€18.000-€30.000 (meest duur)' },
    ],
  },
  {
    title: 'Efficiëntie (COP)',
    items: [
      { type: 'Water-Water', text: 'COP 5.0 (best)' },
      { type: 'Bodem-Water', text: 'COP 4.5' },
      { type: 'Lucht-Water', text: 'COP 3.5' },
      { type: 'Lucht-Lucht', text: 'COP 3.2' },
      { type: 'Hybride', text: 'COP 3.0 (laagst)' },
    ],
  },
  {
    title: 'Installatie',
    items: [
      {
        type: 'Lucht-Lucht',
        text: 'Snelst (1-2 dagen), geen graafwerk',
      },
      { type: 'Hybride', text: 'Snel (2-3 dagen), aanpassingen cv' },
      {
        type: 'Lucht-Water',
        text: 'Normaal (3-5 dagen), buitenunit',
      },
      {
        type: 'Bodem-Water',
        text: 'Langzaam (1-2 weken), veel voorbereiding',
      },
      {
        type: 'Water-Water',
        text: 'Langzaam (2-4 weken), onderzoeken nodig',
      },
    ],
  },
];

export default function SoortenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <PageHero
        badge="Overzicht 2026"
        title="Soorten Warmtepompen"
        subtitle="Vergelijk alle 5 types warmtepompen en ontdek welk systeem het beste bij jouw situatie past."
        highlightedSubtitle="Welk type past bij jou?"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Soorten', href: '/soorten' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Snelle Vergelijking
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Type
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                    COP
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                    Prijs
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                    Geschiktheid
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {heatPumpTypes.map((type) => (
                  <tr key={type.name} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {type.name}
                    </td>
                    <td className="px-6 py-4 text-center text-slate-700">
                      {type.cop}
                    </td>
                    <td className="px-6 py-4 text-right text-slate-700">
                      €{type.priceMin.toLocaleString('nl-NL')} - €
                      {type.priceMax.toLocaleString('nl-NL')}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                        {type.name === 'Lucht-Water'
                          ? 'Meest Gebruikt'
                          : type.name === 'Bodem-Water'
                            ? 'Best'
                            : 'Niche'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Type Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Gedetailleerde Vergelijking
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {heatPumpTypes.map((type) => (
              <div
                key={type.name}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition"
              >
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-4 border-b border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900">
                    {type.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {type.description}
                  </p>
                </div>

                <div className="px-6 py-4">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">
                        Rendement
                      </p>
                      <p className="text-lg font-bold text-blue-600">COP {type.cop}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">
                        Prijs
                      </p>
                      <p className="text-lg font-bold text-blue-600">
                        €{type.priceMin.toLocaleString('nl-NL')} -<br/>
                        <span className="text-sm">€{type.priceMax.toLocaleString('nl-NL')}</span>
                      </p>
                    </div>
                  </div>

                  {/* Voordelen */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600" />
                      Voordelen
                    </h4>
                    <ul className="space-y-2">
                      {type.voordelen.map((voordeel, idx) => (
                        <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold mt-0.5">
                            •
                          </span>
                          {voordeel}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nadelen */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <X className="w-5 h-5 text-red-600" />
                      Nadelen
                    </h4>
                    <ul className="space-y-2">
                      {type.nadelen.map((nadeel, idx) => (
                        <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-red-600 font-bold mt-0.5">
                            •
                          </span>
                          {nadeel}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Decision Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Welk Type Past Bij Jou?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {decisionFactors.map((factor) => (
              <div
                key={factor.title}
                className="bg-white rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-blue-600" />
                  {factor.title}
                </h3>
                <div className="space-y-3">
                  {factor.items.map((item, idx) => (
                    <div key={idx} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                      <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                        {item.type}
                      </p>
                      <p className="text-sm text-slate-700 mt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Aanbeveling Box */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Onze Aanbeveling
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Voor de Meeste Huishoudens
              </h4>
              <p className="text-slate-700 mb-3">
                <strong>Lucht-Water</strong> is de beste keuze: betaalbaar,
                betrouwbaar en goed rendement voor Nederlandse omstandigheden.
              </p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Prijs/prestatie ratio optimaal</li>
                <li>• Eenvoudige installatie</li>
                <li>• Voldoende COP (3.5)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Voor Langetermijn Besparing
              </h4>
              <p className="text-slate-700 mb-3">
                <strong>Bodem-Water</strong> als budget toelaat: hoger
                rendement en lagere energiekosten op lange termijn.
              </p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Beste COP (4.5)</li>
                <li>• Langste levensduur</li>
                <li>• Snelste terugverdienmoment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-16">
          <Sources laatstBijgewerkt="maart 2026" sources={[
            { naam: 'Milieu Centraal — Welke warmtepompen zijn er?', url: 'https://www.milieucentraal.nl/energie-besparen/duurzaam-verwarmen-en-koelen/welke-warmtepompen-zijn-er/', toelichting: 'Onafhankelijk overzicht alle warmtepomp typen' },
            { naam: 'Milieu Centraal — Volledig elektrische warmtepomp', url: 'https://www.milieucentraal.nl/energie-besparen/duurzaam-verwarmen-en-koelen/volledige-warmtepomp/', toelichting: 'Kosten en rendement full-electric warmtepompen' },
            { naam: 'Milieu Centraal — Hybride warmtepomp', url: 'https://www.milieucentraal.nl/energie-besparen/duurzaam-verwarmen-en-koelen/hybride-warmtepomp/', toelichting: 'Kosten en werking hybride warmtepompen' },
          ]} />
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Veelgestelde Vragen
          </h2>
          <div className="grid gap-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 group cursor-pointer"
              >
                <summary className="font-semibold text-slate-900 flex items-center justify-between">
                  {item.question}
                  <span className="text-blue-600 group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>
                <p className="text-slate-700 mt-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* FAQ Schema */}
      <FAQSchema items={faqItems} />
    </main>
  );
}
