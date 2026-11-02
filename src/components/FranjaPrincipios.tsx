import { Shield, Activity, HeartPulse } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * 3 Pilares principales bien plantados y sin recuadros:
 * 1. Autoprotección
 * 2. Movimiento Consciente
 * 3. Salud y Desarrollo Humano
 */
export function FranjaPrincipios() {
  const { t } = useLanguage();

  const principios = [
    {
      titulo: t("principios.autoproteccion"),
      icono: Shield,
      descripcion: t("principios.autoproteccionDesc"),
    },
    {
      titulo: t("principios.movimiento"),
      icono: Activity,
      descripcion: t("principios.movimientoDesc"),
    },
    {
      titulo: t("principios.salud"),
      icono: HeartPulse,
      descripcion: t("principios.saludDesc"),
    },
  ];

  return (
    <section className="relative z-20 bg-[#0D0E12] text-[#F4F4F6] pt-4 pb-10 sm:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3 Pilares sueltos sobre el fondo, separados únicamente por una línea divisoria sutil en Dorado suave */}
        <div className="border-t border-[#C5A059]/25 pt-6 sm:pt-10 grid grid-cols-1 md:grid-cols-3 gap-y-7 gap-x-8 divide-y md:divide-y-0 md:divide-x divide-[#C5A059]/25">
          {principios.map((item, idx) => {
            const Icon = item.icono;
            return (
              <ScrollReveal
                key={item.titulo}
                direction="up"
                delay={idx * 90}
                distance={20}
              >
                <div className="pt-6 first:pt-0 md:pt-0 md:px-7 first:md:pl-0 last:md:pr-0 flex flex-col items-start group transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xs bg-[#07080A] border border-[#C5A059]/30 group-hover:border-[#D4AF37]/70 flex items-center justify-center mb-3 transition-all duration-300 shadow-[0_0_16px_rgba(197,160,89,0.14)] group-hover:shadow-[0_0_22px_rgba(197,160,89,0.3)]">
                    <Icon className="w-5 h-5 stroke-[1.75] transition-transform duration-300 group-hover:scale-110 text-[#C5A059] group-hover:text-[#D4AF37] icon-gold-glow" />
                  </div>

                  <h3 className="text-base sm:text-lg font-heading uppercase tracking-wide text-[#F4F4F6] group-hover:text-[#D4AF37] transition-colors font-bold mb-2 leading-snug">
                    {item.titulo}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A0A5B1] leading-relaxed font-sans">
                    {item.descripcion}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
