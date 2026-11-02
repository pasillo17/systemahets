import { useState, useEffect } from "react";
import { getClasePruebaWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

/**
 * BOTÓN FLOTANTE CIRCULAR COMPACTO DE WHATSAPP:
 * 40px × 40px en móvil (44px × 44px en desktop), ubicado en la esquina inferior derecha.
 * Se oculta automáticamente cuando el usuario hace scroll hacia abajo o cuando un modal está abierto.
 */
export function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisibleOnScroll, setIsVisibleOnScroll] = useState(true);

  useEffect(() => {
    const checkModalState = () => {
      const hasDialog = document.querySelector('[role="dialog"]') !== null;
      const bodyLocked = document.body.style.overflow === "hidden";
      setIsModalOpen(hasDialog || bodyLocked);
    };

    checkModalState();

    const observer = new MutationObserver(checkModalState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY;

          if (currentScrollY < 80) {
            setIsVisibleOnScroll(true);
          } else if (delta > 8) {
            setIsVisibleOnScroll(false);
          } else if (delta < -6) {
            setIsVisibleOnScroll(true);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isModalOpen) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-5 right-3.5 sm:bottom-6 sm:right-6 z-30 transition-all duration-300 ${
        isVisibleOnScroll
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <a
        href={getClasePruebaWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          isEn
            ? "Contact via WhatsApp"
            : "Consultar o reservar clase por WhatsApp"
        }
        title={
          isEn
            ? "Contact via WhatsApp"
            : "Consultar por WhatsApp"
        }
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1C1E24]/95 hover:bg-[#D4AF37] text-[#C5A059] hover:text-[#121316] border border-[#C5A059]/25 hover:border-[#D4AF37] shadow-md backdrop-blur-sm flex items-center justify-center transition-all duration-200 active:scale-95 group"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current text-[#C5A059] group-hover:text-[#121316] transition-colors"
          aria-hidden="true"
        >
          <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.359 5.016L2 22l5.156-1.359c1.484.813 3.156 1.25 4.875 1.25 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.828 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.172.109-1.906-.125-.453-.141-1.031-.328-1.766-.641-3.094-1.328-5.109-4.453-5.266-4.656-.156-.203-1.266-1.688-1.266-3.219s.797-2.281 1.078-2.594c.281-.313.609-.391.813-.391.203 0 .406.016.578.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.141.328-.297.5-.156.172-.313.391-.453.516-.156.141-.313.313-.141.609.172.297.766 1.266 1.641 2.047 1.125 1.016 2.078 1.328 2.375 1.484.297.156.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.688-.156.281.094 1.781.844 2.094 1 .313.156.516.234.594.359.078.125.078.734-.172 1.438z" />
        </svg>
      </a>
    </div>
  );
}
