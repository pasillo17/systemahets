import { MessageSquare, ArrowRight, Youtube, Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG, getClasePruebaWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export function ContactoConversion() {
  const { t } = useLanguage();

  return (
    <section
      id="contacto"
      className="relative py-10 sm:py-24 bg-flow-contacto text-[#F4EDE2] overflow-hidden"
    >
      {/* Fondo puro en CSS con halo en Terracota Pampeana (#B85332) */}
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-[#B85332]/14 rounded-full blur-3xl pointer-events-none animate-glow-pulse"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Franja de Conversión Centralizada */}
        <ScrollReveal direction="up" distance={24}>
          <div className="p-5 sm:p-10 lg:p-14 bg-[#2A211C]/95 backdrop-blur-md border border-[#C49A64]/50 rounded-sm shadow-2xl relative overflow-hidden card-specular-edge">
            {/* Línea superior en Terracota Pampeana (#B85332) y Ocre Arcilla (#C49A64) */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332]" />

            {/* Resplandor ambiental de esquina */}
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#B85332]/16 rounded-full blur-3xl pointer-events-none"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
              {/* Texto y Llamado a la Acción de Reserva de Clase */}
              <div className="lg:col-span-8 space-y-3.5 sm:space-y-5">
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F4EDE2] font-heading leading-tight"
                  style={{ textWrap: "balance" }}
                >
                  {t("contact.title")}
                </h2>

                <p className="text-sm sm:text-lg text-[#F4EDE2] leading-relaxed max-w-xl font-normal">
                  {t("contact.desc")}
                </p>

                {/* Botón Principal de Reserva por WhatsApp */}
                <div className="pt-1 sm:pt-2">
                  <a
                    href={getClasePruebaWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer-lightning w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-8 py-3.5 sm:py-4 text-xs font-extrabold uppercase tracking-wider sm:tracking-widest text-[#F4EDE2] rounded-sm transition-all duration-300 shadow-xl shadow-[#B85332]/30 min-h-[52px] h-auto active:scale-[0.98] cursor-pointer group whitespace-normal sm:whitespace-nowrap text-center leading-snug"
                  >
                    <MessageSquare className="w-4 h-4 fill-current shrink-0 transition-transform group-hover:scale-110" />
                    <span className="flex-1 sm:flex-initial">{t("contact.btnTrial")}</span>
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                <p className="text-xs text-[#C4B5A3] leading-relaxed">
                  {t("contact.subtext")}
                </p>

                {/* Redes Oficiales y Vías de Comunicación */}
                <div className="pt-4 sm:pt-5 border-t border-[#C4B5A3]/25 space-y-2.5 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-xs text-[#C4B5A3]">
                  <span className="text-[#C49A64] text-xs block sm:inline font-medium">
                    {t("contact.officialChannels")}
                  </span>

                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
                    <a
                      href={SITE_CONFIG.redes.whatsappCanal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F4EDE2] hover:text-[#DF7E5B] transition-colors flex items-center gap-2 py-2 px-3 rounded-xs border border-[#C49A64]/35 hover:border-[#C86442] bg-[#1C1613]/80"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#C86442] shrink-0" />
                      <span>{t("contact.waChannel")}</span>
                    </a>

                    <a
                      href={SITE_CONFIG.redes.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F4EDE2] hover:text-[#DF7E5B] transition-colors flex items-center gap-2 py-2 px-3 rounded-xs border border-[#C49A64]/35 hover:border-[#C86442] bg-[#1C1613]/80"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#C49A64] shrink-0" />
                      <span>{t("contact.instagram")}</span>
                    </a>

                    <a
                      href={SITE_CONFIG.redes.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F4EDE2] hover:text-[#DF7E5B] transition-colors flex items-center gap-2 py-2 px-3 rounded-xs border border-[#C49A64]/35 hover:border-[#C86442] bg-[#1C1613]/80"
                    >
                      <Youtube className="w-3.5 h-3.5 text-[#C86442] shrink-0" />
                      <span>{t("contact.youtube")}</span>
                    </a>

                    <a
                      href={SITE_CONFIG.redes.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F4EDE2] hover:text-[#DF7E5B] transition-colors flex items-center gap-2 py-2 px-3 rounded-xs border border-[#C49A64]/35 hover:border-[#C86442] bg-[#1C1613]/80"
                    >
                      <Facebook className="w-3.5 h-3.5 text-[#C49A64] shrink-0" />
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
                  className="w-44 h-auto object-contain filter drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)]"
                  width={176}
                  height={176}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      SITE_CONFIG.assets.logoFallbackUrl;
                  }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
