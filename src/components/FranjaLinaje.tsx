import { useState } from "react";
import { MapPin } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * SECCIÓN LINAJE OFICIAL (Mikhail Ryabko · Moscú & Vladimir Vasiliev · Toronto):
 * Rediseño audaz con bloques desplazados en Naranja Terracota (#D97736) y Dorado (#C5A059),
 * sellos de ciudad en tipografía monumental de marca de agua y emblema central protagonista.
 */
export function FranjaLinaje() {
  const { t } = useLanguage();
  const [emblemasLoaded, setEmblemasLoaded] = useState(false);

  return (
    <section
      id="linaje"
      className="relative z-20 bg-[#1B140F] pt-12 sm:pt-18 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-8 sm:space-y-12">
        {/* Encabezado con barra geométrica sólida */}
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F5EFE6] font-heading glow-text-subtle">
              {t("linaje.title")}
            </h2>
            <div
              aria-hidden="true"
              className="h-[3px] w-20 mx-auto bg-gradient-to-r from-[#D97736] via-[#D4AF37] to-[#C5A059]"
            />
            <p className="text-xs sm:text-base text-[#B8A99A] leading-relaxed font-sans pt-1">
              {t("linaje.desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* Grilla de 12 columnas: Póster Ryabko (Moscú) + Emblemas Centrales + Póster Vasiliev (Toronto) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* 1. Tarjeta Póster Mikhail Ryabko con bloque desplazado izquierdo en Terracota */}
          <ScrollReveal direction="up" delay={80} className="lg:col-span-5 flex">
            <div className="relative w-full pl-2.5 pb-2.5 sm:pl-3.5 sm:pb-3.5 flex">
              <div
                aria-hidden="true"
                className="absolute left-0 bottom-0 w-[85%] h-[85%] bg-gradient-to-tr from-[#D97736] to-[#C5A059] rounded-xs pointer-events-none"
              />
              <div className="relative z-10 w-full bg-[#110D0A] border border-[#D97736]/40 hover:border-[#D4AF37] transition-all duration-300 p-5 sm:p-7 rounded-xs flex flex-col justify-between overflow-hidden group shadow-[0_14px_30px_rgba(0,0,0,0.75)]">
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between gap-2 border-b border-[#D97736]/25 pb-2.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider text-[#D97736] font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#D97736]" />
                      {t("linaje.ryabkoSede")}
                    </span>
                    <span className="font-heading font-black text-xl text-[#D4AF37]/40">
                      01
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors">
                      {t("linaje.ryabkoNombre")}
                    </h3>
                    <span className="text-xs font-heading uppercase tracking-wider text-[#C5A059] block mt-0.5 font-bold">
                      {t("linaje.ryabkoRol")}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed pt-1">
                    {t("linaje.ryabkoDesc")}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Centro: Emblemas Oficiales de ambas escuelas */}
          <ScrollReveal
            direction="up"
            delay={140}
            className="lg:col-span-2 flex flex-col items-center justify-center py-2 lg:py-0"
          >
            <div className="relative flex flex-col items-center justify-center p-3 rounded-xs bg-[#110D0A]/70 border border-[#D97736]/30 shadow-[0_10px_28px_rgba(0,0,0,0.7)]">
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D97736] via-[#D4AF37] to-[#C5A059]"
              />
              <img
                src={SITE_CONFIG.assets.escuelasAfiliadas}
                alt="Emblemas de las escuelas de Systema en Moscú y Toronto"
                className={`relative z-10 w-[135px] sm:w-[160px] lg:w-[175px] h-auto object-contain filter drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)] transition-all duration-500 ${
                  emblemasLoaded ? "opacity-100" : "opacity-0"
                }`}
                width={530}
                height={355}
                loading="lazy"
                decoding="async"
                onLoad={() => setEmblemasLoaded(true)}
                onError={(e) => {
                  setEmblemasLoaded(true);
                  (e.target as HTMLImageElement).src =
                    SITE_CONFIG.assets.escuelasAfiliadasFallbackUrl;
                }}
              />
            </div>
          </ScrollReveal>

          {/* 3. Tarjeta Póster Vladimir Vasiliev con bloque desplazado derecho en Terracota */}
          <ScrollReveal direction="up" delay={200} className="lg:col-span-5 flex">
            <div className="relative w-full pr-2.5 pb-2.5 sm:pr-3.5 sm:pb-3.5 flex">
              <div
                aria-hidden="true"
                className="absolute right-0 bottom-0 w-[85%] h-[85%] bg-gradient-to-tl from-[#D97736] to-[#C5A059] rounded-xs pointer-events-none"
              />
              <div className="relative z-10 w-full bg-[#110D0A] border border-[#D97736]/40 hover:border-[#D4AF37] transition-all duration-300 p-5 sm:p-7 rounded-xs flex flex-col justify-between overflow-hidden group shadow-[0_14px_30px_rgba(0,0,0,0.75)]">
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between gap-2 border-b border-[#D97736]/25 pb-2.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider text-[#D97736] font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#D97736]" />
                      {t("linaje.vasilievSede")}
                    </span>
                    <span className="font-heading font-black text-xl text-[#D4AF37]/40">
                      02
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors">
                      {t("linaje.vasilievNombre")}
                    </h3>
                    <span className="text-xs font-heading uppercase tracking-wider text-[#C5A059] block mt-0.5 font-bold">
                      {t("linaje.vasilievRol")}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed pt-1">
                    {t("linaje.vasilievDesc")}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
