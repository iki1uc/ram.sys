// runtime.js — getimmete runtime für alle — MASSIERT v81 — C81 Bildungsschicht
// 9 Räume 360° 100% deckende ramzize sp — wie vmware — Datei wächst mit wachsen
// TIME PHASE M-017/M-023 phase [0.35,0.7] — RAW-ID-COREZOOM [4,16,64,128]

export const RUNTIME = {
  META: { id: "iki1uc", version: "MASSIERT-v81", tick: "3×3=360°", phase: 0.35 },
  
  // 9er Räume — alle 9 ein geteilt 3 9 81 729 alle nehmen teil
  RAEUME: [
    { id: "01", name: "im.md",       angle: 0,   prime: 2,  dev: 0.02, symbol: "◉", type: "3er" },
    { id: "02", name: "ni.md",       angle: 40,  prime: 3,  dev: 0.05, symbol: "◎", type: "9er" },
    { id: "03", name: "sub.md",      angle: 80,  prime: 5,  dev: 0.11, symbol: "△", type: "SUB" },
    { id: "04", name: "andock.js",   angle: 120, prime: 7,  dev: 0.18, symbol: "↗", type: "Sprung" },
    { id: "05", name: "dock.js",     angle: 160, prime: 11, dev: 0.27, symbol: "◆", type: "Landen" },
    { id: "06", name: "virtual.ram", angle: 200, prime: 13, dev: 0.33, symbol: "▣", type: "tmp flüchtig" },
    { id: "07", name: "virtual.rom", angle: 240, prime: 17, dev: 0.41, symbol: "◆", type: "persistent" },
    { id: "08", name: "STATION9.js", angle: 280, prime: 19, dev: 0.44, symbol: "◎", type: "FUSION" },
    { id: "09", name: "index.html",  angle: 320, prime: 23, dev: 0.52, symbol: "AL", type: "Alles" }
  ],

  // getimmete runtime — wie TOOLATOR 3×6 18 SLOTS prime 2-61
  start() {
    let phase = 0.35 // TIME PHASE M-017
    const interval = 360 / 9 // 40° pro Raum — 3×3=360°
    
    setInterval(() => {
      phase = (phase + 0.14) % 1 // PI-3×9 k*0.14 mod1 — k1 0.14 k2 0.28...
      
      this.RAEUME.forEach((raum, i) => {
        const time = Date.now()
        const active = (phase * 9) | 0 // welcher der 9 gerade dran
