import { Shield, Activity, HeartPulse, Compass } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";

export function FranjaPrincipios() {
  const { t } = useLanguage();

  const principios = [
    {
      titulo: t("principios.defensa"),
      icono: Shield,
      descripcion: t("principios.defensaDesc"),
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
    {
      titulo: t("principios.autoconocimiento"),
      icono: Compass,
      descripcion: t("principios.autoconocimientoDesc"),
    },
  ];

  return (
    <section className="relative z-20 bg-[#12110F]/90 backdrop-blur-md border-t border-b border-[#A58A60]/20 py-8 sm:py-12 overflow-hidden">
      {/* Luz ambiental sutil en CSS puro */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-24 bg-[#A58A60]/8 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {principios.map((item) => {
            const Icon = item.icono;
            return (
              <SpotlightCard
                key={item.titulo}
                spotlightColor="rgba(194, 168, 126, 0.16)"
                borderColor="rgba(194, 168, 126, 0.5)"
                className="p-4 sm:p-6 bg-[#080807]/80 hover:border-[#A58A60]/50 transition-all duration-300 card-specular-edge group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-[#12110F] border border-[#A58A60]/30 group-hover:border-[#A58A60] group-hover:shadow-[0_0_15px_rgba(165,138,96,0.3)] flex items-center justify-center mb-3 shrink-0 text-[#A58A60] group-hover:text-[#F1EBDD] transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-heading uppercase tracking-wider text-[#F1EBDD] font-bold group-hover:text-[#C2A87E] transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#C4BFB4] mt-1.5 leading-relaxed font-sans max-w-[200px]">
                    {item.descripcion}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

