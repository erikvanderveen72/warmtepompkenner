'use client';
import { useState, useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: { direction: 'up' | 'down'; percentage: number };
}

function AnimatedCounter({ value, isVisible }: { value: string; isVisible: boolean }) {
  const numMatch = value.match(/[\d,.]+/);
  if (!numMatch || !isVisible) return <span>{value}</span>;

  const num = parseFloat(numMatch[0].replace(',', '.'));
  const prefix = value.slice(0, value.indexOf(numMatch[0]));
  const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);

  return <CountUp target={num} prefix={prefix} suffix={suffix} decimals={numMatch[0].includes('.') || numMatch[0].includes(',') ? (numMatch[0].split(/[.,]/)[1]?.length || 0) : 0} />;
}

function CountUp({ target, prefix, suffix, decimals }: { target: number; prefix: string; suffix: string; decimals: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const steps = 30;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, 500 / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{prefix}{decimals > 0 ? count.toFixed(decimals).replace('.', ',') : Math.round(count).toLocaleString('nl-NL')}{suffix}</span>;
}

export default function StatsBar({ stats }: { stats: Stat[] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-white rounded-2xl shadow-lg border border-border p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-start gap-4">
            <div className="bg-primary-light p-3 rounded-xl">
              <stat.icon size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-text-muted text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-text-main">
                <AnimatedCounter value={stat.value} isVisible={isVisible} />
              </p>
              {stat.trend && (
                <p className={`text-xs font-medium ${stat.trend.direction === 'down' ? 'text-accent' : 'text-red-500'}`}>
                  {stat.trend.direction === 'down' ? '↓' : '↑'} {stat.trend.percentage}% t.o.v. 2025
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
