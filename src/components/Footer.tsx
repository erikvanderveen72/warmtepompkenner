import Link from 'next/link';
import { Lock, Shield, RefreshCw } from 'lucide-react';

const columns = [
  {
    title: 'Warmtepompen',
    links: [
      { label: 'Kosten', href: '/kosten' },
      { label: 'Subsidies (ISDE)', href: '/subsidies' },
      { label: 'Soorten', href: '/soorten' },
      { label: 'Installatie', href: '/installatie' },
    ],
  },
  {
    title: 'Vergelijken',
    links: [
      { label: 'Merken vergelijken', href: '/merken' },
      { label: 'Besparing berekenen', href: '/besparing' },
    ],
  },
  {
    title: 'Over ons',
    links: [
      { label: 'Over Warmtepompkenner', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
  },
];

const trustBadges = [
  { icon: Lock, text: 'SSL Beveiligd' },
  { icon: Shield, text: 'AVG/GDPR Compliant' },
  { icon: RefreshCw, text: 'Dagelijks Bijgewerkt' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="34" height="34" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="18" fill="#38bdf8" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
              <text x="18" y="24" textAnchor="middle" fontFamily="Inter" fontSize="16" fontWeight="700" fill="#fff">W</text>
            </svg>
            <span className="text-[22px] font-extrabold tracking-tight text-white">
              warmtepomp<span className="text-sky-400">kenner</span><span className="text-stone-500">.nl</span>
            </span>
          </Link>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            Onafhankelijk vergelijkingsplatform voor warmtepompen in Nederland. Vergelijk kosten, merken en subsidies zonder verborgen kosten.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Keurmerk</h3>
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 bg-stone-800 rounded-full px-3 py-1">
                  <badge.icon size={12} className="text-stone-400" />
                  <span className="text-xs text-stone-400">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Warmtepompkenner.nl. Alle rechten voorbehouden. De informatie op deze site is puur informatief en vormt geen advies.
          </p>
        </div>
      </div>
    </footer>
  );
}
