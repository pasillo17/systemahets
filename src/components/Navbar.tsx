import { useState, useEffect } from "react";
import { Menu, X, MessageSquare, ArrowRight, Globe } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll en body cuando el menú full-screen esté abierto en mobile
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t("nav.inicio"), href: "#inicio" },
    { label: t("nav.systema"), href: "#systema" },
    { label: t("nav.sedes"), href: "#sedes-y-clases" },
    { label: t("nav.contacto"), href: "#contacto" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080807]/95 backdrop-blur-md border-b border-[#A58A60]/20 shadow-xl py-2 sm:py-2.5"
          : "bg-[#080807]/90 sm:bg-[#080807]/75 backdrop-blur-sm border-b border-white/5 py-2 sm:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Logo a la izquierda */}
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, "#inicio")}
          className="flex items-center gap-2.5 group shrink-0 min-h-[44px]"
          aria-label="Ir al inicio de Systema HETS"
        >
          <img
            src={SITE_CONFIG.assets.logo}
            alt="Systema HETS"
            className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105"
            width={120}
            height={44}
            onError={(e) => {
              (e.target as HTMLImageElement).src = SITE_CONFIG.assets.logoFallbackUrl;
            }}
          />
          <span className="font-heading text-sm sm:text-base font-bold tracking-wider text-[#F1EBDD] group-hover:text-[#A58A60] transition-colors leading-tight whitespace-nowrap">
            SYSTEMA HETS
          </span>
        </a>

        {/* Enlaces de escritorio */}
        <nav className="hidden lg:flex items-center text-[11px] font-mono tracking-widest text-[#D8C7A5]">
          {navLinks.map((link, idx) => (
            <div key={link.href} className="flex items-center">
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-white transition-colors px-3 py-1.5 whitespace-nowrap min-h-[36px] flex items-center"
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span className="text-[#3E3A33] text-[9px] select-none" aria-hidden="true">
                  |
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Lado derecho: Idioma (ES / EN) + Botón WhatsApp en desktop + Menú hamburguesa en mobile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Botón selector de idioma (ES / EN) accesible en desktop y mobile */}
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm border border-[#A58A60]/40 bg-[#12110F] text-xs font-mono tracking-wider hover:border-[#A58A60] transition-all cursor-pointer min-h-[44px] shadow-sm select-none active:scale-95"
            aria-label={lang === "es" ? "Cambiar idioma a Inglés (Switch to English)" : "Switch language to Spanish (Cambiar a Español)"}
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe className="w-3.5 h-3.5 text-[#A58A60]" />
            <span className={lang === "es" ? "text-[#F1EBDD] font-bold underline decoration-[#A58A60] underline-offset-2" : "text-[#8C887E]"}>
              ES
            </span>
            <span className="text-[#4A453C]">/</span>
            <span className={lang === "en" ? "text-[#F1EBDD] font-bold underline decoration-[#A58A60] underline-offset-2" : "text-[#8C887E]"}>
              EN
            </span>
          </button>

          {/* Botón WhatsApp solo en desktop */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-[11px] font-mono tracking-wider uppercase text-[#F1EBDD] hover:text-[#080807] border border-[#A58A60]/60 hover:bg-[#A58A60] rounded-xs transition-all duration-300 shadow-sm min-h-[38px]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#A58A60]" />
            <span className="font-semibold">{t("nav.consultar")}</span>
          </a>

          {/* Menú móvil trigger con zona táctil >= 48px */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-[#F1EBDD] hover:text-[#A58A60] rounded-sm border border-[#A58A60]/30 bg-[#12110F] active:bg-[#1c1a17] focus:outline-none cursor-pointer"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6 text-[#C2A87E]" />
          </button>
        </div>

      </div>

      {/* MENÚ HAMBURGUESA A PANTALLA COMPLETA EN MOBILE */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#080807]/98 backdrop-blur-2xl flex flex-col justify-between p-5 pt-[calc(1rem+env(safe-area-inset-top,0px))] pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal de navegación"
        >
          {/* Cabecera del modal a pantalla completa */}
          <div className="flex items-center justify-between border-b border-[#A58A60]/20 pb-4">
            <div className="flex items-center gap-2.5">
              <img
                src={SITE_CONFIG.assets.logo}
                alt="Systema HETS"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = SITE_CONFIG.assets.logoFallbackUrl;
                }}
              />
              <span className="font-heading text-sm sm:text-base font-bold tracking-wider text-[#F1EBDD]">
                {t("nav.menuTitle")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Botón de idioma también dentro del menú mobile */}
              <button
                type="button"
                onClick={toggleLang}
                className="px-3 py-2 rounded-sm border border-[#A58A60]/40 bg-[#12110F] text-xs font-mono tracking-wider flex items-center gap-1.5 cursor-pointer min-h-[44px]"
              >
                <Globe className="w-3.5 h-3.5 text-[#A58A60]" />
                <span className={lang === "es" ? "text-white font-bold" : "text-[#8C887E]"}>ES</span>
                <span className="text-[#3E3A33]">/</span>
                <span className={lang === "en" ? "text-white font-bold" : "text-[#8C887E]"}>EN</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-sm text-[#C8C2B5] hover:text-white border border-[#A58A60]/40 bg-[#12110F] cursor-pointer"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6 text-[#A58A60]" />
              </button>
            </div>
          </div>

          {/* Lista de enlaces con zonas táctiles grandes (mínimo 48px) */}
          <nav className="flex flex-col my-auto py-6 divide-y divide-[#25221E]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="min-h-[50px] flex items-center justify-between text-[#F1EBDD] hover:text-[#A58A60] active:text-[#C2A87E] font-heading text-lg uppercase tracking-wider py-3.5 px-2 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#A58A60]" />
              </a>
            ))}
          </nav>

          {/* Bloque inferior: WhatsApp Destacado */}
          <div className="space-y-3 pt-4 border-t border-[#A58A60]/25">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.mensajesWhatsApp.clasePrueba)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] flex items-center justify-center gap-2.5 px-4 py-3.5 text-xs font-bold tracking-wider uppercase text-[#080807] bg-gradient-to-r from-[#A58A60] via-[#C2A87E] to-[#A58A60] rounded-sm transition-transform active:scale-[0.98] shadow-lg shadow-[#A58A60]/30"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t("nav.consultar")}</span>
            </a>

            <div className="text-center text-[11px] font-mono text-[#C4BFB4] uppercase tracking-wider pt-1">
              {t("nav.menuLocation")}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
