import React, { useEffect, useRef, useState, ReactNode, ElementType } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Retardo en ms
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // Desplazamiento inicial en px
  duration?: number; // Duración en ms
  threshold?: number;
  once?: boolean;
  as?: ElementType;
}

/**
 * ScrollReveal: Componente de alto rendimiento con IntersectionObserver nativo.
 * Aplica una aparición suave con desplazamiento hacia arriba (o en la dirección indicada)
 * cuando el elemento entra en el campo de visión al hacer scroll.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 700,
  threshold = 0.08,
  once = true,
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si el navegador no soporta IntersectionObserver, mostrarlo directamente
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Comienza a revelarse poco antes de entrar completamente
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Cálculo de la transformación inicial según dirección con micro-escala editorial
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0) scale(0.985)`;
      case "down":
        return `translate3d(0, -${distance}px, 0) scale(0.985)`;
      case "left":
        return `translate3d(${distance}px, 0, 0) scale(0.985)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0) scale(0.985)`;
      case "none":
      default:
        return "translate3d(0, 0, 0) scale(0.99)";
    }
  };

  const style: React.CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : getInitialTransform(),
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}
