import { useState, useEffect } from "react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Sección Diego Ledesma:
 * Diseño de autor sin etiquetas superiores (eyebrow tags), sin numeración tipo dashboard
 * y con "Trayectoria Formativa" rediseñada como una lista editorial limpia separada por border-bottom finos.
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
              "Practicing and teaching martial arts as a practical tool for movement, health, and daily life.",
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
              "International Systema Instructor trained directly in Argentina, Russia (Ryabko), and Canada (Vasiliev).",
          };
        case "HETS":
          return {
            anio: "HETS",
            descripcion:
              "Director of Systema HETS in La Plata: bringing practical self-protection and physical conditioning to everyone.",
          };
        case "2026":
          return {
            anio: "La Plata",
            descripcion:
              "Regular classes Monday through Friday, personalized one-on-one sessions, and intensive weekend seminars.",
          };
        default:
          return hito;
      }
    }
    if (hito.anio === "2026") {
      return {
        anio: "Actualidad",
        descripcion:
          "Clases regulares de lunes a viernes en La Plata, entrenamientos personalizados y seminarios intensivos.",
      };
    }
    return hito;
  });

  return (
    <section
      id="diego-ledesma"
      className="py-12 sm:py-20 bg-flow-diego text-[#F4EDE2] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Grilla Editorial Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Columna Izquierda: Biografía y Retrato Oficial */}
          <ScrollReveal
            direction="up"
            delay={80}
            distance={24}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading"
              style={{ textWrap: "balance" }}
            >
              {t("diego.name")}
            </h2>

            {/* Bloque Retrato + Biografía */}
            <div className="grid grid-cols-12 gap-4 sm:gap-7 items-start">
              {/* Retrato Oficial de Diego Ledesma */}
              <div className="col-span-5 sm:col-span-5 relative group">
                <div className="relative rounded-sm overflow-hidden border border-[#C49A64]/50 bg-[#1F1916]">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#1F1916]">
                    {!portraitLoaded && (
                      <div className="absolute inset-0 bg-[#2A211C] animate-pulse" />
                    )}
                    <img
                      src={SITE_CONFIG.assets.diegoPortrait}
                      alt="Diego Martín Ledesma — Director de Systema HETS en La Plata"
                      className={`w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.04] transition-all duration-700 ease-out ${
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
                  </div>

                  {/* Pie sobrio del retrato */}
                  <div className="p-2.5 sm:p-3 bg-[#1F1916] border-t border-[#C49A64]/30">
                    <span className="text-xs font-heading font-bold uppercase tracking-wide text-[#F4EDE2] block leading-snug">
                      Diego M. Ledesma
                    </span>
                    <span className="text-[11px] text-[#C4B5A3] block leading-snug">
                      {lang === "en" ? "Director · Systema HETS" : "Director de Systema HETS"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Columna derecha junto al retrato (sin comillas ni cursiva forzada) */}
              <div className="col-span-7 sm:col-span-7 space-y-3.5 sm:space-y-4">
                <p className="text-xs sm:text-base text-[#F4EDE2] font-medium leading-relaxed pl-3.5 sm:pl-4 border-l-2 border-[#C86442]">
                  {t("diego.quote")}
                </p>

                <div className="hidden sm:block space-y-3 text-sm text-[#C4B5A3] leading-relaxed">
                  <p className="text-[#F4EDE2]/95">{t("diego.p1")}</p>
                  <p>{t("diego.p2")}</p>
                </div>

                <p className="block sm:hidden text-xs text-[#C4B5A3] leading-relaxed">
                  {t("diego.p1")}
                </p>

                {/* Botón en desktop */}
                <div className="hidden sm:block pt-1">
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
              <p className="text-xs text-[#C4B5A3] leading-relaxed">
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

            {/* Credenciales abiertas sin eyebrow tag ni numeración "01 — 03" */}
            <div className="pt-4 sm:pt-5 border-t border-[#C49A64]/25">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-[#F4EDE2]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DF7E5B] shrink-0 mt-0.5" />
                  <span>{t("diego.role1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DF7E5B] shrink-0 mt-0.5" />
                  <span>{t("diego.role2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DF7E5B] shrink-0 mt-0.5" />
                  <span>{t("diego.role3")}</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Columna Derecha: Trayectoria Formativa como lista editorial limpia separada por border-bottom finos (sin encerrar en rectángulos) */}
          <ScrollReveal
            direction="up"
            delay={140}
            distance={24}
            className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#C49A64]/25"
          >
            <div className="space-y-4">
              <div className="border-b border-[#C49A64]/35 pb-3">
                <h3 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wide text-[#F4EDE2]">
                  {t("diego.timelineHeader")}
                </h3>
              </div>

              <div className="divide-y divide-[#C49A64]/20">
                {hitos.map((hito) => (
                  <div
                    key={hito.anio}
                    className="py-3.5 first:pt-1 last:pb-1 grid grid-cols-12 gap-3 items-baseline"
                  >
                    <span className="col-span-4 sm:col-span-3 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#DF7E5B]">
                      {hito.anio}
                    </span>
                    <p className="col-span-8 sm:col-span-9 text-xs sm:text-sm text-[#C4B5A3] leading-relaxed">
                      {hito.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Modal Biografía Completa */}
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
            <div className="shrink-0 p-4 sm:p-6 pt-[calc(1rem+env(safe-area-inset-top,0px))] sm:pt-6 bg-[#1F1916] border-b border-[#C49A64]/35 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={SITE_CONFIG.assets.diegoPortrait}
                  alt="Diego Martín Ledesma"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover object-top border-2 border-[#C86442]/80 shrink-0 shadow-md"
                  width={56}
                  height={56}
                />
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[#F4EDE2] font-heading leading-tight">
                  {t("diego.modalTitle")}
                </h3>
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

            <div className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7 space-y-4 text-sm sm:text-base text-[#F4EDE2] leading-relaxed">
              <p className="text-[#F4EDE2] leading-relaxed">
                {t("diego.modalP1")}
              </p>
              <p className="text-[#E5DAC9] leading-relaxed">
                {t("diego.modalP2")}
              </p>
              <p className="text-[#F4EDE2] leading-relaxed">
                {t("diego.modalP3")}
              </p>
            </div>

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
