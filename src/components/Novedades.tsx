import { useEffect } from "react";
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

interface NovedadesProps {
  onBackHome: () => void;
}

/**
 * APARTADO EXCLUSIVO DE NOVEDADES (Fuera de la página inicial):
 * Presenta el evento oficial SYSTEMA HETS CAMP 2026 — Encuentro Intensivo en la Naturaleza · Noviembre 2026
 * en Estancia Santa Rita, Punta Indio, con estilo editorial limpio sin exceso de bordes.
 */
export function Novedades({ onBackHome }: NovedadesProps) {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleReturnHome = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    onBackHome();
  };

  const whatsappCampUrl = getWhatsAppUrl(
    SITE_CONFIG.mensajesWhatsApp.camp2026 ||
      "Hola Diego, quiero consultar y reservar mi lugar para el SYSTEMA HETS CAMP 2026 en Estancia Santa Rita, Punta Indio."
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
      {/* 1. CABECERA EN TIERRA SOMBRA PROFUNDA */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-18 bg-flow-brown-to-light overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[460px] h-72 sm:h-[460px] bg-[#B85332]/16 rounded-full blur-[90px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-72 sm:w-[420px] h-72 sm:h-[420px] bg-[#C49A64]/14 rounded-full blur-[90px] pointer-events-none"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Barra superior de retorno al inicio */}
          <ScrollReveal direction="up" distance={16}>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 sm:mb-8 border-b border-[#C49A64]/35">
              <button
                type="button"
                onClick={handleReturnHome}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F4EDE2] hover:text-[#DF7E5B] bg-[#1F1916]/90 border border-[#C49A64]/50 hover:border-[#C86442] px-3.5 py-2 rounded-sm transition-colors cursor-pointer min-h-[42px]"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#C86442]" />
                <span>
                  {isEn ? "Back to Home Page" : "Volver a la página inicial"}
                </span>
              </button>
            </div>
          </ScrollReveal>

          {/* Presentación Principal del Evento */}
          <ScrollReveal direction="up" delay={60} distance={22}>
            <div className="relative rounded-sm bg-gradient-to-b from-[#261E1A] via-[#211A16] to-[#1C1613] border border-[#C49A64]/55 p-5 sm:p-9 lg:p-11 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Columna Izquierda: Título, Subtítulo Unificado y Descripción */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading leading-none">
                      SYSTEMA HETS CAMP 2026
                    </h1>
                    <p className="text-base sm:text-xl font-heading uppercase tracking-wide text-[#DF7E5B] font-bold">
                      {isEn
                        ? "INTENSIVE NATURE GATHERING · NOVEMBER 2026"
                        : "ENCUENTRO INTENSIVO EN LA NATURALEZA · NOVIEMBRE 2026"}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm sm:text-base text-[#F4EDE2] leading-relaxed font-sans pt-1">
                    <p>
                      {isEn
                        ? "We invite you to participate in our intensive Systema training gathering at Estancia Santa Rita, Punta Indio, from November 21 to 23."
                        : "Te invitamos a participar de nuestro encuentro de entrenamiento intensivo de Systema en Estancia Santa Rita, Punta Indio, del 21 al 23 de noviembre."}
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
                          ? "November 21 to 23, 2026"
                          : "21 al 23 de noviembre de 2026"}
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

                {/* Columna Derecha: Imagen Editorial del Encuentro en la Naturaleza */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-sm overflow-hidden border border-[#C49A64]/50 bg-[#171210] shadow-xl">
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

      {/* 2. SECCIÓN EDITORIAL ABIERTA: EJES, QUÉ INCLUYE Y VALORES */}
      <section className="py-10 sm:py-16 bg-flow-systema text-[#F4EDE2] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          {/* Ejes de la Experiencia en la Naturaleza (abiertos sin recuadros cerrados) */}
          <ScrollReveal direction="up" distance={20}>
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#C49A64]/30 pb-3">
                <h2 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-tight text-[#F4EDE2]">
                  {isEn
                    ? "Practice in Contact with Nature"
                    : "Entrenamiento en Contacto con la Naturaleza"}
                </h2>
                <span className="text-xs font-mono text-[#C49A64] font-bold">
                  Estancia Santa Rita · Punta Indio
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-1">
                {ejesEntrenamiento.map((eje) => {
                  const Icon = eje.icono;
                  return (
                    <div
                      key={eje.label}
                      className="flex flex-col gap-2 pb-3 border-b border-[#C49A64]/20"
                    >
                      <Icon className="w-5 h-5 text-[#DF7E5B] stroke-[1.75]" />
                      <span className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wide text-[#F4EDE2] leading-snug">
                        {eje.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Grilla Principal de Información: Qué incluye (abierto sin bordes de tarjeta) + Valores y Reservas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2 border-t border-[#C49A64]/25">
            {/* Columna Izquierda (7 cols): Qué incluye la inscripción y condiciones (estilo editorial limpio sin recuadros) */}
            <ScrollReveal
              direction="up"
              delay={80}
              distance={22}
              className="lg:col-span-7 space-y-6"
            >
              <div className="border-b border-[#C49A64]/30 pb-3">
                <h3 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide text-[#F4EDE2]">
                  {isEn
                    ? "Registration Includes:"
                    : "La inscripción incluye:"}
                </h3>
              </div>

              {/* Lista de 3 ítems incluidos SIN RECUADROS (separados únicamente por líneas divisorias sutiles) */}
              <ul className="divide-y divide-[#C49A64]/20">
                {incluyeItems.map((item) => {
                  const Icon = item.icono;
                  return (
                    <li
                      key={item.texto}
                      className="py-4 first:pt-0 flex items-start gap-3.5"
                    >
                      <Icon className="w-5 h-5 text-[#DF7E5B] shrink-0 mt-0.5 stroke-[1.75]" />
                      <div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#DF7E5B] shrink-0" />
                          <span className="text-sm sm:text-base font-bold text-[#F4EDE2]">
                            {item.texto}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C4B5A3] mt-1 leading-relaxed">
                          {item.detalle}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Condiciones importantes en formato editorial abierto sin recuadros */}
              <div className="pt-4 border-t border-[#C49A64]/25 divide-y divide-[#C49A64]/15">
                <div className="py-3 first:pt-0 flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-[#DF7E5B] shrink-0" />
                  <p className="text-xs sm:text-sm font-medium text-[#F4EDE2]">
                    {isEn
                      ? "Does not include lodging or transportation."
                      : "No incluye hospedaje ni transporte."}
                  </p>
                </div>

                <div className="py-3 last:pb-0 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#C49A64] shrink-0" />
                  <p className="text-xs sm:text-sm font-medium text-[#F4EDE2]">
                    {isEn
                      ? "Limited spots with prior reservation."
                      : "Cupos limitados con reserva previa."}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Columna Derecha (5 cols): Valores y Reserva de Cupo (Unificada con el valor vigente actualizado) */}
            <ScrollReveal
              direction="up"
              delay={140}
              distance={22}
              className="lg:col-span-5 relative"
            >
              <div className="relative p-5 sm:p-8 bg-[#231C18] text-[#F4EDE2] border border-[#C49A64]/55 rounded-sm flex flex-col justify-between space-y-6">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332]" />

                <div className="space-y-5">
                  <div className="border-b border-[#C4B5A3]/25 pb-3.5">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide text-[#F4EDE2]">
                      {isEn
                        ? "Values & Direct Booking"
                        : "Valores y Reserva de Cupo"}
                    </h3>
                  </div>

                  {/* Tarjeta Unificada de Valor de Inscripción Vigente (Noviembre 2026) */}
                  <div className="p-4 sm:p-5 rounded-sm bg-[#2E241F] border border-[#C86442] space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                      <span className="text-[#DF7E5B] font-bold">
                        {isEn ? "CURRENT REGISTRATION VALUE" : "VALOR DE INSCRIPCIÓN VIGENTE"}
                      </span>
                      <span className="text-[#E6C391] font-semibold">
                        {isEn ? "November 2026" : "Noviembre 2026"}
                      </span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-mono font-extrabold text-[#F4EDE2] tabular-nums tracking-tight">
                      $120.000
                    </div>
                  </div>

                  {/* Referencia discreta de preventa finalizada (solo etiqueta y monto, sin párrafos repetitivos) */}
                  <div className="px-4 py-3 rounded-sm bg-[#1A1412]/70 border border-[#C49A64]/25 flex items-center justify-between opacity-75">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#C4B5A3]">
                      <span>
                        {isEn ? "EARLY BIRD (UNTIL OCT 31)" : "PREVENTA HASTA EL 31 DE OCTUBRE"}
                      </span>
                    </div>
                    <div className="text-sm font-mono font-bold text-[#C4B5A3] line-through tabular-nums">
                      $90.000
                    </div>
                  </div>

                  {/* Firma Institucional sin recuadro cerrado */}
                  <div className="pt-2 border-t border-[#C4B5A3]/20 space-y-0.5">
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

      {/* 3. PUENTE DE CIERRE */}
      <section className="pt-12 pb-12 sm:pt-18 sm:pb-16 bg-flow-light-to-brown text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <p className="text-sm sm:text-base font-sans text-[#F4EDE2] leading-relaxed">
            Una experiencia de respiración, movimiento natural, relajación,
            trabajo corporal y principios de combatividad, en contacto con la
            naturaleza.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={handleReturnHome}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#F4EDE2] bg-[#261E1A] hover:bg-[#B85332] border border-[#C49A64]/55 rounded-sm transition-colors cursor-pointer min-h-[44px]"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#DF7E5B]" />
              <span>
                {isEn
                  ? "Return to Systema HETS Home"
                  : "Volver a la página inicial"}
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
