import { useState, useEffect } from "react";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { ImageWithFallback } from "./ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";

export function Entrenamientos() {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const { lang, t } = useLanguage();

  const items = SITE_CONFIG.entrenamientos.map((item) => {
    if (lang === "en") {
      switch (item.id) {
        case "ent-1":
          return {
            ...item,
            titulo: "Mass Redirection & Off-Balancing",
            descripcion: "Exploring movement physics without clashing against rigid incoming force.",
            categoria: "Movement",
          };
        case "ent-2":
          return {
            ...item,
            titulo: "Ground Flow & Tactical Rolling",
            descripcion: "Smooth transitions on the floor with biomechanical efficiency and zero joint impact.",
            categoria: "Floor",
          };
        case "ent-3":
          return {
            ...item,
            titulo: "Diaphragmatic Breathwork & Dissipation",
            descripcion: "Recalibrating the nervous system to maintain a calm pulse under stress or surprise.",
            categoria: "Breath",
          };
        case "ent-4":
          return {
            ...item,
            titulo: "Tactical Defense & Close Quarters",
            descripcion: "Relaxed sensory response, guiding the attack path without early muscular tension.",
            categoria: "Defense",
          };
        case "ent-5":
          return {
            ...item,
            titulo: "Real Terrain & Outdoor Practice",
            descripcion: "Outdoor workshops: safe falls and adaptation on uneven ground, earth, and natural slopes.",
            categoria: "Outdoor",
          };
        default:
          return item;
      }
    }
    return item;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === "Escape") {
        setActiveItemIndex(null);
      } else if (e.key === "ArrowLeft") {
        navigateLightbox(-1);
      } else if (e.key === "ArrowRight") {
        navigateLightbox(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItemIndex]);

  const navigateLightbox = (direction: number) => {
    if (activeItemIndex === null) return;
    const next = (activeItemIndex + direction + items.length) % items.length;
    setActiveItemIndex(next);
  };

  const currentItem = activeItemIndex !== null ? items[activeItemIndex] : null;

  return (
    <section id="entrenamientos" className="py-14 sm:py-20 bg-[#080807] text-[#F1EBDD] border-t border-[#A58A60]/15 relative overflow-hidden">
      
      {/* Luz ambiental sutil en CSS puro */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[250px] bg-[#A58A60]/5 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera Editorial */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#C2A87E] font-mono mb-2 font-semibold">
            <Camera className="w-4 h-4 text-[#A58A60]" />
            <span>{t("ent.kicker")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading">
            {t("ent.title")}
          </h2>
          <p className="text-sm sm:text-base text-[#EAE5D9] italic font-serif mt-1.5">
            {t("ent.quote")}
          </p>
        </div>

        {/* Grilla de 5 Tarjetas con SpotlightCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, idx) => {
            const hasMedia = Boolean(item.imagen);

            return (
              <SpotlightCard
                key={item.id}
                onClick={() => setActiveItemIndex(idx)}
                spotlightColor="rgba(194, 168, 126, 0.16)"
                borderColor="rgba(194, 168, 126, 0.55)"
                className="group relative bg-[#12110F] border border-[#A58A60]/25 hover:border-[#A58A60] rounded-sm overflow-hidden transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-xl card-specular-edge hover:shadow-[0_0_25px_rgba(165,138,96,0.3)] active:scale-[0.99]"
              >
                {hasMedia ? (
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#080807]">
                    <ImageWithFallback
                      src={item.imagen}
                      alt={item.titulo}
                      aspectRatioClass="aspect-[4/3]"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-90 contrast-105"
                      fallbackTitle={item.titulo}
                      fallbackSubtitle={`Systema HETS · ${item.categoria}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12110F] via-transparent to-transparent opacity-85 pointer-events-none" />

                    <div className="absolute top-2.5 right-2.5 p-2 rounded-sm bg-[#080807]/85 text-[#D8C7A5] border border-[#A58A60]/30 shadow-md backdrop-blur-xs group-hover:border-[#A58A60] transition-colors">
                      <Maximize2 className="w-3.5 h-3.5 text-[#A58A60] group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="absolute bottom-2.5 left-2.5">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#F59E0B] bg-[#080807]/90 px-2 py-0.5 border border-[#C05621]/50 rounded-xs backdrop-blur-xs shadow-[0_0_8px_rgba(192,86,33,0.25)] font-semibold">
                        {item.categoria}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 bg-[#12110F] border-b border-[#A58A60]/15 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F59E0B] bg-[#080807] px-2 py-0.5 border border-[#C05621]/50 rounded-xs font-semibold">
                      {item.categoria}
                    </span>
                    <Shield className="w-4 h-4 text-[#A58A60]/60" />
                  </div>
                )}

                <div className="p-4 bg-[#12110F]/90 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-heading uppercase tracking-wide text-[#F1EBDD] font-bold group-hover:text-[#C2A87E] transition-colors line-clamp-1">
                      {item.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C4BFB4] mt-1.5 leading-relaxed line-clamp-2">
                      {item.descripcion}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#A58A60]/15 flex items-center justify-between text-[10px] font-mono text-[#C2A87E]">
                    <span className="group-hover:text-[#F1EBDD] transition-colors">{t("ent.viewDetail")}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Modal Lightbox Editorial Ampliado */}
        {currentItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveItemIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-[#12110F] border border-[#A58A60]/50 rounded-sm overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-3 bg-[#080807] border-b border-[#A58A60]/20 flex items-center justify-between">
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-semibold">
                    Systema HETS · {currentItem.categoria}
                  </span>
                  <span className="text-[#C4BFB4] text-[11px]">
                    ({(activeItemIndex || 0) + 1}/{items.length})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveItemIndex(null)}
                  className="w-10 h-10 flex items-center justify-center text-[#C4BFB4] hover:text-white rounded-sm border border-[#A58A60]/30 bg-[#12110F] cursor-pointer"
                  aria-label="Cerrar visor"
                >
                  <X className="w-5 h-5 text-[#A58A60]" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
                <div className="md:col-span-7 relative bg-black flex items-center justify-center p-2 min-h-[220px] sm:min-h-[350px]">
                  {currentItem.imagen ? (
                    <ImageWithFallback
                      src={currentItem.imagen}
                      alt={currentItem.titulo}
                      aspectRatioClass="aspect-[4/3]"
                      className="max-h-[50vh] w-auto max-w-full object-contain"
                      fallbackTitle={currentItem.titulo}
                      fallbackSubtitle={`Systema HETS · ${currentItem.categoria}`}
                    />
                  ) : (
                    <div className="text-center p-6 text-[#C4BFB4]">
                      <Shield className="w-10 h-10 text-[#A58A60] mx-auto mb-2" />
                      <p className="text-xs font-mono">{t("ent.noMedia")}</p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => navigateLightbox(-1)}
                    className="absolute left-2 w-12 h-12 flex items-center justify-center rounded-full bg-[#080807]/85 text-[#F1EBDD] hover:bg-[#A58A60] hover:text-[#080807] border border-[#A58A60]/40 transition-colors shadow-lg cursor-pointer"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigateLightbox(1)}
                    className="absolute right-2 w-12 h-12 flex items-center justify-center rounded-full bg-[#080807]/85 text-[#F1EBDD] hover:bg-[#A58A60] hover:text-[#080807] border border-[#A58A60]/40 transition-colors shadow-lg cursor-pointer"
                    aria-label="Foto siguiente"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="md:col-span-5 p-5 sm:p-6 bg-[#12110F] flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#A58A60]/20 space-y-4">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C2A87E] block">
                      {t("ent.kicker")}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white font-heading">
                      {currentItem.titulo}
                    </h3>
                    <p className="text-sm text-[#EAE5D9] leading-relaxed">
                      {currentItem.descripcion}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#A58A60]/20 text-[11px] text-[#C4BFB4] font-mono flex items-center justify-between">
                    <span>{t("ent.keysNav")}</span>
                    <span>{t("ent.keysClose")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
