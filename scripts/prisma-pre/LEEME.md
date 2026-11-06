# Bake de la gema (versión /v/prisma-pre)

- `bake.mjs`: captura con Playwright los 72 cuadros de la gema (giro ry 0→π) desde el shader del home, sets `l` (horizontal) y `p` (vertical).
- `atlas2.py`: arma los atlas (color premultiplicado + alfa por separado) en `public/img/prisma-pre/`.

Se escribieron en el scratchpad de la sesión del 2026-11-06; las rutas internas pueden necesitar ajuste para correrlos desde acá.
