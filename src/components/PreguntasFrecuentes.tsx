import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * SECCIÓN DE PREGUNTAS FRECUENTES (FAQ) EN ACORDEÓN:
 * Fondo secundario Gris Grafito (#1C1E24), bordes en Dorado suave (rgba(197, 160, 89, 0.25)),
 * títulos en Blanco Humo (#F4F4F6) y respuestas en Gris Plata (#A0A5B1).
 */
export function PreguntasFrecuentes() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = isEn
    ? [
        {
          pregunta: "What clothing should I bring to my first class?",
          respuesta:
            "Just comfortable athletic clothes: a plain t-shirt and long sweatpants or joggers. You don't need a special uniform or protective gear to start.",
        },
        {
          pregunta: "Do I need prior fitness conditioning or martial arts experience?",
          respuesta:
            "Not at all. Training adapts to your current condition from day one. Because we work with breathing, perception, bodily intelligence, and the intelligent use of energy, anyone can join safely at their own pace.",
        },
        {
          pregunta: "What ages can train?",
          respuesta:
            "Classes are open to youths and adults with no upper age limit. At our location, people in their 20s, 40s, and 60s train together in a supportive, respectful environment.",
        },
        {
          pregunta: "How do I book a trial class and how does it work?",
          respuesta:
            "You can book directly with Diego via WhatsApp (+54 9 11 5653-2401) by choosing any shift from Monday to Friday (morning, midday, or evening at Calle 22 Nº 1027 between 53 & 54, La Plata). The trial class has an accessible single-session fee with no commitment—and if you decide to join that same month, that amount is credited directly toward your monthly plan.",
        },
        {
          pregunta: "What are the monthly plans, fees, and payment methods?",
          respuesta:
            "Monthly fees are structured according to how many times per week you attend (1x/week, 2x/week, unlimited Monday–Friday pass, or personalized 1-on-1 sessions). There is no registration or enrollment fee, and you can pay via bank transfer, Mercado Pago, or cash. Message us on WhatsApp to receive the current month's fee schedule right away.",
        },
      ]
    : [
        {
          pregunta: "¿Qué ropa necesito llevar para la primera clase?",
          respuesta:
            "Solo ropa deportiva cómoda: una remera y un pantalón largo tipo jogging. No hace falta comprar uniforme ni protecciones para venir a probar.",
        },
        {
          pregunta: "¿Hace falta tener estado físico previo o experiencia en artes marciales?",
          respuesta:
            "Para nada. Cada uno entrena a su propio ritmo desde el primer día. Como trabajamos a partir de la percepción, la inteligencia corporal y el aprovechamiento inteligente de la energía, podés sumarte tranquilamente aunque hace mucho no hagas actividad física.",
        },
        {
          pregunta: "¿Hay límite de edad para empezar a entrenar?",
          respuesta:
            "Las clases están abiertas a jóvenes y adultos sin límite de edad. En nuestra sede entrenan personas de 20, 40 o más de 60 años cuidándose mutuamente en cada ejercicio.",
        },
        {
          pregunta: "¿Cómo coordino una clase de prueba y qué modalidad tiene?",
          respuesta:
            "Escribinos por WhatsApp (+54 9 11 5653-2401) para elegir el día y horario que te quede más cómodo de lunes a viernes (turnos mañana, mediodía y tarde/noche en Calle 22 Nº 1027 entre 53 y 54, La Plata). La clase de prueba se abona como clase individual accesible, sin compromiso de inscripción, y si decidís sumarte durante ese mes ese importe se descuenta directamente del valor de tu cuota mensual.",
        },
        {
          pregunta: "¿Cuáles son los planes, aranceles y modalidades de pago?",
          respuesta:
            "Los aranceles mensuales varían según la frecuencia semanal que elijas: podés optar por planes de 1 vez por semana, 2 veces por semana, pase libre de lunes a viernes o clases individuales personalizadas. No cobramos matrícula de inscripción y podés abonar por transferencia bancaria, Mercado Pago o efectivo del 1 al 10 de cada mes.",
        },
      ];

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="py-10 sm:py-16 bg-[#121316] text-[#F4F4F6] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-6 sm:mb-8 border-b border-[#C5A059]/25 pb-3.5">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-tight text-[#F4F4F6]">
              {isEn ? "Frequently Asked Questions" : "Preguntas frecuentes"}
            </h2>
          </div>
        </ScrollReveal>

        {/* Acordeón en Gris Grafito (#1C1E24) con líneas divisorias en Dorado suave */}
        <ScrollReveal direction="up" delay={60} distance={20}>
          <div className="bg-[#1C1E24] border border-[#C5A059]/25 rounded-sm divide-y divide-[#C5A059]/25">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.pregunta} className="p-4 sm:p-5">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="text-sm sm:text-base font-heading font-bold uppercase tracking-wide text-[#F4F4F6] group-hover:text-[#C5A059] transition-colors leading-snug">
                      {item.pregunta}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#D4AF37]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-6 text-xs sm:text-sm text-[#A0A5B1] leading-relaxed font-sans animate-in fade-in duration-200">
                      {item.respuesta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
