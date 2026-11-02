import { useState, useEffect, TouchEvent } from "react";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Sección ENTRENAMIENTOS sobre Arena Cálida (#EFE7DA) y tarjetas en Hueso Pergamino (#F8F3EB)
 * con acentos en Terracota Pampeana (#B85332), Ocre Arcilla (#9C7340), Carbón de Quebracho (#231C18) y Tierra Media (#57483F).
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
      className="py-10 sm:py-16 lg:py-20 bg-flow-entrenamientos text-[#F4EDE2] relative overflow-hidden select-none"
    >
      {/* Luz ambiental sutil en Terracota Pampeana (#B85332) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[250px] bg-[#B85332]/12 blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Editorial Concisa */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-6 sm:mb-10 border-b border-[#C49A64]/35 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#DF7E5B] font-mono mb-2 font-bold">
                <Camera className="w-4 h-4 text-[#C49A64]" />
                <span>{t("ent.kicker") || "Galería de Práctica"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading">
                {t("ent.title") || "Entrenamientos"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#C4B5A3] font-sans leading-relaxed max-w-md sm:text-right font-medium">
              {lang === "en"
                ? "Real practice, organic adaptation, and conscious movement in open space."
                : "Práctica real, adaptabilidad orgánica y movimiento consciente en espacio abierto."}
            </p>
          </div>
        </ScrollReveal>

        {/* 1. MÓVIL: FORMATO CARRUSEL INTERACTIVO CON SWIPE Y BOTONES */}
        <div className="block md:hidden">
          <ScrollReveal direction="up" delay={80} distance={24}>
            <div
              className="relative rounded-sm overflow-hidden bg-[#261E1A] border border-[#C49A64]/45 shadow-xl touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#1F1916] cursor-pointer"
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 right-3 p-2 rounded-sm bg-[#1F1916]/85 text-[#C86442] border border-[#C49A64]/50 backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C86442]" />
                </div>

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#F4EDE2] bg-[#1F1916]/90 px-2.5 py-1 border border-[#C49A64]/55 rounded-xs font-semibold backdrop-blur-xs shadow-md">
                    {items[activeSlide].categoria}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="text-[10px] font-mono text-[#F4EDE2] bg-[#1F1916]/85 px-2 py-0.5 rounded-xs border border-[#C49A64]/50 tabular-nums">
                    0{activeSlide + 1} / 0{totalSlides}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#261E1A] border-t border-[#C49A64]/35 space-y-1.5">
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
                className="absolute left-2 top-[35%] -translate-y-1/2 w-9 h-9 rounded-sm bg-[#1F1916]/85 border border-[#C49A64]/60 text-[#F4EDE2] flex items-center justify-center active:scale-95 transition-all shadow-lg backdrop-blur-xs"
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
                className="absolute right-2 top-[35%] -translate-y-1/2 w-9 h-9 rounded-sm bg-[#1F1916]/85 border border-[#C49A64]/60 text-[#F4EDE2] flex items-center justify-center active:scale-95 transition-all shadow-lg backdrop-blur-xs"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-5 h-5 text-[#C86442]" />
              </button>
            </div>

            <div className="flex items-center justify-between mt-3 px-1">
              <span className="text-[10px] font-mono text-[#DF7E5B] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3 h-3 text-[#C49A64]" />
                {lang === "en" ? "Swipe to browse" : "Deslizá para pasar foto"}
              </span>

              <div className="flex items-center gap-2">
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
            </div>
          </ScrollReveal>
        </div>

        {/* 2. TABLET Y DESKTOP: GRILLA DE 2 COLUMNAS EDITORIAL CON LIGHTBOX */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 140}
              distance={28}
            >
              <div
                onClick={() => setActiveLightboxIndex(idx)}
                className="group relative rounded-sm overflow-hidden bg-[#261E1A] border border-[#C49A64]/40 hover:border-[#C86442] transition-all duration-500 cursor-pointer card-specular-edge hover:shadow-[0_12px_32px_rgba(184,83,50,0.22)] flex flex-col justify-between h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1F1916]">
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

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/85 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#F4EDE2] bg-[#1F1916]/90 px-2.5 py-1 border border-[#C49A64]/55 rounded-xs font-semibold backdrop-blur-xs shadow-md">
                      0{idx + 1} · {item.categoria}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 p-2 rounded-sm bg-[#1F1916]/85 text-[#C86442] border border-[#C49A64]/45 shadow-md backdrop-blur-xs group-hover:border-[#DF7E5B] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C86442] group-hover:text-[#DF7E5B] group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className="p-5 bg-[#261E1A] border-t border-[#C49A64]/35 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-heading font-bold uppercase tracking-wide text-[#F4EDE2] group-hover:text-[#DF7E5B] transition-colors">
                      {item.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C4B5A3] mt-2 leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#C49A64]/30 flex items-center justify-between text-[11px] font-mono text-[#DF7E5B] font-bold">
                    <span className="group-hover:text-[#C49A64] transition-colors">
                      {lang === "en" ? "Expand photograph" : "Ampliar fotografía"}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
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
                <div className="flex flex-wrap items-center gap-1.5 pr-2">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#C86442] font-semibold leading-snug">
                    Systema HETS · {currentLightboxItem.categoria}
                  </span>
                  <span className="text-[#C4B5A3] text-[11px]">
                    ({(activeLightboxIndex || 0) + 1} / {totalSlides})
                  </span>
                </div>
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-[#1F1916]/85 border border-[#C49A64]/60 text-[#F4EDE2] flex items-center justify-center hover:bg-[#B85332] hover:text-[#F4EDE2] transition-all cursor-pointer"
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-[#1F1916]/85 border border-[#C49A64]/60 text-[#F4EDE2] flex items-center justify-center hover:bg-[#B85332] hover:text-[#F4EDE2] transition-all cursor-pointer"
                  aria-label="Foto siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 bg-[#1F1916] border-t border-[#C4B5A3]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm sm:text-base font-heading font-bold uppercase text-[#F4EDE2]">
                    {currentLightboxItem.titulo}
                  </h4>
                  <p className="text-xs text-[#C4B5A3] mt-0.5">
                    {currentLightboxItem.descripcion}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#C49A64] shrink-0">
                  Systema HETS · Arte Marcial Ruso
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
