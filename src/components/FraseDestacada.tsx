import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * FraseDestacada sobre Gris Carbón (#121316) con acentos en Dorado Antiguo (#C5A059)
 * y Blanco Humo (#F4F4F6).
 */
export function FraseDestacada() {
  const { t } = useLanguage();

  return (
    <section className="relative py-12 sm:py-20 bg-[#121316] overflow-hidden text-center">
      {/* Resplandor ambiental centrado en Dorado Antiguo */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[580px] h-32 sm:h-56 bg-gradient-to-r from-[#C5A059]/12 via-[#D4AF37]/15 to-[#C5A059]/12 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="py-4 sm:py-6 space-y-4 sm:space-y-6">
            <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto" />

            <blockquote
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-[#F4F4F6] font-normal tracking-wide leading-relaxed"
              style={{ textWrap: "balance" }}
            >
              “{t("quote.text")}”
            </blockquote>

            <div className="pt-0.5 sm:pt-1">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#C5A059] font-bold block">
                SYSTEMA HETS
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#A0A5B1] uppercase tracking-wider mt-1 font-mono font-semibold">
                {t("quote.sub")}
              </span>
            </div>

            <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
