import { MessageSquare, ArrowRight, Youtube, Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG, getClasePruebaWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Sección Final de Conversión e Inscripción:
 * Reserva de clase de prueba ubicada al final de la página.
 * Soporte bilingüe ES / EN.
 * SYSTEMA con Y siempre.
 */
export function ContactoConversion() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="relative py-10 sm:py-24 bg-[#080807] border-t border-[#A58A60]/20 text-[#F1EBDD] overflow-hidden">
      
      {/* Fondo puro en CSS con halo de luz tenue */}
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-[#A58A60]/8 rounded-full blur-3xl pointer-events-none animate-glow-pulse"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Franja de Conversión Centralizada con Luz Perimetral */}
        <ScrollReveal direction="up" distance={24}>
          <div className="p-5 sm:p-10 lg:p-14 bg-[#12110F]/90 backdrop-blur-md border border-[#A58A60]/40 rounded-sm shadow-2xl relative overflow-hidden card-specular-edge">
          
          {/* Línea superior dorada brillante */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C2A87E] to-transparent opacity-90" />

          {/* Resplandor ambiental de esquina */}
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#A58A60]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
            
            {/* Texto y Llamado a la Acción de Reserva de Clase */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-6 sm:w-8 h-[1px] bg-[#C2A87E]" />
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.26em] text-[#C2A87E] font-bold">
                  {t("contact.trialBadge")}
                </span>
              </div>

              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading leading-tight"
                style={{ textWrap: "balance" }}
              >
                {t("contact.title")}
              </h2>

              <p className="text-sm sm:text-lg text-[#EAE5D9] leading-relaxed max-w-xl font-normal">
                {t("contact.desc")}
              </p>

              {/* Botón Principal de Reserva por WhatsApp con Brillo Shimmer */}
              <div className="pt-1 sm:pt-2">
                <a
                  href={getClasePruebaWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer-gold w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-extrabold uppercase tracking-widest text-[#080807] rounded-sm transition-all duration-300 shadow-xl shadow-[#A58A60]/30 min-h-[48px] active:scale-[0.98] cursor-pointer group"
                >
                  <MessageSquare className="w-4 h-4 fill-current shrink-0 transition-transform group-hover:scale-110" />
                  <span>{t("contact.btnTrial")}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <p className="text-[10px] sm:text-[11px] font-mono text-[#C4BFB4]">
                {t("contact.subtext")}
              </p>

              {/* Redes Oficiales y Vías de Comunicación: En celular grilla 2x2 ordenada */}
              <div className="pt-4 sm:pt-5 border-t border-[#A58A60]/15 space-y-2.5 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-xs text-[#C4BFB4]">
                <span className="font-mono text-[#C2A87E] uppercase tracking-wider text-[10px] sm:text-[11px] block sm:inline font-semibold">
                  {t("contact.officialChannels")}
                </span>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
                  <a
                    href={SITE_CONFIG.redes.whatsappCanal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F1EBDD] transition-colors flex items-center gap-1.5 py-2 px-2.5 rounded-xs border border-[#A58A60]/20 sm:border-transparent hover:border-[#A58A60]/40 bg-[#080807]/60 sm:bg-transparent hover:bg-[#080807] min-h-[38px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#A58A60] shrink-0" />
                    <span className="truncate">{t("contact.waChannel")}</span>
                  </a>

                  <a
                    href={SITE_CONFIG.redes.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F1EBDD] transition-colors flex items-center gap-1.5 py-2 px-2.5 rounded-xs border border-[#A58A60]/20 sm:border-transparent hover:border-[#A58A60]/40 bg-[#080807]/60 sm:bg-transparent hover:bg-[#080807] min-h-[38px]"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#A58A60] shrink-0" />
                    <span className="truncate">{t("contact.instagram")}</span>
                  </a>

                  <a
                    href={SITE_CONFIG.redes.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F1EBDD] transition-colors flex items-center gap-1.5 py-2 px-2.5 rounded-xs border border-[#A58A60]/20 sm:border-transparent hover:border-[#A58A60]/40 bg-[#080807]/60 sm:bg-transparent hover:bg-[#080807] min-h-[38px]"
                  >
                    <Youtube className="w-3.5 h-3.5 text-[#A58A60] shrink-0" />
                    <span className="truncate">{t("contact.youtube")}</span>
                  </a>

                  <a
                    href={SITE_CONFIG.redes.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F1EBDD] transition-colors flex items-center gap-1.5 py-2 px-2.5 rounded-xs border border-[#A58A60]/20 sm:border-transparent hover:border-[#A58A60]/40 bg-[#080807]/60 sm:bg-transparent hover:bg-[#080807] min-h-[38px]"
                  >
                    <Facebook className="w-3.5 h-3.5 text-[#A58A60] shrink-0" />
                    <span className="truncate">{t("contact.facebook")}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Logotipo en columna derecha (Visible en desktop lg+; oculto en celular para evitar duplicar el logo antes del footer) */}
            <div className="hidden lg:flex lg:col-span-4 items-center justify-end">
              <div className="relative p-6 rounded-sm bg-[#080807] border border-[#A58A60]/35 text-center w-full max-w-[260px] shadow-2xl card-specular-edge group hover:border-[#A58A60]/70 transition-all duration-500">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 m-auto w-32 h-32 bg-[#A58A60]/10 rounded-full blur-xl pointer-events-none group-hover:bg-[#C2A87E]/20 transition-all duration-500"
                />

                <img
                  src={SITE_CONFIG.assets.logo}
                  alt="Logotipo Systema HETS Diego Ledesma"
                  className="relative z-10 w-36 h-auto object-contain mx-auto filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
                  width={144}
                  height={144}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = SITE_CONFIG.assets.logoFallbackUrl;
                  }}
                />
                
                <div className="relative z-10 mt-4 pt-3 border-t border-[#A58A60]/20">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C2A87E] block font-bold">
                    Systema HETS
                  </span>
                  <span className="text-[10px] text-[#C4BFB4]">
                    {t("contact.logoSub")}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
