import { MessageSquare } from "lucide-react";
import { getClasePruebaWhatsAppUrl } from "../config/siteConfig";
import { useLanguage } from "../context/LanguageContext";

/**
 * BOTÓN FLOTANTE DISCRETO DE WHATSAPP:
 * Fijo en la esquina inferior derecha, sobrio y orgánico con la estética del sitio.
 */
export function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] pb-safe">
      <a
        href={getClasePruebaWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          isEn
            ? "Book trial class on WhatsApp"
            : "Consultar o reservar clase por WhatsApp"
        }
        className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-sm bg-[#261E1A]/95 hover:bg-[#B85332] text-[#F4EDE2] border border-[#C49A64]/55 hover:border-[#DF7E5B] shadow-lg backdrop-blur-sm transition-all duration-300 active:scale-95"
      >
        <MessageSquare className="w-4 h-4 text-[#DF7E5B] fill-current shrink-0" />
        <span className="text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
