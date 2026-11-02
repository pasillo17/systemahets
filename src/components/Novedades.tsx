import {
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowLeft,
  Compass,
  Wind,
  Activity,
  Shield,
  Trees,
  Award,
  Utensils,
  Clock,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

interface NovedadesProps {
  onBackHome: () => void;
}

/**
 * APARTADO EXCLUSIVO DE NOVEDADES (Fuera de la página inicial):
 * Presenta el evento oficial SYSTEMA HETS CAMP 2026 — Seminario Intensivo de 1 Día
 * en Estancia Santa Rita, Punta Indio (21 al 23 de noviembre), con transiciones
 * terrenales continuas y contraste tipográfico máximo en zonas claras y oscuras.
 */
export function Novedades({ onBackHome }: NovedadesProps) {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const whatsappCampUrl = getWhatsAppUrl(
    SITE_CONFIG.mensajesWhatsApp.camp2026 ||
      "Hola Diego, quiero consultar y reservar mi lugar para el SYSTEMA HETS CAMP 2026 (Seminario Intensivo de 1 Día en Estancia Santa Rita, Punta Indio)."
  );

  const ejesEntrenamiento = [
    {
      label: isEn ? "Breathing" : "Respiración",
      icono: Wind,
    },
    {
      label: isEn ? "Natural movement" : "Movimiento natural",
      icono: Compass,
    },
    {
      label: isEn ? "Relaxation" : "Relajación",
      icono: Activity,
    },
    {
      label: isEn ? "Bodywork" : "Trabajo corporal",
      icono: Shield,
    },
    {
      label: isEn ? "Combativeness principles" : "Principios de combatividad",
      icono: Award,
    },
    {
      label: isEn ? "Contact with nature" : "En contacto con la naturaleza",
      icono: Trees,
    },
  ];

  const incluyeItems = [
    {
      texto: isEn
        ? "Full day of intensive training."
        : "Jornada completa de entrenamiento.",
      detalle: isEn
        ? "Intensive field practice guided by Prof. Diego Martín Ledesma."
        : "Práctica intensiva en terreno natural guiada por el Prof. Diego Martín Ledesma.",
      icono: Activity,
    },
    {
      texto: isEn ? "Meals during the day." : "Comidas durante la jornada.",
      detalle: isEn
        ? "Shared meals included throughout the training day."
        : "Alimentación incluida durante el desarrollo de la jornada.",
      icono: Utensils,
    },
    {
      texto: isEn
        ? "Digital certificate of participation."
        : "Certificado digital de participación.",
      detalle: isEn
        ? "Official accreditation issued by Systema HETS Argentina."
        : "Acreditación oficial emitida por Systema HETS Argentina.",
      icono: Award,
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* 1. CABECERA EN TIERRA SOMBRA PROFUNDA CON TRANSICIÓN ORGÁNICA HACIA HUESO / ARENA */}
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-24 bg-flow-brown-to-light overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[460px] h-72 sm:h-[460px] bg-[#B85332]/16 rounded-full blur-[90px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-72 sm:w-[420px] h-72 sm:h-[420px] bg-[#C49A64]/14 rounded-full blur-[90px] pointer-events-none"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Barra superior de retorno al inicio + Kicker de Novedades */}
          <ScrollReveal direction="up" distance={16}>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 sm:mb-8 border-b border-[#C49A64]/35">
              <button
                type="button"
                onClick={onBackHome}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F4EDE2] hover:text-[#DF7E5B] bg-[#1F1916]/90 border border-[#C49A64]/50 hover:border-[#C86442] px-3.5 py-2 rounded-sm transition-colors cursor-pointer min-h-[42px]"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#C86442]" />
                <span>
                  {isEn ? "Back to Home Page" : "Volver a la Página Inicial"}
                </span>
              </button>

              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-[#C49A64] font-semibold">
                <span>{isEn ? "NEWS & SPECIAL EVENTS" : "APARTADO DE NOVEDADES"}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#DF7E5B]">2026</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Tarjeta Protagonista del Evento en Tierra Sombra (#1F1916) para garantizar 100% contraste sobre la transición */}
          <ScrollReveal direction="up" delay={60} distance={22}>
            <div className="relative rounded-sm bg-gradient-to-b from-[#261E1A] via-[#211A16] to-[#1C1613] border-2 border-[#C49A64]/65 p-5 sm:p-9 lg:p-11 earth-block-transition-glow card-specular-edge overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Columna Izquierda: Título, Subtítulo y Descripción Oficial */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#DF7E5B] font-bold">
                    <span>Systema HETS Argentina</span>
                    <span className="text-[#C49A64]" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-[#E6C391]">
                      {isEn
                        ? "Estancia Santa Rita, Punta Indio"
                        : "Estancia Santa Rita, Punta Indio"}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading leading-none">
                      SYSTEMA HETS CAMP 2026
                    </h1>
                    <p className="text-lg sm:text-2xl font-heading uppercase tracking-wide text-[#DF7E5B] font-bold">
                      {isEn
                        ? "1-Day Intensive Seminar"
                        : "Seminario Intensivo de 1 Día"}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm sm:text-base text-[#F4EDE2] leading-relaxed font-sans pt-1">
                    <p>
                      {isEn
                        ? "We invite you to participate in an intensive Systema training day at Estancia Santa Rita, Punta Indio, during the Camp from November 21 to 23."
                        : "Te invitamos a participar de una jornada de entrenamiento intensivo de Systema en Estancia Santa Rita, Punta Indio, durante el Camp del 21 al 23 de noviembre."}
                    </p>
                    <p className="text-[#E5DAC9]">
                      {isEn
                        ? "An experience of breathing, natural movement, relaxation, bodywork, and combativeness principles, in contact with nature."
                        : "Una experiencia de respiración, movimiento natural, relajación, trabajo corporal y principios de combatividad, en contacto con la naturaleza."}
                    </p>
                  </div>

                  {/* Metadatos limpios con separadores tipográficos */}
                  <div className="pt-2 border-t border-[#C4B5A3]/25 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#E6C391]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#DF7E5B]" />
                      <span>
                        {isEn
                          ? "Camp: November 21 to 23"
                          : "Camp del 21 al 23 de noviembre"}
                      </span>
                    </span>
                    <span className="text-[#C4B5A3]/50" aria-hidden="true">
                      ·
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#DF7E5B]" />
                      <span>Estancia Santa Rita, Punta Indio</span>
                    </span>
                  </div>
                </div>

                {/* Columna Derecha: Imagen / Marco Editorial del Encuentro en la Naturaleza */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-sm overflow-hidden border border-[#C49A64]/60 bg-[#171210] shadow-2xl">
                    <div className="aspect-[16/11] relative overflow-hidden">
                      <img
                        src={SITE_CONFIG.assets.entrenamientoAireLibre}
                        alt="Systema HETS Camp 2026 — Entrenamiento en contacto con la naturaleza"
                        className="w-full h-full object-cover filter brightness-95 contrast-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            SITE_CONFIG.assets.heroImage;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#171210] via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#F4EDE2]">
                        <span className="uppercase tracking-wider font-bold text-[#DF7E5B]">
                          Punta Indio · Buenos Aires
                        </span>
                        <span className="text-[#E6C391] font-semibold">
                          21 – 23 NOV
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-[#1F1916] border-t border-[#C49A64]/35 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#F4EDE2] block">
                          Prof. Diego Martín Ledesma
                        </span>
                        <span className="text-[11px] font-mono text-[#C49A64] block">
                          Systema HETS Argentina
                        </span>
                      </div>
                      <a
                        href={whatsappCampUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-shimmer-lightning px-3.5 py-2 text-[11px] font-mono font-extrabold uppercase tracking-wider text-[#F4EDE2] rounded-xs inline-flex items-center gap-1.5 shrink-0"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{isEn ? "Reserve" : "Reservar"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. SECCIÓN CLARA EN BLANCO HUESO (#F8F3EB) Y ARENA CÁLIDA (#EFE7DA) CON CONTRASTE ALTO (#231C18 / #362B24) */}
      <section className="py-10 sm:py-18 bg-flow-systema text-[#231C18] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Ejes de la Experiencia en la Naturaleza */}
          <ScrollReveal direction="up" distance={20}>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#C9B8A0] pb-3">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.24em] text-[#9E3E1E] font-bold block">
                    {isEn ? "TRAINING PILLARS" : "EJES DE LA JORNADA"}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-tight text-[#231C18] mt-0.5">
                    {isEn
                      ? "Practice in Contact with Nature"
                      : "Entrenamiento en Contacto con la Naturaleza"}
                  </h2>
                </div>
                <span className="text-xs font-mono text-[#4A3B32] font-bold">
                  Estancia Santa Rita · Punta Indio
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
                {ejesEntrenamiento.map((eje, idx) => {
                  const Icon = eje.icono;
                  return (
                    <div
                      key={eje.label}
                      className="p-3.5 bg-[#F8F3EB] border border-[#D6C8B4] hover:border-[#B85332] rounded-sm card-light-steel-elevation flex flex-col justify-between gap-2 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-xs bg-[#261E1A] text-[#DF7E5B] border border-[#C86442]/60 flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#6E4B20] tabular-nums">
                          0{idx + 1}
                        </span>
                      </div>
                      <span className="text-xs font-heading font-bold uppercase tracking-wide text-[#231C18] leading-snug">
                        {eje.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Grilla Principal de Información: Qué incluye + Valores y Reservas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Columna Izquierda (7 cols): Qué incluye la inscripción y condiciones */}
            <ScrollReveal
              direction="up"
              delay={80}
              distance={22}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <SpotlightCard
                spotlightColor="rgba(184, 83, 50, 0.1)"
                borderColor="rgba(184, 83, 50, 0.55)"
                className="p-5 sm:p-8 bg-[#F8F3EB] border border-[#C9B8A0] rounded-sm card-light-steel-elevation h-full flex flex-col justify-between space-y-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B85332] via-[#9C7340] to-transparent" />

                <div className="space-y-5">
                  <div className="border-b border-[#D6C8B4] pb-3.5">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#9E3E1E] font-bold block">
                      {isEn ? "REGISTRATION DETAILS" : "DETALLE DEL SEMINARIO"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide text-[#231C18] mt-1">
                      {isEn
                        ? "La inscripción incluye:"
                        : "La inscripción incluye:"}
                    </h3>
                  </div>

                  {/* Lista de 3 ítems incluidos */}
                  <ul className="space-y-3.5">
                    {incluyeItems.map((item) => {
                      const Icon = item.icono;
                      return (
                        <li
                          key={item.texto}
                          className="p-3.5 sm:p-4 rounded-sm bg-[#EFE7DA] border border-[#D6C8B4] flex items-start gap-3.5"
                        >
                          <div className="w-9 h-9 rounded-xs bg-[#261E1A] text-[#DF7E5B] border border-[#C86442]/60 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#9E3E1E] shrink-0" />
                              <span className="text-sm sm:text-base font-bold text-[#231C18]">
                                {item.texto}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#362B24] mt-1 leading-relaxed">
                              {item.detalle}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Avisos importantes: No incluye hospedaje ni transporte + Cupos y Fecha */}
                <div className="space-y-3 pt-4 border-t border-[#D6C8B4]">
                  <div className="p-3.5 rounded-sm bg-[#EFE7DA] border-l-4 border-[#9E3E1E] flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-[#9E3E1E] shrink-0" />
                    <p className="text-xs sm:text-sm font-bold text-[#231C18]">
                      {isEn
                        ? "Does not include lodging or transportation."
                        : "No incluye hospedaje ni transporte."}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-sm bg-[#EFE7DA] border-l-4 border-[#6E4B20] flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#6E4B20] shrink-0" />
                    <p className="text-xs sm:text-sm font-bold text-[#231C18]">
                      {isEn
                        ? "Limited spots. Specific date of the 1-day seminar to be confirmed."
                        : "Cupos limitados. Fecha específica de la jornada a confirmar."}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            {/* Columna Derecha (5 cols): Valores Promocionales, Firma y Reserva por WhatsApp */}
            <ScrollReveal
              direction="up"
              delay={140}
              distance={22}
              className="lg:col-span-5 relative"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-3 bg-gradient-to-b from-[#8C725E]/28 via-[#B85332]/20 to-[#8C725E]/28 rounded-md blur-xl pointer-events-none"
              />
              <div className="relative h-full p-5 sm:p-8 bg-[#231C18] text-[#F4EDE2] border-2 border-[#C49A64]/65 rounded-sm earth-block-transition-glow card-specular-edge flex flex-col justify-between space-y-6">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332]" />

                <div className="space-y-5">
                  <div className="border-b border-[#C4B5A3]/25 pb-3.5">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#DF7E5B] font-bold block">
                      {isEn ? "INVESTMENT & VALUES" : "ARANCELES E INSCRIPCIÓN"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide text-[#F4EDE2] mt-1">
                      {isEn
                        ? "Values & Direct Booking"
                        : "Valores y Reserva de Cupo"}
                    </h3>
                  </div>

                  {/* Tarjeta Valor Promocional */}
                  <div className="p-4 sm:p-5 rounded-sm bg-[#2E241F] border-2 border-[#C86442] shadow-lg space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                      <span className="text-[#DF7E5B] font-bold">
                        {isEn ? "PROMOTIONAL VALUE" : "VALOR PROMOCIONAL"}
                      </span>
                      <span className="text-[#E6C391] font-semibold">
                        {isEn ? "Until October 31" : "Hasta el 31 de octubre"}
                      </span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-mono font-extrabold text-[#F4EDE2] tabular-nums tracking-tight">
                      $90.000
                    </div>
                    <p className="text-xs text-[#E5DAC9] font-medium">
                      Valor promocional: $90.000 hasta el 31 de octubre.
                    </p>
                  </div>

                  {/* Tarjeta Valor desde el 1 de noviembre */}
                  <div className="p-4 rounded-sm bg-[#1A1412] border border-[#C49A64]/50 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                      <span className="text-[#E6C391] font-bold">
                        {isEn ? "FROM NOVEMBER 1" : "DESDE EL 1 DE NOVIEMBRE"}
                      </span>
                      <span className="text-[#C4B5A3]">
                        {isEn ? "No exceptions" : "Sin excepciones"}
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-[#F4EDE2] tabular-nums tracking-tight">
                      $120.000
                    </div>
                    <p className="text-xs text-[#C4B5A3]">
                      Desde el 1 de noviembre: $120.000 sin excepciones.
                    </p>
                  </div>

                  {/* Firma Institucional */}
                  <div className="p-4 rounded-sm bg-[#1A1412]/90 border border-[#C4B5A3]/25 space-y-1">
                    <span className="text-sm sm:text-base font-heading font-bold uppercase tracking-wider text-[#F4EDE2] block">
                      Prof. Diego Martín Ledesma
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#E6C391] font-semibold block">
                      Systema HETS Argentina
                    </span>
                  </div>
                </div>

                {/* Bloque de Consultas y Reservas por WhatsApp */}
                <div className="pt-4 border-t border-[#C4B5A3]/25 space-y-3">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#E6C391] font-bold block">
                      Consultas y reservas:
                    </span>
                    <span className="text-base sm:text-lg font-mono font-bold text-[#F4EDE2] block">
                      WhatsApp: +54 9 11 5653-2401
                    </span>
                  </div>

                  <a
                    href={whatsappCampUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer-lightning w-full min-h-[52px] h-auto px-4 sm:px-5 py-3.5 rounded-sm text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#F4EDE2] flex items-center justify-center gap-2.5 shadow-xl shadow-[#B85332]/30 active:scale-[0.98] whitespace-normal sm:whitespace-nowrap text-center leading-snug"
                  >
                    <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                    <span>
                      {isEn
                        ? "INQUIRE & BOOK VIA WHATSAPP"
                        : "CONSULTAR Y RESERVAR POR WHATSAPP"}
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. PUENTE DE CIERRE DE BLANCO HUESO / ARENA A MARRÓN TIERRA SOMBRA */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-flow-light-to-brown text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="py-6 px-5 sm:py-8 sm:px-8 rounded-sm bg-[#1F1916]/92 border border-[#C49A64]/45 shadow-xl space-y-4">
            <p className="text-sm sm:text-base font-serif italic text-[#F4EDE2]">
              “Una experiencia de respiración, movimiento natural, relajación,
              trabajo corporal y principios de combatividad, en contacto con la
              naturaleza.”
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={onBackHome}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#F4EDE2] bg-[#261E1A] hover:bg-[#B85332] border border-[#C49A64]/55 rounded-sm transition-colors cursor-pointer min-h-[44px]"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#DF7E5B]" />
                <span>
                  {isEn
                    ? "Return to Systema HETS Home"
                    : "Volver al Inicio de Systema HETS"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
