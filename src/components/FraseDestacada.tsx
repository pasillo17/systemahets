import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Frase Destacada Institucional:
 * "El verdadero combate es con uno mismo" / "The true combat is with oneself"
 * Soporte bilingüe ES / EN.
 * Con fondo puro CSS, sin imágenes rotas.
 */
export function FraseDestacada() {
  const { t } = useLanguage();

  return (
    <section className="relative py-10 sm:py-24 bg-[#0e0d0b] border-t border-b border-[#A58A60]/25 overflow-hidden text-center">
      
      {/* Resplandor ambiental centrado en CSS puro con pulso orgánico */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[580px] h-32 sm:h-56 bg-[#A58A60]/15 rounded-full blur-[80px] pointer-events-none animate-glow-pulse"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        <ScrollReveal direction="up" distance={20}>
          <div className="space-y-4 sm:space-y-6">
            <div className="w-14 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C2A87E] to-transparent mx-auto" />
            
            <blockquote
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-gold-gradient font-normal tracking-wide leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]"
              style={{ textWrap: "balance" }}
            >
              “{t("quote.text")}”
            </blockquote>

            <div className="pt-0.5 sm:pt-1">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#C2A87E] font-bold block">
                SYSTEMA HETS
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#C4BFB4] uppercase tracking-wider mt-1">
                {t("quote.sub")}
              </span>
            </div>

            <div className="w-14 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C2A87E] to-transparent mx-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
