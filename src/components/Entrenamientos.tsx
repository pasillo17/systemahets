import { useState, useRef, useEffect, TouchEvent } from "react";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Sección ENTRENAMIENTOS:
 * - 2 fotos oficiales provistas por el usuario (Entrenamiento al aire libre & Demostración en el parque).
 * - Enfoque conciso, sin sobre-explicar ("LO DE ENTRENAMIENTOS NO EXPLIQUEMOS TANTO").
 * - Formato carrusel interactivo en celular con soporte táctil (swipe), botones de navegación y puntos indicadores.
 * - En desktop: Grilla visual equilibrada de 2 columnas con lightbox integrado.
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

  // Manejo de gestos táctiles (Swipe en celulares)
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
    const minSwipeDistance = 45; // Distancia mínima en píxeles para considerar swipe

    if (distance > minSwipeDistance) {
      // Deslizar hacia la izquierda -> siguiente foto
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Deslizar hacia la derecha -> foto anterior
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Teclado para lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + totalSlides) % totalSlides : 0));
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % totalSlides : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, totalSlides]);

  const currentLightboxItem = activeLightboxIndex !== null ? items[activeLightboxIndex] : null;

  return (
    <section id="entrenamientos" className="py-12 sm:py-16 lg:py-20 bg-[#080807] text-[#F1EBDD] border-t border-[#A58A60]/15 relative overflow-hidden select-none">
      
      {/* Luz ambiental sutil */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[250px] bg-[#A58A60]/5 blur-3xl pointer-events-none animate-glow-pulse"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera Editorial Concisa con Divisor de Sección */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-6 sm:mb-10 border-b border-[#A58A60]/20 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#C2A87E] font-mono mb-2 font-semibold">
                <Camera className="w-4 h-4 text-[#A58A60]" />
                <span>{t("ent.kicker") || "Galería de Práctica"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading">
                {t("ent.title") || "Entrenamientos"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#C4BFB4] font-sans leading-relaxed max-w-md sm:text-right">
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
              className="relative rounded-sm overflow-hidden bg-[#12110F] border border-[#A58A60]/30 shadow-2xl touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Contenedor de la foto activa */}
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#080807] cursor-pointer"
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
                
                {/* Gradiente inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12110F] via-transparent to-transparent opacity-90 pointer-events-none" />

                {/* Botón flotante para ampliar */}
                <div className="absolute top-3 right-3 p-2 rounded-sm bg-[#080807]/85 text-[#D8C7A5] border border-[#A58A60]/40 backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-[#A58A60]" />
                </div>

                {/* Etiqueta editorial de Categoría */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#C2A87E] bg-[#080807]/90 px-2.5 py-1 border border-[#A58A60]/40 rounded-xs font-semibold backdrop-blur-xs shadow-md">
                    {items[activeSlide].categoria}
                  </span>
                </div>

                {/* Contador de fotos (01 / 02) */}
                <div className="absolute bottom-3 right-3">
                  <span className="text-[10px] font-mono text-[#F1EBDD] bg-[#080807]/85 px-2 py-0.5 rounded-xs border border-[#A58A60]/30 tabular-nums">
                    0{activeSlide + 1} / 0{totalSlides}
                  </span>
                </div>
              </div>

              {/* Pie de la tarjeta en móvil: Título y descripción concisa */}
              <div className="p-4 bg-[#12110F] border-t border-[#A58A60]/20 space-y-1.5">
                <h3 className="text-base font-heading font-bold uppercase tracking-wide text-[#F1EBDD]">
                  {items[activeSlide].titulo}
                </h3>
                <p className="text-xs text-[#C4BFB4] leading-relaxed">
                  {items[activeSlide].descripcion}
                </p>
              </div>

              {/* Flechas táctiles de navegación superpuestas */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-2 top-[35%] -translate-y-1/2 w-9 h-9 rounded-full bg-[#080807]/85 border border-[#A58A60]/50 text-[#F1EBDD] flex items-center justify-center active:scale-95 transition-all shadow-lg backdrop-blur-xs"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5 text-[#C2A87E]" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-2 top-[35%] -translate-y-1/2 w-9 h-9 rounded-full bg-[#080807]/85 border border-[#A58A60]/50 text-[#F1EBDD] flex items-center justify-center active:scale-95 transition-all shadow-lg backdrop-blur-xs"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-5 h-5 text-[#C2A87E]" />
              </button>
            </div>

            {/* Indicadores de puntos y control inferior móvil */}
            <div className="flex items-center justify-between mt-3 px-1">
              <span className="text-[10px] font-mono text-[#A58A60] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C2A87E]" />
                {lang === "en" ? "Swipe to browse" : "Deslizá para pasar foto"}
              </span>

              {/* Puntos de paginación interactivos */}
              <div className="flex items-center gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                      activeSlide === idx
                        ? "w-6 bg-[#C2A87E]"
                        : "w-2 bg-[#A58A60]/40 hover:bg-[#A58A60]/80"
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
            <ScrollReveal key={item.id} direction="up" delay={idx * 140} distance={28}>
              <div
                onClick={() => setActiveLightboxIndex(idx)}
                className="group relative rounded-sm overflow-hidden bg-[#12110F] border border-[#A58A60]/30 hover:border-[#C2A87E] transition-all duration-500 cursor-pointer shadow-xl card-specular-edge hover:shadow-[0_0_30px_rgba(165,138,96,0.25)] flex flex-col justify-between h-full"
              >
                {/* Imagen con Aspect Ratio elegante */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#080807]">
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
                  
                  {/* Degradado inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12110F] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Etiqueta editorial de Categoría */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#C2A87E] bg-[#080807]/90 px-2.5 py-1 border border-[#A58A60]/40 rounded-xs font-semibold backdrop-blur-xs shadow-md">
                      0{idx + 1} · {item.categoria}
                    </span>
                  </div>

                  {/* Ícono de ampliación al pasar el mouse */}
                  <div className="absolute top-3 right-3 p-2 rounded-sm bg-[#080807]/85 text-[#D8C7A5] border border-[#A58A60]/30 shadow-md backdrop-blur-xs group-hover:border-[#C2A87E] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5 text-[#A58A60] group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Pie de foto conciso */}
                <div className="p-5 bg-[#12110F] border-t border-[#A58A60]/20 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-heading font-bold uppercase tracking-wide text-[#F1EBDD] group-hover:text-[#C2A87E] transition-colors">
                      {item.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C4BFB4] mt-2 leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#A58A60]/15 flex items-center justify-between text-[11px] font-mono text-[#C2A87E]">
                    <span className="group-hover:text-[#F1EBDD] transition-colors">
                      {lang === "en" ? "Expand photograph" : "Ampliar fotografía"}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3. MODAL LIGHTBOX AMPLIADO */}
        {currentLightboxItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-[#12110F] border border-[#A58A60]/50 rounded-sm overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Barra superior de la modal */}
              <div className="px-4 py-3 bg-[#080807] border-b border-[#A58A60]/20 flex items-center justify-between">
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-semibold">
                    Systema HETS · {currentLightboxItem.categoria}
                  </span>
                  <span className="text-[#C4BFB4] text-[11px]">
                    ({((activeLightboxIndex || 0) + 1)} / {totalSlides})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveLightboxIndex(null)}
                  className="w-9 h-9 flex items-center justify-center text-[#C4BFB4] hover:text-white rounded-sm border border-[#A58A60]/30 bg-[#12110F] cursor-pointer"
                  aria-label="Cerrar visor"
                >
                  <X className="w-4 h-4 text-[#A58A60]" />
                </button>
              </div>

              {/* Imagen central ampliada con flechas laterales */}
              <div className="relative bg-[#050505] flex items-center justify-center p-2 sm:p-4 min-h-[300px] max-h-[65vh]">
                <img
                  src={currentLightboxItem.imagen}
                  alt={currentLightboxItem.titulo}
                  className="max-h-[60vh] w-auto max-w-full object-contain mx-auto"
                />

                {/* Flechas de navegación en Lightbox */}
                <button
                  type="button"
                  onClick={() => setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + totalSlides) % totalSlides : 0))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#080807]/80 border border-[#A58A60]/40 text-[#F1EBDD] flex items-center justify-center hover:bg-[#A58A60] hover:text-[#080807] transition-all cursor-pointer"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % totalSlides : 0))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#080807]/80 border border-[#A58A60]/40 text-[#F1EBDD] flex items-center justify-center hover:bg-[#A58A60] hover:text-[#080807] transition-all cursor-pointer"
                  aria-label="Foto siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Pie de la modal con descripción concisa */}
              <div className="p-4 bg-[#0c0b0a] border-t border-[#A58A60]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm sm:text-base font-heading font-bold uppercase text-[#F1EBDD]">
                    {currentLightboxItem.titulo}
                  </h4>
                  <p className="text-xs text-[#C4BFB4] mt-0.5">
                    {currentLightboxItem.descripcion}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#C2A87E] shrink-0">
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
