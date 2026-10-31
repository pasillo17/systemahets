import { ArrowRight, MessageSquare } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onExploreSystem: () => void;
}

/**
 * 1. HERO (Resumido, con el logo como protagonista)
 * - Celular: Se mantiene idéntico (optimizado para pantalla completa 100svh sin scroll horizontal).
 * - PC / Desktop: Logotipo más grande, escala monumental, mayor amplitud horizontal y distribución visual jerárquica refinada.
 * - Siempre "SYSTEMA" con 'Y'.
 * - Soporte bilingüe ES / EN.
 */
export function Hero({ onExploreSystem }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] lg:min-h-[92vh] xl:min-h-screen w-full flex flex-col justify-center items-center bg-[#080807] text-[#F1EBDD] overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 lg:pb-12 select-none"
    >
      {/* Resplandor dorado tenue detrás del logo (ampliado armónicamente en PC) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[460px] md:w-[560px] lg:w-[740px] xl:w-[840px] h-[300px] sm:h-[460px] md:h-[560px] lg:h-[740px] xl:h-[840px] bg-[#A58A60]/15 lg:bg-[#A58A60]/18 rounded-full blur-[100px] pointer-events-none animate-glow-pulse"
      />

      {/* Contenedor central: En mobile se mantiene max-w-xl; en PC se expande para una distribución majestuosa */}
      <div className="relative z-10 w-full max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center text-center my-auto space-y-3 sm:space-y-4 lg:space-y-6">
        
        {/* LOGO PROTAGONISTA: Con halo focal interactivo y elevación suave */}
        <div className="relative flex items-center justify-center w-full my-1 sm:my-2 lg:my-3">
          {/* Halo ambiental focal inmediato */}
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto w-52 h-52 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px] bg-[#C2A87E]/15 rounded-full blur-3xl pointer-events-none animate-glow-pulse"
          />

          <img
            src={SITE_CONFIG.assets.logo}
            alt="Systema HETS Diego Ledesma — Arte Marcial Ruso"
            className="relative z-10 w-[76%] max-w-[270px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[560px] 2xl:max-w-[620px] h-auto object-contain filter drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)] lg:drop-shadow-[0_25px_60px_rgba(0,0,0,0.98)] hover:drop-shadow-[0_0_40px_rgba(194,168,126,0.45)] transition-all duration-700 cursor-default"
            width={560}
            height={560}
            fetchPriority="high"
            onError={(e) => {
              (e.target as HTMLImageElement).src = SITE_CONFIG.assets.logoFallbackUrl;
            }}
          />
        </div>

        {/* a) FRASE CORTA / KICKER CON LUZ DORADA */}
        <div className="pt-0.5 lg:pt-1">
          <p className="text-[11px] sm:text-xs lg:text-sm font-mono uppercase tracking-[0.24em] lg:tracking-[0.3em] text-[#C2A87E] font-semibold flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#A58A60]" />
            <span className="text-gold-gradient">{t("hero.kicker")}</span>
            <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#A58A60]" />
          </p>
        </div>

        {/* b) TÍTULO BREVE (H1 semántico: en PC gana cuerpo y proporción majestuosa) */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading leading-tight lg:leading-[1.12] max-w-3xl xl:max-w-4xl"
          style={{ textWrap: "balance" }}
        >
          {t("hero.titulo")}
        </h1>

        {/* c) BAJADA (En mobile máx 2 líneas, en PC interlineado amplio y elegante) */}
        <p
          className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[#EAE5D9] leading-relaxed lg:leading-relaxed max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto px-2 font-normal"
          style={{ textWrap: "balance" }}
        >
          {t("hero.bajada")}
        </p>

        {/* d) DOS BOTONES (Con brillo cinematográfico shimmer y hover reactivo) */}
        <div className="w-full pt-2 sm:pt-3 lg:pt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 lg:gap-5 max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
          {/* Botón Principal: Consultar por WhatsApp (Dorado Shimmer Cinematográfico) */}
          <a
            href={getWhatsAppUrl(SITE_CONFIG.mensajesWhatsApp.clasePrueba)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer-gold w-full sm:flex-1 min-h-[48px] lg:min-h-[52px] px-5 lg:px-7 py-3.5 lg:py-4 text-xs lg:text-sm font-bold uppercase tracking-wider text-[#080807] rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-[#A58A60]/25 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#C2A87E] transform hover:-translate-y-0.5 group"
          >
            <MessageSquare className="w-4 h-4 lg:w-4.5 lg:h-4.5 fill-current shrink-0 transition-transform group-hover:scale-110" />
            <span className="whitespace-nowrap font-extrabold">{t("hero.btnWhatsapp")}</span>
          </a>

          {/* Botón Secundario: Conocer el Systema (ES 'SYSTEMA' con Y) */}
          <button
            type="button"
            onClick={onExploreSystem}
            className="w-full sm:flex-1 min-h-[48px] lg:min-h-[52px] px-5 lg:px-7 py-3.5 lg:py-4 text-xs lg:text-sm font-bold uppercase tracking-wider text-[#F1EBDD] hover:text-[#080807] hover:bg-[#A58A60] border border-[#A58A60]/70 hover:border-[#A58A60] rounded-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#A58A60] cursor-pointer hover:shadow-[0_0_25px_rgba(165,138,96,0.35)] transform hover:-translate-y-0.5 group bg-[#080807]/40 backdrop-blur-sm"
          >
            <span className="whitespace-nowrap">{t("hero.btnSystema")}</span>
            <ArrowRight className="w-4 h-4 lg:w-4.5 lg:h-4.5 shrink-0 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>

      {/* Sutil indicador de scroll en PC */}
      <div className="relative z-10 pt-3 pb-1 text-center hidden md:block opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] lg:text-[11px] font-mono uppercase tracking-[0.25em] text-[#C4BFB4]">
          {t("hero.scroll")}
        </span>
      </div>
    </section>
  );
}
