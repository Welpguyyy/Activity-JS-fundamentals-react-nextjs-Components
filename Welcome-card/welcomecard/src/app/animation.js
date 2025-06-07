// animation.js
export default function runAnimation() {
  new FinisherHeader({
    count: 100,
    size: { min: 1, max: 30, pulse: 0.3 },
    speed: { x: { min: 0, max: 0.4 }, y: { min: 0, max: 0.6 } },
    colors: { background: "#5d4a5c", particles: [ "#474732", "#fed7e2", "#f3ffa7" ] },
    blending: "overlay",
    opacity: { center: 1, edge: 0 },
    skew: -2,
    shapes: [ "c" ]
  });
}
