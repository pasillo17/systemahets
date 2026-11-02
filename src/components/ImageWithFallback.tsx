import { useState } from "react";
import { Shield } from "lucide-react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  aspectRatioClass?: string;
}

/**
 * Componente de imagen resiliente para Systema HETS en Gris Grafito (#1C1E24),
 * Dorado Antiguo (#C5A059), Blanco Humo (#F4F4F6) y Gris Plata (#A0A5B1).
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
        className={`w-full ${aspectRatioClass} bg-[#1B140F] border border-[#D97736]/30 rounded-sm flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden group`}
        role="img"
        aria-label={alt || fallbackTitle}
      >
        {/* Glow Naranja/Dorado sutil de fondo */}
        <div className="absolute inset-0 bg-radial from-[#D97736]/12 via-transparent to-transparent pointer-events-none" />

        {/* Emblema / Isotipo minimalista en Naranja Terracota */}
        <div className="relative z-10 w-12 h-12 rounded-full border border-[#D97736]/30 bg-[#110D0A]/90 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(217,119,54,0.22)]">
          <Shield className="w-5 h-5 text-[#D97736]" />
        </div>

        {/* Textos institucionales sobrios */}
        <span className="relative z-10 font-heading text-xs sm:text-sm uppercase tracking-wider text-[#F5EFE6] font-bold">
          {fallbackTitle}
        </span>
        <span className="relative z-10 text-[11px] font-mono text-[#B8A99A] mt-1 tracking-wide">
          {fallbackSubtitle}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatioClass} overflow-hidden bg-[#1B140F]`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#1B140F] animate-pulse flex items-center justify-center">
          <Shield className="w-6 h-6 text-[#D97736]/45" />
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
