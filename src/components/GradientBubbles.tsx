/**
 * Soft drifting colour blobs behind the page.
 * Cheap on purpose: CSS keyframes animating `transform` only (GPU-composited),
 * soft edges come from the radial-gradient itself rather than `filter: blur`,
 * and phones get fewer blobs. Reduced-motion users get them static.
 */
const BUBBLES = [
  { color: "#3e63dd", size: 46, top: "-8%", left: "-10%", anim: "drift-a", dur: 34, mobile: true },
  { color: "#e5484d", size: 38, top: "30%", left: "62%", anim: "drift-b", dur: 40, mobile: true },
  { color: "#f5b300", size: 34, top: "68%", left: "-6%", anim: "drift-c", dur: 46, mobile: true },
  { color: "#8e4ec6", size: 30, top: "6%", left: "70%", anim: "drift-c", dur: 38, mobile: false },
  { color: "#30a46c", size: 32, top: "58%", left: "40%", anim: "drift-a", dur: 52, mobile: false },
];

export default function GradientBubbles() {
  return (
    <div aria-hidden className="bubbles pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className={`bubble ${b.mobile ? "" : "hidden md:block"}`}
          style={{
            top: b.top,
            left: b.left,
            width: `${b.size}vmax`,
            height: `${b.size}vmax`,
            background: `radial-gradient(circle at center, color-mix(in srgb, ${b.color} 42%, transparent) 0%, color-mix(in srgb, ${b.color} 14%, transparent) 40%, transparent 68%)`,
            animation: `${b.anim} ${b.dur}s ease-in-out infinite alternate`,
            animationDelay: `${-i * 7}s`,
          }}
        />
      ))}
    </div>
  );
}
