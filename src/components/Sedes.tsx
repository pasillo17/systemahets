import { useState } from "react";
import { SEDES_DATA, Sede } from "../data/systemaData";
import { MapPin, Clock, Navigation, CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";

interface SedesProps {
  onSelectSedeForEnrollment: (sedeId: string) => void;
}

export function Sedes({ onSelectSedeForEnrollment }: SedesProps) {
  const [selectedSedeId, setSelectedSedeId] = useState(SEDES_DATA[0].id);

  const currentSede: Sede = SEDES_DATA.find((s) => s.id === selectedSedeId) || SEDES_DATA[0];

  return (
    <section id="sedes" className="py-24 bg-[#0a1b11] border-t border-emerald-900/40 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Centros de Formación HETS</span>
            <span aria-hidden="true">·</span>
            <span>Espacios de Práctica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading">
            Nuestras Sedes y Horarios
          </h2>
          <p className="text-emerald-100/80 mt-4 text-base sm:text-lg leading-relaxed">
            Entrena en instalaciones diseñadas específicamente para el trabajo de caídas, armas y biomecánica corporal, tanto en salas climatizadas como en nuestro campo natural de bosque.
          </p>
        </div>

        {/* Sede Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {SEDES_DATA.map((sede) => {
            const isSelected = sede.id === selectedSedeId;
            return (
              <button
                key={sede.id}
                onClick={() => setSelectedSedeId(sede.id)}
                className={`p-5 rounded-lg text-left transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-[#0e2518] border-orange-500 shadow-xl shadow-orange-500/10 ring-1 ring-orange-500/30"
                    : "bg-[#08170e]/80 border-emerald-900/60 hover:border-emerald-700 hover:bg-[#0e2417]/80"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? "text-orange-400" : "text-emerald-500/80"}`}>
                    {sede.ciudad}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  {sede.nombre}
                </h3>
                <p className="text-xs text-emerald-200/70 mt-1">
                  {sede.subtitulo}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Sede Deep Details Container */}
        <div className="p-8 sm:p-10 rounded-lg bg-[#0e2417]/80 border border-emerald-900/70 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 7 Cols: Schedules and Classes */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-emerald-900/80 pb-4">
                <div className="text-xs uppercase tracking-wider text-orange-400 font-semibold mb-1">
                  {currentSede.ciudad}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  {currentSede.nombre}
                </h3>
                <p className="text-sm text-emerald-200 mt-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{currentSede.direccion}</span>
                </p>
              </div>

              {/* Timetables */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>Cuadrante Semanal de Clases:</span>
                </h4>

                <div className="space-y-4">
                  {currentSede.horarios.map((horario, hIdx) => (
                    <div key={hIdx} className="p-4 bg-[#07140c] border border-emerald-900/60 rounded-lg">
                      <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2.5">
                        {horario.dias}
                      </div>
                      <div className="space-y-2">
                        {horario.clases.map((clase, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs py-1.5 border-b border-emerald-950/60 last:border-b-0"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-white font-semibold tabular-nums shrink-0">
                                {clase.hora}
                              </span>
                              <span className="text-emerald-100 font-medium">
                                {clase.disciplina}
                              </span>
                            </div>
                            <span className="text-[11px] text-orange-400 font-medium sm:text-right shrink-0">
                              {clase.nivel}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking Action */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectSedeForEnrollment(currentSede.id)}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-orange-500 hover:bg-orange-400 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20"
                >
                  <span>Reservar Clase de Prueba en {currentSede.nombre.split("·")[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 5 Cols: Amenities, Transit, and Contact */}
            <div className="lg:col-span-5 space-y-6">
              {/* Facilities */}
              <div className="p-6 bg-[#07140c] border border-emerald-900/60 rounded-lg">
                <h4 className="text-xs uppercase tracking-wider text-orange-400 font-semibold mb-3">
                  Equipamiento e Instalaciones:
                </h4>
                <ul className="space-y-2.5">
                  {currentSede.instalaciones.map((inst, iIdx) => (
                    <li key={iIdx} className="text-xs text-slate-200 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transit & Access */}
              <div className="p-6 bg-[#07140c] border border-emerald-900/60 rounded-lg">
                <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-orange-400" />
                  <span>Cómo Llegar:</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentSede.transporte}
                </p>
              </div>

              {/* Direct Sede Contact */}
              <div className="p-6 bg-[#07140c] border border-emerald-900/60 rounded-lg space-y-2 text-xs">
                <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                  Contacto Directo Sede:
                </h4>
                <div className="flex items-center gap-2 text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span className="font-mono tabular-nums">{currentSede.telefono}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>{currentSede.email}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
