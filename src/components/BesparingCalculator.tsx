'use client';
import { useState, useMemo } from 'react';
import { berekenBesparing, BesparingResult } from '@/lib/calculations';
import Calculator from './Calculator';

export default function BesparingCalculator() {
  const [gasverbruik, setGasverbruik] = useState(1040); // CBS/Milieu Centraal gemiddelde
  const [aanschafkosten, setAanschafkosten] = useState(8000);
  const [cop, setCop] = useState(3.5);

  const result: BesparingResult = useMemo(() => {
    return berekenBesparing(gasverbruik, aanschafkosten, cop);
  }, [gasverbruik, aanschafkosten, cop]);

  return (
    <Calculator
      title="Warmtepomp Besparing Calculator 2026"
      description="Bereken hoeveel je kunt besparen met een warmtepomp"
      result={
        <div className="space-y-4">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">
              €{result.jaarlijkseBesparing.toLocaleString('nl-NL')}
            </div>
            <div className="text-sm text-text-muted">Besparing per jaar</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
              <p className="text-xs text-emerald-700">Per maand</p>
              <p className="text-lg font-bold text-emerald-800">€{result.maandelijkseBesparing}</p>
            </div>
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-3">
              <p className="text-xs text-sky-700">Terugverdientijd</p>
              <p className="text-lg font-bold text-sky-800">{result.terugverdientijd} jaar</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="text-xs text-amber-700">CO₂ besparing</p>
            <p className="text-lg font-bold text-amber-800">{result.co2Besparing.toLocaleString('nl-NL')} kg/jaar</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-text-muted">
              <span>Huidig gaskosten</span>
              <span className="font-medium text-red-600">€{result.huidigGaskosten.toLocaleString('nl-NL')}</span>
            </div>
            <div className="flex justify-between text-text-muted">
              <span>Stroomkosten warmtepomp</span>
              <span className="font-medium text-text-main">€{result.warmtepompStroomkosten.toLocaleString('nl-NL')}</span>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Gasverbruik */}
        <div>
          <label className="block text-sm font-medium text-text-main mb-2">
            Jaarlijks gasverbruik (m³)
          </label>
          <input
            type="range"
            min={200}
            max={3000}
            step={50}
            value={gasverbruik}
            onChange={(e) => setGasverbruik(Number(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-text-muted">200 m³</span>
            <input
              type="number"
              value={gasverbruik}
              onChange={(e) => setGasverbruik(Number(e.target.value))}
              className="w-24 text-center border border-border rounded-lg px-2 py-1 text-sm font-medium"
            />
            <span className="text-xs text-text-muted">3.000 m³</span>
          </div>
        </div>

        {/* Aanschafkosten */}
        <div>
          <label className="block text-sm font-medium text-text-main mb-2">
            Geschatte totaalkosten (incl. installatie)
          </label>
          <input
            type="range"
            min={3000}
            max={30000}
            step={500}
            value={aanschafkosten}
            onChange={(e) => setAanschafkosten(Number(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-text-muted">€3.000</span>
            <input
              type="number"
              value={aanschafkosten}
              onChange={(e) => setAanschafkosten(Number(e.target.value))}
              className="w-28 text-center border border-border rounded-lg px-2 py-1 text-sm font-medium"
            />
            <span className="text-xs text-text-muted">€30.000</span>
          </div>
        </div>

        {/* COP */}
        <div>
          <label className="block text-sm font-medium text-text-main mb-2">
            COP (rendement warmtepomp)
          </label>
          <select
            value={cop}
            onChange={(e) => setCop(Number(e.target.value))}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm"
          >
            <option value={3.0}>3.0 - Hybride warmtepomp</option>
            <option value={3.5}>3.5 - Lucht-water (gemiddeld)</option>
            <option value={4.0}>4.0 - Lucht-water (goed)</option>
            <option value={4.5}>4.5 - Bodem-water</option>
            <option value={5.0}>5.0 - Water-water</option>
          </select>
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm text-sky-900">
          <strong>Tip:</strong> Het gemiddelde Nederlandse huishouden verbruikt circa 1.040 m³ gas per jaar (bron: CBS/Milieu Centraal). Check je jaarafrekening voor je exacte verbruik.
        </div>
      </div>
    </Calculator>
  );
}
