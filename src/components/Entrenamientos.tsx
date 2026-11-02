import { useState, useEffect, TouchEvent } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight, Youtube, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Sección ENTRENAMIENTOS:
 * Diseño limpio sin etiquetas superiores (eyebrow tags), sin numeración robótica (01/02)
 * y con pies de foto abiertos sobre el fondo.
 */
export function Entrenamientos() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const { lang, t } = useLanguage();

  const items = SITE_CONFIG.entrenamientos.map((item) => {
    if (lang === "en") {
      return {
        ...item,
        titulo: item.tituloEn || item.titulo,
        descripcion: item.descripcionEn || item.descripcion,
        categoria: item.categoriaEn || item.categoria,
      };
    }
    return item;
  });

  const totalSlides = items.length;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + totalSlides) % totalSlides : 0
        );
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % totalSlides : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, totalSlides]);

  const currentLightboxItem =
    activeLightboxIndex !== null ? items[activeLightboxIndex] : null;

  return (
    <section
      id="entrenamientos"
      className="py-12 sm:py-18 lg:py-20 bg-[#07080A] text-[#F4F4F6] relative overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Editorial Directa */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-7 sm:mb-10 border-b border-[#C5A059]/25 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4F4F6] font-heading glow-text-subtle">
              {t("ent.title")}
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A5B1] font-sans leading-relaxed max-w-md sm:text-right">
              {t("ent.quote")}
            </p>
          </div>
        </ScrollReveal>

        {/* 1. MÓVIL: CARRUSEL SINCRONIZADO CON SWIPE LIMPIO Y CONTROLES CENTRADOS VERTICALMENTE */}
        <div className="block md:hidden">
          <ScrollReveal direction="up" delay={50} distance={24}>
            <div
              className="relative touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Diapositivas precargadas para que foto, título y descripción cambien exactamente al mismo instante */}
              {items.map((slideItem, idx) => {
                const isCurrent = idx === activeSlide;
                return (
                  <div
                    key={slideItem.id}
                    className={isCurrent ? "block" : "hidden"}
                    aria-hidden={!isCurrent}
                  >
                    <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden card-static-gold">
                      <img
                        src={slideItem.imagen}
                        alt={slideItem.titulo}
                        className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.04]"
                        loading="eager"
                        onError={(e) => {
                          if (slideItem.fallbackUrl) {
                            (e.target as HTMLImageElement).src = slideItem.fallbackUrl;
                          }
                        }}
                      />

                      {/* Controles centrados exactamente a la mitad vertical de la foto (top-1/2 -translate-y-1/2) con fondo sutil traslúcido */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#07080A]/75 hover:bg-[#07080A]/95 backdrop-blur-xs border border-[#C5A059]/35 text-[#F4F4F6] flex items-center justify-center active:scale-95 transition-all cursor-pointer z-10 shadow-[0_0_12px_rgba(197,160,89,0.2)]"
                        aria-label="Foto anterior"
                      >
                        <ChevronLeft className="w-4 h-4 text-[#C5A059]" />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#07080A]/75 hover:bg-[#07080A]/95 backdrop-blur-xs border border-[#C5A059]/35 text-[#F4F4F6] flex items-center justify-center active:scale-95 transition-all cursor-pointer z-10 shadow-[0_0_12px_rgba(197,160,89,0.2)]"
                        aria-label="Foto siguiente"
                      >
                        <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                      </button>
                    </div>

                    {/* Pie de foto sincronizado en el mismo bloque que la imagen activa */}
                    <div className="pt-3.5 space-y-1">
                      <h3 className="text-base font-heading font-bold uppercase tracking-wide text-[#F4F4F6]">
                        {slideItem.titulo}
                      </h3>
                      <p className="text-xs text-[#A0A5B1] leading-relaxed">
                        {slideItem.descripcion}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
              {items.map((slideItem, idx) => (
                <button
                  key={slideItem.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 transition-all duration-300 rounded-xs cursor-pointer ${
                    activeSlide === idx
                      ? "w-6 bg-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.45)]"
                      : "w-2 bg-[#A0A5B1]/30 hover:bg-[#C5A059]"
                  }`}
                  aria-label={`Ir a ${slideItem.titulo}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* 2. TABLET Y DESKTOP: 2 FOTOGRAFÍAS CON ELEVACIÓN 3D SUTIL Y PIES EDITORIALES ABIERTOS */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 100}
              distance={24}
            >
              <div
                onClick={() => setActiveLightboxIndex(idx)}
                className="group cursor-pointer space-y-3.5"
              >
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden card-premium-gold">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
                    loading="lazy"
                    onError={(e) => {
                      if (item.fallbackUrl) {
                        (e.target as HTMLImageElement).src = item.fallbackUrl;
                      }
                    }}
                  />

                  <div className="absolute top-3 right-3 p-2 rounded-sm bg-[#07080A]/85 text-[#C5A059] border border-[#C5A059]/30 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_14px_rgba(197,160,89,0.3)] transition-all">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-[#D4AF37]" />
                  </div>
                </div>

                {/* Pie editorial suelto sobre el fondo */}
                <div className="space-y-1">
                  <h3 className="text-base lg:text-lg font-heading font-bold uppercase tracking-wide text-[#F4F4F6] group-hover:text-[#D4AF37] transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A0A5B1] leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3. ACCESO AL CANAL DE YOUTUBE (debajo del carrusel/galería de fotos) */}
        <ScrollReveal direction="up" delay={120} distance={20} className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#C5A059]/25">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <h3 className="text-base sm:text-lg font-heading font-bold uppercase tracking-wide text-[#F4F4F6]">
                {lang === "en"
                  ? "Fluid Movement, Self-Protection and Human Development"
                  : "Soltura corporal, autoprotección y desarrollo humano"}
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A5B1] leading-relaxed font-sans">
                {lang === "en"
                  ? "In class we work on breathing, balance, and conscious movement applied to real situations so you learn to get out of grabs, manage impacts and reduce the risk of injury, and respond calmly. Watch full classes and seminar clips on our YouTube channel."
                  : "En cada clase trabajamos la respiración, el apoyo del cuerpo y el movimiento consciente aplicado a situaciones reales para aprender a salir de agarres, gestionar impactos y reducir el riesgo de lesiones, y responder con tranquilidad. Podés ver clases completas y seminarios en nuestro canal de YouTube."}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={SITE_CONFIG.videoEntrenamiento.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer-lightning w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-[#07080A] bg-[#C5A059] hover:bg-[#D4AF37] min-h-[46px] whitespace-nowrap text-center leading-tight group"
              >
                <Youtube className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-bold">
                  {lang === "en"
                    ? "Watch classes on YouTube"
                    : "Ver videos en YouTube"}
                </span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 4. MODAL LIGHTBOX AMPLIADO */}
        {currentLightboxItem && (
          <div
            className="fixed inset-0 z-[120] bg-[#07080A]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-[#0D0E12] border border-[#C5A059]/25 rounded-sm overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-3 bg-[#07080A] border-b border-[#C5A059]/25 flex items-center justify-between gap-2">
                <span className="text-xs font-heading uppercase tracking-wide text-[#F4F4F6] font-bold">
                  {currentLightboxItem.titulo}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveLightboxIndex(null)}
                  className="w-10 h-10 flex items-center justify-center text-[#A0A5B1] hover:text-[#F4F4F6] rounded-sm border border-[#C5A059]/25 bg-[#0D0E12] cursor-pointer shrink-0"
                  aria-label="Cerrar visor"
                >
                  <X className="w-5 h-5 text-[#C5A059]" />
                </button>
              </div>

              <div className="relative bg-[#07080A] flex items-center justify-center p-2 sm:p-4 min-h-[300px] max-h-[65vh]">
                <img
                  src={currentLightboxItem.imagen}
                  alt={currentLightboxItem.titulo}
                  className="max-h-[60vh] w-auto max-w-full object-contain mx-auto"
                />

                <button
                  type="button"
                  onClick={() =>
                    setActiveLightboxIndex((prev) =>
                      prev !== null ? (prev - 1 + totalSlides) % totalSlides : 0
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-[#0D0E12]/85 border border-[#C5A059]/25 text-[#F4F4F6] flex items-center justify-center hover:bg-[#C5A059] hover:text-[#07080A] transition-all cursor-pointer"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveLightboxIndex((prev) =>
                      prev !== null ? (prev + 1) % totalSlides : 0
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-[#0D0E12]/85 border border-[#C5A059]/25 text-[#F4F4F6] flex items-center justify-center hover:bg-[#C5A059] hover:text-[#07080A] transition-all cursor-pointer"
                  aria-label="Foto siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 bg-[#0D0E12] border-t border-[#C5A059]/25">
                <p className="text-xs sm:text-sm text-[#A0A5B1]">
                  {currentLightboxItem.descripcion}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
