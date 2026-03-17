'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Kosten', href: '/kosten' },
  { label: 'Subsidies', href: '/subsidies' },
  { label: 'Merken', href: '/merken' },
  { label: 'Besparing', href: '/besparing' },
  {
    label: 'Meer',
    items: [
      { label: 'Soorten warmtepompen', href: '/soorten', description: 'Lucht-water, bodem, hybride en meer' },
      { label: 'Installatie', href: '/installatie', description: 'Wat komt er kijken bij de installatie?' },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-md border-b border-stone-200'
        : 'bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg width="34" height="34" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="18" fill={isScrolled ? '#0369a1' : '#38bdf8'} />
              <circle cx="18" cy="18" r="14" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
              <text x="18" y="24" textAnchor="middle" fontFamily="Inter" fontSize="16" fontWeight="700" fill="#fff">W</text>
            </svg>
            <span className={`text-[22px] font-extrabold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              warmtepomp<span className="text-sky-400">kenner</span><span className={isScrolled ? 'text-stone-400' : 'text-stone-500'}>.nl</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isScrolled ? 'text-stone-600 hover:text-sky-700 hover:bg-sky-50' : 'text-stone-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                      isScrolled ? 'text-stone-600 hover:text-sky-700 hover:bg-sky-50' : 'text-stone-300 hover:text-white hover:bg-white/10'
                    }`}>
                      {item.label}
                      <ChevronDown size={14} />
                    </button>
                    <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                      <div className="bg-white rounded-xl shadow-xl border border-stone-200 py-2 w-64">
                        {item.items?.map((sub) => (
                          <Link key={sub.href} href={sub.href} className="block px-4 py-3 hover:bg-sky-50 transition-colors">
                            <div className="text-sm font-medium text-stone-900">{sub.label}</div>
                            <div className="text-xs text-stone-400">{sub.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ml-4 ${
              isScrolled ? 'bg-emerald-50 text-emerald-700' : 'bg-emerald-500/20 text-emerald-300'
            }`}>
              <Shield size={12} />
              <span>Onafhankelijk & gratis</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
            {mobileOpen ? (
              <X size={24} className={isScrolled ? 'text-stone-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-stone-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 rounded-b-2xl shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              item.href ? (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-stone-700 font-medium rounded-lg hover:bg-sky-50 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <div key={item.label}>
                  <div className="px-4 py-2 text-xs font-semibold text-stone-400 uppercase tracking-wider">{item.label}</div>
                  {item.items?.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-stone-700 font-medium rounded-lg hover:bg-sky-50 transition-colors ml-2">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
