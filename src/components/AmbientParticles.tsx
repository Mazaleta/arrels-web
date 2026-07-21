import { useMemo } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  dx1: number;
  dy1: number;
  dx2: number;
  dy2: number;
  dx3: number;
  dy3: number;
  dx4: number;
  dy4: number;
  color: "green" | "gold" | "light";
};

const randomOffset = () => -110 + Math.random() * 220;

export function AmbientParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 52 }, (_, id) => ({
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 5,
      duration: 32 + Math.random() * 34,
      delay: Math.random() * -60,
      opacity: 0.3 + Math.random() * 0.42,
      dx1: randomOffset(),
      dy1: randomOffset(),
      dx2: randomOffset(),
      dy2: randomOffset(),
      dx3: randomOffset(),
      dy3: randomOffset(),
      dx4: randomOffset(),
      dy4: randomOffset(),
      color: (["green", "gold", "light"] as const)[Math.floor(Math.random() * 3)],
    }));
  }, []);

  return (
    <div className="ambient-particles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={`particle particle-${particle.color}`}
          style={{
            "--x": `${particle.x}vw`,
            "--y": `${particle.y}vh`,
            "--size": `${particle.size}px`,
            "--duration": `${particle.duration}s`,
            "--delay": `${particle.delay}s`,
            "--particle-opacity": particle.opacity,
            "--dx1": `${particle.dx1}px`,
            "--dy1": `${particle.dy1}px`,
            "--dx2": `${particle.dx2}px`,
            "--dy2": `${particle.dy2}px`,
            "--dx3": `${particle.dx3}px`,
            "--dy3": `${particle.dy3}px`,
            "--dx4": `${particle.dx4}px`,
            "--dy4": `${particle.dy4}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
