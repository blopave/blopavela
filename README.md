# blopa

Sitio de portfolio de **blopa** — creative developer, Buenos Aires.
Un índice vivo de proyectos con una firma visual propia: fondo casi-negro frío, grano
cinematográfico y **aberración cromática cyan/rojo** como único evento de color.

> Estado: en desarrollo. Dirección de diseño a cargo de la IA, iterando en vivo con blopa.

---

## Stack

- **[Astro 5](https://astro.build)** — sitio estático, una sola página (SPA por estado).
- **CSS vanilla** + `<script>` (TypeScript) inline. Sin frameworks de UI, sin Tailwind.
- **Tipografías self-hosted** (foundry, nunca Google Fonts): **Clash Display** (display) + **Satoshi** (texto).
- **Canvas 2D** para el objeto cristalino (icosaedro wireframe con bordes cromáticos).

## Arranque

```bash
npm install
npm run dev        # http://localhost:4322
```

| Comando           | Qué hace                                  |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en el puerto 4322  |
| `npm run build`   | Compila el sitio a `dist/`                |
| `npm run preview` | Sirve el build de producción              |

## Estructura

```
blopa/
├── public/
│   ├── fonts/            # Clash Display + Satoshi (.woff2, self-hosted)
│   └── img/src/          # capturas reales de cada sitio (<slug>-{1,2,3}.jpg)
├── src/
│   ├── data/projects.ts  # los 7 proyectos: datos + capturas + accent + url + blurb
│   └── pages/index.astro # toda la página: markup + estilos + lógica
├── astro.config.mjs
└── package.json
```

## Arquitectura

Una sola página con tres estados, manejados por clases en `<body>`:

1. **Landing** — sólo el wordmark `blopa` cromático dentro del cristal. Se entra con
   scroll hacia abajo o click en cualquier parte.
2. **Índice** (`.in-projects`) — los 7 proyectos como filas-botón. Hover → collage vivo
   del sitio a la derecha (con profundidad 3D + parallax). Click → abre el case.
3. **Case** (`.in-case`) — página interna del proyecto: nombre, rol en el color propio,
   blurb, acción *Ver en vivo* o *Prototipo*, y las capturas reales a tamaño completo.
   La transición de entrada (barrido RGB-split + glitch) es la firma del sitio.

**URLs compartibles:** cada case tiene su estado en el historial (`/?p=<slug>`); el botón
atrás del navegador funciona y se puede entrar directo a un proyecto.

## Los proyectos

Se editan en [`src/data/projects.ts`](src/data/projects.ts). Cada uno lleva `slug`, `name`,
`category`, `role`, `shots[]` (3 capturas reales), `accent`, `ended` (YYYY-MM), `url?` y `blurb`.

| Proyecto      | Estado          |
| ------------- | --------------- |
| Vale Casenave | valecasenave.com |
| PULZ          | pulz.run        |
| lucid         | prototipo       |
| BassLayer     | basslayer.io    |
| IndoYoga      | indoyoga.org    |
| BeOkey        | beokey.live     |
| Fini          | prototipo       |

### Actualizar las capturas

Las imágenes en `public/img/src/` son capturas reales de cada sitio. Regla: mostrar
**secciones densas** (no el hero pelado), que representen el sitio en su totalidad.

## Accesibilidad y motion

Respeta `prefers-reduced-motion` (desactiva glitch, barridos y parallax). El landing y las
filas son operables por teclado; el case cierra con `Esc` o el botón atrás.

---

Buenos Aires · un experimento — dirección a cargo de la IA
