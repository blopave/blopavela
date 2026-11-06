// bakea la gema de Prisma (shader GEM real del home) en N fotogramas de giro ry ∈ [0, π)
// R = Ry(ry)·Rx(RX0): con el eje de giro = eje 2-fold del icosaedro, el giro es periódico en π
import { chromium } from 'playwright-core';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const exe = process.env.HOME + '/Library/Caches/ms-playwright/chromium-1217/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
const [set = 'l', N = '72', RES = '1280'] = process.argv.slice(2);
const BEAM = { l: [-0.928173488459918, 0.17135510556183103, 0.33035042472810605], p: [-0.10180575385593546, 0.9383518451859006, 0.33035042472810605] }[set];
const src = readFileSync('/Users/vela/Desktop/Proyects/blopa/src/pages/index.astro', 'utf8');
const i0 = src.indexOf('const GEM = () => `') + 'const GEM = () => '.length; const i1 = src.indexOf('}`;', i0) + 2;
const GEM = new Function('Q', 'return ' + src.slice(i0, i1))({ steps: 110, gin: 42, gb: 3, aa: 4 });
const out = `/private/tmp/claude-501/-Users-vela-Desktop-Proyects/c99b7ae4-4740-4a18-998a-9e2a155b143d/scratchpad/prisma-pre/raw-${set}`; mkdirSync(out, { recursive: true });
const b = await chromium.launch({ executablePath: exe, headless: false, args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 400, height: 300 } });
await p.goto('http://localhost:4322/404');
await p.evaluate(async ({ GEM, RES, BEAM }) => {
  const f = new FontFace('Bebas Neue', 'url(/fonts/bebas-neue-latin-400-normal.woff2)'); await f.load(); document.fonts.add(f);
  const c = document.createElement('canvas'); c.width = c.height = RES; const gl = c.getContext('webgl', { alpha: true, premultipliedAlpha: false, antialias: false });
  const mk = (t, s) => { const sh = gl.createShader(t); gl.shaderSource(sh, s); gl.compileShader(sh); if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(sh); return sh; };
  const pr = gl.createProgram(); gl.attachShader(pr, mk(gl.VERTEX_SHADER, 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}')); gl.attachShader(pr, mk(gl.FRAGMENT_SHADER, GEM));
  gl.bindAttribLocation(pr, 0, 'p'); gl.linkProgram(pr); gl.useProgram(pr);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  // palabra: igual que drawWord() del home
  const wc = document.createElement('canvas'); wc.width = 1024; wc.height = 384; const x = wc.getContext('2d');
  x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.letterSpacing = '8px'; x.font = '400 300px "Bebas Neue", sans-serif'; x.fillText('blopa', 512, 200);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); const t = gl.createTexture(); gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, t);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, wc);
  [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach((k) => gl.texParameteri(gl.TEXTURE_2D, k, gl.CLAMP_TO_EDGE)); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  const U = (n) => gl.getUniformLocation(pr, n);
  gl.uniform1i(U('uWord'), 1); gl.uniform2f(U('uRes'), RES, RES); gl.uniform2f(U('uOff'), 0, 0); gl.uniform1f(U('uAlpha'), 1); gl.uniform1f(U('uScale'), 1.97);
  gl.uniform1f(U('uAber'), 0); gl.uniform1f(U('uTime'), 3.0); gl.uniform3f(U('uTint'), 1, 1, 1); gl.uniform1f(U('uTintAmt'), 0);
  gl.uniform3f(U('uBeam'), ...BEAM); gl.uniform1f(U('uLit'), 1);
  gl.viewport(0, 0, RES, RES); gl.disable(gl.BLEND); gl.clearColor(0, 0, 0, 0);
  const px = new Uint8Array(RES * RES * 4);
  window.__frame = (ry, word) => { const RX0 = 0.12, c = Math.cos(ry), s = Math.sin(ry), cx = Math.cos(RX0), sx = Math.sin(RX0);
    const M = [c, s * sx, s * cx, 0, cx, -sx, -s, c * sx, c * cx];   // Ry·Rx, fila a fila
    gl.uniformMatrix3fv(U('uRot'), false, new Float32Array([M[0], M[3], M[6], M[1], M[4], M[7], M[2], M[5], M[8]]));
    gl.uniform1f(U('uWordAmt'), word); gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.readPixels(0, 0, RES, RES, gl.RGBA, gl.UNSIGNED_BYTE, px);
    let bin = ''; for (let i = 0; i < px.length; i += 0x8000) bin += String.fromCharCode.apply(null, px.subarray(i, i + 0x8000)); return btoa(bin); };
}, { GEM, RES: +RES, BEAM });
const n = +N;
for (let i = 0; i <= n; i++) {   // i = n: ry = π (para verificar periodicidad contra i = 0)
  const ry = (i * Math.PI) / n;
  for (const w of [0, 1]) writeFileSync(`${out}/f${String(i).padStart(3, '0')}-w${w}.raw`, Buffer.from(await p.evaluate(([r, ww]) => window.__frame(r, ww), [ry, w]), 'base64'));
}
await b.close(); console.log('ok', set, n, RES);
