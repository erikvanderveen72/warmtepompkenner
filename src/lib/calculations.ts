import { besparingParams } from './fallback-data';

function round(value: number, decimals: number = 2): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export interface BesparingResult {
  huidigGaskosten: number;
  warmtepompStroom: number;
  warmtepompStroomkosten: number;
  jaarlijkseBesparing: number;
  maandelijkseBesparing: number;
  terugverdientijd: number;
  co2Besparing: number; // kg per jaar
}

export function berekenBesparing(
  gasverbruikM3: number,
  aanschafkosten: number,
  cop: number = besparingParams.copGemiddeld,
  gasPrijs: number = besparingParams.gasPrijsPerM3,
  elektraPrijs: number = besparingParams.elektraPrijsPerKwh,
): BesparingResult {
  // 1 m³ gas ≈ 8,79 kWh warmte (onderwaarde, bron: pure-energie.nl/kennisbank/calorische-waarde-van-gas)
  const kWhWarmte = gasverbruikM3 * 8.79;
  const huidigGaskosten = round(gasverbruikM3 * gasPrijs);

  // Warmtepomp verbruikt kWhWarmte / COP aan elektriciteit
  const warmtepompStroom = round(kWhWarmte / cop);
  const warmtepompStroomkosten = round(warmtepompStroom * elektraPrijs);

  // Onderhoud
  const totaleWarmtepompKosten = warmtepompStroomkosten + besparingParams.jaarlijksOnderhoud;
  const jaarlijkseBesparing = round(huidigGaskosten - totaleWarmtepompKosten);
  const maandelijkseBesparing = round(jaarlijkseBesparing / 12);

  // Terugverdientijd
  const terugverdientijd = jaarlijkseBesparing > 0 ? round(aanschafkosten / jaarlijkseBesparing, 1) : 0;

  // CO2 besparing: 1 m³ gas = 1,88 kg CO2 (bron: co2emissiefactoren.nl, inclusief voorketen)
  const co2Besparing = round(gasverbruikM3 * 1.88);

  return {
    huidigGaskosten,
    warmtepompStroom,
    warmtepompStroomkosten,
    jaarlijkseBesparing,
    maandelijkseBesparing,
    terugverdientijd,
    co2Besparing,
  };
}

export function berekenTotaleKosten(
  aanschafkosten: number,
  installatiekosten: number,
  subsidie: number,
): { brutoKosten: number; nettoKosten: number; subsidie: number } {
  const brutoKosten = aanschafkosten + installatiekosten;
  const nettoKosten = Math.max(0, brutoKosten - subsidie);
  return { brutoKosten, nettoKosten, subsidie };
}
