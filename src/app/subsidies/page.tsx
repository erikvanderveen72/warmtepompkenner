import { Metadata } from 'next';
import { ArrowRight, PiggyBank, CheckCircle, AlertCircle, FileText, Clock, Home, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';

export const revalidate = 3600;

const subsidyFaqItems = [
  {
    question: 'Hoeveel ISDE subsidie kan ik krijgen voor een warmtepomp in 2026?',
    answer: 'Voor een volledig elektrische warmtepomp krijg je tot €3.675 subsidie. Voor een hybride warmtepomp is dit €1.500. Je ontvangt dit als één keer betaling van de Regeling Stimulering Duurzame Energietransitie (ISDE).'
  },
  {
    question: 'Hoe lang duurt het voor ik de ISDE subsidie ontvang?',
    answer: 'Na indiening van je aanvraag duurt de behandeling gemiddeld 6-8 weken. Dit loopt via het ministerie van Economische Zaken. Na goedkeuring wordt het bedrag rechtstreeks naar je bankrekening overgemaakt.'
  },
  {
    question: 'Welke warmtepompen komen in aanmerking voor ISDE subsidie?',
    answer: 'Warmtepompen die op de RVO-lijst staan en een bepaalde COP (energie-efficiëncy) halen. Dit geldt voor lucht-water, bodem-water, lucht-lucht en hybride warmtepompen. Controleer op RVO.nl of je warmtepomp geschikt is.'
  },
  {
    question: 'Kan ik ISDE subsidie aanvragen als ik niet acht? Wat zijn de voorwaarden?',
    answer: 'Je kunt subsidie aanvragen als je eigenaar bent van een woning waarin je zelf woont of een rechtspersoon bent die eigenaar is. De woning moet in Nederland staan. Je mag geen andere isolatie-gerelateerde subsidies voor dezelfde werkzaamheden hebben ontvangen.'
  },
  {
    question: 'Hoe vraag ik ISDE subsidie aan voor mijn warmtepomp?',
    answer: 'Je dient de aanvraag in via MijnRVO.nl na installatie van de warmtepomp. Je hebt nodig: identiteitsbewijs, eigendomsbewijs van de woning, factuur installatie en garantie, aankoopbewijs warmtepomp, en bank- en girogegevens. De aanvraag moet binnen 6 maanden na installatie ingediend worden.'
  },
  {
    question: 'Kan ik ISDE subsidie aanvragen voor een warmtepomp die al 5 jaar geleden is geïnstalleerd?',
    answer: 'Nee, de aanvraag moet uiterlijk 6 maanden na installatie van de warmtepomp ingediend worden. Dit staat in de ISDE-regelgeving. Het moment van aanvraag indienen is bepalend, niet wanneer het apparaat is geïnstalleerd.'
  }
];

const requirements = [
  {
    icon: Home,
    title: 'Eigenaar van de woning',
    description: 'Je moet eigenaar zijn van de woning waarin de warmtepomp wordt geïnstalleerd.'
  },
  {
    icon: MapPin,
    title: 'Woning in Nederland',
    description: 'De woning moet zich op Nederlands grondgebied bevinden.'
  },
  {
    icon: FileText,
    title: 'Erkende installateur',
    description: 'De warmtepomp moet door een erkende installateur worden geïnstalleerd.'
  },
  {
    icon: CheckCircle,
    title: 'RVO-gekeurde warmtepomp',
    description: 'De warmtepomp moet op de RVO-goedkeuringenlijst staan.'
  }
];

const steps = [
  {
    number: 1,
    title: 'Warmtepomp selecteren',
    description: 'Kies een warmtepomp die op de RVO-goedkeuringenlijst staat. Dit kunnen lucht-water, bodem-water, lucht-lucht of hybride warmtepompen zijn.'
  },
  {
    number: 2,
    title: 'Installatie laten uitvoeren',
    description: 'Zorg dat een erkende installateur de warmtepomp installeert. Bewaar alle facturen, garantiebewijzen en installatiedocumenten.'
  },
  {
    number: 3,
    title: 'Aanvraag indienen op MijnRVO',
    description: 'Dien je aanvraag in op MijnRVO.nl met je gegevens, energielabel, en kopieën van alle benodigde documenten. Dit moet binnen 6 maanden na installatie.'
  },
  {
    number: 4,
    title: 'Subsidie ontvangen',
    description: 'Na goedkeuring (6-8 weken) ontvangt je het subsidiebedrag rechtstreeks op je bankrekening.'
  }
];

const tips = [
  {
    icon: PiggyBank,
    title: 'Combineer met energielening',
    description: 'Combineer de ISDE subsidie met de NHG-energielening voor de beste financiering van je warmtepomp.'
  },
  {
    icon: CheckCircle,
    title: 'Check de RVO-lijst',
    description: 'Controleer altijd op RVO.nl of je gekozen warmtepomp op de goedkeuringenlijst staat voordat je deze aanschaft.'
  },
  {
    icon: Clock,
    title: 'Zit niet te lang vast',
    description: 'Dien je aanvraag op tijd in. Je hebt maar 6 maanden na installatie om de ISDE subsidie aan te vragen.'
  }
];

export const metadata: Metadata = {
  title: 'ISDE Subsidie Warmtepomp 2026 - Tot €3.675 Terug',
  description: 'Ontdek hoeveel ISDE subsidie je krijgt voor je warmtepomp in 2026. Tot €3.675 voor elektrische en €1.500 voor hybride warmtepompen. Alles over voorwaarden en aanvragen.',
};

export default function SubsidiesPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="Subsidies 2026"
        title="ISDE Subsidie voor je Warmtepomp"
        highlightedSubtitle="Tot €3.675 terug in 2026"
        subtitle="Ontdek hoeveel subsidie je kunt ontvangen via de Regeling Stimulering Duurzame Energietransitie"
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Subsidies', href: '/subsidies' }
        ]}
      />

      {/* Key Info Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Type Warmtepomp</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Subsidie 2026</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Geschatte Terugverdientijd</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-surface-alt transition-colors">
                <td className="px-6 py-4">
                  <span className="font-semibold text-text-main">Volledig elektrische warmtepomp</span>
                  <p className="text-text-muted text-sm">Lucht-water, bodem-water of lucht-lucht</p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-lg font-bold text-accent">Tot €3.675</span>
                </td>
                <td className="px-6 py-4 text-text-muted">7-10 jaar</td>
              </tr>
              <tr className="hover:bg-surface-alt transition-colors">
                <td className="px-6 py-4">
                  <span className="font-semibold text-text-main">Hybride warmtepomp</span>
                  <p className="text-text-muted text-sm">Combinatie gas en elektriciteit</p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-lg font-bold text-accent">Tot €1.500</span>
                </td>
                <td className="px-6 py-4 text-text-muted">8-12 jaar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Highlight Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-accent bg-opacity-10 border border-accent rounded-2xl p-6 md:p-8">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-text-main mb-2">ISDE 2026 Update</h3>
              <p className="text-text-muted">
                De ISDE-regeling is een van de belangrijkste subsidies voor warmtepompen. Je kunt deze subsidie één keer aanvragen tot 6 maanden na installatie. Let op: je mag niet eerder subsidie via de oude AISDE-regeling hebben ontvangen voor dezelfde werkzaamheden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-text-main mb-8">Voorwaarden ISDE Subsidie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map((req, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-border hover:border-primary transition-colors">
              <div className="flex gap-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg h-fit">
                  <req.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-main mb-2">{req.title}</h3>
                  <p className="text-text-muted text-sm">{req.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-text-main mb-8">Hoe vraag je ISDE Subsidie aan?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 border border-border h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent bg-opacity-20 flex items-center justify-center">
                    <span className="font-bold text-accent">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-text-main">{step.title}</h3>
                </div>
                <p className="text-text-muted text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-text-main mb-8">Handige Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary bg-opacity-10 p-3 rounded-lg w-fit mb-4">
                <tip.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text-main mb-2">{tip.title}</h3>
              <p className="text-text-muted text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-alt py-8">
        <FAQSchema items={subsidyFaqItems} />
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Klaar voor je warmtepomp?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Vergelijk warmtepompen, bereken je besparing en ontdek de beste keuze voor jouw situatie.
          </p>
          <a href="/merken" className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-lg transition-all">
            Vergelijk Warmtepompen <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
