import { useState } from "react";
import { ArrowRight, X, Calendar, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function DiegoLedesma() {
  const [modalHistoriaOpen, setModalHistoriaOpen] = useState(false);
  const [portraitLoaded, setPortraitLoaded] = useState(false);
  const { lang, t } = useLanguage();

  // Hitos de la trayectoria formativa de 40 años
  // Con soporte de traducción inglés / español
  const hitos = SITE_CONFIG.trayectoriaDiego.map((hito) => {
    if (lang === "en") {
      switch (hito.anio) {
        case "40 Años":
          return {
            anio: "40 Years",
            descripcion: "Exploring how martial arts can transform the way we move, face challenges, and relate to one another.",
          };
        case "UNLP":
          return {
            anio: "UNLP",
            descripcion: "Physical Education Professor graduated from the National University of La Plata, with a postgrad in Emotional Education.",
          };
        case "ITF":
          return {
            anio: "ITF",
            descripcion: "Master VIII Dan in ITF Taekwon-Do. Secretary General and Director of the Inclusion Committee at ITF Integrity.",
          };
        case "RUS / CAN":
          return {
            anio: "RUS / CAN",
            descripcion: "International Systema Instructor trained in Argentina, Russia —Ryabko lineage—, and Canada —Vasiliev lineage—.",
          };
        case "HETS":
          return {
            anio: "HETS",
            descripcion: "Director of Systema HETS: uniting martial mastery, somatic movement, and human growth for daily life.",
          };
        case "2026":
          return {
            anio: "2026",
            descripcion: "Regular dojo sessions, personalized coaching, and intensive workshops in La Plata and Buenos Aires.",
          };
        default:
          return hito;
      }
    }
    return hito;
  });

  return (
    <section id="diego-ledesma" className="py-10 sm:py-20 bg-[#080807] text-[#F1EBDD] border-t border-[#A58A60]/15 relative overflow-hidden">
      
      {/* Luz ambiental sutil en CSS puro */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-[#A58A60]/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de sección con divisor editorial */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-5 sm:mb-12 flex items-center justify-between border-b border-[#A58A60]/20 pb-3 sm:pb-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.26em] text-[#C2A87E] font-semibold">
                {t("diego.kicker")}
              </span>
              <span className="hidden sm:inline-block w-8 h-[1px] bg-[#A58A60]/40" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C887E] tabular-nums">
              RYABKO · VASILIEV · HETS
            </span>
          </div>
        </ScrollReveal>

        {/* Grilla Editorial Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start">
          
          {/* Columna Izquierda: Biografía, Retrato Oficial y Filosofía */}
          <ScrollReveal direction="up" delay={80} distance={24} className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#C2A87E] font-semibold">
                <span>{t("diego.tag")}</span>
                <span className="text-[#A58A60]/60">·</span>
                <span className="text-[#8C887E]">40+ {lang === "en" ? "YEARS" : "AÑOS"}</span>
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading"
                style={{ textWrap: "balance" }}
              >
                {t("diego.name")}
              </h2>
            </div>

            {/* Bloque Retrato + Cita y Biografía: En móvil retrato compacto junto a la cita para evitar que la foto ocupe toda la pantalla */}
            <div className="grid grid-cols-12 gap-3.5 sm:gap-7 items-start pt-1">
              {/* Retrato Editorial Oficial de Diego Ledesma */}
              <div className="col-span-5 sm:col-span-5 relative group">
                <div className="relative rounded-sm overflow-hidden border border-[#A58A60]/40 group-hover:border-[#C2A87E] transition-all duration-300 shadow-2xl bg-[#12110F] card-specular-edge">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#080807]">
                    {!portraitLoaded && (
                      <div className="absolute inset-0 bg-[#12110F] animate-pulse flex flex-col items-center justify-center p-2 sm:p-4">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-[#A58A60]/30 flex items-center justify-center mb-1.5 shadow-[0_0_15px_rgba(165,138,96,0.15)]">
                          <span className="font-heading text-[10px] sm:text-xs font-bold text-[#A58A60]">HETS</span>
                        </div>
                      </div>
                    )}
                    <img
                      src={SITE_CONFIG.assets.diegoPortrait}
                      alt="Diego Martín Ledesma — Fundador e Instructor Internacional de Systema HETS"
                      className={`w-full h-full object-cover object-top filter brightness-[0.97] contrast-[1.03] group-hover:scale-105 transition-all duration-700 ease-out ${
                        portraitLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
                      }`}
                      loading="lazy"
                      width={480}
                      height={640}
                      onLoad={() => setPortraitLoaded(true)}
                      onError={(e) => {
                        setPortraitLoaded(true);
                        if (SITE_CONFIG.assets.diegoPortraitFallbackUrl) {
                          (e.target as HTMLImageElement).src = SITE_CONFIG.assets.diegoPortraitFallbackUrl;
                        }
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-[#080807] via-[#080807]/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Pie editorial del retrato con jerarquía Zero-Pill */}
                  <div className="p-2 sm:p-3.5 bg-[#080807]/95 border-t border-[#A58A60]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-[#F1EBDD] block truncate">
                        Diego M. Ledesma
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#C4BFB4] block truncate">
                        {lang === "en" ? "Head Instructor" : "Director & Fundador"}
                      </span>
                    </div>
                    <div className="sm:text-right flex sm:block items-center justify-between border-t sm:border-t-0 border-[#A58A60]/15 pt-1 sm:pt-0">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] text-[#C2A87E] font-bold block">
                        VIII DAN
                      </span>
                      <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-[#8C887E] block">
                        UNLP · HETS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha junto al retrato en móvil y tablet */}
              <div className="col-span-7 sm:col-span-7 space-y-3 sm:space-y-4">
                {/* Cita editorial enmarcada con filetes dorados finos */}
                <figure className="relative py-2.5 sm:py-4 px-3 sm:px-4 bg-[#12110F]/80 border-y border-[#A58A60]/35 card-specular-edge">
                  <span
                    aria-hidden="true"
                    className="hidden sm:block font-serif text-3xl text-[#A58A60]/30 leading-none select-none mb-1"
                  >
                    “
                  </span>
                  <blockquote className="text-xs sm:text-base text-[#F1EBDD] font-serif italic leading-snug sm:leading-relaxed">
                    {t("diego.quote")}
                  </blockquote>
                </figure>

                {/* Primer párrafo visible junto al retrato en desktop; en móvil se muestra fluido debajo */}
                <div className="hidden sm:block space-y-3 text-sm text-[#EAE5D9] leading-relaxed">
                  <p>{t("diego.p1")}</p>
                  <p>{t("diego.p2")}</p>
                </div>

                {/* En móvil mostramos el resumen principal al lado del retrato */}
                <p className="block sm:hidden text-xs text-[#EAE5D9] leading-relaxed">
                  {t("diego.p1")}
                </p>

                {/* Botón en desktop */}
                <div className="hidden sm:block pt-1.5">
                  <button
                    type="button"
                    onClick={() => setModalHistoriaOpen(true)}
                    className="w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#A58A60] via-[#C2A87E] to-[#A58A60] bg-[length:200%_auto] hover:bg-right rounded-sm transition-all duration-300 cursor-pointer shadow-lg shadow-[#A58A60]/20 min-h-[46px] active:scale-[0.98] group hover:shadow-[0_0_20px_rgba(165,138,96,0.35)]"
                  >
                    <span>{t("diego.btnHistory")}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Segundo párrafo y botón en móvil para aprovechar todo el ancho sin alargar la columna */}
            <div className="block sm:hidden space-y-3">
              <p className="text-xs text-[#C4BFB4] leading-relaxed">
                {t("diego.p2")}
              </p>
              <button
                type="button"
                onClick={() => setModalHistoriaOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#A58A60] via-[#C2A87E] to-[#A58A60] rounded-sm transition-all duration-300 cursor-pointer shadow-lg shadow-[#A58A60]/20 min-h-[46px] active:scale-[0.98] group"
              >
                <span>{t("diego.btnHistory")}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Perfil Multidisciplinario con filetes finos */}
            <div className="p-3.5 sm:p-5 bg-[#12110F] border border-[#A58A60]/25 hover:border-[#A58A60]/50 rounded-sm card-specular-edge transition-all duration-300">
              <div className="flex items-center justify-between border-b border-[#A58A60]/15 pb-2 mb-2.5 sm:pb-2.5 sm:mb-3">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2A87E] font-semibold">
                  {t("diego.profileTag")}
                </span>
                <span className="text-[10px] font-mono text-[#8C887E] uppercase tracking-widest">
                  01 — 03
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs text-[#EAE5D9]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A58A60] shrink-0 mt-0.5" />
                  <span>{t("diego.role1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A58A60] shrink-0 mt-0.5" />
                  <span>{t("diego.role2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A58A60] shrink-0 mt-0.5" />
                  <span>{t("diego.role3")}</span>
                </li>
              </ul>
            </div>

          </ScrollReveal>

          {/* Columna Derecha: Trayectoria Formativa (En celular grilla de 2 columnas ultra-compacta; en PC línea de tiempo vertical) */}
          <ScrollReveal direction="up" delay={140} distance={24} className="lg:col-span-5">
            <div className="p-4 sm:p-7 bg-[#12110F]/95 border border-[#A58A60]/35 rounded-sm shadow-2xl card-specular-edge backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C2A87E]/70 to-transparent" />
              <div
                aria-hidden="true"
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#A58A60]/8 rounded-full blur-2xl pointer-events-none"
              />

              <div className="flex items-center justify-between border-b border-[#A58A60]/20 pb-3 mb-3.5 sm:pb-3.5 sm:mb-5 relative z-10">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#C2A87E] font-semibold flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A58A60]" />
                  <span>{t("diego.timelineHeader")}</span>
                </span>
                <span className="text-[10px] text-[#C4BFB4] font-mono uppercase tracking-wider">{t("diego.timelineLoc")}</span>
              </div>

              {/* En móvil: Grilla compacta de 2 columnas (reduce a la mitad el alto en celular). En sm+: Línea de tiempo vertical clásica */}
              <div className="grid grid-cols-2 gap-2.5 sm:block sm:space-y-5 relative sm:pl-5 sm:before:content-[''] sm:before:absolute sm:before:left-1.5 sm:before:top-2 sm:before:bottom-2 sm:before:w-[1px] sm:before:bg-gradient-to-b sm:before:from-[#C2A87E] sm:via-[#A58A60]/40 sm:before:to-transparent z-10">
                {hitos.map((hito, idx) => (
                  <div
                    key={hito.anio}
                    className="relative group/item p-2.5 sm:p-0 rounded-xs bg-[#080807]/70 sm:bg-transparent border border-[#A58A60]/20 sm:border-0"
                  >
                    {/* Nodo de precisión en oro bruñido (visible en sm+) */}
                    <div className="hidden sm:block absolute -left-[18px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#080807] border border-[#C2A87E] group-hover/item:bg-[#C2A87E] group-hover/item:scale-125 shadow-[0_0_8px_rgba(194,168,126,0.45)] transition-all duration-300" />
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between border-b sm:border-b-0 border-[#A58A60]/15 pb-1 sm:pb-0">
                        <span className="text-xs sm:text-sm font-bold font-mono text-[#C2A87E] group-hover/item:text-[#F1EBDD] leading-none tracking-wider tabular-nums transition-colors">
                          {hito.anio}
                        </span>
                        <span className="text-[9px] font-mono text-[#8C887E]/60 tabular-nums">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-sm text-[#EAE5D9] leading-snug sm:leading-relaxed">
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

      {/* Modal Conocer su Historia */}
      {modalHistoriaOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setModalHistoriaOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-2xl w-full bg-[#12110F] border border-[#A58A60]/50 rounded-sm overflow-hidden shadow-2xl p-5 sm:p-7 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#A58A60]/20 pb-3 gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={SITE_CONFIG.assets.diegoPortrait}
                  alt="Diego Martín Ledesma"
                  className="w-12 h-12 rounded-full object-cover object-top border border-[#A58A60]/50 shrink-0 shadow-md"
                  width={48}
                  height={48}
                />
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#C2A87E] block truncate">
                    {t("diego.modalKicker")}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white font-heading truncate">
                    {t("diego.modalTitle")}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalHistoriaOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-[#C4BFB4] hover:text-white rounded-sm border border-[#A58A60]/30 bg-[#080807] cursor-pointer shrink-0"
                aria-label="Cerrar biografía"
              >
                <X className="w-5 h-5 text-[#A58A60]" />
              </button>
            </div>

            <div className="space-y-3.5 text-sm text-[#EAE5D9] leading-relaxed">
              <p>{t("diego.modalP1")}</p>
              <p>{t("diego.modalP2")}</p>
              <p>{t("diego.modalP3")}</p>
            </div>

            <div className="pt-3 border-t border-[#A58A60]/20 flex justify-end">
              <button
                type="button"
                onClick={() => setModalHistoriaOpen(false)}
                className="w-full sm:w-auto min-h-[48px] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F1EBDD] bg-[#080807] border border-[#A58A60]/50 hover:border-[#A58A60] rounded-sm transition-colors cursor-pointer"
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
