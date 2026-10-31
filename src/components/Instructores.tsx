import { INSTRUCTORES_DATA } from "../data/systemaData";
import { Users, CheckCircle2, Award, Shield } from "lucide-react";

export function Instructores() {
  return (
    <section id="instructores" className="py-24 bg-[#0a1b11] border-t border-emerald-900/40 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>Cuerpo Docente y Linaje HETS</span>
            <span aria-hidden="true">·</span>
            <span>Instructores Certificados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading">
            Instructores Oficiales de la Escuela
          </h2>
          <p className="text-emerald-100/80 mt-4 text-base sm:text-lg leading-relaxed">
            Nuestros instructores son educadores del movimiento humano y facilitadores de autoconocimiento, dedicados a acompañar tu desarrollo corporal y serenidad de forma progresiva y segura.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INSTRUCTORES_DATA.map((inst) => (
            <div
              key={inst.id}
              className="p-8 rounded-lg bg-[#0e2417]/80 border border-emerald-900/60 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {inst.nombre}
                    </h3>
                    <div className="text-xs uppercase tracking-wider text-orange-400 font-semibold mt-0.5">
                      {inst.rol}
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-[#07140c] border border-emerald-800/60 text-orange-400 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-xs text-emerald-300/80 font-mono mb-4">
                  <span>{inst.experiencia}</span>
                  <span className="mx-2 text-emerald-700">·</span>
                  <span className="text-slate-300">{inst.rango}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {inst.descripcion}
                </p>

                <div className="mb-6 p-3 bg-[#07140c]/80 border border-emerald-900/60 rounded">
                  <span className="text-[11px] uppercase tracking-wider text-orange-400 font-semibold block mb-1">
                    Área de Especialidad:
                  </span>
                  <span className="text-xs text-slate-200">
                    {inst.especialidad}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold mb-2.5">
                  Acreditaciones y Certificados:
                </h4>
                <ul className="space-y-1.5">
                  {inst.certificaciones.map((cert, cIdx) => (
                    <li key={cIdx} className="text-xs text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pedagogical Guarantee Note */}
        <div className="mt-12 p-6 rounded-lg bg-[#07140c] border border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-orange-400 shrink-0" />
            <span className="text-sm text-emerald-100">
              Formación continua y actualización constante bajo los estándares de Systema HQ y la metodología formativa HETS.
            </span>
          </div>
          <span className="text-xs font-mono text-orange-400 uppercase tracking-widest whitespace-nowrap shrink-0">
            Acreditación Vigente 2026
          </span>
        </div>
      </div>
    </section>
  );
}
