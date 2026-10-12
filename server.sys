// 3er Raum der bis zu 9er wachsen darf — getimmete runtime
export const RAUM3_BIS_9 = {
  basis: 3,
  max: 9,
  faktor: 3, // 3×3=9
  
  // 3 Basis Räume — wie im.md ni.md sub.md
  raeume: [
    { id: "A", base: "im.md", angle: 0, slots: 1, maxSlots: 3, prime: 2, symbol: "◉" },
    { id: "B", base: "ni.md", angle: 120, slots: 1, maxSlots: 3, prime: 3, symbol: "◎" },
    { id: "C", base: "sub.md", angle: 240, slots: 1, maxSlots: 3, prime: 5, symbol: "△" }
  ],

  // Wann wachsen? — nur wenn gebraucht — wie vmware thin
  sollWachsen(raum) {
    // Masse ist Masse aber wie viel verträgt jeder — Frage
    const masse = raum.masse || 0
    const traegt = raum.tragefaehigkeit || 1
    
    if (masse > traegt) {
      // muss wachsen — 1 → 2 → 3 Sub-Räume
      if (raum.slots < raum.maxSlots) {
        raum.slots++ // wächst mit wachsen
        console.log(`${raum.base} wächst: ${raum.slots-1}→${raum.slots} — tmp rär flüchtig`)
        return true
      }
    }
    return false
  },

  // Submask — 3×1 → 3×2 → 3×3 — truncate to X
  submask(cols) {
    // cols=1 → 3 Räume — Basis
    // cols=2 → 6 Räume — Mittel — 6 Arme Würfel
    // cols=3 → 9 Räume — Max — 9er Raum — nur wenn nötig
    if (cols <= 1) return this.raeume // 3
    if (cols === 2) return this.raeume.flatMap(r => [r, {...r, sub: 1}]) // 6
    if (cols >= 3) return this.raeume.flatMap(r => [r, {...r, sub: 1}, {...r, sub: 2}]) // 9
  }
}
