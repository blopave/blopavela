// Versiones exploratorias del sitio, en src/versiones/<slug>.astro. Se sirven en /v/<slug> SÓLO en dev
// (integración en astro.config.mjs) para compararlas en /ver; producción publica sólo el home ('/').
export interface Version { href: string; label: string; desc: string }

export const versiones: Version[] = [
  { href: '/', label: 'Halo (home)', desc: 'El home: gema → clic → los proyectos salen y flotan alrededor como luz; enfocan al señalarlos, un haz sale de la gema y entrás al case.' },
  // variaciones de Espectro (Espectro, Emisión, Cristal, Foco y Sintonía borradas), sin textos ni datos nuevos
  { href: '/v/refraccion', label: 'Refracción', desc: 'El espectro a pantalla completa: bandas de color que son los proyectos; BLOPA se refracta al cruzarlas.' },
  // ronda libre: todas borradas (Varillas, Columna, Marea, Persiana, Cauce, Cristal, Mazo, Linterna, Calado, Trama y Neón)
  // mezclas por disciplina: artista de luz + director de fotografía/colorista + escenógrafo (Humo borrada)
  { href: '/v/ganzfeld', label: 'Ganzfeld', desc: 'James Turrell + Wong Kar-wai/Christopher Doyle: un campo de color puro que respira en el tono de cada proyecto; al moverte, todo deja estela como step-printing.' },
  { href: '/v/anillo', label: 'Anillo', desc: 'Es Devlin + Benoît Debie (Enter the Void): un aro de luz gigante en un escenario con humo y luces de color saturado; dentro del aro, el proyecto.' },
  { href: '/v/sol', label: 'Sol', desc: 'Olafur Eliasson (The Weather Project) + Deakins: un sol enorme en la niebla tiñe todo de un solo color; cada proyecto cambia la luz del sol.' },
  { href: '/v/laser', label: 'Láser', desc: 'Ryoji Ikeda + escenarios de Willo Perron: haces de láser en el humo dibujan BLOPA y cada proyecto; barren, se cruzan y titilan.' },
  { href: '/v/lluvia', label: 'Lluvia', desc: 'Saul Leiter + Wong Kar-wai: la pantalla es un vidrio con lluvia; detrás, el neón de cada proyecto, y cada gota lo refracta. El dedo limpia el vidrio.' },
  // 2026-11-16: se borraron todas las versiones anteriores (Prisma y el archivo); quedan en el historial de git
];
