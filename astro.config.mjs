// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync } from 'node:fs';

// versiones en exploración (src/versiones/<slug>.astro): se sirven en /v/<slug> SÓLO en `astro dev`
// (para compararlas en /ver); el build de producción no las incluye
const versionesDev = {
  name: 'versiones-dev',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      if (command !== 'dev') return;
      for (const f of readdirSync('./src/versiones')) {
        if (!f.endsWith('.astro')) continue;
        injectRoute({ pattern: '/v/' + f.replace(/\.astro$/, ''), entrypoint: './src/versiones/' + f });
      }
    },
  },
};

export default defineConfig({ site: 'https://www.blopavela.com', trailingSlash: 'ignore', build: { inlineStylesheets: 'auto' },
  integrations: [versionesDev] });
