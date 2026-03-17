import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
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
    cop: 3.8,
    rating: 4.5,
    price: '€6.000 - €12.000',
    description: 'Betrouwbare en efficiënte warmtepompen met goed onderhoud.',
  },
  {
    name: 'Mitsubishi Electric',
    country: 'Japan',
    cop: 4.0,
    rating: 4.5,
    price: '€7.000 - €14.000',
    description: 'Zeer efficiënte warmtepompen met innovatieve technologie.',
  },
  {
    name: 'NIBE',
    country: 'Zweden',
    cop: 4.2,
    rating: 4.6,
    price: '€8.000 - €16.000',
    description: 'Hoogste COP-waarden en duurzame kwaliteit.',
  },
  {
    name: 'Viessmann',
    country: 'Duitsland',
    cop: 3.9,
    rating: 4.3,
    price: '€7.500 - €14.000',
    description: 'Solide Duitse engineering met goede ondersteuning.',
  },
  {
    name: 'Vaillant',
    country: 'Duitsland',
    cop: 3.7,
    rating: 4.2,
    price: '€7.000 - €13.000',
    description: 'Betrouwbare warmtepompen van een gevestigde fabrikant.',
  },
  {
    name: 'Bosch',
    country: 'Duitsland',
    cop: 3.6,
    rating: 4.0,
    price: '€6.500 - €11.000',
    description: 'Goede verhouding prijs-kwaliteit en brede productlijn.',
  },
  {
    name: 'Panasonic',
    country: 'Japan',
    cop: 3.7,
    rating: 4.1,
    price: '€6.000 - €11.000',
    description: 'Betrouwbare Japanse technologie tegen redelijke prijs.',
  },
  {
    name: 'Samsung',
    country: 'Zuid-Korea',
    cop: 3.5,
    rating: 3.9,
    price: '€5.500 - €10.000',
    description: 'Budget-vriendelijk met degelijke prestaties.',
  },
  {
    name: 'LG',
    country: 'Zuid-Korea',
    cop: 3.6,
    rating: 4.0,
    price: '€5.000 - €9.500',
    description: 'Zeer betaalbaar met goede efficiëntie.',
  },
  {
    name: 'Toshiba',
    country: 'Japan',
    cop: 3.5,
    rating: 3.8,
    price: '€5.500 - €10.000',
    description: 'Solide prestatie voor een redelijke prijs.',
  },
];

const topBrands = [
  {
    name: 'NIBE',
    rank: 1,
    cop: 4.2,
    rating: 4.6,
    strengths: ['Hoogste COP-waarden (4.2)', 'Zeer duurzaam', 'Beste lange termijn prestaties'],
    ideal: 'Beste keuze voor maximale besparing',
  },
  {
    name: 'Mitsubishi Electric',
    rank: 2,
    cop: 4.0,
    rating: 4.5,
    strengths: ['Innovatieve technologie', 'Zeer betrouwbaar', 'Uitstekende klantenservice'],
    ideal: 'Ideaal voor modernisering',
  },
  {
    name: 'Daikin',
    rank: 3,
    cop: 3.8,
    rating: 4.5,
    strengths: ['Wereldwijd toonaangevend', 'Uitgebreid servicecentrum', 'Goede verhouding prijs-kwaliteit'],
    ideal: 'Veilige keuze met sterke ondersteuning',
  },
];

const faqItems = [
  {
    question: 'Welk warmtepompmerk is het beste?',
    answer: 'Er is geen "best" merk voor iedereen. NIBE leidt in efficiëntie (COP 4.2), Mitsubishi Electric blinkt uit in technologie, en Daikin biedt de beste ondersteuning. Kies op basis van je budget, woning en prioriteiten.',
  },
  {
    question: 'Wat is het verschil tussen merken in COP-waarde?',
    answer: 'COP (Coefficient of Performance) geeft aan hoeveel warmte een warmtepomp genereert per eenheid energie. NIBE (4.2) en Mitsubishi Electric (4.0) zijn zeer efficiënt. Een hoger COP betekent lagere energierekeningen. Het verschil tussen 3.5 en 4.2 is ongeveer 20% meer besparing.',
  },
  {
    question: 'Zijn Japanse merken beter dan Duitse merken?',
    answer: 'Beide hebben voordelen. Japanse merken (Daikin, Mitsubishi, Panasonic) blinken uit in efficiëntie en innovatie. Duitse merken (Viessmann, Vaillant, Bosch) zijn berucht om betrouwbaarheid en service. Kies wat belangrijk is voor jou.',
  },
  {
    question: 'Moet ik een duur merk kiezen voor betere kwaliteit?',
    answer: 'Niet altijd. Veel betaalmerk-opties (Samsung, LG, Toshiba) hebben vergelijkbare garanties en betrouwbaarheid. Het verschil zit meer in efficiëntie (COP) en langetermijnondersteuning. Een duurder merk kan meer jaren besparing opleveren.',
  },
  {
    question: 'Welke merken zijn goed beschikbaar in Nederland?',
    answer: 'Daikin, Mitsubishi Electric, NIBE, Viessmann, Vaillant en Bosch zijn ruim beschikbaar bij installateurs. Panasonic, Samsung, LG en Toshiba zijn minder vertegenwoordigd maar wel leverbaar.',
  },
  {
    question: 'Hoelang is de garantie bij verschillende merken?',
    answer: 'De meeste fabrikanten bieden 2-5 jaar garantie op defecten. Premiummerken zoals NIBE bieden tot 10 jaar garantie op bepaalde componenten. Controleer altijd de exacte voorwaarden met je installateur.',
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push('★');
    } else if (i < rating) {
      stars.push('◆');
    } else {
      stars.push('☆');
    }
  }
  return stars.join('');
};

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
                <th className="px-6 py-4 text-center font-semibold">COP</th>
                <th className="px-6 py-4 text-center font-semibold">Beoordeling</th>
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
                      <span className="font-semibold text-text-main">{brand.cop}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-amber-500 font-semibold">{renderStars(brand.rating)}</span>
                      <span className="text-text-muted text-sm">{brand.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-main font-medium">{brand.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
                  <p className="text-sm text-text-muted mb-1">Efficiëntie (COP)</p>
                  <p className="text-2xl font-bold text-primary">{brand.cop}</p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Beoordeling</p>
                  <div className="flex items-center gap-1">
                    <span className="text-xl text-amber-500">{renderStars(brand.rating)}</span>
                    <span className="font-bold text-text-main">{brand.rating}</span>
                  </div>
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

      {/* FAQ */}
      <section className="bg-surface-alt py-8">
        <FAQSchema items={faqItems} />
      </section>
    </>
  );
}
