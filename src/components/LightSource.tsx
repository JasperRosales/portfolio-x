import { useEffect } from "react";

/** Moves the neumorphic light with the pointer, so every raised surface's shadow shifts. */
export default function LightSource() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement.style;
    let tx = 1, ty = 1, x = 1, y = 1, raf = 0;

    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      root.setProperty("--sx", x.toFixed(3));
      root.setProperty("--sy", y.toFixed(3));
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.004 ? requestAnimationFrame(tick) : 0;
    };
    const aim = (nx: number, ny: number) => {
      // Light sits opposite the pointer; clamp so shadows never vanish.
      tx = Math.max(-1, Math.min(1, -nx * 1.6));
      ty = Math.max(-1, Math.min(1, -ny * 1.6));
      if (Math.abs(tx) < 0.35) tx = tx < 0 ? -0.35 : 0.35;
      if (Math.abs(ty) < 0.35) ty = ty < 0 ? -0.35 : 0.35;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      aim(e.clientX / innerWidth - 0.5, e.clientY / innerHeight - 0.5);
    };
    // Touch screens: let the light drift slowly instead.
    let drift = 0;
    if (!matchMedia("(pointer: fine)").matches) {
      const t0 = performance.now();
      drift = window.setInterval(() => {
        const a = (performance.now() - t0) / 6000;
        aim(Math.cos(a) * 0.5, Math.sin(a) * 0.5);
      }, 120);
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      clearInterval(drift);
    };
  }, []);
  return null;
}
