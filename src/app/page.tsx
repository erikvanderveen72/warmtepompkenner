import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, Euro, Zap, CheckCircle } from 'lucide-react';
import HomeStatsSection from '@/components/HomeStatsSection';
import BesparingCalculator from '@/components/BesparingCalculator';
import TopicCardsGrid from '@/components/TopicCardsGrid';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Warmtepompkenner.nl - Vergelijk Warmtepompen 2026 | Onafhankelijk & Gratis',
  description: 'Vergelijk warmtepompen van 20+ merken. Bereken je besparing, ontdek ISDE subsidies en vind de beste warmtepomp voor jouw woning. 100% onafhankelijk.',
};

export const revalidate = 60;

const faqItems = [
  { question: 'Wat kost een warmtepomp in 2026?', answer: 'De kosten variëren per type: een hybride warmtepomp kost €4.000-€7.000, een lucht-water warmtepomp €5.000-€12.000, en een bodem-water warmtepomp €15.000-€30.000 inclusief installatie. Bron: Milieu Centraal.' },
  { question: 'Hoeveel subsidie krijg ik voor een warmtepomp?', answer: 'Via de ISDE-regeling (RVO.nl) wordt subsidie berekend op basis van type, vermogen en energielabel. Voorbeeld: een 8 kW lucht-water warmtepomp met A+++ label levert ca. €3.025 subsidie op. Je ontvangt altijd minimaal €500.' },
  { question: 'Hoeveel bespaar ik met een warmtepomp op mijn gasrekening?', answer: 'Bij een gemiddeld gasverbruik van ca. 1.040 m³ (CBS/Milieu Centraal) bespaar je circa €700-€1.400 per jaar, afhankelijk van het type warmtepomp, energieprijzen en de isolatie van je woning.' },
  { question: 'Welk type warmtepomp past het beste bij mijn woning?', answer: 'Voor goed geïsoleerde woningen is een lucht-water warmtepomp ideaal. Bij matige isolatie is een hybride warmtepomp een slimme tussenstap. Nieuwbouw profiteert het meest van een bodem-water warmtepomp.' },
  { question: 'Is warmtepompkenner.nl onafhankelijk?', answer: 'Ja, Warmtepompkenner.nl is 100% onafhankelijk. Wij ontvangen geen provisie van fabrikanten of installateurs. Onze informatie is gebaseerd op officiële bronnen zoals RVO.nl, Milieu Centraal en CBS.' },
  { question: 'Hoe lang duurt de installatie van een warmtepomp?', answer: 'De installatie van een lucht-water warmtepomp duurt gemiddeld 1-2 dagen. Een hybride warmtepomp kan in 1 dag geïnstalleerd worden. Een bodem-water warmtepomp vereist extra boringen en duurt 3-5 dagen.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-stone-950">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 plus-pattern opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-stone-300 text-sm font-medium">Prijzen bijgewerkt - maart 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4">
            De slimste keuze voor
          </h1>
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-sky-300 to-amber-400 bg-clip-text text-transparent mb-6">
            jouw warmtepomp
          </p>
          <p className="text-stone-400 text-lg md:text-xl max-w-2xl mb-8">
            Vergelijk warmtepompen van 10+ topmerken. Bereken je besparing, ontdek subsidies en vind de perfecte warmtepomp voor jouw situatie. 100% onafhankelijk en gratis.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#calculator" className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
              Bereken je besparing <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link href="/merken" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              Vergelijk merken
            </Link>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg border border-border p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-sky-50 p-2 rounded-lg"><Award size={18} className="text-sky-700" /></div>
              <div><p className="text-sm font-semibold text-text-main">Onafhankelijk</p><p className="text-xs text-text-muted">Geen provisie</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-sky-50 p-2 rounded-lg"><Euro size={18} className="text-sky-700" /></div>
              <div><p className="text-sm font-semibold text-text-main">Gratis</p><p className="text-xs text-text-muted">100% kosteloos</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-sky-50 p-2 rounded-lg"><Zap size={18} className="text-sky-700" /></div>
              <div><p className="text-sm font-semibold text-text-main">Actueel</p><p className="text-xs text-text-muted">Dagelijks bijgewerkt</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-sky-50 p-2 rounded-lg"><CheckCircle size={18} className="text-sky-700" /></div>
              <div><p className="text-sm font-semibold text-text-main">Betrouwbaar</p><p className="text-xs text-text-muted">Officiële bronnen</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HomeStatsSection />
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-main mb-2">Bereken je besparing</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Ontdek hoeveel je kunt besparen met een warmtepomp op basis van jouw gasverbruik</p>
        </div>
        <BesparingCalculator />
      </section>

      {/* Topic Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-2">Alles over warmtepompen</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Van kosten en subsidies tot installatie en merkvergelijkingen</p>
        </div>
        <TopicCardsGrid />
      </section>

      {/* FAQ */}
      <section className="bg-surface-alt py-8">
        <FAQSchema items={faqItems} />
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Begin vandaag met besparen
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Duizenden huishoudens besparen al honderden euro&apos;s per jaar met een warmtepomp. Bereken nu hoeveel jij kunt besparen.
          </p>
          <a href="#calculator" className="inline-flex items-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
            Bereken je besparing <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
