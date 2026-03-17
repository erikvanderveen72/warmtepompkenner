'use client';
import Link from 'next/link';
import { ArrowRight, Thermometer, Euro, PiggyBank, Wrench, BarChart3, TrendingDown } from 'lucide-react';

const topicCards = [
  {
    title: 'Kosten warmtepomp',
    description: 'Wat kost een warmtepomp inclusief installatie? Bekijk actuele prijzen per type.',
    href: '/kosten',
    icon: Euro,
    bgColor: 'bg-gradient-to-br from-sky-50 to-sky-100',
    iconColor: 'text-sky-700',
  },
  {
    title: 'Subsidies (ISDE)',
    description: 'Ontdek welke subsidies beschikbaar zijn en hoeveel je kunt terugkrijgen.',
    href: '/subsidies',
    icon: PiggyBank,
    bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    iconColor: 'text-emerald-700',
  },
  {
    title: 'Merken vergelijken',
    description: 'Vergelijk Daikin, NIBE, Mitsubishi, Bosch en meer op prijs en kwaliteit.',
    href: '/merken',
    icon: BarChart3,
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    iconColor: 'text-purple-700',
  },
  {
    title: 'Besparing berekenen',
    description: 'Bereken hoeveel je bespaart op gas en wat de terugverdientijd is.',
    href: '/besparing',
    icon: TrendingDown,
    bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100',
    iconColor: 'text-amber-700',
  },
  {
    title: 'Soorten warmtepompen',
    description: 'Lucht-water, bodem, hybride of lucht-lucht? Ontdek welk type bij jou past.',
    href: '/soorten',
    icon: Thermometer,
    bgColor: 'bg-gradient-to-br from-rose-50 to-rose-100',
    iconColor: 'text-rose-700',
  },
  {
    title: 'Installatie',
    description: 'Alles over het installatieproces, duur en wat je moet weten.',
    href: '/installatie',
    icon: Wrench,
    bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    iconColor: 'text-indigo-700',
  },
];

export default function TopicCardsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topicCards.map((topic) => (
        <Link key={topic.href} href={topic.href}
          className="group relative bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-sky-400/20 transition-all duration-300">
          <div className={`w-12 h-12 rounded-xl ${topic.bgColor} flex items-center justify-center mb-4`}>
            <topic.icon className={`w-6 h-6 ${topic.iconColor}`} />
          </div>
          <h3 className="text-lg font-bold mb-2 text-text-main">{topic.title}</h3>
          <p className="text-text-muted text-sm mb-4">{topic.description}</p>
          <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Ontdekken <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      ))}
    </div>
  );
}
