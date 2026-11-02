import { useState } from "react";
import { ArrowDown, Calendar, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onExploreSystem?: () => void;
  onExploreClasses?: () => void;
}

/**
 * 1. HERO (Resumido, con el logo como protagonista)
 * - Celular: Se mantiene idéntico (optimizado para pantalla completa 100svh sin scroll horizontal).
 * - PC / Desktop: Logotipo más grande, escala monumental, mayor amplitud horizontal y distribución visual jerárquica refinada.
 * - Siempre "SYSTEMA" con 'Y'.
 * - Soporte bilingüe ES / EN.
 */
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
      className="relative min-h-[100svh] lg:min-h-[92vh] xl:min-h-screen w-full flex flex-col justify-center items-center bg-[#080807] text-[#F1EBDD] overflow-hidden px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-4 sm:pb-8 lg:pb-12 select-none"
    >
      {/* Resplandor dorado tenue detrás del logo (optimizado para rendimiento móvil) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[460px] md:w-[560px] lg:w-[740px] h-[240px] sm:h-[460px] md:h-[560px] lg:h-[740px] bg-[#A58A60]/10 sm:bg-[#A58A60]/15 lg:bg-[#A58A60]/18 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none"
      />

      {/* Contenedor central: compacto y sin saturación en móvil, monumental en desktop */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center text-center my-auto space-y-2 sm:space-y-4 lg:space-y-6">
        
        {/* LOGO PROTAGONISTA: Mayor escala e impacto visual */}
        <div className="relative flex flex-col items-center justify-center w-full my-0.5 sm:my-1">
          {/* Halo focal ambiental */}
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto w-44 h-44 sm:w-72 sm:h-72 lg:w-[440px] lg:h-[440px] bg-[#C2A87E]/12 sm:bg-[#C2A87E]/15 rounded-full blur-2xl sm:blur-3xl pointer-events-none"
          />

          <img
            src={SITE_CONFIG.assets.logo}
            alt="Systema HETS Diego Ledesma — Arte Marcial Ruso"
            className={`relative z-10 w-[86%] max-w-[285px] xs:max-w-[310px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[540px] xl:max-w-[600px] h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)] lg:drop-shadow-[0_25px_60px_rgba(0,0,0,0.98)] hover:drop-shadow-[0_0_40px_rgba(194,168,126,0.45)] transition-all duration-700 ease-out cursor-default ${
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

        {/* Kicker con luz dorada (Oculto en celular porque el logo ya lo dice; visible en tablets y PC) */}
        <div className="hidden sm:flex items-center justify-center gap-2.5 pt-0.5 lg:pt-1">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#A58A60]/70" />
          <p className="text-xs lg:text-sm font-mono uppercase tracking-[0.24em] lg:tracking-[0.3em] text-[#C2A87E] font-semibold text-gold-gradient">
            {t("hero.kicker")}
          </p>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#A58A60]/70" />
        </div>

        {/* TÍTULO PRINCIPAL: Contundente y proporcionado */}
        <h1
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading leading-tight max-w-xs sm:max-w-2xl lg:max-w-3xl"
          style={{ textWrap: "balance" }}
        >
          {t("hero.titulo")}
        </h1>

        {/* BAJADA: Breve y limpia (máx 2 líneas) */}
        <p
          className="text-xs sm:text-base lg:text-lg text-[#EAE5D9]/90 leading-snug sm:leading-relaxed max-w-[320px] sm:max-w-xl mx-auto px-1 font-normal"
          style={{ textWrap: "balance" }}
        >
          {t("hero.bajada")}
        </p>

        {/* BOTONES DE ACCIÓN: En celular en grilla de 2 columnas compacta para ahorrar altura; en PC amplios */}
        <div className="w-full pt-2 sm:pt-3 lg:pt-4 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-4 w-full">
            {/* Botón Principal: Explorar el Systema */}
            <button
              type="button"
              onClick={handleScrollToSystem}
              className="btn-shimmer-gold w-full sm:flex-1 min-h-[46px] sm:min-h-[50px] px-3 sm:px-6 py-2.5 sm:py-3.5 text-[11px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider text-[#080807] rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-[#A58A60]/20 active:scale-[0.98] transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span className="truncate font-extrabold">{t("hero.btnSystema")}</span>
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-y-0.5" />
            </button>

            {/* Botón Secundario: Ver Clases y Sedes */}
            <button
              type="button"
              onClick={handleScrollToClasses}
              className="w-full sm:flex-1 min-h-[46px] sm:min-h-[50px] px-3 sm:px-6 py-2.5 sm:py-3.5 text-[11px] xs:text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F1EBDD] hover:text-[#080807] hover:bg-[#A58A60] border border-[#A58A60]/50 hover:border-[#A58A60] rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 active:scale-[0.98] cursor-pointer bg-[#080807]/60 backdrop-blur-sm group"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A58A60] group-hover:text-[#080807] shrink-0 transition-colors" />
              <span className="truncate">{t("hero.btnClases")}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Indicador de scroll interactivo (Clickeable tanto en móvil como en escritorio) */}
      <button
        type="button"
        onClick={handleScrollToSystem}
        className="relative z-10 pt-2 pb-1 text-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer group flex flex-col items-center gap-1 active:scale-95 mx-auto"
        aria-label={t("hero.scroll")}
      >
        <span className="text-[10px] lg:text-[11px] font-mono uppercase tracking-[0.25em] text-[#C4BFB4] group-hover:text-[#C2A87E] transition-colors">
          {t("hero.scroll")}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-[#A58A60] animate-bounce" />
      </button>
    </section>
  );
}
