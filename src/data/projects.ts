// Los proyectos. Cada uno con varias capturas de su sitio para armar el collage vivo.
export interface Project {
  slug: string;
  name: string;
  category: string;
  role: string;
  shots: string[];   // capturas reales del sitio (collage)
  accent: string;    // color propio, legible sobre oscuro
  ended: string;     // YYYY-MM, o '' si sigue en curso
  url?: string;
  blurb: string;     // una línea: qué es el proyecto (case)
  stack: string[];   // tecnologías (chips en el case) — detectadas de los sitios en vivo
  services: string[];// disciplinas que hiciste (chips): dirección de arte, diseño, desarrollo, motion…
  approach: string;  // enfoque: el desafío y cómo lo resolviste (2 frases) — TENTATIVO, editar
  // temperamento de la gema al pasar por el proyecto (cómo se MUEVE, no lo que muestra):
  //   spin = velocidad de giro · ripple = onda de superficie (waveform) · pulse = latido · breathe = respiración
  character: { spin: number; ripple: number; pulse: number; breathe: number };
}

// orden explícito de capturas: el 1er número es el HOME del sitio (placa del frente del collage)
const ord = (slug: string, nums: number[]) => nums.map((n) => `/img/src/${slug}-${n}.jpg`);

export const projects: Project[] = [
  { slug: 'valecasenave', name: 'Vale Casenave', category: 'Editorial',     role: 'Dirección de arte & Desarrollo', shots: ord('valecasenave', [1,2,3,4,5]), accent: '#5cb0d2', ended: '2025-01', url: 'https://valecasenave.com', blurb: 'Sitio editorial de una comunicadora y atleta: portada, cobertura deportiva y el archivo de sus ediciones TEDx.', stack: ['Next.js', 'React', 'Vercel'], services: ['Dirección de arte', 'Diseño', 'Desarrollo', 'Motion'], approach: 'Había que unir comunicación, deporte y el archivo TEDx en un solo relato. Resolví una portada viva y un sistema editorial multilingüe (ES/EN/PT) que se recorre por scroll.', character: { spin: 0.55, ripple: 0, pulse: 0, breathe: 0.35 } },  // editorial: lenta, contenida
  { slug: 'pulz',         name: 'PULZ',          category: 'Plataforma',    role: 'Producto & Desarrollo',          shots: ord('pulz', [2,1,3,4,5]),         accent: '#e6ff33', ended: '2025-07', url: 'https://pulz.run',        blurb: 'Plataforma de running — “correr es el plan”: planes, majors y comunidad de corredores.', stack: ['JavaScript', 'Supabase', 'Bootstrap', 'Vercel'], services: ['Producto', 'Diseño', 'Desarrollo'], approach: 'El calendario de carreras de LATAM estaba disperso. Armé una plataforma que centraliza planes, las majors y la comunidad, con cuentas y multilingüe (ES/EN/PT).', character: { spin: 1.6, ripple: 0, pulse: 1, breathe: 0 } },  // running: late, eléctrica
  { slug: 'basslayer',    name: 'BassLayer',     category: 'Web App',       role: 'Diseño & Full-stack',            shots: ord('basslayer', [3,1,2,4,5]),    accent: '#7ec6d6', ended: '2026-09', url: 'https://basslayer.io',    blurb: 'Dos mundos en un mismo sitio: agenda de música electrónica LATAM y un terminal crypto en vivo —mercados, ciclos de Bitcoin, dólar y noticias.', stack: ['React', 'Vite', 'Cloudflare'], services: ['Producto', 'Diseño', 'Desarrollo', 'Data viz'], approach: 'El reto era unir dos audiencias —la escena de música electrónica y la cripto— sin que compitieran. Resolví una entrada partida donde elegís tu mundo: una agenda de eventos con filtros por ciudad y un terminal de mercados en vivo (dominancia, Fear & Greed, dólar ARS, ciclos BTC y noticias).', character: { spin: 1.0, ripple: 1, pulse: 0, breathe: 0 } },  // datos/música: ondula como waveform
  { slug: 'beokey',       name: 'BeOkey',        category: 'Landing',       role: 'Diseño & Desarrollo',            shots: ord('beokey', [4,1,2,3,5]),       accent: '#e0bd76', ended: '2024-04', url: 'https://beokey.live',     blurb: 'Landing de una plataforma de terapias: salas de acompañamiento y bienestar.', stack: ['HTML', 'JavaScript', 'Cloudflare'], services: ['Diseño', 'Desarrollo'], approach: 'Dar entidad profesional a una práctica de terapias holísticas. Landing cálida con servicios, testimonios y galería de sesiones.', character: { spin: 0.6, ripple: 0, pulse: 0, breathe: 1 } },  // bienestar: respira, en calma
];
