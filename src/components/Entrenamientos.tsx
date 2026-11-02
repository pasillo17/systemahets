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
  const [videoSrc, setVideoSrc] = useState(SITE_CONFIG.videoEntrenamiento.mp4Url);
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
      className="py-12 sm:py-18 lg:py-20 bg-flow-entrenamientos text-[#F4EDE2] relative overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Editorial Directa (sin eyebrow tag arriba del H2) */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-7 sm:mb-10 border-b border-[#C49A64]/30 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading">
              {t("ent.title")}
            </h2>
            <p className="text-xs sm:text-sm text-[#C4B5A3] font-sans leading-relaxed max-w-md sm:text-right">
              {t("ent.quote")}
            </p>
          </div>
        </ScrollReveal>

        {/* BLOQUE MULTIMEDIA: VIDEO CORTO EN BUCLE (SIN SONIDO) + DESCRIPCIÓN ABIERTA */}
        <ScrollReveal direction="up" delay={50} distance={22} className="mb-10 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            {/* Video en bucle silencioso */}
            <div className="lg:col-span-7 relative aspect-video rounded-sm overflow-hidden border border-[#C49A64]/45 bg-[#171210]">
              <video
                key={videoSrc}
                src={videoSrc}
                poster={SITE_CONFIG.videoEntrenamiento.posterUrl}
                autoPlay
                loop
                muted
                playsInline
                onError={() => {
                  if (videoSrc !== SITE_CONFIG.videoEntrenamiento.fallbackMp4Url) {
                    setVideoSrc(SITE_CONFIG.videoEntrenamiento.fallbackMp4Url);
                  }
                }}
                className="w-full h-full object-cover filter brightness-[0.94] contrast-[1.05]"
              />
            </div>

            {/* Texto editorial suelto al lado del video (sin recuadro cerrado ni eyebrow tag) */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-lg sm:text-2xl font-heading font-bold uppercase tracking-wide text-[#F4EDE2] leading-snug">
                {lang === "en"
                  ? "Fluid Movement and Practical Defense"
                  : "Soltura corporal y defensa aplicable"}
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed font-sans">
                {lang === "en"
                  ? "In class we work on breathing, balance, and natural movement so you learn to get out of grabs, absorb impacts safely, and respond calmly. Watch full classes and seminar clips on our YouTube channel."
                  : "En cada clase trabajamos la respiración, el apoyo del cuerpo y el movimiento continuo para aprender a salir de agarres, caer sin lastimarte y responder con tranquilidad. Podés ver clases completas y seminarios en nuestro canal de YouTube."}
              </p>

              <div className="pt-1">
                <a
                  href={SITE_CONFIG.videoEntrenamiento.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer-lightning inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm text-xs font-extrabold uppercase tracking-wider text-[#F4EDE2] min-h-[46px] shadow-md whitespace-normal text-center leading-tight"
                >
                  <Youtube className="w-4 h-4 shrink-0" />
                  <span>
                    {lang === "en"
                      ? "Watch classes on YouTube"
                      : "Ver videos en YouTube"}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 1. MÓVIL: CARRUSEL LIMPIO SIN NUMERACIÓN ROBÓTICA */}
        <div className="block md:hidden">
          <ScrollReveal direction="up" delay={80} distance={24}>
            <div
              className="relative touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-[#C49A64]/40 bg-[#1F1916] cursor-pointer"
                onClick={() => setActiveLightboxIndex(activeSlide)}
              >
                <img
                  src={items[activeSlide].imagen}
                  alt={items[activeSlide].titulo}
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] transition-all duration-300"
                  loading="eager"
                  onError={(e) => {
                    const fallback = items[activeSlide].fallbackUrl;
                    if (fallback) {
                      (e.target as HTMLImageElement).src = fallback;
                    }
                  }}
                />

                <div className="absolute top-3 right-3 p-2 rounded-sm bg-[#1F1916]/85 text-[#C86442] border border-[#C49A64]/45">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C86442]" />
                </div>
              </div>

              {/* Pie de foto abierto sobre el fondo */}
              <div className="pt-3 space-y-1">
                <h3 className="text-base font-heading font-bold uppercase tracking-wide text-[#F4EDE2]">
                  {items[activeSlide].titulo}
                </h3>
                <p className="text-xs text-[#C4B5A3] leading-relaxed">
                  {items[activeSlide].descripcion}
                </p>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-2 top-[34%] -translate-y-1/2 w-9 h-9 rounded-sm bg-[#1F1916]/85 border border-[#C49A64]/55 text-[#F4EDE2] flex items-center justify-center active:scale-95 transition-all"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5 text-[#C86442]" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-2 top-[34%] -translate-y-1/2 w-9 h-9 rounded-sm bg-[#1F1916]/85 border border-[#C49A64]/55 text-[#F4EDE2] flex items-center justify-center active:scale-95 transition-all"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-5 h-5 text-[#C86442]" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 transition-all duration-300 rounded-xs cursor-pointer ${
                    activeSlide === idx
                      ? "w-6 bg-[#C86442]"
                      : "w-2 bg-[#C4B5A3]/30 hover:bg-[#C49A64]"
                  }`}
                  aria-label={`Ir a foto ${idx + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* 2. TABLET Y DESKTOP: 2 FOTOGRAFÍAS CON PIES EDITORIALES ABIERTOS (SIN CAJAS CERRADAS NI NÚMEROS 01/02) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-10 pt-2 border-t border-[#C49A64]/20">
          {items.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 120}
              distance={24}
            >
              <div
                onClick={() => setActiveLightboxIndex(idx)}
                className="group cursor-pointer space-y-3"
              >
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-[#C49A64]/40 group-hover:border-[#C86442] bg-[#1F1916] transition-colors">
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

                  <div className="absolute top-3 right-3 p-2 rounded-sm bg-[#1F1916]/85 text-[#C86442] border border-[#C49A64]/45 group-hover:border-[#DF7E5B] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C86442] group-hover:text-[#DF7E5B]" />
                  </div>
                </div>

                {/* Pie editorial suelto sobre el fondo (sin tarjeta contenedora) */}
                <div className="space-y-1">
                  <h3 className="text-base lg:text-lg font-heading font-bold uppercase tracking-wide text-[#F4EDE2] group-hover:text-[#DF7E5B] transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3. MODAL LIGHTBOX AMPLIADO */}
        {currentLightboxItem && (
          <div
            className="fixed inset-0 z-[120] bg-[#171210]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-[#261E1A] border border-[#C49A64]/55 rounded-sm overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-3 bg-[#1F1916] border-b border-[#C4B5A3]/25 flex items-center justify-between gap-2">
                <span className="text-xs font-heading uppercase tracking-wide text-[#F4EDE2] font-bold">
                  {currentLightboxItem.titulo}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveLightboxIndex(null)}
                  className="w-10 h-10 flex items-center justify-center text-[#C4B5A3] hover:text-[#F4EDE2] rounded-sm border border-[#C49A64]/45 bg-[#2A211C] cursor-pointer shrink-0"
                  aria-label="Cerrar visor"
                >
                  <X className="w-5 h-5 text-[#C86442]" />
                </button>
              </div>

              <div className="relative bg-[#171210] flex items-center justify-center p-2 sm:p-4 min-h-[300px] max-h-[65vh]">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-[#1F1916]/85 border border-[#C49A64]/60 text-[#F4EDE2] flex items-center justify-center hover:bg-[#B85332] transition-all cursor-pointer"
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-[#1F1916]/85 border border-[#C49A64]/60 text-[#F4EDE2] flex items-center justify-center hover:bg-[#B85332] transition-all cursor-pointer"
                  aria-label="Foto siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 bg-[#1F1916] border-t border-[#C4B5A3]/25">
                <p className="text-xs sm:text-sm text-[#C4B5A3]">
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
