import { Metadata } from 'next';
import { ArrowRight, PiggyBank, CheckCircle, AlertCircle, FileText, Clock, Home, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Sources from '@/components/Sources';

export const revalidate = 3600;

const subsidyFaqItems = [
  {
    question: 'Hoeveel ISDE subsidie kan ik krijgen voor een warmtepomp in 2026?',
    answer: 'De ISDE-subsidie voor warmtepompen is gebaseerd op een berekeningsformule, niet op een vast bedrag. Voor een eerste lucht-water warmtepomp (incl. hybride): €1.025 startbedrag + €225 per kW + €200 bonus voor A+++ energielabel (minimum €500). Voorbeeld: een 4 kW A+++= €1.025 + (4×€225) + €200 = €2.125. Voor grond-/water-water warmtepompen kan dit oplopen tot ongeveer €4.425. Voor een tweede of volgende lucht-water warmtepomp betaal je alleen €225 per kW (geen startbedrag of label bonus).'
  },
  {
    question: 'Hoe lang duurt het voor ik de ISDE subsidie ontvang?',
    answer: 'Na indiening van je aanvraag duurt de behandeling gemiddeld 6-8 weken. Dit loopt via het ministerie van Economische Zaken. Na goedkeuring wordt het bedrag rechtstreeks naar je bankrekening overgemaakt.'
  },
  {
    question: 'Welke warmtepompen komen in aanmerking voor ISDE subsidie?',
    answer: 'Warmtepompen die op de RVO-meldcodelijst staan en een bepaalde COP (energie-efficiëncy) halen. Dit geldt voor lucht-water, bodem-water, lucht-lucht en hybride warmtepompen. BELANGRIJK 2026-WIJZIGING: Lucht-water warmtepompen met vulgewicht <3kg en GWP >750 komen NIET meer in aanmerking. Controleer op RVO.nl of je warmtepomp geschikt is.'
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
  title: 'ISDE Subsidie Warmtepomp 2026 - Berekeningsformule & Bedragen',
  description: 'ISDE-subsidie 2026 voor warmtepompen: berekeningsformule met startbedrag €1.025, €225 per kW en bonussen. Voorbeelden, voorwaarden en hoe aanvragen.',
};

export default function SubsidiesPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="Subsidies 2026"
        title="ISDE Subsidie voor je Warmtepomp"
        highlightedSubtitle="Berekeningsformule: €1.025 + €225/kW + bonussen"
        subtitle="Ontdek hoeveel subsidie je kunt ontvangen via de Regeling Stimulering Duurzame Energietransitie. Nu met aangepaste formule en voorwaarden voor 2026."
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Subsidies', href: '/subsidies' }
        ]}
      />

      {/* ISDE Calculation Formula Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <h2 className="text-3xl font-bold text-text-main mb-8">ISDE Subsidie Berekeningsformule 2026</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Heat Pump - Air-Water */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
            <h3 className="text-xl font-bold text-text-main mb-4">Eerste Lucht-Water Warmtepomp</h3>
            <p className="text-text-muted text-sm mb-6">(incl. hybride variant)</p>

            <div className="space-y-4 mb-6 bg-surface-alt p-4 rounded-xl">
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-text-main font-semibold">Startbedrag:</span>
                <span className="font-bold text-accent">€1.025</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-text-main font-semibold">Per kW:</span>
                <span className="font-bold text-accent">€225 (vanaf 1e kW)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-text-main font-semibold">Energielabel A+++ bonus:</span>
                <span className="font-bold text-accent">€200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-main font-semibold">Minimum:</span>
                <span className="font-bold text-accent">€500</span>
              </div>
            </div>

            <div className="space-y-3 border-t border-border pt-6">
              <p className="font-semibold text-text-main">Voorbeelden:</p>
              <div className="bg-accent bg-opacity-5 p-4 rounded-lg">
                <p className="text-sm text-text-muted mb-2"><span className="font-semibold text-text-main">4 kW A+++:</span> €1.025 + (4×€225) + €200 = <span className="font-bold text-accent">€2.125</span></p>
                <p className="text-sm text-text-muted"><span className="font-semibold text-text-main">8 kW A+++:</span> €1.025 + (8×€225) + €200 = <span className="font-bold text-accent">€3.025</span></p>
              </div>
            </div>
          </div>

          {/* Ground/Water-Water and Second Heat Pumps */}
          <div className="space-y-8">
            {/* Ground/Water-Water */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
              <h3 className="text-xl font-bold text-text-main mb-6">Grond-/Water-Water Warmtepomp</h3>

              <div className="space-y-3 border-t border-border pt-6">
                <p className="font-semibold text-text-main mb-3">Ongewijzigd sinds 2025:</p>
                <div className="bg-accent bg-opacity-5 p-4 rounded-lg">
                  <p className="text-sm text-text-muted"><span className="font-semibold text-text-main">Voorbeeld 6 kW A+++:</span> Tot ongeveer <span className="font-bold text-accent">€4.425</span></p>
                </div>
              </div>
            </div>

            {/* Second and Subsequent Heat Pumps */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
              <h3 className="text-xl font-bold text-text-main mb-4">2e en Volgende Lucht-Water</h3>
              <p className="text-text-muted text-sm mb-6">Geen startbedrag of label bonus</p>

              <div className="space-y-4 mb-6 bg-surface-alt p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="text-text-main font-semibold">Per kW:</span>
                  <span className="font-bold text-accent">€225</span>
                </div>
              </div>

              <div className="space-y-3 border-t border-border pt-6">
                <p className="font-semibold text-text-main">Voorbeeld:</p>
                <div className="bg-accent bg-opacity-5 p-4 rounded-lg">
                  <p className="text-sm text-text-muted"><span className="font-semibold text-text-main">4 kW:</span> 4×€225 = <span className="font-bold text-accent">€900</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-accent bg-opacity-10 border border-accent rounded-2xl p-6 md:p-8">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-text-main mb-2">ISDE 2026 Wijzigingen</h3>
              <ul className="text-text-muted text-sm space-y-2">
                <li>• De ISDE-regeling is een van de belangrijkste subsidies voor warmtepompen. Je kunt deze subsidie één keer aanvragen tot 6 maanden na installatie.</li>
                <li>• <strong className="text-text-main">Let op:</strong> Je mag niet eerder subsidie via de oude AISDE-regeling hebben ontvangen voor dezelfde werkzaamheden.</li>
                <li>• <strong className="text-text-main">NIEUW in 2026:</strong> Lucht-water warmtepompen met vulgewicht &lt;3kg en GWP &gt;750 komen NIET meer in aanmerking. Dit heeft betrekking op bepaalde kleine, zeer fluoriumbevattende modellen.</li>
                <li>• ISDE budget 2026: €500 miljoen beschikbaar</li>
              </ul>
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

      {/* Sources Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Sources
          laatstBijgewerkt="maart 2026"
          sources={[
            { naam: 'RVO.nl — ISDE wijzigingen 2026', url: 'https://www.rvo.nl/subsidies-financiering/isde/isde-wat-wijzigt-er-2026', toelichting: 'Officiële wijzigingen ISDE subsidie 2026' },
            { naam: 'RVO.nl — ISDE Warmtepomp aanvragen', url: 'https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/warmtepomp', toelichting: 'Actuele bedragen en meldcodelijst' },
            { naam: 'RVO.nl — ISDE Budget 2026', url: 'https://www.rvo.nl/subsidies-financiering/isde/budget', toelichting: 'Stand van zaken ISDE budget (€500 miljoen in 2026)' },
            { naam: 'Milieu Centraal — Subsidie warmtepomp', url: 'https://www.milieucentraal.nl/energie-besparen/energiesubsidies-en-leningen/subsidie-warmtepomp/', toelichting: 'Onafhankelijke uitleg subsidievoorwaarden' },
          ]}
        />
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
