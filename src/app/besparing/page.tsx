import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Sources from '@/components/Sources';
import BesparingCalculator from '@/components/BesparingCalculator';
import { TrendingDown, Zap, Leaf, Lightbulb, DollarSign, Gauge } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Warmtepomp Besparing Berekenen 2026 - Calculator',
  description: 'Bereken hoeveel je bespaart met een warmtepomp. Ontdek je jaarlijkse gasbesparing, terugverdientijd en CO2-reductie met onze gratis calculator.',
};

export const revalidate = 3600;

const faqItems = [
  {
    question: 'Hoe bereken ik mijn besparing met een warmtepomp?',
    answer: 'De besparing wordt berekend op basis van je huidige gasverbruik en het type warmtepomp dat je installeert. We gebruiken de gemiddelde COP (efficiëncy) per type en de huidige gasprijzen. Met de calculator kun je direct zien hoeveel je per jaar bespaart.'
  },
  {
    question: 'Wat is de gemiddelde besparing per type warmtepomp?',
    answer: 'Een hybride warmtepomp bespaart ongeveer €500-€700 per jaar. Een lucht-water warmtepomp bespaart €700-€1.100 per jaar. Een bodem-water warmtepomp bespaart het meest: €900-€1.300 per jaar. Dit is gebaseerd op gemiddeld gasverbruik van 1.200 m³/jaar.'
  },
  {
    question: 'Hoe lang duurt het voor een warmtepomp zichzelf terugverdient?',
    answer: 'Met subsidie verdient een lucht-water warmtepomp zichzelf terug in 8-12 jaar. Een hybride warmtepomp in 6-9 jaar. Een bodem-water warmtepomp in 10-15 jaar vanwege de hogere installatiekosten. Dit varieert per situatie.'
  },
  {
    question: 'Bespaar ik meer met betere isolatie?',
    answer: 'Ja, huizen met betere isolatie profiteren meer van warmtepompen. Bij goede isolatie kan je besparing tot 30-40% hoger zijn. Dit komt omdat warmtepompen efficiënter werken bij lagere verwarmingstemperaturen.'
  },
  {
    question: 'Hoeveel CO2 reduceer ik met een warmtepomp?',
    answer: 'Met een gemiddelde warmtepomp reduceer je je CO2-uitstoot met 40-60% omdat je geen gas meer verbrandt. Dit is afhankelijk van hoe schoon de elektriciteit in het net is. Dit bedrag stijgt elk jaar omdat het elektriciteitsnet groeener wordt.'
  },
  {
    question: 'Zijn er verborgen kosten bij het besparen met een warmtepomp?',
    answer: 'De voornaamste kosten zijn installatie en onderhoud. Een jaarlijks onderhoud kost €100-€200. De elektriciteitskosten zullen stijgen maar dit is veel minder dan de gasbesparing. In totaal bespaar je nog steeds aanzienlijk.'
  }
];

export default function BesparingPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="Calculator 2026"
        title="Bereken je warmtepomp besparing"
        subtitle="Ontdek hoeveel je jaarlijks bespaart op gas en wanneer je investering terugverdient"
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Besparing', href: '/besparing' }
        ]}
      />

      {/* Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <BesparingCalculator />
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-text-main mb-4">Hoe werkt de berekening?</h3>
            <p className="text-text-muted mb-4">
              Onze calculator gebruikt actuele data van 2026 om je besparing nauwkeurig te berekenen:
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span><strong>Gasverbruik:</strong> We gebruiken je huidige jaarlijkse gasverbruik als basis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span><strong>COP-waarde:</strong> De efficiëntie van de warmtepomp bepaalt hoeveel elektriciteit nodig is</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span><strong>Prijzen:</strong> Gebaseerd op gemiddelde energieprijzen maart 2026</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-1">✓</span>
                <span><strong>Type warmtepomp:</strong> Elk type heeft andere efficiënties</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-2xl font-bold text-text-main mb-4">Waarom bespaart een warmtepomp?</h3>
            <p className="text-text-muted mb-4">
              Warmtepompen zijn 3-5x efficiënter dan gasketels:
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Energie-efficiëntie:</strong> Voor elke eenheid elektriciteit haal je 3-5 eenheden warmte</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Geen gasverbruik:</strong> Je gebruikt helemaal geen gas meer voor verwarming</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Lagere energiekosten:</strong> Elektriciteit is goedkoper per energieeenheid</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Savings Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-text-main mb-2 text-center">Besparing per type warmtepomp</h2>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-8">
          Gemiddelde jaarlijkse besparing bij 1.040 m³ gasverbruik (maart 2026 prijzen)
        </p>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-8 text-sm italic">
          Milieu Centraal rekent met gemiddelde gasprijs van €1,37/m³ en €0,21/kWh elektra (projectie 2026-2040)
        </p>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden border border-border">
            <thead>
              <tr className="bg-stone-50 border-b border-border">
                <th className="px-6 py-4 text-left text-sm font-bold text-text-main">Type warmtepomp</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text-main">Jaarlijkse besparing</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text-main">COP waarde</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text-main">Terugverdientijd</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-text-main">Hybride warmtepomp</p>
                    <p className="text-sm text-text-muted">Gas + elektrisch</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="bg-emerald-50 rounded-lg px-3 py-2 inline-block border border-emerald-200">
                    <p className="font-bold text-emerald-700">€500-€700</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-text-muted">SCOP 2.5-3.5</td>
                <td className="px-6 py-4 text-text-muted">6-9 jaar</td>
              </tr>
              <tr className="border-b border-border hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-text-main">Lucht-water warmtepomp</p>
                    <p className="text-sm text-text-muted">Meest gebruikelijk</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="bg-emerald-50 rounded-lg px-3 py-2 inline-block border border-emerald-200">
                    <p className="font-bold text-emerald-700">€700-€1.100</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-text-muted">~3,0-3,5</td>
                <td className="px-6 py-4 text-text-muted">8-12 jaar</td>
              </tr>
              <tr className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-text-main">Bodem-water warmtepomp</p>
                    <p className="text-sm text-text-muted">Meest efficiënt</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="bg-emerald-50 rounded-lg px-3 py-2 inline-block border border-emerald-200">
                    <p className="font-bold text-emerald-700">€900-€1.300</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-text-muted">~4,0-5,0</td>
                <td className="px-6 py-4 text-text-muted">10-15 jaar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-sky-50 rounded-2xl p-6 border border-sky-200">
          <p className="text-sm text-text-muted">
            <strong>Let op:</strong> Dit zijn gemiddelde schattingen. Je werkelijke besparing hangt af van je huisafmeting, isolatie, huishoudensize en gebruiksgedrag. Gebruik de calculator hierboven voor een persoonlijke berekening.
          </p>
        </div>
      </section>

      {/* CO2 Savings Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-200">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-white rounded-xl p-4">
              <Leaf className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-2">CO2-reductie met warmtepompen</h2>
              <p className="text-text-muted">Bespaar niet alleen op je rekening, maar ook op de planeet</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-emerald-100">
              <p className="text-sm text-text-muted mb-2">CO2-besparing per jaar</p>
              <p className="text-3xl font-bold text-emerald-600">ca. 1.500-2.000 kg</p>
              <p className="text-xs text-text-muted mt-2">Per woning met gemiddeld gasverbruik (1.040 m³)</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-emerald-100">
              <p className="text-sm text-text-muted mb-2">CO2-reductie</p>
              <p className="text-3xl font-bold text-emerald-600">40-60%</p>
              <p className="text-xs text-text-muted mt-2">Vergeleken met aardgasverwarming</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-emerald-100">
              <p className="text-sm text-text-muted mb-2">In 10 jaar</p>
              <p className="text-3xl font-bold text-emerald-600">20-25 ton</p>
              <p className="text-xs text-text-muted mt-2">Totale CO2-besparing</p>
            </div>
          </div>

          <p className="text-text-muted mt-6 text-sm">
            Deze cijfers worden elk jaar beter omdat het elektriciteitsnet steeds schoner wordt met meer zonne- en windenergie. In 2026 is elektriciteit al aanzienlijk schoner dan gas.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-text-main mb-2 text-center">Tips voor maximale besparing</h2>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
          Zo haal je het meeste uit je warmtepomp
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-50 rounded-lg p-3">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-text-main">Zorg voor goede isolatie</h3>
            </div>
            <p className="text-text-muted text-sm">
              Isoleer je woning goed voordat je een warmtepomp installeert. Dit kan je besparing met 20-30% verhogen. Zorg voor goede deurafdichtingen en dakisolatie.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-amber-50 rounded-lg p-3">
                <Gauge className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-text-main">Zet de juiste temperatuur</h3>
            </div>
            <p className="text-text-muted text-sm">
              Warmtepompen werken meest efficiënt bij lage voortuin-temperaturen (35-45°C). Dit bespaart aanzienlijk ten opzichte van traditionele ketels die 80°C nodig hebben.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-text-main">Kies een warmtepomp met goede COP</h3>
            </div>
            <p className="text-text-muted text-sm">
              Een COP van 4,0 of hoger betekent dat je 4 eenheden warmte krijgt per eenheid elektriciteit. Dit is beter dan een COP van 3,0.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-50 rounded-lg p-3">
                <TrendingDown className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-text-main">Onderhoudsplan</h3>
            </div>
            <p className="text-text-muted text-sm">
              Een goed onderhouden warmtepomp werkt efficiënter. Plan jaarlijks onderhoud in en vervang filters op tijd.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-indigo-50 rounded-lg p-3">
                <DollarSign className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-text-main">Gebruik goedkope stroombundels</h3>
            </div>
            <p className="text-text-muted text-sm">
              Veel leveranciers bieden speciale tarieven voor warmtepompgebruikers. Dit kan je elektriciteitskosten met 20% verlagen.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-rose-50 rounded-lg p-3">
                <Leaf className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-bold text-text-main">Controleer instellingen regelmatig</h3>
            </div>
            <p className="text-text-muted text-sm">
              Zorg dat je thermostaat goed afgesteld is. Elk graad lager kan 5-10% besparing opleveren.
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Sources laatstBijgewerkt="maart 2026" sources={[
          { naam: 'Milieu Centraal — Gemiddeld energieverbruik', url: 'https://www.milieucentraal.nl/energie-besparen/inzicht-in-je-energierekening/gemiddeld-energieverbruik/', toelichting: 'Gemiddeld gasverbruik Nederlandse huishoudens' },
          { naam: 'CBS — Energierekening', url: 'https://www.cbs.nl/nl-nl/longread/aanvullende-statistische-diensten/2026/de-energierekening-januari-2026/technische-toelichting', toelichting: 'Actuele energieprijzen en verbruikcijfers' },
          { naam: 'CO2emissiefactoren.nl', url: 'https://co2emissiefactoren.nl/', toelichting: 'CO2-emissiefactoren aardgas (1,88 kg/m³)' },
          { naam: 'Milieu Centraal — Warmtepomp besparing', url: 'https://www.hier.nu/warmtepomp-bespaarchecker', toelichting: 'Warmtepomp bespaarchecker' },
        ]} />
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-alt py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSchema items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start je besparing vandaag nog
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Duizenden Nederlanders besparen al honderden euro&apos;s per jaar met een warmtepomp. Bereken nu hoeveel jij kunt besparen en ontdek de beste opties voor jouw situatie.
          </p>
          <a href="#calculator" className="inline-flex items-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
            <TrendingDown className="mr-2 w-5 h-5" />
            Bereken je besparing
          </a>
        </div>
      </section>
    </>
  );
}
