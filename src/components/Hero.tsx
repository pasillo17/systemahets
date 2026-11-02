import { useState } from "react";
import { ArrowDown, Calendar, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onExploreSystem?: () => void;
  onExploreClasses?: () => void;
}

export function Hero({ onExploreSystem, onExploreClasses }: HeroProps) {
  const { t } = useLanguage();
  const [logoLoaded, setLogoLoaded] = useState(false);

  const handleScrollToSystem = () => {
    if (onExploreSystem) {
      onExploreSystem();
    } else {
      const el = document.getElementById("systema") || document.getElementById("linaje");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToClasses = () => {
    if (onExploreClasses) {
      onExploreClasses();
    } else {
      const el = document.getElementById("sedes-y-clases");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] lg:min-h-[92vh] xl:min-h-screen w-full flex flex-col justify-center items-center bg-flow-hero text-[#F4EDE2] overflow-hidden px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-4 sm:pb-8 lg:pb-12 select-none"
    >
      {/* Resplandor ambiental en Terracota Pampeana (#B85332) y Ocre Arcilla (#C49A64) detrás del logo */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[460px] md:w-[580px] lg:w-[760px] h-[260px] sm:h-[460px] md:h-[580px] lg:h-[760px] bg-gradient-to-tr from-[#B85332]/20 via-[#C49A64]/16 to-[#8C7A6B]/12 rounded-full blur-[65px] sm:blur-[105px] pointer-events-none"
      />

      {/* Contenedor central */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center text-center my-auto space-y-2 sm:space-y-4 lg:space-y-6">
        
        {/* LOGO PROTAGONISTA */}
        <div className="relative flex flex-col items-center justify-center w-full my-0.5 sm:my-1">
          {/* Halo focal ambiental en Terracota y Ocre Arcilla */}
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto w-44 h-44 sm:w-72 sm:h-72 lg:w-[440px] lg:h-[440px] bg-gradient-to-r from-[#B85332]/18 via-[#C49A64]/22 to-[#B85332]/18 rounded-full blur-2xl sm:blur-3xl pointer-events-none"
          />

          <img
            src={SITE_CONFIG.assets.logo}
            alt="Systema HETS Diego Ledesma — Arte Marcial Ruso"
            className={`relative z-10 w-[86%] max-w-[285px] xs:max-w-[310px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[540px] xl:max-w-[600px] h-auto object-contain filter drop-shadow-[0_12px_32px_rgba(14,10,8,0.8)] lg:drop-shadow-[0_22px_50px_rgba(14,10,8,0.85)] hover:drop-shadow-[0_0_45px_rgba(200,100,66,0.42)] transition-all duration-700 ease-out cursor-default ${
              logoLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
            }`}
            width={560}
            height={560}
            fetchPriority="high"
            onLoad={() => setLogoLoaded(true)}
            onError={(e) => {
              setLogoLoaded(true);
              (e.target as HTMLImageElement).src = SITE_CONFIG.assets.logoFallbackUrl;
            }}
          />
        </div>

        {/* Kicker en Terracota y Ocre Arcilla (visible en tablets y PC) */}
        <div className="hidden sm:flex items-center justify-center gap-2.5 pt-0.5 lg:pt-1">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C86442]" />
          <p className="text-xs lg:text-sm font-mono uppercase tracking-[0.24em] lg:tracking-[0.3em] text-[#C49A64] font-bold text-lightning-gradient">
            {t("hero.kicker")}
          </p>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C86442]" />
        </div>

        {/* TÍTULO PRINCIPAL EN HUESO CÁLIDO (#F4EDE2) */}
        <h1
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading leading-tight max-w-xs sm:max-w-2xl lg:max-w-3xl"
          style={{ textWrap: "balance" }}
        >
          {t("hero.titulo")}
        </h1>

        {/* BAJADA EN ARENA SUAVE (#C4B5A3) */}
        <p
          className="text-xs sm:text-base lg:text-lg text-[#C4B5A3] leading-snug sm:leading-relaxed max-w-[320px] sm:max-w-xl mx-auto px-1 font-normal"
          style={{ textWrap: "balance" }}
        >
          {t("hero.bajada")}
        </p>

        {/* BOTONES DE ACCIÓN: Terracota Pampeana (#B85332) + Tierra Sombra Elevada (#2E241F) */}
        <div className="w-full pt-2 sm:pt-3 lg:pt-4 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-4 w-full">
            {/* Botón Principal: Explorar el Systema (Terracota Pampeana Shimmer) */}
            <button
              type="button"
              onClick={handleScrollToSystem}
              className="btn-shimmer-lightning w-full sm:flex-1 min-h-[46px] sm:min-h-[50px] px-3 sm:px-6 py-2.5 sm:py-3.5 text-[11px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F4EDE2] rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-[#B85332]/30 active:scale-[0.98] transform hover:-translate-y-0.5 cursor-pointer group whitespace-nowrap"
            >
              <span className="truncate font-extrabold">{t("hero.btnSystema")}</span>
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-y-0.5" />
            </button>

            {/* Botón Secundario: Ver Clases y Horarios (Adobe Tierra + Borde Ocre Arcilla) */}
            <button
              type="button"
              onClick={handleScrollToClasses}
              className="w-full sm:flex-1 min-h-[46px] sm:min-h-[50px] px-3 sm:px-6 py-2.5 sm:py-3.5 text-[11px] xs:text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F4EDE2] hover:bg-[#B85332] border border-[#C49A64]/70 hover:border-[#DF7E5B] rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 active:scale-[0.98] cursor-pointer bg-[#2E241F]/90 backdrop-blur-sm shadow-[0_0_20px_rgba(196,154,100,0.16)] group whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C49A64] group-hover:text-[#F4EDE2] shrink-0 transition-colors" />
              <span className="truncate">{t("hero.btnClases")}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Indicador de scroll interactivo */}
      <button
        type="button"
        onClick={handleScrollToSystem}
        className="relative z-10 pt-2 pb-1 text-center opacity-85 hover:opacity-100 transition-opacity cursor-pointer group flex flex-col items-center gap-1 active:scale-95 mx-auto"
        aria-label={t("hero.scroll")}
      >
        <span className="text-[10px] lg:text-[11px] font-mono uppercase tracking-[0.25em] text-[#C4B5A3] group-hover:text-[#C86442] transition-colors">
          {t("hero.scroll")}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-[#C86442] animate-bounce" />
      </button>
    </section>
  );
}
