import { ShieldCheck, Award, HeartHandshake, Compass, Sparkles } from "lucide-react";
import { MANIFIESTO_FUNDAMENTAL } from "../data/systemaData";

export function QuienSoy() {
  return (
    <section id="quien-soy" className="py-24 bg-[#07130b] text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Credentials Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-lg overflow-hidden border border-emerald-900/60 shadow-2xl bg-[#0a1e13] group">
              <img
                src="/src/assets/images/head_instructor_portrait_1793283801877.jpg"
                alt="Retrato del Maestro Alexei Voronin, Director de Systema HETS"
                className="w-full h-[480px] sm:h-[540px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130b] via-transparent to-transparent opacity-85" />
              
              {/* Overlay Label Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#07140c]/90 backdrop-blur-md border border-emerald-700/50 rounded">
                <div className="text-lg font-bold text-white font-heading">
                  Alexei Voronin
                </div>
                <div className="text-xs text-orange-400 uppercase tracking-wider font-semibold">
                  Director Técnico & Fundador de Systema HETS
                </div>
                <div className="text-[11px] text-emerald-300/80 mt-1">
                  Linaje Oficial Systema Ryabko · 24 años de investigación marcial
                </div>
              </div>
            </div>

            {/* Quick Trust Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-[#0c2215]/60 border border-emerald-900/60 rounded text-center">
                <div className="text-xl font-bold text-orange-400 font-mono tabular-nums">1.200+</div>
                <div className="text-[11px] text-emerald-200/80 uppercase tracking-wider mt-0.5">Alumnos Formados</div>
              </div>
              <div className="p-3 bg-[#0c2215]/60 border border-emerald-900/60 rounded text-center">
                <div className="text-xl font-bold text-emerald-400 font-mono tabular-nums">100%</div>
                <div className="text-[11px] text-emerald-200/80 uppercase tracking-wider mt-0.5">Seguridad Articular</div>
              </div>
            </div>
          </div>

          {/* Right Column: First-Person Narrative with Exact User Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Nuestra Propuesta de Valor</span>
              <span aria-hidden="true">·</span>
              <span>Propósito y Compromiso</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading">
              ¿Quiénes Somos y Qué Proponemos en Systema HETS?
            </h2>

            {/* User Manifesto Callout Block */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-950/60 to-emerald-900/30 border-l-4 border-orange-500 rounded-r-lg shadow-lg">
              <p className="text-base sm:text-lg text-emerald-100 font-semibold leading-relaxed">
                «{MANIFIESTO_FUNDAMENTAL}»
              </p>
            </div>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                En <strong className="text-white">Systema HETS</strong> entendemos que el conflicto exterior es solo un reflejo de nuestras tensiones internas. Tras décadas practicando disciplinas de combate convencionales marcadas por lesiones y desgaste psicofísico, descubrimos en el arte marcial ruso una verdad transformadora:
              </p>
              <p>
                El verdadero poder de un ser humano no está en la contracción muscular rígida ni en la intimidación, sino en <strong className="text-emerald-300">la capacidad de relajarse cuando el entorno exige pánico</strong>. A través del movimiento libre, aprendes a escuchar tu respiración, a liberar contracturas emocionales y a restaurar la biomecánica innata de tu cuerpo.
              </p>
              <p className="italic text-orange-200/90 font-serif text-lg">
                «No te entrenamos para que vivas a la defensiva; te brindamos herramientas para que camines por el mundo con serenidad, libre de miedo y con plena conciencia de ti mismo.»
              </p>
            </div>

            {/* Core Values Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-[#0c2215]/80 border border-emerald-900/60 rounded hover:border-emerald-500/50 transition-colors">
                <Sparkles className="w-5 h-5 text-orange-400 mb-2" />
                <h3 className="text-sm font-bold text-white font-heading uppercase">Movimiento Consciente</h3>
                <p className="text-xs text-emerald-200/70 mt-1 leading-normal">
                  Recuperación del rango articular y soltura miofascial sin dolor destructivo.
                </p>
              </div>

              <div className="p-4 bg-[#0c2215]/80 border border-emerald-900/60 rounded hover:border-emerald-500/50 transition-colors">
                <HeartHandshake className="w-5 h-5 text-orange-400 mb-2" />
                <h3 className="text-sm font-bold text-white font-heading uppercase">Mejoramiento Integral</h3>
                <p className="text-xs text-emerald-200/70 mt-1 leading-normal">
                  Gestión del estrés en la vida diaria, el trabajo y las relaciones interpersonales.
                </p>
              </div>

              <div className="p-4 bg-[#0c2215]/80 border border-emerald-900/60 rounded hover:border-emerald-500/50 transition-colors">
                <ShieldCheck className="w-5 h-5 text-orange-400 mb-2" />
                <h3 className="text-sm font-bold text-white font-heading uppercase">Sin Egos ni Lesiones</h3>
                <p className="text-xs text-emerald-200/70 mt-1 leading-normal">
                  Ambiente fraterno donde principiantes y veteranos investigan juntos.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
