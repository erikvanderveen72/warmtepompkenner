// Warmtepompkenner.nl - Fallback Data 2026
// Bronnen: RVO.nl, Milieu Centraal, fabrikantwebsites

export interface WarmtepompType {
  id: string;
  naam: string;
  beschrijving: string;
  prijsVan: number;
  prijsTot: number;
  cop: number; // Coefficient of Performance
  geschiktVoor: string[];
  voordelen: string[];
  nadelen: string[];
}

export interface WarmtepompMerk {
  naam: string;
  land: string;
  modellen: string[];
  prijsIndicatie: string;
  copGemiddeld: number;
  beoordeling: number; // 1-5
  garantieJaren: number;
}

export interface SubsidieRegeling {
  naam: string;
  bedrag: number;
  maxBedrag: number;
  voorwaarden: string[];
  geldigTot: string;
  aanvraagUrl: string;
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
export const warmtepompTypes: WarmtepompType[] = [
  {
    id: 'lucht-water',
    naam: 'Lucht-water warmtepomp',
    beschrijving: 'Haalt warmte uit de buitenlucht en verwarmt water voor de cv-installatie. De meest populaire keuze voor bestaande woningen.',
    prijsVan: 6000,
    prijsTot: 12000,
    cop: 3.5,
    geschiktVoor: ['Bestaande bouw', 'Nieuwbouw', 'Appartementen'],
    voordelen: ['Relatief lage aanschafkosten', 'Eenvoudige installatie', 'Geen boringen nodig', 'Geschikt voor bestaande bouw'],
    nadelen: ['Lager rendement bij extreme kou', 'Buitenunit produceert geluid', 'Hogere stroomkosten bij vorst'],
  },
  {
    id: 'bodem-water',
    naam: 'Bodem-water warmtepomp',
    beschrijving: 'Gebruikt de constante temperatuur van de bodem (circa 10-12°C) via een bodemlus of bronboring.',
    prijsVan: 15000,
    prijsTot: 25000,
    cop: 4.5,
    geschiktVoor: ['Nieuwbouw', 'Grote woningen', 'Woningen met tuin'],
    voordelen: ['Zeer hoog rendement', 'Constant rendement het hele jaar', 'Stille werking', 'Lange levensduur (20+ jaar)'],
    nadelen: ['Hoge aanschafkosten', 'Boring of grondwerk nodig', 'Vergunning vereist', 'Niet overal mogelijk'],
  },
  {
    id: 'hybride',
    naam: 'Hybride warmtepomp',
    beschrijving: 'Combineert een lucht-water warmtepomp met je bestaande cv-ketel. Bij kou springt de ketel bij.',
    prijsVan: 3500,
    prijsTot: 7000,
    cop: 3.0,
    geschiktVoor: ['Bestaande bouw', 'Slecht geïsoleerde woningen', 'Stapsgewijze verduurzaming'],
    voordelen: ['Laagste instapkosten', 'Werkt met bestaande radiatoren', 'Tot 60% gasbesparing', 'Ideaal als tussenstap'],
    nadelen: ['Niet volledig gasloos', 'Lager rendement dan full-electric', 'Twee systemen onderhouden'],
  },
  {
    id: 'lucht-lucht',
    naam: 'Lucht-lucht warmtepomp (airco)',
    beschrijving: 'Verwarmt en koelt de lucht in huis direct. Vergelijkbaar met een airconditioning die ook kan verwarmen.',
    prijsVan: 1500,
    prijsTot: 4000,
    cop: 3.2,
    geschiktVoor: ['Bijverwarming', 'Kleine ruimtes', 'Vakantiewoningen'],
    voordelen: ['Laagste aanschafkosten', 'Kan ook koelen in zomer', 'Snel warm', 'Per ruimte regelbaar'],
    nadelen: ['Verwarmt geen water', 'Luchtstroom kan als tocht voelen', 'Per ruimte een unit nodig'],
  },
  {
    id: 'water-water',
    naam: 'Water-water warmtepomp',
    beschrijving: 'Haalt warmte uit grondwater via een open bronsysteem. Zeer efficiënt maar vereist specifieke bodemomstandigheden.',
    prijsVan: 18000,
    prijsTot: 30000,
    cop: 5.0,
    geschiktVoor: ['Nieuwbouw', 'Grote gebouwen', 'Gebieden met grondwater'],
    voordelen: ['Hoogste rendement (COP 5+)', 'Zeer stabiel rendement', 'Kan ook koelen'],
    nadelen: ['Hoogste aanschafkosten', 'Bodemonderzoek vereist', 'Vergunningplicht', 'Niet overal uitvoerbaar'],
  },
];

// === MERKEN ===
// Bron: Consumentenbond, fabrikantwebsites, installateursreviews
export const warmtepompMerken: WarmtepompMerk[] = [
  { naam: 'Daikin', land: 'Japan', modellen: ['Altherma 3', 'Altherma 3 H HT'], prijsIndicatie: '€6.000 - €12.000', copGemiddeld: 3.8, beoordeling: 4.5, garantieJaren: 5 },
  { naam: 'Mitsubishi Electric', land: 'Japan', modellen: ['Ecodan', 'Zubadan'], prijsIndicatie: '€7.000 - €14.000', copGemiddeld: 4.0, beoordeling: 4.5, garantieJaren: 5 },
  { naam: 'Bosch', land: 'Duitsland', modellen: ['Compress 5800i AW', 'Compress 7400i AW'], prijsIndicatie: '€6.500 - €11.000', copGemiddeld: 3.6, beoordeling: 4.0, garantieJaren: 5 },
  { naam: 'Vaillant', land: 'Duitsland', modellen: ['aroTHERM plus', 'flexoTHERM'], prijsIndicatie: '€7.000 - €13.000', copGemiddeld: 3.7, beoordeling: 4.2, garantieJaren: 5 },
  { naam: 'NIBE', land: 'Zweden', modellen: ['F2120', 'S1255'], prijsIndicatie: '€8.000 - €16.000', copGemiddeld: 4.2, beoordeling: 4.6, garantieJaren: 7 },
  { naam: 'Samsung', land: 'Zuid-Korea', modellen: ['EHS Mono HT Quiet', 'ClimateHub'], prijsIndicatie: '€5.500 - €10.000', copGemiddeld: 3.5, beoordeling: 3.9, garantieJaren: 5 },
  { naam: 'LG', land: 'Zuid-Korea', modellen: ['Therma V Monobloc S', 'Therma V R290'], prijsIndicatie: '€5.000 - €9.500', copGemiddeld: 3.6, beoordeling: 4.0, garantieJaren: 5 },
  { naam: 'Panasonic', land: 'Japan', modellen: ['Aquarea T-CAP', 'Aquarea J Generation'], prijsIndicatie: '€6.000 - €11.000', copGemiddeld: 3.7, beoordeling: 4.1, garantieJaren: 5 },
  { naam: 'Toshiba', land: 'Japan', modellen: ['Estia R32'], prijsIndicatie: '€5.500 - €10.000', copGemiddeld: 3.5, beoordeling: 3.8, garantieJaren: 3 },
  { naam: 'Viessmann', land: 'Duitsland', modellen: ['Vitocal 250-A', 'Vitocal 200-A'], prijsIndicatie: '€7.500 - €14.000', copGemiddeld: 3.9, beoordeling: 4.3, garantieJaren: 5 },
];

// === SUBSIDIES 2026 ===
// Bron: RVO.nl - ISDE regeling
export const subsidieRegelingen: SubsidieRegeling[] = [
  {
    naam: 'ISDE - Warmtepomp',
    bedrag: 3000,
    maxBedrag: 3675,
    voorwaarden: [
      'Woning is bestaande bouw (minimaal 6 maanden oud)',
      'Warmtepomp staat op de ISDE-apparatenlijst',
      'Installatie door erkend installateur',
      'Aanvraag binnen 6 maanden na installatie',
    ],
    geldigTot: '2026-12-31',
    aanvraagUrl: 'https://www.rvo.nl/subsidie-en-financieringswijzer/isde',
  },
  {
    naam: 'ISDE - Hybride warmtepomp',
    bedrag: 1500,
    maxBedrag: 1500,
    voorwaarden: [
      'Woning is bestaande bouw',
      'Hybride warmtepomp op ISDE-apparatenlijst',
      'Gecombineerd met bestaande cv-ketel',
      'Installatie door erkend installateur',
    ],
    geldigTot: '2026-12-31',
    aanvraagUrl: 'https://www.rvo.nl/subsidie-en-financieringswijzer/isde',
  },
];

// === INSTALLATIEKOSTEN ===
export const installatieKosten: InstallatieKosten[] = [
  { component: 'Warmtepomp (apparaat)', kostenVan: 3500, kostenTot: 15000, toelichting: 'Afhankelijk van type en vermogen' },
  { component: 'Installatie arbeid', kostenVan: 1500, kostenTot: 4000, toelichting: 'Aansluiten, leidingwerk, vullen systeem' },
  { component: 'Buffervat (indien nodig)', kostenVan: 500, kostenTot: 1500, toelichting: 'Niet altijd nodig, afhankelijk van systeem' },
  { component: 'Elektrische aanpassing', kostenVan: 300, kostenTot: 1500, toelichting: 'Groepenkast uitbreiden, kabel aanleggen' },
  { component: 'Vloerverwarming (optioneel)', kostenVan: 2000, kostenTot: 6000, toelichting: 'Sterk aanbevolen voor laagtemperatuur' },
  { component: 'Demontage oude cv-ketel', kostenVan: 150, kostenTot: 400, toelichting: 'Inclusief afvoer en afsluiten gasleiding' },
];

// === BESPARINGSPARAMETERS 2026 ===
// Bron: CBS, Milieu Centraal, ACM
export const besparingParams: BesparingParams = {
  gemiddeldGasverbruikM3: 1200,
  gasPrijsPerM3: 1.45,
  elektraPrijsPerKwh: 0.28,
  copGemiddeld: 3.5,
  jaarlijksOnderhoud: 150,
};
