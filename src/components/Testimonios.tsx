import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { useGooglePlaceData } from "../hooks/useGooglePlaceData";
import { ScrollReveal } from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

function GoogleGIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.8C6.2 7.2 8.9 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.6l3.7 2.9c2.2-2 3.7-5 3.7-8.7z"
      />
      <path
        fill="#FBBC05"
        d="M5.3 14.8c-.2-.8-.4-1.8-.4-2.8s.2-2 .4-2.8L1.6 6.4C.6 8.3 0 10.1 0 12s.6 3.7 1.6 5.6l3.7-2.8z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5l-3.7 2.8C3.5 19.9 7.4 23 12 23z"
      />
    </svg>
  );
}

function ReviewerAvatar({
  photoUri,
  name,
}: {
  photoUri: string;
  name: string;
}) {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");

  if (!photoUri || imgError) {
    return (
      <div className="w-11 h-11 rounded-full bg-[#110D0A] border border-[#D97736]/50 group-hover:border-[#D4AF37] transition-colors shrink-0 flex items-center justify-center font-heading text-xs font-bold text-[#D4AF37] shadow-[0_0_14px_rgba(217,119,54,0.22)]">
        {initials || "G"}
      </div>
    );
  }

  return (
    <img
      src={photoUri}
      alt={name}
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
      className="w-11 h-11 rounded-full object-cover border border-[#D97736]/45 group-hover:border-[#D4AF37] transition-colors shrink-0 shadow-[0_0_14px_rgba(217,119,54,0.22)]"
      loading="lazy"
      width={44}
      height={44}
    />
  );
}

/**
 * SECCIÓN TESTIMONIOS:
 * Conectada en tiempo real a Google Maps Platform — Places API (New) para mostrar
 * las reseñas verificadas de "Systema Hets Diego Ledesma" en La Plata, incluyendo
 * atribución obligatoria al autor de cada reseña (AuthorAttribution).
 */
export function Testimonios() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const { lang, t } = useLanguage();
  const { placeName, placeRating, userRatingCount, reviews, isLoading } =
    useGooglePlaceData(lang);

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
    if (reviews.length === 0) return;
    const next = (activeIndex + 1) % reviews.length;
    scrollToTestimonial(next);
  };

  const handlePrev = () => {
    if (reviews.length === 0) return;
    const prev = (activeIndex - 1 + reviews.length) % reviews.length;
    scrollToTestimonial(prev);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || reviews.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const firstCard = container.children[0] as HTMLElement | undefined;
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : container.offsetWidth;
      if (cardWidth <= 0) return;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex >= 0 && newIndex < reviews.length) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [reviews.length]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const shareUrl = SITE_CONFIG.sedePrincipal.googleShareUrl;

  return (
    <section
      id="testimonios"
      className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-[#110D0A] text-[#F5EFE6] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de Testimonios */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-7 sm:mb-12 border-b border-[#D97736]/30 pb-5">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F5EFE6] font-heading glow-text-subtle">
                {t("test.title")}
              </h2>
              <p className="text-xs sm:text-base text-[#B8A99A] leading-relaxed mt-1.5 font-normal">
                {t("test.subtitle")}
              </p>
            </div>

            {/* Resumen de calificación en vivo */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {placeRating !== null && (
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-sm bg-[#1B140F] border border-[#D97736]/35 shadow-[0_6px_20px_rgba(0,0,0,0.45)]">
                  <GoogleGIcon className="w-5 h-5 shrink-0" />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-heading text-lg font-bold text-[#F5EFE6] leading-none">
                        {placeRating.toFixed(1)}
                      </span>
                      <div
                        className="flex items-center gap-0.5 text-[#D4AF37]"
                        aria-label={`${placeRating.toFixed(1)} estrellas`}
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-current text-[#D4AF37] drop-shadow-[0_0_6px_rgba(217,119,54,0.35)]"
                          />
                        ))}
                      </div>
                    </div>
                    {userRatingCount !== null && (
                      <span className="text-[11px] text-[#B8A99A] block mt-0.5">
                        {userRatingCount} {t("test.reviewsCount")}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {reviews.length > 3 && (
                <div className="hidden md:flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-sm bg-[#1B140F] border border-[#D97736]/30 hover:border-[#D4AF37] text-[#F5EFE6] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Reseña anterior"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#D97736]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-10 h-10 rounded-sm bg-[#1B140F] border border-[#D97736]/30 hover:border-[#D4AF37] text-[#F5EFE6] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Reseña siguiente"
                  >
                    <ChevronRight className="w-5 h-5 text-[#D97736]" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Estado de carga mientras consulta Places API (New) */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[0, 1, 2].map((skeletonIdx) => (
              <div
                key={skeletonIdx}
                className="p-5 sm:p-6 rounded-sm bg-[#1B140F] border border-[#D97736]/25 animate-pulse space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#110D0A] border border-[#D97736]/25 shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="h-3.5 w-32 bg-[#D97736]/20 rounded-xs" />
                    <div className="h-2.5 w-20 bg-[#B8A99A]/15 rounded-xs" />
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3.5 h-3.5 rounded-xs bg-[#D4AF37]/25"
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-[#B8A99A]/15 rounded-xs" />
                  <div className="h-3 w-11/12 bg-[#B8A99A]/15 rounded-xs" />
                  <div className="h-3 w-4/5 bg-[#B8A99A]/15 rounded-xs" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Reseñas reales de Google Maps en carrusel deslizable */
          <ScrollReveal direction="up" delay={80} distance={24}>
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none items-stretch"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {reviews.map((item) => {
                const isExpanded = !!expandedIds[item.id];
                const isLong = item.text.length > 240;
                const displayedText =
                  isLong && !isExpanded
                    ? `${item.text.slice(0, 240).trim()}…`
                    : item.text;

                return (
                  <SpotlightCard
                    key={item.id}
                    className="snap-center shrink-0 w-full md:w-[calc(33.333%-1rem)] p-5 sm:p-6 group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Cabecera de reseña con atribución obligatoria de autor (AuthorAttribution) */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <a
                            href={item.authorUri}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={t("test.viewAuthorProfile")}
                            className="shrink-0"
                          >
                            <ReviewerAvatar
                              photoUri={item.authorPhotoUri}
                              name={item.authorName}
                            />
                          </a>
                          <div className="min-w-0">
                            <a
                              href={item.authorUri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-heading text-sm font-bold uppercase tracking-wide text-[#F5EFE6] hover:text-[#D4AF37] group-hover:text-[#D4AF37] transition-colors block truncate"
                            >
                              {item.authorName}
                            </a>
                            <span className="text-xs text-[#B8A99A] font-sans block">
                              {t("test.studentBadge")}
                            </span>
                          </div>
                        </div>

                        <a
                          href={item.googleMapsUri || shareUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Google Maps"
                          className="p-1.5 rounded-xs bg-[#110D0A]/70 border border-[#D97736]/25 hover:border-[#D4AF37] transition-colors shrink-0"
                        >
                          <GoogleGIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Estrellas de reseña en Naranja Terracota y Dorado */}
                      <div
                        className="flex items-center gap-1 text-[#D4AF37]"
                        aria-label={`${item.rating} estrellas`}
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.round(item.rating)
                                ? "fill-current text-[#D4AF37] drop-shadow-[0_0_6px_rgba(217,119,54,0.35)]"
                                : "text-[#B8A99A]/30"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Texto real de la reseña en Google */}
                      <div className="space-y-2">
                        <p className="text-xs sm:text-sm text-[#B8A99A] group-hover:text-[#F5EFE6]/90 transition-colors leading-relaxed font-sans font-normal whitespace-pre-line">
                          {displayedText || t("test.noTextReview")}
                        </p>
                        {isLong && (
                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            className="text-xs font-heading uppercase tracking-wider text-[#D97736] hover:text-[#D4AF37] transition-colors cursor-pointer"
                          >
                            {isExpanded ? t("test.readLess") : t("test.readMore")}
                          </button>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </ScrollReveal>
        )}

        {/* Controles e indicadores inferiores */}
        {reviews.length > 1 && (
          <div className="flex items-center justify-center gap-4 pt-5">
            <button
              type="button"
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-[#1B140F] border border-[#D97736]/35 text-[#F5EFE6] flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-[0_0_12px_rgba(217,119,54,0.18)]"
              aria-label="Reseña anterior"
            >
              <ChevronLeft className="w-4 h-4 text-[#D97736]" />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((rev, dotIdx) => (
                <button
                  key={rev.id}
                  type="button"
                  onClick={() => scrollToTestimonial(dotIdx)}
                  className={`h-2 rounded-xs transition-all duration-300 cursor-pointer ${
                    activeIndex === dotIdx
                      ? "bg-gradient-to-r from-[#D97736] to-[#D4AF37] w-6 shadow-[0_0_10px_rgba(217,119,54,0.5)]"
                      : "bg-[#B8A99A]/30 w-2"
                  }`}
                  aria-label={`Reseña ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-[#1B140F] border border-[#D97736]/35 text-[#F5EFE6] flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-[0_0_12px_rgba(217,119,54,0.18)]"
              aria-label="Reseña siguiente"
            >
              <ChevronRight className="w-4 h-4 text-[#D97736]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export { Testimonios as Prensa };

