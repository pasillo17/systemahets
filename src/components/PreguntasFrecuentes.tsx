import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * SECCIÓN DE PREGUNTAS FRECUENTES (FAQ) EN ACORDEÓN LIMPIO:
 * Sin etiquetas superiores (eyebrow tags) y en español rioplatense natural.
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
            "Not at all. Training adapts to your current condition from day one. Because we work with breathing and natural movement rather than brute strength, anyone can join safely at their own pace.",
        },
        {
          pregunta: "What ages can train?",
          respuesta:
            "Classes are open to youths and adults with no upper age limit. Since there are no aggressive collisions or acrobatic demands, people in their 20s, 40s, and 60s train together in a supportive environment.",
        },
        {
          pregunta: "How do I book a trial class?",
          respuesta:
            "Just message Diego on WhatsApp (+54 9 11 5653-2401) and pick the day that works best for you. We have morning, midday, and evening classes Monday through Friday in La Plata, plus private sessions and weekend seminars.",
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
            "Para nada. Cada uno entrena a su propio ritmo desde el primer día. Como no dependemos de la fuerza bruta ni de acrobacias, podés sumarte tranquilamente aunque hace mucho no hagas actividad física.",
        },
        {
          pregunta: "¿Hay límite de edad para empezar a entrenar?",
          respuesta:
            "Las clases están abiertas a jóvenes y adultos sin límite de edad. En el dojo entrenan personas de 20, 40 o más de 60 años cuidándose mutuamente en cada ejercicio.",
        },
        {
          pregunta: "¿Cómo coordino una clase de prueba y cuáles son los valores?",
          respuesta:
            "Escribinos directo por WhatsApp (+54 9 11 5653-2401) y coordinamos el día que te quede más cómodo entre lunes y viernes (hay turnos a la mañana, al mediodía y a la tarde/noche en Calle 22 entre 53 y 54, La Plata).",
        },
      ];

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="py-10 sm:py-16 bg-flow-light-to-brown text-[#F4EDE2] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-6 sm:mb-8 border-b border-[#C49A64]/30 pb-3.5">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-tight text-[#F4EDE2]">
              {isEn ? "Frequently Asked Questions" : "Preguntas frecuentes"}
            </h2>
          </div>
        </ScrollReveal>

        {/* Acordeón limpio con líneas divisorias (sin exceso de cajas) */}
        <ScrollReveal direction="up" delay={60} distance={20}>
          <div className="divide-y divide-[#C49A64]/25 border-b border-[#C49A64]/25">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.pregunta} className="py-3.5 sm:py-4">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group py-1"
                  >
                    <span className="text-sm sm:text-base font-heading font-bold uppercase tracking-wide text-[#F4EDE2] group-hover:text-[#DF7E5B] transition-colors leading-snug">
                      {item.pregunta}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C86442] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#DF7E5B]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-2.5 pb-1 pr-6 text-xs sm:text-sm text-[#C4B5A3] leading-relaxed font-sans animate-in fade-in duration-200">
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
