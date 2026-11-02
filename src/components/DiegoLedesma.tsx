import { useState, useEffect } from "react";
import { ArrowRight, X, Calendar, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Sección Diego Ledesma sobre Arena Piedra (#E5DAC9) para dar amplitud
 * y arraigo pampeano, combinada con Terracota Pampeana (#B85332), Ocre Arcilla (#9C7340),
 * textos en Carbón de Quebracho (#231C18) y tarjeta de trayectoria en Adobe Tierra (#261E1A).
 */
export function DiegoLedesma() {
  const [modalHistoriaOpen, setModalHistoriaOpen] = useState(false);
  const [portraitLoaded, setPortraitLoaded] = useState(false);
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (modalHistoriaOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalHistoriaOpen]);

  const hitos = SITE_CONFIG.trayectoriaDiego.map((hito) => {
    if (lang === "en") {
      switch (hito.anio) {
        case "40 Años":
          return {
            anio: "40 Years",
            descripcion:
              "Exploring how martial arts can transform the way we move, face challenges, and relate to one another.",
          };
        case "UNLP":
          return {
            anio: "UNLP",
            descripcion:
              "Physical Education Professor graduated from the National University of La Plata, with a postgrad in Emotional Education.",
          };
        case "ITF":
          return {
            anio: "ITF",
            descripcion:
              "Master VIII Dan in ITF Taekwon-Do. Secretary General and Director of the Inclusion Committee at ITF Integrity.",
          };
        case "RUS / CAN":
          return {
            anio: "RUS / CAN",
            descripcion:
              "International Systema Instructor trained in Argentina, Russia —Ryabko lineage—, and Canada —Vasiliev lineage—.",
          };
        case "HETS":
          return {
            anio: "HETS",
            descripcion:
              "Director of Systema HETS: uniting martial mastery, somatic movement, and human growth for daily life.",
          };
        case "2026":
          return {
            anio: "2026",
            descripcion:
              "Regular dojo sessions, personalized coaching, and intensive workshops in La Plata and Buenos Aires.",
          };
        default:
          return hito;
      }
    }
    return hito;
  });

  return (
    <section
      id="diego-ledesma"
      className="py-10 sm:py-20 bg-flow-diego text-[#231C18] relative overflow-hidden"
    >
      {/* Luz ambiental sutil en Terracota y Ocre Arcilla */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#B85332]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-64 h-64 bg-[#9C7340]/12 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de sección con divisor editorial */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-5 sm:mb-12 flex items-center justify-between border-b border-[#C9B8A0] pb-3 sm:pb-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.26em] text-[#9E3E1E] font-bold">
                {t("diego.kicker")}
              </span>
              <span className="hidden sm:inline-block w-8 h-[2px] bg-[#9E3E1E]" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6E4B20] font-bold tabular-nums">
              RYABKO · VASILIEV · HETS
            </span>
          </div>
        </ScrollReveal>

        {/* Grilla Editorial Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start">
          {/* Columna Izquierda: Biografía, Retrato Oficial y Filosofía */}
          <ScrollReveal
            direction="up"
            delay={80}
            distance={24}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#9E3E1E] font-bold">
                <span>{t("diego.tag")}</span>
                <span className="text-[#4A3B32]" aria-hidden="true">·</span>
                <span className="text-[#6E4B20]">
                  40+ {lang === "en" ? "YEARS" : "AÑOS"}
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#231C18] font-heading"
                style={{ textWrap: "balance" }}
              >
                {t("diego.name")}
              </h2>
            </div>

            {/* Bloque Retrato + Cita y Biografía */}
            <div className="grid grid-cols-12 gap-3.5 sm:gap-7 items-start pt-1">
              {/* Retrato Editorial Oficial de Diego Ledesma (Marco en Tierra Sombra #1F1916 con borde Ocre Arcilla) */}
              <div className="col-span-5 sm:col-span-5 relative group">
                <div className="relative rounded-sm overflow-hidden border-2 border-[#C49A64]/65 group-hover:border-[#B85332] transition-all duration-300 shadow-xl bg-[#1F1916]">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#1F1916]">
                    {!portraitLoaded && (
                      <div className="absolute inset-0 bg-[#2A211C] animate-pulse flex flex-col items-center justify-center p-2 sm:p-4">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-[#C49A64]/50 flex items-center justify-center mb-1.5">
                          <span className="font-heading text-[10px] sm:text-xs font-bold text-[#C86442]">
                            HETS
                          </span>
                        </div>
                      </div>
                    )}
                    <img
                      src={SITE_CONFIG.assets.diegoPortrait}
                      alt="Diego Martín Ledesma — Fundador e Instructor Internacional de Systema HETS"
                      className={`w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.04] group-hover:scale-105 transition-all duration-700 ease-out ${
                        portraitLoaded
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-[1.02]"
                      }`}
                      loading="lazy"
                      width={480}
                      height={640}
                      onLoad={() => setPortraitLoaded(true)}
                      onError={(e) => {
                        setPortraitLoaded(true);
                        if (SITE_CONFIG.assets.diegoPortraitFallbackUrl) {
                          (e.target as HTMLImageElement).src =
                            SITE_CONFIG.assets.diegoPortraitFallbackUrl;
                        }
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-[#1F1916] via-[#1F1916]/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Pie editorial del retrato */}
                  <div className="p-2 sm:p-3.5 bg-[#1F1916] border-t border-[#C49A64]/45 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-[#F4EDE2] block leading-snug">
                        Diego M. Ledesma
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#C4B5A3] block leading-snug">
                        {lang === "en" ? "Head Instructor" : "Director & Fundador"}
                      </span>
                    </div>
                    <div className="sm:text-right flex sm:block items-center justify-between border-t sm:border-t-0 border-[#C4B5A3]/25 pt-1 sm:pt-0">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] text-[#C86442] font-bold block">
                        VIII DAN
                      </span>
                      <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-[#C49A64] block">
                        UNLP · HETS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha junto al retrato */}
              <div className="col-span-7 sm:col-span-7 space-y-3 sm:space-y-4">
                {/* Cita editorial enmarcada en Hueso Pergamino con borde Terracota */}
                <figure className="relative py-2.5 sm:py-4 px-3 sm:px-4 bg-[#F8F3EB] border-y-2 border-[#B85332] shadow-sm">
                  <span
                    aria-hidden="true"
                    className="hidden sm:block font-serif text-3xl text-[#B85332]/70 leading-none select-none mb-1"
                  >
                    “
                  </span>
                  <blockquote className="text-xs sm:text-base text-[#231C18] font-serif italic font-medium leading-snug sm:leading-relaxed">
                    {t("diego.quote")}
                  </blockquote>
                </figure>

                <div className="hidden sm:block space-y-3 text-sm text-[#362B24] leading-relaxed">
                  <p className="text-[#231C18] font-medium">{t("diego.p1")}</p>
                  <p>{t("diego.p2")}</p>
                </div>

                <p className="block sm:hidden text-xs text-[#231C18] font-medium leading-relaxed">
                  {t("diego.p1")}
                </p>

                {/* Botón en desktop */}
                <div className="hidden sm:block pt-1.5">
                  <button
                    type="button"
                    onClick={() => setModalHistoriaOpen(true)}
                    className="btn-shimmer-lightning w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-[#F4EDE2] rounded-sm transition-all duration-300 cursor-pointer shadow-md shadow-[#B85332]/25 min-h-[46px] active:scale-[0.98] group whitespace-normal sm:whitespace-nowrap text-center leading-snug"
                  >
                    <span>{t("diego.btnHistory")}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Segundo párrafo y botón en móvil */}
            <div className="block sm:hidden space-y-3">
              <p className="text-xs text-[#362B24] leading-relaxed">
                {t("diego.p2")}
              </p>
              <button
                type="button"
                onClick={() => setModalHistoriaOpen(true)}
                className="btn-shimmer-lightning w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-[#F4EDE2] rounded-sm transition-all duration-300 cursor-pointer shadow-md min-h-[48px] h-auto active:scale-[0.98] group whitespace-normal text-center leading-snug"
              >
                <span>{t("diego.btnHistory")}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Perfil Multidisciplinario */}
            <div className="p-3.5 sm:p-5 bg-[#F8F3EB] border border-[#D6C8B4] hover:border-[#B85332] rounded-sm card-light-steel-elevation transition-all duration-300">
              <div className="flex items-center justify-between border-b border-[#D6C8B4] pb-2 mb-2.5 sm:pb-2.5 sm:mb-3">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#9E3E1E] font-bold">
                  {t("diego.profileTag")}
                </span>
                <span className="text-[10px] font-mono text-[#4A3B32] font-bold uppercase tracking-widest">
                  01 — 03
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs text-[#231C18] font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B85332] shrink-0 mt-0.5" />
                  <span>{t("diego.role1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B85332] shrink-0 mt-0.5" />
                  <span>{t("diego.role2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B85332] shrink-0 mt-0.5" />
                  <span>{t("diego.role3")}</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Columna Derecha: Trayectoria Formativa en tarjeta Adobe Tierra (#261E1A) con Terracota y Ocre Arcilla */}
          <ScrollReveal
            direction="up"
            delay={140}
            distance={24}
            className="lg:col-span-5 relative"
          >
            {/* Halo envolvente de transición entre el marrón tierra de la tarjeta y el blanco hueso/arena del fondo */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 sm:-inset-5 bg-gradient-to-b from-[#8C725E]/28 via-[#B85332]/18 to-[#8C725E]/28 rounded-md blur-xl pointer-events-none"
            />
            <div className="p-4 sm:p-7 bg-[#261E1A] text-[#F4EDE2] border-2 border-[#C49A64]/65 rounded-sm earth-block-transition-glow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332]" />
              <div
                aria-hidden="true"
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#B85332]/16 rounded-full blur-2xl pointer-events-none"
              />

              <div className="flex items-center justify-between border-b border-[#C4B5A3]/25 pb-3 mb-3.5 sm:pb-3.5 sm:mb-5 relative z-10">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#C86442] font-bold flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C49A64]" />
                  <span>{t("diego.timelineHeader")}</span>
                </span>
                <span className="text-[10px] text-[#C49A64] font-mono uppercase tracking-wider font-semibold">
                  {t("diego.timelineLoc")}
                </span>
              </div>

              {/* En móvil: Grilla compacta de 2 columnas. En sm+: Línea de tiempo vertical */}
              <div className="grid grid-cols-2 gap-2.5 sm:block sm:space-y-5 relative sm:pl-5 sm:before:content-[''] sm:before:absolute sm:before:left-1.5 sm:before:top-2 sm:before:bottom-2 sm:before:w-[2px] sm:before:bg-gradient-to-b sm:before:from-[#C86442] sm:via-[#C49A64] sm:before:to-transparent z-10">
                {hitos.map((hito, idx) => (
                  <div
                    key={hito.anio}
                    className="relative group/item p-2.5 sm:p-0 rounded-xs bg-[#322721] sm:bg-transparent border border-[#C49A64]/35 sm:border-0"
                  >
                    {/* Nodo de precisión en Terracota (visible en sm+) */}
                    <div className="hidden sm:block absolute -left-[19px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#261E1A] border-2 border-[#C86442] group-hover/item:bg-[#C86442] group-hover/item:border-[#C49A64] group-hover/item:scale-125 shadow-[0_0_10px_rgba(200,100,66,0.75)] transition-all duration-300" />

                    <div className="space-y-1">
                      <div className="flex items-center justify-between border-b sm:border-b-0 border-[#C4B5A3]/25 pb-1 sm:pb-0">
                        <span className="text-xs sm:text-sm font-bold font-mono text-[#DF7E5B] group-hover/item:text-[#C49A64] leading-none tracking-wider tabular-nums transition-colors">
                          {hito.anio}
                        </span>
                        <span className="text-[9px] font-mono text-[#C49A64]/85 tabular-nums">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-sm text-[#C4B5A3] leading-snug sm:leading-relaxed">
                        {hito.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Modal Conocer su Historia — Ventana a pantalla completa en celular con scroll cómodo y cierre fijo */}
      {modalHistoriaOpen && (
        <div
          className="fixed inset-0 z-[120] bg-[#171210]/95 backdrop-blur-md flex items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setModalHistoriaOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t("diego.modalTitle")}
        >
          <div
            className="relative w-full h-full sm:h-auto sm:max-h-[90vh] max-w-2xl bg-[#261E1A] text-[#F4EDE2] sm:border border-[#C49A64]/55 sm:rounded-sm overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera Fija del Modal (sin truncar títulos en celular) */}
            <div className="shrink-0 p-4 sm:p-6 pt-[calc(1rem+env(safe-area-inset-top,0px))] sm:pt-6 bg-[#1F1916] border-b border-[#C49A64]/35 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={SITE_CONFIG.assets.diegoPortrait}
                  alt="Diego Martín Ledesma"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover object-top border-2 border-[#C86442]/80 shrink-0 shadow-md"
                  width={56}
                  height={56}
                />
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#C86442] block leading-snug">
                    {t("diego.modalKicker")}
                  </span>
                  <h3 className="text-sm sm:text-lg font-bold uppercase tracking-wide text-[#F4EDE2] font-heading leading-tight mt-0.5">
                    {t("diego.modalTitle")}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalHistoriaOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-[#C4B5A3] hover:text-[#F4EDE2] rounded-sm border border-[#C49A64]/55 bg-[#2A211C] cursor-pointer shrink-0"
                aria-label="Cerrar biografía"
              >
                <X className="w-5 h-5 text-[#C86442]" />
              </button>
            </div>

            {/* Cuerpo Central con Scroll Cómodo y Fluido */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7 space-y-4 text-sm sm:text-base text-[#F4EDE2] leading-relaxed">
              <p className="text-[#F4EDE2] font-medium leading-relaxed">
                {t("diego.modalP1")}
              </p>
              <p className="text-[#E5DAC9] leading-relaxed">
                {t("diego.modalP2")}
              </p>
              <p className="text-[#F4EDE2] leading-relaxed">
                {t("diego.modalP3")}
              </p>
            </div>

            {/* Pie Fijo con Botón de Cierre Cómodo */}
            <div className="shrink-0 p-4 sm:px-7 sm:py-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:pb-4 bg-[#1F1916] border-t border-[#C49A64]/35 flex justify-end">
              <button
                type="button"
                onClick={() => setModalHistoriaOpen(false)}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#F4EDE2] bg-[#B85332] hover:bg-[#C86442] border border-[#DF7E5B]/60 rounded-sm transition-colors cursor-pointer shadow-md"
              >
                {t("diego.modalClose")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
