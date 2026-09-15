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
}

// orden explícito de capturas: el 1er número es el HOME del sitio (placa del frente del collage)
const ord = (slug: string, nums: number[]) => nums.map((n) => `/img/src/${slug}-${n}.jpg`);

export const projects: Project[] = [
  { slug: 'valecasenave', name: 'Vale Casenave', category: 'Editorial',     role: 'Dirección de arte & Desarrollo', shots: ord('valecasenave', [1,2,3,4,5]), accent: '#5cb0d2', ended: '2025-01', url: 'https://valecasenave.com', blurb: 'Sitio editorial de una comunicadora y atleta: portada, cobertura deportiva y el archivo de sus ediciones TEDx.', stack: ['Next.js', 'React', 'Vercel'], services: ['Dirección de arte', 'Diseño', 'Desarrollo', 'Motion'], approach: 'Había que unir comunicación, deporte y el archivo TEDx en un solo relato. Resolví una portada viva y un sistema editorial multilingüe (ES/EN/PT) que se recorre por scroll.' },
  { slug: 'pulz',         name: 'PULZ',          category: 'Plataforma',    role: 'Producto & Desarrollo',          shots: ord('pulz', [2,1,3,4,5]),         accent: '#e6ff33', ended: '2025-07', url: 'https://pulz.run',        blurb: 'Plataforma de running — “correr es el plan”: planes, majors y comunidad de corredores.', stack: ['JavaScript', 'Supabase', 'Bootstrap', 'Vercel'], services: ['Producto', 'Diseño', 'Desarrollo'], approach: 'El calendario de carreras de LATAM estaba disperso. Armé una plataforma que centraliza planes, las majors y la comunidad, con cuentas y multilingüe (ES/EN/PT).' },
  { slug: 'basslayer',    name: 'BassLayer',     category: 'Web App',       role: 'Diseño & Full-stack',            shots: ord('basslayer', [3,1,2,4,5]),    accent: '#7ec6d6', ended: '2025-08', url: 'https://basslayer.io',    blurb: 'Dashboard de ciclos de Bitcoin: feed en vivo, terminal y lectura de datos on-chain.', stack: ['React', 'Vite', 'Cloudflare'], services: ['Diseño', 'Desarrollo', 'Data viz'], approach: 'Cruzar dos mundos —música electrónica y crypto— en una sola interfaz. Construí un dashboard con lectura on-chain en vivo, terminal, feed de noticias y agenda de eventos.' },
  { slug: 'beokey',       name: 'BeOkey',        category: 'Landing',       role: 'Diseño & Desarrollo',            shots: ord('beokey', [4,1,2,3,5]),       accent: '#e0bd76', ended: '2024-04', url: 'https://beokey.live',     blurb: 'Landing de una plataforma de terapias: salas de acompañamiento y bienestar.', stack: ['HTML', 'JavaScript', 'Cloudflare'], services: ['Diseño', 'Desarrollo'], approach: 'Dar entidad profesional a una práctica de terapias holísticas. Landing cálida con servicios, testimonios y galería de sesiones.' },
];
