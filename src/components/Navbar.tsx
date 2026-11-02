import { useState, useEffect } from "react";
import { Menu, X, MessageSquare, ArrowRight, Globe } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  currentView?: "home" | "novedades";
  onOpenNovedades?: () => void;
  onNavigateHomeSection?: (href: string) => void;
}

export function Navbar({
  currentView = "home",
  onOpenNovedades,
  onNavigateHomeSection,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("#inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 15);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }

      if (currentView === "novedades") {
        setActiveSection("#novedades");
        ticking = false;
        return;
      }

      const sectionMap: { id: string; navHref: string }[] = [
        { id: "contacto", navHref: "#contacto" },
        { id: "testimonios", navHref: "#sedes-y-clases" },
        { id: "sedes-y-clases", navHref: "#sedes-y-clases" },
        { id: "entrenamientos", navHref: "#systema" },
        { id: "diego-ledesma", navHref: "#systema" },
        { id: "systema", navHref: "#systema" },
        { id: "inicio", navHref: "#inicio" },
      ];

      const viewportThreshold = window.innerHeight * 0.35;
      for (const item of sectionMap) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportThreshold) {
            setActiveSection(item.navHref);
            break;
          }
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

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
    { label: t("nav.novedades"), href: "#novedades", isNovedades: true },
    { label: t("nav.contacto"), href: "#contacto" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(href);

    if (href === "#novedades") {
      if (onOpenNovedades) {
        onOpenNovedades();
      }
      return;
    }

    if (onNavigateHomeSection) {
      onNavigateHomeSection(href);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1F1916]/95 backdrop-blur-md border-b border-[#C86442]/45 shadow-[0_10px_30px_rgba(18,14,12,0.7)] py-2 sm:py-2.5"
          : "bg-[#1F1916]/90 sm:bg-[#1F1916]/85 backdrop-blur-sm border-b border-[#C49A64]/25 py-2 sm:py-3"
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
            className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover:scale-105"
            width={120}
            height={44}
            onError={(e) => {
              (e.target as HTMLImageElement).src = SITE_CONFIG.assets.logoFallbackUrl;
            }}
          />
          <div className="flex flex-col">
            <span className="font-heading text-sm sm:text-base font-bold tracking-wider text-[#F4EDE2] group-hover:text-[#C86442] transition-colors leading-tight whitespace-nowrap">
              SYSTEMA HETS
            </span>
            <span className="hidden sm:block text-[9px] font-mono uppercase tracking-[0.22em] text-[#C49A64] group-hover:text-[#DF7E5B] transition-colors">
              Diego Ledesma
            </span>
          </div>
        </a>

        {/* Enlaces de escritorio con indicador en Terracota Pampeana (#C86442) y Ocre Arcilla (#C49A64) */}
        <nav className="hidden lg:flex items-center text-[11px] font-mono tracking-widest text-[#C4B5A3]">
          {navLinks.map((link, idx) => {
            const isActive =
              currentView === "novedades"
                ? link.href === "#novedades"
                : activeSection === link.href;
            return (
              <div key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 whitespace-nowrap min-h-[36px] flex items-center gap-1.5 transition-colors duration-300 ${
                    isActive
                      ? "text-[#F4EDE2] font-semibold"
                      : link.isNovedades
                      ? "text-[#DF7E5B] hover:text-[#F4EDE2] font-semibold"
                      : "text-[#C4B5A3] hover:text-[#DF7E5B]"
                  }`}
                >
                  {link.isNovedades && (
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#C86442]"
                    />
                  )}
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#B85332] shadow-[0_0_8px_rgba(200,100,66,0.65)] transition-all duration-300 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"
                    }`}
                  />
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="text-[#C4B5A3]/45 text-[9px] select-none" aria-hidden="true">
                    ·
                  </span>
                )}
              </div>
            );
          })}
        </nav>

        {/* Lado derecho: Idioma (ES / EN) + Botón WhatsApp en desktop + Menú hamburguesa en mobile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Botón selector de idioma (ES / EN) */}
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm border border-[#C49A64]/45 bg-[#2A211C] text-xs font-mono tracking-wider hover:border-[#C86442] transition-all cursor-pointer min-h-[44px] shadow-sm select-none active:scale-95"
            aria-label={lang === "es" ? "Cambiar idioma a Inglés (Switch to English)" : "Switch language to Spanish (Cambiar a Español)"}
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe className="w-3.5 h-3.5 text-[#C86442]" />
            <span className={lang === "es" ? "text-[#F4EDE2] font-bold underline decoration-[#C86442] underline-offset-2" : "text-[#C4B5A3]"}>
              ES
            </span>
            <span className="text-[#C4B5A3]/50">/</span>
            <span className={lang === "en" ? "text-[#F4EDE2] font-bold underline decoration-[#C86442] underline-offset-2" : "text-[#C4B5A3]"}>
              EN
            </span>
          </button>

          {/* Botón WhatsApp solo en desktop en Tierra Sombra y Terracota Pampeana */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-[11px] font-mono tracking-wider uppercase text-[#F4EDE2] bg-[#B85332] hover:bg-[#C86442] border border-[#DF7E5B]/60 rounded-xs transition-all duration-300 shadow-[0_0_15px_rgba(184,83,50,0.3)] min-h-[38px] group whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#F4EDE2] transition-colors" />
            <span className="font-semibold">{t("nav.consultar")}</span>
          </a>

          {/* Menú móvil trigger con zona táctil >= 48px */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-[#F4EDE2] hover:text-[#C86442] rounded-sm border border-[#C49A64]/50 bg-[#2A211C] active:bg-[#342923] focus:outline-none cursor-pointer"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6 text-[#C86442]" />
          </button>
        </div>

      </div>

      {/* Barra de progreso de lectura en Terracota y Ocre Arcilla en el filo inferior */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden pointer-events-none"
      >
        <div
          className="h-full bg-gradient-to-r from-[#B85332] via-[#C49A64] to-[#C86442] shadow-[0_0_14px_rgba(200,100,66,0.85)] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* MENÚ HAMBURGUESA A PANTALLA COMPLETA EN MOBILE */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#1F1916]/98 backdrop-blur-2xl flex flex-col justify-between p-5 pt-[calc(1rem+env(safe-area-inset-top,0px))] pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal de navegación"
        >
          {/* Cabecera del modal a pantalla completa */}
          <div className="flex items-center justify-between border-b border-[#C49A64]/35 pb-4">
            <div className="flex items-center gap-2.5">
              <img
                src={SITE_CONFIG.assets.logo}
                alt="Systema HETS"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = SITE_CONFIG.assets.logoFallbackUrl;
                }}
              />
              <span className="font-heading text-sm sm:text-base font-bold tracking-wider text-[#F4EDE2]">
                {t("nav.menuTitle")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleLang}
                className="px-3 py-2 rounded-sm border border-[#C49A64]/50 bg-[#2A211C] text-xs font-mono tracking-wider flex items-center gap-1.5 cursor-pointer min-h-[44px]"
              >
                <Globe className="w-3.5 h-3.5 text-[#C86442]" />
                <span className={lang === "es" ? "text-[#F4EDE2] font-bold" : "text-[#C4B5A3]"}>ES</span>
                <span className="text-[#C4B5A3]/50">/</span>
                <span className={lang === "en" ? "text-[#F4EDE2] font-bold" : "text-[#C4B5A3]"}>EN</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-sm text-[#C4B5A3] hover:text-[#F4EDE2] border border-[#C49A64]/50 bg-[#2A211C] cursor-pointer"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6 text-[#C86442]" />
              </button>
            </div>
          </div>

          {/* Lista de enlaces con zonas táctiles grandes */}
          <nav className="flex flex-col my-auto py-6 divide-y divide-[#C4B5A3]/20">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="min-h-[54px] flex items-center justify-between text-[#F4EDE2] hover:text-[#C86442] active:text-[#DF7E5B] font-heading text-lg uppercase tracking-wider py-3.5 px-2 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#C86442] font-bold tabular-nums">0{idx + 1}</span>
                  <span>{link.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C49A64]" />
              </a>
            ))}
          </nav>

          {/* Bloque inferior: WhatsApp Destacado en Terracota Pampeana */}
          <div className="space-y-3 pt-4 border-t border-[#C49A64]/35">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.mensajesWhatsApp.clasePrueba)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer-lightning w-full min-h-[52px] flex items-center justify-center gap-2.5 px-4 py-3.5 text-xs font-extrabold tracking-wider uppercase text-[#F4EDE2] rounded-sm transition-transform active:scale-[0.98] shadow-lg shadow-[#B85332]/30"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t("nav.consultar")}</span>
            </a>

            <div className="text-center text-[11px] font-mono text-[#C4B5A3] uppercase tracking-wider pt-1">
              {t("nav.menuLocation")}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
