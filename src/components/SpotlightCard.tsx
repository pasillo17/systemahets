import React, { useRef, useState, useCallback } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  interactive?: boolean;
}

/**
 * SpotlightCard: Tarjeta interactiva con resplandor seguidor de cursor
 * y borde perimetral reactivo en Dorado Antiguo (#C5A059).
 */
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(197, 160, 89, 0.14)",
  borderColor = "rgba(197, 160, 89, 0.45)",
  interactive = true,
  ...props
}: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseEnter={interactive ? handleMouseEnter : undefined}
      onMouseLeave={interactive ? handleMouseLeave : undefined}
      className={`relative rounded-sm overflow-hidden transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Resplandor interior interactivo guiado por cursor */}
      {interactive && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(450px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${spotlightColor}, transparent 70%)`,
          }}
        />
      )}

      {/* Sutil resplandor perimetral estático en Dorado Antiguo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#C5A059]/10 blur-2xl z-0"
      />

      {/* Halo de borde al hacer hover */}
      {interactive && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${borderColor}, transparent 60%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Contenido sobre las capas de luz */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
