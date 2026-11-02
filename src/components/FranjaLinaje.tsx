import { useState } from "react";
import { ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function FranjaLinaje() {
  const { t } = useLanguage();
  const [emblemasLoaded, setEmblemasLoaded] = useState(false);

  return (
    <section
      id="linaje"
      className="relative z-20 bg-flow-brown-to-light pt-4 sm:pt-6 md:pt-12 lg:pt-14 pb-12 sm:pb-18 md:pb-24 px-3 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Divisor superior difuminado sin corte rígido */}
      <div className="max-w-5xl mx-auto mb-4 sm:mb-8 divider-earth-fade" />

      {/* Resplandores ambientales dinámicos en Terracota Pampeana y Ocre Arcilla */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-[#B85332]/14 rounded-full blur-[70px] pointer-events-none animate-glow-pulse"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-[#C49A64]/12 rounded-full blur-[70px] pointer-events-none animate-glow-pulse delay-1000"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 1. MÓVIL (< md): FILA HORIZONTAL COMPACTA */}
        <div className="block md:hidden">
          <ScrollReveal direction="up" distance={20} duration={600}>
            <div className="relative rounded-sm p-3 bg-gradient-to-r from-[#2E241F]/95 via-[#342923]/95 to-[#2E241F]/95 border border-[#C49A64]/45 shadow-xl card-specular-edge flex items-center gap-3">
              
              {/* Lado Izquierdo: Emblemas en marco compacto */}
              <div className="relative shrink-0 flex items-center justify-center p-1 rounded-xs bg-[#1C1613] border border-[#C86442]/55 shadow-md">
                <img
                  src={SITE_CONFIG.assets.escuelasAfiliadas}
                  alt="Emblemas oficiales de las 2 Grandes Escuelas de Systema"
                  className={`w-[72px] xs:w-[82px] h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] transition-all duration-300 ${
                    emblemasLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  width={530}
                  height={355}
                  loading="eager"
                  onLoad={() => setEmblemasLoaded(true)}
                  onError={(e) => {
                    setEmblemasLoaded(true);
                    (e.target as HTMLImageElement).src = SITE_CONFIG.assets.escuelasAfiliadasFallbackUrl;
                  }}
                />
              </div>

              {/* Lado Derecho: Contenido condensado con metadatos limpios */}
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.18em] text-[#C86442] font-semibold truncate">
                  <span>{t("linaje.kicker")}</span>
                </div>

                <h3 className="text-xs xs:text-sm font-heading font-bold uppercase tracking-tight text-[#F4EDE2] leading-tight truncate">
                  {t("linaje.title")}
                </h3>

                {/* Linaje en fila compacta con separador editorial */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[10px] font-mono text-[#F4EDE2]">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-2.5 h-2.5 text-[#C86442] shrink-0" />
                    <span>Ryabko · Moscú</span>
                  </span>
                  <span className="text-[#C49A64]" aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-2.5 h-2.5 text-[#C49A64] shrink-0" />
                    <span>Vasiliev · Toronto</span>
                  </span>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>

        {/* 2. TABLET Y COMPUTADORA (md:): COMPOSICIÓN COMPLETA */}
        <div className="hidden md:block space-y-8 lg:space-y-10">
          
          {/* Cabecera Desktop */}
          <ScrollReveal direction="up" distance={24}>
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#C86442] font-semibold">
                <span>{t("linaje.kicker")}</span>
                <span className="text-[#C4B5A3]" aria-hidden="true">·</span>
                <span className="text-[#C49A64]">{t("linaje.badge")}</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading">
                {t("linaje.title")}
              </h2>

              <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed max-w-2xl mx-auto font-sans">
                {t("linaje.desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Grilla de 3 Columnas: Ryabko + Medallón + Vasiliev */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Tarjeta 1: Escuela Matriz Mikhail Ryabko (Moscú) */}
            <ScrollReveal direction="up" delay={100} className="col-span-4">
              <div className="relative group rounded-sm p-4 lg:p-5 bg-gradient-to-b from-[#322721] to-[#231B17] border border-[#C49A64]/40 hover:border-[#C86442] transition-all duration-300 shadow-xl card-specular-edge hover:-translate-y-1 touch-press">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#B85332]/12 rounded-full blur-xl pointer-events-none group-hover:bg-[#B85332]/22 transition-all" />
                
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C86442] font-semibold">
                    <MapPin className="w-3 h-3 text-[#C49A64]" />
                    {t("linaje.ryabkoSede")}
                  </span>
                  <span className="text-[10px] font-mono text-[#C4B5A3] tracking-wider uppercase">
                    01. Matriz
                  </span>
                </div>

                <h3 className="text-base lg:text-lg font-heading font-bold uppercase tracking-wider text-[#F4EDE2] group-hover:text-[#DF7E5B] transition-colors">
                  {t("linaje.ryabkoNombre")}
                </h3>

                <span className="text-[11px] font-mono text-[#C49A64] block mt-0.5 font-semibold">
                  {t("linaje.ryabkoRol")}
                </span>

                <p className="text-xs text-[#C4B5A3] mt-2.5 leading-relaxed">
                  {t("linaje.ryabkoDesc")}
                </p>

                <div className="mt-4 pt-3 border-t border-[#C4B5A3]/20 flex items-center justify-between text-[10px] font-mono text-[#C4B5A3]">
                  <span className="flex items-center gap-1 text-[#F4EDE2]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C86442]" />
                    Linaje Cosaco & Spetsnaz
                  </span>
                  <span className="text-[#C49A64] font-semibold group-hover:translate-x-0.5 transition-transform">
                    Oficial
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Medallón Central Protagonista */}
            <ScrollReveal direction="up" delay={180} className="col-span-4 flex flex-col items-center">
              <div className="relative group flex flex-col items-center">
                
                <div
                  aria-hidden="true"
                  className="absolute inset-0 m-auto w-36 h-36 lg:w-44 lg:h-44 bg-gradient-to-r from-[#B85332]/25 via-[#C49A64]/25 to-[#B85332]/25 rounded-full blur-2xl pointer-events-none animate-glow-pulse"
                />

                <div className="relative rounded-sm p-3 lg:p-4 bg-gradient-to-b from-[#322721] via-[#261E1A] to-[#1C1613] border-2 border-[#C49A64]/65 group-hover:border-[#C86442] shadow-[0_10px_35px_rgba(14,10,8,0.85)] group-hover:shadow-[0_0_38px_rgba(184,83,50,0.4)] transition-all duration-500 card-specular-edge">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C49A64]/12 to-transparent pointer-events-none rounded-sm" />

                  <img
                    src={SITE_CONFIG.assets.escuelasAfiliadas}
                    alt="Emblemas oficiales de las 2 Grandes Escuelas de Systema"
                    className={`relative z-10 w-[140px] lg:w-[175px] h-auto object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)] group-hover:drop-shadow-[0_0_25px_rgba(200,100,66,0.45)] group-hover:scale-105 transition-all duration-500 cursor-default animate-subtle-float ${
                      emblemasLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    width={530}
                    height={355}
                    loading="lazy"
                    onLoad={() => setEmblemasLoaded(true)}
                    onError={(e) => {
                      setEmblemasLoaded(true);
                      (e.target as HTMLImageElement).src = SITE_CONFIG.assets.escuelasAfiliadasFallbackUrl;
                    }}
                  />

                  <div className="mt-2 pt-2 border-t border-[#C4B5A3]/20 flex flex-col items-center justify-center gap-1 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#C86442]" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F4EDE2] font-bold">
                        Escuelas Matrices
                      </span>
                      <Sparkles className="w-3 h-3 text-[#C49A64]" />
                    </div>
                    <span className="text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.18em] text-[#C49A64] text-center font-semibold">
                      Aval Internacional · Moscú & Toronto
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tarjeta 2: Escuela Matriz Vladimir Vasiliev (Toronto) */}
            <ScrollReveal direction="up" delay={260} className="col-span-4">
              <div className="relative group rounded-sm p-4 lg:p-5 bg-gradient-to-b from-[#322721] to-[#231B17] border border-[#C49A64]/40 hover:border-[#C86442] transition-all duration-300 shadow-xl card-specular-edge hover:-translate-y-1 touch-press">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#C49A64]/12 rounded-full blur-xl pointer-events-none group-hover:bg-[#B85332]/22 transition-all" />
                
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C49A64] font-semibold">
                    <MapPin className="w-3 h-3 text-[#C86442]" />
                    {t("linaje.vasilievSede")}
                  </span>
                  <span className="text-[10px] font-mono text-[#C4B5A3] tracking-wider uppercase">
                    02. Matriz
                  </span>
                </div>

                <h3 className="text-base lg:text-lg font-heading font-bold uppercase tracking-wider text-[#F4EDE2] group-hover:text-[#DF7E5B] transition-colors">
                  {t("linaje.vasilievNombre")}
                </h3>

                <span className="text-[11px] font-mono text-[#C86442] block mt-0.5 font-semibold">
                  {t("linaje.vasilievRol")}
                </span>

                <p className="text-xs text-[#C4B5A3] mt-2.5 leading-relaxed">
                  {t("linaje.vasilievDesc")}
                </p>

                <div className="mt-4 pt-3 border-t border-[#C4B5A3]/20 flex items-center justify-between text-[10px] font-mono text-[#C4B5A3]">
                  <span className="flex items-center gap-1 text-[#F4EDE2]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C49A64]" />
                    HQ Toronto & Expansión Global
                  </span>
                  <span className="text-[#C86442] font-semibold group-hover:translate-x-0.5 transition-transform">
                    Oficial
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
