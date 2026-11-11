// Versiones exploratorias del sitio, en src/versiones/<slug>.astro. Se sirven en /v/<slug> SÓLO en dev
// (integración en astro.config.mjs) para compararlas en /ver; producción publica sólo el home ('/').
export interface Version { href: string; label: string; desc: string }

export const versiones: Version[] = [
  { href: '/', label: 'Prisma (home)', desc: 'El home: la gema es un proyector; un haz de luz la atraviesa y proyecta el sitio en una pantalla, separado en RGB hasta enfocar.' },
  // exploraciones vivas (2026-11-11: Pablo se quedó con Prisma + Órbita); el resto está en src/archivo/versiones/
  { href: '/v/orbita', label: 'Órbita', desc: 'Three.js: BLOPA refractado dentro de la gema; al elegir un proyecto su ventana sale disparada de la piedra. Arrastrás para girar y entrás volando a uno.' },
];
