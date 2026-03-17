'use client';
import { TrendingDown, PiggyBank, Zap, BarChart3 } from 'lucide-react';
import StatsBar from './StatsBar';

const homeStats = [
  { label: 'Gem. besparing', value: '€700-1.400', icon: TrendingDown },
  { label: 'ISDE subsidie vanaf', value: '€500+', icon: PiggyBank },
  { label: 'Gem. SCOP', value: '3,5', icon: Zap },
  { label: 'Merken vergeleken', value: '10+', icon: BarChart3 },
];

export default function HomeStatsSection() {
  return <StatsBar stats={homeStats} />;
}
