import { useState, useEffect } from "react";

/**
 * PagePreloader: Pantalla de entrada y transición suave para Systema HETS.
 * Evita la aparición brusca de imágenes y fuentes en la carga inicial:
 * 1. Muestra un velo estético en negro carbón (#080807) con el emblema de Systema y respiración consciente.
 * 2. Permite que el navegador decodifique y pinte el Hero y los recursos críticos.
 * 3. Se desvanece de forma sedosa (fade-out de 700ms) y luego se retira completamente del DOM.
 */
export function PagePreloader() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Permitir un tiempo mínimo de calma (650ms) para que el layout e imágenes iniciales se preparen
    const minTimer = setTimeout(() => {
      setFading(true);
    }, 650);

    // Retirar del DOM una vez completado el fade-out
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
      className={`fixed inset-0 z-[9999] bg-[#080807] flex flex-col items-center justify-center select-none transition-all duration-700 ease-out ${
        fading
          ? "opacity-0 pointer-events-none scale-[1.01]"
          : "opacity-100 pointer-events-auto scale-100"
      }`}
    >
      {/* Fondo con halo radial dorado tenue */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial from-[#A58A60]/12 via-transparent to-[#080807] pointer-events-none"
      />

      {/* Contenedor central de marca con ritmo de respiración suave */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        
        {/* Emblema con animación de respiración (Inspirar / Exhalar) */}
        <div className="relative mb-6">
          {/* Halo expansivo tenue */}
          <div className="absolute inset-0 rounded-full bg-[#C2A87E]/20 blur-xl animate-pulse" />
          
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#A58A60]/40 flex items-center justify-center bg-[#12110F]/90 shadow-[0_0_25px_rgba(165,138,96,0.25)]">
            {/* Círculos concéntricos de Systema */}
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#C2A87E] animate-subtle-float"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="50" cy="50" r="44" strokeDasharray="3 3" opacity="0.4" />
              <circle cx="50" cy="50" r="32" stroke="#A58A60" opacity="0.7" />
              <circle cx="50" cy="50" r="18" stroke="#F1EBDD" />
              <circle cx="50" cy="50" r="5" fill="#C2A87E" />
              {/* Ejes cardinales de equilibrio biomecánico */}
              <line x1="50" y1="6" x2="50" y2="24" stroke="#A58A60" opacity="0.5" />
              <line x1="50" y1="76" x2="50" y2="94" stroke="#A58A60" opacity="0.5" />
              <line x1="6" y1="50" x2="24" y2="50" stroke="#A58A60" opacity="0.5" />
              <line x1="76" y1="50" x2="94" y2="50" stroke="#A58A60" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Nombre Institucional */}
        <h2 className="font-heading text-xl sm:text-2xl uppercase tracking-[0.28em] text-[#F1EBDD] font-bold mb-1.5">
          <span className="text-gold-gradient">SYSTEMA HETS</span>
        </h2>

        {/* Bajada con los 4 pilares: Respiración, Relajación, Postura, Movimiento */}
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#C2A87E] opacity-90 mb-6">
          Respiración · Relajación · Movimiento
        </p>

        {/* Línea dorada de carga progresiva suave */}
        <div className="w-36 sm:w-48 h-[2px] bg-[#1a1815] rounded-full overflow-hidden relative border border-[#A58A60]/20">
          <div className="h-full bg-gradient-to-r from-[#A58A60] via-[#F1EBDD] to-[#C2A87E] rounded-full animate-[shimmerSlide_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
