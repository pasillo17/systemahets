import {
  Users,
  User,
  Calendar,
  MapPin,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Trees,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

interface ClasesProps {
  onOpenNovedades?: () => void;
}

/**
 * SECCIÓN SEDES Y CLASES:
 * Una sola vista limpia, directa y fácil de escanear de lunes a viernes,
 * sin etiquetas superiores (eyebrow tags), sin comillas/cursiva y con las 3 modalidades
 * sueltas sobre el fondo sin encerrar en rectángulos + banner destacado del Camp 2026.
 */
export function Clases({ onOpenNovedades }: ClasesProps) {
  const sede = SITE_CONFIG.sedePrincipal;
  const { lang, t } = useLanguage();

  const handleOpenCamp = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (onOpenNovedades) {
      onOpenNovedades();
    } else {
      window.location.hash = "#novedades";
    }
  };

  const todayIndex = new Date().getDay();
  const diasActivos = sede.horariosSemana.filter((d) => d.abierto);
  const diasFinDeSemana = sede.horariosSemana.filter((d) => !d.abierto);

  const modalidades = [
    {
      titulo: t("clases.groupTitle"),
      subtitulo: t("clases.groupSub"),
      descripcion: t("clases.groupDesc"),
      detalles: t("clases.groupDetails"),
      icono: Users,
    },
    {
      titulo: t("clases.indTitle"),
      subtitulo: t("clases.indSub"),
      descripcion: t("clases.indDesc"),
      detalles: t("clases.indDetails"),
      icono: User,
    },
    {
      titulo: t("clases.semTitle"),
      subtitulo: t("clases.semSub"),
      descripcion: t("clases.semDesc"),
      detalles: t("clases.semDetails"),
      icono: Calendar,
    },
  ];

  return (
    <section
      id="sedes-y-clases"
      className="py-12 sm:py-20 bg-flow-clases text-[#F4EDE2] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de Sección directa (sin eyebrow tag ni comillas en el subtítulo) */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-7 sm:mb-10 border-b border-[#C49A64]/30 pb-4 flex flex-col lg:flex-row lg:items-end justify-between gap-3">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading"
              style={{ textWrap: "balance" }}
            >
              {t("clases.title")}
            </h2>
            <p className="text-xs sm:text-base text-[#C4B5A3] leading-relaxed max-w-xl lg:text-right font-normal">
              {t("clases.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* VISTA ÚNICA DE HORARIOS DE LUNES A VIERNES Y SEDE EN LA PLATA */}
        <ScrollReveal direction="up" delay={60} distance={24}>
          <div
            id="horarios"
            className="mb-12 sm:mb-16 p-4 sm:p-8 bg-[#231C18] text-[#F4EDE2] border border-[#C49A64]/45 rounded-sm relative overflow-hidden"
          >
            {/* Cabecera de Sede y Botones de Acción */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#C4B5A3]/20 pb-5 mb-6">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading">
                  {sede.nombre}
                </h3>
                <p className="text-xs sm:text-sm text-[#C4B5A3] mt-1 flex flex-wrap items-center gap-1.5 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-[#C86442] shrink-0 inline" />
                  <span className="text-[#F4EDE2]">{sede.direccion}</span>
                  <span aria-hidden="true">·</span>
                  <span>{sede.ciudad}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto">
                <a
                  href={sede.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer-lightning inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#F4EDE2] rounded-sm transition-all duration-300 min-h-[46px] h-auto shadow-md active:scale-[0.98] whitespace-normal sm:whitespace-nowrap text-center leading-tight"
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{t("clases.btnDirections")}</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>

                <a
                  href={getWhatsAppUrl(SITE_CONFIG.mensajesWhatsApp.clasePrueba)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F4EDE2] bg-[#1A1412] hover:bg-[#B85332] border border-[#C49A64]/55 rounded-sm transition-all duration-300 min-h-[46px] h-auto active:scale-[0.98] whitespace-normal sm:whitespace-nowrap text-center leading-tight"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C49A64] shrink-0" />
                  <span>
                    {lang === "en" ? "Book Trial Class" : "Reservar clase de prueba"}
                  </span>
                </a>
              </div>
            </div>

            {/* VISTA MÓVIL Y TABLET (< lg): Lista limpia de Lunes a Viernes */}
            <div className="divide-y divide-[#C49A64]/20 lg:hidden">
              {diasActivos.map((item) => {
                const isToday = todayIndex === item.diaNumero;
                const turnosList = lang === "en" ? item.turnosEn : item.turnos;
                return (
                  <a
                    key={item.dia}
                    href={getWhatsAppUrl(
                      `Hola Diego, te escribo desde la web. Quería consultar para ir a probar una clase el día ${item.dia} (${item.turnos.join(" / ")}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3 group"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-heading font-bold uppercase tracking-wide text-[#F4EDE2] group-hover:text-[#DF7E5B] transition-colors">
                          {lang === "en" ? item.diaEn : item.dia}
                        </span>
                        {isToday && (
                          <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase bg-[#B85332] text-[#F4EDE2] rounded-xs">
                            {lang === "en" ? "TODAY" : "HOY"}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#C4B5A3] block mt-0.5">
                        {lang === "en" ? item.rotuloEn : item.rotulo} ·{" "}
                        <span className="text-[#DF7E5B]">Reservar →</span>
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      {turnosList.map((turno, idx) => (
                        <span
                          key={idx}
                          className="text-sm sm:text-base font-mono font-bold text-[#F4EDE2] tabular-nums"
                        >
                          {turno}
                        </span>
                      ))}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* VISTA ESCRITORIO (lg+): Tabla de 5 columnas limpia de Lunes a Viernes */}
            <div className="hidden lg:grid lg:grid-cols-5 divide-x divide-[#C49A64]/20 border-y border-[#C49A64]/20 py-5">
              {diasActivos.map((item) => {
                const isToday = todayIndex === item.diaNumero;
                const turnosList = lang === "en" ? item.turnosEn : item.turnos;
                return (
                  <div
                    key={item.dia}
                    className="px-5 first:pl-0 last:pr-0 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-[#C4B5A3]/15">
                        <span className="text-base font-heading font-bold uppercase tracking-wide text-[#F4EDE2]">
                          {lang === "en" ? item.diaEn : item.dia}
                        </span>
                        {isToday && (
                          <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-[#B85332] text-[#F4EDE2] rounded-xs">
                            {lang === "en" ? "TODAY" : "HOY"}
                          </span>
                        )}
                      </div>

                      <span className="text-xs text-[#C49A64] block mb-3">
                        {lang === "en" ? item.rotuloEn : item.rotulo}
                      </span>

                      <div className="space-y-2.5">
                        {turnosList.map((turno, idx) => (
                          <div key={idx}>
                            <span className="text-base xl:text-lg font-mono font-bold text-[#F4EDE2] tabular-nums block">
                              {turno}
                            </span>
                            {lang !== "en" &&
                              item.turnosSub &&
                              item.turnosSub[idx] && (
                                <span className="text-xs text-[#C4B5A3] block">
                                  {item.turnosSub[idx]}
                                </span>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={getWhatsAppUrl(
                        `Hola Diego, te escribo desde la web. Quería consultar para ir a probar una clase el día ${item.dia} (${item.turnos.join(" / ")}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 pt-2.5 border-t border-[#C4B5A3]/15 inline-flex items-center justify-between text-xs text-[#DF7E5B] hover:text-[#F4EDE2] font-semibold transition-colors group/day"
                    >
                      <span>
                        {lang === "en"
                          ? `Book ${item.diaEn}`
                          : `Elegir ${item.dia}`}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/day:translate-x-0.5 group-hover/day:-translate-y-0.5" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Nota de pie del cronograma */}
            <div className="pt-4 mt-4 lg:mt-5 border-t lg:border-t-0 border-[#C4B5A3]/20 flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 text-xs text-[#C4B5A3]">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
                <span className="inline-flex items-center gap-1.5 text-[#F4EDE2]">
                  <CheckCircle2 className="w-4 h-4 text-[#DF7E5B] shrink-0" />
                  <span>
                    {lang === "en"
                      ? "Open to all levels (no prior experience needed)"
                      : "Abierto a todos los niveles (no hace falta experiencia previa)"}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#F4EDE2]">
                  <CheckCircle2 className="w-4 h-4 text-[#C49A64] shrink-0" />
                  <span>
                    {lang === "en"
                      ? "Small guided groups"
                      : "Grupos reducidos y trato personalizado"}
                  </span>
                </span>
              </div>

              <span className="text-xs text-[#C49A64]">
                {lang === "en"
                  ? `${diasFinDeSemana.map((d) => d.diaEn).join(" & ")}: Special seminars`
                  : `${diasFinDeSemana.map((d) => d.dia).join(" y ")}: Seminarios y jornadas especiales`}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* MODALIDADES SUELTAS SOBRE EL FONDO (sin tarjetas encerradas en rectángulos, sin números 01/03 y sin comillas/cursiva) */}
        <ScrollReveal direction="up" delay={90} distance={24}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C49A64]/20">
            {modalidades.map((m, idx) => {
              const Icon = m.icono;
              const isTerracotta = idx !== 1;
              return (
                <div
                  key={m.titulo}
                  className="pt-6 first:pt-0 md:pt-0 md:px-7 first:md:pl-0 last:md:pr-0 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    <Icon
                      className={`w-5 h-5 stroke-[1.75] ${
                        isTerracotta ? "text-[#DF7E5B]" : "text-[#C49A64]"
                      }`}
                    />

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-[#F4EDE2] font-heading">
                        {m.titulo}
                      </h3>
                      <span className="text-xs text-[#C49A64] block mt-0.5">
                        {m.subtitulo}
                      </span>
                    </div>

                    <p className="text-sm text-[#F4EDE2] leading-relaxed font-normal pt-1">
                      {m.descripcion}
                    </p>

                    <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed">
                      {m.detalles}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* BANNER DESTACADO: PRÓXIMO EVENTO ESPECIAL SYSTEMA HETS CAMP 2026 */}
        <ScrollReveal direction="up" delay={120} distance={22} className="mt-10 sm:mt-14">
          <div className="relative rounded-sm bg-[#261E1A] border border-[#C49A64]/55 p-5 sm:p-7 lg:p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332]" />
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xs bg-[#1F1916] text-[#DF7E5B] border border-[#C86442]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Trees className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-xl font-heading font-bold uppercase tracking-wide text-[#F4EDE2] leading-snug">
                    {lang === "en"
                      ? "Upcoming Special Event: Systema Hets Camp 2026 · Estancia Santa Rita, Punta Indio (November)"
                      : "Próximo Evento Especial: Systema Hets Camp 2026 · Estancia Santa Rita, Punta Indio (Noviembre)"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed">
                    {lang === "en"
                      ? "Intensive gathering in contact with nature guided by Prof. Diego Martín Ledesma. Limited spots with prior reservation."
                      : "Encuentro intensivo en contacto con la naturaleza guiado por el Prof. Diego Martín Ledesma. Cupos limitados con reserva previa."}
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={handleOpenCamp}
                  className="btn-shimmer-lightning w-full lg:w-auto min-h-[48px] px-5 sm:px-6 py-3 rounded-sm text-xs font-extrabold uppercase tracking-wider text-[#F4EDE2] inline-flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-[0.98] whitespace-nowrap"
                >
                  <span>
                    {lang === "en"
                      ? "View details & registration"
                      : "Ver detalles e inscripción"}
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
