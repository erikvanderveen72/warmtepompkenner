import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Euro, Zap, Home, TrendingUp } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Warmtepomp Kosten 2026 - Prijzen per Type',
  description:
    'Ontdek de actuele warmtepomp kosten en prijzen per type in 2026. Hybride, lucht-water, bodem-water en meer. Inclusief installatiekosten en besparingen.',
  keywords: [
    'warmtepomp kosten',
    'warmtepomp prijs',
    'installatiekosten',
    'lucht-water kosten',
    'bodem-water kosten',
  ],
  openGraph: {
    title: 'Warmtepomp Kosten 2026 - Prijzen per Type',
    description:
      'Ontdek de actuele warmtepomp kosten en prijzen per type in 2026.',
    type: 'website',
    url: 'https://warmtepompkenner.nl/kosten',
  },
};

const faqItems = [
  {
    question: 'Hoeveel kost een warmtepomp gemiddeld?',
    answer:
      'De kosten van een warmtepomp variëren sterk afhankelijk van het type. Een lucht-lucht systeem kost €1.500-€4.000, terwijl een bodem-water warmtepomp €15.000-€25.000 kan kosten. Inclusief installatie moet je rekenen op 20-30% extra.',
  },
  {
    question: 'Wat zijn installatiekosten en hoe veel bedragen deze?',
    answer:
      'Installatiekosten hangen af van de complexiteit van je systeem. Voor een lucht-water systeem ligt dit tussen €2.000-€4.000. Werkuren voor montage en aansluitingen zijn hiervan een groot deel.',
  },
  {
    question: 'Krijg ik subsidie of teruggave voor een warmtepomp?',
    answer:
      'Ja, in Nederland zijn er verschillende steunregelingen. De ISDE-regeling (Investeringssubsidie Duurzame Energie) kan tot €6.000 subsidie geven. Ook zijn er belastingvoordelen en in sommige gemeenten aanvullende regelingen.',
  },
  {
    question: 'Hoeveel bespaar ik jaarlijks op stookkosten?',
    answer:
      'De jaarlijkse besparing hangt af van je huistype, huidiende verwarming en energiegebruik. Gemiddeld besparen huishoudens €800-€2.000 per jaar op stookkosten. Bij goede isolatie en optimaal gebruik kan dit oplopen tot €3.000.',
  },
  {
    question: 'Wat zijn de onderhoudskosten van een warmtepomp?',
    answer:
      'Warmtepompen hebben weinig onderhoud nodig. Jaarlijks onderhoud kost €100-€300. Dit is aanmerkelijk goedkoper dan traditionele verwarmingssystemen. Vervangingsonderdelen zijn ook betaalbaar.',
  },
  {
    question: 'Hoe lang gaat een warmtepomp mee?',
    answer:
      'Een goed onderhouden warmtepomp gaat gemiddeld 15-20 jaar mee. Sommige systemen halen zelfs 25 jaar. Dit betekent dat de warmtepomp zich in veel gevallen al terugverdient door energiebesparing.',
  },
];

const heatPumpTypes = [
  {
    name: 'Lucht-lucht',
    minPrice: 1500,
    maxPrice: 4000,
    efficiency: 'Hoog',
    installation: 'Eenvoudig',
  },
  {
    name: 'Hybride',
    minPrice: 3500,
    maxPrice: 7000,
    efficiency: 'Zeer hoog',
    installation: 'Gemiddeld',
  },
  {
    name: 'Lucht-water',
    minPrice: 6000,
    maxPrice: 12000,
    efficiency: 'Hoog',
    installation: 'Gemiddeld',
  },
  {
    name: 'Water-water',
    minPrice: 18000,
    maxPrice: 30000,
    efficiency: 'Zeer hoog',
    installation: 'Complex',
  },
  {
    name: 'Bodem-water',
    minPrice: 15000,
    maxPrice: 25000,
    efficiency: 'Zeer hoog',
    installation: 'Complex',
  },
];

const installationCosts = [
  { item: 'Toestelbezorging', cost: '€200-€500' },
  { item: 'Installatie toestel', cost: '€1.500-€2.500' },
  { item: 'Hydraulische aansluitingen', cost: '€800-€1.500' },
  { item: 'Elektrische aansluiting', cost: '€500-€1.200' },
  { item: 'Inregeling systeem', cost: '€300-€600' },
  { item: 'Oude verwarmingsinstallatie verwijdering', cost: '€200-€500' },
];

const costFactors = [
  {
    title: 'Huistype',
    description:
      'Nieuwbouw versus bestaande bouw. Oudere huizen kunnen extra investeringen vereisen voor isolatie en leidingwerk.',
  },
  {
    title: 'Systeemkeuze',
    description:
      'De keuze tussen lucht-lucht, lucht-water, bodem-water of water-water heeft grote invloed op de totale kosten.',
  },
  {
    title: 'Bestaande installatie',
    description:
      'Aanwezigheid van CV-ketels, leidingwerk en elektra bepalen hoeveel aanpassingen nodig zijn.',
  },
  {
    title: 'Locatie en ondergrond',
    description:
      'Voor bodem-water systemen is onderzoek naar bodemgesteldheid nodig. Ruimte en bereikbaarheid spelen ook een rol.',
  },
  {
    title: 'Merk en model',
    description:
      'Premium merken kosten meer dan budgetmerken, maar hebben vaak betere efficiency en garanties.',
  },
  {
    title: 'Arbeidskosten',
    description:
      'Regionale verschillen in arbeidskosten en moeilijkheid van installatie beïnvloeden de eindprijs.',
  },
];

const tips = [
  {
    icon: TrendingUp,
    title: 'Haal offerte van meerdere bedrijven',
    description:
      'Prijzen kunnen tussen installateurs sterk verschillen. Vraag minimaal 3 offerte aan voor een goed vergelijking.',
  },
  {
    icon: Euro,
    title: 'Onderzoek subsidieregels',
    description:
      'Via ISDE kun je tot €6.000 subsidie krijgen. Check ook lokale regelingen en fiscale aftrek mogelijkheden.',
  },
  {
    icon: Home,
    title: 'Investeer in isolatie',
    description:
      'Betere isolatie vergroot de efficiency van je warmtepomp en vermindert de benodigde capaciteit (en kosten).',
  },
];

export default function KostenPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Prijsinformatie"
        title="Warmtepomp Kosten"
        subtitle="Ontdek de actuele prijzen, installatiekosten en hoe je geld bespaart op verwarming"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Kosten', href: '/kosten' },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="mb-12">
          <p className="text-lg text-text-muted mb-4">
            De kostendoelstelling. De beslissing om een warmtepomp aan te schaffen is een belangrijke stap. Op deze pagina vind je gedetailleerde informatie over alle kosten die ermee
            samenhangen: aanschafprijzen per type, installatiekosten, subsidies en de financiële besparing die je realiseert.
          </p>
        </div>

        {/* Price Overview Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-6">
            Warmtepomp Prijzen per Type
          </h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-border">
            <div className="bg-primary text-white p-6">
              <h3 className="text-xl font-semibold">2026 Prijsoverzicht</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-text-main">
                      Type Warmtepomp
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-text-main">
                      Prijsrange
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-text-main">
                      Efficiency
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-text-main">
                      Installatie
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {heatPumpTypes.map((type, index) => (
                    <tr
                      key={index}
                      className="border-b border-border hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-text-main">
                        {type.name}
                      </td>
                      <td className="px-6 py-4 text-text-main">
                        €{type.minPrice.toLocaleString('nl-NL')} -{' '}
                        €{type.maxPrice.toLocaleString('nl-NL')}
                      </td>
                      <td className="px-6 py-4 text-text-main">
                        {type.efficiency}
                      </td>
                      <td className="px-6 py-4 text-text-main">
                        {type.installation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-accent bg-opacity-10 border-t border-border p-6">
              <p className="text-sm text-text-muted">
                <strong>Let op:</strong> Deze prijzen zijn alleen voor het toestel. Installatiekosten
                tellen hier niet bij op. Na installatie bedragen de totale kosten 20-30% meer.
              </p>
            </div>
          </div>
        </div>

        {/* Installation Costs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-6">
            Installatiekosten Breakdown
          </h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left font-semibold">
                      Installatie Onderdeel
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Geschatte Kosten
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {installationCosts.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-border hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-text-main">
                        {item.item}
                      </td>
                      <td className="px-6 py-4 text-text-main font-semibold">
                        {item.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 bg-accent bg-opacity-10 border border-accent rounded-2xl p-6">
            <p className="text-text-main font-semibold mb-2">
              Gemiddelde totale installatiekosten
            </p>
            <p className="text-2xl font-bold text-primary">
              €4.000 - €8.000
            </p>
            <p className="text-sm text-text-muted mt-2">
              Deze kosten kunnen lager of hoger zijn afhankelijk van lokale factoren.
            </p>
          </div>
        </div>

        {/* Cost Factors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-6">
            Wat Beïnvloedt de Kosten?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-semibold text-text-main mb-3">
                  {factor.title}
                </h3>
                <p className="text-text-muted">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="mb-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Rendement en Terugverdientijd
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm opacity-90 mb-2">Jaarlijkse Besparing</p>
              <p className="text-4xl font-bold">€800-€2.000</p>
            </div>
            <div>
              <p className="text-sm opacity-90 mb-2">Terugverdientijd</p>
              <p className="text-4xl font-bold">5-10 jaar</p>
            </div>
            <div>
              <p className="text-sm opacity-90 mb-2">Levensduur</p>
              <p className="text-4xl font-bold">15-20 jaar</p>
            </div>
          </div>
          <p className="text-sm opacity-90 mt-6">
            * Dit zijn gemiddelde waarden. De werkelijke besparing hangt af van je huistype,
            energiegebruik en het huidige verwarmingssysteem.
          </p>
        </div>

        {/* Tips Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-6">
            Kostenbesparing Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary bg-opacity-10 rounded-xl mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-main mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-text-muted">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subsidies Info */}
        <div className="mb-12 bg-accent bg-opacity-10 border border-accent rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">
            Beschikbare Subsidies en Teruggaven
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-text-main mb-2">
                ISDE (Investeringssubsidie Duurzame Energie)
              </h3>
              <p className="text-text-muted">
                Tot €6.000 subsidie voor een warmtepomp. Je huishouding moet aan bepaalde
                voorwaarden voldoen en het huis moet voor 1 januari 2022 gebouwd zijn.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">
                Belastingvoordeel Eigenwoningen
              </h3>
              <p className="text-text-muted">
                Bespaar tot 30% inkomstenbelasting op investeringen in duurzaamheid,
                waaronder warmtepompen. Maximaal €50.000 per jaar.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-main mb-2">
                Lokale Regelingen
              </h3>
              <p className="text-text-muted">
                Veel gemeentes bieden aanvullende subsidies. Informeer bij je gemeente
                naar de huidige mogelijkheden in jouw regio.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-8">
            Veelgestelde Vragen
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:border-primary transition-colors group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-text-main hover:text-primary transition-colors flex items-center justify-between">
                  <span>{item.question}</span>
                  <span className="transform transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-6 py-4 bg-gray-50 border-t border-border text-text-muted">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Schema */}
      <FAQSchema items={faqItems} />
    </div>
  );
}
