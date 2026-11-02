import { MessageSquare, ArrowRight, Youtube, Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG, getClasePruebaWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

export function ContactoConversion() {
  const { t } = useLanguage();

  return (
    <section
      id="contacto"
      className="relative py-14 sm:py-24 section-surface-secondary text-[#F5EFE6] overflow-hidden"
    >
      {/* Fondo puro en CSS con halo en Naranja Terracota (#D97736) y Dorado (#C5A059) */}
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-[#D97736]/12 rounded-full blur-3xl pointer-events-none animate-glow-pulse"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Franja de Conversión Centralizada en Tierra Profunda (#110D0A) sobre sección Tierra Sombra (#1B140F) */}
        <ScrollReveal direction="up" distance={24}>
          <SpotlightCard className="p-5 sm:p-10 lg:p-14 !bg-[#110D0A] relative overflow-hidden">
            {/* Línea superior en Naranja Terracota (#D97736) y Dorado (#D4AF37) */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D97736] via-[#D4AF37] to-[#C5A059]" />

            {/* Resplandor ambiental de esquina */}
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#D97736]/14 rounded-full blur-3xl pointer-events-none"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
              {/* Texto y Llamado a la Acción de Reserva de Clase */}
              <div className="lg:col-span-8 space-y-3.5 sm:space-y-5">
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F5EFE6] font-heading leading-tight glow-text-subtle"
                  style={{ textWrap: "balance" }}
                >
                  {t("contact.title")}
                </h2>

                <p className="text-sm sm:text-lg text-[#F5EFE6] leading-relaxed max-w-xl font-normal">
                  {t("contact.desc")}
                </p>

                {/* Botón Principal de Reserva por WhatsApp (Naranja/Dorado, Texto #110D0A font-bold) */}
                <div className="pt-1 sm:pt-2">
                  <a
                    href={getClasePruebaWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer-lightning w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider sm:tracking-widest text-[#110D0A] bg-[#D97736] hover:bg-[#D4AF37] rounded-sm min-h-[52px] h-auto cursor-pointer group whitespace-normal sm:whitespace-nowrap text-center leading-snug"
                  >
                    <MessageSquare className="w-4 h-4 fill-current shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="flex-1 sm:flex-initial font-bold">{t("contact.btnTrial")}</span>
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

                <p className="text-xs text-[#B8A99A] leading-relaxed">
                  {t("contact.subtext")}
                </p>

                {/* Redes Oficiales y Vías de Comunicación */}
                <div className="pt-4 sm:pt-5 border-t border-[#D97736]/30 space-y-2.5 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-xs text-[#B8A99A]">
                  <span className="text-[#D97736] text-xs block sm:inline font-medium">
                    {t("contact.officialChannels")}
                  </span>

                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
                    <a
                      href={SITE_CONFIG.redes.whatsappCanal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary-gold text-[#F5EFE6] hover:text-[#D4AF37] flex items-center gap-2 py-2 px-3 rounded-xs bg-[#1B140F]"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#D97736] shrink-0" />
                      <span>{t("contact.waChannel")}</span>
                    </a>

                    <a
                      href={SITE_CONFIG.redes.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary-gold text-[#F5EFE6] hover:text-[#D4AF37] flex items-center gap-2 py-2 px-3 rounded-xs bg-[#1B140F]"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#D97736] shrink-0" />
                      <span>{t("contact.instagram")}</span>
                    </a>

                    <a
                      href={SITE_CONFIG.redes.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary-gold text-[#F5EFE6] hover:text-[#D4AF37] flex items-center gap-2 py-2 px-3 rounded-xs bg-[#1B140F]"
                    >
                      <Youtube className="w-3.5 h-3.5 text-[#D97736] shrink-0" />
                      <span>{t("contact.youtube")}</span>
                    </a>

                    <a
                      href={SITE_CONFIG.redes.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary-gold text-[#F5EFE6] hover:text-[#D4AF37] flex items-center gap-2 py-2 px-3 rounded-xs bg-[#1B140F]"
                    >
                      <Facebook className="w-3.5 h-3.5 text-[#D97736] shrink-0" />
                      <span>{t("contact.facebook")}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Logotipo suelto sin caja recargada en columna derecha (Visible en desktop lg+) */}
              <div className="hidden lg:flex lg:col-span-4 items-center justify-center">
                <img
                  src={SITE_CONFIG.assets.logo}
                  alt="Logotipo Systema HETS Diego Ledesma"
                  className="w-44 h-auto object-contain filter drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)] hover:drop-shadow-[0_0_32px_rgba(217,119,54,0.36)] transition-all duration-500"
                  width={176}
                  height={176}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      SITE_CONFIG.assets.logoFallbackUrl;
                  }}
                />
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
