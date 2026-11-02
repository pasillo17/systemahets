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
      variant: "terracotta",
    },
    {
      titulo: t("principios.movimiento"),
      icono: Activity,
      descripcion: t("principios.movimientoDesc"),
      variant: "ochre",
    },
    {
      titulo: t("principios.salud"),
      icono: HeartPulse,
      descripcion: t("principios.saludDesc"),
      variant: "terracotta",
    },
  ];

  return (
    <section className="relative z-20 bg-flow-principios text-[#F4EDE2] py-8 sm:py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3 Pilares sueltos sobre el fondo, separados únicamente por una línea divisoria sutil */}
        <div className="border-y border-[#C49A64]/20 py-6 sm:py-10 grid grid-cols-1 md:grid-cols-3 gap-y-7 gap-x-8 divide-y md:divide-y-0 md:divide-x divide-[#C49A64]/20">
          {principios.map((item, idx) => {
            const Icon = item.icono;
            const isTerracotta = item.variant === "terracotta";
            return (
              <ScrollReveal
                key={item.titulo}
                direction="up"
                delay={idx * 70}
                distance={18}
              >
                <div className="pt-6 first:pt-0 md:pt-0 md:px-7 first:md:pl-0 last:md:pr-0 flex flex-col items-start group">
                  <Icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75] mb-2.5 transition-transform duration-300 group-hover:scale-105 ${
                      isTerracotta ? "text-[#DF7E5B]" : "text-[#C49A64]"
                    }`}
                  />

                  <h3 className="text-base sm:text-lg font-heading uppercase tracking-wide text-[#F4EDE2] font-bold mb-2 leading-snug">
                    {item.titulo}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C4B5A3] leading-relaxed font-sans">
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
