// Versiones exploratorias del sitio, en src/versiones/<slug>.astro. Se sirven en /v/<slug> SÓLO en dev
// (integración en astro.config.mjs) para compararlas en /ver; producción publica sólo el home ('/').
export interface Version { href: string; label: string; desc: string }

export const versiones: Version[] = [
  { href: '/', label: 'Halo (home)', desc: 'El home: gema → clic → los proyectos salen y flotan alrededor como luz; enfocan al señalarlos, un haz sale de la gema y entrás al case.' },
  // 2026-11-16: se borraron todas las versiones anteriores (Prisma y el archivo); quedan en el historial de git
];
