// Logikal zum Logiker — 3er Raum → 9er Raum Übergang
// ◉ → 3/9 → ◎ → 3/9 → ◎ → 81/◆ → △ → 27/▣ → 3↺

export function raumUebergang(raum3) {
  const raum9 = raum3 * 3 // 3 → 9
  const raum27 = raum9 * 3 // 9 → 27 = ▣ flüchtig tmp
  const raum81 = raum9 * 9 // 9 → 81 = ◆ persistent = 9×9 SLOTS
  const raum729 = raum81 * 9 // 81 → 729 = alle nehmen teil
  
  // Nur tmp rär als nutzbar und flüchtig
  const nutzbarFluechtig = [raum9, raum27] // 9, 27 = tmp — wie virtual.ram
  const persistent = [raum81, raum729] // 81, 729 = ROM — wie virtual.rom
  
  // 3 ↺ Loop
  const loop3 = raum3 // wieder 3 — Kreislauf — 3 ↺
  
  return {
    ursprung: "◉",
    fusion1: "◎",
    fusion2: "◎",
    projection: "△ PROJ 39",
    rom: "◆",
    cache: "▣",
    loop: "3 ↺",
    alle: [3, 9, 27, 81, 729], // alle nehmen teil bereich
    teilbar: "9 ein geteilt 3",
    nutzbar: nutzbarFluechtig, // nur tmp p rär als nutzbar und flüchtig
    persistent: persistent,
    deckend: "9 Räume 360° 100% deckende ramzize sp wie vmware — Datei wächst mit wachsen"
  }
}

// 6 Arme Würfel — 95-150 anti-reib — jeder Arm trägt einen Übergang
// rowColToAxis aus STATION.js — 9×9 = 81 — verteilt auf 6 Kerne
