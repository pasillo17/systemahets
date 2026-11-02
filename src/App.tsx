/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FranjaLinaje } from "./components/FranjaLinaje";
import { FranjaPrincipios } from "./components/FranjaPrincipios";
import { ElSistema } from "./components/ElSistema";
import { DiegoLedesma } from "./components/DiegoLedesma";
import { Entrenamientos } from "./components/Entrenamientos";
import { Clases } from "./components/Clases";
import { Testimonios } from "./components/Testimonios";
import { ContactoConversion } from "./components/ContactoConversion";
import { FraseDestacada } from "./components/FraseDestacada";
import { PreguntasFrecuentes } from "./components/PreguntasFrecuentes";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Novedades } from "./components/Novedades";
import { Footer } from "./components/Footer";
import { AmbientParticles } from "./components/AmbientParticles";
import { PagePreloader } from "./components/PagePreloader";

function MainApp() {
  const [currentView, setCurrentView] = useState<"home" | "novedades">(() => {
    if (typeof window !== "undefined" && window.location.hash.includes("novedades")) {
      return "novedades";
    }
    return "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes("novedades")) {
        setCurrentView("novedades");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (currentView === "novedades") {
      document.title =
        "Systema HETS Camp 2026 – Seminario Intensivo | Systema HETS Argentina";
    } else {
      document.title =
        "Systema HETS Argentina | Arte Marcial Ruso, Clases y Seminarios – Diego Ledesma";
    }
  }, [currentView]);

  const handleOpenNovedades = () => {
    setCurrentView("novedades");
    window.history.replaceState(null, "", "#novedades");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateHomeSection = (href: string) => {
    if (currentView !== "home") {
      setCurrentView("home");
      window.history.replaceState(null, "", href === "#inicio" ? "#" : href);
      setTimeout(() => {
        if (href === "#inicio") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 60);
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
    <div className="min-h-screen bg-[#1F1916] text-[#F4EDE2] flex flex-col font-sans selection:bg-[#B85332] selection:text-[#F4EDE2] overflow-x-hidden relative">
      {/* Velo de entrada suave / Preloader de respiración consciente en Tierra Sombra y Terracota */}
      <PagePreloader />

      {/* Capa de partículas minerales en Ocre Arcilla (#C49A64) y Terracota Pampeana (#C86442) */}
      <AmbientParticles />

      {/* Header fijo y compacto en Tierra Sombra (#1F1916), Ocre Arcilla y Terracota */}
      <Navbar
        currentView={currentView}
        onOpenNovedades={handleOpenNovedades}
        onNavigateHomeSection={handleNavigateHomeSection}
      />

      {currentView === "novedades" ? (
        <main className="flex-1 overflow-x-hidden relative z-10 w-full max-w-full">
          <Novedades onBackHome={() => handleNavigateHomeSection("#inicio")} />
        </main>
      ) : (
        /* Flujo Narrativo de la Página Inicial */
        <main className="flex-1 overflow-x-hidden relative z-10 w-full max-w-full">
          {/* 1. Hero (CTA Principal: Reservar clase de prueba + Subtítulo claro sobre La Plata) */}
          <Hero onExploreSystem={scrollToSystem} onExploreClasses={scrollToClasses} />

          {/* 2. Franja de Linaje Oficial */}
          <FranjaLinaje />

          {/* 3. Franja de Principios (Abierta sin cajas repetitivas) */}
          <FranjaPrincipios />

          {/* 4. El Systema & ¿Por qué se llama Systema HETS? */}
          <ElSistema />

          {/* 5. Diego Ledesma & Trayectoria Formativa */}
          <DiegoLedesma />

          {/* 6. Entrenamientos (Video en bucle sin sonido + Galería) */}
          <Entrenamientos />

          {/* 7. Sedes y Clases: Grilla Semanal Única y Compacta */}
          <Clases />

          {/* 8. Lo que dicen los alumnos (Con retratos reales) */}
          <Testimonios />

          {/* 9. Frase Destacada (Abierta sin borde de caja) */}
          <FraseDestacada />

          {/* 10. Acordeón de Preguntas Frecuentes (FAQ) antes del cierre */}
          <PreguntasFrecuentes />

          {/* 11. Contacto Directo y Reserva de Clase de Prueba */}
          <ContactoConversion />
        </main>
      )}

      {/* 12. Footer institucional */}
      <Footer
        onOpenNovedades={handleOpenNovedades}
        onNavigateHomeSection={handleNavigateHomeSection}
      />

      {/* Botón Flotante Fijo de WhatsApp en esquina inferior derecha */}
      <FloatingWhatsApp />
    </div>
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

