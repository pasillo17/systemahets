import { useState } from "react";
import { ArrowRight, X, Calendar, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

export function DiegoLedesma() {
  const [modalHistoriaOpen, setModalHistoriaOpen] = useState(false);
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
    <section id="diego-ledesma" className="py-14 sm:py-20 bg-[#080807] text-[#F1EBDD] border-t border-[#A58A60]/15 relative overflow-hidden">
      
      {/* Luz ambiental sutil en CSS puro */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-[#A58A60]/8 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de sección */}
        <div className="mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.24em] text-[#C2A87E] block mb-2 font-semibold">
            {t("diego.kicker")}
          </span>
          <div className="h-[1px] w-12 bg-[#A58A60]/40" />
        </div>

        {/* Grilla Editorial Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Columna Izquierda: Biografía, Retrato Oficial y Filosofía */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#F59E0B] bg-[#C05621]/15 border border-[#C05621]/40 shadow-[0_0_12px_rgba(217,119,6,0.2)] font-semibold mb-1">
                {t("diego.tag")}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading">
                {t("diego.name")}
              </h2>
            </div>

            {/* Bloque Retrato + Cita y Biografía */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-start pt-1">
              {/* Retrato Editorial Oficial de Diego Ledesma */}
              <div className="sm:col-span-5 relative group">
                <div className="relative rounded-sm overflow-hidden border border-[#A58A60]/40 group-hover:border-[#C2A87E] transition-all duration-300 shadow-2xl bg-[#12110F] card-specular-edge">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#080807]">
                    <img
                      src={SITE_CONFIG.assets.diegoPortrait}
                      alt="Diego Martín Ledesma — Fundador e Instructor Internacional de Systema HETS"
                      className="w-full h-full object-cover object-top filter brightness-[0.97] contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      width={480}
                      height={640}
                    />
                    {/* Gradiente sutil inferior */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080807] via-[#080807]/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Pie editorial del retrato */}
                  <div className="p-3 bg-[#080807]/95 border-t border-[#A58A60]/20 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#F1EBDD] block">
                        Diego M. Ledesma
                      </span>
                      <span className="text-[9px] font-mono text-[#C4BFB4]">
                        {lang === "en" ? "Head Instructor" : "Director & Fundador"}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#F59E0B] bg-[#C05621]/20 border border-[#C05621]/50 px-2 py-0.5 rounded-xs font-semibold shadow-[0_0_8px_rgba(217,119,6,0.2)]">
                      VIII Dan
                    </span>
                  </div>
                </div>
              </div>

              {/* Columna con Cita y Textos Biográficos */}
              <div className="sm:col-span-7 space-y-4">
                {/* Cita introductoria destacada en crema con borde dorado y resplandor sutil */}
                <blockquote className="text-sm sm:text-base text-[#F1EBDD] font-medium leading-relaxed border-l-2 border-[#A58A60] pl-3.5 py-1.5 bg-gradient-to-r from-[#A58A60]/15 via-[#A58A60]/5 to-transparent pr-3 rounded-r-xs card-specular-edge">
                  {t("diego.quote")}
                </blockquote>

                {/* Textos biográficos en tono crema (#EAE5D9) de alta legibilidad */}
                <div className="space-y-3 text-xs sm:text-sm text-[#EAE5D9] leading-relaxed">
                  <p>{t("diego.p1")}</p>
                  <p>{t("diego.p2")}</p>
                </div>

                {/* Botón de Acción Táctil (mínimo 48px) */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setModalHistoriaOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#A58A60] via-[#C2A87E] to-[#A58A60] bg-[length:200%_auto] hover:bg-right rounded-sm transition-all duration-300 cursor-pointer shadow-lg shadow-[#A58A60]/20 min-h-[46px] active:scale-[0.98] group hover:shadow-[0_0_20px_rgba(165,138,96,0.35)]"
                  >
                    <span>{t("diego.btnHistory")}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Perfil Multidisciplinario con resplandor */}
            <div className="p-4 bg-[#12110F] border border-[#A58A60]/25 hover:border-[#A58A60]/50 rounded-sm mt-4 card-specular-edge transition-all duration-300">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C2A87E] block mb-2 font-semibold">
                {t("diego.profileTag")}
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-[#EAE5D9]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A58A60] shrink-0" />
                  <span>{t("diego.role1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A58A60] shrink-0" />
                  <span>{t("diego.role2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A58A60] shrink-0" />
                  <span>{t("diego.role3")}</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Columna Derecha: Trayectoria Formativa Ampliada con Resplandor */}
          <div className="lg:col-span-5">
            <div className="p-5 sm:p-7 bg-[#12110F]/90 border border-[#A58A60]/35 rounded-sm shadow-2xl card-specular-edge backdrop-blur-sm relative overflow-hidden group">
              <div
                aria-hidden="true"
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#A58A60]/8 rounded-full blur-2xl pointer-events-none"
              />

              <div className="flex items-center justify-between border-b border-[#A58A60]/20 pb-3 mb-5 relative z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C2A87E] font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#A58A60]" />
                  <span>{t("diego.timelineHeader")}</span>
                </span>
                <span className="text-[10px] text-[#C4BFB4] font-mono">{t("diego.timelineLoc")}</span>
              </div>

              {/* Lista de hitos con nodos iluminados */}
              <div className="space-y-5 relative pl-5 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-[#C2A87E] via-[#A58A60]/50 before:to-transparent relative z-10">
                {hitos.map((hito) => (
                  <div key={hito.anio} className="relative group/item">
                    {/* Indicador de nodo con pulso de cobre fundido y ámbar */}
                    <div className="absolute -left-[19px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#C05621] group-hover/item:bg-[#F59E0B] group-hover/item:scale-125 shadow-[0_0_10px_rgba(245,158,11,0.85)] transition-all duration-300" />
                    
                    <div className="space-y-0.5">
                      <span className="text-sm font-bold font-mono text-[#F59E0B] group-hover/item:text-[#F1EBDD] leading-none block transition-colors">
                        {hito.anio}
                      </span>
                      <p className="text-xs sm:text-sm text-[#EAE5D9] leading-relaxed">
                        {hito.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
