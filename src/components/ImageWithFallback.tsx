import { useState } from "react";
import { Shield } from "lucide-react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  aspectRatioClass?: string;
}

/**
 * Componente de imagen resiliente para Systema HETS en Tierra Sombra (#261E1A),
 * Terracota Pampeana (#C86442), Ocre Arcilla (#C49A64) y Hueso Cálido (#F4EDE2).
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
        className={`w-full ${aspectRatioClass} bg-[#261E1A] border border-[#C49A64]/35 rounded-sm flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden group`}
        role="img"
        aria-label={alt || fallbackTitle}
      >
        {/* Glow Terracota sutil de fondo */}
        <div className="absolute inset-0 bg-radial from-[#B85332]/12 via-transparent to-transparent pointer-events-none" />

        {/* Emblema / Isotipo minimalista en Terracota */}
        <div className="relative z-10 w-12 h-12 rounded-full border border-[#C49A64]/50 bg-[#1F1916]/90 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(184,83,50,0.2)]">
          <Shield className="w-5 h-5 text-[#C86442]" />
        </div>

        {/* Textos institucionales sobrios */}
        <span className="relative z-10 font-heading text-xs sm:text-sm uppercase tracking-wider text-[#F4EDE2] font-bold">
          {fallbackTitle}
        </span>
        <span className="relative z-10 text-[11px] font-mono text-[#C4B5A3] mt-1 tracking-wide">
          {fallbackSubtitle}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatioClass} overflow-hidden bg-[#261E1A]`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#261E1A] animate-pulse flex items-center justify-center">
          <Shield className="w-6 h-6 text-[#C49A64]/40" />
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
