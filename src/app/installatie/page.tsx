import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Wrench, Clock, CheckCircle, AlertCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Warmtepomp Installatie 2026 - Proces, Duur en Tips',
  description: 'Alles over warmtepomp installatie: proces, duur per type, voorbereiding en tips voor het kiezen van een installer. Gemiddeld 1-5 dagen installatie.',
};

export const revalidate = 3600;

const faqItems = [
  {
    question: 'Hoe lang duurt de installatie van een warmtepomp?',
    answer: 'De installatieduur varieert per type. Een lucht-lucht warmtepomp duurt 0,5-1 dag, een hybride warmtepomp 1 dag, een lucht-water warmtepomp 1-2 dagen, en een bodem-water warmtepomp 3-5 dagen vanwege de boringen.',
  },
  {
    question: 'Wat moet ik voorbereiden voor de installatie?',
    answer: 'Zorg ervoor dat de installateur toegang heeft tot relevante ruimtes, maak plaats voor apparatuur, controleer of jezelf thuis bent, zorg voor parkeerplaats, en raadpleeg eventueel je buurman voor bodem-water systemen. Andere voorbereiding wordt meestal door de installateur gedaan.',
  },
  {
    question: 'Kan ik mijn huiswerk gebruiken onder het installeren?',
    answer: 'Dit hangt af van het type en de fase van installatie. Bij lucht-water systemen is het meestal niet nodig het huis uit te gaan, maar je hebt wel veel lawaai. Bij bodem-water systemen met boringen buiten kan je binnenactiviteiten normaal doorzetten. Vraag je installateur naar specifieke aanbevelingen.',
  },
  {
    question: 'Hoeveel kost de installatie van een warmtepomp?',
    answer: 'Installatiekosten variëren: lucht-lucht €2.000-€4.000, hybride €3.500-€7.000, lucht-water €6.000-€12.000, bodem-water €15.000-€25.000. Dit zijn complete kosten inclusief apparatuur. Subsidies kunnen 20-35% van deze kosten dekken.',
  },
  {
    question: 'Wat is het verschil tussen een professionele installateur en een handyman?',
    answer: 'Een gecertificeerde installateur heeft specialistische kennis van warmtepompen, garanzie op werk, verzekeringen en volgt installatierichtlijnen correct. Een handyman kan basiswerk doen maar warmtepompen vereisen specialisatie. Kies altijd voor een erkende installateur.',
  },
  {
    question: 'Krijg ik garantie op de installatie?',
    answer: 'Ja, professionele installateurs geven garantie op hun werk (meestal 2-5 jaar). De fabrikant geeft aparte garantie op de warmtepomp zelf (meestal 5-10 jaar op het apparaat, 2-5 jaar op compressor). Vraag altijd om schriftelijke garantiebewijzen.',
  },
];

const installationSteps = [
  {
    number: 1,
    title: 'Woningcheck en advies',
    description: 'Een expert bezoekt je huis, analyseert isolatie, verwarming en beschikbare ruimte. Hieruit volgt een maatwerk advies voor het beste systeem.',
  },
  {
    number: 2,
    title: 'Offerte en planning',
    description: 'Je ontvangt een gedetailleerde offerte met kosten, subsidies en een installatiedatum. Dit is het moment om alles door te nemen en vragen te stellen.',
  },
  {
    number: 3,
    title: 'Voorbereiding woning',
    description: 'Maak plaats, verwijder obstakels, zorg voor parkeerruimte en check elektriciteit. De installateur zal specifieke instructies geven.',
  },
  {
    number: 4,
    title: 'Installatie warmtepomp',
    description: 'De installateur plaatst het systeem, sluit leidingen/elektriciteit aan, test alles en zorgt voor correcte instellingen op jouw woning.',
  },
  {
    number: 5,
    title: 'Oplevering en uitleg',
    description: 'Je ontvangt een uitleg hoe je het systeem bedient, energiebespaaringstips, garantiepapieren en contact voor ondersteuning.',
  },
];

const durationTable = [
  { type: 'Hybride warmtepomp', duration: '1 dag', notes: 'Snelste installatie, werkt samen met bestaande gasketel' },
  { type: 'Lucht-water warmtepomp', duration: '1-2 dagen', notes: 'Buitenunit en binneninstallatie, ongeveer 1 dag per taak' },
  { type: 'Bodem-water warmtepomp', duration: '3-5 dagen', notes: 'Langzaamst vanwege boringen, meestal minimaal 3 dagen' },
  { type: 'Lucht-lucht warmtepomp', duration: '0,5-1 dag', notes: 'Snelste installatie, enkel binneneenheden' },
];

const checklist = [
  'Zorg dat installateur toegang heeft tot alle ruimtes',
  'Maak plaats voor apparatuur (buitenunit, buffer, verwarmingskast)',
  'Controleer parkeerruimte voor servicebus',
  'Zorg dat elektriciteit beschikbaar is (soms versterking nodig)',
  'Informeer buren over mogelijke herrie (vooral bij bodem-water)',
  'Houd getuigschriften/garantiepapieren goed bij',
  'Stel vragen over bediening en onderhoud',
  'Doe niks wat de garantie kan schaden direct na installatie',
];

const installerTips = [
  {
    icon: Users,
    title: 'Zoek een erkend installateur',
    description: 'Kies een bedrijf met certificering, positieve reviews en jaren ervaring. Controleer of ze bij de NLinst of KIWA zijn aangesloten en garanzie geven.',
  },
  {
    icon: AlertCircle,
    title: 'Vraag meerdere offertes aan',
    description: 'Vergelijk minstens 3 installateursbedrijven. Kijk niet alleen naar prijs, maar ook naar kwaliteit, service, garantie en responsiviteit.',
  },
  {
    icon: Clock,
    title: 'Plan rekening met levertijd',
    description: 'Sommige warmtepompen hebben wachtlijsten. Overleg met de installateur hoelang het duurt van offerte tot volledige installatie (vaak 2-4 weken).',
  },
];

export default function InstallatiePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="Gids 2026"
        title="Warmtepomp Installatie"
        highlightedSubtitle="Volledig proces van voorbereiding tot oplevering"
        subtitle="Alles wat je moet weten over het installatieproces, duur per type warmtepomp en hoe je de juiste installateur kiest."
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Installatie', href: '/installatie' },
        ]}
      />

      {/* Installation Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-2">5 stappen naar jouw warmtepomp</h2>
          <p className="text-text-muted">Het installatieproces van start tot oplevering</p>
        </div>

        <div className="space-y-6">
          {installationSteps.map((step) => (
            <div key={step.number} className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-semibold text-text-main mb-2">{step.title}</h3>
                <p className="text-text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Duration Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-surface-alt -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-main mb-2">Installatieduur per type</h2>
            <p className="text-text-muted">Hoelang duurt de installatie van jouw warmtepomp?</p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-surface-alt">
                    <th className="px-6 py-4 text-left font-semibold text-text-main">Type warmtepomp</th>
                    <th className="px-6 py-4 text-left font-semibold text-text-main">Installatieduur</th>
                    <th className="px-6 py-4 text-left font-semibold text-text-main">Opmerkingen</th>
                  </tr>
                </thead>
                <tbody>
                  {durationTable.map((row, idx) => (
                    <tr key={idx} className={idx !== durationTable.length - 1 ? 'border-b border-border' : ''}>
                      <td className="px-6 py-4 text-text-main font-medium">{row.type}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 text-primary font-semibold">
                          <Clock className="w-4 h-4" />
                          {row.duration}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-text-muted text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-sky-50 border border-sky-200 rounded-lg">
            <p className="text-sm text-sky-900">
              <strong>Let op:</strong> Deze tijdstippen zijn voor standaardinstallaties. De werkelijke duur kan variëren afhankelijk van jouw woning, installatielocatie en of aanpassingen nodig zijn.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-2">Wat moet je voorbereiding</h2>
          <p className="text-text-muted">Checklist voor een soepele installatie</p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-border">
          <ul className="grid md:grid-cols-2 gap-4">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-text-main">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Installer Selection Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-2">Tips voor het kiezen van een installateur</h2>
          <p className="text-text-muted">Zo vind je de beste partner voor jouw installatie</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {installerTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div key={tip.title} className="bg-white rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-sky-700" />
                </div>
                <h3 className="text-lg font-semibold text-text-main mb-2">{tip.title}</h3>
                <p className="text-text-muted text-sm">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Important Notes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Belangrijk te weten</h3>
              <ul className="space-y-2 text-amber-900 text-sm">
                <li>• Zorg ervoor dat de installateur alle nodige certificeringen heeft (KIWA, NLinst)</li>
                <li>• Vraag altijd om schriftelijke offerte en garantiebewijzen</li>
                <li>• Controleer of aanvragen voor subsidie voor installatie is geregeld</li>
                <li>• Plan installatie niet vlak voor of na groot onderhoud aan huis</li>
                <li>• Vraag naar onderhoudscontracten (warmtepompen hebben jaarlijks onderhoud nodig)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-alt py-8">
        <FAQSchema items={faqItems} />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Klaar voor installatie?
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Ontdek hoeveel je bespaard en welke installateurs in jouw regio beschikbaar zijn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/besparing" className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
              Bereken je besparing
            </a>
            <a href="/merken" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              Vergelijk installateurs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
