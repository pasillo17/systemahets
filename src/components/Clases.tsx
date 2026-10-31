import { Users, User, Calendar, MapPin, ExternalLink, Clock, MessageSquare, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";

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
    <section id="sedes-y-clases" className="py-14 sm:py-20 bg-[#080807] text-[#F1EBDD] border-t border-[#A58A60]/15 relative overflow-hidden">
      
      {/* Luz ambiental sutil en CSS puro */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#A58A60]/8 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.24em] text-[#C2A87E] block mb-2 font-semibold">
            {t("clases.kicker")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading">
            {t("clases.title")}
          </h2>
          <p className="text-sm sm:text-base text-[#EAE5D9] leading-relaxed mt-2">
            {t("clases.subtitle")}
          </p>
        </div>

        {/* FRANJA DE PRUEBA SOCIAL CON RESPLANDOR */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {pruebaSocial.map((item) => (
            <SpotlightCard
              key={item.etiqueta}
              spotlightColor="rgba(194, 168, 126, 0.12)"
              borderColor="rgba(194, 168, 126, 0.4)"
              className="p-4 sm:p-5 bg-[#12110F]/90 border border-[#A58A60]/25 rounded-sm flex flex-col justify-between card-specular-edge hover:border-[#A58A60]/60 transition-all duration-300"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-mono text-[#C2A87E] block group-hover:text-gold-gradient">
                  {item.cifra}
                </span>
                <span className="text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-[#F1EBDD] block mt-1">
                  {item.etiqueta}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#C4BFB4] mt-2 leading-relaxed">
                {item.detalle}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* Tres Bloques de Modalidades con SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {modalidades.map((m) => {
            const Icon = m.icono;
            return (
              <SpotlightCard
                key={m.titulo}
                spotlightColor="rgba(194, 168, 126, 0.16)"
                borderColor="rgba(194, 168, 126, 0.5)"
                className="p-5 sm:p-7 bg-[#12110F] border border-[#A58A60]/25 hover:border-[#A58A60] rounded-sm transition-all duration-300 flex flex-col justify-between shadow-xl card-specular-edge group"
              >
                <div className="space-y-3.5">
                  <div className="w-11 h-11 rounded-sm bg-[#080807] border border-[#A58A60]/30 group-hover:border-[#A58A60] group-hover:shadow-[0_0_15px_rgba(165,138,96,0.3)] flex items-center justify-center text-[#A58A60] group-hover:text-[#F1EBDD] shrink-0 transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C2A87E] block font-semibold">
                      {m.subtitulo}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white font-heading mt-0.5 group-hover:text-[#C2A87E] transition-colors">
                      {m.titulo}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-[#F1EBDD] italic font-serif leading-relaxed">
                    “{m.descripcion}”
                  </p>

                  <p className="text-xs sm:text-sm text-[#C4BFB4] leading-relaxed">
                    {m.detalles}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#A58A60]/15">
                  <span className="text-[10px] font-mono text-[#C2A87E] uppercase tracking-wider block">
                    {t("clases.groupsNote")}
                  </span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* TARJETA DE SEDE Y CRONOGRAMA DETALLADO DE HORARIOS */}
        <div className="p-5 sm:p-8 lg:p-10 bg-[#12110F] border border-[#A58A60]/40 rounded-sm shadow-2xl card-specular-edge relative overflow-hidden">
          
          {/* Luz ambiental sutil detrás de la sede */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 bg-[#A58A60]/10 rounded-full blur-3xl pointer-events-none"
          />

          {/* Cabecera con datos de la sede y acciones principales */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-[#A58A60]/20 pb-6 mb-7 relative z-10">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-12 h-12 rounded-sm bg-[#080807] border border-[#A58A60]/40 text-[#C2A87E] flex items-center justify-center shrink-0 shadow-lg">
                <MapPin className="w-6 h-6 text-[#A58A60]" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.24em] text-[#C2A87E] block font-semibold">
                  {lang === "en" ? "Official Dojo & Headquarters" : "Sede Central y Dojo Oficial"}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading mt-0.5">
                  {sede.nombre}
                </h3>
                <p className="text-xs sm:text-sm text-[#C4BFB4] mt-1 font-sans">
                  {sede.direccion} · <span className="text-[#F1EBDD] font-semibold">{sede.ciudad}</span>
                </p>
              </div>
            </div>

            {/* Acciones directas: Google Maps y WhatsApp */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
              <a
                href={sede.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#A58A60] via-[#C2A87E] to-[#A58A60] bg-[length:200%_auto] hover:bg-right rounded-sm transition-all duration-300 min-h-[46px] shadow-lg shadow-[#A58A60]/20 active:scale-[0.98] group"
              >
                <span>{lang === "en" ? "Open in Google Maps" : "Ver en Google Maps"}</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>

              <a
                href={getWhatsAppUrl(SITE_CONFIG.mensajesWhatsApp.clasePrueba)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#F1EBDD] hover:text-[#080807] hover:bg-[#A58A60] border border-[#A58A60]/60 rounded-sm transition-all duration-300 min-h-[46px] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-[#A58A60]" />
                <span>{lang === "en" ? "Consult via WhatsApp" : "Coordinar por WhatsApp"}</span>
              </a>
            </div>
          </div>

          {/* Subtítulo de Horarios Semanales */}
          <div className="mb-5 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C2A87E]" />
              <h4 className="text-sm sm:text-base font-heading uppercase tracking-wider text-[#F1EBDD] font-bold">
                {lang === "en" ? "Weekly Class Schedule (Day by Day)" : "Cronograma Semanal de Horarios (Día por Día)"}
              </h4>
            </div>
            <span className="text-[11px] font-mono text-[#C4BFB4]">
              {lang === "en" ? "Horarios oficiales verificados en Google Maps" : "Horarios oficiales registrados en Google Maps"}
            </span>
          </div>

          {/* Grilla Semanal Día por Día (Lunes a Domingo) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-6 relative z-10">
            {sede.horariosSemana.map((item) => (
              <div
                key={item.dia}
                className={`p-3.5 rounded-sm border transition-all duration-300 flex flex-col justify-between ${
                  item.abierto
                    ? "bg-[#080807]/80 border-[#A58A60]/35 hover:border-[#C2A87E] hover:shadow-[0_0_15px_rgba(165,138,96,0.25)] card-specular-edge"
                    : "bg-[#080807]/40 border-white/5 opacity-60"
                }`}
              >
                {/* Encabezado del Día */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#F1EBDD]">
                      {lang === "en" ? item.diaEn : item.dia}
                    </span>
                    <span
                      className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-xs tracking-wider ${
                        item.abierto
                          ? "bg-[#C05621]/20 text-[#F59E0B] border border-[#C05621]/50 font-bold shadow-[0_0_12px_rgba(217,119,6,0.25)]"
                          : "bg-white/5 text-[#8C887E]"
                      }`}
                    >
                      {item.abierto
                        ? lang === "en"
                          ? "Open"
                          : "Abierto"
                        : lang === "en"
                        ? "Closed"
                        : "Cerrado"}
                    </span>
                  </div>

                  {/* Turno / Franja con acento cobre fundido */}
                  <span className={`text-[10px] font-mono uppercase tracking-wider block mb-2 font-semibold ${
                    item.abierto ? "text-[#E07A5F]" : "text-[#8C887E]"
                  }`}>
                    {lang === "en" ? item.rotuloEn : item.rotulo}
                  </span>
                </div>

                {/* Horarios específicos */}
                <div className="pt-2 border-t border-[#A58A60]/15 space-y-1">
                  {(lang === "en" ? item.turnosEn : item.turnos).map((turno, idx) => (
                    <p
                      key={idx}
                      className={`text-xs font-mono font-semibold ${
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-5 border-t border-[#A58A60]/20 relative z-10 text-xs text-[#EAE5D9]">
            <div className="flex items-start gap-2.5 p-3 rounded-xs bg-[#080807]/50 border border-[#A58A60]/20">
              <CheckCircle2 className="w-4 h-4 text-[#A58A60] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#F1EBDD] block">
                  {lang === "en" ? "All Experience Levels" : "Todos los Niveles"}
                </span>
                <span className="text-[#C4BFB4] text-[11px] leading-relaxed">
                  {lang === "en"
                    ? "No previous martial arts experience required to begin."
                    : "No se requiere experiencia marcial previa para sumarse."}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xs bg-[#080807]/50 border border-[#A58A60]/20">
              <CheckCircle2 className="w-4 h-4 text-[#A58A60] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#F1EBDD] block">
                  {lang === "en" ? "Small Groups & Guidance" : "Grupos Reducidos"}
                </span>
                <span className="text-[#C4BFB4] text-[11px] leading-relaxed">
                  {lang === "en"
                    ? "Careful biomechanical correction and conscious movement."
                    : "Seguimiento personalizado con corrección biomecánica y cuidado mutuo."}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xs bg-[#080807]/50 border border-[#A58A60]/20">
              <CheckCircle2 className="w-4 h-4 text-[#A58A60] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#F1EBDD] block">
                  {lang === "en" ? "First Trial Class" : "Clase de Prueba"}
                </span>
                <span className="text-[#C4BFB4] text-[11px] leading-relaxed">
                  {lang === "en"
                    ? "Coordinate your first session easily via WhatsApp."
                    : "Coordiná tu día y horario de prueba directamente por WhatsApp."}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
