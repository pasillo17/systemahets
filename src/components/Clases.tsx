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
 * Rediseño audaz con encabezado monumental, marco desplazado en la grilla de horarios,
 * 3 tarjetas tipo póster para las Modalidades (01, 02, 03) y banner diagonal para el Camp 2026.
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
      num: "01",
      titulo: t("clases.groupTitle"),
      subtitulo: t("clases.groupSub"),
      descripcion: t("clases.groupDesc"),
      detalles: t("clases.groupDetails"),
      icono: Users,
    },
    {
      num: "02",
      titulo: t("clases.indTitle"),
      subtitulo: t("clases.indSub"),
      descripcion: t("clases.indDesc"),
      detalles: t("clases.indDetails"),
      icono: User,
    },
    {
      num: "03",
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
      className="py-14 sm:py-22 section-surface-secondary text-[#F5EFE6] relative overflow-hidden"
    >
      {/* Halo ambiental sutil en Naranja Terracota y Dorado */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[360px] sm:w-[600px] h-[280px] sm:h-[380px] bg-[#D97736]/10 rounded-full blur-[110px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de Sección con barra sólida Terracota */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-8 sm:mb-12 border-b border-[#D97736]/30 pb-5 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2.5">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F5EFE6] font-heading glow-text-subtle"
                style={{ textWrap: "balance" }}
              >
                {t("clases.title")}
              </h2>
              <div
                aria-hidden="true"
                className="h-[3px] w-16 bg-gradient-to-r from-[#D97736] to-[#D4AF37]"
              />
            </div>
            <p className="text-xs sm:text-base text-[#B8A99A] leading-relaxed max-w-xl lg:text-right font-normal">
              {t("clases.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* VISTA ÚNICA DE HORARIOS DE LUNES A VIERNES Y SEDE EN LA PLATA CON MARCO DESPLAZADO */}
        <ScrollReveal direction="up" delay={60} distance={24}>
          <div className="relative pl-2.5 pb-2.5 sm:pl-4 sm:pb-4 mb-12 sm:mb-16">
            {/* Bloque desplazado en Naranja Terracota y Dorado detrás de la tabla de horarios */}
            <div
              aria-hidden="true"
              className="absolute left-0 bottom-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-tr from-[#D97736] to-[#C5A059] rounded-xs pointer-events-none"
            />

            <div
              id="horarios"
              className="relative z-10 p-4 sm:p-8 card-static-on-secondary-gold text-[#F5EFE6] rounded-sm overflow-hidden"
            >
              {/* Banda superior sólida en Naranja Terracota y Dorado */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D97736] via-[#D4AF37] to-[#C5A059]"
              />

              {/* Cabecera de Sede y Botones de Acción */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D97736]/30 pb-5 mb-6">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#F5EFE6] font-heading">
                    {sede.nombre}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8A99A] mt-1 flex flex-wrap items-center gap-1.5 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#D97736] icon-gold-glow shrink-0 inline" />
                    <span className="text-[#F5EFE6]">{sede.direccion}</span>
                    <span aria-hidden="true">·</span>
                    <span>{sede.ciudad}</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto">
                  <a
                    href={getWhatsAppUrl(SITE_CONFIG.mensajesWhatsApp.clasePrueba)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer-lightning inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#110D0A] bg-[#D97736] hover:bg-[#D4AF37] rounded-sm min-h-[46px] h-auto whitespace-normal sm:whitespace-nowrap text-center leading-tight"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#110D0A] shrink-0" />
                    <span className="font-bold">
                      {lang === "en" ? "Book Trial Class" : "Reservar clase de prueba"}
                    </span>
                  </a>

                  <a
                    href={sede.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-gold inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F5EFE6] bg-[#1B140F] hover:bg-[#D97736] hover:text-[#110D0A] rounded-sm min-h-[46px] h-auto active:scale-[0.98] whitespace-normal sm:whitespace-nowrap text-center leading-tight group"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#D97736] group-hover:text-[#110D0A] shrink-0 transition-colors" />
                    <span>{t("clases.btnDirections")}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              </div>

              {/* VISTA MÓVIL Y TABLET (< lg): Lista limpia de Lunes a Viernes */}
              <div className="divide-y divide-[#D97736]/25 lg:hidden">
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
                          <span className="text-base font-heading font-bold uppercase tracking-wide text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors">
                            {lang === "en" ? item.diaEn : item.dia}
                          </span>
                          {isToday && (
                            <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase bg-gradient-to-r from-[#D97736] to-[#C5A059] text-[#110D0A] rounded-xs shadow-[0_0_10px_rgba(217,119,54,0.45)]">
                              {lang === "en" ? "TODAY" : "HOY"}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-[#B8A99A] block mt-0.5">
                          {lang === "en" ? item.rotuloEn : item.rotulo} ·{" "}
                          <span className="text-[#D97736] group-hover:text-[#D4AF37] font-semibold">
                            Reservar →
                          </span>
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-1 shrink-0">
                        {turnosList.map((turno, idx) => (
                          <span
                            key={idx}
                            className="text-sm sm:text-base font-mono font-bold text-[#F5EFE6] tabular-nums"
                          >
                            {turno}
                          </span>
                        ))}
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* VISTA ESCRITORIO (lg+): Tabla de 5 columnas de Lunes a Viernes */}
              <div className="hidden lg:grid lg:grid-cols-5 divide-x divide-[#D97736]/25 border-y border-[#D97736]/25 py-5">
                {diasActivos.map((item) => {
                  const isToday = todayIndex === item.diaNumero;
                  const turnosList = lang === "en" ? item.turnosEn : item.turnos;
                  return (
                    <div
                      key={item.dia}
                      className="px-5 first:pl-0 last:pr-0 flex flex-col justify-between group/col transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-[#D97736]/25 group-hover/col:border-[#D97736]/55 transition-colors">
                          <span className="text-base font-heading font-bold uppercase tracking-wide text-[#F5EFE6] group-hover/col:text-[#D4AF37] transition-colors">
                            {lang === "en" ? item.diaEn : item.dia}
                          </span>
                          {isToday && (
                            <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-gradient-to-r from-[#D97736] to-[#C5A059] text-[#110D0A] rounded-xs shadow-[0_0_12px_rgba(217,119,54,0.45)]">
                              {lang === "en" ? "TODAY" : "HOY"}
                            </span>
                          )}
                        </div>

                        <span className="inline-block px-2 py-0.5 text-[11px] font-heading uppercase tracking-wider bg-[#D97736]/15 text-[#D4AF37] border-l-2 border-[#D97736] mb-3">
                          {lang === "en" ? item.rotuloEn : item.rotulo}
                        </span>

                        <div className="space-y-2.5">
                          {turnosList.map((turno, idx) => (
                            <div key={idx}>
                              <span className="text-base xl:text-lg font-mono font-bold text-[#F5EFE6] tabular-nums block">
                                {turno}
                              </span>
                              {lang !== "en" &&
                                item.turnosSub &&
                                item.turnosSub[idx] && (
                                  <span className="text-xs text-[#B8A99A] block">
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
                        className="mt-5 pt-2.5 border-t border-[#D97736]/25 inline-flex items-center justify-between text-xs font-heading uppercase tracking-wider text-[#D97736] hover:text-[#D4AF37] font-bold transition-colors group/day"
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
              <div className="pt-4 mt-4 lg:mt-5 border-t lg:border-t-0 border-[#D97736]/25 flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 text-xs text-[#B8A99A]">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[#F5EFE6]">
                    <CheckCircle2 className="w-4 h-4 text-[#D97736] shrink-0" />
                    <span>
                      {lang === "en"
                        ? "Open to all levels (no prior experience needed)"
                        : "Abierto a todos los niveles (no hace falta experiencia previa)"}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#F5EFE6]">
                    <CheckCircle2 className="w-4 h-4 text-[#D97736] shrink-0" />
                    <span>
                      {lang === "en"
                        ? "Small guided groups"
                        : "Grupos reducidos y trato personalizado"}
                    </span>
                  </span>
                </div>

                <span className="text-xs text-[#C5A059]">
                  {lang === "en"
                    ? `${diasFinDeSemana.map((d) => d.diaEn).join(" & ")}: Special seminars`
                    : `${diasFinDeSemana.map((d) => d.dia).join(" y ")}: Seminarios y jornadas especiales`}
                </span>
              </div>

              {/* Mapa interactivo + Referencia visual del interior de nuestra sede */}
              <div className="mt-5 pt-5 border-t border-[#D97736]/25 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                <div className="lg:col-span-7 relative rounded-sm overflow-hidden border border-[#D97736]/30 bg-[#1B140F] min-h-[210px] sm:min-h-[230px]">
                  <iframe
                    title={
                      lang === "en"
                        ? "Interactive map - Systema HETS Location in La Plata (Calle 22 N° 1027)"
                        : "Mapa interactivo - Sede Systema HETS en La Plata (Calle 22 Nº 1027)"
                    }
                    src="https://maps.google.com/maps?q=Calle+22+1027,+La+Plata,+Provincia+de+Buenos+Aires,+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full min-h-[210px] sm:min-h-[230px] border-0 [filter:invert(92%)_hue-rotate(180deg)_brightness(85%)_contrast(98%)_grayscale(28%)]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#D97736]/30 rounded-sm" />
                </div>

                <div className="lg:col-span-5 relative rounded-sm overflow-hidden border border-[#D97736]/30 bg-[#1B140F] flex flex-col justify-between group">
                  <div className="relative h-36 sm:h-40 lg:h-full min-h-[140px] overflow-hidden">
                    <img
                      src={SITE_CONFIG.assets.practicaSedeLaPlata}
                      alt={
                        lang === "en"
                          ? "Systema HETS training in La Plata"
                          : "Práctica real de Systema HETS en La Plata"
                      }
                      className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          SITE_CONFIG.assets.practicaSedeLaPlataFallbackUrl;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#110D0A] via-[#110D0A]/35 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between gap-2">
                      <div>
                        <span className="text-xs font-heading font-bold uppercase tracking-wide text-[#F5EFE6] block">
                          {lang === "en"
                            ? "Sede Central · La Plata"
                            : "Sede Central · Casco Urbano"}
                        </span>
                        <span className="text-[11px] text-[#B8A99A] block">
                          {lang === "en"
                            ? "Calle 22 Nº 1027 (between 53 & 54) · Near Parque San Martín"
                            : "Calle 22 Nº 1027 (entre 53 y 54) · A pasos del Parque San Martín"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 MODALIDADES EN TARJETAS TIPO PÓSTER NUMERADAS (01, 02, 03) */}
        <ScrollReveal direction="up" delay={90} distance={24}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {modalidades.map((m) => {
              const Icon = m.icono;
              return (
                <div
                  key={m.titulo}
                  className="relative p-5 sm:p-7 rounded-xs bg-[#110D0A] border border-[#D97736]/35 hover:border-[#D4AF37] flex flex-col justify-between space-y-4 group transition-all duration-300 hover:-translate-y-1 shadow-[0_14px_30px_rgba(0,0,0,0.75)] overflow-hidden"
                >
                  {/* Filete superior sólido en Naranja Terracota */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D97736] to-[#D4AF37]"
                  />

                  {/* Número monumental en marca de agua */}
                  <span
                    aria-hidden="true"
                    className="absolute top-3 right-4 font-heading font-black text-5xl text-[#D97736]/15 group-hover:text-[#D4AF37]/30 transition-colors select-none pointer-events-none leading-none"
                  >
                    {m.num}
                  </span>

                  <div className="space-y-3 relative z-10">
                    <div className="w-10 h-10 rounded-xs bg-[#1B140F] border border-[#D97736]/40 group-hover:bg-[#D97736] flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[1.75] text-[#D97736] group-hover:text-[#110D0A] transition-colors" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors font-heading">
                        {m.titulo}
                      </h3>
                      <span className="text-xs font-heading uppercase tracking-wider text-[#D97736] font-bold block">
                        {m.subtitulo}
                      </span>
                    </div>

                    <p className="text-sm text-[#F5EFE6] leading-relaxed font-normal pt-1">
                      {m.descripcion}
                    </p>

                    <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed">
                      {m.detalles}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* BANNER DESTACADO CON CORTE GEOMÉTRICO: SYSTEMA HETS CAMP 2026 */}
        <ScrollReveal direction="up" delay={120} distance={22} className="mt-10 sm:mt-14">
          <div className="relative rounded-xs bg-[#110D0A] border border-[#D97736]/45 p-5 sm:p-7 lg:p-8 overflow-hidden shadow-[0_16px_38px_rgba(0,0,0,0.85)]">
            {/* Banda diagonal de acento en Naranja Terracota */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-b from-[#D97736] via-[#D4AF37] to-[#C5A059]"
            />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D97736] via-[#D4AF37] to-[#C5A059]" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:pl-3">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 rounded-xs bg-[#D97736] text-[#110D0A] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_16px_rgba(217,119,54,0.35)]">
                  <Trees className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-xl font-heading font-bold uppercase tracking-wide text-[#F5EFE6] leading-snug">
                    {lang === "en"
                      ? "Upcoming Special Event: Systema Hets Camp 2026 · Estancia Santa Rita, Punta Indio (November)"
                      : "Próximo Evento Especial: Systema Hets Camp 2026 · Estancia Santa Rita, Punta Indio (Noviembre)"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed">
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
                  className="btn-shimmer-lightning w-full lg:w-auto min-h-[48px] px-5 sm:px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-[#110D0A] bg-[#D97736] hover:bg-[#D4AF37] inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap group"
                >
                  <span className="font-bold">
                    {lang === "en"
                      ? "View details & registration"
                      : "Ver detalles e inscripción"}
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
