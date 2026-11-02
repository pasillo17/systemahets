import { useState } from "react";
import { ShieldCheck, Award, Sparkles, MapPin } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Franja de Linaje Oficial:
 * - En CELULAR: Fila horizontal compacta (ocupa mínimo espacio vertical, navegación rápida y limpia).
 * - En COMPUTADORA: Medallón central ceremonial flanqueado por las 2 tarjetas interactivas de linaje.
 * - Animaciones: Scroll reveal suave hacia arriba, auras respirables y micro-interacciones táctiles.
 */
export function FranjaLinaje() {
  const { t } = useLanguage();
  const [emblemasLoaded, setEmblemasLoaded] = useState(false);

  return (
    <section className="relative z-20 bg-gradient-to-b from-[#080807] via-[#12100E] to-[#080807] border-y border-[#A58A60]/30 py-4 sm:py-6 md:py-12 lg:py-14 px-3 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Resplandores ambientales dinámicos (Auras de energía marcial) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-[#C05621]/15 rounded-full blur-[70px] pointer-events-none animate-glow-pulse"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-[#A58A60]/15 rounded-full blur-[70px] pointer-events-none animate-glow-pulse delay-1000"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. MÓVIL (< md): FILA HORIZONTAL COMPACTA (MINIMAL HEIGHT, ZERO SCROLL)   */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          <ScrollReveal direction="up" distance={20} duration={600}>
            <div className="relative rounded-sm p-3 bg-gradient-to-r from-[#14120F]/95 via-[#181512]/95 to-[#12100E]/95 border border-[#A58A60]/40 shadow-xl card-specular-edge flex items-center gap-3">
            
            {/* Lado Izquierdo: Emblemas en marco compacto con aura */}
            <div className="relative shrink-0 flex items-center justify-center p-1 rounded-xs bg-[#080807] border border-[#A58A60]/30 shadow-md">
              <img
                src={SITE_CONFIG.assets.escuelasAfiliadas}
                alt="Emblemas oficiales de las 2 Grandes Escuelas de Systema"
                className={`w-[72px] xs:w-[82px] h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] transition-all duration-300 ${
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

            {/* Lado Derecho: Contenido condensado con dos badges */}
            <div className="flex-1 min-w-0 space-y-1">
              {/* Kicker con pulso */}
              <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.18em] text-[#F59E0B] font-semibold truncate">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F59E0B]" />
                </span>
                <span>{t("linaje.kicker")}</span>
              </div>

              {/* Título conciso */}
              <h3 className="text-xs xs:text-sm font-heading font-bold uppercase tracking-tight text-[#F1EBDD] leading-tight truncate">
                {t("linaje.title")}
              </h3>

              {/* Badges de linaje en 1 fila compacta */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-xs bg-[#1C1814] border border-[#C05621]/45 text-[9px] font-mono text-[#F1EBDD] font-medium shadow-xs">
                  <ShieldCheck className="w-2.5 h-2.5 text-[#F59E0B] shrink-0" />
                  <span>Ryabko · Moscú</span>
                </span>

                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-xs bg-[#1C1814] border border-[#A58A60]/45 text-[9px] font-mono text-[#F1EBDD] font-medium shadow-xs">
                  <ShieldCheck className="w-2.5 h-2.5 text-[#C2A87E] shrink-0" />
                  <span>Vasiliev · Toronto</span>
                </span>
              </div>
            </div>

          </div>
          </ScrollReveal>
        </div>

        {/* ========================================================================= */}
        {/* 2. TABLET Y COMPUTADORA (md:): COMPOSICIÓN EDITORIAL Y VIVA COMPLETA      */}
        {/* ========================================================================= */}
        <div className="hidden md:block space-y-8 lg:space-y-10">
          
          {/* Cabecera Desktop */}
          <ScrollReveal direction="up" distance={24}>
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.24em] text-[#F59E0B] bg-[#C05621]/15 border border-[#C05621]/40 shadow-[0_0_15px_rgba(245,158,11,0.2)] font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]" />
                </span>
                <span>{t("linaje.kicker")}</span>
                <span className="text-[#A58A60]/50">·</span>
                <span className="text-[#EAE5D9]/90">{t("linaje.badge")}</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading">
                {t("linaje.title")}
              </h2>

              <p className="text-xs sm:text-sm text-[#C4BFB4] leading-relaxed max-w-2xl mx-auto font-sans">
                {t("linaje.desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Grilla de 3 Columnas: Ryabko + Medallón + Vasiliev */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Tarjeta 1: Escuela Matriz Mikhail Ryabko (Moscú) */}
            <ScrollReveal direction="up" delay={100} className="col-span-4">
              <div className="relative group rounded-md p-4 lg:p-5 bg-gradient-to-b from-[#14120F]/90 to-[#0A0908]/95 border border-[#A58A60]/30 hover:border-[#F59E0B]/70 transition-all duration-300 shadow-xl card-specular-edge hover:-translate-y-1 touch-press">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F59E0B]/10 rounded-full blur-xl pointer-events-none group-hover:bg-[#F59E0B]/20 transition-all" />
                
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs text-[10px] font-mono uppercase tracking-wider text-[#F59E0B] bg-[#C05621]/20 border border-[#C05621]/40 font-semibold">
                    <MapPin className="w-3 h-3 text-[#F59E0B]" />
                    {t("linaje.ryabkoSede")}
                  </span>
                  <span className="text-[10px] font-mono text-[#A58A60] tracking-wider uppercase">
                    Matriz 01
                  </span>
                </div>

                <h3 className="text-base lg:text-lg font-heading font-bold uppercase tracking-wider text-[#F1EBDD] group-hover:text-[#F59E0B] transition-colors">
                  {t("linaje.ryabkoNombre")}
                </h3>

                <span className="text-[11px] font-mono text-[#C2A87E] block mt-0.5 font-semibold">
                  {t("linaje.ryabkoRol")}
                </span>

                <p className="text-xs text-[#C4BFB4] mt-2.5 leading-relaxed">
                  {t("linaje.ryabkoDesc")}
                </p>

                <div className="mt-4 pt-3 border-t border-[#A58A60]/15 flex items-center justify-between text-[10px] font-mono text-[#A58A60]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                    Linaje Cosaco & Spetsnaz
                  </span>
                  <span className="text-[#C2A87E] group-hover:translate-x-0.5 transition-transform">
                    Oficial
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Medallón Central Protagonista */}
            <ScrollReveal direction="up" delay={180} className="col-span-4 flex flex-col items-center">
              <div className="relative group flex flex-col items-center">
                
                {/* Aura focal circular detrás del escudo */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 m-auto w-36 h-36 lg:w-44 lg:h-44 bg-gradient-to-r from-[#A58A60]/30 via-[#F59E0B]/25 to-[#C05621]/30 rounded-full blur-2xl pointer-events-none animate-glow-pulse"
                />

                <div className="relative rounded-lg p-3 lg:p-4 bg-gradient-to-b from-[#1C1914] via-[#100F0D] to-[#0A0908] border-2 border-[#A58A60]/45 group-hover:border-[#C2A87E] shadow-[0_10px_35px_rgba(0,0,0,0.95)] group-hover:shadow-[0_0_35px_rgba(194,168,126,0.4)] transition-all duration-500 card-specular-edge">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C2A87E]/10 to-transparent pointer-events-none rounded-lg" />

                  <img
                    src={SITE_CONFIG.assets.escuelasAfiliadas}
                    alt="Emblemas oficiales de las 2 Grandes Escuelas de Systema"
                    className={`relative z-10 w-[140px] lg:w-[175px] h-auto object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.95)] group-hover:drop-shadow-[0_0_25px_rgba(194,168,126,0.45)] group-hover:scale-105 transition-all duration-500 cursor-default animate-subtle-float ${
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

                  <div className="mt-2 pt-2 border-t border-[#A58A60]/30 flex items-center justify-center gap-1.5 text-center">
                    <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F1EBDD] font-bold">
                      Escuelas Matrices
                    </span>
                    <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                  </div>
                </div>

                <span className="text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.22em] text-[#C2A87E]/90 mt-2 text-center font-medium">
                  Aval Internacional · Moscú & Toronto
                </span>
              </div>
            </ScrollReveal>

            {/* Tarjeta 2: Escuela Matriz Vladimir Vasiliev (Toronto) */}
            <ScrollReveal direction="up" delay={260} className="col-span-4">
              <div className="relative group rounded-md p-4 lg:p-5 bg-gradient-to-b from-[#14120F]/90 to-[#0A0908]/95 border border-[#A58A60]/30 hover:border-[#C2A87E]/70 transition-all duration-300 shadow-xl card-specular-edge hover:-translate-y-1 touch-press">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#C2A87E]/10 rounded-full blur-xl pointer-events-none group-hover:bg-[#C2A87E]/20 transition-all" />
                
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs text-[10px] font-mono uppercase tracking-wider text-[#C2A87E] bg-[#A58A60]/20 border border-[#A58A60]/40 font-semibold">
                    <MapPin className="w-3 h-3 text-[#C2A87E]" />
                    {t("linaje.vasilievSede")}
                  </span>
                  <span className="text-[10px] font-mono text-[#A58A60] tracking-wider uppercase">
                    Matriz 02
                  </span>
                </div>

                <h3 className="text-base lg:text-lg font-heading font-bold uppercase tracking-wider text-[#F1EBDD] group-hover:text-[#C2A87E] transition-colors">
                  {t("linaje.vasilievNombre")}
                </h3>

                <span className="text-[11px] font-mono text-[#C2A87E] block mt-0.5 font-semibold">
                  {t("linaje.vasilievRol")}
                </span>

                <p className="text-xs text-[#C4BFB4] mt-2.5 leading-relaxed">
                  {t("linaje.vasilievDesc")}
                </p>

                <div className="mt-4 pt-3 border-t border-[#A58A60]/15 flex items-center justify-between text-[10px] font-mono text-[#A58A60]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C2A87E]" />
                    HQ Toronto & Expansión Global
                  </span>
                  <span className="text-[#C2A87E] group-hover:translate-x-0.5 transition-transform">
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
