import { MapPin, MessageSquare, Instagram, Youtube, Mail } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

/**
 * 8. FOOTER INSTITUCIONAL
 * Ubicado inmediatamente después de la frase destacada y contacto.
 * Soporte bilingüe ES / EN.
 * Siempre SYSTEMA con Y.
 */
export function Footer() {
  const contacto = SITE_CONFIG.contacto;
  const redes = SITE_CONFIG.redes;
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.inicio"), href: "#inicio" },
    { label: t("nav.systema"), href: "#systema" },
    { label: t("nav.diego"), href: "#diego-ledesma" },
    { label: t("nav.entrenamientos"), href: "#entrenamientos" },
    { label: t("nav.sedes"), href: "#sedes-y-clases" },
    { label: t("nav.testimonios"), href: "#testimonios" },
    { label: t("nav.contacto"), href: "#contacto" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050505] text-[#C4BFB4] text-xs pt-8 sm:pt-12 pb-8 sm:pb-12 pb-safe border-t border-[#1C1A17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-10">
        
        {/* Fila Principal de 3 Bloques */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Bloque 1: Logo y Ubicación */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, "#inicio")}
              className="inline-flex items-center gap-2.5 group"
            >
              <img
                src={SITE_CONFIG.assets.logo}
                alt="Systema HETS"
                className="h-9 sm:h-10 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                width={120}
                height={40}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = SITE_CONFIG.assets.logoFallbackUrl;
                }}
              />
              <div className="flex flex-col">
                <span className="font-heading text-sm font-bold tracking-wider text-[#F1EBDD]">
                  SYSTEMA HETS
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#C2A87E]">
                  DIEGO LEDESMA
                </span>
              </div>
            </a>

            <p className="text-xs text-[#C4BFB4] leading-relaxed max-w-sm">
              {t("footer.desc")}
            </p>

            {/* Ubicación */}
            <div className="flex items-center gap-2 text-xs text-[#EAE5D9]">
              <MapPin className="w-4 h-4 text-[#A58A60] shrink-0" />
              <span>{contacto.ubicacion}</span>
            </div>
          </div>

          {/* Bloque 2: Navegación Rápida (En celular grilla de 2 columnas para ahorrar espacio vertical) */}
          <div className="md:col-span-3 space-y-2.5 sm:space-y-3 border-t md:border-t-0 border-[#1C1A17] pt-4 md:pt-0">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#C2A87E] font-semibold block">
              {t("footer.sections")}
            </span>
            <ul className="grid grid-cols-2 md:block gap-x-4 gap-y-1.5 md:space-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#F1EBDD] transition-colors py-1 inline-block min-h-[28px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloque 3: Canales de Contacto Directo (En celular grilla compacta) */}
          <div className="md:col-span-4 space-y-2.5 sm:space-y-3 border-t md:border-t-0 border-[#1C1A17] pt-4 md:pt-0">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#C2A87E] font-semibold block">
              {t("footer.channels")}
            </span>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 gap-2 sm:gap-2.5 text-xs">
              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#EAE5D9] hover:text-white transition-colors py-1 min-h-[32px]"
              >
                <div className="w-7 h-7 rounded-sm bg-[#12110F] border border-[#A58A60]/30 flex items-center justify-center text-[#A58A60] shrink-0">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{contacto.whatsappVisible}</span>
              </a>

              {/* Instagram */}
              <a
                href={redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#EAE5D9] hover:text-white transition-colors py-1 min-h-[32px]"
              >
                <div className="w-7 h-7 rounded-sm bg-[#12110F] border border-[#A58A60]/30 flex items-center justify-center text-[#A58A60] shrink-0">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">@systemahets</span>
              </a>

              {/* YouTube */}
              <a
                href={redes.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#EAE5D9] hover:text-white transition-colors py-1 min-h-[32px]"
              >
                <div className="w-7 h-7 rounded-sm bg-[#12110F] border border-[#A58A60]/30 flex items-center justify-center text-[#A58A60] shrink-0">
                  <Youtube className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{t("footer.youtubeChannel")}</span>
              </a>

              {/* Mail */}
              <a
                href={`mailto:${contacto.email}`}
                className="flex items-center gap-2 text-[#EAE5D9] hover:text-white transition-colors py-1 min-h-[32px] xs:col-span-2 md:col-span-1"
              >
                <div className="w-7 h-7 rounded-sm bg-[#12110F] border border-[#A58A60]/30 flex items-center justify-center text-[#A58A60] shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{contacto.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Fila Inferior: Copyright */}
        <div className="pt-5 sm:pt-6 border-t border-[#1C1A17] flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left text-[10px] sm:text-[11px] font-mono text-[#8C887E]">
          <div>
            {t("footer.copyright")}
          </div>
          <div>
            {t("footer.author")}
          </div>
        </div>

      </div>
    </footer>
  );
}
