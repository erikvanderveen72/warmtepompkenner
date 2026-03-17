// Warmtepompkenner.nl - Fallback Data 2026
//
// BRONNEN (geverifieerd maart 2026):
// - ISDE subsidies: RVO.nl (rvo.nl/subsidies-financiering/isde)
// - Energieprijzen: Milieu Centraal gemiddelde 2026-2040 projectie
// - Warmtepomp prijzen: Milieu Centraal, Verbeterjehuis.nl, fabrikantwebsites
// - Gasverbruik: CBS/Milieu Centraal (woningen met gasaansluiting)
// - CO2-emissiefactor: CO2emissiefactoren.nl (2024 factoren)
// - COP/SCOP waarden: fabrikant productbladen (seizoensgemiddelden bij W35)
// - Garanties: fabrikant garantievoorwaarden (standaard, excl. verlengde garantie)

export interface WarmtepompType {
  id: string;
  naam: string;
  beschrijving: string;
  prijsVan: number;
  prijsTot: number;
  cop: number; // Seizoens-COP (SCOP) bij W35 in Nederlands klimaat
  geschiktVoor: string[];
  voordelen: string[];
  nadelen: string[];
}

export interface WarmtepompMerk {
  naam: string;
  land: string;
  modellen: string[];
  prijsIndicatie: string;
  copRange: string; // SCOP range i.p.v. exact getal — eerlijker
  garantieJaren: number; // Standaard fabrieksgarantie
  garantieToelichting: string;
}

export interface SubsidieRegeling {
  naam: string;
  beschrijving: string;
  startBedrag: number;
  perKw: number;
  energielabelBonus: number;
  minimumBedrag: number;
  voorbeeldBedrag: string; // Voorbeeld berekening
  voorwaarden: string[];
  geldigTot: string;
  aanvraagUrl: string;
  bron: string;
}

export interface InstallatieKosten {
  component: string;
  kostenVan: number;
  kostenTot: number;
  toelichting: string;
}

export interface BesparingParams {
  gemiddeldGasverbruikM3: number;
  gasPrijsPerM3: number;
  elektraPrijsPerKwh: number;
  copGemiddeld: number;
  jaarlijksOnderhoud: number;
}

// === SOORTEN WARMTEPOMPEN ===
// Bron prijzen: Milieu Centraal (milieucentraal.nl), Verbeterjehuis.nl — inclusief installatie, incl. btw
// Bron COP: Seizoensgemiddelde SCOP bij W35, gebaseerd op fabrikant productbladen
export const warmtepompTypes: WarmtepompType[] = [
  {
    id: 'lucht-water',
    naam: 'Lucht-water warmtepomp',
    beschrijving: 'Haalt warmte uit de buitenlucht en verwarmt water voor de cv-installatie. De meest populaire keuze voor bestaande woningen.',
    prijsVan: 5000,   // Bron: Milieu Centraal — vanaf €5.000 incl. installatie
    prijsTot: 12000,   // Bron: Milieu Centraal — tot ca. €12.000 incl. installatie
    cop: 3.5,          // SCOP seizoensgemiddelde bij W35 (range 3.0-4.5 afhankelijk van model)
    geschiktVoor: ['Bestaande bouw', 'Nieuwbouw', 'Appartementen'],
    voordelen: ['Relatief lage aanschafkosten', 'Eenvoudige installatie', 'Geen boringen nodig', 'Geschikt voor bestaande bouw'],
    nadelen: ['Lager rendement bij extreme kou', 'Buitenunit produceert geluid', 'Hogere stroomkosten bij vorst'],
  },
  {
    id: 'bodem-water',
    naam: 'Bodem-water warmtepomp',
    beschrijving: 'Gebruikt de constante temperatuur van de bodem (circa 10-12°C) via een bodemlus of bronboring.',
    prijsVan: 15000,   // Bron: Milieu Centraal — vanaf €15.000 incl. installatie en boringen
    prijsTot: 30000,   // Bron: Milieu Centraal — tot ca. €30.000 afhankelijk van bodemwerk
    cop: 4.5,          // SCOP seizoensgemiddelde bij W35 (range 4.0-5.0)
    geschiktVoor: ['Nieuwbouw', 'Grote woningen', 'Woningen met tuin'],
    voordelen: ['Zeer hoog rendement', 'Constant rendement het hele jaar', 'Stille werking', 'Lange levensduur (20+ jaar)'],
    nadelen: ['Hoge aanschafkosten', 'Boring of grondwerk nodig', 'Vergunning vereist', 'Niet overal mogelijk'],
  },
  {
    id: 'hybride',
    naam: 'Hybride warmtepomp',
    beschrijving: 'Combineert een lucht-water warmtepomp met je bestaande cv-ketel. Bij kou springt de ketel bij.',
    prijsVan: 4000,    // Bron: Milieu Centraal — vanaf ca. €4.000 incl. installatie
    prijsTot: 7000,    // Bron: Milieu Centraal — tot ca. €7.000 incl. installatie
    cop: 3.0,          // SCOP seizoensgemiddelde — lager door samenwerking met cv-ketel
    geschiktVoor: ['Bestaande bouw', 'Slecht geïsoleerde woningen', 'Stapsgewijze verduurzaming'],
    voordelen: ['Laagste instapkosten', 'Werkt met bestaande radiatoren', 'Tot 60% gasbesparing', 'Ideaal als tussenstap'],
    nadelen: ['Niet volledig gasloos', 'Lager rendement dan full-electric', 'Twee systemen onderhouden'],
  },
  {
    id: 'lucht-lucht',
    naam: 'Lucht-lucht warmtepomp (airco)',
    beschrijving: 'Verwarmt en koelt de lucht in huis direct. Vergelijkbaar met een airconditioning die ook kan verwarmen.',
    prijsVan: 1500,    // Bron: marktprijzen — vanaf ca. €1.500 per unit incl. installatie
    prijsTot: 4000,    // Bron: marktprijzen — tot ca. €4.000 per unit incl. installatie
    cop: 3.2,          // SCOP seizoensgemiddelde bij verwarming
    geschiktVoor: ['Bijverwarming', 'Kleine ruimtes', 'Vakantiewoningen'],
    voordelen: ['Laagste aanschafkosten', 'Kan ook koelen in zomer', 'Snel warm', 'Per ruimte regelbaar'],
    nadelen: ['Verwarmt geen water', 'Luchtstroom kan als tocht voelen', 'Per ruimte een unit nodig'],
  },
  {
    id: 'water-water',
    naam: 'Water-water warmtepomp',
    beschrijving: 'Haalt warmte uit grondwater via een open bronsysteem. Zeer efficiënt maar vereist specifieke bodemomstandigheden.',
    prijsVan: 18000,   // Bron: marktprijzen incl. bronboring
    prijsTot: 30000,   // Bron: marktprijzen — hoge variatie door bodemwerk
    cop: 5.0,          // SCOP — hoogste rendement door stabiele brontemperatuur
    geschiktVoor: ['Nieuwbouw', 'Grote gebouwen', 'Gebieden met grondwater'],
    voordelen: ['Hoogste rendement', 'Zeer stabiel rendement', 'Kan ook koelen'],
    nadelen: ['Hoogste aanschafkosten', 'Bodemonderzoek vereist', 'Vergunningplicht', 'Niet overal uitvoerbaar'],
  },
];

// === MERKEN ===
// Bron COP: fabrikant productbladen — SCOP bij W35 (seizoensgemiddelde)
// Bron garantie: fabrikant garantievoorwaarden Nederland (standaard, excl. verlengde opties)
// LET OP: Beoordelingen verwijderd — niet verifieerbaar zonder actuele Consumentenbond-test
export const warmtepompMerken: WarmtepompMerk[] = [
  { naam: 'Daikin', land: 'Japan', modellen: ['Altherma 3 R', 'Altherma 4 R32'], prijsIndicatie: '€6.000 - €12.000', copRange: 'SCOP 3.5 - 4.5', garantieJaren: 5, garantieToelichting: '5 jaar standaard bij registratie, verlengbaar tot 10 jaar' },
  { naam: 'Mitsubishi Electric', land: 'Japan', modellen: ['Ecodan', 'Zubadan'], prijsIndicatie: '€7.000 - €14.000', copRange: 'SCOP 3.5 - 4.2', garantieJaren: 5, garantieToelichting: '5 jaar standaard bij registratie' },
  { naam: 'Bosch', land: 'Duitsland', modellen: ['Compress 5800i AW', 'Compress 7400i AW'], prijsIndicatie: '€6.500 - €11.000', copRange: 'SCOP 3.4 - 4.0', garantieJaren: 5, garantieToelichting: '5 jaar standaard' },
  { naam: 'Vaillant', land: 'Duitsland', modellen: ['aroTHERM plus', 'flexoTHERM'], prijsIndicatie: '€7.000 - €13.000', copRange: 'SCOP 3.5 - 4.2', garantieJaren: 5, garantieToelichting: '5 jaar standaard' },
  { naam: 'NIBE', land: 'Zweden', modellen: ['F2120', 'S1155', 'S1255'], prijsIndicatie: '€8.000 - €16.000', copRange: 'SCOP 4.0 - 5.0', garantieJaren: 5, garantieToelichting: '5 jaar standaard bij registratie' },
  { naam: 'Samsung', land: 'Zuid-Korea', modellen: ['EHS Mono HT Quiet', 'ClimateHub'], prijsIndicatie: '€5.500 - €10.000', copRange: 'SCOP 3.3 - 3.8', garantieJaren: 5, garantieToelichting: '5 jaar standaard' },
  { naam: 'LG', land: 'Zuid-Korea', modellen: ['Therma V Monobloc S', 'Therma V R290'], prijsIndicatie: '€5.000 - €9.500', copRange: 'SCOP 3.3 - 4.0', garantieJaren: 5, garantieToelichting: '5 jaar standaard' },
  { naam: 'Panasonic', land: 'Japan', modellen: ['Aquarea T-CAP', 'Aquarea J Generation'], prijsIndicatie: '€6.000 - €11.000', copRange: 'SCOP 3.5 - 4.0', garantieJaren: 5, garantieToelichting: '5 jaar standaard' },
  { naam: 'Toshiba', land: 'Japan', modellen: ['Estia R32'], prijsIndicatie: '€5.500 - €10.000', copRange: 'SCOP 3.3 - 3.8', garantieJaren: 3, garantieToelichting: '3 jaar standaard' },
  { naam: 'Viessmann', land: 'Duitsland', modellen: ['Vitocal 250-A', 'Vitocal 200-A'], prijsIndicatie: '€7.500 - €14.000', copRange: 'SCOP 3.5 - 4.3', garantieJaren: 5, garantieToelichting: '5 jaar standaard' },
];

// === SUBSIDIES 2026 ===
// Bron: RVO.nl — "ISDE: wat is er gewijzigd vanaf 2026?" (rvo.nl/subsidies-financiering/isde/isde-wat-wijzigt-er-2026)
// De ISDE subsidie is GEEN vast bedrag maar wordt berekend op basis van type, vermogen (kW) en energielabel.
export const subsidieRegelingen: SubsidieRegeling[] = [
  {
    naam: 'ISDE - Lucht-water warmtepomp (eerste)',
    beschrijving: 'Subsidie voor je eerste lucht-water warmtepomp, inclusief hybride varianten.',
    startBedrag: 1025,          // Bron RVO: startbedrag 2026 = €1.025 (was €1.250 in 2025)
    perKw: 225,                 // Bron RVO: €225 per kW (vanaf 1e kW in 2026)
    energielabelBonus: 200,     // Bron RVO: €200 bonus bij A+++ label
    minimumBedrag: 500,         // Bron RVO: "U ontvangt altijd minimaal €500"
    voorbeeldBedrag: '4 kW A+++: €1.025 + 4×€225 + €200 = €2.125 | 8 kW A+++: €1.025 + 8×€225 + €200 = €3.025',
    voorwaarden: [
      'Woning is bestaande bouw',
      'Warmtepomp staat op de ISDE-apparatenlijst (meldcodelijst RVO)',
      'Installatie door erkend installateur',
      'Aanvraag binnen 6 maanden na installatie',
    ],
    geldigTot: '2026-12-31',
    aanvraagUrl: 'https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/warmtepomp',
    bron: 'RVO.nl — ISDE: wat is er gewijzigd vanaf 2026',
  },
  {
    naam: 'ISDE - Grond-/water-water warmtepomp',
    beschrijving: 'Subsidie voor bodem- en water-water warmtepompen. Bedragen ongewijzigd t.o.v. 2025.',
    startBedrag: 1025,
    perKw: 225,
    energielabelBonus: 225,     // Hoger dan lucht-water
    minimumBedrag: 500,
    voorbeeldBedrag: '6 kW A+++: tot ca. €4.425 (afhankelijk van meldcode)',
    voorwaarden: [
      'Woning is bestaande bouw',
      'Warmtepomp staat op de ISDE-apparatenlijst (meldcodelijst RVO)',
      'Installatie door erkend installateur',
      'Aanvraag binnen 6 maanden na installatie',
    ],
    geldigTot: '2026-12-31',
    aanvraagUrl: 'https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/warmtepomp',
    bron: 'RVO.nl — ISDE Warmtepomp woningeigenaren',
  },
];

// === INSTALLATIEKOSTEN ===
// Bron: gemiddelde marktprijzen installateurs Nederland 2025-2026
export const installatieKosten: InstallatieKosten[] = [
  { component: 'Warmtepomp (apparaat)', kostenVan: 3500, kostenTot: 15000, toelichting: 'Afhankelijk van type en vermogen' },
  { component: 'Installatie arbeid', kostenVan: 1500, kostenTot: 4000, toelichting: 'Aansluiten, leidingwerk, vullen systeem' },
  { component: 'Buffervat (indien nodig)', kostenVan: 500, kostenTot: 1500, toelichting: 'Niet altijd nodig, afhankelijk van systeem' },
  { component: 'Elektrische aanpassing', kostenVan: 300, kostenTot: 1500, toelichting: 'Groepenkast uitbreiden, kabel aanleggen' },
  { component: 'Vloerverwarming (optioneel)', kostenVan: 2000, kostenTot: 6000, toelichting: 'Sterk aanbevolen voor laagtemperatuur' },
  { component: 'Demontage oude cv-ketel', kostenVan: 150, kostenTot: 400, toelichting: 'Inclusief afvoer en afsluiten gasleiding' },
];

// === BESPARINGSPARAMETERS 2026 ===
// Bron gasverbruik: CBS/Milieu Centraal — gemiddeld verbruik woningen met gasaansluiting ~1.040 m³
// Bron gasprijs: Milieu Centraal projectie 2026-2040 gemiddelde = €1,37/m³
// Bron elektraprijs: Milieu Centraal projectie 2026-2040 gemiddelde = €0,21/kWh
// NB: actuele prijzen maart 2026 liggen hoger (gas ~€1,39, elektra ~€0,26) door geopolitieke spanningen
export const besparingParams: BesparingParams = {
  gemiddeldGasverbruikM3: 1040,  // Bron: Milieu Centraal/CBS — woningen met gasaansluiting
  gasPrijsPerM3: 1.37,           // Bron: Milieu Centraal projectie gemiddelde 2026-2040
  elektraPrijsPerKwh: 0.21,      // Bron: Milieu Centraal projectie gemiddelde 2026-2040
  copGemiddeld: 3.5,             // Seizoens-COP lucht-water gemiddeld
  jaarlijksOnderhoud: 150,       // Bron: marktgemiddelde onderhoud warmtepomp
};
