// andock.js — MASSIERT — Andock = Sprung — Sprung symbolisch
// 3 → 9 → 27 → 81 → 729 — alle nehmen teil aber nur tmp rär nutzbar flüchtig

export function andock(raum3) {
  // Sprung — 3er Raum zum 9er als Übergang
  const sprung = {
    von: "◉ 3er Raum — im.md",
    nach: "◎ 9er Raum — ni.md",
    wie: "↗ ↘ — 3×3=9 — 9 ein geteilt 3",
    symbol: "◎ → 3 ↺",
    sub: "sub.md — subgrid must be valid for requested X — truncate to X — soll-overrides-ist",
    tmp: "nur tmp p rär als nutzbar und flüchtig — 27 = ▣ — 9 = ICH"
  }
  // ram.landen Vorbereitung
  return {
    status: "ANDOCKING",
    sprung: sprung,
    next: "dock.js — ram.landen — 81 ◆",
    deckend: "9 Räume 360° 100% deckende ramzize sp wie vmware — Datei wächst mit wachsen"
  }
}
