import { useState, useEffect } from "react";

/**
 * PagePreloader: Pantalla de entrada y transición suave para Systema HETS
 * en Gris Carbón (#121316), Gris Grafito (#1C1E24), Dorado Antiguo (#C5A059) y Blanco Humo (#F4F4F6).
 */
export function PagePreloader() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const minTimer = setTimeout(() => {
      setFading(true);
    }, 650);

    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1400);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden={fading}
      className={`fixed inset-0 z-[9999] pointer-events-none bg-[#121316] flex flex-col items-center justify-center select-none transition-all duration-500 ease-out ${
        fading
          ? "opacity-0 scale-[1.01]"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Fondo con halo radial en Dorado Antiguo tenue */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial from-[#C5A059]/12 via-transparent to-[#121316] pointer-events-none"
      />

      {/* Contenedor central de marca con ritmo de respiración suave */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        
        {/* Emblema con animación de respiración (Inspirar / Exhalar) */}
        <div className="relative mb-6">
          {/* Halo expansivo en Dorado Antiguo */}
          <div className="absolute inset-0 rounded-full bg-[#C5A059]/20 blur-xl animate-pulse" />
          
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#C5A059]/50 flex items-center justify-center bg-[#1C1E24]/95 shadow-[0_0_28px_rgba(197,160,89,0.22)]">
            {/* Círculos concéntricos de Systema en Dorado Antiguo y Blanco Humo */}
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#C5A059] animate-subtle-float"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="50" cy="50" r="44" strokeDasharray="3 3" opacity="0.45" />
              <circle cx="50" cy="50" r="32" stroke="#C5A059" opacity="0.8" />
              <circle cx="50" cy="50" r="18" stroke="#F4F4F6" />
              <circle cx="50" cy="50" r="5" fill="#D4AF37" />
              {/* Ejes cardinales de equilibrio biomecánico */}
              <line x1="50" y1="6" x2="50" y2="24" stroke="#C5A059" opacity="0.65" />
              <line x1="50" y1="76" x2="50" y2="94" stroke="#C5A059" opacity="0.65" />
              <line x1="6" y1="50" x2="24" y2="50" stroke="#C5A059" opacity="0.65" />
              <line x1="76" y1="50" x2="94" y2="50" stroke="#C5A059" opacity="0.65" />
            </svg>
          </div>
        </div>

        {/* Nombre Institucional */}
        <h2 className="font-heading text-xl sm:text-2xl uppercase tracking-[0.28em] text-[#F4F4F6] font-bold mb-1.5">
          <span className="text-lightning-gradient">SYSTEMA HETS</span>
        </h2>

        {/* Bajada con los pilares en Gris Plata */}
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#A0A5B1] opacity-95 mb-6">
          Respiración · Relajación · Movimiento
        </p>

        {/* Línea de carga progresiva en Dorado Antiguo */}
        <div className="w-36 sm:w-48 h-[2px] bg-[#1C1E24] rounded-full overflow-hidden relative border border-[#C5A059]/25">
          <div className="h-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#C5A059] rounded-full animate-[shimmerSlide_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
