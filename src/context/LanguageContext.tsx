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
    "nav.prensa": "PRENSA",
    "nav.novedades": "NOVEDADES",
    "nav.contacto": "CONTACTO",
    "nav.consultar": "CONSULTAR POR WHATSAPP",
    "nav.menuTitle": "SYSTEMA HETS",
    "nav.menuSub": "DIEGO MARTÍN LEDESMA",
    "nav.menuLocation": "La Plata · Arte Marcial Ruso",

    // Hero
    "hero.kicker": "Clases en La Plata · Arte Marcial Ruso",
    "hero.titulo": "CONÓCETE Y PROGRESA",
    "hero.lemaRuso": "ПОЗНАЙ СЕБЯ И РАЗВИВАЙСЯ",
    "hero.lemaFonetica": "(Poznái sebyá i razviváysya)",
    "hero.bajada": "Arte Marcial Ruso · Desarrollo Humano · Autoprotección",
    "hero.location": "Sede Central · La Plata, Buenos Aires",
    "hero.btnTrial": "Reservar clase de prueba",
    "hero.btnWhatsapp": "Consultar por WhatsApp",
    "hero.btnSystema": "Conocer el Systema",
    "hero.btnClases": "Ver horarios y sede",
    "hero.directWspPrompt": "¿Querés consultar directamente?",
    "hero.directWspLink": "Escribinos por WhatsApp →",
    "hero.scroll": "Explorar",

    // Linaje
    "linaje.title": "Formación directa en las dos grandes escuelas de Systema",
    "linaje.desc": "Systema HETS nace de la práctica directa con los maestros de las dos ramas principales del arte marcial ruso en Moscú y Toronto.",
    "linaje.ryabkoNombre": "Mikhail Ryabko",
    "linaje.ryabkoSede": "Moscú · Rusia",
    "linaje.ryabkoRol": "Escuela Fundacional en Moscú",
    "linaje.ryabkoDesc": "Trabajo profundo de respiración, gestión de impactos y reducción del riesgo de lesiones, con serenidad en situaciones reales.",
    "linaje.vasilievNombre": "Vladimir Vasiliev",
    "linaje.vasilievSede": "Toronto · Canadá",
    "linaje.vasilievRol": "Escuela Internacional en Toronto",
    "linaje.vasilievDesc": "Movimiento fluido, autoprotección frente a agarres o elementos y adaptación natural a cualquier entorno.",
    "linaje.escuela1": "Linaje Mikhail Ryabko · Moscú",
    "linaje.escuela2": "Linaje Vladimir Vasiliev · Toronto",

    // Principios (3 pilares principales sin recuadros)
    "principios.autoproteccion": "Autoprotección",
    "principios.autoproteccionDesc": "Aprendé a resolver situaciones imprevistas utilizando el movimiento inteligente de tu cuerpo. No se trata de ser más fuerte que el otro, sino de conocerte mejor, comprender lo que sucede y desarrollar tu capacidad de adaptación.",
    "principios.movimiento": "Movimiento Consciente",
    "principios.movimientoDesc": "Menos tensión. Más libertad de movimiento. Exploramos posibilidades sin imponer movimientos rígidos para que cada persona descubra sus propias capacidades y desarrolle respuestas naturales, eficientes y adaptables.",
    "principios.salud": "Salud y Desarrollo Humano",
    "principios.saludDesc": "El movimiento como camino hacia el autoconocimiento y la autoprotección. A través de la respiración, la relajación y la percepción, aprendemos a regular el esfuerzo, liberar tensiones y fortalecer la confianza.",

    // El Systema
    "systema.title": "El Systema",
    "systema.subtitle": "Movimiento Consciente — Menos tensión. Más libertad de movimiento.",
    "systema.definition": "En Systema HETS, el movimiento consciente permite conocer el cuerpo, reconocer tensiones y responder con naturalidad ante situaciones imprevistas. A través de la respiración, la relajación y el movimiento, aprendemos a regular el esfuerzo, mejorar la coordinación y desarrollar nuestra capacidad de adaptación.",
    "systema.p2": "Entrenamos progresivamente la gestión de impactos, buscando reducir riesgos y fortalecer la confianza bajo presión. No imponemos movimientos rígidos: exploramos posibilidades para que cada persona descubra sus propias capacidades y desarrolle respuestas naturales, eficientes y adaptables.",
    "systema.tagline": "Conocé tu cuerpo. Liberá tensiones. Movete con libertad.",
    "systema.btnMore": "Ver los 4 pilares del entrenamiento",
    "systema.cardImgTitle": "Galería",
    "systema.cardImgDesc": "Trabajo en parejas de respiración, postura y salida de agarres",
    "systema.adaptacion": "Adaptación",
    "systema.adaptacionDesc": "Responder a lo que pasa en el momento sin quedarte duro ni bloqueado por los nervios.",
    "systema.eficiencia": "Movimiento sin desgaste",
    "systema.eficienciaDesc": "Hacer lo justo y necesario con el cuerpo, sin agotar tu energía ni forzar las articulaciones.",
    "systema.conciencia": "Calma bajo presión",
    "systema.concienciaDesc": "Mantener la respiración suelta y la cabeza fría tanto en el entrenamiento como en la vida diaria.",
    "systema.modalTitle": "Los 4 pilares que entrenamos en cada clase",
    "systema.modalIntro": "Descubrí cómo la respiración, la relajación, la percepción y el movimiento natural pueden ayudarte a responder con mayor libertad, eficiencia y confianza. No se trata de ser más fuerte que el otro, sino de conocerte mejor, comprender lo que sucede y desarrollar tu capacidad de adaptación:",
    "systema.pilar1": "Respiración",
    "systema.pilar1Desc": "Es la base de todo. Si respirás bien, no entrás en pánico, te cansás mucho menos y podés gestionar impactos y reducir el riesgo de lesiones sin bloquearte.",
    "systema.pilar2": "Relajación activa",
    "systema.pilar2Desc": "Estar suelto no es estar flojo: es sacarse de encima la rigidez que te frena y te desgasta. Un cuerpo libre de tensión excesiva se mueve con mayor fluidez e inteligencia corporal.",
    "systema.pilar3": "Buena postura",
    "systema.pilar3Desc": "Mantener la espalda alineada y los pies bien apoyados sin adoptar poses rígidas. Eso te da estructura y equilibrio para moverte en cualquier dirección.",
    "systema.pilar4": "Movimiento continuo",
    "systema.pilar4Desc": "No quedarse estático ni oponer resistencia rígida. A través de la percepción, adaptación y movimiento, aprovechás inteligentemente la energía para resolver la situación y recuperar tu espacio.",
    "systema.hetsTitle": "¿Por qué se llama Systema HETS?",
    "systema.hetsDesc": "El nombre rinde homenaje a los antiguos pueblos Het (querandíes) que habitaron nuestra región pampeana, uniendo el arraigo local con la práctica del arte marcial ruso.",
    "systema.hetsTag": "Identidad local · La Plata",
    "systema.modalClose": "Cerrar",

    // Diego Ledesma
    "diego.name": "Diego Martín Ledesma",
    "diego.quote": "Entiendo la práctica marcial como un camino de autoconocimiento y cuidado mutuo: no entrenamos para alimentar el ego ni para imponernos sobre otro, sino para habitar nuestro cuerpo con calma, claridad y libertad.",
    "diego.p1": "Mi visión de la enseñanza parte de acompañar a cada persona a descubrir sus propias capacidades sin moldes rígidos ni exigencias artificiales. A través de la respiración, la percepción y el movimiento consciente aplicado a situaciones reales, buscamos que cada clase sea un espacio humano donde soltar tensiones, fortalecer la salud y construir una serenidad auténtica que se traslade a la vida cotidiana.",
    "diego.timelineHeader": "Trayectoria Formativa",
    "diego.timelineLoc": "La Plata · Buenos Aires",
    "diego.btnPrensa": "Prensa: Notas en Radio, Streaming, TV y Escritas",
    "diego.featuredPrensaLabel": "Entrevista en Prensa · Reproducir desde el Minuto 40:00",

    // Prensa Modal
    "prensa.title": "Prensa y Difusión",
    "prensa.subtitle": "Entrevistas, participaciones y notas sobre Systema HETS y el movimiento consciente en Radio, Streaming, TV y Prensa Escrita.",
    "prensa.filterAll": "Todas",
    "prensa.filterRadio": "Radio",
    "prensa.filterStreaming": "Streaming",
    "prensa.filterTv": "TV",
    "prensa.filterEscrita": "Notas Escritas",
    "prensa.btnOpen": "Ver / Escuchar nota",
    "prensa.playHere": "Reproducir desde Min. 40:00",
    "prensa.openYoutube": "Ver en YouTube (Min. 40:00)",
    "prensa.close": "Cerrar",

    // Entrenamientos
    "ent.title": "Entrenamientos en acción",
    "ent.quote": "Práctica real en nuestra sede y al aire libre en La Plata.",
    "ent.viewDetail": "Ver imagen",
    "ent.systemaPrefix": "Systema HETS",
    "ent.keysNav": "Flechas ← / →",
    "ent.keysClose": "ESC para cerrar",
    "ent.noMedia": "Imagen de práctica",

    // Clases y Sedes
    "clases.title": "Horarios de entrenamiento y sede",
    "clases.subtitle": "Entrenamos de lunes a viernes en el casco urbano de La Plata. Podés sumarte en cualquier momento del año, sin necesidad de experiencia previa.",
    "clases.groupTitle": "Clases Grupales",
    "clases.groupSub": "En nuestra sede · Lunes a viernes",
    "clases.groupDesc": "Entrená con compañeros de distintas edades y niveles en un ambiente de respeto y cuidado mutuo.",
    "clases.groupDetails": "Practicamos en parejas rotando de compañero para desarrollar percepción, adaptación y movimiento frente a agarres, desequilibrios y situaciones reales.",
    "clases.indTitle": "Clases Individuales",
    "clases.indSub": "Personalizadas · Presencial u online",
    "clases.indDesc": "Encuentros uno a uno armados según tus horarios, tu ritmo y lo que necesites trabajar.",
    "clases.indDetails": "Ideal si tenés horarios rotativos, querés profundizar en autoprotección, educación corporal y desarrollo humano, o buscás trabajar el movimiento consciente a tu propio ritmo.",
    "clases.semTitle": "Seminarios e Intensivos",
    "clases.semSub": "Fines de semana y aire libre",
    "clases.semDesc": "Jornadas especiales en parques, estancias y visitas a otras ciudades de Argentina.",
    "clases.semDetails": "Entrenamientos de varias horas para profundizar en terreno natural, manejo de estrés, autoprotección frente a múltiples oponentes y trabajo con elementos.",
    "clases.groupsNote": "Grupos reducidos · Trato cercano",
    "clases.sedeTitle": "Sede La Plata",
    "clases.btnDirections": "Abrir en Google Maps",
    "clases.fieldAddress": "Dirección",
    "clases.fieldDays": "Días de práctica",
    "clases.fieldHours": "Horarios",
    "clases.fieldLevel": "Requisitos",

    // Testimonios (Reseñas reales de Google Maps)
    "test.title": "Lo que cuentan nuestros alumnos",
    "test.subtitle": "Reseñas verificadas en tiempo real desde nuestro perfil oficial de Google Maps en La Plata.",
    "test.studentBadge": "Reseña en Google",
    "test.googleVerified": "Perfil verificado en Google Maps",
    "test.reviewsCount": "opiniones en Google",
    "test.viewAllGoogle": "Ver todas las opiniones en Google",
    "test.readMore": "Leer más",
    "test.readLess": "Leer menos",
    "test.loading": "Cargando reseñas verificadas de Google Maps...",
    "test.viewAuthorProfile": "Ver perfil en Google Maps",
    "test.noTextReview": "Calificación de 5 estrellas en Google Maps.",

    // Contacto y Conversión (al final)
    "contact.title": "¿Querés venir a probar una clase?",
    "contact.desc": "Escribile directamente a Diego por WhatsApp para elegir el día que te quede más cómodo. Solo necesitás traer una remera y un pantalón deportivo cómodo.",
    "contact.btnTrial": "Contacta y conoce la forma de acceder a tu clase",
    "contact.subtext": "Atención directa de Diego Ledesma · Calle 22 Nº 1027 (entre 53 y 54), La Plata",
    "contact.officialChannels": "Redes y canales:",
    "contact.waChannel": "Canal de WhatsApp",
    "contact.youtube": "YouTube",
    "contact.instagram": "Instagram",
    "contact.facebook": "Facebook",
    "contact.logoSub": "Diego Ledesma · La Plata",

    // Frase destacada
    "quote.text": "El verdadero combate es con uno mismo.",
    "quote.sub": "Diego Ledesma · Systema HETS",

    // Footer
    "footer.desc": "Escuela de Systema (arte marcial ruso) dirigida por Diego Martín Ledesma en La Plata, Buenos Aires. Movimiento consciente aplicado a situaciones reales, articulando arte marcial, educación corporal y desarrollo humano.",
    "footer.sections": "Navegación",
    "footer.channels": "Contacto y redes",
    "footer.youtubeChannel": "Canal de YouTube",
    "footer.copyright": "© Systema HETS 2026. Todos los derechos reservados.",
    "footer.author": "Diego Ledesma · La Plata, Argentina",
  },
  en: {
    // Nav
    "nav.inicio": "HOME",
    "nav.systema": "THE SYSTEMA",
    "nav.diego": "DIEGO LEDESMA",
    "nav.entrenamientos": "TRAINING",
    "nav.sedes": "SCHEDULE & LOCATION",
    "nav.testimonios": "REVIEWS",
    "nav.prensa": "PRESS",
    "nav.novedades": "NEWS",
    "nav.contacto": "CONTACT",
    "nav.consultar": "WHATSAPP INQUIRY",
    "nav.menuTitle": "SYSTEMA HETS",
    "nav.menuSub": "DIEGO MARTÍN LEDESMA",
    "nav.menuLocation": "La Plata · Russian Martial Art",

    // Hero
    "hero.kicker": "Classes in La Plata · Russian Martial Art",
    "hero.titulo": "KNOW YOURSELF AND PROGRESS",
    "hero.lemaRuso": "ПОЗНАЙ СЕБЯ И РАЗВИВАЙСЯ",
    "hero.lemaFonetica": "(Poznái sebyá i razviváysya)",
    "hero.bajada": "Russian Martial Art · Human Development · Self-Protection",
    "hero.location": "Sede Central · La Plata, Buenos Aires",
    "hero.btnTrial": "Book a trial class",
    "hero.btnWhatsapp": "Message on WhatsApp",
    "hero.btnSystema": "About Systema",
    "hero.btnClases": "View schedule & location",
    "hero.directWspPrompt": "Have a quick question?",
    "hero.directWspLink": "Chat on WhatsApp →",
    "hero.scroll": "Explore",

    // Linaje
    "linaje.title": "Direct training in the two main Systema schools",
    "linaje.desc": "Systema HETS is rooted in direct practice with the masters of the two main branches of Russian martial art in Moscow and Toronto.",
    "linaje.ryabkoNombre": "Mikhail Ryabko",
    "linaje.ryabkoSede": "Moscow · Russia",
    "linaje.ryabkoRol": "Foundational School in Moscow",
    "linaje.ryabkoDesc": "Deep breathwork, impact management and injury risk reduction, and inner calm in real situations.",
    "linaje.vasilievNombre": "Vladimir Vasiliev",
    "linaje.vasilievSede": "Toronto · Canada",
    "linaje.vasilievRol": "International Headquarters in Toronto",
    "linaje.vasilievDesc": "Fluid movement, practical self-protection against grabs or weapons, and natural adaptation to any environment.",
    "linaje.escuela1": "Mikhail Ryabko Lineage · Moscow",
    "linaje.escuela2": "Vladimir Vasiliev Lineage · Toronto",

    // Principios (3 pilares principales sin recuadros)
    "principios.autoproteccion": "Self-Protection",
    "principios.autoproteccionDesc": "Learn to resolve unexpected situations using the intelligent movement of your body. It is not about being stronger than the other person, but about knowing yourself better, understanding what happens, and developing your capacity for adaptation.",
    "principios.movimiento": "Conscious Movement",
    "principios.movimientoDesc": "Less tension. More freedom of movement. We explore possibilities without imposing rigid movements so each person discovers their own capabilities and develops natural, efficient, and adaptable responses.",
    "principios.salud": "Health & Human Development",
    "principios.saludDesc": "Movement as a path toward self-knowledge and self-protection. Through breathing, relaxation, and perception, we learn to regulate effort, release tension, and strengthen confidence.",

    // El Systema
    "systema.title": "The Systema",
    "systema.subtitle": "Conscious Movement — Less tension. More freedom of movement.",
    "systema.definition": "At Systema HETS, conscious movement allows you to know your body, recognize tension, and respond naturally to unexpected situations. Through breathing, relaxation, and movement, we learn to regulate effort, improve coordination, and develop our capacity for adaptation.",
    "systema.p2": "We progressively train impact management, seeking to reduce risks and strengthen confidence under pressure. We do not impose rigid movements: we explore possibilities so each person discovers their own capabilities and develops natural, efficient, and adaptable responses.",
    "systema.tagline": "Know your body. Release tension. Move freely.",
    "systema.btnMore": "See the 4 training pillars",
    "systema.cardImgTitle": "Gallery",
    "systema.cardImgDesc": "Partner work on breathing, posture, and escaping grabs",
    "systema.adaptacion": "Adaptability",
    "systema.adaptacionDesc": "Responding to what happens in the moment without freezing up or getting stiff.",
    "systema.eficiencia": "Effortless Movement",
    "systema.eficienciaDesc": "Doing only what is needed with your body, without wasting energy or forcing your joints.",
    "systema.conciencia": "Calm Under Pressure",
    "systema.concienciaDesc": "Keeping your breathing steady and your head clear both in training and in everyday life.",
    "systema.modalTitle": "The 4 pillars we train in every class",
    "systema.modalIntro": "Discover how breathing, relaxation, perception, and natural movement can help you respond with greater freedom, efficiency, and confidence. It is not about being stronger than the other person, but about knowing yourself better, understanding what happens, and developing your capacity for adaptation:",
    "systema.pilar1": "Breathing",
    "systema.pilar1Desc": "The foundation of everything. When you breathe well, you don't panic, you tire much less, and you can manage impacts and reduce the risk of injury without locking up.",
    "systema.pilar2": "Active Relaxation",
    "systema.pilar2Desc": "Being relaxed doesn't mean being weak—it means shedding the stiffness that slows you down. A tension-free body moves with greater fluidity and bodily intelligence.",
    "systema.pilar3": "Natural Posture",
    "systema.pilar3Desc": "Keeping your back aligned and your feet grounded without rigid stances, giving you structure and balance to move in any direction.",
    "systema.pilar4": "Continuous Movement",
    "systema.pilar4Desc": "Never staying static or opposing rigid resistance. Through perception, adaptation, and movement, you make intelligent use of energy to step out of trouble and regain your balance.",
    "systema.hetsTitle": "Why is it called Systema HETS?",
    "systema.hetsDesc": "The name honors the ancient Het (Querandí) people who inhabited our Pampas region, uniting local roots with Russian martial art practice.",
    "systema.hetsTag": "Local roots · La Plata",
    "systema.modalClose": "Close",

    // Diego Ledesma
    "diego.name": "Diego Martín Ledesma",
    "diego.quote": "I understand martial practice as a path of self-knowledge and mutual care: we don't train to feed the ego or dominate others, but to inhabit our own body with calm, clarity, and freedom.",
    "diego.p1": "My teaching philosophy focuses on guiding each person to discover their own capabilities without rigid molds or artificial demands. Through breathing, perception, and conscious movement applied to real situations, every class becomes a human, respectful space to release tension, nurture health, and cultivate genuine composure for everyday life.",
    "diego.timelineHeader": "Formative Journey",
    "diego.timelineLoc": "La Plata · Buenos Aires",
    "diego.btnPrensa": "Press: Radio, Streaming, TV & Written Features",
    "diego.featuredPrensaLabel": "Press Interview · Play from Minute 40:00",

    // Prensa Modal
    "prensa.title": "Press & Media",
    "prensa.subtitle": "Interviews, features, and articles on Systema HETS and conscious movement across Radio, Streaming, TV, and Print/Digital Press.",
    "prensa.filterAll": "All",
    "prensa.filterRadio": "Radio",
    "prensa.filterStreaming": "Streaming",
    "prensa.filterTv": "TV",
    "prensa.filterEscrita": "Written Press",
    "prensa.btnOpen": "View / Listen to feature",
    "prensa.playHere": "Play from Min. 40:00",
    "prensa.openYoutube": "Watch on YouTube (Min. 40:00)",
    "prensa.close": "Close",

    // Entrenamientos
    "ent.title": "Training in action",
    "ent.quote": "Real practice at our location and outdoors in La Plata.",
    "ent.viewDetail": "View photo",
    "ent.systemaPrefix": "Systema HETS",
    "ent.keysNav": "Arrows ← / →",
    "ent.keysClose": "ESC to close",
    "ent.noMedia": "Practice photo",

    // Clases y Sedes
    "clases.title": "Training schedule & location",
    "clases.subtitle": "We train Monday through Friday in downtown La Plata. You can join at any time of the year, with no prior experience required.",
    "clases.groupTitle": "Group Classes",
    "clases.groupSub": "At our location · Monday to Friday",
    "clases.groupDesc": "Train alongside partners of different ages and levels in a respectful, supportive environment.",
    "clases.groupDetails": "We practice in rotating pairs developing perception, adaptation, and movement to handle grabs, off-balancing, and real situations.",
    "clases.indTitle": "Private Sessions",
    "clases.indSub": "One-on-one · In-person or online",
    "clases.indDesc": "Individual sessions tailored to your schedule, pace, and personal goals.",
    "clases.indDetails": "Ideal if you have rotating work hours, want to deepen your self-protection, bodily education, and human development practice, or prefer progressive conscious movement work.",
    "clases.semTitle": "Weekend Seminars",
    "clases.semSub": "Special workshops & outdoors",
    "clases.semDesc": "Special weekend training days in parks, country estates, and visiting cities across Argentina.",
    "clases.semDetails": "Extended sessions exploring uneven terrain, stress management, self-protection against multiple opponents, and everyday objects.",
    "clases.groupsNote": "Small groups · Personal guidance",
    "clases.sedeTitle": "La Plata Location",
    "clases.btnDirections": "Open in Google Maps",
    "clases.fieldAddress": "Address",
    "clases.fieldDays": "Training days",
    "clases.fieldHours": "Hours",
    "clases.fieldLevel": "Prerequisites",

    // Testimonios (Real Google Maps Reviews)
    "test.title": "What our students say",
    "test.subtitle": "Verified real-time reviews from our official Google Maps profile in La Plata.",
    "test.studentBadge": "Google Review",
    "test.googleVerified": "Verified on Google Maps",
    "test.reviewsCount": "Google reviews",
    "test.viewAllGoogle": "See all reviews on Google",
    "test.readMore": "Read more",
    "test.readLess": "Show less",
    "test.loading": "Loading verified Google Maps reviews...",
    "test.viewAuthorProfile": "View profile on Google Maps",
    "test.noTextReview": "5-star rating on Google Maps.",

    // Contacto y Conversión
    "contact.title": "Want to try a class?",
    "contact.desc": "Send Diego a message on WhatsApp to pick the day that works best for you. All you need to bring is a t-shirt and comfortable sweatpants.",
    "contact.btnTrial": "Contact us and learn how to join your class",
    "contact.subtext": "Direct coordination with Diego Ledesma · Calle 22 Nº 1027 (btw 53 & 54), La Plata",
    "contact.officialChannels": "Social channels:",
    "contact.waChannel": "WhatsApp Channel",
    "contact.youtube": "YouTube",
    "contact.instagram": "Instagram",
    "contact.facebook": "Facebook",
    "contact.logoSub": "Diego Ledesma · La Plata",

    // Frase destacada
    "quote.text": "The true combat is with oneself.",
    "quote.sub": "Diego Ledesma · Systema HETS",

    // Footer
    "footer.desc": "Russian martial art (Systema) school led by Diego Martín Ledesma in La Plata, Buenos Aires. Conscious movement applied to real situations, integrating martial art, bodily education, and human development.",
    "footer.sections": "Navigation",
    "footer.channels": "Contact & Social",
    "footer.youtubeChannel": "YouTube Channel",
    "footer.copyright": "© Systema HETS 2026. All rights reserved.",
    "footer.author": "Diego Ledesma · La Plata, Argentina",
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
