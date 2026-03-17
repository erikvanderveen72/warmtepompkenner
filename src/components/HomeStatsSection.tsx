'use client';
import { TrendingDown, PiggyBank, Zap, BarChart3 } from 'lucide-react';
import StatsBar from './StatsBar';

const homeStats = [
  { label: 'Gemiddelde besparing', value: '€900/jaar', icon: TrendingDown, trend: { direction: 'up' as const, percentage: 12 } },
  { label: 'ISDE subsidie', value: '€3.000', icon: PiggyBank },
  { label: 'Gem. COP', value: '3,5', icon: Zap },
  { label: 'Merken vergeleken', value: '10+', icon: BarChart3 },
];

export default function HomeStatsSection() {
  return <StatsBar stats={homeStats} />;
}
