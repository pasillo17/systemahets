import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Radio,
  Mic,
  Tv,
  Newspaper,
  ExternalLink,
  Play,
  Maximize2,
  Minimize2,
  X,
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export type PrensaCategory = "todas" | "radio" | "streaming" | "tv" | "escrita";

interface PrensaProps {
  onBackHome: () => void;
}

interface ExpandedVideoState {
  youtubeId: string;
  startSeconds: number;
  titulo: string;
  medio: string;
  url: string;
}

/**
 * APARTADO EXCLUSIVO DE PRENSA (Pantalla aparte fuera de la página inicial):
 * Presenta las notas y entrevistas de Systema HETS en Radio, Streaming, TV y Prensa Escrita,
 * con reproductor de video integrado y modo de Pantalla Grande directo en nuestra web.
 */
export function Prensa({ onBackHome }: PrensaProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<PrensaCategory>("todas");
  const [expandedVideo, setExpandedVideo] =
    useState<ExpandedVideoState | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (!expandedVideo) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpandedVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedVideo]);

  const handleReturnHome = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    onBackHome();
  };

  const allCategories: {
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

  // Mostrar únicamente las categorías que tienen notas reales cargadas
  const categories = allCategories.filter((cat) => {
    if (cat.id === "todas") return true;
    return SITE_CONFIG.prensa.some((item) =>
      "categorias" in item && Array.isArray(item.categorias)
        ? item.categorias.includes(cat.id as "radio" | "streaming" | "tv" | "escrita")
        : item.categoria === cat.id
    );
  });

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
    <div className="w-full min-h-screen overflow-x-hidden bg-[#110D0A] text-[#F5EFE6]">
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#110D0A] overflow-hidden">
        {/* Halos ambientales sutiles en Naranja Terracota y Dorado */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[460px] h-72 sm:h-[460px] bg-[#D97736]/14 rounded-full blur-[90px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-72 sm:w-[420px] h-72 sm:h-[420px] bg-[#D4AF37]/12 rounded-full blur-[90px] pointer-events-none"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Barra superior de retorno a la página inicial */}
          <ScrollReveal direction="up" distance={16}>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 sm:mb-8 border-b border-[#D97736]/30">
              <button
                type="button"
                onClick={handleReturnHome}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F5EFE6] hover:text-[#D4AF37] bg-[#1B140F] border border-[#D97736]/30 hover:border-[#D97736] px-3.5 py-2 rounded-sm transition-colors cursor-pointer min-h-[42px]"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#D97736]" />
                <span>
                  {isEn ? "Back to Home Page" : "Volver a la página inicial"}
                </span>
              </button>
            </div>
          </ScrollReveal>

          {/* Encabezado Principal de la sección Prensa */}
          <ScrollReveal direction="up" delay={40} distance={20}>
            <div className="relative space-y-3 mb-7 sm:mb-9">
              <span
                aria-hidden="true"
                className="hidden lg:block absolute -top-4 right-0 font-heading font-black uppercase tracking-[0.22em] text-7xl text-[#D97736]/[0.06] select-none pointer-events-none whitespace-nowrap"
              >
                PRENSA HETS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F5EFE6] font-heading leading-none glow-text-subtle">
                {t("prensa.title")}
              </h1>
              <div
                aria-hidden="true"
                className="h-[3px] w-20 bg-gradient-to-r from-[#D97736] via-[#D4AF37] to-[#C5A059]"
              />
              <p className="text-sm sm:text-base text-[#B8A99A] max-w-3xl leading-relaxed pt-1">
                {t("prensa.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          {/* Barra de Filtros Interactivos por Categoría */}
          <ScrollReveal direction="up" delay={70} distance={20}>
            <div className="mb-8 pb-4 border-b border-[#D97736]/25 overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-2.5 min-w-max">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2.5 rounded-xs text-xs font-heading uppercase tracking-wider inline-flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shrink-0 min-h-[42px] ${
                        isActive
                          ? "bg-[#D97736] text-[#110D0A] font-bold shadow-[0_0_16px_rgba(217,119,54,0.38)]"
                          : "bg-[#1B140F] text-[#B8A99A] hover:text-[#F5EFE6] border border-[#D97736]/30 hover:border-[#D97736]/70"
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
          </ScrollReveal>

          {/* Grilla de Notas Reales y Reproductores de Video */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
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
                  className={`relative p-5 sm:p-7 rounded-sm bg-[#1B140F] border border-[#D97736]/35 hover:border-[#D4AF37]/70 transition-all duration-300 flex flex-col justify-between gap-5 shadow-xl group overflow-hidden ${
                    !hasYoutube ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D97736] via-[#D4AF37] to-[#C5A059]"
                  />

                  <div className="space-y-4">
                    {/* Metadatos editoriales limpios */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#D97736] font-medium">
                      <Icon className="w-4 h-4 shrink-0 text-[#D97736]" />
                      <span className="uppercase font-heading tracking-wider font-bold text-[#D4AF37]">
                        {catLabel}
                      </span>
                      <span aria-hidden="true" className="text-[#B8A99A]/50">
                        ·
                      </span>
                      <span className="text-[#B8A99A]">{formato}</span>
                    </div>

                    <div className="space-y-2 pl-3.5 sm:pl-4 border-l-[3px] border-[#D97736] py-0.5">
                      <h2 className="text-xl sm:text-2xl lg:text-[26px] font-heading font-bold uppercase tracking-tight text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors leading-tight glow-text-subtle">
                        {titulo}
                      </h2>
                      <p className="text-xs sm:text-sm font-heading uppercase tracking-wider text-[#D4AF37] font-bold">
                        {medio}
                      </p>
                    </div>

                    <p className="text-xs sm:text-base text-[#B8A99A] leading-relaxed font-normal max-w-4xl">
                      {descripcion}
                    </p>

                    {/* Reproductor de YouTube con marco desplazado en Naranja Terracota */}
                    {hasYoutube && "youtubeId" in item && item.youtubeId && (
                      <div className="pt-2 pl-2 pb-2 sm:pl-3 sm:pb-3 relative">
                        <div
                          aria-hidden="true"
                          className="absolute left-0 bottom-0 w-[85%] h-[85%] bg-gradient-to-tr from-[#D97736] to-[#C5A059] rounded-xs pointer-events-none"
                        />
                        <div className="relative z-10 w-full aspect-video rounded-xs overflow-hidden border border-[#D97736]/45 bg-[#0A0705] shadow-2xl">
                          <iframe
                            src={`https://www.youtube.com/embed/${item.youtubeId}?start=${startSec}&rel=0&fs=1`}
                            title={titulo}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#D97736]/25 flex flex-wrap items-center justify-between gap-3">
                    {hasYoutube && "youtubeId" in item && item.youtubeId ? (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedVideo({
                            youtubeId: item.youtubeId!,
                            startSeconds: startSec,
                            titulo,
                            medio,
                            url: item.url,
                          })
                        }
                        className="btn-secondary-gold inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#110D0A] hover:bg-[#D97736] text-xs font-heading font-bold uppercase tracking-wider text-[#F5EFE6] hover:text-[#110D0A] transition-all cursor-pointer min-h-[38px] group/btn"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#D97736] group-hover/btn:text-[#110D0A] transition-colors" />
                        <span>
                          {isEn
                            ? "Watch on Large Screen"
                            : "Ver en pantalla grande"}
                        </span>
                      </button>
                    ) : null}

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#D97736] hover:text-[#D4AF37] transition-colors"
                    >
                      {hasYoutube ? (
                        <Play className="w-3.5 h-3.5 shrink-0 fill-current" />
                      ) : null}
                      <span>
                        {hasYoutube
                          ? isEn
                            ? "Watch on YouTube"
                            : "Ver en YouTube"
                          : t("prensa.btnOpen")}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODO PANTALLA GRANDE (CINE) DESDE NUESTRA WEB */}
      {expandedVideo && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[150] bg-[#0A0705]/98 backdrop-blur-lg flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={expandedVideo.titulo}
          onClick={() => setExpandedVideo(null)}
        >
          {/* Barra superior de Pantalla Grande */}
          <div
            className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4 pb-3 border-b border-[#D97736]/30 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0">
              <h3 className="text-sm sm:text-lg font-heading font-bold uppercase tracking-wide text-[#F5EFE6] truncate">
                {expandedVideo.titulo}
              </h3>
              <p className="text-xs text-[#C5A059] truncate">
                {expandedVideo.medio}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setExpandedVideo(null)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-[#D97736] hover:bg-[#D4AF37] text-xs font-heading font-bold uppercase tracking-wider text-[#110D0A] transition-colors cursor-pointer min-h-[40px]"
                aria-label={isEn ? "Close large screen" : "Cerrar pantalla grande"}
              >
                <Minimize2 className="w-3.5 h-3.5" />
                <span>{isEn ? "Close" : "Cerrar"}</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Reproductor Ampliado en Pantalla Grande */}
          <div
            className="flex-1 w-full max-w-7xl mx-auto my-3 flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[82vh] aspect-video rounded-sm overflow-hidden border border-[#D97736]/50 bg-black shadow-[0_0_50px_rgba(0,0,0,0.95)]">
              <iframe
                src={`https://www.youtube.com/embed/${expandedVideo.youtubeId}?start=${expandedVideo.startSeconds}&autoplay=1&rel=0&fs=1`}
                title={expandedVideo.titulo}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Barra inferior con enlace opcional a YouTube */}
          <div
            className="w-full max-w-7xl mx-auto pt-2 border-t border-[#D97736]/20 flex items-center justify-between text-xs text-[#B8A99A] shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <span>
              {isEn
                ? "Press ESC to exit large screen"
                : "Presioná ESC para salir de pantalla grande"}
            </span>
            <a
              href={expandedVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-heading uppercase tracking-wider text-[#D97736] hover:text-[#D4AF37]"
            >
              <span>{isEn ? "Open on YouTube" : "Abrir en YouTube"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Prensa;
