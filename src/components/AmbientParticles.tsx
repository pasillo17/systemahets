import { useEffect, useRef } from "react";

/**
 * AmbientParticles:
 * Genera una atmósfera sutil en Dorado Antiguo (#C5A059) y Dorado más claro (#D4AF37).
 * Respeta fielmente prefers-reduced-motion.
 */
export function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
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

    const particleCount = Math.min(22, Math.floor(window.innerWidth / 48));
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.4 + 0.5,
      speedY: -(Math.random() * 0.18 + 0.04),
      speedX: (Math.random() - 0.5) * 0.08,
      opacity: Math.random() * 0.32 + 0.1,
      pulseSpeed: Math.random() * 0.012 + 0.006,
      pulseOffset: Math.random() * Math.PI * 2,
      isBrightGold: i % 3 === 0,
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
        ctx.fillStyle = p.isBrightGold
          ? `rgba(212, 175, 55, ${currentOpacity})`
          : `rgba(197, 160, 89, ${currentOpacity})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(197, 160, 89, 0.3)";
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
      {/* Capa de atmósfera suave en Dorado Antiguo (#C5A059) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-[15%] -left-[10%] w-[650px] h-[650px] rounded-full bg-[#C5A059]/5 blur-[130px] animate-glow-pulse" />

        <div
          className="absolute top-[45%] -right-[15%] w-[700px] h-[700px] rounded-full bg-[#D4AF37]/6 blur-[150px] animate-glow-pulse"
          style={{ animationDelay: "-3s" }}
        />

        <div
          className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#C5A059]/5 blur-[140px] animate-glow-pulse"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      {/* Partículas en canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-10 opacity-55"
        aria-hidden="true"
      />
    </>
  );
}
