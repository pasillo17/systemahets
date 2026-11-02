import { useState, useRef, useEffect } from "react";
import { MessageSquareQuote, ChevronLeft, ChevronRight, UserCheck } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * SECCIÓN TESTIMONIOS:
 * "Lo que dicen los alumnos" sobre fondo Arena Cálida (#EFE7DA),
 * tarjetas en Hueso Pergamino (#F8F3EB) y acentos en Terracota Pampeana (#B85332),
 * Ocre Arcilla (#9C7340), Carbón de Quebracho (#231C18) y Tierra Media (#57483F).
 */
export function Testimonios() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang, t } = useLanguage();

  const testimonios = SITE_CONFIG.testimonios.map((item) => {
    if (lang === "en") {
      switch (item.id) {
        case "testimonio-1":
          return {
            id: item.id,
            nombre: "Martín Soria",
            rol: "Dentist · Regular practitioner",
            tiempo: "3 years practicing",
            cita: "The combination of diaphragmatic breathing and joint release transformed not only my posture, but how I handle daily work stress. In Systema HETS there is no aggression or posturing; it is real, mindful movement applicable to daily life.",
          };
        case "testimonio-2":
          return {
            id: item.id,
            nombre: "Mariana Valenzuela",
            rol: "Teacher and somatic educator",
            tiempo: "1 year practicing",
            cita: "I had preconceptions about martial arts due to aggressive environments elsewhere. In Diego's classes, I found a climate of profound mutual respect and care, where you learn to move with your body without forcing joints or tensing the mind.",
          };
        case "testimonio-3":
          return {
            id: item.id,
            nombre: "Gastón Rossi",
            rol: "Systems analyst",
            tiempo: "2 years practicing",
            cita: "The ground work and body mass redirection are remarkable. Diego explains each principle with extraordinary pedagogical clarity: he teaches you to breathe, stay uncluttered under surprise, and maintain poise in any situation.",
          };
        default:
          return item;
      }
    }
    return item;
  });

  const scrollToTestimonial = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % testimonios.length;
    scrollToTestimonial(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + testimonios.length) % testimonios.length;
    scrollToTestimonial(prev);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex >= 0 && newIndex < testimonios.length) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [testimonios.length]);

  return (
    <section
      id="testimonios"
      className="pt-10 pb-14 sm:pt-20 sm:pb-24 bg-flow-testimonios text-[#F4EDE2] relative overflow-hidden"
    >
      {/* Luz ambiental sutil en Terracota Pampeana (#B85332) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[250px] bg-[#B85332]/12 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-12 border-b border-[#C49A64]/35 pb-3.5 sm:pb-5">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#DF7E5B] font-mono mb-1.5 sm:mb-2 font-bold">
                <MessageSquareQuote className="w-4 h-4 text-[#C49A64]" />
                <span>{t("test.kicker")}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading">
                {t("test.title")}
              </h2>
              <p className="text-xs sm:text-base text-[#C4B5A3] leading-relaxed mt-1.5 sm:mt-2 font-medium">
                {t("test.subtitle")}
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-12 h-12 rounded-sm bg-[#261E1A] border border-[#C49A64]/45 hover:border-[#C86442] hover:text-[#DF7E5B] text-[#F4EDE2] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-12 h-12 rounded-sm bg-[#261E1A] border border-[#C49A64]/45 hover:border-[#C86442] hover:text-[#DF7E5B] text-[#F4EDE2] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Carrusel Deslizable */}
        <ScrollReveal direction="up" delay={80} distance={24}>
          <div
            ref={scrollRef}
            className="flex gap-3.5 sm:gap-6 overflow-x-auto pb-4 sm:pb-6 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {testimonios.map((item, idx) => {
              const isOchre = idx === 1;
              return (
                <div
                  key={item.id}
                  className="snap-center shrink-0 w-[85%] sm:w-[380px] md:w-[420px] p-4.5 sm:p-7 bg-[#261E1A] border border-[#C49A64]/40 hover:border-[#C86442] rounded-sm flex flex-col justify-between card-specular-edge transition-all duration-300 group relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] ${
                      isOchre
                        ? "bg-gradient-to-r from-[#9C7340] via-[#C49A64] to-transparent"
                        : "bg-gradient-to-r from-[#B85332] via-[#C86442] to-transparent"
                    }`}
                  />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-mono border-b border-[#C49A64]/30 pb-3">
                      <span className="text-[#DF7E5B] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                        <UserCheck className="w-3.5 h-3.5 text-[#C49A64]" />
                        <span>{t("test.studentBadge")}</span>
                      </span>
                      <span className="text-[#C49A64] font-bold uppercase tracking-[0.16em]">
                        · {item.tiempo}
                      </span>
                    </div>

                    <blockquote className="text-sm sm:text-base text-[#F4EDE2] leading-relaxed italic font-serif">
                      “{item.cita}”
                    </blockquote>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#C49A64]/30 flex items-center justify-between">
                    <div>
                      <span className="font-heading text-sm font-bold uppercase tracking-wider text-[#F4EDE2] block group-hover:text-[#DF7E5B] transition-colors">
                        {item.nombre}
                      </span>
                      <span className="text-xs text-[#C4B5A3] font-sans block mt-0.5 font-medium">
                        {item.rol}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono font-bold text-[#DF7E5B] tabular-nums">
                      0{idx + 1} / 0{testimonios.length}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="flex items-center justify-center gap-2 pt-2 sm:hidden">
          {testimonios.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => scrollToTestimonial(dotIdx)}
              className={`h-2.5 rounded-xs transition-all cursor-pointer ${
                activeIndex === dotIdx
                  ? "bg-[#C86442] w-6"
                  : "bg-[#C4B5A3]/30 w-2.5"
              }`}
              aria-label={`Testimonial ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Testimonios as Prensa };
