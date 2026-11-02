import { useState, useEffect } from "react";
import { ArrowRight, X, Wind, Activity, Compass, Shield } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { ImageWithFallback } from "./ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
import { ScrollReveal } from "./ScrollReveal";

/**
 * SECCIÓN EL SYSTEMA SOBRE ARENA CÁLIDA (#EFE7DA):
 * Incluye la composición de 3 columnas luminosa y el bloque protagonista
 * "¿Por qué se llama Systema HETS?" en Adobe Tierra Profundo (#261E1A) con Terracota (#C86442) y Ocre Arcilla (#C49A64).
 */
export function ElSistema() {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

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
    <section
      id="systema"
      className="py-10 sm:py-20 bg-flow-systema text-[#231C18] relative overflow-hidden"
    >
      {/* Luz ambiental sutil en Terracota Pampeana (#B85332) y Ocre Arcilla (#9C7340) */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#B85332]/8 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#9C7340]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Kicker editorial con divisor de sección en Piedra Pampeana */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-5 sm:mb-12 flex items-center justify-between border-b border-[#C9B8A0] pb-3 sm:pb-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.26em] text-[#9E3E1E] font-bold">
                {t("systema.kicker")}
              </span>
              <span className="hidden sm:inline-block w-8 h-[2px] bg-[#9E3E1E]" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6E4B20] font-bold">
              SYSTEMA HETS
            </span>
          </div>
        </ScrollReveal>

        {/* Composición Asimétrica en 3 Áreas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
          {/* Área 1: Fotografía de Práctica */}
          <ScrollReveal
            direction="up"
            delay={80}
            distance={24}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative rounded-sm overflow-hidden border border-[#C49A64]/65 bg-[#261E1A] earth-block-transition-glow group hover:border-[#B85332] transition-all duration-500">
              <ImageWithFallback
                src={SITE_CONFIG.assets.heroImage}
                alt="Práctica de biomecánica y movimiento consciente en dojo"
                aspectRatioClass="aspect-[16/9] sm:aspect-[16/11]"
                className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                fallbackTitle={t("systema.cardImgTitle")}
                fallbackSubtitle={t("systema.cardImgDesc")}
              />
              <div className="p-3 sm:p-3.5 bg-[#1F1916] border-t border-[#C49A64]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C86442] block font-semibold leading-snug">
                    {t("systema.cardImgTitle")}
                  </span>
                  <p className="text-[11px] sm:text-xs text-[#C4B5A3] mt-0.5 leading-snug">
                    {t("systema.cardImgDesc")}
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A64] shrink-0">
                  HETS · LA PLATA
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Área 2: Título y Definición Central — SIEMPRE SYSTEMA CON 'Y' */}
          <ScrollReveal
            direction="up"
            delay={140}
            distance={24}
            className="lg:col-span-4 space-y-3 sm:space-y-4 order-1 lg:order-2"
          >
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#9E3E1E] block mb-1 font-bold">
                {t("systema.badge")}
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#231C18] font-heading"
                style={{ textWrap: "balance" }}
              >
                {t("systema.title")}
              </h2>
            </div>

            <p className="text-sm sm:text-lg text-[#231C18] leading-relaxed font-medium">
              {t("systema.definition")}
            </p>

            <p className="text-xs sm:text-sm text-[#362B24] leading-relaxed">
              {t("systema.p2")}
            </p>

            <div className="pt-1 sm:pt-2">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn-shimmer-lightning w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#F4EDE2] rounded-sm transition-all duration-300 cursor-pointer shadow-lg shadow-[#B85332]/25 min-h-[48px] h-auto active:scale-[0.98] group whitespace-normal sm:whitespace-nowrap text-center leading-snug"
              >
                <span>{t("systema.btnMore")}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </ScrollReveal>

          {/* Área 3: Tres Conceptos Breves sobre tarjetas en Hueso Pergamino (#F8F3EB) */}
          <ScrollReveal
            direction="up"
            delay={200}
            distance={24}
            className="lg:col-span-3 lg:border-l lg:border-[#D6C8B4] lg:pl-6 order-3"
          >
            <div className="flex lg:flex-col gap-2.5 sm:gap-3 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {/* Concepto 1: ADAPTACIÓN */}
              <SpotlightCard
                spotlightColor="rgba(184, 83, 50, 0.12)"
                borderColor="rgba(184, 83, 50, 0.55)"
                className="snap-center shrink-0 w-[78%] sm:w-[260px] lg:w-full p-3.5 sm:p-4 bg-[#F8F3EB] border border-[#D6C8B4] hover:border-[#B85332] transition-all card-light-steel-elevation group"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9E3E1E] font-bold">
                    <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7A5426] group-hover:scale-110 transition-transform" />
                    <span>{t("systema.adaptacion")}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6E4B20] font-bold tabular-nums">
                    01
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#362B24] leading-relaxed font-sans">
                  {t("systema.adaptacionDesc")}
                </p>
              </SpotlightCard>

              {/* Concepto 2: EFICIENCIA */}
              <SpotlightCard
                spotlightColor="rgba(156, 115, 64, 0.12)"
                borderColor="rgba(184, 83, 50, 0.55)"
                className="snap-center shrink-0 w-[78%] sm:w-[260px] lg:w-full p-3.5 sm:p-4 bg-[#F8F3EB] border border-[#D6C8B4] hover:border-[#B85332] transition-all card-light-steel-elevation group"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6E4B20] font-bold">
                    <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9E3E1E] group-hover:scale-110 transition-transform" />
                    <span>{t("systema.eficiencia")}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#9E3E1E] font-bold tabular-nums">
                    02
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#362B24] leading-relaxed font-sans">
                  {t("systema.eficienciaDesc")}
                </p>
              </SpotlightCard>

              {/* Concepto 3: CONCIENCIA */}
              <SpotlightCard
                spotlightColor="rgba(184, 83, 50, 0.12)"
                borderColor="rgba(184, 83, 50, 0.55)"
                className="snap-center shrink-0 w-[78%] sm:w-[260px] lg:w-full p-3.5 sm:p-4 bg-[#F8F3EB] border border-[#D6C8B4] hover:border-[#B85332] transition-all card-light-steel-elevation group"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9E3E1E] font-bold">
                    <Wind className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7A5426] group-hover:scale-110 transition-transform" />
                    <span>{t("systema.conciencia")}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6E4B20] font-bold tabular-nums">
                    03
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#362B24] leading-relaxed font-sans">
                  {t("systema.concienciaDesc")}
                </p>
              </SpotlightCard>
            </div>
          </ScrollReveal>
        </div>

        {/* Bloque Destacado de Identidad: ¿Por qué se llama Systema HETS? (Homenaje a los Guerreros Het / Querandíes) */}
        <ScrollReveal direction="up" delay={240} distance={22} className="mt-6 sm:mt-10 relative">
          {/* Halo de transición terrenal detrás del bloque marrón para conectarlo con el fondo claro */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 sm:-inset-5 bg-gradient-to-r from-[#8C725E]/25 via-[#B85332]/20 to-[#8C725E]/25 rounded-md blur-xl pointer-events-none"
          />
          <SpotlightCard
            spotlightColor="rgba(200, 100, 66, 0.18)"
            borderColor="rgba(200, 100, 66, 0.65)"
            className="relative rounded-sm bg-gradient-to-r from-[#261E1A] via-[#2E241F] to-[#261E1A] border border-[#C49A64]/65 p-4 sm:p-6 lg:p-7 earth-block-transition-glow card-specular-edge"
          >
            {/* Filete superior en Terracota Pampeana y Ocre Arcilla */}
            <div className="w-full h-[3px] mb-3.5 sm:mb-4 rounded-full bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332]" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-6">
              <div className="space-y-1.5 sm:space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-[10px] font-mono uppercase tracking-[0.2em]">
                  <span className="inline-flex items-center gap-1.5 text-[#DF7E5B] font-bold">
                    <Shield className="w-3.5 h-3.5 text-[#C49A64]" />
                    {t("systema.hetsKicker")}
                  </span>
                  <span className="text-[#C49A64] hidden sm:inline" aria-hidden="true">·</span>
                  <span className="text-[#C49A64] hidden sm:inline">
                    {t("systema.hetsTag")}
                  </span>
                </div>

                <h3 className="text-base sm:text-xl lg:text-2xl font-bold uppercase tracking-wide text-[#F4EDE2] font-heading">
                  {t("systema.hetsTitle")}
                </h3>

                <p className="text-xs sm:text-base text-[#F4EDE2]/95 leading-relaxed font-normal">
                  {t("systema.hetsDesc")}
                </p>
              </div>

              <div className="hidden md:flex flex-col items-end justify-center shrink-0 border-l border-[#C49A64]/30 pl-6">
                <span className="text-2xl lg:text-3xl font-black tracking-widest text-[#C86442] font-heading">
                  HETS
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C49A64] mt-0.5">
                  {t("systema.hetsTag")}
                </span>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>

      {/* Modal Editorial: Los 4 Pilares Invariables (Ventana a pantalla completa en celular con scroll cómodo) */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[120] bg-[#171210]/95 backdrop-blur-md flex items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t("systema.modalTitle")}
        >
          <div
            className="relative w-full h-full sm:h-auto sm:max-h-[90vh] max-w-2xl bg-[#261E1A] sm:border border-[#C49A64]/55 sm:rounded-sm overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera fija */}
            <div className="shrink-0 p-4 sm:p-6 pt-[calc(1rem+env(safe-area-inset-top,0px))] sm:pt-6 bg-[#1F1916] border-b border-[#C49A64]/35 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#C86442] block">
                  {t("systema.modalKicker")}
                </span>
                <h3 className="text-base sm:text-xl font-bold uppercase tracking-wide text-[#F4EDE2] font-heading leading-tight mt-0.5">
                  {t("systema.modalTitle")}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-[#C4B5A3] hover:text-[#F4EDE2] rounded-sm border border-[#C49A64]/55 bg-[#2A211C] cursor-pointer shrink-0"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5 text-[#C86442]" />
              </button>
            </div>

            {/* Cuerpo scrollable */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7 space-y-4">
              <p className="text-sm sm:text-base text-[#F4EDE2] leading-relaxed">
                {t("systema.modalIntro")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {pilares.map((p, idx) => (
                  <div
                    key={p.titulo}
                    className="p-3.5 bg-[#1F1916] border border-[#C49A64]/40 rounded-sm"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold text-[#C86442]">
                        0{idx + 1}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F4EDE2] font-heading">
                        {p.titulo}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed">
                      {p.descripcion}
                    </p>
                  </div>
                ))}
              </div>

              {/* Nota de Identidad dentro del modal también */}
              <div className="p-3.5 sm:p-4 bg-[#1F1916] border border-[#C86442]/50 rounded-sm space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C86442] block font-bold">
                  {t("systema.hetsTitle")}
                </span>
                <p className="text-xs sm:text-sm text-[#F4EDE2]/90 leading-relaxed">
                  {t("systema.hetsDesc")}
                </p>
              </div>
            </div>

            {/* Pie fijo */}
            <div className="shrink-0 p-4 sm:px-7 sm:py-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:pb-4 bg-[#1F1916] border-t border-[#C49A64]/35 flex justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#F4EDE2] bg-[#B85332] hover:bg-[#C86442] border border-[#DF7E5B]/60 rounded-sm transition-colors cursor-pointer shadow-md"
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
