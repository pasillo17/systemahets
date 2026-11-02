import { useState } from "react";
import { Shield } from "lucide-react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  aspectRatioClass?: string;
}

/**
 * Componente de imagen resiliente para Systema HETS.
 * Si la imagen no carga o la ruta no existe:
 * - Oculta el ícono de imagen rota del navegador.
 * - Oculta el texto alt roto.
 * - Renderiza un contenedor elegante con fondo de carbono oscuro, borde tenue
 *   y el isotipo de Systema HETS en tono dorado suave.
 *
 * // CAMPO / IMAGEN EDITABLE: Para reemplazar imágenes por fotos reales,
 * // actualizar el atributo 'src' con la ruta a la imagen en /src/assets/ o /public/
 */
export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackTitle = "Systema HETS",
  fallbackSubtitle = "Registro de práctica",
  aspectRatioClass = "aspect-[4/3]",
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-[#12110F] border border-[#A58A60]/25 rounded-sm flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden group`}
        role="img"
        aria-label={alt || fallbackTitle}
      >
        {/* Glow dorado sutil de fondo */}
        <div className="absolute inset-0 bg-radial from-[#A58A60]/10 via-transparent to-transparent pointer-events-none" />

        {/* Emblema / Isotipo minimalista */}
        <div className="relative z-10 w-12 h-12 rounded-full border border-[#A58A60]/40 bg-[#080807]/90 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(165,138,96,0.15)]">
          <Shield className="w-5 h-5 text-[#A58A60]" />
        </div>

        {/* Textos institucionales sobrios */}
        <span className="relative z-10 font-heading text-xs sm:text-sm uppercase tracking-wider text-[#F1EBDD] font-bold">
          {fallbackTitle}
        </span>
        <span className="relative z-10 text-[11px] font-mono text-[#C8C2B5] mt-1 tracking-wide">
          {fallbackSubtitle}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatioClass} overflow-hidden bg-[#12110F]`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#12110F] animate-pulse flex items-center justify-center">
          <Shield className="w-6 h-6 text-[#A58A60]/30" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
        }`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  );
}
