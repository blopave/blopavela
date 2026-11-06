// Versiones exploratorias del sitio, en src/versiones/<slug>.astro. Se sirven en /v/<slug> SÓLO en dev
// (integración en astro.config.mjs) para compararlas en /ver; producción publica sólo el home ('/').
export interface Version { href: string; label: string; desc: string }

export const versiones: Version[] = [
  { href: '/', label: 'Prisma (home)', desc: 'El home: la gema es un proyector; un haz de luz la atraviesa y proyecta el sitio en una pantalla, separado en RGB hasta enfocar.' },
  // exploraciones guardadas para seguir trabajando; las descartadas (y los homes superados) están en src/archivo/versiones/
  { href: '/v/facetas', label: 'Facetas', desc: 'Cada proyecto vive en una faceta; girás la gema, la cara de frente proyecta el sitio que enfoca, y el click viaja por el haz hasta el case.' },
  { href: '/v/orbita', label: 'Órbita', desc: 'Three.js: los sitios en pantallas curvas orbitan alrededor de la gema; arrastrás para girar y entrás volando a uno.' },
  { href: '/v/cine', label: 'Cine', desc: 'Cambio de formato: cada proyecto es un plano a pantalla completa con el sitio en video; entre uno y otro, la pantalla se parte en esquirlas.' },
  // ronda nov-06: direcciones livianas (cargan bien en compus viejas)
  { href: '/v/espectro', label: 'Espectro', desc: 'El arcoíris que sale del prisma es el índice: cada proyecto es una banda de color; al tocarla se ensancha y se vuelve el sitio.' },
  { href: '/v/cuarto-oscuro', label: 'Cuarto oscuro', desc: 'Laboratorio de revelado: la gema es la lente de la ampliadora y cada proyecto aparece como papel fotográfico que se revela en la cubeta.' },
  { href: '/v/linea', label: 'Una sola línea', desc: 'El haz es el único elemento: una línea de luz cruza la pantalla y se quiebra en un punto de refracción por proyecto.' },
  { href: '/v/prisma-pre', label: 'Prisma pre-renderizado', desc: 'Prisma idéntico, con la gema como secuencia pre-renderizada de sus giros en vez de calcularse en vivo.' },
];
