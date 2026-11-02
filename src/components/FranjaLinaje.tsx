import { useState } from "react";
import { MapPin } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function FranjaLinaje() {
  const { t } = useLanguage();
  const [emblemasLoaded, setEmblemasLoaded] = useState(false);

  return (
    <section
      id="linaje"
      className="relative z-20 bg-[#1B140F] pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* 1. MÓVIL (< md): COMPOSICIÓN ABIERTA Y LIMPIA SIN CAJA PESADA */}
        <div className="block md:hidden">
          <ScrollReveal direction="up" distance={20} duration={600}>
            <div className="py-2 flex items-center gap-4 border-b border-[#D97736]/30 pb-5">
              <div className="relative shrink-0 flex items-center justify-center">
                <img
                  src={SITE_CONFIG.assets.escuelasAfiliadas}
                  alt="Emblemas de las dos escuelas de Systema"
                  className={`w-[80px] xs:w-[92px] h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] transition-all duration-300 ${
                    emblemasLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  width={530}
                  height={355}
                  loading="eager"
                  onLoad={() => setEmblemasLoaded(true)}
                  onError={(e) => {
                    setEmblemasLoaded(true);
                    (e.target as HTMLImageElement).src =
                      SITE_CONFIG.assets.escuelasAfiliadasFallbackUrl;
                  }}
                />
              </div>

              <div className="flex-1 min-w-0 space-y-1.5">
                <h2 className="text-sm xs:text-base font-heading font-bold uppercase tracking-tight text-[#F5EFE6] leading-snug">
                  {t("linaje.title")}
                </h2>
                <p className="text-xs text-[#B8A99A] leading-relaxed">
                  Mikhail Ryabko (Moscú) y Vladimir Vasiliev (Toronto).
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 2. TABLET Y COMPUTADORA (md:): DISEÑO EDITORIAL ABIERTO SIN CAJAS CERRADAS */}
        <div className="hidden md:block space-y-8 lg:space-y-10">
          <ScrollReveal direction="up" distance={24}>
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#F5EFE6] font-heading">
                {t("linaje.title")}
              </h2>
              <p className="text-sm text-[#B8A99A] leading-relaxed font-sans">
                {t("linaje.desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Columnas abiertas separadas por filetes sutiles */}
          <div className="grid grid-cols-12 gap-8 lg:gap-10 items-center pt-2">
            {/* Columna 1: Mikhail Ryabko (suelta sobre el fondo) */}
            <ScrollReveal direction="up" delay={100} className="col-span-4">
              <div className="pr-4 lg:pr-6 border-r border-[#D97736]/30 space-y-2 text-right">
                <span className="inline-flex items-center justify-end gap-1.5 text-xs text-[#D97736] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D97736]" />
                  {t("linaje.ryabkoSede")}
                </span>

                <h3 className="text-lg lg:text-xl font-heading font-bold uppercase tracking-wide text-[#F5EFE6]">
                  {t("linaje.ryabkoNombre")}
                </h3>

                <span className="text-xs text-[#C5A059] block font-medium">
                  {t("linaje.ryabkoRol")}
                </span>

                <p className="text-xs lg:text-sm text-[#B8A99A] pt-1 leading-relaxed">
                  {t("linaje.ryabkoDesc")}
                </p>
              </div>
            </ScrollReveal>

            {/* Centro: Emblemas limpios sin recuadro pesado */}
            <ScrollReveal
              direction="up"
              delay={180}
              className="col-span-4 flex flex-col items-center"
            >
              <div className="relative flex flex-col items-center">
                <img
                  src={SITE_CONFIG.assets.escuelasAfiliadas}
                  alt="Emblemas de las escuelas de Systema en Moscú y Toronto"
                  className={`relative z-10 w-[160px] lg:w-[195px] h-auto object-contain filter drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)] transition-all duration-500 ${
                    emblemasLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  width={530}
                  height={355}
                  loading="lazy"
                  onLoad={() => setEmblemasLoaded(true)}
                  onError={(e) => {
                    setEmblemasLoaded(true);
                    (e.target as HTMLImageElement).src =
                      SITE_CONFIG.assets.escuelasAfiliadasFallbackUrl;
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Columna 3: Vladimir Vasiliev (suelta sobre el fondo) */}
            <ScrollReveal direction="up" delay={260} className="col-span-4">
              <div className="pl-4 lg:pl-6 border-l border-[#D97736]/30 space-y-2 text-left">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#D97736] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D97736]" />
                  {t("linaje.vasilievSede")}
                </span>

                <h3 className="text-lg lg:text-xl font-heading font-bold uppercase tracking-wide text-[#F5EFE6]">
                  {t("linaje.vasilievNombre")}
                </h3>

                <span className="text-xs text-[#C5A059] block font-medium">
                  {t("linaje.vasilievRol")}
                </span>

                <p className="text-xs lg:text-sm text-[#B8A99A] pt-1 leading-relaxed">
                  {t("linaje.vasilievDesc")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
