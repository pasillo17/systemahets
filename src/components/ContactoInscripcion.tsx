import { useState, useEffect } from "react";
import { SEDES_DATA, FAQS_DATA, TESTIMONIOS_DATA, REDES_SOCIALES } from "../data/systemaData";
import { Send, CheckCircle2, Phone, Mail, Clock, MessageSquare, ChevronDown, ChevronUp, ShieldCheck, Youtube, Facebook, ArrowUpRight } from "lucide-react";

interface ContactoInscripcionProps {
  initialSedeId?: string;
}

export function ContactoInscripcion({ initialSedeId }: ContactoInscripcionProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    sede: initialSedeId || "sede-central",
    modalidad: "clase-prueba",
    experiencia: "principiante",
    horario: "tardes",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketCode, setTicketCode] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (initialSedeId) {
      setFormData((prev) => ({ ...prev, sede: initialSedeId }));
    }
  }, [initialSedeId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.telefono) return;

    const randomCode = `HETS-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketCode(randomCode);
    setSubmitted(true);
  };

  const getSedeName = (id: string) => {
    const s = SEDES_DATA.find((x) => x.id === id);
    return s ? s.nombre : "Sede Central";
  };

  const getWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      `Hola Escuela Systema HETS, he solicitado una clase de prueba (Código: ${ticketCode}). Mi nombre es ${formData.nombre}, deseo asistir a la ${getSedeName(
        formData.sede
      )}.`
    );
    return `https://wa.me/34912345678?text=${text}`;
  };

  return (
    <section id="contacto" className="py-24 bg-[#0a1b11] border-t border-emerald-900/40 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            <Send className="w-4 h-4 text-emerald-400" />
            <span>Admisiones e Inscripciones HETS</span>
            <span aria-hidden="true">·</span>
            <span>Comienza tu Entrenamiento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading">
            Inscripción y Solicitud de Clase de Prueba
          </h2>
          <p className="text-emerald-100/80 mt-4 text-base sm:text-lg leading-relaxed">
            Tu primera sesión de prueba es completamente gratuita y sin compromiso. Experimenta por ti mismo la relajación bajo presión y el movimiento consciente de Systema HETS.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Enrollment Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-lg bg-[#0e2417]/80 border border-emerald-900/70 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-emerald-900/60 pb-4 mb-4">
                  <h3 className="text-xl font-bold text-white font-heading">
                    Formulario de Admisión
                  </h3>
                  <p className="text-xs text-emerald-300/70 mt-1">
                    Completa tus datos y recibirás la confirmación de plaza de inmediato.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Martín Soler"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07140c] border border-emerald-900/70 rounded text-sm text-white placeholder-emerald-800 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07140c] border border-emerald-900/70 rounded text-sm text-white placeholder-emerald-800 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07140c] border border-emerald-900/70 rounded text-sm text-white placeholder-emerald-800 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
                      Sede de Preferencia *
                    </label>
                    <select
                      value={formData.sede}
                      onChange={(e) => setFormData({ ...formData, sede: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07140c] border border-emerald-900/70 rounded text-sm text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                    >
                      {SEDES_DATA.map((s) => (
                        <option key={s.id} value={s.id} className="bg-[#07140c] text-white">
                          {s.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
                      Modalidad de Interés
                    </label>
                    <select
                      value={formData.modalidad}
                      onChange={(e) => setFormData({ ...formData, modalidad: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07140c] border border-emerald-900/70 rounded text-sm text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                    >
                      <option value="clase-prueba" className="bg-[#07140c] text-white">Clase de Prueba Gratuita (90 min)</option>
                      <option value="curso-regular" className="bg-[#07140c] text-white">Membresía Mensual Regular</option>
                      <option value="taller-respiracion" className="bg-[#07140c] text-white">Taller de Respiración y Autoconocimiento</option>
                      <option value="seminario-armas" className="bg-[#07140c] text-white">Seminario de Armas y Supervivencia</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
                      Experiencia Marcial Previa
                    </label>
                    <select
                      value={formData.experiencia}
                      onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07140c] border border-emerald-900/70 rounded text-sm text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                    >
                      <option value="principiante" className="bg-[#07140c] text-white">Principiante absoluto (Sin experiencia previa)</option>
                      <option value="otro-estilo" className="bg-[#07140c] text-white">Practicante de otras artes (Judo, BJJ, Karate, Boxeo)</option>
                      <option value="systema-previo" className="bg-[#07140c] text-white">Con experiencia previa en Systema</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-2">
                    Mensaje o Dudas Adicionales (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Indícanos si tienes alguna lesión previa, días preferidos o preguntas específicas..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 bg-[#07140c] border border-emerald-900/70 rounded text-sm text-white placeholder-emerald-800 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-orange-500 hover:bg-orange-400 rounded transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Enviar Solicitud de Reserva</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-emerald-400/60 text-center mt-3">
                    Tus datos se tratan con estricta confidencialidad. Sin spam ni cargos ocultos.
                  </p>
                </div>
              </form>
            ) : (
              /* Success Confirmation Card */
              <div className="py-6 space-y-6 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
                    Reserva Registrada Exitosamente
                  </span>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    ¡Te Esperamos en Systema HETS, {formData.nombre}!
                  </h3>
                  <p className="text-sm text-emerald-100 max-w-md mx-auto">
                    Hemos reservado tu plaza para la clase de prueba. Un instructor se pondrá en contacto contigo para coordinar el día exacto.
                  </p>
                </div>

                {/* Ticket Details Box */}
                <div className="p-6 bg-[#07140c] border border-emerald-900/80 rounded-lg text-left max-w-md mx-auto space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-emerald-950 pb-2">
                    <span className="text-emerald-500">CÓDIGO DE RESERVA:</span>
                    <span className="text-orange-400 font-bold">{ticketCode}</span>
                  </div>
                  <div className="flex justify-between border-b border-emerald-950 pb-2">
                    <span className="text-emerald-500">SEDE ASIGNADA:</span>
                    <span className="text-white">{getSedeName(formData.sede)}</span>
                  </div>
                  <div className="flex justify-between border-b border-emerald-950 pb-2">
                    <span className="text-emerald-500">ESTADO:</span>
                    <span className="text-emerald-400">Confirmación Automática Activa</span>
                  </div>
                  <div className="pt-1 text-[11px] text-slate-300 font-sans">
                    <strong>Qué llevar:</strong> Ropa cómoda (pantalón largo deportivo), toalla y agua. Entrenamos descalzos sobre tatami.
                  </div>
                </div>

                {/* Direct WhatsApp Action */}
                <div className="pt-2 space-y-3 max-w-md mx-auto">
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirmar Directo por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ ...formData, nombre: "", email: "", telefono: "", mensaje: "" });
                    }}
                    className="text-xs text-emerald-400 hover:text-white underline cursor-pointer"
                  >
                    Registrar otra persona o corregir datos
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Info & Social Networks Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official Social Media Channels (As requested by user) */}
            <div className="p-8 rounded-lg bg-[#0e2417]/90 border border-emerald-700/60 shadow-xl space-y-5">
              <div className="flex items-center gap-2.5">
                <img
                  src={REDES_SOCIALES.logoUrl}
                  alt="Logo HETS"
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = REDES_SOCIALES.logoExternalUrl;
                  }}
                />
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    Canales Oficiales HETS
                  </h3>
                  <p className="text-[11px] text-emerald-300/80">
                    Sigue nuestros entrenamientos, videos técnicos y avisos de seminarios
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {/* WhatsApp Channel */}
                <a
                  href={REDES_SOCIALES.whatsappCanal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#07140c] hover:bg-[#091b10] border border-emerald-600/40 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-emerald-600/20 text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-heading uppercase group-hover:text-emerald-400 transition-colors">
                        Canal Oficial de WhatsApp
                      </div>
                      <div className="text-[11px] text-emerald-300/70">
                        Novedades, horarios y avisos de dojo
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* YouTube */}
                <a
                  href={REDES_SOCIALES.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#07140c] hover:bg-[#091b10] border border-red-800/40 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-red-600/20 text-red-400">
                      <Youtube className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-heading uppercase group-hover:text-red-400 transition-colors">
                        @systemahetsartemarcialruso
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Tutoriales, seminarios y demostraciones
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Facebook */}
                <a
                  href={REDES_SOCIALES.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#07140c] hover:bg-[#091b10] border border-blue-800/40 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-blue-600/20 text-blue-400">
                      <Facebook className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-heading uppercase group-hover:text-blue-400 transition-colors">
                        Facebook Systema HETS
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Comunidad y galería fotográfica
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Direct Info */}
            <div className="p-6 rounded-lg bg-[#0e2417]/60 border border-emerald-900/60 space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 block font-mono">
                    Teléfono Central
                  </span>
                  <span className="text-white font-mono text-base font-bold">+34 912 345 678</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 block font-mono">
                    Email de Admisiones
                  </span>
                  <span className="text-white">contacto@systemahets.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 block font-mono">
                    Horario de Atención
                  </span>
                  <span>Lunes a Viernes de 09:00 a 21:00</span>
                </div>
              </div>
            </div>

            {/* Testimonials Proof Adjacency */}
            <div className="p-6 rounded-lg bg-[#07140c] border border-emerald-900/60">
              <span className="text-[11px] uppercase tracking-widest text-orange-400 font-semibold block mb-3">
                Experiencias de Alumnos HETS
              </span>
              <p className="text-xs text-emerald-100 italic leading-relaxed mb-3">
                «{TESTIMONIOS_DATA[0].cita}»
              </p>
              <div className="text-[11px] text-emerald-400/80 font-mono">
                — <span className="text-white">{TESTIMONIOS_DATA[0].nombre}</span> ({TESTIMONIOS_DATA[0].cargo})
              </div>
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="pt-12 border-t border-emerald-900/50">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold block mb-2">
              Preguntas Frecuentes
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Resolvemos tus Dudas Antes de Empezar
            </h3>
          </div>

          <div className="max-w-4xl space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg bg-[#0e2417]/60 border border-emerald-900/60 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#0e2417] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white font-heading">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-orange-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-emerald-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-emerald-900/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
