import { SYSTEMA_HISTORIA } from "../data/systemaData";
import { History, Shield, Sparkles } from "lucide-react";

export function Historia() {
  return (
    <section id="historia" className="py-24 bg-[#0a1b11] border-t border-b border-emerald-900/40 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            <History className="w-4 h-4 text-emerald-400" />
            <span>Crónica y Linaje</span>
            <span aria-hidden="true">·</span>
            <span>Un Milenio de Evolución</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading">
            Historia del Arte Marcial Ruso
          </h2>
          <p className="text-emerald-100/80 mt-4 text-base sm:text-lg leading-relaxed">
            Systema no nació como un espectáculo deportivo ni bajo reglamentos de torneo. Nació como un sistema de supervivencia integral en la estepa eslava y fue sistematizado por científicos de la biomecánica en laboratorios soviéticos para unidades especiales Spetsnaz.
          </p>
        </div>

        {/* Narrative Flow Grid */}
        <div className="space-y-12">
          {SYSTEMA_HISTORIA.map((item, index) => (
            <div
              key={item.periodo}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 rounded-lg bg-[#0e2417]/70 border border-emerald-900/60 hover:border-emerald-600/50 transition-colors"
            >
              {/* Left Column: Period & Indicator */}
              <div className="lg:col-span-3 space-y-2">
                <span className="text-xs uppercase tracking-widest text-orange-400 font-mono font-semibold">
                  {item.periodo}
                </span>
                <div className="text-2xl font-bold text-white font-heading">
                  Capítulo {index + 1}
                </div>
                <div className="h-0.5 w-12 bg-orange-500/80 my-2" />
                <p className="text-xs text-emerald-300/70">
                  {index === 0 && "Tradición combativa popular y cosaca"}
                  {index === 1 && "Fisiología del movimiento e intervención Spetsnaz"}
                  {index === 2 && "Evolución humanista y metodología HETS"}
                </p>
              </div>

              {/* Right Column: Narrative & Specific Evidence */}
              <div className="lg:col-span-9 space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {item.titulo}
                </h3>
                <p className="text-slate-200 leading-relaxed text-sm sm:text-base font-normal">
                  {item.texto}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-3">
                    Claves del período:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {item.detalles.map((detalle, dIdx) => (
                      <li
                        key={dIdx}
                        className="text-xs text-slate-300 p-3 bg-[#07140c]/80 border border-emerald-900/50 rounded flex flex-col justify-between"
                      >
                        <span className="text-orange-400 font-mono text-[10px] mb-1">0{dIdx + 1}</span>
                        <span>{detalle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Historical Philosophy Invariant Banner */}
        <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-orange-950/30 via-[#0e2417] to-[#0a1c12] border border-orange-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">
              El Principio Fundamental HETS
            </span>
            <h3 className="text-2xl font-bold text-white font-heading">
              Preservar la vida: La agresión nace del miedo y la tensión
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              En las artes marciales convencionales se entrena para destruir al enemigo con cólera o tensión muscular. En Systema HETS aprendemos que la rabia nubla el juicio perceptivo y agota la energía vital. Al calmar el sistema nervioso central, el practicante actúa con compasión, precisión quirúrgica y serenidad total.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="p-6 bg-[#07140c] border border-emerald-900/60 rounded-lg text-center max-w-xs shadow-xl">
              <span className="text-3xl text-orange-400 font-serif block mb-2">«ПОЗНАЙ СЕБЯ»</span>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono">
                Conócete a ti mismo · Proverbio de los Maestros de Systema
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
