// Versiones exploratorias del sitio, en src/versiones/<slug>.astro. Se sirven en /v/<slug> SÓLO en dev
// (integración en astro.config.mjs) para compararlas en /ver; producción publica sólo el home ('/').
export interface Version { href: string; label: string; desc: string }

export const versiones: Version[] = [
  { href: '/', label: 'Halo (home)', desc: 'El home: gema → clic → los proyectos salen y flotan alrededor como luz; enfocan al señalarlos, un haz sale de la gema y entrás al case.' },
  // exploraciones vivas (2026-11-13: Halo pasa a home; Órbita y Estallido archivadas; Prisma queda para comparar); el resto en src/archivo/versiones/
  { href: '/v/prisma', label: 'Prisma', desc: 'Un home anterior: la gema es un proyector; un haz la atraviesa y proyecta el sitio en una pantalla, separado en RGB hasta enfocar.' },
];
