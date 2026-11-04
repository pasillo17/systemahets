import { useState } from "react";
import { ArrowDown, MessageSquare, ChevronDown, MapPin } from "lucide-react";
import { SITE_CONFIG, getClasePruebaWhatsAppUrl } from "../config/siteConfig";
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
      const el = document.getElementById("horarios") || document.getElementById("sedes-y-clases");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] lg:min-h-[92vh] xl:min-h-screen w-full flex flex-col justify-center items-center bg-[#110D0A] text-[#F5EFE6] overflow-hidden px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-4 sm:pb-8 lg:pb-12 select-none"
    >
      {/* Fondo atmosférico limpio sin foto ni círculos sueltos */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#110D0A] flex items-center justify-center"
      >
        {/* Resplandor ambiental centrado con movimiento suave de respiración */}
        <div className="w-[300px] sm:w-[500px] md:w-[620px] lg:w-[780px] h-[300px] sm:h-[500px] md:h-[620px] lg:h-[780px] bg-gradient-to-tr from-[#D97736]/22 via-[#D4AF37]/15 to-transparent rounded-full blur-[80px] sm:blur-[120px] animate-glow-pulse" />

        {/* Viñeta radial en Tierra Profunda (#110D0A) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(17,13,10,0.9)_85%)]" />
      </div>

      {/* Contenedor central */}
      <div
        className="relative z-10 w-full max-w-md sm:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center text-center my-auto space-y-3 sm:space-y-4 lg:space-y-5"
        style={{ textWrap: "balance" }}
      >
        
        {/* LOGO PROTAGONISTA */}
        <div className="relative flex flex-col items-center justify-center w-full my-0.5 sm:my-1 animate-subtle-float">
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto w-44 h-44 sm:w-72 sm:h-72 lg:w-[440px] lg:h-[440px] bg-gradient-to-r from-[#D97736]/20 via-[#D4AF37]/24 to-[#C5A059]/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none animate-glow-pulse"
          />

          <img
            src={SITE_CONFIG.assets.logo}
            alt="Systema HETS Diego Ledesma — Arte Marcial Ruso en La Plata"
            className={`relative z-10 w-[84%] max-w-[275px] xs:max-w-[300px] sm:max-w-[370px] md:max-w-[440px] lg:max-w-[520px] xl:max-w-[580px] h-auto object-contain filter drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)] lg:drop-shadow-[0_22px_50px_rgba(0,0,0,0.9)] hover:drop-shadow-[0_0_45px_rgba(217,119,54,0.42)] transition-all duration-700 ease-out cursor-default ${
              logoLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
            }`}
            width={560}
            height={560}
            fetchPriority="high"
            decoding="async"
            onLoad={() => setLogoLoaded(true)}
            onError={(e) => {
              setLogoLoaded(true);
              (e.target as HTMLImageElement).src = SITE_CONFIG.assets.logoFallbackUrl;
            }}
          />
        </div>

        {/* TÍTULO PRINCIPAL (H1): CONÓCETE Y PROGRESA + LEMA EN RUSO Y FONÉTICA */}
        <div className="w-full space-y-1.5 sm:space-y-2 pt-1" style={{ textWrap: "balance" }}>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F5EFE6] font-heading leading-none text-balance glow-text-subtle"
            style={{ textWrap: "balance" }}
          >
            <span className="sr-only">
              Systema HETS Argentina — Clases y Seminarios de Arte Marcial Ruso, Movimiento Consciente y Autoprotección en La Plata con Diego Martín Ledesma:{" "}
            </span>
            {t("hero.titulo")}
          </h1>

          {/* Lema en Ruso y fonética en dos líneas limpias y centradas debajo del H1 */}
          <p
            className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 text-[#C5A059] text-center text-balance"
            style={{ textWrap: "balance" }}
          >
            <span className="block font-serif font-semibold text-[#D4AF37] text-[11px] xs:text-xs sm:text-sm md:text-base tracking-wide sm:tracking-wider whitespace-nowrap drop-shadow-[0_0_12px_rgba(217,119,54,0.3)]">
              {t("hero.lemaRuso")}
            </span>
            <span className="block italic font-sans font-normal text-[#B8A99A] text-[11px] xs:text-xs sm:text-sm md:text-base tracking-normal sm:tracking-wide whitespace-nowrap">
              {t("hero.lemaFonetica")}
            </span>
          </p>
        </div>

        {/* SUBTÍTULO (Pilares de marca): Arte Marcial Ruso · Desarrollo Humano · Autoprotección */}
        <p
          className="w-full text-[11.5px] xs:text-xs sm:text-base lg:text-lg text-[#B8A99A] font-medium tracking-normal sm:tracking-wide leading-relaxed max-w-md sm:max-w-2xl mx-auto px-1 text-center text-balance"
          style={{ textWrap: "balance" }}
        >
          {t("hero.bajada")
            .split(" · ")
            .map((concept, index, array) => (
              <span key={concept}>
                <span className="whitespace-nowrap">{concept}</span>
                {index < array.length - 1 && (
                  <span className="text-[#D97736]/85" aria-hidden="true">{" · "}</span>
                )}
              </span>
            ))}
        </p>

        {/* BOTONES DE ACCIÓN: Principal = Reservar clase de prueba | Secundario = Ver horarios y sede */}
        <div className="w-full pt-2 sm:pt-3 lg:pt-4 max-w-xs sm:max-w-lg lg:max-w-xl mx-auto space-y-3 sm:space-y-3.5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 w-full">
            {/* CTA Principal Sólido: Reservar clase de prueba (Naranja/Dorado, Texto #110D0A font-bold) */}
            <a
              href={getClasePruebaWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer-lightning w-full sm:flex-1 min-h-[50px] sm:min-h-[52px] px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#110D0A] bg-[#D97736] hover:bg-[#D4AF37] rounded-sm flex items-center justify-center gap-2 cursor-pointer group"
            >
              <MessageSquare className="w-4 h-4 fill-current shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span
                className="font-bold leading-tight text-center text-balance"
                style={{ textWrap: "balance" }}
              >
                {t("hero.btnTrial")}
              </span>
            </a>

            {/* CTA Secundario: Ver horarios y sede */}
            <button
              type="button"
              onClick={handleScrollToClasses}
              className="btn-secondary-gold w-full sm:flex-1 min-h-[48px] sm:min-h-[52px] px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F5EFE6] hover:bg-[#1B140F] rounded-sm flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer bg-[#1B140F]/90 backdrop-blur-sm group"
            >
              <span
                className="leading-tight text-center text-balance"
                style={{ textWrap: "balance" }}
              >
                {t("hero.btnClases")}
              </span>
              <ArrowDown className="w-4 h-4 text-[#D97736] group-hover:text-[#D4AF37] shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </div>

          {/* Línea discreta con ícono de ubicación debajo de los botones */}
          <div
            className="flex items-center justify-center gap-1.5 text-xs font-sans text-[#B8A99A] text-center text-balance"
            style={{ textWrap: "balance" }}
          >
            <MapPin className="w-3.5 h-3.5 text-[#D97736] icon-gold-glow shrink-0" />
            <span className="whitespace-nowrap" style={{ textWrap: "balance" }}>
              {t("hero.location")}
            </span>
          </div>
        </div>

      </div>

      {/* Indicador de scroll discreto */}
      <button
        type="button"
        onClick={handleScrollToSystem}
        className="relative z-10 pt-2 pb-1 text-center opacity-75 hover:opacity-100 transition-opacity cursor-pointer group flex flex-col items-center gap-1 active:scale-95 mx-auto animate-subtle-float"
        aria-label={t("hero.scroll")}
      >
        <ChevronDown className="w-4 h-4 text-[#D97736] group-hover:text-[#D4AF37] transition-colors" />
      </button>
    </section>
  );
}
