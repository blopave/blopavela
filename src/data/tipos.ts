// Candidatas tipográficas para /tipos (comparación sobre el home actual).
// Cada una define cómo se ve como DISPLAY (nombres del índice, título del case y wordmark de la gema).
// Tamaños normalizados para que el nombre más largo ocupe ~lo mismo que en Bebas (factor acotado a 0.8–1.2).
// Archivos en public/fonts/tipos/. `stretch` sólo aplica a fuentes con eje de ancho (wdth).
export type Tipo = {
  id: string; label: string; family: string;
  files?: { src: string; weight?: string; stretch?: string }[];   // sin files = ya cargada por el home (Bebas)
  weight: number; stretch?: number; tracking: string;
  upper?: boolean;          // la fuente sólo tiene mayúsculas (los nombres se leen en caja alta)
  prow: string; title: string;   // tamaños de nombres del índice y del título del case
  note?: string;
};

export const tipos: Tipo[] = [
  { id: 'bebas', label: 'Bebas (actual)', family: 'Bebas Neue', weight: 400, tracking: '.01em', upper: true,
    prow: 'clamp(2.6rem,5.4vw,4.4rem)', title: 'clamp(3.2rem,6vw,5.5rem)', note: 'la de hoy' },
  { id: 'archivo', label: 'Archivo', family: 'Archivo', files: [{ src: '/fonts/tipos/Archivo-Variable.woff2', weight: '100 900', stretch: '62.5% 125%' }], weight: 700, stretch: 62, tracking: '-.01em',
    prow: 'clamp(2.65rem,5.5vw,4.48rem)', title: 'clamp(3.26rem,6.11vw,5.6rem)', note: 'Omnibus-Type · Google Fonts · wdth 62' },
  { id: 'sofia', label: 'Sofia Sans XC', family: 'Sofia Sans Extra Condensed', files: [{ src: '/fonts/tipos/SofiaSansExtraCondensed-Variable.woff2', weight: '1 1000' }], weight: 750, tracking: '0em',
    prow: 'clamp(2.87rem,5.97vw,4.87rem)', title: 'clamp(3.54rem,6.63vw,6.08rem)', note: 'Lettersoup · Google Fonts' },
  { id: 'mona', label: 'Mona Sans', family: 'Mona Sans', files: [{ src: '/fonts/tipos/MonaSans-Variable.woff2', weight: '200 900', stretch: '75% 125%' }], weight: 800, stretch: 75, tracking: '-.02em',
    prow: 'clamp(2.54rem,5.28vw,4.3rem)', title: 'clamp(3.13rem,5.87vw,5.38rem)', note: 'GitHub · Google Fonts · wdth 75' },
  { id: 'antonio', label: 'Antonio', family: 'Antonio', files: [{ src: '/fonts/tipos/Antonio-Variable.woff2', weight: '100 700' }], weight: 700, tracking: '.005em',
    prow: 'clamp(2.25rem,4.67vw,3.81rem)', title: 'clamp(2.77rem,5.19vw,4.76rem)', note: 'Vernon Adams · Google Fonts' },
  { id: 'league', label: 'League Gothic', family: 'League Gothic', files: [{ src: '/fonts/tipos/LeagueGothic-Variable.woff2', weight: '400', stretch: '75% 100%' }], weight: 400, stretch: 90, tracking: '.01em',
    prow: 'clamp(3.12rem,6.48vw,5.28rem)', title: 'clamp(3.84rem,7.2vw,6.6rem)', note: 'League of Moveable Type · wdth 90' },
  { id: 'plex', label: 'IBM Plex Sans', family: 'IBM Plex Sans', files: [{ src: '/fonts/tipos/IBMPlexSans-Variable.woff2', weight: '100 700', stretch: '75% 100%' }], weight: 700, stretch: 75, tracking: '-.01em',
    prow: 'clamp(2.08rem,4.32vw,3.52rem)', title: 'clamp(2.56rem,4.8vw,4.4rem)', note: 'IBM · Google Fonts · wdth 75' },
  { id: 'instrument', label: 'Instrument Sans', family: 'Instrument Sans', files: [{ src: '/fonts/tipos/InstrumentSans-Variable.woff2', weight: '400 700', stretch: '75% 100%' }], weight: 700, stretch: 75, tracking: '-.02em',
    prow: 'clamp(2.58rem,5.37vw,4.37rem)', title: 'clamp(3.18rem,5.96vw,5.47rem)', note: 'Instrument · Google Fonts · wdth 75' },
  { id: 'saira', label: 'Saira', family: 'Saira', files: [{ src: '/fonts/tipos/Saira-Variable.woff2', weight: '100 900', stretch: '50% 125%' }], weight: 600, stretch: 62, tracking: '0em',
    prow: 'clamp(2.9rem,6.03vw,4.91rem)', title: 'clamp(3.57rem,6.7vw,6.14rem)', note: 'Omnibus-Type · Google Fonts · wdth 62' },
  { id: 'bigshoulders', label: 'Big Shoulders', family: 'Big Shoulders', files: [{ src: '/fonts/tipos/BigShoulders-Variable.woff2', weight: '100 900' }], weight: 800, tracking: '.01em',
    prow: 'clamp(2.29rem,4.75vw,3.87rem)', title: 'clamp(2.81rem,5.28vw,4.84rem)', note: 'Chicago · Google Fonts' },
  { id: 'newtitle', label: 'New Title', family: 'New Title', files: [{ src: '/fonts/tipos/NewTitle-Variable.woff2', weight: '200 700' }], weight: 650, tracking: '-.005em',
    prow: 'clamp(3.12rem,6.48vw,5.28rem)', title: 'clamp(3.84rem,7.2vw,6.6rem)', note: 'Fontshare (ITF Free Font License)' },
];

// Monos candidatas para los detalles chicos (nav, mail, botones, servicios, stack). Hoy: la mono del sistema.
export type Mono = { id: string; label: string; family?: string; stack: string; files?: { src: string; weight: string }[]; note?: string };

export const monos: Mono[] = [
  { id: 'sistema', label: 'Sistema (actual)', stack: "ui-monospace,'SF Mono',Menlo,monospace", note: 'cambia según la compu' },
  { id: 'geist', label: 'Geist Mono', family: 'Geist Mono', stack: "'Geist Mono',ui-monospace,monospace",
    files: [{ src: '/fonts/tipos/GeistMono-Variable.woff2', weight: '100 900' }], note: 'Vercel · neutra y precisa' },
  { id: 'plexmono', label: 'IBM Plex Mono', family: 'IBM Plex Mono', stack: "'IBM Plex Mono',ui-monospace,monospace",
    files: [{ src: '/fonts/tipos/IBMPlexMono-Regular.woff2', weight: '400' }, { src: '/fonts/tipos/IBMPlexMono-Medium.woff2', weight: '500' }], note: 'IBM · técnica con carácter' },
  { id: 'fragment', label: 'Fragment Mono', family: 'Fragment Mono', stack: "'Fragment Mono',ui-monospace,monospace",
    files: [{ src: '/fonts/tipos/FragmentMono-Regular.woff2', weight: '400' }], note: 'Wei Huang · Helvetica hecha mono, la más editorial' },
  { id: 'jetbrains', label: 'JetBrains Mono', family: 'JetBrains Mono', stack: "'JetBrains Mono',ui-monospace,monospace",
    files: [{ src: '/fonts/tipos/JetBrainsMono-Variable.woff2', weight: '100 800' }], note: 'JetBrains · de programador, clara' },
];
