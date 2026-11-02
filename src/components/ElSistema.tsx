import { useState } from "react";
import { ArrowRight, X, Wind, Activity, Compass } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { ImageWithFallback } from "./ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Sección EL SYSTEMA:
 * Con "Y" siempre (SYSTEMA, nunca SISTEMA).
 * Soporte bilingüe ES / EN.
 */
export function ElSistema() {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();

  const pilares = [
    {
      titulo: t("systema.pilar1"),
      descripcion: t("systema.pilar1Desc"),
    },
    {
      titulo: t("systema.pilar2"),
      descripcion: t("systema.pilar2Desc"),
    },
    {
      titulo: t("systema.pilar3"),
      descripcion: t("systema.pilar3Desc"),
    },
    {
      titulo: t("systema.pilar4"),
      descripcion: t("systema.pilar4Desc"),
    },
  ];

  return (
    <section id="systema" className="py-14 sm:py-20 bg-[#080807] text-[#F1EBDD] relative overflow-hidden border-t border-[#A58A60]/15">
      
      {/* Luz de fondo ambiental tenue en CSS puro */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#A58A60]/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Kicker editorial */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-6 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.24em] text-[#C2A87E] block mb-2 font-semibold">
              {t("systema.kicker")}
            </span>
            <div className="h-[1px] w-12 bg-[#A58A60]/40" />
          </div>
        </ScrollReveal>

        {/* Composición Asimétrica en 3 Áreas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Área 1: Fotografía de Práctica con Fallback Elegante */}
          <ScrollReveal direction="up" delay={80} distance={28} className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-[#A58A60]/30 bg-[#12110F] shadow-2xl group card-specular-edge hover:border-[#A58A60]/60 transition-all duration-500">
              <ImageWithFallback
                src={SITE_CONFIG.assets.heroImage}
                alt="Práctica de biomecánica y movimiento consciente en dojo"
                aspectRatioClass="aspect-[4/3] sm:aspect-[16/11]"
                className="w-full h-full object-cover filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-105"
                fallbackTitle={t("systema.cardImgTitle")}
                fallbackSubtitle={t("systema.cardImgDesc")}
              />
              <div className="p-3 bg-[#0c0b0a]/90 backdrop-blur-sm border-t border-[#A58A60]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C2A87E] block font-semibold">
                    {t("systema.cardImgTitle")}
                  </span>
                  <p className="text-xs text-[#C4BFB4] mt-0.5 line-clamp-1">
                    {t("systema.cardImgDesc")}
                  </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#A58A60]/40 group-hover:bg-[#C2A87E] transition-colors" />
              </div>
            </div>
          </ScrollReveal>

          {/* Área 2: Título y Definición Central — SIEMPRE SYSTEMA CON 'Y' */}
          <ScrollReveal direction="up" delay={160} distance={28} className="lg:col-span-4 space-y-4 order-1 lg:order-2">
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#C2A87E] block mb-1 font-semibold">
                {t("systema.badge")}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading">
                {t("systema.title")}
              </h2>
            </div>

            {/* Texto en crema con tamaño >= 16px para alta legibilidad móvil */}
            <p className="text-base sm:text-lg text-[#EAE5D9] leading-relaxed font-normal">
              {t("systema.definition")}
            </p>

            <p className="text-sm text-[#C4BFB4] leading-relaxed">
              {t("systema.p2")}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#A58A60] via-[#C2A87E] to-[#A58A60] bg-[length:200%_auto] hover:bg-right rounded-sm transition-all duration-300 cursor-pointer shadow-lg shadow-[#A58A60]/20 min-h-[48px] active:scale-[0.98] group hover:shadow-[0_0_20px_rgba(165,138,96,0.35)]"
              >
                <span>{t("systema.btnMore")}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </ScrollReveal>

          {/* Área 3: Tres Conceptos Breves con SpotlightCard */}
          <ScrollReveal direction="up" delay={240} distance={28} className="lg:col-span-3 space-y-3 lg:border-l lg:border-[#A58A60]/20 lg:pl-6 order-3">
            
            {/* Concepto 1: ADAPTACIÓN */}
            <SpotlightCard className="p-4 bg-[#12110F]/80 border border-[#A58A60]/20 hover:border-[#A58A60]/50 transition-all card-specular-edge group">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C2A87E] font-bold mb-1">
                <Compass className="w-4 h-4 text-[#A58A60] group-hover:scale-110 transition-transform" />
                <span>{t("systema.adaptacion")}</span>
              </div>
              <p className="text-sm text-[#EAE5D9] leading-relaxed font-sans">
                {t("systema.adaptacionDesc")}
              </p>
            </SpotlightCard>

            {/* Concepto 2: EFICIENCIA */}
            <SpotlightCard className="p-4 bg-[#12110F]/80 border border-[#A58A60]/20 hover:border-[#A58A60]/50 transition-all card-specular-edge group">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C2A87E] font-bold mb-1">
                <Activity className="w-4 h-4 text-[#A58A60] group-hover:scale-110 transition-transform" />
                <span>{t("systema.eficiencia")}</span>
              </div>
              <p className="text-sm text-[#EAE5D9] leading-relaxed font-sans">
                {t("systema.eficienciaDesc")}
              </p>
            </SpotlightCard>

            {/* Concepto 3: CONCIENCIA */}
            <SpotlightCard className="p-4 bg-[#12110F]/80 border border-[#A58A60]/20 hover:border-[#A58A60]/50 transition-all card-specular-edge group">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C2A87E] font-bold mb-1">
                <Wind className="w-4 h-4 text-[#A58A60] group-hover:scale-110 transition-transform" />
                <span>{t("systema.conciencia")}</span>
              </div>
              <p className="text-sm text-[#EAE5D9] leading-relaxed font-sans">
                {t("systema.concienciaDesc")}
              </p>
            </SpotlightCard>

          </ScrollReveal>

        </div>

      </div>

      {/* Modal Editorial: Los 4 Pilares Invariables */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-2xl w-full bg-[#12110F] border border-[#A58A60]/50 rounded-sm overflow-hidden shadow-2xl p-5 sm:p-7 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#A58A60]/20 pb-3">
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#C2A87E]">
                  {t("systema.modalKicker")}
                </span>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white font-heading">
                  {t("systema.modalTitle")}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-[#C4BFB4] hover:text-white rounded-sm border border-[#A58A60]/30 bg-[#080807] cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5 text-[#A58A60]" />
              </button>
            </div>

            <p className="text-sm text-[#EAE5D9] leading-relaxed">
              {t("systema.modalIntro")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {pilares.map((p, idx) => (
                <div key={p.titulo} className="p-3.5 bg-[#080807] border border-[#A58A60]/30 rounded-sm">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#A58A60]">0{idx + 1}</span>
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-heading">
                      {p.titulo}
                    </h4>
                  </div>
                  <p className="text-xs text-[#C4BFB4] leading-relaxed">
                    {p.descripcion}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#A58A60]/20 flex justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-full sm:w-auto min-h-[48px] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F1EBDD] bg-[#080807] border border-[#A58A60]/50 hover:border-[#A58A60] rounded-sm transition-colors cursor-pointer"
              >
                {t("systema.modalClose")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
