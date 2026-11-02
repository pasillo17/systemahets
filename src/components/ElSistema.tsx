import { useState, useEffect } from "react";
import { ArrowRight, X, Wind, Activity, Compass } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { ImageWithFallback } from "./ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * SECCIÓN EL SYSTEMA:
 * Diseño editorial limpio, sin etiquetas superiores (eyebrow tags), sin numeración robótica
 * y sin exceso de cajas cerradas.
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
      className="py-12 sm:py-20 bg-flow-systema text-[#F4EDE2] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Composición Asimétrica en 3 Áreas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Área 1: Fotografía de Práctica */}
          <ScrollReveal
            direction="up"
            delay={80}
            distance={24}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative rounded-sm overflow-hidden border border-[#C49A64]/45 bg-[#261E1A] group">
              <ImageWithFallback
                src={SITE_CONFIG.assets.heroImage}
                alt="Práctica de Systema en el dojo de La Plata"
                aspectRatioClass="aspect-[16/10] sm:aspect-[16/11]"
                className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                fallbackTitle={t("systema.cardImgTitle")}
                fallbackSubtitle={t("systema.cardImgDesc")}
              />
              <div className="p-3 sm:p-4 bg-[#1F1916] border-t border-[#C49A64]/30">
                <span className="text-xs font-heading uppercase tracking-wide text-[#F4EDE2] block font-bold">
                  {t("systema.cardImgTitle")}
                </span>
                <p className="text-xs text-[#C4B5A3] mt-0.5">
                  {t("systema.cardImgDesc")}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Área 2: Título H2 directo y párrafos editoriales limpios (sin comillas ni eyebrow tags) */}
          <ScrollReveal
            direction="up"
            delay={140}
            distance={24}
            className="lg:col-span-4 space-y-3.5 sm:space-y-4 order-1 lg:order-2"
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading"
              style={{ textWrap: "balance" }}
            >
              {t("systema.title")}
            </h2>

            <p className="text-sm sm:text-base text-[#F4EDE2] leading-relaxed font-normal">
              {t("systema.definition")}
            </p>

            <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed font-normal">
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

          {/* Área 3: Tres Conceptos Breves sueltos sin números robóticos */}
          <ScrollReveal
            direction="up"
            delay={200}
            distance={24}
            className="lg:col-span-3 lg:border-l lg:border-[#C49A64]/25 lg:pl-7 order-3"
          >
            <div className="divide-y divide-[#C49A64]/20">
              <div className="py-3.5 first:pt-0 last:pb-0">
                <div className="flex items-center gap-2 text-sm font-heading uppercase tracking-wide text-[#F4EDE2] font-bold mb-1">
                  <Compass className="w-4 h-4 text-[#DF7E5B] shrink-0" />
                  <span>{t("systema.adaptacion")}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed font-sans">
                  {t("systema.adaptacionDesc")}
                </p>
              </div>

              <div className="py-3.5 first:pt-0 last:pb-0">
                <div className="flex items-center gap-2 text-sm font-heading uppercase tracking-wide text-[#F4EDE2] font-bold mb-1">
                  <Activity className="w-4 h-4 text-[#C49A64] shrink-0" />
                  <span>{t("systema.eficiencia")}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed font-sans">
                  {t("systema.eficienciaDesc")}
                </p>
              </div>

              <div className="py-3.5 first:pt-0 last:pb-0">
                <div className="flex items-center gap-2 text-sm font-heading uppercase tracking-wide text-[#F4EDE2] font-bold mb-1">
                  <Wind className="w-4 h-4 text-[#DF7E5B] shrink-0" />
                  <span>{t("systema.conciencia")}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed font-sans">
                  {t("systema.concienciaDesc")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bloque Editorial Abierto (sin caja cerrada): ¿Por qué se llama Systema HETS? */}
        <ScrollReveal
          direction="up"
          delay={240}
          distance={22}
          className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#C49A64]/25"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-8">
            <div className="space-y-1.5 max-w-3xl">
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-[#F4EDE2] font-heading">
                {t("systema.hetsTitle")}
              </h3>
              <p className="text-xs sm:text-base text-[#C4B5A3] leading-relaxed font-normal">
                {t("systema.hetsDesc")}
              </p>
            </div>

            <div className="hidden md:flex flex-col items-end justify-center shrink-0 border-l border-[#C49A64]/25 pl-6">
              <span className="text-2xl font-black tracking-widest text-[#C86442] font-heading">
                HETS
              </span>
              <span className="text-xs text-[#C49A64] mt-0.5">
                {t("systema.hetsTag")}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal: Los 4 pilares que entrenamos en cada clase */}
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
              <h3 className="text-base sm:text-xl font-bold uppercase tracking-wide text-[#F4EDE2] font-heading leading-tight">
                {t("systema.modalTitle")}
              </h3>
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

              <div className="divide-y divide-[#C49A64]/25 pt-1">
                {pilares.map((p) => (
                  <div key={p.titulo} className="py-3.5 first:pt-1 last:pb-1">
                    <h4 className="text-sm sm:text-base font-bold uppercase tracking-wide text-[#DF7E5B] font-heading mb-1">
                      {p.titulo}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed">
                      {p.descripcion}
                    </p>
                  </div>
                ))}
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
