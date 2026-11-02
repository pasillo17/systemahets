import { MessageSquare, ArrowRight, Youtube, Instagram, Facebook, Sparkles } from "lucide-react";
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
    <section id="contacto" className="relative py-16 sm:py-24 bg-[#080807] border-t border-[#A58A60]/20 text-[#F1EBDD] overflow-hidden">
      
      {/* Fondo puro en CSS con halo de luz tenue */}
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-[#A58A60]/8 rounded-full blur-3xl pointer-events-none animate-glow-pulse"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Franja de Conversión Centralizada con Luz Perimetral */}
        <ScrollReveal direction="up" distance={28}>
          <div className="p-6 sm:p-10 lg:p-14 bg-[#12110F]/90 backdrop-blur-md border border-[#A58A60]/40 rounded-sm shadow-2xl relative overflow-hidden card-specular-edge">
          
          {/* Línea superior dorada brillante con pulso */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C2A87E] to-transparent opacity-90" />

          {/* Resplandor ambiental de esquina */}
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#A58A60]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Texto y Llamado a la Acción de Reserva de Clase */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#C05621]/15 border border-[#C05621]/50 shadow-[0_0_15px_rgba(217,119,6,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#F59E0B] font-bold">
                  {t("contact.trialBadge")}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#F1EBDD] font-heading leading-tight">
                {t("contact.title")}
              </h2>

              <p className="text-base sm:text-lg text-[#EAE5D9] leading-relaxed max-w-xl font-normal">
                {t("contact.desc")}
              </p>

              {/* Botón Principal de Reserva por WhatsApp con Brillo Shimmer */}
              <div className="pt-2">
                <a
                  href={getClasePruebaWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer-gold w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-[#080807] rounded-sm transition-all duration-300 shadow-xl shadow-[#A58A60]/30 min-h-[48px] active:scale-[0.98] cursor-pointer group"
                >
                  <MessageSquare className="w-4 h-4 fill-current shrink-0 transition-transform group-hover:scale-110" />
                  <span>{t("contact.btnTrial")}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <p className="text-[11px] font-mono text-[#C4BFB4]">
                {t("contact.subtext")}
              </p>

              {/* Redes Oficiales y Vías de Comunicación */}
              <div className="pt-5 border-t border-[#A58A60]/15 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#C4BFB4]">
                <span className="font-mono text-[#C2A87E] uppercase tracking-wider text-[11px] w-full sm:w-auto font-semibold">
                  {t("contact.officialChannels")}
                </span>

                <a
                  href={SITE_CONFIG.redes.whatsappCanal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F1EBDD] transition-colors flex items-center gap-1.5 py-1.5 px-2.5 rounded-xs border border-transparent hover:border-[#A58A60]/40 hover:bg-[#080807] min-h-[36px]"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#A58A60]" />
                  <span>{t("contact.waChannel")}</span>
                </a>

                <a
                  href={SITE_CONFIG.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F1EBDD] transition-colors flex items-center gap-1.5 py-1.5 px-2.5 rounded-xs border border-transparent hover:border-[#A58A60]/40 hover:bg-[#080807] min-h-[36px]"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#A58A60]" />
                  <span>{t("contact.instagram")}</span>
                </a>

                <a
                  href={SITE_CONFIG.redes.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F1EBDD] transition-colors flex items-center gap-1.5 py-1.5 px-2.5 rounded-xs border border-transparent hover:border-[#A58A60]/40 hover:bg-[#080807] min-h-[36px]"
                >
                  <Youtube className="w-3.5 h-3.5 text-[#A58A60]" />
                  <span>{t("contact.youtube")}</span>
                </a>

                <a
                  href={SITE_CONFIG.redes.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F1EBDD] transition-colors flex items-center gap-1.5 py-1.5 px-2.5 rounded-xs border border-transparent hover:border-[#A58A60]/40 hover:bg-[#080807] min-h-[36px]"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#A58A60]" />
                  <span>{t("contact.facebook")}</span>
                </a>
              </div>
            </div>

            {/* Logotipo en columna derecha con resplandor y halo suave */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="relative p-6 rounded-sm bg-[#080807] border border-[#A58A60]/35 text-center w-full max-w-[260px] shadow-2xl card-specular-edge group hover:border-[#A58A60]/70 transition-all duration-500">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 m-auto w-32 h-32 bg-[#A58A60]/10 rounded-full blur-xl pointer-events-none group-hover:bg-[#C2A87E]/20 transition-all duration-500"
                />

                <img
                  src={SITE_CONFIG.assets.logo}
                  alt="Logotipo Systema HETS Diego Ledesma"
                  className="relative z-10 w-28 sm:w-36 h-auto object-contain mx-auto filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
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
