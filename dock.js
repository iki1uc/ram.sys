// dock.js — MASSIERT — Dock = Landen — ram.landen symbolisch
// ◉ → 3/9 → ◎ → 81 ◆ → △

export function dock(raum) {
  // Sprung landet
  const landed = raum.raum81 // 81 SLOTS 9×9 = ◆
  return {
    status: "DOCKED",
    ort: "STATION/HOME",
    projection: "PROJ 39 ON",
    slot: "A081",
    symbol: "◆",
    masse: "Masse ist Masse aber wie viel verträgt jeder — hier 81 verträgt",
    ram: "ram.landen — persistent — ROM — bleibt nach BOOT LOG cleared"
  }
}
