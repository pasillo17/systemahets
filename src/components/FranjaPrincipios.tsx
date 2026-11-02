import { Shield, Activity, HeartPulse, Compass } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Franja de Principios sobre Arena Piedra (#E5DAC9) para dar respiro visual
 * y calidez pampeana, con tarjetas en Hueso Pergamino (#F8F3EB),
 * acentos en Terracota Pampeana (#B85332) y Ocre Arcilla (#9C7340), y textos en Carbón de Quebracho (#231C18).
 */
export function FranjaPrincipios() {
  const { t } = useLanguage();

  const principios = [
    {
      titulo: t("principios.defensa"),
      icono: Shield,
      descripcion: t("principios.defensaDesc"),
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
    {
      titulo: t("principios.autoconocimiento"),
      icono: Compass,
      descripcion: t("principios.autoconocimientoDesc"),
      variant: "ochre",
    },
  ];

  return (
    <section className="relative z-20 bg-flow-principios text-[#F4EDE2] pt-2 pb-8 sm:pt-4 sm:pb-14 overflow-hidden">
      {/* Resplandor ambiental sutil en Terracota y Ocre sobre Tierra Sombra */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-28 bg-[#B85332]/12 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-72 h-28 bg-[#C49A64]/12 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {principios.map((item, idx) => {
            const Icon = item.icono;
            const isTerracotta = item.variant === "terracotta";
            return (
              <ScrollReveal
                key={item.titulo}
                direction="up"
                delay={idx * 70}
                distance={20}
              >
                <div className="p-3.5 sm:p-6 bg-[#261E1A] border border-[#C49A64]/40 hover:border-[#C86442] rounded-sm transition-all duration-300 card-specular-edge group h-full relative overflow-hidden">
                  {/* Filete superior en Terracota Pampeana y Ocre Arcilla */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] ${
                      isTerracotta
                        ? "bg-gradient-to-r from-[#B85332] via-[#C86442] to-transparent"
                        : "bg-gradient-to-r from-[#9C7340] via-[#C49A64] to-transparent"
                    }`}
                  />

                  <div className="flex flex-col sm:items-center sm:text-center">
                    <div className="flex items-center justify-between sm:justify-center w-full gap-2 sm:flex-col sm:gap-0 mb-2 sm:mb-3">
                      <div
                        className={`w-8 h-8 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center shrink-0 transition-all duration-300 sm:mb-2.5 ${
                          isTerracotta
                            ? "bg-[#1A1412] border border-[#C86442]/70 text-[#DF7E5B] group-hover:bg-[#B85332] group-hover:text-[#F4EDE2] shadow-sm"
                            : "bg-[#1A1412] border border-[#C49A64]/65 text-[#C49A64] group-hover:bg-[#9C7340] group-hover:text-[#F4EDE2] shadow-sm"
                        }`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                      </div>
                      <span
                        className={`sm:hidden text-[10px] font-mono font-bold tabular-nums ${
                          isTerracotta ? "text-[#DF7E5B]" : "text-[#C49A64]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-heading uppercase tracking-wider text-[#F4EDE2] font-bold group-hover:text-[#DF7E5B] transition-colors leading-tight mb-1 sm:mb-1.5">
                      {item.titulo}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-[#C4B5A3] leading-snug sm:leading-relaxed font-sans sm:max-w-[210px]">
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
