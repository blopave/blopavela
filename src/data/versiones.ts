// Versiones exploratorias del sitio, en src/versiones/<slug>.astro. Se sirven en /v/<slug> SÓLO en dev
// (integración en astro.config.mjs) para compararlas en /ver; producción publica sólo el home ('/').
export interface Version { href: string; label: string; desc: string }

export const versiones: Version[] = [
  { href: '/', label: 'Órbita (home)', desc: 'El home: BLOPA refractado dentro de la gema; al elegir un proyecto su ventana sale disparada de la piedra. Arrastrás para girar y entrás volando a uno.' },
  // exploraciones vivas (2026-11-11: Órbita pasa a home; Prisma queda para comparar); el resto en src/archivo/versiones/
  { href: '/v/halo', label: 'Halo', desc: 'Simplificada: gema → clic → los proyectos salen y flotan alrededor como luz (sin marco, enfocan al señalarlos, haz desde la gema). Mobile: círculo sin títulos.' },
  { href: '/v/estallido', label: 'Estallido', desc: 'La visión nueva: gema → clic → vitrina (la gema crece y los sitios ciclan adentro) → clic → proyecta los 4 en abanico + aparece la lista → recorrés y entrás al case.' },
  { href: '/v/prisma', label: 'Prisma', desc: 'El home anterior: la gema es un proyector; un haz la atraviesa y proyecta el sitio en una pantalla, separado en RGB hasta enfocar.' },
];
