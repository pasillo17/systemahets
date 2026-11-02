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
    "hero.location": "Dojo Central · La Plata, Buenos Aires",
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
    "linaje.ryabkoDesc": "Trabajo profundo de respiración, absorción de golpes sin rigidez y serenidad en situaciones reales de conflicto.",
    "linaje.vasilievNombre": "Vladimir Vasiliev",
    "linaje.vasilievSede": "Toronto · Canadá",
    "linaje.vasilievRol": "Escuela Internacional en Toronto",
    "linaje.vasilievDesc": "Movimiento fluido, autoprotección frente a agarres o elementos y adaptación natural a cualquier entorno.",
    "linaje.escuela1": "Linaje Mikhail Ryabko · Moscú",
    "linaje.escuela2": "Linaje Vladimir Vasiliev · Toronto",

    // Principios (3 pilares principales sin recuadros)
    "principios.autoproteccion": "Autoprotección",
    "principios.autoproteccionDesc": "Aprendé a resolver situaciones imprevistas y proteger tu integridad usando la respiración, la calma bajo presión y el movimiento natural de tu cuerpo en lugar de chocar con fuerza bruta.",
    "principios.movimiento": "Movimiento Consciente",
    "principios.movimientoDesc": "Aprendé a absorber impactos sin lesionarte, soltá la tensión física y respondé con fluidez y naturalidad.",
    "principios.salud": "Salud y Desarrollo Humano",
    "principios.saludDesc": "Mejorá tu postura, cuidá las articulaciones y sacate de encima las contracturas y el estrés de la semana en un entorno de respeto.",

    // El Systema
    "systema.title": "El Systema",
    "systema.definition": "Systema es un arte marcial ruso orientado a la autoprotección y el desarrollo humano. En lugar de exigirte fuerza física o rutinas rígidas, te enseña a respirar, soltar las contracturas y moverte con libertad para proteger tu integridad y cuidar tu cuerpo.",
    "systema.p2": "En las clases no hay posiciones fijas ni coreografías de memoria. Entrenás con compañeros de distintas contexturas para conocer cómo reacciona tu cuerpo y aprender a resolver agarres, empujones, caídas o situaciones de estrés con naturalidad.",
    "systema.btnMore": "Ver los 4 pilares del entrenamiento",
    "systema.cardImgTitle": "Práctica en el dojo de La Plata",
    "systema.cardImgDesc": "Trabajo en parejas de respiración, postura y salida de agarres",
    "systema.adaptacion": "Adaptación",
    "systema.adaptacionDesc": "Responder a lo que pasa en el momento sin quedarte duro ni bloqueado por los nervios.",
    "systema.eficiencia": "Movimiento sin desgaste",
    "systema.eficienciaDesc": "Hacer lo justo y necesario con el cuerpo, sin agotar tu energía ni forzar las articulaciones.",
    "systema.conciencia": "Calma bajo presión",
    "systema.concienciaDesc": "Mantener la respiración suelta y la cabeza fría tanto en el entrenamiento como en la vida diaria.",
    "systema.modalTitle": "Los 4 pilares que entrenamos en cada clase",
    "systema.modalIntro": "En Systema no memorizamos técnicas sueltas para cada ataque posible. Entrenamos cuatro principios simples del cuerpo que te sirven en cualquier situación:",
    "systema.pilar1": "Respiración",
    "systema.pilar1Desc": "Es la base de todo. Si respirás bien, no entrás en pánico, te cansás mucho menos y podés recibir un impacto o un esfuerzo sin bloquearte.",
    "systema.pilar2": "Relajación activa",
    "systema.pilar2Desc": "Estar suelto no es estar flojo: es sacarse de encima la rigidez que te frena y te lastima. Un cuerpo sin tensión se mueve más rápido y no avisa lo que va a hacer.",
    "systema.pilar3": "Buena postura",
    "systema.pilar3Desc": "Mantener la espalda alineada y los pies bien apoyados sin adoptar poses de pelea. Eso te da equilibrio para moverte en cualquier dirección.",
    "systema.pilar4": "Movimiento continuo",
    "systema.pilar4Desc": "No quedarse estático ni chocar fuerza contra fuerza. Si te empujan o te agarran, seguís en movimiento para salir del problema y recuperar tu lugar.",
    "systema.hetsTitle": "¿Por qué se llama Systema HETS?",
    "systema.hetsDesc": "El nombre rinde homenaje a los antiguos pueblos Het (querandíes) que habitaron nuestra región pampeana, uniendo el arraigo local con la práctica del arte marcial ruso.",
    "systema.hetsTag": "Identidad local · La Plata",
    "systema.modalClose": "Cerrar",

    // Diego Ledesma
    "diego.name": "Diego Martín Ledesma",
    "diego.quote": "Llevo 40 años practicando y enseñando artes marciales con una idea simple: que el entrenamiento te sirva para conocerte mejor, cuidar tu salud y desenvolverte con seguridad todos los días.",
    "diego.p1": "Es Profesor en Educación Física recibido en la Universidad Nacional de La Plata (UNLP), cuenta con posgrado en Educación Emocional, es Maestro VIII Dan de Taekwon-Do ITF e Instructor Internacional de Systema formado en Argentina, Rusia (con Mikhail Ryabko) y Canadá (con Vladimir Vasiliev).",
    "diego.p2": "Al frente de Systema HETS en La Plata, combina cuatro décadas de docencia universitaria y experiencia marcial para ofrecer un espacio de aprendizaje serio, cercano y libre de violencia innecesaria. También se desempeña como Secretario General y Director del Comité de Inclusión de ITF Integrity.",
    "diego.role1": "Prof. en Educación Física (UNLP) y Posgrado en Educación Emocional",
    "diego.role2": "Instructor Internacional de Systema formado en Rusia y Canadá",
    "diego.role3": "Maestro VIII Dan ITF · Secretario General en ITF Integrity",
    "diego.btnHistory": "Leer biografía completa",
    "diego.timelineHeader": "Trayectoria Formativa",
    "diego.timelineLoc": "La Plata · Buenos Aires",
    "diego.modalTitle": "Diego Martín Ledesma",
    "diego.modalP1": "Diego Martín Ledesma lleva 40 años dedicados a la enseñanza marcial y la educación física. Egresado como Profesor en Educación Física por la Universidad Nacional de La Plata (UNLP) y especializado en Educación Emocional, alcanzó el grado de Maestro VIII Dan de Taekwon-Do ITF y la certificación como Instructor Internacional de Systema.",
    "diego.modalP2": "Viajó y se formó directamente en Rusia —en la escuela de Mikhail y Daniil Ryabko en Moscú— y en Canadá —en el centro internacional de Vladimir Vasiliev en Toronto—, trayendo a La Plata una enseñanza fiel a las raíces del arte marcial ruso pero adaptada a las personas reales de hoy.",
    "diego.modalP3": "Como director de Systema HETS y referente de inclusión en ITF Integrity, su objetivo es que cualquier persona —tenga o no experiencia previa— pueda desarrollar su autoprotección, soltar las tensiones físicas y ganar confianza en su propio cuerpo.",
    "diego.modalClose": "Cerrar",

    // Entrenamientos
    "ent.title": "Entrenamientos en acción",
    "ent.quote": "Práctica real en el dojo y al aire libre en La Plata.",
    "ent.viewDetail": "Ver imagen",
    "ent.systemaPrefix": "Systema HETS",
    "ent.keysNav": "Flechas ← / →",
    "ent.keysClose": "ESC para cerrar",
    "ent.noMedia": "Imagen de práctica",

    // Clases y Sedes
    "clases.title": "Horarios de entrenamiento y sede",
    "clases.subtitle": "Entrenamos de lunes a viernes en el casco urbano de La Plata. Podés sumarte en cualquier momento del año, sin necesidad de experiencia previa.",
    "clases.groupTitle": "Clases Grupales",
    "clases.groupSub": "En el dojo · Lunes a viernes",
    "clases.groupDesc": "Entrená con compañeros de distintas edades y niveles en un ambiente de respeto y cuidado mutuo.",
    "clases.groupDetails": "Practicamos en parejas rotando de compañero para aprender a resolver agarres, caídas y situaciones reales sin importar la diferencia de peso o altura.",
    "clases.indTitle": "Clases Individuales",
    "clases.indSub": "Personalizadas · Presencial u online",
    "clases.indDesc": "Encuentros uno a uno armados según tus horarios, tu ritmo y lo que necesites trabajar.",
    "clases.indDetails": "Ideal si tenés horarios rotativos, querés profundizar en autoprotección y desarrollo humano o buscás recuperar movilidad sin exigencias bruscas.",
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

    // Testimonios
    "test.title": "Lo que cuentan nuestros alumnos",
    "test.subtitle": "Experiencias reales de quienes entrenan todas las semanas en el dojo de La Plata.",
    "test.studentBadge": "Alumno en La Plata",

    // Contacto y Conversión (al final)
    "contact.title": "¿Querés venir a probar una clase?",
    "contact.desc": "Escribile directamente a Diego por WhatsApp para elegir el día que te quede más cómodo. Solo necesitás traer una remera y un pantalón deportivo cómodo.",
    "contact.btnTrial": "Reservar clase de prueba por WhatsApp",
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
    "footer.desc": "Escuela de Systema (arte marcial ruso) dirigida por Diego Martín Ledesma en La Plata, Buenos Aires.",
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
    "nav.sedes": "SCHEDULE & DOJO",
    "nav.testimonios": "REVIEWS",
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
    "hero.location": "Dojo Central · La Plata, Buenos Aires",
    "hero.btnTrial": "Book a trial class",
    "hero.btnWhatsapp": "Message on WhatsApp",
    "hero.btnSystema": "About Systema",
    "hero.btnClases": "View schedule & dojo",
    "hero.directWspPrompt": "Have a quick question?",
    "hero.directWspLink": "Chat on WhatsApp →",
    "hero.scroll": "Explore",

    // Linaje
    "linaje.title": "Direct training in the two main Systema schools",
    "linaje.desc": "Systema HETS is rooted in direct practice with the masters of the two main branches of Russian martial art in Moscow and Toronto.",
    "linaje.ryabkoNombre": "Mikhail Ryabko",
    "linaje.ryabkoSede": "Moscow · Russia",
    "linaje.ryabkoRol": "Foundational School in Moscow",
    "linaje.ryabkoDesc": "Deep breathwork, impact absorption without stiffness, and inner calm in real conflict situations.",
    "linaje.vasilievNombre": "Vladimir Vasiliev",
    "linaje.vasilievSede": "Toronto · Canada",
    "linaje.vasilievRol": "International Headquarters in Toronto",
    "linaje.vasilievDesc": "Fluid movement, practical self-protection against grabs or weapons, and natural adaptation to any environment.",
    "linaje.escuela1": "Mikhail Ryabko Lineage · Moscow",
    "linaje.escuela2": "Vladimir Vasiliev Lineage · Toronto",

    // Principios (3 pilares principales sin recuadros)
    "principios.autoproteccion": "Self-Protection",
    "principios.autoproteccionDesc": "Learn to resolve unexpected situations and protect your integrity using breathing, calm under pressure, and natural body movement instead of clashing with brute force.",
    "principios.movimiento": "Conscious Movement",
    "principios.movimientoDesc": "Learn to absorb impacts safely, let go of physical tension, and respond fluidly and naturally.",
    "principios.salud": "Health & Human Development",
    "principios.saludDesc": "Improve your posture, care for your joints, and release weekly tension and stress in a respectful environment.",

    // El Systema
    "systema.title": "The Systema",
    "systema.definition": "Systema is a Russian martial art focused on self-protection and human development. Instead of relying on brute strength or rigid routines, it teaches you to breathe, release tension, and move freely to protect your integrity and take care of your body.",
    "systema.p2": "There are no fixed combat stances or memorized routines. You train with partners of different builds to understand how your body reacts and resolve grabs, pushes, falls, or high-pressure situations naturally.",
    "systema.btnMore": "See the 4 training pillars",
    "systema.cardImgTitle": "Practice at our La Plata dojo",
    "systema.cardImgDesc": "Partner work on breathing, posture, and escaping grabs",
    "systema.adaptacion": "Adaptability",
    "systema.adaptacionDesc": "Responding to what happens in the moment without freezing up or getting stiff.",
    "systema.eficiencia": "Effortless Movement",
    "systema.eficienciaDesc": "Doing only what is needed with your body, without wasting energy or forcing your joints.",
    "systema.conciencia": "Calm Under Pressure",
    "systema.concienciaDesc": "Keeping your breathing steady and your head clear both on the mat and in everyday life.",
    "systema.modalTitle": "The 4 pillars we train in every class",
    "systema.modalIntro": "In Systema we don't memorize isolated tricks for every hypothetical attack. We train four simple bodily principles that work in any situation:",
    "systema.pilar1": "Breathing",
    "systema.pilar1Desc": "The foundation of everything. When you breathe well, you don't panic, you tire much less, and you can handle impact or effort without locking up.",
    "systema.pilar2": "Active Relaxation",
    "systema.pilar2Desc": "Being relaxed doesn't mean being weak—it means shedding the stiffness that slows you down. A tension-free body moves faster and doesn't telegraph its next move.",
    "systema.pilar3": "Natural Posture",
    "systema.pilar3Desc": "Keeping your back aligned and your feet grounded without rigid fighting stances, giving you balance to move in any direction.",
    "systema.pilar4": "Continuous Movement",
    "systema.pilar4Desc": "Never staying static or clashing force against force. If pushed or grabbed, you keep moving to step out of trouble and regain your balance.",
    "systema.hetsTitle": "Why is it called Systema HETS?",
    "systema.hetsDesc": "The name honors the ancient Het (Querandí) people who inhabited our Pampas region, uniting local roots with Russian martial art practice.",
    "systema.hetsTag": "Local roots · La Plata",
    "systema.modalClose": "Close",

    // Diego Ledesma
    "diego.name": "Diego Martín Ledesma",
    "diego.quote": "I have spent 40 years practicing and teaching martial arts with one simple goal: that training helps you know yourself better, care for your health, and walk through daily life with confidence.",
    "diego.p1": "Physical Education Professor graduated from the National University of La Plata (UNLP), with a postgraduate degree in Emotional Education, Master VIII Dan in ITF Taekwon-Do, and International Systema Instructor trained in Argentina, Russia (with Mikhail Ryabko), and Canada (with Vladimir Vasiliev).",
    "diego.p2": "Leading Systema HETS in La Plata, he combines four decades of university teaching and martial experience to offer a grounded, welcoming training space free of ego or unnecessary aggression. He also serves as Secretary General and Inclusion Director at ITF Integrity.",
    "diego.role1": "Physical Education Prof. (UNLP) & Emotional Education Postgrad",
    "diego.role2": "International Systema Instructor trained in Russia & Canada",
    "diego.role3": "Master VIII Dan ITF · Secretary General at ITF Integrity",
    "diego.btnHistory": "Read full biography",
    "diego.timelineHeader": "Formative Journey",
    "diego.timelineLoc": "La Plata · Buenos Aires",
    "diego.modalTitle": "Diego Martín Ledesma",
    "diego.modalP1": "Diego Martín Ledesma has dedicated 40 years to martial arts instruction and physical education. A graduate of the National University of La Plata (UNLP) specialized in Emotional Education, he holds the rank of Master VIII Dan in ITF Taekwon-Do and certification as an International Systema Instructor.",
    "diego.modalP2": "He traveled and trained directly in Russia—at Mikhail and Daniil Ryabko's school in Moscow—and in Canada—at Vladimir Vasiliev's headquarters in Toronto—, bringing authentic Russian martial arts instruction to La Plata.",
    "diego.modalP3": "As director of Systema HETS, his goal is for anyone—regardless of age or prior experience—to learn practical self-protection, release physical tension, and build genuine confidence.",
    "diego.modalClose": "Close",

    // Entrenamientos
    "ent.title": "Training in action",
    "ent.quote": "Real practice at the dojo and outdoors in La Plata.",
    "ent.viewDetail": "View photo",
    "ent.systemaPrefix": "Systema HETS",
    "ent.keysNav": "Arrows ← / →",
    "ent.keysClose": "ESC to close",
    "ent.noMedia": "Practice photo",

    // Clases y Sedes
    "clases.title": "Training schedule & dojo location",
    "clases.subtitle": "We train Monday through Friday in downtown La Plata. You can join at any time of the year, with no prior experience required.",
    "clases.groupTitle": "Group Classes",
    "clases.groupSub": "At the dojo · Monday to Friday",
    "clases.groupDesc": "Train alongside partners of different ages and levels in a respectful, supportive environment.",
    "clases.groupDetails": "We practice in rotating pairs so you learn how to handle grabs, falls, and real situations regardless of height or weight differences.",
    "clases.indTitle": "Private Sessions",
    "clases.indSub": "One-on-one · In-person or online",
    "clases.indDesc": "Individual sessions tailored to your schedule, pace, and personal goals.",
    "clases.indDetails": "Ideal if you have rotating work hours, want to deepen your self-protection and human development practice, or prefer progressive mobility work.",
    "clases.semTitle": "Weekend Seminars",
    "clases.semSub": "Special workshops & outdoors",
    "clases.semDesc": "Special weekend training days in parks, country estates, and visiting cities across Argentina.",
    "clases.semDetails": "Extended sessions exploring uneven terrain, stress management, self-protection against multiple opponents, and everyday objects.",
    "clases.groupsNote": "Small groups · Personal guidance",
    "clases.sedeTitle": "La Plata Dojo",
    "clases.btnDirections": "Open in Google Maps",
    "clases.fieldAddress": "Address",
    "clases.fieldDays": "Training days",
    "clases.fieldHours": "Hours",
    "clases.fieldLevel": "Prerequisites",

    // Testimonios
    "test.title": "What our students say",
    "test.subtitle": "Real experiences from students who train every week at our La Plata dojo.",
    "test.studentBadge": "La Plata Student",

    // Contacto y Conversión
    "contact.title": "Want to try a class?",
    "contact.desc": "Send Diego a message on WhatsApp to pick the day that works best for you. All you need to bring is a t-shirt and comfortable sweatpants.",
    "contact.btnTrial": "Book a trial class on WhatsApp",
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
    "footer.desc": "Russian martial art (Systema) school led by Diego Martín Ledesma in La Plata, Buenos Aires.",
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
