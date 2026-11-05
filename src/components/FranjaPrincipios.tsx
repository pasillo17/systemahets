import { Shield, Activity, HeartPulse } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * 3 Ejes Fundamentales con Bloques Arquitectónicos Numerados (01, 02, 03)
 * y filetes sólidos en Naranja Terracota (#D97736) y Dorado (#D4AF37).
 */
export function FranjaPrincipios() {
  const { t } = useLanguage();

  const principios = [
    {
      num: "01",
      titulo: t("principios.autoproteccion"),
      icono: Shield,
      descripcion: t("principios.autoproteccionDesc"),
    },
    {
      num: "02",
      titulo: t("principios.movimiento"),
      icono: Activity,
      descripcion: t("principios.movimientoDesc"),
    },
    {
      num: "03",
      titulo: t("principios.salud"),
      icono: HeartPulse,
      descripcion: t("principios.saludDesc"),
    },
  ];

  return (
    <section className="relative z-20 bg-[#1B140F] text-[#F5EFE6] pt-4 pb-12 sm:pb-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border-t border-[#D97736]/30 pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {principios.map((item, idx) => {
            const Icon = item.icono;
            return (
              <ScrollReveal
                key={item.titulo}
                direction="up"
                delay={idx * 80}
                distance={20}
              >
                <div className="relative h-full p-5 sm:p-6 bg-[#110D0A] border border-[#D97736]/35 hover:border-[#D4AF37] rounded-xs overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-[0_12px_28px_rgba(0,0,0,0.7)]">
                  {/* Barra lateral izquierda sólida en Naranja Terracota */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-b from-[#D97736] via-[#D4AF37] to-[#C5A059]"
                  />

                  {/* Número gigante en marca de agua */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-3 right-3 font-heading font-black text-6xl text-[#D97736]/12 group-hover:text-[#D4AF37]/25 transition-colors select-none pointer-events-none leading-none"
                  >
                    {item.num}
                  </span>

                  <div className="relative z-10 pl-2 flex flex-col items-start">
                    <div className="w-10 h-10 rounded-xs bg-[#1B140F] border border-[#D97736]/40 group-hover:bg-[#D97736] flex items-center justify-center mb-3.5 transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[1.75] text-[#D97736] group-hover:text-[#110D0A] transition-colors" />
                    </div>

                    <h3 className="text-base sm:text-xl font-heading uppercase tracking-wide text-[#F5EFE6] group-hover:text-[#D4AF37] transition-colors font-bold mb-2 leading-snug">
                      {item.titulo}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed font-sans">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
