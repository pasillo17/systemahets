import { useState, useEffect, useRef } from "react";
import { FUNDAMENTOS_DATA } from "../data/systemaData";
import { Wind, Activity, Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles } from "lucide-react";

export function Fundamentos() {
  const [selectedFundamento, setSelectedFundamento] = useState(FUNDAMENTOS_DATA[0].id);

  // Interactive Breathwork Simulator State
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<"inhale" | "holdIn" | "exhale" | "holdOut">("inhale");
  const [phaseSecondsLeft, setPhaseSecondsLeft] = useState(4);
  const [completedCycles, setCompletedCycles] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [cycleMode, setCycleMode] = useState<"cuadrada" | "rafaga">("cuadrada");

  const audioContextRef = useRef<AudioContext | null>(null);

  // Sound Synthesizer via Web Audio API
  const playChime = (freq: number) => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } catch {
      // Audio fallback silent
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isBreathingActive) {
      timer = setInterval(() => {
        setPhaseSecondsLeft((prev) => {
          if (prev > 1) {
            return prev - 1;
          }
          if (cycleMode === "cuadrada") {
            if (breathPhase === "inhale") {
              setBreathPhase("holdIn");
              playChime(520);
              return 4;
            } else if (breathPhase === "holdIn") {
              setBreathPhase("exhale");
              playChime(390);
              return 4;
            } else if (breathPhase === "exhale") {
              setBreathPhase("holdOut");
              playChime(330);
              return 4;
            } else {
              setBreathPhase("inhale");
              setCompletedCycles((c) => c + 1);
              playChime(660);
              return 4;
            }
          } else {
            if (breathPhase === "inhale") {
              setBreathPhase("holdIn");
              playChime(520);
              return 1;
            } else if (breathPhase === "holdIn") {
              setBreathPhase("exhale");
              playChime(390);
              return 4;
            } else if (breathPhase === "exhale") {
              setBreathPhase("holdOut");
              playChime(330);
              return 1;
            } else {
              setBreathPhase("inhale");
              setCompletedCycles((c) => c + 1);
              playChime(660);
              return 2;
            }
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isBreathingActive, breathPhase, cycleMode, soundEnabled]);

  const toggleBreathwork = () => {
    if (!isBreathingActive) {
      setBreathPhase("inhale");
      setPhaseSecondsLeft(cycleMode === "cuadrada" ? 4 : 2);
      playChime(660);
    }
    setIsBreathingActive(!isBreathingActive);
  };

  const resetBreathwork = () => {
    setIsBreathingActive(false);
    setBreathPhase("inhale");
    setPhaseSecondsLeft(cycleMode === "cuadrada" ? 4 : 2);
    setCompletedCycles(0);
  };

  const activeFundamento = FUNDAMENTOS_DATA.find((f) => f.id === selectedFundamento) || FUNDAMENTOS_DATA[0];

  return (
    <section id="fundamentos" className="py-24 bg-[#07130b] text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Desarrollo Corporal y Movimiento Consciente</span>
            <span aria-hidden="true">·</span>
            <span>La Cuádruple Columna</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading">
            Los 4 Fundamentos Sagrados de Systema
          </h2>
          <p className="text-emerald-100/80 mt-4 text-base sm:text-lg leading-relaxed">
            En lugar de memorizar técnicas mecánicas prefabricadas, Systema HETS entrena cuatro principios biomecánicos universales. Integrándolos, tu cuerpo se mueve con armonía, salud postural y capacidad de respuesta espontánea.
          </p>
        </div>

        {/* 4 Pillars Interactive Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {FUNDAMENTOS_DATA.map((item) => {
            const isSelected = item.id === selectedFundamento;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedFundamento(item.id)}
                className={`p-5 rounded-lg text-left transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-[#0e2518] border-orange-500 shadow-xl shadow-orange-500/10 ring-1 ring-orange-500/50"
                    : "bg-[#0a1e12]/50 border-emerald-900/60 hover:border-emerald-700 hover:bg-[#0e2417]/70"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? "text-orange-400" : "text-emerald-500/80"}`}>
                    {item.numero}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                  {item.titulo}
                </h3>
                <p className="text-xs text-emerald-300/70 mt-1 line-clamp-1">
                  {item.lema}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep Dive Card */}
        <div className="p-8 sm:p-10 rounded-lg bg-[#0c2215]/80 border border-emerald-900/70 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-orange-400 font-mono">
                  {activeFundamento.numero}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  {activeFundamento.titulo}
                </h3>
              </div>

              <blockquote className="text-base sm:text-lg italic text-orange-200/90 font-serif border-l-2 border-orange-500 pl-4 py-1">
                «{activeFundamento.lema}»
              </blockquote>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {activeFundamento.descripcion}
              </p>
            </div>

            <div className="lg:col-span-5 p-6 bg-[#07140c] border border-emerald-900/60 rounded-lg">
              <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-4">
                Aplicación en el autoconocimiento y la vida:
              </h4>
              <ul className="space-y-3">
                {activeFundamento.puntosClave.map((punto, pIdx) => (
                  <li key={pIdx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                    <span>{punto}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Guided Breathwork Tool (Green + Orange Aesthetic) */}
        <div className="p-8 sm:p-10 rounded-lg bg-gradient-to-br from-[#0c2316] via-[#091b10] to-[#07130b] border border-emerald-600/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Explanatory Left Side */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold">
                <Wind className="w-4 h-4 text-emerald-400" />
                <span>Simulador de Autoconocimiento</span>
                <span aria-hidden="true">·</span>
                <span>Fisiología en Vivo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Práctica Interactiva: Respiración Consciente HETS
              </h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Prueba en este mismo instante el núcleo de Systema. Este patrón rítmico reconfigura el sistema nervioso autónomo, disuelve la tensión en hombros y mandíbula, y restaura la claridad perceptiva.
              </p>

              {/* Mode Selectors */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => {
                    setCycleMode("cuadrada");
                    setPhaseSecondsLeft(4);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded cursor-pointer transition-colors ${
                    cycleMode === "cuadrada"
                      ? "bg-orange-500 text-slate-950 font-bold"
                      : "bg-[#07140c] text-emerald-300 hover:text-white border border-emerald-900/60"
                  }`}
                >
                  Respiración Cuadrada (4-4-4-4)
                </button>
                <button
                  onClick={() => {
                    setCycleMode("rafaga");
                    setPhaseSecondsLeft(2);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded cursor-pointer transition-colors ${
                    cycleMode === "rafaga"
                      ? "bg-orange-500 text-slate-950 font-bold"
                      : "bg-[#07140c] text-emerald-300 hover:text-white border border-emerald-900/60"
                  }`}
                >
                  Ráfaga Táctica (2-1-4-1)
                </button>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 pt-3">
                <button
                  onClick={toggleBreathwork}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-orange-500 hover:bg-orange-400 rounded transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-orange-500/20"
                >
                  {isBreathingActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isBreathingActive ? "Pausar Ejercicio" : "Iniciar Respiración"}</span>
                </button>

                <button
                  onClick={resetBreathwork}
                  className="p-2.5 bg-[#0a1e12] hover:bg-emerald-900/40 text-emerald-300 border border-emerald-900/60 rounded transition-colors cursor-pointer"
                  title="Reiniciar contador"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-2.5 rounded transition-colors cursor-pointer ${
                    soundEnabled ? "bg-orange-500/20 text-orange-400 border border-orange-500/40" : "bg-[#0a1e12] text-slate-400 hover:text-white border border-emerald-900/60"
                  }`}
                  title={soundEnabled ? "Silenciar campana" : "Activar guía sonora"}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-emerald-300/80 font-mono pt-1">
                <span>Ciclos completados: <strong className="text-white tabular-nums">{completedCycles}</strong></span>
                <span>·</span>
                <span>Modo: <strong className="text-orange-400">{cycleMode === "cuadrada" ? "Regenerativo" : "Combate"}</strong></span>
              </div>
            </div>

            {/* Visualizer Right Side */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-8 bg-[#06120a] border border-emerald-800/50 rounded-lg shadow-inner">
              <div className="relative w-56 h-56 flex items-center justify-center">
                {/* Outer animated pulse ring */}
                <div
                  className={`absolute inset-0 rounded-full border border-orange-500/30 transition-transform duration-1000 ${
                    breathPhase === "inhale"
                      ? "scale-105 opacity-80"
                      : breathPhase === "holdIn"
                      ? "scale-105 opacity-100"
                      : breathPhase === "exhale"
                      ? "scale-75 opacity-40"
                      : "scale-75 opacity-20"
                  }`}
                />

                {/* Main breathing sphere in vibrant green & orange */}
                <div
                  className={`w-36 h-36 rounded-full flex flex-col items-center justify-center transition-all duration-1000 text-center p-2 shadow-2xl ${
                    breathPhase === "inhale"
                      ? "bg-gradient-to-tr from-emerald-600 via-emerald-500 to-orange-500 scale-110 text-slate-950 shadow-emerald-500/30"
                      : breathPhase === "holdIn"
                      ? "bg-gradient-to-tr from-orange-500 to-orange-400 scale-110 text-slate-950 ring-4 ring-orange-400/50"
                      : breathPhase === "exhale"
                      ? "bg-gradient-to-tr from-[#0e2a18] to-[#143d23] scale-90 text-emerald-200 shadow-inner"
                      : "bg-[#091b10] scale-85 text-emerald-400 border border-emerald-700/60"
                  }`}
                >
                  <span className="text-3xl font-bold font-mono tabular-nums leading-none mb-1">
                    {isBreathingActive ? phaseSecondsLeft : "—"}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    {!isBreathingActive && "Listo"}
                    {isBreathingActive && breathPhase === "inhale" && "Inhala"}
                    {isBreathingActive && breathPhase === "holdIn" && "Sostén"}
                    {isBreathingActive && breathPhase === "exhale" && "Exhala"}
                    {isBreathingActive && breathPhase === "holdOut" && "Vacío"}
                  </span>
                </div>
              </div>

              {/* Phase Guidance Text */}
              <div className="mt-6 text-center max-w-xs">
                <span className="text-xs uppercase tracking-wider text-orange-400 font-semibold block mb-1">
                  Instrucción Biomecánica:
                </span>
                <p className="text-xs text-slate-200 leading-normal">
                  {!isBreathingActive && "Haz clic en 'Iniciar Respiración' y sigue el ritmo de expansión sin tensar el cuello ni los hombros."}
                  {isBreathingActive && breathPhase === "inhale" && "Inhala suave por la nariz. Expande el abdomen y la espalda baja sin elevar los hombros."}
                  {isBreathingActive && breathPhase === "holdIn" && "Mantén el aire con el cuerpo totalmente relajado. Sin rigidez en la mandíbula."}
                  {isBreathingActive && breathPhase === "exhale" && "Exhala por la boca ligeramente entreabierta, expulsando toda tensión residual de los brazos."}
                  {isBreathingActive && breathPhase === "holdOut" && "Siente el vacío con serenidad. El cuerpo no está en peligro; está en control."}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
