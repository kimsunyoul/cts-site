function hashString(s: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PALETTES = ["navy-ESD", "orange-SZS", "teal-VSI", "gray-SCC"] as const;
type PaletteKey = typeof PALETTES[number];

export function coinPalette(coinId: string): PaletteKey {
  const idx = hashString(coinId) % PALETTES.length;
  return PALETTES[idx];
}

export function computeRate(coinId: string) {
  const now = Date.now();
  const bucket = Math.floor(now / (15 * 60 * 1000)); // 15분 버킷
  const seed = hashString(`${coinId}:${bucket}`);
  const rand = mulberry32(seed);

  const D = Math.min(1, Math.max(0, rand() * 0.9 + 0.05)); // Donation flow
  const E = Math.min(1, Math.max(0, rand() * 0.9 + 0.05)); // Emotion index
  const S = Math.min(1, Math.max(0, rand() * 0.9 + 0.05)); // Shock index
  const R = 1 + ((hashString(coinId) % 7) - 3) * 0.03; // 0.91 ~ 1.09 (희소도)

  const base = 300;
  const rate =
    base *
    (1 + Math.log1p(D * 1000) / 20) *
    (1 + E / 3) *
    (1 + S / 4) *
    R;

  const palette = coinPalette(coinId);

  return {
    palette,
    ssc: Math.round(rate),
    components: {
      D: Number(D.toFixed(3)),
      E: Number(E.toFixed(3)),
      S: Number(S.toFixed(3)),
      R: Number(R.toFixed(3)),
      base,
    },
  };
}
