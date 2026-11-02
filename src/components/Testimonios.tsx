import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * SECCIÓN TESTIMONIOS:
 * Reseñas auténticas de alumnos reales en Argentina estilo Google Maps,
 * con distintas longitudes, sin tecnicismos repetidos, sin numeración 01/03 ni eyebrow tags.
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
            cita: "I started three years ago looking to unwind after long hours at my clinic and found an incredible place. Nobody here is trying to show off or compete; you train seriously, learn practical self-defense, and leave every class feeling much looser. Diego has huge patience and clarity when teaching.",
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
            cita: "I practiced other martial arts for several years and always ended up with a stiff back or sore knees. What surprised me most about Systema HETS is how you learn to fall to the ground safely, get out of grabs without muscling through, and use your breathing when things speed up. Very practical both on and off the mat.",
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
      className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-flow-testimonios text-[#F4EDE2] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera limpia sin eyebrow tag */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-7 sm:mb-12 border-b border-[#C49A64]/30 pb-4">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading">
                {t("test.title")}
              </h2>
              <p className="text-xs sm:text-base text-[#C4B5A3] leading-relaxed mt-1.5 font-normal">
                {t("test.subtitle")}
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-sm bg-[#261E1A] border border-[#C49A64]/40 hover:border-[#C86442] text-[#F4EDE2] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Reseña anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-sm bg-[#261E1A] border border-[#C49A64]/40 hover:border-[#C86442] text-[#F4EDE2] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Reseña siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Reseñas estilo Google Maps con autor, estrellas sutiles y texto natural sin comillas ni cursiva */}
        <ScrollReveal direction="up" delay={80} distance={24}>
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 items-start"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {testimonios.map((item) => (
              <div
                key={item.id}
                className="snap-center shrink-0 w-[86%] sm:w-[360px] md:w-auto p-5 sm:p-6 bg-[#261E1A] border border-[#C49A64]/35 rounded-sm flex flex-col justify-between space-y-4"
              >
                {/* Autor y valoración arriba como en una reseña real */}
                <div className="flex items-center gap-3">
                  {item.avatar && (
                    <img
                      src={item.avatar}
                      alt={item.nombre}
                      className="w-11 h-11 rounded-full object-cover border border-[#C49A64]/60 shrink-0"
                      loading="lazy"
                      width={44}
                      height={44}
                    />
                  )}
                  <div className="min-w-0">
                    <span className="font-heading text-sm font-bold uppercase tracking-wide text-[#F4EDE2] block">
                      {item.nombre}
                    </span>
                    <span className="text-xs text-[#C4B5A3] font-sans block">
                      {item.rol}
                    </span>
                  </div>
                </div>

                {/* Estrellas de reseña */}
                <div className="flex items-center gap-1 text-[#C49A64]" aria-label="5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-[#DF7E5B]" />
                  ))}
                </div>

                {/* Texto natural sin comillas ni cursiva */}
                <p className="text-xs sm:text-sm text-[#F4EDE2]/95 leading-relaxed font-sans font-normal">
                  {item.cita}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="flex items-center justify-center gap-2 pt-2 md:hidden">
          {testimonios.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => scrollToTestimonial(dotIdx)}
              className={`h-2 rounded-xs transition-all cursor-pointer ${
                activeIndex === dotIdx
                  ? "bg-[#C86442] w-6"
                  : "bg-[#C4B5A3]/30 w-2"
              }`}
              aria-label={`Reseña ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Testimonios as Prensa };
