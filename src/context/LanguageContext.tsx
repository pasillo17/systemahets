import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    "nav.inicio": "INICIO",
    "nav.systema": "EL SYSTEMA",
    "nav.diego": "DIEGO LEDESMA",
    "nav.entrenamientos": "ENTRENAMIENTOS",
    "nav.sedes": "SEDES Y CLASES",
    "nav.testimonios": "TESTIMONIOS",
    "nav.contacto": "CONTACTO",
    "nav.consultar": "CONSULTAR POR WHATSAPP",
    "nav.menuTitle": "SYSTEMA HETS",
    "nav.menuSub": "DIEGO MARTÍN LEDESMA",
    "nav.menuLocation": "La Plata / Buenos Aires · Arte Marcial Ruso",

    // Hero
    "hero.kicker": "Arte marcial ruso · La Plata / Buenos Aires",
    "hero.titulo": "Mucho más que defensa personal",
    "hero.bajada": "Movimiento consciente, autoprotección y desarrollo integral.",
    "hero.btnWhatsapp": "Consultar por WhatsApp",
    "hero.btnSystema": "Conocer el Systema",
    "hero.scroll": "Deslizar para explorar",

    // Linaje
    "linaje.kicker": "Linaje & Raíces Marciales",
    "linaje.title": "Parte de las 2 Grandes Escuelas de Systema",
    "linaje.badge": "Tradición Viva & Autoprotección",
    "linaje.desc": "Systema HETS está formado y enraizado directamente en las 2 grandes escuelas matrices del arte marcial ruso.",
    "linaje.ryabkoNombre": "Mikhail Ryabko",
    "linaje.ryabkoSede": "Moscú · Rusia",
    "linaje.ryabkoRol": "Escuela Matriz Fundacional",
    "linaje.ryabkoDesc": "Raíz cosaca tradicional, soltura fascial y control sereno bajo tensión.",
    "linaje.vasilievNombre": "Vladimir Vasiliev",
    "linaje.vasilievSede": "Toronto · Canadá",
    "linaje.vasilievRol": "Escuela Matriz Internacional",
    "linaje.vasilievDesc": "Biomecánica adaptativa, economía de movimiento y expansión táctica mundial.",
    "linaje.escuela1": "Linaje Mikhail Ryabko · Moscú",
    "linaje.escuela2": "Linaje Vladimir Vasiliev · Toronto",

    // Principios
    "principios.defensa": "DEFENSA PERSONAL",
    "principios.defensaDesc": "Respuesta instintiva y adaptativa sin rigidez ni patrones preestablecidos.",
    "principios.movimiento": "MOVIMIENTO CONSCIENTE",
    "principios.movimientoDesc": "Economía biomecánica, soltura fascial y fluidez corporal continua.",
    "principios.salud": "SALUD Y BIENESTAR",
    "principios.saludDesc": "Disipación del estrés, postura orgánica y preservación articular.",
    "principios.autoconocimiento": "AUTOPROTECCIÓN",
    "principios.autoconocimientoDesc": "Dominio de la respiración diafragmática y calma interna bajo presión.",

    // El Systema
    "systema.kicker": "Metodología e Identidad",
    "systema.title": "EL SYSTEMA",
    "systema.badge": "Fundamentos Conceptuales",
    "systema.definition": "“Systema es un arte marcial ruso y un método de entrenamiento integral que desarrolla la capacidad de adaptación, la eficiencia en el movimiento y la conexión entre cuerpo y mente.”",
    "systema.p2": "No existen posiciones fijas ni katas preestablecidos. El alumno aprende a reconocer sus propias limitaciones biomecánicas y a responder con naturalidad ante cualquier situación.",
    "systema.btnMore": "MÁS SOBRE EL SYSTEMA",
    "systema.cardImgTitle": "Práctica Biomecánica",
    "systema.cardImgDesc": "Conexión directa entre respiración, postura y masa corporal",
    "systema.adaptacion": "ADAPTACIÓN",
    "systema.adaptacionDesc": "Aprender a responder a distintas situaciones sin rigidez anticipada.",
    "systema.eficiencia": "EFICIENCIA",
    "systema.eficienciaDesc": "Buscar movimientos simples, conscientes y con mínimo gasto energético.",
    "systema.conciencia": "CONCIENCIA",
    "systema.concienciaDesc": "Explorar la relación orgánica entre respiración, postura y serenidad.",
    "systema.modalKicker": "Pilares Biomecánicos",
    "systema.modalTitle": "Los 4 Pilares Invariables de Systema",
    "systema.modalIntro": "En Systema no se estudian técnicas memorizadas para cada ataque posible, sino principios biológicos universales del cuerpo humano que operan en cualquier situación de movimiento.",
    "systema.pilar1": "Respiración",
    "systema.pilar1Desc": "El pilar central que oxigena los tejidos, regula el pulso cardíaco y disipa la acumulación de tensión emocional y física bajo esfuerzo o sorpresa.",
    "systema.pilar2": "Relajación",
    "systema.pilar2Desc": "Ausencia de tensión parasitaria. Un cuerpo relajado no telegrafía sus intenciones, se mueve más veloz y absorbe los impactos sin fracturas ni lesiones.",
    "systema.pilar3": "Estructura y Postura",
    "systema.pilar3Desc": "Alineación natural de la columna vertebral sin posturas rígidas de combate. Permite actuar desde cualquier ángulo con economía biomecánica.",
    "systema.pilar4": "Movimiento Continuo",
    "systema.pilar4Desc": "Fluir ante los obstáculos en lugar de chocar contra ellos. La inercia del movimiento continuo desvía la agresión y recupera el equilibrio espontáneamente.",
    "systema.modalClose": "Cerrar",

    // Diego Ledesma
    "diego.kicker": "Dirección y Linaje",
    "diego.tag": "DIRECTOR DE SYSTEMA HETS",
    "diego.name": "DIEGO MARTÍN LEDESMA",
    "diego.quote": "“Diego Martín Ledesma lleva 40 años explorando cómo las artes marciales pueden transformar nuestra manera de movernos, afrontar desafíos y relacionarnos.”",
    "diego.p1": "Profesor en Educación Física por la UNLP, con posgrado en Educación Emocional, Maestro VIII Dan de Taekwon-Do ITF e Instructor Internacional de Systema. Formado en Argentina, Rusia —línea Ryabko— y Canadá —línea Vasiliev—.",
    "diego.p2": "Como director de Systema HETS, integra experiencia marcial, educación corporal y desarrollo humano. Es Secretario General y Director del Comité de Inclusión de ITF Integrity. Su compromiso: acercar las artes marciales a cada persona, promoviendo autonomía, autoconfianza y herramientas para afrontar los desafíos de la vida cotidiana.",
    "diego.profileTag": "Perfil Académico y Marcial",
    "diego.role1": "Prof. Educación Física (UNLP) · Posgrado Ed. Emocional",
    "diego.role2": "Instructor Internacional de Systema (Rusia & Canadá)",
    "diego.role3": "Maestro VIII Dan ITF · Secretario e Inclusión ITF Integrity",
    "diego.btnHistory": "CONOCER SU HISTORIA COMPLETA",
    "diego.timelineHeader": "Trayectoria Formativa",
    "diego.timelineLoc": "La Plata · Buenos Aires",
    "diego.modalKicker": "Biografía Oficial",
    "diego.modalTitle": "Diego Martín Ledesma & Systema HETS",
    "diego.modalP1": "Diego Martín Ledesma lleva 40 años explorando cómo las artes marciales pueden transformar nuestra manera de movernos, afrontar desafíos y relacionarnos. Es Profesor en Educación Física por la Universidad Nacional de La Plata (UNLP), cuenta con posgrado en Educación Emocional, es Maestro VIII Dan de Taekwon-Do ITF e Instructor Internacional de Systema.",
    "diego.modalP2": "Su formación marcial de linaje directo se forjó en Argentina, en Rusia —línea Mikhail y Daniil Ryabko— y en Canadá —línea Vladimir Vasiliev—, integrando la biomecánica rusa con una sólida pedagogía del movimiento consciente.",
    "diego.modalP3": "Como director de Systema HETS, integra experiencia marcial, educación corporal y desarrollo humano. Además, es Secretario General y Director del Comité de Inclusión de ITF Integrity, con el compromiso permanente de acercar las artes marciales a cada persona, promoviendo autonomía, autoconfianza y herramientas reales para afrontar los desafíos de la vida cotidiana.",
    "diego.modalClose": "Cerrar",

    // Entrenamientos
    "ent.kicker": "Registro de Práctica",
    "ent.title": "ENTRENAMIENTOS",
    "ent.quote": "“Disciplina, presencia y evolución constante.”",
    "ent.viewDetail": "Ver detalle",
    "ent.systemaPrefix": "Systema HETS",
    "ent.keysNav": "Flechas ← / →",
    "ent.keysClose": "ESC para cerrar",
    "ent.noMedia": "Registro temático sin archivo multimedia adjunto",

    // Clases y Sedes
    "clases.kicker": "Modalidades y Espacios de Práctica",
    "clases.title": "SEDES Y CLASES",
    "clases.subtitle": "“Entrená en un entorno de aprendizaje, conciencia corporal y desarrollo personal.”",
    "clases.groupTitle": "CLASES GRUPALES",
    "clases.groupSub": "Práctica Colectiva",
    "clases.groupDesc": "Compartí la práctica y aprendé junto a otros compañeros de distintos niveles.",
    "clases.groupDetails": "Trabajo dinámico en parejas y grupos para experimentar la biomecánica corporal con diferentes alturas, pesos e intensidades.",
    "clases.indTitle": "CLASES INDIVIDUALES",
    "clases.indSub": "Entrenamiento Personalizado",
    "clases.indDesc": "Sesiones adaptadas a tus objetivos físicos y necesidades biomecánicas específicas.",
    "clases.indDetails": "Atención uno a uno orientada a la alineación postural, corrección de patrones motores, rehabilitación activa y gestión del estrés.",
    "clases.semTitle": "SEMINARIOS INTENSIVOS",
    "clases.semSub": "Jornadas Especiales",
    "clases.semDesc": "Encuentros temáticos de fin de semana y módulos en exteriores.",
    "clases.semDetails": "Talleres de respiración táctica, adaptación a suelo natural, resolución ante múltiples estímulos y trabajo desarmado.",
    "clases.groupsNote": "Cupos reducidos · Grupos cuidados",
    "clases.sedeHeaderTag": "Ficha Oficial en Google Maps",
    "clases.sedeTitle": "SEDE SYSTEMA HETS · LA PLATA",
    "clases.btnDirections": "Ver en Google Maps",
    "clases.fieldAddress": "Dirección",
    "clases.fieldDays": "Días de Práctica",
    "clases.fieldHours": "Horarios y Turnos",
    "clases.fieldLevel": "Nivel y Requisitos",

    // Testimonios
    "test.kicker": "Experiencias de Práctica",
    "test.title": "LO QUE DICEN LOS ALUMNOS",
    "test.subtitle": "Testimonios sobre el impacto del movimiento consciente, la respiración y la soltura en la vida diaria.",
    "test.studentBadge": "Alumno Systema HETS",

    // Contacto y Conversión (al final)
    "contact.trialBadge": "PRIMERA CLASE DE PRUEBA",
    "contact.title": "¿QUERÉS SER PARTE DE SYSTEMA HETS?",
    "contact.desc": "Vení a experimentar una clase introductoria sin compromiso previo. Descubrí en primera persona la respiración diafragmática, la soltura física y el movimiento consciente sin rigidez.",
    "contact.btnTrial": "RESERVAR MI CLASE DE PRUEBA POR WHATSAPP",
    "contact.subtext": "Coordinación directa por WhatsApp · Diego Ledesma",
    "contact.officialChannels": "Canales Oficiales:",
    "contact.waChannel": "Canal WhatsApp",
    "contact.youtube": "YouTube",
    "contact.instagram": "Instagram",
    "contact.facebook": "Facebook",
    "contact.logoSub": "Diego Ledesma · Arte Marcial Ruso",

    // Frase destacada
    "quote.text": "El verdadero combate es con uno mismo.",
    "quote.sub": "Principio Institucional · Diego Ledesma",

    // Footer
    "footer.desc": "Arte marcial ruso y desarrollo corporal integral. Movimiento consciente, respiración táctica y autoprotección.",
    "footer.sections": "Secciones",
    "footer.channels": "Contacto y Redes",
    "footer.youtubeChannel": "Canal Oficial de YouTube",
    "footer.copyright": "© Systema HETS 2026. Todos los derechos reservados.",
    "footer.author": "Diego Ledesma · Buenos Aires, Argentina",
  },
  en: {
    // Nav
    "nav.inicio": "HOME",
    "nav.systema": "THE SYSTEMA",
    "nav.diego": "DIEGO LEDESMA",
    "nav.entrenamientos": "TRAINING",
    "nav.sedes": "LOCATIONS & CLASSES",
    "nav.testimonios": "TESTIMONIALS",
    "nav.contacto": "CONTACT",
    "nav.consultar": "INQUIRE VIA WHATSAPP",
    "nav.menuTitle": "SYSTEMA HETS",
    "nav.menuSub": "DIEGO MARTÍN LEDESMA",
    "nav.menuLocation": "La Plata / Buenos Aires · Russian Martial Art",

    // Hero
    "hero.kicker": "Russian martial art · La Plata / Buenos Aires",
    "hero.titulo": "Much more than self-defense",
    "hero.bajada": "Conscious movement, self-protection, and holistic personal growth.",
    "hero.btnWhatsapp": "Inquire via WhatsApp",
    "hero.btnSystema": "Discover the Systema",
    "hero.scroll": "Scroll to explore",

    // Linaje
    "linaje.kicker": "Lineage & Martial Roots",
    "linaje.title": "Part of the 2 Great Systema Schools",
    "linaje.badge": "Living Tradition & Self-Protection",
    "linaje.desc": "Systema HETS is directly trained and rooted in the 2 great traditional matrices of Russian martial arts.",
    "linaje.ryabkoNombre": "Mikhail Ryabko",
    "linaje.ryabkoSede": "Moscow · Russia",
    "linaje.ryabkoRol": "Foundational Matrix",
    "linaje.ryabkoDesc": "Traditional Cossack roots, fascial release, and calm mastery under high pressure.",
    "linaje.vasilievNombre": "Vladimir Vasiliev",
    "linaje.vasilievSede": "Toronto · Canada",
    "linaje.vasilievRol": "International Matrix",
    "linaje.vasilievDesc": "Adaptive biomechanics, movement economy, and worldwide tactical expansion.",
    "linaje.escuela1": "Mikhail Ryabko Lineage · Moscow",
    "linaje.escuela2": "Vladimir Vasiliev Lineage · Toronto",

    // Principios
    "principios.defensa": "SELF-DEFENSE",
    "principios.defensaDesc": "Instinctive, adaptive response without rigidity or preset patterns.",
    "principios.movimiento": "CONSCIOUS MOVEMENT",
    "principios.movimientoDesc": "Biomechanical economy, fascial release, and continuous flow.",
    "principios.salud": "HEALTH & WELLNESS",
    "principios.saludDesc": "Stress dissipation, organic posture, and joint preservation.",
    "principios.autoconocimiento": "SELF-PROTECTION",
    "principios.autoconocimientoDesc": "Diaphragmatic breath mastery and deep inner calm under pressure.",

    // El Systema
    "systema.kicker": "Methodology & Identity",
    "systema.title": "THE SYSTEMA",
    "systema.badge": "Conceptual Foundations",
    "systema.definition": "“Systema is a Russian martial art and a holistic training method that develops adaptability, efficiency in movement, and the unity between body and mind.”",
    "systema.p2": "There are no rigid stances or fixed forms (katas). Practitioners learn to identify their own biomechanical boundaries and respond naturally to any situation.",
    "systema.btnMore": "MORE ABOUT THE SYSTEMA",
    "systema.cardImgTitle": "Biomechanical Practice",
    "systema.cardImgDesc": "Direct harmony between breathing, posture, and body mass",
    "systema.adaptacion": "ADAPTABILITY",
    "systema.adaptacionDesc": "Learning to respond to varied situations without anticipated stiffness.",
    "systema.eficiencia": "EFFICIENCY",
    "systema.eficienciaDesc": "Seeking simple, conscious movements with minimal energy expenditure.",
    "systema.conciencia": "AWARENESS",
    "systema.concienciaDesc": "Exploring the organic harmony between breathing, posture, and serenity.",
    "systema.modalKicker": "Biomechanical Pillars",
    "systema.modalTitle": "The 4 Constant Pillars of Systema",
    "systema.modalIntro": "In Systema, we do not memorize techniques for every hypothetical scenario; instead, we study universal biological principles that guide human movement in all circumstances.",
    "systema.pilar1": "Breathing",
    "systema.pilar1Desc": "The cornerstone that oxygenates tissues, stabilizes heart rate, and dissolves accumulated physical and emotional tension under stress.",
    "systema.pilar2": "Relaxation",
    "systema.pilar2Desc": "Absence of parasitic tension. A relaxed body does not telegraph intention, moves faster, and absorbs impacts without fracture or injury.",
    "systema.pilar3": "Structure & Posture",
    "systema.pilar3Desc": "Natural spinal alignment free from rigid combat stances. Enables fluid action from any angle with maximum biomechanical economy.",
    "systema.pilar4": "Continuous Movement",
    "systema.pilar4Desc": "Flowing through obstacles rather than colliding with them. Continuous momentum deflects aggression and restores spontaneous equilibrium.",
    "systema.modalClose": "Close",

    // Diego Ledesma
    "diego.kicker": "Lineage & Direction",
    "diego.tag": "DIRECTOR OF SYSTEMA HETS",
    "diego.name": "DIEGO MARTÍN LEDESMA",
    "diego.quote": "“Diego Martín Ledesma has spent 40 years exploring how martial arts can transform the way we move, face challenges, and relate to one another.”",
    "diego.p1": "Physical Education Professor graduated from UNLP, with a postgraduate specialization in Emotional Education, Master VIII Dan in ITF Taekwon-Do, and International Systema Instructor. Trained in Argentina, Russia —Ryabko lineage—, and Canada —Vasiliev lineage—.",
    "diego.p2": "As director of Systema HETS, he integrates martial expertise, physical education, and human development. He serves as Secretary General and Director of the Inclusion Committee at ITF Integrity. His commitment: bringing martial arts to every person, fostering autonomy, self-confidence, and tools to handle the challenges of everyday life.",
    "diego.profileTag": "Academic & Martial Credentials",
    "diego.role1": "Physical Education Prof. (UNLP) · Emotional Ed. Postgrad",
    "diego.role2": "International Systema Instructor (Russia & Canada)",
    "diego.role3": "Master VIII Dan ITF · Secretary & Inclusion Dir. at ITF Integrity",
    "diego.btnHistory": "READ FULL BIOGRAPHY",
    "diego.timelineHeader": "Formative Journey",
    "diego.timelineLoc": "La Plata · Buenos Aires",
    "diego.modalKicker": "Official Biography",
    "diego.modalTitle": "Diego Martín Ledesma & Systema HETS",
    "diego.modalP1": "Diego Martín Ledesma has spent 40 years exploring how martial arts can transform our way of moving, facing challenges, and connecting with others. He is a Professor of Physical Education from the National University of La Plata (UNLP), holds a postgraduate degree in Emotional Education, is a Master VIII Dan in ITF Taekwon-Do, and an International Systema Instructor.",
    "diego.modalP2": "His direct lineage training developed across Argentina, Russia —Mikhail and Daniil Ryabko line—, and Canada —Vladimir Vasiliev line—, synthesizing traditional Russian biomechanics with conscious somatic pedagogy.",
    "diego.modalP3": "As director of Systema HETS, he blends martial mastery with somatic movement and human development. Furthermore, he serves as Secretary General and Director of the Inclusion Committee at ITF Integrity, dedicated to making martial arts accessible to all, promoting autonomy, confidence, and practical poise for everyday life.",
    "diego.modalClose": "Close",

    // Entrenamientos
    "ent.kicker": "Practice Archives",
    "ent.title": "TRAINING SESSIONS",
    "ent.quote": "“Discipline, presence, and continuous evolution.”",
    "ent.viewDetail": "View detail",
    "ent.systemaPrefix": "Systema HETS",
    "ent.keysNav": "Arrows ← / →",
    "ent.keysClose": "ESC to close",
    "ent.noMedia": "Thematic entry without attached media file",

    // Clases y Sedes
    "clases.kicker": "Modalities & Practice Spaces",
    "clases.title": "LOCATIONS & CLASSES",
    "clases.subtitle": "“Train in an environment of mindful learning, bodily awareness, and personal growth.”",
    "clases.groupTitle": "GROUP CLASSES",
    "clases.groupSub": "Collective Practice",
    "clases.groupDesc": "Share the floor and train alongside partners across different levels of experience.",
    "clases.groupDetails": "Dynamic partner and group drills exploring movement physics across varying body sizes, weights, and tempos.",
    "clases.indTitle": "PRIVATE SESSIONS",
    "clases.indSub": "Personalized Coaching",
    "clases.indDesc": "Tailored sessions aligned with your specific biomechanical needs and physical goals.",
    "clases.indDetails": "One-on-one sessions focused on postural restoration, motor pattern refinement, active recovery, and nervous system regulation.",
    "clases.semTitle": "INTENSIVE WORKSHOPS",
    "clases.semSub": "Special Events",
    "clases.semDesc": "Weekend thematic seminars and outdoor modules in natural environments.",
    "clases.semDetails": "Tactical breathwork clinics, natural terrain adaptation, multiple opponent management, and disarming drills.",
    "clases.groupsNote": "Limited capacity · Thoughtfully guided groups",
    "clases.sedeHeaderTag": "Official Google Maps Location",
    "clases.sedeTitle": "SYSTEMA HETS DOJO · LA PLATA",
    "clases.btnDirections": "View on Google Maps",
    "clases.fieldAddress": "Address",
    "clases.fieldDays": "Training Days",
    "clases.fieldHours": "Schedule & Shifts",
    "clases.fieldLevel": "Level & Prerequisites",

    // Testimonios
    "test.kicker": "Student Experiences",
    "test.title": "WHAT STUDENTS SAY",
    "test.subtitle": "Firsthand reflections on the impact of conscious movement, breathing, and release in daily life.",
    "test.studentBadge": "Systema HETS Student",

    // Contacto y Conversión (al final)
    "contact.trialBadge": "FIRST TRIAL CLASS",
    "contact.title": "READY TO EXPERIENCE SYSTEMA HETS?",
    "contact.desc": "Come experience an introductory class with no prior commitment. Experience firsthand diaphragmatic breathing, physical ease, and conscious movement free from stiffness.",
    "contact.btnTrial": "BOOK MY TRIAL CLASS VIA WHATSAPP",
    "contact.subtext": "Direct scheduling via WhatsApp · Diego Ledesma",
    "contact.officialChannels": "Official Channels:",
    "contact.waChannel": "WhatsApp Channel",
    "contact.youtube": "YouTube",
    "contact.instagram": "Instagram",
    "contact.facebook": "Facebook",
    "contact.logoSub": "Diego Ledesma · Russian Martial Art",

    // Frase destacada
    "quote.text": "The true combat is with oneself.",
    "quote.sub": "Core Institutional Principle · Diego Ledesma",

    // Footer
    "footer.desc": "Russian martial art and holistic body conditioning. Mindful movement, tactical breathing, and self-protection.",
    "footer.sections": "Navigation",
    "footer.channels": "Contact & Social",
    "footer.youtubeChannel": "Official YouTube Channel",
    "footer.copyright": "© Systema HETS 2026. All rights reserved.",
    "footer.author": "Diego Ledesma · Buenos Aires, Argentina",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  toggleLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("systema_hets_lang") as Language;
      if (saved === "es" || saved === "en") {
        setLang(saved);
      }
    } catch {
      // localStorage unavailable in some sandboxes
    }
  }, []);

  const changeLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem("systema_hets_lang", newLang);
    } catch {
      // Ignore
    }
    // Update HTML lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
    }
  };

  const toggleLang = () => {
    changeLang(lang === "es" ? "en" : "es");
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["es"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
