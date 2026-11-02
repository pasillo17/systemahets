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
  const [videoReady, setVideoReady] = useState(false);

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
      className="relative min-h-[100svh] lg:min-h-[92vh] xl:min-h-screen w-full flex flex-col justify-center items-center bg-[#07080A] text-[#F4F4F6] overflow-hidden px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-4 sm:pb-8 lg:pb-12 select-none"
    >
      {/* Fondo en movimiento: Video corto en bucle sin sonido + imagen de práctica real de respaldo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <img
          src={SITE_CONFIG.assets.heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35 scale-105 filter brightness-75 contrast-110 saturate-75"
          loading="eager"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={SITE_CONFIG.assets.heroImage}
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.08] saturate-[0.8] transition-opacity duration-1000 ${
            videoReady ? "opacity-40 sm:opacity-45" : "opacity-0"
          }`}
        >
          <source src={SITE_CONFIG.videoEntrenamiento.mp4Url} type="video/mp4" />
          <source src={SITE_CONFIG.videoEntrenamiento.fallbackMp4Url} type="video/mp4" />
        </video>
        {/* Velo atmosférico en Negro Obsidiana (#07080A) para garantizar contraste y lectura limpia */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080A]/85 via-[#07080A]/75 to-[#07080A]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(7,8,10,0.85)_85%)]" />
      </div>

      {/* Resplandor ambiental en Dorado Antiguo (#C5A059) detrás del logo */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[460px] md:w-[580px] lg:w-[760px] h-[260px] sm:h-[460px] md:h-[580px] lg:h-[760px] bg-gradient-to-tr from-[#C5A059]/20 via-[#D4AF37]/14 to-[#0D0E12]/20 rounded-full blur-[65px] sm:blur-[105px] pointer-events-none z-[1] animate-glow-pulse"
      />

      {/* Contenedor central */}
      <div
        className="relative z-10 w-full max-w-md sm:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center text-center my-auto space-y-3 sm:space-y-4 lg:space-y-5"
        style={{ textWrap: "balance" }}
      >
        
        {/* LOGO PROTAGONISTA */}
        <div className="relative flex flex-col items-center justify-center w-full my-0.5 sm:my-1">
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto w-44 h-44 sm:w-72 sm:h-72 lg:w-[440px] lg:h-[440px] bg-gradient-to-r from-[#C5A059]/18 via-[#D4AF37]/22 to-[#C5A059]/18 rounded-full blur-2xl sm:blur-3xl pointer-events-none"
          />

          <img
            src={SITE_CONFIG.assets.logo}
            alt="Systema HETS Diego Ledesma — Arte Marcial Ruso en La Plata"
            className={`relative z-10 w-[84%] max-w-[275px] xs:max-w-[300px] sm:max-w-[370px] md:max-w-[440px] lg:max-w-[520px] xl:max-w-[580px] h-auto object-contain filter drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)] lg:drop-shadow-[0_22px_50px_rgba(0,0,0,0.9)] hover:drop-shadow-[0_0_45px_rgba(197,160,89,0.4)] transition-all duration-700 ease-out cursor-default ${
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

        {/* TÍTULO PRINCIPAL (H1): CONÓCETE Y PROGRESA + LEMA EN RUSO Y FONÉTICA */}
        <div className="w-full space-y-1.5 sm:space-y-2 pt-1" style={{ textWrap: "balance" }}>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F4F4F6] font-heading leading-none text-balance glow-text-subtle"
            style={{ textWrap: "balance" }}
          >
            {t("hero.titulo")}
          </h1>

          {/* Lema en Ruso y fonética en dos líneas limpias y centradas debajo del H1 */}
          <p
            className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 text-[#C5A059] text-center text-balance"
            style={{ textWrap: "balance" }}
          >
            <span className="block font-serif font-semibold text-[#C5A059] text-[11px] xs:text-xs sm:text-sm md:text-base tracking-wide sm:tracking-wider whitespace-nowrap drop-shadow-[0_0_12px_rgba(197,160,89,0.25)]">
              {t("hero.lemaRuso")}
            </span>
            <span className="block italic font-sans font-normal text-[#A0A5B1] text-[11px] xs:text-xs sm:text-sm md:text-base tracking-normal sm:tracking-wide whitespace-nowrap">
              {t("hero.lemaFonetica")}
            </span>
          </p>
        </div>

        {/* SUBTÍTULO (Pilares de marca): Arte Marcial Ruso · Desarrollo Humano · Autoprotección */}
        <p
          className="w-full text-[11.5px] xs:text-xs sm:text-base lg:text-lg text-[#A0A5B1] font-medium tracking-normal sm:tracking-wide leading-relaxed max-w-md sm:max-w-2xl mx-auto px-1 text-center text-balance"
          style={{ textWrap: "balance" }}
        >
          {t("hero.bajada")
            .split(" · ")
            .map((concept, index, array) => (
              <span key={concept}>
                <span className="whitespace-nowrap">{concept}</span>
                {index < array.length - 1 && (
                  <span className="text-[#C5A059]/70" aria-hidden="true">{" · "}</span>
                )}
              </span>
            ))}
        </p>

        {/* BOTONES DE ACCIÓN: Principal = Reservar clase de prueba | Secundario = Ver horarios y sede */}
        <div className="w-full pt-2 sm:pt-3 lg:pt-4 max-w-xs sm:max-w-lg lg:max-w-xl mx-auto space-y-3 sm:space-y-3.5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 w-full">
            {/* CTA Principal Sólido: Reservar clase de prueba (Dorado #C5A059, Hover #D4AF37, Texto #07080A font-bold) */}
            <a
              href={getClasePruebaWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer-lightning w-full sm:flex-1 min-h-[50px] sm:min-h-[52px] px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#07080A] bg-[#C5A059] hover:bg-[#D4AF37] rounded-sm flex items-center justify-center gap-2 cursor-pointer group"
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
              className="btn-secondary-gold w-full sm:flex-1 min-h-[48px] sm:min-h-[52px] px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F4F4F6] hover:bg-[#0D0E12] rounded-sm flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer bg-[#0D0E12]/90 backdrop-blur-sm group"
            >
              <span
                className="leading-tight text-center text-balance"
                style={{ textWrap: "balance" }}
              >
                {t("hero.btnClases")}
              </span>
              <ArrowDown className="w-4 h-4 text-[#C5A059] group-hover:text-[#D4AF37] shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </div>

          {/* Línea discreta con ícono de ubicación debajo de los botones */}
          <div
            className="flex items-center justify-center gap-1.5 text-xs font-sans text-[#A0A5B1] text-center text-balance"
            style={{ textWrap: "balance" }}
          >
            <MapPin className="w-3.5 h-3.5 text-[#C5A059] icon-gold-glow shrink-0" />
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
        <ChevronDown className="w-4 h-4 text-[#C5A059] group-hover:text-[#D4AF37] transition-colors" />
      </button>
    </section>
  );
}
