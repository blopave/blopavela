# atlas: celda de gema = [color premultiplicado | alfa] (2·OUT × OUT); palabra = capa aditiva (OUT × OUT)
import sys, os, numpy as np
from PIL import Image
S, N, RES, OUT, Q, dest = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5]), sys.argv[6]
PER, COLS = 18, 3; ROWS = PER // COLS
def load(i, w):
    a = np.frombuffer(open(f'raw-{S}/f{i:03d}-w{w}.raw', 'rb').read(), np.uint8).reshape(RES, RES, 4)[::-1].astype(np.float32) / 255
    a[..., :3] *= a[..., 3:4]; return a
def img(x): return Image.fromarray((x * 255 + .5).clip(0, 255).astype(np.uint8)).resize((OUT, OUT), Image.LANCZOS)
def cell(i):
    a0, a1 = load(i, 0), load(i, 1)
    g = Image.new('RGB', (2 * OUT, OUT)); g.paste(img(a0[..., :3]), (0, 0)); g.paste(img(np.repeat(a0[..., 3:4], 3, 2)), (OUT, 0))
    return g, img(np.repeat(np.clip(a1[..., 1:2] - a0[..., 1:2], 0, 1), 3, 2))   # palabra: luminancia (canal G, el centro del corrimiento RGB)
os.makedirs(dest, exist_ok=True)
for k in range(N // PER):
    G = Image.new('RGB', (COLS * 2 * OUT, ROWS * OUT)); W = Image.new('RGB', (COLS * OUT, ROWS * OUT))
    for j in range(PER):
        g, w = cell(k * PER + j); G.paste(g, ((j % COLS) * 2 * OUT, (j // COLS) * OUT)); W.paste(w, ((j % COLS) * OUT, (j // COLS) * OUT))
        if k * PER + j == 0: g.save(f'{dest}/gema-{S}-f0.webp', quality=Q, method=6); w.save(f'{dest}/palabra-{S}-f0.webp', quality=Q, method=6)
    G.save(f'{dest}/gema-{S}-{k}.webp', quality=Q, method=6); W.save(f'{dest}/palabra-{S}-{k}.webp', quality=Q, method=6)
tot = 0
for f in sorted(os.listdir(dest)):
    if f'-{S}-' in f: sz = os.path.getsize(f'{dest}/{f}'); tot += sz; print(f, sz // 1024, 'KB')
print('total', S, tot // 1024, 'KB')
