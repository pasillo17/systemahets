/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { APIProvider } from "@vis.gl/react-google-maps";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FranjaLinaje } from "./components/FranjaLinaje";
import { FranjaPrincipios } from "./components/FranjaPrincipios";
import { ElSistema } from "./components/ElSistema";
import { DiegoLedesma } from "./components/DiegoLedesma";
import { Clases } from "./components/Clases";
import { Testimonios } from "./components/Testimonios";
import { ContactoConversion } from "./components/ContactoConversion";
import { FraseDestacada } from "./components/FraseDestacada";
import { PreguntasFrecuentes } from "./components/PreguntasFrecuentes";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { AmbientParticles } from "./components/AmbientParticles";
import { PagePreloader } from "./components/PagePreloader";

const Novedades = lazy(() =>
  import("./components/Novedades").then((m) => ({ default: m.Novedades }))
);
const Prensa = lazy(() =>
  import("./components/Prensa").then((m) => ({ default: m.Prensa }))
);

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full z-30 select-none pointer-events-none"
    >
      <div className="section-divider-line" />
    </div>
  );
}

function MainApp() {
  const { lang } = useLanguage();
  const [quotaExceeded, setQuotaExceeded] = useState(false);
  const [currentView, setCurrentView] = useState<"home" | "novedades" | "prensa">(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash.includes("novedades")) {
        return "novedades";
      }
      if (window.location.hash.includes("prensa")) {
        return "prensa";
      }
    }
    return "home";
  });

  useEffect(() => {
    const handleQuotaExceeded = () => setQuotaExceeded(true);
    window.addEventListener("gmp-quota-exceeded", handleQuotaExceeded);
    return () => window.removeEventListener("gmp-quota-exceeded", handleQuotaExceeded);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes("novedades")) {
        setCurrentView("novedades");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (window.location.hash.includes("prensa")) {
        setCurrentView("prensa");
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (currentView === "novedades") {
      document.title =
        "Systema HETS Camp 2026 – Seminario Intensivo | Systema HETS Argentina";
    } else if (currentView === "prensa") {
      document.title =
        "Prensa y Difusión – Diego Ledesma | Systema HETS Argentina";
    } else {
      document.title =
        "Systema HETS Argentina | Arte Marcial Ruso en La Plata";
    }
  }, [currentView]);

  const handleOpenNovedades = () => {
    setCurrentView("novedades");
    window.history.replaceState(null, "", "#novedades");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleOpenPrensa = () => {
    setCurrentView("prensa");
    window.history.replaceState(null, "", "#prensa");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleNavigateHomeSection = (href: string) => {
    if (currentView !== "home") {
      setCurrentView("home");
      window.history.replaceState(null, "", href === "#inicio" ? "#" : href);
      if (href === "#inicio") {
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 60);
      }
    } else {
      window.history.replaceState(null, "", href === "#inicio" ? "#" : href);
      if (href === "#inicio") {
        if (window.scrollY < 120) {
          const target = document.getElementById("systema") || document.getElementById("linaje");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            return;
          }
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const scrollToSystem = () => {
    const el = document.getElementById("systema") || document.getElementById("linaje");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToClasses = () => {
    const el = document.getElementById("sedes-y-clases");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <APIProvider
      apiKey={GOOGLE_MAPS_API_KEY}
      language={lang}
      region="AR"
      internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
    >
      <div className="min-h-screen bg-[#110D0A] text-[#F5EFE6] flex flex-col font-sans selection:bg-[#D97736] selection:text-[#110D0A] overflow-x-hidden relative">
        {quotaExceeded && (
          <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
            <span>
              Google Maps Platform quota reached. If you are the app owner, visit{" "}
              <a
                href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-amber-950 hover:text-amber-800"
              >
                maps developer site
              </a>{" "}
              for instructions to update your account.
            </span>
          </div>
        )}

        {/* Velo de entrada rápida en Tierra, Naranja y Dorado */}
        <PagePreloader />

        {/* Capa de partículas sutiles en Naranja Terracota (#D97736) y Dorado (#C5A059) */}
        <AmbientParticles />

        {/* Header fijo y compacto en Tierra Profunda (#110D0A), Naranja Terracota (#D97736) y Dorado (#C5A059) */}
        <Navbar
          currentView={currentView}
          onOpenNovedades={handleOpenNovedades}
          onOpenPrensa={handleOpenPrensa}
          onNavigateHomeSection={handleNavigateHomeSection}
        />

        {currentView === "novedades" ? (
          <main className="flex-1 overflow-x-hidden relative z-10 w-full max-w-full">
            <Suspense fallback={<div className="min-h-screen bg-[#110D0A]" />}>
              <Novedades onBackHome={() => handleNavigateHomeSection("#inicio")} />
            </Suspense>
          </main>
        ) : currentView === "prensa" ? (
          <main className="flex-1 overflow-x-hidden relative z-10 w-full max-w-full">
            <Suspense fallback={<div className="min-h-screen bg-[#110D0A]" />}>
              <Prensa onBackHome={() => handleNavigateHomeSection("#inicio")} />
            </Suspense>
          </main>
        ) : (
          /* Flujo Narrativo de la Página Inicial con alternancia #110D0A / #1B140F y divisores discretos */
          <main className="flex-1 overflow-x-hidden relative z-10 w-full max-w-full">
            {/* 1. Hero (Fondo #110D0A) */}
            <Hero onExploreSystem={scrollToSystem} onExploreClasses={scrollToClasses} />

            <SectionDivider />

            {/* 2 & 3. Bloque Institucional: Linaje Oficial + 3 Pilares (Fondo #1B140F) */}
            <FranjaLinaje />
            <FranjaPrincipios />

            <SectionDivider />

            {/* 4. El Systema & ¿Por qué se llama Systema HETS? (Fondo #110D0A) */}
            <ElSistema />

            <SectionDivider />

            {/* 5. Diego Ledesma & Trayectoria Formativa + Botón Prensa (Fondo #1B140F) */}
            <DiegoLedesma onOpenPrensa={handleOpenPrensa} />

            <SectionDivider />

            {/* 6. Sedes y Clases: Grilla Semanal Única + Banner Camp 2026 (Fondo #1B140F) */}
            <Clases onOpenNovedades={handleOpenNovedades} />

            <SectionDivider />

            {/* 7. Reseñas reales de Google Maps (Fondo #110D0A) */}
            <Testimonios />

            <SectionDivider />

            {/* 8. Frase Destacada (Fondo #1B140F) */}
            <FraseDestacada />

            <SectionDivider />

            {/* 9. Acordeón de Preguntas Frecuentes (Fondo #110D0A) */}
            <PreguntasFrecuentes />

            <SectionDivider />

            {/* 10. Contacto Directo y Reserva de Clase (Fondo #1B140F) */}
            <ContactoConversion />

            <SectionDivider />
          </main>
        )}

        {/* 11. Footer institucional (Fondo #110D0A) */}
        <Footer
          onOpenNovedades={handleOpenNovedades}
          onOpenPrensa={handleOpenPrensa}
          onNavigateHomeSection={handleNavigateHomeSection}
        />

        {/* Botón Flotante Fijo de WhatsApp en esquina inferior derecha */}
        <FloatingWhatsApp />
      </div>
    </APIProvider>
  );
}

export default function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </HashRouter>
  );
}
