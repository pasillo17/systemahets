import {
  Users,
  User,
  Calendar,
  MapPin,
  ExternalLink,
  Clock,
  MessageSquare,
  CheckCircle2,
  Sun,
  Sunrise,
  Moon,
  ArrowUpRight,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
import { ScrollReveal } from "./ScrollReveal";

/**
 * SECCIÓN SEDES Y CLASES sobre Arena Piedra (#E5DAC9) para máxima legibilidad
 * y respiro visual, combinada con el Tablero de Horarios Oficiales en Tierra Sombra (#231C18) y
 * Terracota Pampeana (#B85332 / #C86442) y Ocre Arcilla (#C49A64 / #9C7340).
 */
export function Clases() {
  const sede = SITE_CONFIG.sedePrincipal;
  const { lang, t } = useLanguage();

  // Día actual de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado) para resaltar "HOY"
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

  const getShiftIcon = (id: string) => {
    if (id === "manana") return Sunrise;
    if (id === "mediodia") return Sun;
    return Moon;
  };

  return (
    <section
      id="sedes-y-clases"
      className="py-10 sm:py-20 bg-flow-clases text-[#231C18] relative overflow-hidden"
    >
      {/* Luz ambiental sutil en Terracota Pampeana y Ocre Arcilla */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#B85332]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#9C7340]/12 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de Sección con Divisor Editorial */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-6 sm:mb-10 border-b border-[#C9B8A0] pb-3.5 sm:pb-5 flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 sm:gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.26em] text-[#9E3E1E] font-bold">
                  {t("clases.kicker")}
                </span>
                <span className="hidden sm:inline-block w-8 h-[2px] bg-[#9E3E1E]" />
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#231C18] font-heading"
                style={{ textWrap: "balance" }}
              >
                {lang === "en"
                  ? "Training Schedules, Dojo & Modalities"
                  : "Horarios de Entrenamiento, Sede y Modalidades"}
              </h2>
            </div>
            <p className="text-xs sm:text-base text-[#362B24] leading-relaxed max-w-md lg:text-right font-medium">
              {t("clases.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            PROTAGONISTA CENTRAL: TABLERO DE HORARIOS Y SEDE OFICIAL
            (Enmarcado en Tierra Sombra #231C18 con Terracota #C86442 y Ocre Arcilla #C49A64)
           ===================================================================== */}
        <ScrollReveal direction="up" delay={60} distance={24} className="relative">
          {/* Halo de transición terrenal alrededor del tablero marrón para fundirlo con el fondo claro */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 sm:-inset-6 bg-gradient-to-b from-[#8C725E]/30 via-[#B85332]/16 to-[#8C725E]/30 rounded-md blur-2xl pointer-events-none"
          />
          <div
            id="horarios"
            className="mb-8 sm:mb-14 p-4 sm:p-8 lg:p-10 bg-[#231C18] text-[#F4EDE2] border-2 border-[#C49A64]/65 rounded-sm earth-block-transition-glow card-specular-edge relative overflow-hidden"
          >
            {/* Filete superior luminoso en Terracota Pampeana (#B85332) y Ocre Arcilla (#C49A64) */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332]" />

            {/* Resplandor ambiental detrás del tablero de horarios */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-96 h-96 bg-[#B85332]/15 rounded-full blur-3xl pointer-events-none"
            />

            {/* CABECERA DE LA SEDE Y BOTONES DE ACCIÓN RÁPIDA */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 border-b border-[#C4B5A3]/25 pb-4 sm:pb-6 mb-5 sm:mb-8 relative z-10">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-sm bg-[#1A1412] border border-[#C86442]/70 text-[#C86442] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(184,83,50,0.22)]">
                  <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-[#C86442]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#F4EDE2] bg-[#B85332] px-2 py-0.5 rounded-xs font-extrabold">
                      {lang === "en" ? "OFFICIAL SCHEDULE" : "HORARIOS OFICIALES"}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#C49A64] font-bold">
                      {lang === "en" ? "Monday to Friday" : "Lunes a Viernes"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading mt-1">
                    {sede.nombre}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F4EDE2] mt-0.5 flex flex-wrap items-center gap-1.5 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#C86442] shrink-0 inline" />
                    <span>{sede.direccion}</span>
                    <span className="text-[#C4B5A3]" aria-hidden="true">·</span>
                    <span className="text-[#C49A64] font-semibold">{sede.ciudad}</span>
                  </p>
                </div>
              </div>

              {/* Botones de ubicación y consulta directa */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto">
                <a
                  href={sede.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer-lightning inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#F4EDE2] rounded-sm transition-all duration-300 min-h-[46px] h-auto shadow-lg shadow-[#B85332]/25 active:scale-[0.98] group whitespace-normal sm:whitespace-nowrap text-center leading-tight"
                >
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>
                    {lang === "en" ? "Open in Maps" : "Ver Ubicación"}
                  </span>
                  <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 transition-transform group-hover:scale-110" />
                </a>

                <a
                  href={getWhatsAppUrl(SITE_CONFIG.mensajesWhatsApp.clasePrueba)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F4EDE2] bg-[#1A1412] hover:bg-[#B85332] border border-[#C49A64]/70 hover:border-[#DF7E5B] rounded-sm transition-all duration-300 min-h-[46px] h-auto shadow-[0_0_15px_rgba(196,154,100,0.16)] active:scale-[0.98] group whitespace-normal sm:whitespace-nowrap text-center leading-tight"
                >
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C49A64] group-hover:text-[#F4EDE2] shrink-0 transition-colors" />
                  <span>
                    {lang === "en" ? "Book Trial Class" : "Coordinar Clase"}
                  </span>
                </a>
              </div>
            </div>

            {/* =================================================================
                PARTE 1: RESUMEN VISUAL POR FRANJA HORARIA (LECTURA EN 3 SEGUNDOS)
               ================================================================= */}
            <div className="mb-6 sm:mb-9 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-xs bg-[#C86442]" />
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-[#C86442] font-bold">
                    {lang === "en"
                      ? "1. Quick View by Shift (Morning · Midday · Evening)"
                      : "1. Resumen Rápido por Turno (Mañana · Mediodía · Noche)"}
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-[#C4B5A3]">
                  {lang === "en"
                    ? "Tap any shift to ask for availability"
                    : "Tocá cualquier turno para consultar cupo por WhatsApp"}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
                {sede.franjasHorarias.map((franja, idx) => {
                  const ShiftIcon = getShiftIcon(franja.id);
                  const diasTags = lang === "en" ? franja.diasCortoEn : franja.diasCorto;
                  const isOchreVariant = idx === 1;
                  return (
                    <a
                      key={franja.id}
                      href={getWhatsAppUrl(franja.mensajeWsp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group block p-4 sm:p-5 bg-[#2E241F] border rounded-sm transition-all duration-300 relative overflow-hidden shadow-lg active:scale-[0.99] ${
                        isOchreVariant
                          ? "border-[#C49A64]/50 hover:border-[#C86442] hover:shadow-[0_0_25px_rgba(196,154,100,0.22)]"
                          : "border-[#C86442]/55 hover:border-[#DF7E5B] hover:shadow-[0_0_25px_rgba(200,100,66,0.26)]"
                      }`}
                    >
                      {/* Borde superior en Terracota / Ocre Arcilla */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-[3px] ${
                          isOchreVariant
                            ? "bg-gradient-to-r from-[#C49A64] via-[#C86442] to-transparent"
                            : "bg-gradient-to-r from-[#B85332] via-[#DF7E5B] to-transparent"
                        }`}
                      />

                      {/* Fila superior: Nombre del Turno + Etiquetas de Días */}
                      <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xs bg-[#1A1412] border flex items-center justify-center transition-colors ${
                              isOchreVariant
                                ? "border-[#C49A64]/60 text-[#C49A64] group-hover:bg-[#B85332] group-hover:text-[#F4EDE2]"
                                : "border-[#C86442]/60 text-[#C86442] group-hover:bg-[#B85332] group-hover:text-[#F4EDE2]"
                            }`}
                          >
                            <ShiftIcon className="w-4 h-4" />
                          </div>
                          <span
                            className={`text-xs sm:text-sm font-heading font-bold uppercase tracking-wider ${
                              isOchreVariant ? "text-[#C49A64]" : "text-[#DF7E5B]"
                            }`}
                          >
                            {lang === "en" ? franja.turnoEn : franja.turno}
                          </span>
                        </div>

                        {/* Días en etiquetas de alto contraste */}
                        <div className="flex items-center gap-1">
                          {diasTags.map((dTag) => (
                            <span
                              key={dTag}
                              className={`px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-[#1A1412] text-[#F4EDE2] border rounded-xs ${
                                isOchreVariant
                                  ? "border-[#C49A64]/60"
                                  : "border-[#C86442]/60"
                              }`}
                            >
                              {dTag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Horario Gigante y Claro */}
                      <div className="py-2 sm:py-2.5 px-3 bg-[#1A1412] border border-[#C4B5A3]/25 rounded-xs mb-2.5 sm:mb-3 flex items-baseline justify-between gap-2">
                        <span className="text-lg sm:text-2xl font-mono font-bold text-[#F4EDE2] tabular-nums tracking-tight group-hover:text-[#DF7E5B] transition-colors">
                          {lang === "en" ? franja.horarioEn : franja.horario}
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono text-[#C49A64] font-semibold uppercase tracking-wider shrink-0">
                          {lang === "en" ? franja.duracionEn : franja.duracion}
                        </span>
                      </div>

                      {/* Pie de tarjeta con días completos y acción */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#C4B5A3] font-medium">
                          <strong className="text-[#F4EDE2] font-semibold">
                            {lang === "en" ? "Days: " : "Días: "}
                          </strong>
                          {lang === "en" ? franja.diasEn : franja.dias}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold group-hover:translate-x-0.5 transition-transform ${
                            isOchreVariant ? "text-[#C49A64]" : "text-[#DF7E5B]"
                          }`}
                        >
                          {lang === "en" ? "Consult" : "Consultar"}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* =================================================================
                PARTE 2: CRONOGRAMA DÍA POR DÍA (LUNES A VIERNES + FIN DE SEMANA)
               ================================================================= */}
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3 sm:mb-4 pt-4 sm:pt-6 border-t border-[#C4B5A3]/25">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-xs bg-[#C49A64]" />
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-[#C49A64] font-bold">
                    {lang === "en"
                      ? "2. Day-by-Day Weekly Schedule (Monday to Friday)"
                      : "2. Cronograma Detallado Día por Día (Lunes a Viernes)"}
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-[#C4B5A3]">
                  {lang === "en"
                    ? "24-hour format · Verified Dojo Hours"
                    : "Formato 24 hs · Viernes cuenta con doble turno (mañana y noche)"}
                </span>
              </div>

              {/* VISTA CELULAR Y TABLET CHICA (< lg): Filas horizontales ultra legibles */}
              <div className="flex flex-col gap-2.5 lg:hidden mb-4">
                {diasActivos.map((item) => {
                  const isToday = todayIndex === item.diaNumero;
                  const turnosList = lang === "en" ? item.turnosEn : item.turnos;
                  return (
                    <div
                      key={item.dia}
                      className={`p-3.5 rounded-sm border transition-all ${
                        isToday
                          ? "bg-[#2E241F] border-[#C86442] shadow-[0_0_20px_rgba(200,100,66,0.28)]"
                          : item.destacadoDoble
                          ? "bg-[#2E241F] border-[#C49A64]/65"
                          : "bg-[#2E241F]/95 border-[#C49A64]/35"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        {/* Columna Izquierda: Día + Turno */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-base font-heading font-bold uppercase tracking-wide text-[#F4EDE2]">
                              {lang === "en" ? item.diaEn : item.dia}
                            </span>
                            {isToday && (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono font-extrabold uppercase tracking-widest bg-[#B85332] text-[#F4EDE2] rounded-xs">
                                {lang === "en" ? "TODAY" : "HOY"}
                              </span>
                            )}
                            {item.destacadoDoble && (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-[#B85332]/20 text-[#C49A64] border border-[#C49A64]/55 rounded-xs">
                                {lang === "en" ? "2 SHIFTS" : "2 TURNOS"}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-mono text-[#DF7E5B] font-medium block mt-0.5">
                            {lang === "en" ? item.rotuloEn : item.rotulo}
                          </span>
                        </div>

                        {/* Columna Derecha: Bloques de Horario grandes y nítidos */}
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          {turnosList.map((turno, idx) => (
                            <div
                              key={idx}
                              className="px-2.5 py-1 bg-[#1A1412] border border-[#C49A64]/50 rounded-xs text-right"
                            >
                              <span className="text-sm sm:text-base font-mono font-bold text-[#F4EDE2] tabular-nums tracking-tight block">
                                {turno}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* VISTA PC (lg+): 5 Columnas Grandes y Espaciosas para Lunes a Viernes */}
              <div className="hidden lg:grid lg:grid-cols-5 gap-3.5 mb-4">
                {diasActivos.map((item) => {
                  const isToday = todayIndex === item.diaNumero;
                  const turnosList = lang === "en" ? item.turnosEn : item.turnos;
                  return (
                    <div
                      key={item.dia}
                      className={`p-4 rounded-sm border flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                        isToday
                          ? "bg-[#2E241F] border-[#C86442] shadow-[0_0_25px_rgba(200,100,66,0.28)]"
                          : item.destacadoDoble
                          ? "bg-[#2E241F] border-[#C49A64]/65 hover:border-[#C86442]"
                          : "bg-[#2E241F]/95 border-[#C49A64]/35 hover:border-[#C86442]"
                      }`}
                    >
                      <div
                        className={`absolute top-0 left-0 right-0 h-[3px] ${
                          item.destacadoDoble
                            ? "bg-gradient-to-r from-[#C86442] via-[#C49A64] to-transparent"
                            : "bg-gradient-to-r from-[#C49A64] via-[#C86442] to-transparent"
                        }`}
                      />

                      {/* Cabecera del Día */}
                      <div>
                        <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#C4B5A3]/25">
                          <span className="text-base font-heading font-bold uppercase tracking-wider text-[#F4EDE2]">
                            {lang === "en" ? item.diaEn : item.dia}
                          </span>
                          {isToday ? (
                            <span className="px-2 py-0.5 text-[10px] font-mono font-extrabold uppercase tracking-widest bg-[#B85332] text-[#F4EDE2] rounded-xs">
                              {lang === "en" ? "TODAY" : "HOY"}
                            </span>
                          ) : (
                            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C49A64]">
                              {lang === "en" ? item.diaCortoEn : item.diaCorto}
                            </span>
                          )}
                        </div>

                        {/* Etiqueta de franja */}
                        <div className="mb-3">
                          <span
                            className={`inline-block text-[11px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs ${
                              item.destacadoDoble
                                ? "bg-[#B85332]/20 text-[#DF7E5B] border border-[#C86442]/55"
                                : "bg-[#1A1412] text-[#C49A64] border border-[#C49A64]/45"
                            }`}
                          >
                            {lang === "en" ? item.rotuloEn : item.rotulo}
                          </span>
                        </div>
                      </div>

                      {/* Cajas de Horario en tamaño grande */}
                      <div className="space-y-2 my-auto">
                        {turnosList.map((turno, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 bg-[#1A1412] border border-[#C49A64]/45 rounded-xs"
                          >
                            <span className="text-base xl:text-lg font-mono font-bold text-[#F4EDE2] tabular-nums tracking-tight block">
                              {turno}
                            </span>
                            {lang !== "en" && item.turnosSub && item.turnosSub[idx] && (
                              <span className="text-[11px] font-mono text-[#C4B5A3] block mt-0.5">
                                {item.turnosSub[idx]}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Pie del día con enlace directo a consultar ese día */}
                      <a
                        href={getWhatsAppUrl(
                          `Hola Diego, te escribo desde la web. Me gustaría consultar para ir a entrenar el día ${item.dia} (${item.turnos.join(" / ")}).`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3.5 pt-2.5 border-t border-[#C4B5A3]/25 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#C4B5A3] hover:text-[#DF7E5B] transition-colors group/day"
                      >
                        <span>
                          {lang === "en" ? `Book ${item.diaEn}` : `Elegir ${item.dia}`}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C86442] group-hover/day:text-[#DF7E5B] group-hover/day:translate-x-0.5 group-hover/day:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Barra compacta de Fin de Semana (Sábado y Domingo) */}
              <div className="p-3 sm:px-4 sm:py-3 rounded-xs bg-[#1A1412]/90 border border-[#C4B5A3]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#C4B5A3]">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#2E241F] text-[#F4EDE2] border border-[#C49A64]/35 rounded-xs font-semibold">
                    {lang === "en"
                      ? `${diasFinDeSemana.map((d) => d.diaEn).join(" & ")}`
                      : `${diasFinDeSemana.map((d) => d.dia).join(" y ")}`}
                  </span>
                  <span className="text-[#F4EDE2] font-medium">
                    {lang === "en"
                      ? "Closed for regular classes"
                      : "Sin clases regulares"}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#C49A64]">
                  {lang === "en"
                    ? "Reserved for special weekend seminars & workshops"
                    : "Reservado para seminarios intensivos y jornadas especiales"}
                </span>
              </div>
            </div>

            {/* Franja de Puntos Clave de la Práctica en la Sede */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#C4B5A3]/25 relative z-10 text-xs text-[#F4EDE2]">
              <div className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xs bg-[#1A1412]/95 border border-[#C86442]/40">
                <CheckCircle2 className="w-4 h-4 text-[#C86442] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#F4EDE2] block text-xs">
                    {lang === "en" ? "All Experience Levels" : "Todos los Niveles"}
                  </span>
                  <span className="text-[#C4B5A3] text-[11px] leading-snug">
                    {lang === "en"
                      ? "No previous martial arts experience required to begin."
                      : "No se requiere experiencia marcial previa para sumarse."}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xs bg-[#1A1412]/95 border border-[#C49A64]/40">
                <CheckCircle2 className="w-4 h-4 text-[#C49A64] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#F4EDE2] block text-xs">
                    {lang === "en" ? "Small Groups & Guidance" : "Grupos Reducidos"}
                  </span>
                  <span className="text-[#C4B5A3] text-[11px] leading-snug">
                    {lang === "en"
                      ? "Careful biomechanical correction and conscious movement."
                      : "Seguimiento personalizado con corrección biomecánica y cuidado mutuo."}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xs bg-[#1A1412]/95 border border-[#C86442]/40">
                <CheckCircle2 className="w-4 h-4 text-[#C86442] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#F4EDE2] block text-xs">
                    {lang === "en" ? "First Trial Class" : "Clase de Prueba"}
                  </span>
                  <span className="text-[#C4B5A3] text-[11px] leading-snug">
                    {lang === "en"
                      ? "Coordinate your first session easily via WhatsApp."
                      : "Coordiná tu día y horario de prueba directamente por WhatsApp."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            MODALIDADES DE ENTRENAMIENTO (GRUPALES, INDIVIDUALES, SEMINARIOS)
            Tarjetas en Hueso Pergamino (#F8F3EB) sobre fondo Arena Piedra (#E5DAC9)
           ===================================================================== */}
        <ScrollReveal direction="up" delay={90} distance={24}>
          <div>
            <div className="flex items-center justify-between mb-3.5 sm:mb-5">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#9E3E1E] font-bold">
                  {lang === "en" ? "Training Formats" : "Formatos de Práctica"}
                </span>
                <span className="hidden sm:inline-block w-8 h-[2px] bg-[#9E3E1E]" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-[#4A3B32] font-bold uppercase tracking-wider">
                {lang === "en" ? "3 Modalities" : "3 Modalidades"}
              </span>
            </div>

            <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-6 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {modalidades.map((m, idx) => {
                const Icon = m.icono;
                const isTerracotta = idx !== 1;
                return (
                  <SpotlightCard
                    key={m.titulo}
                    spotlightColor="rgba(184, 83, 50, 0.12)"
                    borderColor="rgba(184, 83, 50, 0.65)"
                    className="snap-center shrink-0 w-[84%] sm:w-[340px] md:w-auto p-4 sm:p-7 bg-[#F8F3EB] border border-[#D6C8B4] hover:border-[#B85332] rounded-sm transition-all duration-300 flex flex-col justify-between card-light-steel-elevation group h-full relative"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between border-b border-[#D6C8B4] pb-2.5 sm:pb-3.5">
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#261E1A] border flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isTerracotta
                              ? "border-[#C86442]/70 text-[#DF7E5B] group-hover:bg-[#B85332] group-hover:text-[#F4EDE2]"
                              : "border-[#C49A64]/65 text-[#C49A64] group-hover:bg-[#9C7340] group-hover:text-[#F4EDE2]"
                          }`}
                        >
                          <Icon className="w-4 h-4 stroke-[1.75]" />
                        </div>
                        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#4A3B32] group-hover:text-[#9E3E1E] tabular-nums transition-colors">
                          0{idx + 1} / 03
                        </span>
                      </div>

                      <div>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-[0.2em] block font-bold ${
                            isTerracotta ? "text-[#9E3E1E]" : "text-[#6E4B20]"
                          }`}
                        >
                          {m.subtitulo}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[#231C18] font-heading mt-0.5 sm:mt-1 group-hover:text-[#9E3E1E] transition-colors">
                          {m.titulo}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm font-medium text-[#231C18] italic font-serif leading-relaxed py-2 border-y border-[#D6C8B4]">
                        “{m.descripcion}”
                      </p>

                      <p className="text-xs sm:text-sm text-[#362B24] leading-relaxed">
                        {m.detalles}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 sm:pt-4 sm:mt-5 border-t border-[#D6C8B4] flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#9E3E1E] font-bold uppercase tracking-wider">
                        {t("clases.groupsNote")}
                      </span>
                      <span className="text-[10px] font-mono text-[#6E4B20] font-bold uppercase tracking-widest">
                        HETS
                      </span>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
            <div className="flex md:hidden items-center justify-between px-1 pt-1.5 text-[10px] font-mono text-[#4A3B32] uppercase tracking-wider font-semibold">
              <span>{lang === "en" ? "Swipe modalities →" : "Deslizá modalidades →"}</span>
              <span className="text-[#9E3E1E] font-bold tabular-nums">01 — 03</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
