import { useState, useEffect } from "react";
import { GALERIA_ITEMS, GalleryItem } from "../data/systemaData";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";

export function Galeria() {
  const [filter, setFilter] = useState<string>("todos");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "todos", label: "Todas las Fotografías" },
    { id: "entrenamiento", label: "Entrenamientos Dojo" },
    { id: "armas", label: "Defensa con Armas" },
    { id: "seminarios", label: "Seminarios al Aire Libre" },
    { id: "biomecanica", label: "Biomecánica y Suelo" },
    { id: "exhibiciones", label: "Torneos y Exhibiciones" },
  ];

  const filteredItems = filter === "todos"
    ? GALERIA_ITEMS
    : GALERIA_ITEMS.filter((item) => item.categoria === filter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") {
        setActiveItem(null);
      } else if (e.key === "ArrowLeft") {
        navigateLightbox(-1);
      } else if (e.key === "ArrowRight") {
        navigateLightbox(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  const navigateLightbox = (direction: number) => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  return (
    <section id="galeria" className="py-24 bg-[#07130b] text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>Archivo Gráfico Oficial HETS</span>
            <span aria-hidden="true">·</span>
            <span>Acción Real en Tatami y Campo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading">
            Galería de Entrenamientos y Exhibiciones
          </h2>
          <p className="text-emerald-100/80 mt-4 text-base sm:text-lg leading-relaxed">
            Instantáneas de nuestras clases cotidianas, campamentos tácticos en bosque, trabajo con armas de filo romo y demostraciones en encuentros internacionales.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-emerald-950/80">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-orange-500 text-slate-950 shadow-md font-bold"
                    : "bg-[#0a1e12]/80 text-emerald-200/90 hover:text-white hover:bg-[#0e2417] border border-emerald-900/60"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-lg overflow-hidden bg-[#091b10] border border-emerald-900/60 hover:border-orange-500/60 transition-all cursor-pointer shadow-lg hover:shadow-2xl flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130b] via-[#07130b]/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                
                {/* Expand Icon */}
                <div className="absolute top-3 right-3 p-2 rounded bg-slate-950/80 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4 text-orange-400" />
                </div>

                {/* Quiet unboxed metadata */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1 font-mono text-emerald-400">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate max-w-[200px]">{item.lugar}</span>
                  </span>
                  <span className="text-orange-400 font-mono text-[10px]">
                    {item.fecha}
                  </span>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-4 bg-[#0a1e12] flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-orange-400 transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-emerald-900/60 flex items-center justify-between text-[11px] text-emerald-300/80">
                  <span className="text-orange-400/90 font-medium capitalize">
                    {item.categoria}
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform text-white">
                    Ampliar detalle →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#0a1f13] border border-emerald-700/60 rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 bg-[#06120a] border-b border-emerald-900/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400">
                    Systema HETS Archivo · {activeItem.categoria}
                  </span>
                  <span className="text-emerald-800">|</span>
                  <span className="text-xs text-emerald-300/70">{activeItem.fecha}</span>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-emerald-950 rounded transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
                {/* Photo Viewer */}
                <div className="lg:col-span-8 relative bg-black flex items-center justify-center p-2 min-h-[320px] sm:min-h-[460px]">
                  <img
                    src={activeItem.imagen}
                    alt={activeItem.titulo}
                    className="max-h-[65vh] w-auto max-w-full object-contain rounded"
                    referrerPolicy="no-referrer"
                  />

                  {/* Prev Button */}
                  <button
                    onClick={() => navigateLightbox(-1)}
                    className="absolute left-4 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-orange-500 hover:text-slate-950 transition-colors shadow-lg cursor-pointer"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={() => navigateLightbox(1)}
                    className="absolute right-4 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-orange-500 hover:text-slate-950 transition-colors shadow-lg cursor-pointer"
                    aria-label="Foto siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Details Sidebar */}
                <div className="lg:col-span-4 p-6 bg-[#091b10] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-emerald-900/80">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {activeItem.titulo}
                    </h3>

                    <div className="space-y-2 text-xs text-slate-200">
                      <div className="flex items-center gap-2 text-orange-400">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                        <span>{activeItem.lugar}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-300/80">
                        <Calendar className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                        <span>{activeItem.fecha}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-[11px] uppercase tracking-wider text-orange-400 font-semibold mb-1">
                        Análisis Biomecánico:
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {activeItem.descripcion}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-emerald-900/60 text-[11px] text-emerald-300/60 flex items-center justify-between">
                    <span>Usa las flechas ← / →</span>
                    <span>ESC para cerrar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
