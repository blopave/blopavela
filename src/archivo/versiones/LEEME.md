# Versiones archivadas

Exploraciones descartadas por Pablo el 2026-11-04 (se quedó con Lupa, Órbita, Cine, Prisma y Facetas).
Están fuera de `src/pages/` para que no se publiquen. Para revisarlas: moverlo a `src/versiones/` (se sirve en /v/<slug> sólo en dev)
y volver a agregarlo en `src/data/versiones.ts`.

- estudio.astro — material de la gema con luz de estudio (tiras cian/roja, dispersión física)
- esquirlas.astro — estallido geométrico en esquirlas (plegado de dominio con 6 planos)
- mesura.astro — aberración sólo como evento + case con visor grande y ficha en filas
- metamorfosis.astro — la gema se transforma en una lámina de cristal con el video adentro
- lupa.astro — muro apagado de los 4 sitios + gema-lupa que los revela (archivada 2026-11-04, ronda 6)
- anterior.astro — el home publicado hasta noviembre 2026 (gema + índice + collage). Archivado 2026-11-04 al publicar Prisma:
  regla de Pablo = cada evolución es el nuevo punto de partida, no se compara contra lo superado.
- facetas.astro, cine.astro, espectro.astro, cuarto-oscuro.astro, linea.astro, prisma-pre.astro — archivadas 2026-11-11:
  Pablo se quedó con Prisma (home) + Órbita para seguir refinando. Los assets de espectro y prisma-pre se movieron de
  `public/img/` a `assets/` (para no publicarlos); si se restauran, devolverlos a `public/img/<slug>/`.
- orbita.astro, estallido.astro — archivadas 2026-11-13 al publicar Halo como home. Órbita fue el home 2026-11-11 → 11-13
  (anillo de pantallas que sale de la gema de a una); Estallido fue el paso previo a Halo (gema → vitrina → abanico + lista).
  Para restaurar: imports `../data/projects` → `../../data/projects` si se sirven desde acá (hoy no se sirven).
