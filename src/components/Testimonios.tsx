import { useState, useRef, useEffect } from "react";
import { MessageSquareQuote, ChevronLeft, ChevronRight, UserCheck } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";

/**
 * Sección "Lo que dicen los alumnos":
 * Carrusel interactivo scroll-snap con soporte bilingüe ES / EN.
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
    <section id="testimonios" className="py-14 sm:py-20 bg-[#080807] text-[#F1EBDD] border-t border-[#A58A60]/15 relative overflow-hidden">
      
      {/* Luz ambiental sutil en CSS puro */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[250px] bg-[#A58A60]/5 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#C2A87E] font-mono mb-2 font-semibold">
              <MessageSquareQuote className="w-4 h-4 text-[#A58A60]" />
              <span>{t("test.kicker")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading">
              {t("test.title")}
            </h2>
            <p className="text-sm sm:text-base text-[#EAE5D9] leading-relaxed mt-2">
              {t("test.subtitle")}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-12 h-12 rounded-sm bg-[#12110F] border border-[#A58A60]/30 hover:border-[#A58A60] hover:text-[#A58A60] text-[#F1EBDD] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-12 h-12 rounded-sm bg-[#12110F] border border-[#A58A60]/30 hover:border-[#A58A60] hover:text-[#A58A60] text-[#F1EBDD] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carrusel Deslizable */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {testimonios.map((item, idx) => (
            <SpotlightCard
              key={item.id}
              spotlightColor="rgba(194, 168, 126, 0.15)"
              borderColor="rgba(194, 168, 126, 0.45)"
              className="snap-center shrink-0 w-[86%] sm:w-[380px] md:w-[420px] p-6 sm:p-7 bg-[#12110F] border border-[#A58A60]/30 hover:border-[#A58A60] rounded-sm flex flex-col justify-between shadow-2xl card-specular-edge transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#C2A87E] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    <UserCheck className="w-3.5 h-3.5 text-[#A58A60]" />
                    <span>{t("test.studentBadge")}</span>
                  </span>
                  <span className="text-[#A58A60] text-[9px] uppercase tracking-wider bg-[#080807] px-2 py-0.5 border border-[#A58A60]/30 rounded-xs">
                    {item.tiempo}
                  </span>
                </div>

                <blockquote className="text-base text-[#EAE5D9] leading-relaxed italic font-serif">
                  “{item.cita}”
                </blockquote>
              </div>

              <div className="pt-5 mt-5 border-t border-[#A58A60]/20 flex items-center justify-between">
                <div>
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-[#F1EBDD] block group-hover:text-[#C2A87E] transition-colors">
                    {item.nombre}
                  </span>
                  <span className="text-xs text-[#C4BFB4] font-sans block mt-0.5">
                    {item.rol}
                  </span>
                </div>

                <div className="text-[10px] font-mono text-[#A58A60]">
                  0{idx + 1} / 0{testimonios.length}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 pt-2 sm:hidden">
          {testimonios.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => scrollToTestimonial(dotIdx)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                activeIndex === dotIdx
                  ? "bg-[#A58A60] w-6"
                  : "bg-[#25221E] border border-[#A58A60]/30"
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
