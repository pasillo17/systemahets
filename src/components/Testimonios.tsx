import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

/**
 * SECCIÓN TESTIMONIOS:
 * Reseñas auténticas de alumnos reales en Argentina con tarjetas en Gris Grafito (#1C1E24),
 * elevación 3D sutil y acentos en Dorado Antiguo (#C5A059).
 */
export function Testimonios() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang, t } = useLanguage();

  const testimonios = SITE_CONFIG.testimonios.map((item) => {
    const avatarImg =
      (item as { avatarHombre?: string; avatar?: string }).avatarHombre ||
      item.avatar;
    if (lang === "en") {
      switch (item.id) {
        case "testimonio-1":
          return {
            id: item.id,
            nombre: "Martín Soria",
            rol: "Dentist · Training for 3 years",
            tiempo: "3 years ago",
            avatar: avatarImg,
            cita: "I started three years ago looking to unwind after long hours at my clinic and found an incredible place. Nobody here is trying to show off or compete; you train seriously, learn genuine self-protection, and leave every class feeling much looser. Diego has huge patience and clarity when teaching.",
          };
        case "testimonio-2":
          return {
            id: item.id,
            nombre: "Mariana Valenzuela",
            rol: "Teacher · Training for 1 year",
            tiempo: "1 year ago",
            avatar: avatarImg,
            cita: "I went to my first class a bit nervous because I had never done martial arts and thought it might be an intimidating environment. It was the complete opposite: the group in La Plata is super welcoming, everyone trains at their own pace, and people really look out for each other. Highly recommend.",
          };
        case "testimonio-3":
          return {
            id: item.id,
            nombre: "Gastón Rossi",
            rol: "Systems Analyst · Training for 2 years",
            tiempo: "2 years ago",
            avatar: avatarImg,
            cita: "I practiced other martial arts for several years and always ended up with a stiff back or sore knees. What surprised me most about Systema HETS is how you learn to manage impacts and reduce the risk of injury when going to the ground, escape grabs through the intelligent use of energy, and use your breathing under pressure. Very practical both in training and in everyday life.",
          };
        default:
          return { ...item, avatar: avatarImg };
      }
    }
    return { ...item, avatar: avatarImg };
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
      const cardWidth = container.offsetWidth;
      if (cardWidth <= 0) return;
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
      className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-[#07080A] text-[#F4F4F6] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera limpia */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-7 sm:mb-12 border-b border-[#C5A059]/25 pb-4">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4F4F6] font-heading glow-text-subtle">
                {t("test.title")}
              </h2>
              <p className="text-xs sm:text-base text-[#A0A5B1] leading-relaxed mt-1.5 font-normal">
                {t("test.subtitle")}
              </p>
            </div>

            <div className="hidden sm:flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-sm bg-[#0D0E12] border border-[#C5A059]/25 hover:border-[#D4AF37] text-[#F4F4F6] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Reseña anterior"
              >
                <ChevronLeft className="w-5 h-5 text-[#C5A059]" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-sm bg-[#0D0E12] border border-[#C5A059]/25 hover:border-[#D4AF37] text-[#F4F4F6] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Reseña siguiente"
              >
                <ChevronRight className="w-5 h-5 text-[#C5A059]" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Reseñas en tarjetas Gris Grafito (#1C1E24) con elevación 3D sutil y deslizamiento táctil limpio */}
        <ScrollReveal direction="up" delay={80} distance={24}>
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory scrollbar-none items-stretch"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {testimonios.map((item) => (
              <SpotlightCard
                key={item.id}
                className="snap-center shrink-0 w-full md:w-auto p-5 sm:p-6 group"
              >
                <div className="space-y-4">
                  {/* Autor y valoración arriba como en una reseña real */}
                  <div className="flex items-center gap-3">
                    {item.avatar && (
                      <img
                        src={item.avatar}
                        alt={item.nombre}
                        className="w-11 h-11 rounded-full object-cover border border-[#C5A059]/45 group-hover:border-[#D4AF37] transition-colors shrink-0 shadow-[0_0_14px_rgba(197,160,89,0.2)]"
                        loading="lazy"
                        width={44}
                        height={44}
                      />
                    )}
                    <div className="min-w-0">
                      <span className="font-heading text-sm font-bold uppercase tracking-wide text-[#F4F4F6] group-hover:text-[#D4AF37] transition-colors block">
                        {item.nombre}
                      </span>
                      <span className="text-xs text-[#A0A5B1] font-sans block">
                        {item.rol}
                      </span>
                    </div>
                  </div>

                  {/* Estrellas de reseña en Dorado Antiguo (#C5A059) */}
                  <div className="flex items-center gap-1 text-[#C5A059]" aria-label="5 estrellas">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#C5A059] drop-shadow-[0_0_6px_rgba(197,160,89,0.3)]" />
                    ))}
                  </div>

                  {/* Texto natural */}
                  <p className="text-xs sm:text-sm text-[#A0A5B1] group-hover:text-[#F4F4F6]/90 transition-colors leading-relaxed font-sans font-normal">
                    {item.cita}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </ScrollReveal>

        {/* Controles e indicadores en móvil centrados debajo de la tarjeta */}
        <div className="flex items-center justify-center gap-4 pt-4 md:hidden">
          <button
            type="button"
            onClick={handlePrev}
            className="w-8 h-8 rounded-full bg-[#0D0E12] border border-[#C5A059]/30 text-[#F4F4F6] flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-[0_0_12px_rgba(197,160,89,0.16)]"
            aria-label="Reseña anterior"
          >
            <ChevronLeft className="w-4 h-4 text-[#C5A059]" />
          </button>

          <div className="flex items-center gap-2">
            {testimonios.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => scrollToTestimonial(dotIdx)}
                className={`h-2 rounded-xs transition-all duration-300 cursor-pointer ${
                  activeIndex === dotIdx
                    ? "bg-[#C5A059] w-6 shadow-[0_0_10px_rgba(197,160,89,0.45)]"
                    : "bg-[#A0A5B1]/30 w-2"
                }`}
                aria-label={`Reseña ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-8 h-8 rounded-full bg-[#0D0E12] border border-[#C5A059]/30 text-[#F4F4F6] flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-[0_0_12px_rgba(197,160,89,0.16)]"
            aria-label="Reseña siguiente"
          >
            <ChevronRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export { Testimonios as Prensa };
