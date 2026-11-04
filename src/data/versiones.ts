// Versiones exploratorias del sitio, en src/versiones/<slug>.astro. Se sirven en /v/<slug> SÓLO en dev
// (integración en astro.config.mjs) para compararlas en /ver; producción publica sólo el home ('/').
export interface Version { href: string; label: string; desc: string }

export const versiones: Version[] = [
  { href: '/', label: 'Facetas (home)', desc: 'El home: cada proyecto vive en una faceta; girás la gema, la cara de frente proyecta el sitio que enfoca, y el click viaja por el haz hasta el case.' },
  { href: '/v/anterior', label: 'Anterior', desc: 'El home publicado hasta noviembre 2026 (gema + índice + collage), guardado como referencia.' },
  // exploraciones guardadas para seguir trabajando; las descartadas están en src/archivo/versiones/
  { href: '/v/orbita', label: 'Órbita', desc: 'Three.js: los sitios en pantallas curvas orbitan alrededor de la gema; arrastrás para girar y entrás volando a uno.' },
  { href: '/v/cine', label: 'Cine', desc: 'Cambio de formato: cada proyecto es un plano a pantalla completa con el sitio en video; entre uno y otro, la pantalla se parte en esquirlas.' },
  { href: '/v/prisma', label: 'Prisma', desc: 'La gema es un proyector: un haz de luz la atraviesa y proyecta el sitio en una pantalla, separado en RGB hasta enfocar.' },
];
