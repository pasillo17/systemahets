import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * SECCIÓN FRASE DESTACADA:
 * Rediseño audaz con corte diagonal y bloque sólido lateral en Naranja Terracota (#D97736),
 * comillas monumentales en marca de agua y tipografía Oswald de impacto.
 */
export function FraseDestacada() {
  const { t } = useLanguage();

  return (
    <section className="relative py-14 sm:py-22 section-surface-secondary overflow-hidden">
      {/* Bloque diagonal lateral en Naranja Terracota (#D97736) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-0 bottom-0 left-0 w-24 lg:w-36 bg-gradient-to-b from-[#D97736] to-[#C86428] -skew-x-12 -translate-x-10 pointer-events-none shadow-[10px_0_30px_rgba(0,0,0,0.6)]"
      />

      {/* Marca de agua tipográfica gigante */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-4 -translate-y-1/2 font-heading font-black uppercase tracking-[0.22em] text-7xl sm:text-8xl lg:text-9xl text-[#D97736]/[0.06] select-none pointer-events-none whitespace-nowrap leading-none"
      >
        SYSTEMA
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="relative p-6 sm:p-10 bg-[#110D0A] border border-[#D97736]/40 rounded-xs shadow-[0_16px_38px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Barra lateral izquierda maciza */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b from-[#D97736] via-[#D4AF37] to-[#C5A059]"
            />

            <div className="pl-3 sm:pl-6 space-y-4">
              <blockquote
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase tracking-tight text-[#F5EFE6] leading-tight glow-text-subtle"
                style={{ textWrap: "balance" }}
              >
                “{t("quote.text")}”
              </blockquote>

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#D97736]/25">
                <span className="px-2.5 py-1 text-xs font-heading uppercase tracking-widest bg-[#D97736] text-[#110D0A] font-bold rounded-xs">
                  SYSTEMA HETS
                </span>
                <span className="text-xs sm:text-sm text-[#D4AF37] uppercase tracking-wider font-heading font-bold">
                  {t("quote.sub")}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
