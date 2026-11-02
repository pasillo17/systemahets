/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import { Footer } from "./components/Footer";
import { AmbientParticles } from "./components/AmbientParticles";
import { PagePreloader } from "./components/PagePreloader";

function MainApp() {
  const scrollToSystem = () => {
    const el = document.getElementById("systema");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#080807] text-[#F1EBDD] flex flex-col font-sans selection:bg-[#A58A60] selection:text-[#080807] overflow-x-hidden relative">
      {/* Velo de entrada suave / Preloader de respiración consciente */}
      <PagePreloader />

      {/* Capa de partículas ambientales ligeras (respeta prefers-reduced-motion) */}
      <AmbientParticles />

      {/* Header fijo y compacto con botón de idioma (ES / EN) y menú a pantalla completa */}
      <Navbar />

      {/* Flujo Narrativo Mobile-First */}
      <main className="flex-1 overflow-x-hidden relative z-10 w-full max-w-full">
        {/* 1. Hero: Resumido, logo protagonista, sin círculos, botón "Conocer el Systema" */}
        <Hero onExploreSystem={scrollToSystem} />

        {/* 2. Franja de Linaje Oficial: 2 Grandes Escuelas de Systema */}
        <FranjaLinaje />

        {/* 3. Franja de Principios */}
        <FranjaPrincipios />

        {/* 3. El Systema (con Y siempre: SYSTEMA) */}
        <ElSistema />

        {/* 4. Diego Ledesma & Trayectoria Formativa */}
        <DiegoLedesma />

        {/* 5. Entrenamientos (Galería resiliente) */}
        <Entrenamientos />

        {/* 6. Sedes y Clases (Modalidades, Prueba Social y Sede con Google Maps) */}
        <Clases />

        {/* 7. Lo que dicen los alumnos (Carrusel scroll-snap con testimonios) */}
        <Testimonios />

        {/* 8. Contacto Directo, Reserva de Clase de Prueba y Canales Oficiales (al final) */}
        <ContactoConversion />

        {/* 9. Frase Destacada: "El verdadero combate es con uno mismo" */}
        <FraseDestacada />
      </main>

      {/* 10. Footer institucional inmediatamente después de la frase destacada */}
      <Footer />
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
