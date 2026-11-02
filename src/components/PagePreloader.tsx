import { useState, useEffect } from "react";

/**
 * PagePreloader: Pantalla de entrada y transición suave para Systema HETS
 * en Tierra Sombra (#1F1916), Terracota Pampeana (#C86442) y Ocre Arcilla (#C49A64).
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
      className={`fixed inset-0 z-[9999] bg-[#1F1916] flex flex-col items-center justify-center select-none transition-all duration-700 ease-out ${
        fading
          ? "opacity-0 pointer-events-none scale-[1.01]"
          : "opacity-100 pointer-events-auto scale-100"
      }`}
    >
      {/* Fondo con halo radial en Terracota tenue */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial from-[#B85332]/15 via-transparent to-[#1F1916] pointer-events-none"
      />

      {/* Contenedor central de marca con ritmo de respiración suave */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        
        {/* Emblema con animación de respiración (Inspirar / Exhalar) */}
        <div className="relative mb-6">
          {/* Halo expansivo en Terracota */}
          <div className="absolute inset-0 rounded-full bg-[#B85332]/22 blur-xl animate-pulse" />
          
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#C49A64]/60 flex items-center justify-center bg-[#2A211C]/95 shadow-[0_0_28px_rgba(184,83,50,0.28)]">
            {/* Círculos concéntricos de Systema en Terracota y Ocre Arcilla */}
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#C86442] animate-subtle-float"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="50" cy="50" r="44" strokeDasharray="3 3" opacity="0.45" />
              <circle cx="50" cy="50" r="32" stroke="#C49A64" opacity="0.8" />
              <circle cx="50" cy="50" r="18" stroke="#F4EDE2" />
              <circle cx="50" cy="50" r="5" fill="#C86442" />
              {/* Ejes cardinales de equilibrio biomecánico */}
              <line x1="50" y1="6" x2="50" y2="24" stroke="#C49A64" opacity="0.65" />
              <line x1="50" y1="76" x2="50" y2="94" stroke="#C49A64" opacity="0.65" />
              <line x1="6" y1="50" x2="24" y2="50" stroke="#C49A64" opacity="0.65" />
              <line x1="76" y1="50" x2="94" y2="50" stroke="#C49A64" opacity="0.65" />
            </svg>
          </div>
        </div>

        {/* Nombre Institucional */}
        <h2 className="font-heading text-xl sm:text-2xl uppercase tracking-[0.28em] text-[#F4EDE2] font-bold mb-1.5">
          <span className="text-lightning-gradient">SYSTEMA HETS</span>
        </h2>

        {/* Bajada con los pilares en Ocre Arcilla */}
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#C49A64] opacity-95 mb-6">
          Respiración · Relajación · Movimiento
        </p>

        {/* Línea de carga progresiva en Terracota y Ocre Arcilla */}
        <div className="w-36 sm:w-48 h-[2px] bg-[#2A211C] rounded-full overflow-hidden relative border border-[#C49A64]/35">
          <div className="h-full bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332] rounded-full animate-[shimmerSlide_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
