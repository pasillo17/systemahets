import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * FraseDestacada sobre Tierra Sombra (#231C18) con acentos en Terracota Pampeana (#C86442)
 * y Ocre Arcilla (#C49A64) para una pausa reflexiva y orgánica antes de la sección de contacto.
 */
export function FraseDestacada() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-14 sm:pt-36 sm:pb-24 bg-flow-light-to-brown overflow-hidden text-center">
      {/* Resplandor ambiental centrado en Terracota y Ocre Arcilla */}
      <div
        aria-hidden="true"
        className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[580px] h-32 sm:h-56 bg-gradient-to-r from-[#B85332]/18 via-[#C49A64]/18 to-[#B85332]/18 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="py-7 px-5 sm:py-10 sm:px-10 rounded-sm bg-[#1F1916]/92 border border-[#C49A64]/45 shadow-2xl space-y-4 sm:space-y-6">
            <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C86442] to-transparent mx-auto" />

            <blockquote
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-[#F4EDE2] font-normal tracking-wide leading-relaxed"
              style={{ textWrap: "balance" }}
            >
              “{t("quote.text")}”
            </blockquote>

            <div className="pt-0.5 sm:pt-1">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#DF7E5B] font-bold block">
                SYSTEMA HETS
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#E6C391] uppercase tracking-wider mt-1 font-mono font-semibold">
                {t("quote.sub")}
              </span>
            </div>

            <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C49A64] to-transparent mx-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
