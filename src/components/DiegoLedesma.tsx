import { useState } from "react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Sección Diego Ledesma:
 * En móvil (< 768px): apilado en una sola columna (flex-col) con la tarjeta de foto arriba
 * y el texto debajo ocupando el 100% del ancho disponible.
 * Un único párrafo introductorio conciso acompañado por la lista editorial "Trayectoria Formativa".
 */
export function DiegoLedesma() {
  const [portraitLoaded, setPortraitLoaded] = useState(false);
  const { lang, t } = useLanguage();

  const hitos = SITE_CONFIG.trayectoriaDiego.map((hito) => {
    if (lang === "en") {
      switch (hito.anio) {
        case "40 Años":
          return {
            anio: "40 Years",
            descripcion:
              "Practicing and teaching martial arts as a practical tool for movement, health, and daily life.",
          };
        case "UNLP":
          return {
            anio: "UNLP",
            descripcion:
              "Physical Education Professor graduated from the National University of La Plata, with a postgrad in Emotional Education.",
          };
        case "ITF":
          return {
            anio: "ITF",
            descripcion:
              "Master VIII Dan in ITF Taekwon-Do. Secretary General and Director of the Inclusion Committee at ITF Integrity.",
          };
        case "RUS / CAN":
          return {
            anio: "RUS / CAN",
            descripcion:
              "International Systema Instructor trained directly in Argentina, Russia (Ryabko), and Canada (Vasiliev).",
          };
        case "HETS":
          return {
            anio: "HETS",
            descripcion:
              "Director of Systema HETS in La Plata: bringing practical self-protection and human development to everyone.",
          };
        case "2026":
          return {
            anio: "La Plata",
            descripcion:
              "Regular classes Monday through Friday, personalized one-on-one sessions, and intensive weekend seminars.",
          };
        default:
          return hito;
      }
    }
    if (hito.anio === "2026") {
      return {
        anio: "Actualidad",
        descripcion:
          "Clases regulares de lunes a viernes en La Plata, entrenamientos personalizados y seminarios intensivos.",
      };
    }
    return hito;
  });

  return (
    <section
      id="diego-ledesma"
      className="py-12 sm:py-20 bg-flow-diego text-[#F4EDE2] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Grilla Editorial Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Columna Izquierda: Retrato Oficial y Párrafo Introductorio Conciso */}
          <ScrollReveal
            direction="up"
            delay={80}
            distance={24}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading"
              style={{ textWrap: "balance" }}
            >
              {t("diego.name")}
            </h2>

            {/* En móvil (< 768px): flex-col apilado al 100% del ancho. En tablet/desktop (md+): grilla 12 columnas */}
            <div className="flex flex-col md:grid md:grid-cols-12 gap-5 md:gap-7 items-start">
              {/* 1. Tarjeta del Retrato Oficial (centrada/ancho completo en móvil, 5 cols en md+) */}
              <div className="w-full max-w-sm mx-auto md:max-w-none md:mx-0 md:col-span-5 relative group">
                <div className="relative rounded-sm overflow-hidden border border-[#C49A64]/50 bg-[#1F1916]">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#1F1916]">
                    {!portraitLoaded && (
                      <div className="absolute inset-0 bg-[#2A211C] animate-pulse" />
                    )}
                    <img
                      src={SITE_CONFIG.assets.diegoPortrait}
                      alt="Diego Martín Ledesma — Director de Systema HETS en La Plata"
                      className={`w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.04] transition-all duration-700 ease-out ${
                        portraitLoaded
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-[1.02]"
                      }`}
                      loading="lazy"
                      width={480}
                      height={640}
                      onLoad={() => setPortraitLoaded(true)}
                      onError={(e) => {
                        setPortraitLoaded(true);
                        if (SITE_CONFIG.assets.diegoPortraitFallbackUrl) {
                          (e.target as HTMLImageElement).src =
                            SITE_CONFIG.assets.diegoPortraitFallbackUrl;
                        }
                      }}
                    />
                  </div>

                  {/* Pie sobrio del retrato */}
                  <div className="p-3 bg-[#1F1916] border-t border-[#C49A64]/30">
                    <span className="text-xs font-heading font-bold uppercase tracking-wide text-[#F4EDE2] block leading-snug">
                      Diego M. Ledesma
                    </span>
                    <span className="text-[11px] text-[#C4B5A3] block leading-snug">
                      {lang === "en" ? "Director · Systema HETS" : "Director de Systema HETS"}
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Texto ocupando el 100% del ancho en móvil y 7 columnas en md+ */}
              <div className="w-full md:col-span-7 space-y-4">
                <p className="text-sm sm:text-base text-[#F4EDE2] font-medium leading-relaxed pl-3.5 sm:pl-4 border-l-2 border-[#C86442]">
                  {t("diego.quote")}
                </p>

                <p className="text-sm sm:text-base text-[#C4B5A3] leading-relaxed">
                  {t("diego.p1")}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Columna Derecha: Trayectoria Formativa como lista editorial limpia separada por border-bottom finos */}
          <ScrollReveal
            direction="up"
            delay={140}
            distance={24}
            className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#C49A64]/25 w-full"
          >
            <div className="space-y-4">
              <div className="border-b border-[#C49A64]/35 pb-3">
                <h3 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wide text-[#F4EDE2]">
                  {t("diego.timelineHeader")}
                </h3>
              </div>

              <div className="divide-y divide-[#C49A64]/20">
                {hitos.map((hito) => (
                  <div
                    key={hito.anio}
                    className="py-3.5 first:pt-1 last:pb-1 grid grid-cols-12 gap-3 items-baseline"
                  >
                    <span className="col-span-4 sm:col-span-3 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#DF7E5B]">
                      {hito.anio}
                    </span>
                    <p className="col-span-8 sm:col-span-9 text-xs sm:text-sm text-[#C4B5A3] leading-relaxed">
                      {hito.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
