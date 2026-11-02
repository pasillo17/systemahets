import { Users, User, Calendar, MapPin, ExternalLink, Clock, MessageSquare, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
import { ScrollReveal } from "./ScrollReveal";

export function Clases() {
  const sede = SITE_CONFIG.sedePrincipal;
  const { lang, t } = useLanguage();

  const pruebaSocial = SITE_CONFIG.pruebaSocial.map((item) => {
    if (lang === "en") {
      switch (item.etiqueta) {
        case "Años de formación":
          return {
            cifra: "10+",
            etiqueta: "Years of Practice",
            detalle: "Continuous training since 2014 in Buenos Aires",
          };
        case "Modalidades":
          return {
            cifra: "3",
            etiqueta: "Modalities",
            detalle: "Group classes, private sessions, and workshops",
          };
        case "Sede Activa":
          return {
            cifra: "BS.AS.",
            etiqueta: "Active Dojo",
            detalle: "Regular practice spaces in CABA & outdoor locations",
          };
        case "Atención personalizada":
          return {
            cifra: "100%",
            etiqueta: "Personalized Focus",
            detalle: "Small groups dedicated to self-knowledge",
          };
        default:
          return item;
      }
    }
    return item;
  });

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
    <section id="sedes-y-clases" className="py-10 sm:py-20 bg-[#080807] text-[#F1EBDD] border-t border-[#A58A60]/15 relative overflow-hidden">
      
      {/* Luz ambiental sutil en CSS puro */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#A58A60]/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de Sección con Divisor Editorial */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-6 sm:mb-12 border-b border-[#A58A60]/20 pb-3.5 sm:pb-5 flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 sm:gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.26em] text-[#C2A87E] font-semibold">
                  {t("clases.kicker")}
                </span>
                <span className="hidden sm:inline-block w-8 h-[1px] bg-[#A58A60]/40" />
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading"
                style={{ textWrap: "balance" }}
              >
                {t("clases.title")}
              </h2>
            </div>
            <p className="text-xs sm:text-base text-[#EAE5D9] leading-relaxed max-w-md lg:text-right">
              {t("clases.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* FRANJA DE PRUEBA SOCIAL CON NUMERACIÓN TABULAR Y FILETES FINOS */}
        <ScrollReveal direction="up" delay={80} distance={24}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-7 sm:mb-14">
            {pruebaSocial.map((item, idx) => (
              <SpotlightCard
                key={item.etiqueta}
                spotlightColor="rgba(194, 168, 126, 0.12)"
                borderColor="rgba(194, 168, 126, 0.4)"
                className="p-3 sm:p-5 bg-[#12110F]/95 border border-[#A58A60]/25 rounded-sm flex flex-col justify-between card-specular-edge hover:border-[#A58A60]/60 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#A58A60]/50 via-transparent to-transparent" />
                <div>
                  <div className="flex items-baseline justify-between mb-0.5 sm:mb-1">
                    <span className="text-xl sm:text-3xl font-bold font-mono text-[#C2A87E] tabular-nums tracking-tight">
                      {item.cifra}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#8C887E]/60 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-sm font-heading font-semibold uppercase tracking-wider text-[#F1EBDD] block mt-0.5 sm:mt-1 leading-tight">
                    {item.etiqueta}
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#C4BFB4] mt-2 pt-1.5 sm:mt-2.5 sm:pt-2 border-t border-[#A58A60]/15 leading-snug sm:leading-relaxed">
                  {item.detalle}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </ScrollReveal>

        {/* Tres Bloques de Modalidades: En celular carrusel horizontal snap-scroll para ahorrar pantalla; en tablet/PC grilla de 3 columnas */}
        <ScrollReveal direction="up" delay={100} distance={24}>
          <div className="mb-8 sm:mb-14">
            <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-6 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {modalidades.map((m, idx) => {
                const Icon = m.icono;
                return (
                  <SpotlightCard
                    key={m.titulo}
                    spotlightColor="rgba(194, 168, 126, 0.16)"
                    borderColor="rgba(194, 168, 126, 0.5)"
                    className="snap-center shrink-0 w-[84%] sm:w-[340px] md:w-auto p-4 sm:p-7 bg-[#12110F] border border-[#A58A60]/25 hover:border-[#A58A60] rounded-sm transition-all duration-300 flex flex-col justify-between shadow-xl card-specular-edge group h-full relative"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between border-b border-[#A58A60]/15 pb-2.5 sm:pb-3.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#080807] border border-[#A58A60]/35 group-hover:border-[#C2A87E] flex items-center justify-center text-[#C2A87E] group-hover:text-[#F1EBDD] shrink-0 transition-all duration-300">
                          <Icon className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-[#A58A60]/80 group-hover:text-[#C2A87E] tabular-nums transition-colors">
                          0{idx + 1} / 03
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C2A87E] block font-semibold">
                          {m.subtitulo}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[#F1EBDD] font-heading mt-0.5 sm:mt-1 group-hover:text-[#C2A87E] transition-colors">
                          {m.titulo}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm font-medium text-[#F1EBDD] italic font-serif leading-relaxed py-2 border-y border-[#A58A60]/15">
                        “{m.descripcion}”
                      </p>

                      <p className="text-xs sm:text-sm text-[#C4BFB4] leading-relaxed">
                        {m.detalles}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 sm:pt-4 sm:mt-5 border-t border-[#A58A60]/15 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#C2A87E] uppercase tracking-wider">
                        {t("clases.groupsNote")}
                      </span>
                      <span className="text-[10px] font-mono text-[#8C887E] uppercase tracking-widest">
                        HETS
                      </span>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
            <div className="flex md:hidden items-center justify-between px-1 pt-1.5 text-[10px] font-mono text-[#8C887E] uppercase tracking-wider">
              <span>{lang === "en" ? "Swipe modalities →" : "Deslizá modalidades →"}</span>
              <span className="text-[#C2A87E] tabular-nums">01 — 03</span>
            </div>
          </div>
        </ScrollReveal>

        {/* TARJETA DE SEDE Y CRONOGRAMA DETALLADO DE HORARIOS */}
        <ScrollReveal direction="up" delay={120} distance={24}>
          <div className="p-4 sm:p-8 lg:p-10 bg-[#12110F] border border-[#A58A60]/40 rounded-sm shadow-2xl card-specular-edge relative overflow-hidden">
          
          {/* Filete superior de oro bruñido */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C2A87E] to-transparent opacity-80" />

          {/* Luz ambiental sutil detrás de la sede */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 bg-[#A58A60]/10 rounded-full blur-3xl pointer-events-none"
          />

          {/* Cabecera con datos de la sede y acciones principales */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5 border-b border-[#A58A60]/20 pb-4 sm:pb-6 mb-5 sm:mb-7 relative z-10">
            <div className="flex items-start sm:items-center gap-3 sm:gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-[#080807] border border-[#A58A60]/40 text-[#C2A87E] flex items-center justify-center shrink-0 shadow-lg">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#A58A60]" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#C2A87E] block font-semibold">
                  {lang === "en" ? "Official Dojo & Headquarters" : "Sede Central y Dojo Oficial"}
                </span>
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading mt-0.5">
                  {sede.nombre}
                </h3>
                <p className="text-xs sm:text-sm text-[#C4BFB4] mt-0.5 sm:mt-1 font-sans">
                  {sede.direccion} · <span className="text-[#F1EBDD] font-semibold">{sede.ciudad}</span>
                </p>
              </div>
            </div>

            {/* Acciones directas: En celular grilla de 2 columnas para no apilar botones altos */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 shrink-0 w-full lg:w-auto">
              <a
                href={sede.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#A58A60] via-[#C2A87E] to-[#A58A60] bg-[length:200%_auto] hover:bg-right rounded-sm transition-all duration-300 min-h-[44px] sm:min-h-[46px] shadow-lg shadow-[#A58A60]/20 active:scale-[0.98] group"
              >
                <span className="truncate">{lang === "en" ? "Google Maps" : "Google Maps"}</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:scale-110" />
              </a>

              <a
                href={getWhatsAppUrl(SITE_CONFIG.mensajesWhatsApp.clasePrueba)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F1EBDD] hover:text-[#080807] hover:bg-[#A58A60] border border-[#A58A60]/60 rounded-sm transition-all duration-300 min-h-[44px] sm:min-h-[46px] active:scale-[0.98]"
              >
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A58A60] shrink-0" />
                <span className="truncate">{lang === "en" ? "WhatsApp" : "WhatsApp"}</span>
              </a>
            </div>
          </div>

          {/* Subtítulo de Horarios Semanales */}
          <div className="mb-3.5 sm:mb-5 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C2A87E]" />
              <h4 className="text-xs sm:text-base font-heading uppercase tracking-wider text-[#F1EBDD] font-bold">
                {lang === "en" ? "Weekly Class Schedule (Day by Day)" : "Cronograma Semanal de Horarios (Día por Día)"}
              </h4>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-[#C4BFB4]">
              {lang === "en" ? "Official schedule verified on Google Maps" : "Horarios oficiales registrados en Google Maps"}
            </span>
          </div>

          {/* Grilla Semanal Día por Día: En celular grilla de 2 columnas (reduce de 7 bloques verticales a 3 filas compactas + domingo en 1 línea) */}
          <div className="grid grid-cols-2 lg:grid-cols-7 gap-2 sm:gap-3 mb-5 sm:mb-6 relative z-10">
            {sede.horariosSemana.map((item) => (
              <div
                key={item.dia}
                className={`rounded-sm border transition-all duration-300 relative overflow-hidden ${
                  item.abierto
                    ? "p-2.5 sm:p-3.5 flex flex-col justify-between bg-[#080807]/90 border-[#A58A60]/35 hover:border-[#C2A87E] hover:shadow-[0_0_15px_rgba(165,138,96,0.2)] card-specular-edge"
                    : "col-span-2 lg:col-span-1 px-3 py-2 sm:p-3.5 flex flex-row lg:flex-col items-center lg:items-stretch justify-between bg-[#080807]/40 border-white/5 opacity-55"
                }`}
              >
                {item.abierto && (
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#C2A87E] via-[#A58A60]/60 to-transparent" />
                )}

                {/* Encabezado del Día (Zero-Pill) */}
                <div className={item.abierto ? "" : "flex items-center gap-2 lg:block"}>
                  <div className={`flex items-center justify-between ${item.abierto ? "mb-1 sm:mb-1.5 border-b border-[#A58A60]/15 pb-1 sm:pb-1.5" : "lg:mb-1.5 lg:border-b lg:border-[#A58A60]/15 lg:pb-1.5 gap-2"}`}>
                    <span className="text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider text-[#F1EBDD]">
                      {lang === "en" ? item.diaEn : item.dia}
                    </span>
                    <span
                      className={`text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.14em] ${
                        item.abierto
                          ? "text-[#C2A87E] font-bold"
                          : "text-[#8C887E]"
                      }`}
                    >
                      {item.abierto
                        ? lang === "en"
                          ? "ACTIVE"
                          : "ACTIVO"
                        : lang === "en"
                        ? "CLOSED"
                        : "CERRADO"}
                    </span>
                  </div>

                  {/* Turno / Franja */}
                  <span className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                    item.abierto ? "text-[#A58A60] mb-1.5 sm:mb-2.5" : "text-[#8C887E] hidden lg:block lg:mb-2.5"
                  }`}>
                    {lang === "en" ? item.rotuloEn : item.rotulo}
                  </span>
                </div>

                {/* Horarios específicos con tabular-nums */}
                <div className={item.abierto ? "pt-1.5 sm:pt-2 border-t border-[#A58A60]/15 space-y-0.5 sm:space-y-1" : "lg:pt-2 lg:border-t lg:border-[#A58A60]/15"}>
                  {(lang === "en" ? item.turnosEn : item.turnos).map((turno, idx) => (
                    <p
                      key={idx}
                      className={`text-[11px] sm:text-xs font-mono font-semibold tabular-nums ${
                        item.abierto ? "text-[#F1EBDD]" : "text-[#8C887E]"
                      }`}
                    >
                      {turno}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Franja de Puntos Clave de la Práctica en la Sede */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5 pt-4 sm:pt-5 border-t border-[#A58A60]/20 relative z-10 text-xs text-[#EAE5D9]">
            <div className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xs bg-[#080807]/50 border border-[#A58A60]/20">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A58A60] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#F1EBDD] block text-[11px] sm:text-xs">
                  {lang === "en" ? "All Experience Levels" : "Todos los Niveles"}
                </span>
                <span className="text-[#C4BFB4] text-[10px] sm:text-[11px] leading-snug sm:leading-relaxed">
                  {lang === "en"
                    ? "No previous martial arts experience required to begin."
                    : "No se requiere experiencia marcial previa para sumarse."}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xs bg-[#080807]/50 border border-[#A58A60]/20">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A58A60] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#F1EBDD] block text-[11px] sm:text-xs">
                  {lang === "en" ? "Small Groups & Guidance" : "Grupos Reducidos"}
                </span>
                <span className="text-[#C4BFB4] text-[10px] sm:text-[11px] leading-snug sm:leading-relaxed">
                  {lang === "en"
                    ? "Careful biomechanical correction and conscious movement."
                    : "Seguimiento personalizado con corrección biomecánica y cuidado mutuo."}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xs bg-[#080807]/50 border border-[#A58A60]/20">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A58A60] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#F1EBDD] block text-[11px] sm:text-xs">
                  {lang === "en" ? "First Trial Class" : "Clase de Prueba"}
                </span>
                <span className="text-[#C4BFB4] text-[10px] sm:text-[11px] leading-snug sm:leading-relaxed">
                  {lang === "en"
                    ? "Coordinate your first session easily via WhatsApp."
                    : "Coordiná tu día y horario de prueba directamente por WhatsApp."}
                </span>
              </div>
            </div>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
