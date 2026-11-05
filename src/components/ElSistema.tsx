import { useState, useEffect, useMemo } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { ImageWithFallback } from "./ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import { useGooglePlaceData } from "../hooks/useGooglePlaceData";
import { ScrollReveal } from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

/**
 * SECCIÓN EL SYSTEMA:
 * Incorpora estética editorial de alto impacto inspirada en la referencia:
 * 1. Marco desplazado (offset frame) en Naranja Terracota (#D97736) con tipografía vertical detrás de la Galería.
 * 2. Grilla de 4 columnas verticales tipo póster para los 4 Pilares del entrenamiento.
 */
export function ElSistema() {
  const [modalOpen, setModalOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { lang, t } = useLanguage();
  const { photos: googlePhotos } = useGooglePlaceData(lang);

  // Galería de fotos reales de práctica
  const realPracticePhotos = useMemo(() => {
    const basePhotos = [
      {
        id: "real-parejas-laplata",
        url: SITE_CONFIG.assets.practicaSedeLaPlata,
        fallbackUrl: SITE_CONFIG.assets.practicaSedeLaPlataFallbackUrl,
        alt: "Práctica real en parejas de respiración, postura y salida de agarres — Systema HETS",
        authorName: undefined as string | undefined,
        authorUri: undefined as string | undefined,
      },
      {
        id: "real-cuchillo-laplata",
        url: SITE_CONFIG.assets.defensaCuchilloLaPlata,
        fallbackUrl: SITE_CONFIG.assets.defensaCuchilloFallbackUrl,
        alt: "Trabajo en parejas de control, postura y gestión del movimiento — Systema HETS",
        authorName: undefined as string | undefined,
        authorUri: undefined as string | undefined,
      },
      {
        id: "real-airelibre-laplata",
        url: SITE_CONFIG.assets.entrenamientoAireLibre,
        fallbackUrl:
          "https://raw.githubusercontent.com/pasillo17/SYSTEMA-HETS/main/Entrenamiento%20marcial%20al%20aire%20libre.png",
        alt: "Práctica guiada por Diego Ledesma — Systema HETS",
        authorName: undefined as string | undefined,
        authorUri: undefined as string | undefined,
      },
    ];

    const fromGoogle = googlePhotos.map((gp) => ({
      id: gp.id,
      url: gp.url,
      fallbackUrl: SITE_CONFIG.assets.practicaSedeLaPlata,
      alt: "Fotografía real de práctica — Systema Hets Diego Ledesma",
      authorName: gp.authorName,
      authorUri: gp.authorUri,
    }));

    return [...basePhotos, ...fromGoogle];
  }, [googlePhotos]);

  const currentPhoto =
    realPracticePhotos[photoIndex % realPracticePhotos.length] ||
    realPracticePhotos[0];

  const handlePrevPhoto = () => {
    setPhotoIndex(
      (prev) =>
        (prev - 1 + realPracticePhotos.length) % realPracticePhotos.length
    );
  };

  const handleNextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % realPracticePhotos.length);
  };

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
      num: "01",
      titulo: t("systema.pilar1"),
      descripcion: t("systema.pilar1Desc"),
      bgImg: SITE_CONFIG.assets.practicaSedeLaPlata,
    },
    {
      num: "02",
      titulo: t("systema.pilar2"),
      descripcion: t("systema.pilar2Desc"),
      bgImg: SITE_CONFIG.assets.entrenamientoAireLibre,
    },
    {
      num: "03",
      titulo: t("systema.pilar3"),
      descripcion: t("systema.pilar3Desc"),
      bgImg: SITE_CONFIG.assets.defensaCuchilloLaPlata,
    },
    {
      num: "04",
      titulo: t("systema.pilar4"),
      descripcion: t("systema.pilar4Desc"),
      bgImg: SITE_CONFIG.assets.diegoPortrait,
    },
  ];

  return (
    <section
      id="systema"
      className="py-14 sm:py-22 bg-[#110D0A] text-[#F5EFE6] relative overflow-hidden"
    >
      {/* Halo ambiental sutil en Naranja Terracota y Dorado */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-0 -translate-x-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-[#D97736]/10 rounded-full blur-[90px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Composición Principal: Fotografía con Marco Desplazado + Texto Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Área 1: Galería con Marco Desplazado (Offset Frame) en Terracota/Dorado y Tipografía Vertical */}
          <ScrollReveal
            direction="up"
            delay={80}
            distance={24}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative pl-3 pb-3 sm:pl-5 sm:pb-5">
              {/* Bloque de color desplazado detrás de la foto (Estilo referencia Pinterest) */}
              <div
                aria-hidden="true"
                className="absolute left-0 bottom-0 w-[88%] h-[88%] bg-gradient-to-tr from-[#D97736] via-[#C86428] to-[#C5A059] rounded-xs overflow-hidden pointer-events-none shadow-[0_12px_30px_rgba(217,119,54,0.28)]"
              >
                <span className="absolute -bottom-2 left-3 font-heading font-black uppercase tracking-[0.2em] text-2xl sm:text-4xl text-[#110D0A]/25 select-none whitespace-nowrap">
                  SYSTEMA HETS
                </span>
              </div>

              <SpotlightCard className="group relative z-10">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    key={currentPhoto.id}
                    src={currentPhoto.url}
                    alt={currentPhoto.alt}
                    aspectRatioClass="aspect-[16/10] sm:aspect-[16/11]"
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                    fallbackTitle={t("systema.cardImgTitle")}
                    fallbackSubtitle={t("systema.cardImgDesc")}
                  />

                  {realPracticePhotos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevPhoto}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#110D0A]/80 hover:bg-[#D97736] border border-[#D97736]/40 text-[#F5EFE6] hover:text-[#110D0A] flex items-center justify-center transition-all cursor-pointer z-10 shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                        aria-label="Foto real anterior"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextPhoto}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#110D0A]/80 hover:bg-[#D97736] border border-[#D97736]/40 text-[#F5EFE6] hover:text-[#110D0A] flex items-center justify-center transition-all cursor-pointer z-10 shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                        aria-label="Foto real siguiente"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <div className="absolute bottom-2.5 right-3 flex items-center gap-1.5 px-2 py-1 rounded-xs bg-[#110D0A]/80 backdrop-blur-xs border border-[#D97736]/30 z-10">
                        {realPracticePhotos.map((p, idx) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setPhotoIndex(idx)}
                            className={`h-1.5 rounded-xs transition-all cursor-pointer ${
                              photoIndex % realPracticePhotos.length === idx
                                ? "w-4 bg-[#D97736]"
                                : "w-1.5 bg-[#F5EFE6]/45 hover:bg-[#D4AF37]"
                            }`}
                            aria-label={`Ver foto real ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-3.5 sm:p-4 bg-[#1B140F] border-t border-[#D97736]/30">
                  <span className="text-xs font-heading uppercase tracking-wide text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors block font-bold">
                    {t("systema.cardImgTitle")}
                  </span>
                  <p className="text-xs text-[#B8A99A] mt-0.5">
                    {t("systema.cardImgDesc")}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </ScrollReveal>

          {/* Área 2: Título H2 con subrayado geométrico, bajada y párrafos editoriales */}
          <ScrollReveal
            direction="up"
            delay={140}
            distance={24}
            className="lg:col-span-6 space-y-4 sm:space-y-5 order-1 lg:order-2"
          >
            <div className="space-y-2.5">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F5EFE6] font-heading glow-text-subtle"
                style={{ textWrap: "balance" }}
              >
                {t("systema.title")}
              </h2>
              <div
                aria-hidden="true"
                className="h-[3px] w-16 bg-gradient-to-r from-[#D97736] to-[#D4AF37]"
              />
              <p
                className="text-xs sm:text-sm font-heading uppercase tracking-wider text-[#D97736] font-bold pt-0.5"
                style={{ textWrap: "balance" }}
              >
                {t("systema.subtitle")}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#F5EFE6] leading-relaxed font-normal">
              {t("systema.definition")}
            </p>

            <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed font-normal">
              {t("systema.p2")}
            </p>

            <p className="text-xs sm:text-sm font-medium text-[#D4AF37] tracking-wide pt-0.5">
              {t("systema.tagline")}
            </p>

            <div className="pt-1 sm:pt-2">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn-shimmer-lightning w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-[#110D0A] bg-[#D97736] hover:bg-[#D4AF37] rounded-sm cursor-pointer min-h-[48px] h-auto group whitespace-normal sm:whitespace-nowrap text-center leading-snug"
              >
                <span className="font-bold">{t("systema.btnMore")}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Grilla de 4 Columnas Verticales Tipo Póster para los 4 Pilares (Inspirada en la referencia de Pinterest) */}
        <ScrollReveal
          direction="up"
          delay={180}
          distance={24}
          className="mt-14 sm:mt-20 pt-10 sm:pt-14 border-t border-[#D97736]/30"
        >
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2.5">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold uppercase tracking-wider text-[#F5EFE6]">
              {t("systema.modalTitle")}
            </h3>
            <div
              aria-hidden="true"
              className="h-[3px] w-20 mx-auto bg-gradient-to-r from-[#D97736] via-[#D4AF37] to-[#C5A059]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {pilares.map((pilar, idx) => (
              <div
                key={pilar.num}
                className={`group relative rounded-xs overflow-hidden bg-[#1B140F] border border-[#D97736]/30 hover:border-[#D4AF37] transition-all duration-500 min-h-[270px] sm:min-h-[320px] flex flex-col justify-end p-5 sm:p-6 shadow-[0_14px_30px_rgba(0,0,0,0.75)] ${
                  idx % 2 === 1 ? "lg:-translate-y-2" : ""
                }`}
              >
                {/* Imagen de fondo monocroma oscurecida estilo póster que cobra vida en hover */}
                <img
                  src={pilar.bgImg}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#110D0A] via-[#110D0A]/85 to-[#110D0A]/40 pointer-events-none"
                />

                {/* Filete superior en Naranja Terracota */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D97736] to-[#D4AF37] opacity-75 group-hover:opacity-100 transition-opacity"
                />

                {/* Número vertical de marca de agua arriba a la derecha */}
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-4 font-heading font-black text-4xl sm:text-5xl text-[#D97736]/20 group-hover:text-[#D4AF37]/35 transition-colors select-none leading-none"
                >
                  {pilar.num}
                </span>

                {/* Contenido del póster */}
                <div className="relative z-10 space-y-2.5 text-center sm:text-left">
                  <div className="space-y-1.5">
                    <h4 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors">
                      {pilar.titulo}
                    </h4>
                    <div
                      aria-hidden="true"
                      className="h-[2px] w-10 mx-auto sm:mx-0 bg-[#D97736] group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-300"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-[#B8A99A] group-hover:text-[#F5EFE6]/95 leading-relaxed transition-colors">
                    {pilar.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bloque Editorial: ¿Por qué se llama Systema HETS? */}
        <ScrollReveal
          direction="up"
          delay={220}
          distance={22}
          className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#D97736]/30"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-8">
            <div className="space-y-1.5 max-w-3xl">
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-[#F5EFE6] font-heading">
                {t("systema.hetsTitle")}
              </h3>
              <p className="text-xs sm:text-base text-[#B8A99A] leading-relaxed font-normal">
                {t("systema.hetsDesc")}
              </p>
            </div>

            <div className="hidden md:flex flex-col items-end justify-center shrink-0 border-l border-[#D97736]/30 pl-6">
              <span className="text-2xl font-black tracking-widest text-[#D97736] font-heading drop-shadow-[0_0_14px_rgba(217,119,54,0.32)]">
                HETS
              </span>
              <span className="text-xs text-[#C5A059] mt-0.5">
                {t("systema.hetsTag")}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal: Los 4 pilares que entrenamos en cada clase */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[120] bg-[#110D0A]/95 backdrop-blur-md flex items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t("systema.modalTitle")}
        >
          <div
            className="relative w-full h-full sm:h-auto sm:max-h-[90vh] max-w-2xl bg-[#1B140F] sm:border border-[#D97736]/30 sm:rounded-sm overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera fija */}
            <div className="shrink-0 p-4 sm:p-6 pt-[calc(1rem+env(safe-area-inset-top,0px))] sm:pt-6 bg-[#110D0A] border-b border-[#D97736]/30 flex items-center justify-between gap-3">
              <h3 className="text-base sm:text-xl font-bold uppercase tracking-wide text-[#F5EFE6] font-heading leading-tight">
                {t("systema.modalTitle")}
              </h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-[#B8A99A] hover:text-[#F5EFE6] rounded-sm border border-[#D97736]/30 bg-[#1B140F] cursor-pointer shrink-0"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5 text-[#D97736]" />
              </button>
            </div>

            {/* Cuerpo scrollable */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7 space-y-4">
              <p className="text-sm sm:text-base text-[#F5EFE6] leading-relaxed">
                {t("systema.modalIntro")}
              </p>

              <div className="divide-y divide-[#D97736]/25 pt-1">
                {pilares.map((p) => (
                  <div key={p.titulo} className="py-3.5 first:pt-1 last:pb-1">
                    <h4 className="text-sm sm:text-base font-bold uppercase tracking-wide text-[#D97736] font-heading mb-1">
                      {p.titulo}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed">
                      {p.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie fijo */}
            <div className="shrink-0 p-4 sm:px-7 sm:py-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:pb-4 bg-[#110D0A] border-t border-[#D97736]/30 flex justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="btn-shimmer-lightning w-full sm:w-auto min-h-[48px] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#110D0A] bg-[#D97736] hover:bg-[#D4AF37] rounded-sm transition-colors cursor-pointer shadow-md"
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
