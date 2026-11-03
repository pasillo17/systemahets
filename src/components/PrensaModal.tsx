import { useState, useEffect } from "react";
import { X, Radio, Mic, Tv, Newspaper, ExternalLink, Play } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

export type PrensaCategory = "todas" | "radio" | "streaming" | "tv" | "escrita";

interface PrensaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrensaModal({ isOpen, onClose }: PrensaModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<PrensaCategory>("todas");
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories: {
    id: PrensaCategory;
    label: string;
    icon?: typeof Radio;
  }[] = [
    { id: "todas", label: t("prensa.filterAll") },
    { id: "radio", label: t("prensa.filterRadio"), icon: Radio },
    { id: "streaming", label: t("prensa.filterStreaming"), icon: Mic },
    { id: "tv", label: t("prensa.filterTv"), icon: Tv },
    { id: "escrita", label: t("prensa.filterEscrita"), icon: Newspaper },
  ];

  const items = SITE_CONFIG.prensa.filter((item) => {
    if (selectedCategory === "todas") return true;
    if ("categorias" in item && Array.isArray(item.categorias)) {
      return item.categorias.includes(selectedCategory);
    }
    return item.categoria === selectedCategory;
  });

  const getCategoryIcon = (cat: "radio" | "streaming" | "tv" | "escrita") => {
    switch (cat) {
      case "radio":
        return Radio;
      case "streaming":
        return Mic;
      case "tv":
        return Tv;
      case "escrita":
        return Newspaper;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[130] bg-[#110D0A]/95 backdrop-blur-md flex items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t("prensa.title")}
    >
      <div
        className="relative w-full h-full sm:h-auto sm:max-h-[90vh] max-w-4xl bg-[#1B140F] sm:border border-[#D97736]/35 sm:rounded-sm overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Filete superior en Naranja Terracota y Dorado */}
        <div
          aria-hidden="true"
          className="h-[3px] w-full bg-gradient-to-r from-[#D97736] via-[#D4AF37] to-[#C5A059] shrink-0"
        />

        {/* Cabecera fija */}
        <div className="shrink-0 p-4 sm:p-6 pt-[calc(1rem+env(safe-area-inset-top,0px))] sm:pt-6 bg-[#110D0A] border-b border-[#D97736]/30 flex items-start justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-[#F5EFE6] font-heading leading-tight">
              {t("prensa.title")}
            </h2>
            <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed">
              {t("prensa.subtitle")}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-[#B8A99A] hover:text-[#F5EFE6] rounded-sm border border-[#D97736]/30 bg-[#1B140F] cursor-pointer shrink-0 transition-colors"
            aria-label={t("prensa.close")}
          >
            <X className="w-5 h-5 text-[#D97736]" />
          </button>
        </div>

        {/* Barra de Filtros Interactivos por Categoría (Radio, Streaming, TV, Escritas) */}
        <div className="shrink-0 px-4 sm:px-6 py-3 bg-[#110D0A]/75 border-b border-[#D97736]/25 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xs text-xs font-heading uppercase tracking-wider inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 min-h-[38px] ${
                    isActive
                      ? "bg-[#D97736] text-[#110D0A] font-bold shadow-[0_0_14px_rgba(217,119,54,0.35)]"
                      : "bg-[#1B140F] text-[#B8A99A] hover:text-[#F5EFE6] border border-[#D97736]/25 hover:border-[#D97736]/60"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? "text-[#110D0A]" : "text-[#D97736]"
                      }`}
                    />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lista de Notas de Prensa en las 4 categorías */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {items.map((item) => {
              const Icon = getCategoryIcon(item.categoria);
              const catLabel =
                lang === "en" ? item.categoriaLabelEn : item.categoriaLabel;
              const medio = lang === "en" ? item.medioEn : item.medio;
              const titulo = lang === "en" ? item.tituloEn : item.titulo;
              const descripcion =
                lang === "en" ? item.descripcionEn : item.descripcion;
              const formato = lang === "en" ? item.formatoEn : item.formato;
              const hasYoutube = "youtubeId" in item && Boolean(item.youtubeId);
              const startSec =
                "startSeconds" in item && typeof item.startSeconds === "number"
                  ? item.startSeconds
                  : 0;

              return (
                <article
                  key={item.id}
                  className={`p-4 sm:p-5 rounded-sm bg-[#110D0A] border border-[#D97736]/35 hover:border-[#D4AF37]/70 transition-all duration-300 flex flex-col justify-between gap-4 group ${
                    hasYoutube ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="space-y-3">
                    {/* Metadatos limpios sin cápsulas */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#D97736] font-medium">
                      <Icon className="w-3.5 h-3.5 shrink-0 text-[#D97736]" />
                      <span className="uppercase font-heading tracking-wider font-bold text-[#D4AF37]">
                        {catLabel}
                      </span>
                      <span aria-hidden="true" className="text-[#B8A99A]/50">
                        ·
                      </span>
                      <span className="text-[#B8A99A]">{formato}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base sm:text-xl font-heading font-bold uppercase tracking-wide text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {titulo}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#C5A059] font-sans font-medium">
                        {medio}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed font-normal">
                      {descripcion}
                    </p>

                    {/* Reproductor embebido directo en la página iniciando en el minuto 40 (start=2400) */}
                    {hasYoutube && "youtubeId" in item && (
                      <div className="pt-1">
                        <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-[#D97736]/40 bg-[#0A0705] shadow-lg">
                          <iframe
                            src={`https://www.youtube.com/embed/${item.youtubeId}?start=${startSec}&rel=0`}
                            title={titulo}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-[#D97736]/20 flex flex-wrap items-center justify-between gap-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#D97736] hover:text-[#D4AF37] transition-colors"
                    >
                      {hasYoutube ? (
                        <Play className="w-3.5 h-3.5 shrink-0 fill-current" />
                      ) : null}
                      <span>
                        {hasYoutube ? t("prensa.openYoutube") : t("prensa.btnOpen")}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Pie fijo del modal */}
        <div className="shrink-0 p-4 sm:px-6 sm:py-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:pb-4 bg-[#110D0A] border-t border-[#D97736]/30 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn-shimmer-lightning w-full sm:w-auto min-h-[46px] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#110D0A] bg-[#D97736] hover:bg-[#D4AF37] rounded-sm transition-colors cursor-pointer"
          >
            {t("prensa.close")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrensaModal;
