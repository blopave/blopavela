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
}

const src = (slug: string) => [1, 2, 3].map((n) => `/img/src/${slug}-${n}.jpg`);

export const projects: Project[] = [
  { slug: 'valecasenave', name: 'Vale Casenave', category: 'Editorial',     role: 'Dirección de arte & Desarrollo', shots: src('valecasenave'), accent: '#5cb0d2', ended: '2025-01', url: 'https://valecasenave.com', blurb: 'Sitio editorial de una comunicadora y atleta: portada, cobertura deportiva y el archivo de sus ediciones TEDx.' },
  { slug: 'pulz',         name: 'PULZ',          category: 'Plataforma',    role: 'Producto & Desarrollo',          shots: src('pulz'),         accent: '#e6ff33', ended: '2025-07', url: 'https://pulz.run',        blurb: 'Plataforma de running — “correr es el plan”: planes, majors y comunidad de corredores.' },
  { slug: 'basslayer',    name: 'BassLayer',     category: 'Web App',       role: 'Diseño & Full-stack',            shots: src('basslayer'),    accent: '#7ec6d6', ended: '2025-08', url: 'https://basslayer.io',    blurb: 'Dashboard de ciclos de Bitcoin: feed en vivo, terminal y lectura de datos on-chain.' },
  { slug: 'indoyoga',     name: 'IndoYoga',      category: 'Institucional', role: 'Diseño & Desarrollo',            shots: src('indoyoga'),     accent: '#e0a179', ended: '2024-06', url: 'https://indoyoga.org',    blurb: 'Sitio institucional de yoga: práctica viva, formaciones y comunidad.' },
  { slug: 'beokey',       name: 'BeOkey',        category: 'Landing',       role: 'Diseño & Desarrollo',            shots: src('beokey'),       accent: '#e0bd76', ended: '2024-04', url: 'https://beokey.live',     blurb: 'Landing de una plataforma de terapias: salas de acompañamiento y bienestar.' },
];
