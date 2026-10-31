import { useEffect, useRef } from "react";

/**
 * AmbientParticles & Martial Penumbra:
 * Genera una atmósfera cinematográfica envolvente para Systema HETS:
 * - Niebla y orbes difusos de bronce en respiración continua.
 * - Textura de grano cinematográfico ligero (evita banding de gradientes).
 * - Partículas de polvo marcial dorado en suspensión suave.
 * - Respeta fielmente prefers-reduced-motion.
 */
export function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respetar prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Partículas de polvo marcial en suspensión
    const particleCount = Math.min(26, Math.floor(window.innerWidth / 40));
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.6,
      speedY: -(Math.random() * 0.22 + 0.06),
      speedX: (Math.random() - 0.5) * 0.12,
      opacity: Math.random() * 0.45 + 0.15,
      pulseSpeed: Math.random() * 0.012 + 0.006,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentOpacity =
          p.opacity * (0.6 + 0.4 * Math.sin(time * p.pulseSpeed * 50 + p.pulseOffset));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(194, 168, 126, ${currentOpacity})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(165, 138, 96, 0.4)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Capa de atmósfera y niebla marcial (Orbes difusos de luz ámbar/bronce) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Orbe superior izquierdo */}
        <div className="absolute -top-[15%] -left-[10%] w-[650px] h-[650px] rounded-full bg-[#A58A60]/8 blur-[130px] animate-glow-pulse" />

        {/* Orbe central profundo */}
        <div
          className="absolute top-[45%] -right-[15%] w-[700px] h-[700px] rounded-full bg-[#C2A87E]/6 blur-[150px] animate-glow-pulse"
          style={{ animationDelay: "-3s" }}
        />

        {/* Orbe inferior de tierra */}
        <div
          className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#7A6341]/10 blur-[140px] animate-glow-pulse"
          style={{ animationDelay: "-5s" }}
        />

        {/* Viñeta cinematográfica en bordes */}
        <div className="absolute inset-0 martial-vignette opacity-70" />
      </div>

      {/* Textura de grano cinematográfico SVG suave (elimina banding y da acabado fílmico) */}
      <svg
        className="pointer-events-none fixed inset-0 z-10 w-full h-full opacity-[0.035] mix-blend-screen"
        aria-hidden="true"
      >
        <filter id="cinematic-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cinematic-grain)" />
      </svg>

      {/* Partículas de polvo marcial en canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-10 opacity-70"
        aria-hidden="true"
      />
    </>
  );
}
