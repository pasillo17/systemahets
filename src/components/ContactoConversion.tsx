import { MessageSquare, ArrowRight, Youtube, Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG, getClasePruebaWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * SECCIÓN CONTACTO Y CONVERSIÓN:
 * Inspirada en la franja inferior de ancho completo con fondo de color sólido vibrante
 * de la referencia de Pinterest, manteniendo nuestra paleta Naranja Terracota (#D97736),
 * Dorado (#C5A059 / #D4AF37) y Tierra Profunda (#110D0A).
 */
export function ContactoConversion() {
  const { t } = useLanguage();

  return (
    <section
      id="contacto"
      className="relative w-full overflow-hidden bg-[#110D0A]"
    >
      {/* 1. FRANJA DE LLAMADA A LA ACCIÓN DE ANCHO COMPLETO EN COLOR SÓLIDO (Estilo referencia Pinterest) */}
      <div className="relative w-full bg-gradient-to-r from-[#D97736] via-[#C86428] to-[#C5A059] text-[#110D0A] py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-[#D4AF37]/50">
        {/* Tipografía monumental en marca de agua sobre la banda sólida */}
        <div
          aria-hidden="true"
          className="absolute -bottom-6 right-4 font-heading font-black uppercase tracking-[0.18em] text-6xl sm:text-8xl lg:text-9xl text-[#110D0A]/[0.07] select-none pointer-events-none whitespace-nowrap leading-none"
        >
          SYSTEMA HETS
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Columna Izquierda: Título y descripción sobre el bloque sólido */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <h2
                  className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#110D0A] font-heading leading-none"
                  style={{ textWrap: "balance" }}
                >
                  {t("contact.title")}
                </h2>

                <div
                  aria-hidden="true"
                  className="h-[3px] w-16 bg-[#110D0A]"
                />

                <p className="text-sm sm:text-lg text-[#110D0A]/90 font-medium leading-relaxed max-w-2xl">
                  {t("contact.desc")}
                </p>

                <p className="text-xs sm:text-sm text-[#110D0A]/80 font-semibold tracking-wide">
                  {t("contact.subtext")}
                </p>
              </div>

              {/* Columna Derecha: Botón Principal en Tierra Profunda (#110D0A) de alto contraste */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-center gap-4">
                <a
                  href={getClasePruebaWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#F5EFE6] hover:text-[#D4AF37] bg-[#110D0A] hover:bg-[#1B140F] border-2 border-[#110D0A] rounded-xs min-h-[56px] shadow-[0_14px_34px_rgba(17,13,10,0.45)] hover:shadow-[0_18px_40px_rgba(17,13,10,0.65)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group text-center leading-snug"
                >
                  <MessageSquare className="w-4 h-4 text-[#D97736] group-hover:text-[#D4AF37] fill-current shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-bold">{t("contact.btnTrial")}</span>
                  <ArrowRight className="w-4 h-4 text-[#D97736] group-hover:text-[#D4AF37] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 2. BARRA DE REDES Y CANALES OFICIALES EN TIERRA SOMBRA (#1B140F) ANTES DEL FOOTER */}
      <div className="bg-[#1B140F] border-t border-[#D97736]/30 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
          <span className="text-xs font-heading uppercase tracking-wider text-[#D4AF37] font-bold">
            {t("contact.officialChannels")}
          </span>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href={SITE_CONFIG.redes.whatsappCanal}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-gold text-xs text-[#F5EFE6] hover:text-[#D4AF37] flex items-center gap-2 py-2 px-3.5 rounded-xs bg-[#110D0A]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D97736] shrink-0" />
              <span>{t("contact.waChannel")}</span>
            </a>

            <a
              href={SITE_CONFIG.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-gold text-xs text-[#F5EFE6] hover:text-[#D4AF37] flex items-center gap-2 py-2 px-3.5 rounded-xs bg-[#110D0A]"
            >
              <Instagram className="w-3.5 h-3.5 text-[#D97736] shrink-0" />
              <span>{t("contact.instagram")}</span>
            </a>

            <a
              href={SITE_CONFIG.redes.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-gold text-xs text-[#F5EFE6] hover:text-[#D4AF37] flex items-center gap-2 py-2 px-3.5 rounded-xs bg-[#110D0A]"
            >
              <Youtube className="w-3.5 h-3.5 text-[#D97736] shrink-0" />
              <span>{t("contact.youtube")}</span>
            </a>

            <a
              href={SITE_CONFIG.redes.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-gold text-xs text-[#F5EFE6] hover:text-[#D4AF37] flex items-center gap-2 py-2 px-3.5 rounded-xs bg-[#110D0A]"
            >
              <Facebook className="w-3.5 h-3.5 text-[#D97736] shrink-0" />
              <span>{t("contact.facebook")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
