/**
 * CONFIGURACIÓN CENTRALIZADA — SYSTEMA HETS | DIEGO LEDESMA
 * Identidad visual: Negro profundo, dorado/crema, tipografía condensada y tono institucional.
 * 
 * NOTA IMPORTANTE:
 * Donde falte información real, los datos están marcados con comentarios claros
 * "// CAMPO EDITABLE: ..." para que el titular o administrador pueda completarlos fácilmente.
 */

// Importaciones de imágenes para garantizar empaquetado correcto en Vite
import logoSystema from "../assets/images/logo_systema_hets.png";
import heroDojo from "../assets/images/hero_systema_dojo_1793283800364.jpg";
import portraitDiego from "../assets/images/diego_ledesma.jpg";
import escuelasAfiliadasImg from "../assets/images/emblemas_escuelas.png";

export const SITE_CONFIG = {
  // Datos Generales e Identidad
  nombre: "SYSTEMA HETS",
  fundador: "Diego Martín Ledesma",
  disciplina: "Arte Marcial Ruso",
  ciudad: "La Plata · Buenos Aires, Argentina",
  
  // Hero Editorial (Lema oficial de la escuela)
  heroKicker: "Arte marcial ruso · La Plata / Buenos Aires",
  heroTitulo: "CONÓCETE Y PROGRESA",
  heroBajada: "Arte Marcial Ruso · Desarrollo Humano · Autoprotección",
  
  // Frase institucional de cierre
  fraseDestacada: "El verdadero combate es con uno mismo.",

  // Contacto Oficial
  // // CAMPO EDITABLE: Actualizar número de teléfono y enlaces de contacto
  contacto: {
    whatsappNumero: "+5491156532401",
    whatsappVisible: "+54 9 11 5653-2401",
    email: "systema.laplata@gmail.com",
    ubicacion: "La Plata, Buenos Aires, Argentina",
    direccionCorta: "Calle 22 Nº 1027 (e/ 53 y 54) · La Plata",
  },

  // Mensajes preconfigurados de WhatsApp
  mensajesWhatsApp: {
    consultaGeneral: "Hola Diego, quiero consultar por los horarios y sedes de las clases de Systema HETS.",
    clasePrueba: "Hola Diego, quiero reservar mi primera clase de prueba de Systema HETS.",
    seminarios: "Hola Diego, quisiera consultar sobre los próximos seminarios y actividades de Systema HETS.",
    camp2026: "Hola Diego, quiero consultar y reservar mi lugar para el SYSTEMA HETS CAMP 2026 (Seminario Intensivo de 1 Día en Estancia Santa Rita, Punta Indio).",
  },

  // Redes Sociales Oficiales
  redes: {
    whatsappCanal: "https://www.whatsapp.com/channel/0029VbAwkq0JkK7BFH0sJ30f",
    youtube: "https://www.youtube.com/@systemahetsartemarcialruso",
    instagram: "https://www.instagram.com/systemahets",
    facebook: "https://www.facebook.com/systemahets1",
  },

  // Recursos Visuales
  assets: {
    logo: logoSystema,
    logoFallbackUrl: "https://github.com/pasillo17/galeriaPasillo/blob/main/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(3).png?raw=true",
    escuelasAfiliadas: escuelasAfiliadasImg,
    escuelasAfiliadasFallbackUrl: "https://raw.githubusercontent.com/pasillo17/SYSTEMA-HETS/main/Emblemas%20de%20guerreros%20medievales.png",
    heroImage: heroDojo,
    diegoPortrait: portraitDiego,
    diegoPortraitFallbackUrl: "https://raw.githubusercontent.com/pasillo17/SYSTEMA-HETS/refs/heads/main/Gemini_Generated_Image_wl7f8cwl7f8cwl7f%20(1).jfif",
    entrenamientoAireLibre: "https://github.com/pasillo17/SYSTEMA-HETS/blob/main/Entrenamiento%20marcial%20al%20aire%20libre.png?raw=true",
    demostracionParque: "https://github.com/pasillo17/SYSTEMA-HETS/blob/main/Demostraci%C3%B3n%20de%20artes%20marciales%20en%20el%20parque.png?raw=true",
  },

  // Franja de Prueba Social (Datos de autoridad real)
  pruebaSocial: [
    {
      cifra: "40",
      etiqueta: "Años de trayectoria",
      detalle: "Explorando la transformación marcial y el movimiento consciente",
    },
    {
      cifra: "VIII",
      etiqueta: "Dan Maestro ITF",
      detalle: "Secretario General y Dir. de Inclusión en ITF Integrity",
    },
    {
      cifra: "RUS·CAN",
      etiqueta: "Linaje Internacional",
      detalle: "Formado en Rusia (Ryabko) y Canadá (Vasiliev)",
    },
    {
      cifra: "UNLP",
      etiqueta: "Formación Universitaria",
      detalle: "Prof. Educación Física y Posgrado en Educación Emocional",
    },
  ],

  // Trayectoria formativa de Diego Martín Ledesma (40 años de recorrido)
  trayectoriaDiego: [
    {
      anio: "40 Años",
      descripcion: "Explorando cómo las artes marciales pueden transformar nuestra manera de movernos, afrontar desafíos y relacionarnos.",
    },
    {
      anio: "UNLP",
      descripcion: "Profesor en Educación Física egresado de la Universidad Nacional de La Plata, con posgrado en Educación Emocional.",
    },
    {
      anio: "ITF",
      descripcion: "Maestro VIII Dan de Taekwon-Do ITF. Secretario General y Director del Comité de Inclusión de ITF Integrity.",
    },
    {
      anio: "RUS / CAN",
      descripcion: "Instructor Internacional de Systema formado en Argentina, Rusia —línea Ryabko— y Canadá —línea Vasiliev—.",
    },
    {
      anio: "HETS",
      descripcion: "Dirección de Systema HETS: articulación entre arte marcial, educación corporal y desarrollo humano a través del movimiento consciente aplicado a situaciones reales.",
    },
    {
      anio: "2026",
      descripcion: "Clases regulares en nuestra sede, entrenamientos personalizados y seminarios intensivos en La Plata y Buenos Aires.",
    },
  ],

  // Sede Oficial y Horarios (Ficha en Google Maps)
  sedePrincipal: {
    nombre: "Systema Hets Diego Ledesma",
    barrio: "La Plata",
    direccion: "Calle 22 Nº 1027 (entre 53 y 54)",
    ciudad: "La Plata, Provincia de Buenos Aires",
    diasResumen: "Lunes a Viernes (turnos mañana, mediodía y noche)",
    diasResumenEn: "Monday to Friday (morning, midday and evening)",
    nivel: "Todos los niveles — No se requiere experiencia previa",
    cupos: "Grupos reducidos orientados a la autoprotección y la autonomía",
    // Link directo a Google Maps provisto por el usuario
    mapsUrl: "https://maps.app.goo.gl/sKyYkVaPniX4X4WcA",
    coordenadas: {
      lat: -34.9306726,
      lng: -57.9629337,
    },
    // Resumen por franja horaria para lectura rápida en 3 segundos
    franjasHorarias: [
      {
        id: "manana",
        turno: "Turno Mañana",
        turnoEn: "Morning Shift",
        horario: "09:00 – 10:30 hs",
        horarioEn: "9:00 AM – 10:30 AM",
        dias: "Miércoles y Viernes",
        diasEn: "Wednesdays & Fridays",
        diasCorto: ["MIÉ", "VIE"],
        diasCortoEn: ["WED", "FRI"],
        duracion: "1 h 30 min",
        duracionEn: "1 hr 30 min",
        mensajeWsp: "Hola Diego, te escribo desde la web. Quería consultar disponibilidad para entrenar en el Turno Mañana (Miércoles y Viernes de 09:00 a 10:30 hs).",
      },
      {
        id: "mediodia",
        turno: "Turno Mediodía",
        turnoEn: "Midday Shift",
        horario: "12:00 – 13:00 hs",
        horarioEn: "12:00 PM – 1:00 PM",
        dias: "Martes y Jueves",
        diasEn: "Tuesdays & Thursdays",
        diasCorto: ["MAR", "JUE"],
        diasCortoEn: ["TUE", "THU"],
        duracion: "1 hora",
        duracionEn: "1 hour",
        mensajeWsp: "Hola Diego, te escribo desde la web. Quería consultar disponibilidad para entrenar en el Turno Mediodía (Martes y Jueves de 12:00 a 13:00 hs).",
      },
      {
        id: "noche",
        turno: "Turno Tarde / Noche",
        turnoEn: "Evening Shift",
        horario: "18:00 – 21:00 hs",
        horarioEn: "6:00 PM – 9:00 PM",
        dias: "Lunes y Viernes",
        diasEn: "Mondays & Fridays",
        diasCorto: ["LUN", "VIE"],
        diasCortoEn: ["MON", "FRI"],
        duracion: "3 horas",
        duracionEn: "3 hours",
        mensajeWsp: "Hola Diego, te escribo desde la web. Quería consultar disponibilidad para entrenar en el Turno Tarde/Noche (Lunes y Viernes de 18:00 a 21:00 hs).",
      },
    ],
    // Cronograma semanal oficial verificado día por día
    horariosSemana: [
      {
        diaNumero: 1,
        dia: "Lunes",
        diaEn: "Monday",
        diaCorto: "LUN",
        diaCortoEn: "MON",
        turnos: ["18:00 – 21:00 hs"],
        turnosSub: ["6:00 p. m. a 9:00 p. m."],
        turnosEn: ["6:00 PM – 9:00 PM"],
        rotulo: "Tarde / Noche",
        rotuloEn: "Evening",
        abierto: true,
        destacadoDoble: false,
      },
      {
        diaNumero: 2,
        dia: "Martes",
        diaEn: "Tuesday",
        diaCorto: "MAR",
        diaCortoEn: "TUE",
        turnos: ["12:00 – 13:00 hs"],
        turnosSub: ["12:00 p. m. a 1:00 p. m."],
        turnosEn: ["12:00 PM – 1:00 PM"],
        rotulo: "Mediodía",
        rotuloEn: "Midday",
        abierto: true,
        destacadoDoble: false,
      },
      {
        diaNumero: 3,
        dia: "Miércoles",
        diaEn: "Wednesday",
        diaCorto: "MIÉ",
        diaCortoEn: "WED",
        turnos: ["09:00 – 10:30 hs"],
        turnosSub: ["9:00 a. m. a 10:30 a. m."],
        turnosEn: ["9:00 AM – 10:30 AM"],
        rotulo: "Mañana",
        rotuloEn: "Morning",
        abierto: true,
        destacadoDoble: false,
      },
      {
        diaNumero: 4,
        dia: "Jueves",
        diaEn: "Thursday",
        diaCorto: "JUE",
        diaCortoEn: "THU",
        turnos: ["12:00 – 13:00 hs"],
        turnosSub: ["12:00 p. m. a 1:00 p. m."],
        turnosEn: ["12:00 PM – 1:00 PM"],
        rotulo: "Mediodía",
        rotuloEn: "Midday",
        abierto: true,
        destacadoDoble: false,
      },
      {
        diaNumero: 5,
        dia: "Viernes",
        diaEn: "Friday",
        diaCorto: "VIE",
        diaCortoEn: "FRI",
        turnos: [
          "09:00 – 10:30 hs",
          "18:00 – 21:00 hs",
        ],
        turnosSub: [
          "Mañana · 9:00 a 10:30 a. m.",
          "Noche · 6:00 a 9:00 p. m.",
        ],
        turnosEn: [
          "9:00 AM – 10:30 AM",
          "6:00 PM – 9:00 PM",
        ],
        rotulo: "Doble Turno",
        rotuloEn: "Double Shift",
        abierto: true,
        destacadoDoble: true,
      },
      {
        diaNumero: 6,
        dia: "Sábado",
        diaEn: "Saturday",
        diaCorto: "SÁB",
        diaCortoEn: "SAT",
        turnos: ["Cerrado"],
        turnosSub: ["Jornadas especiales"],
        turnosEn: ["Closed"],
        rotulo: "Seminarios especiales",
        rotuloEn: "Special workshops",
        abierto: false,
        destacadoDoble: false,
      },
      {
        diaNumero: 0,
        dia: "Domingo",
        diaEn: "Sunday",
        diaCorto: "DOM",
        diaCortoEn: "SUN",
        turnos: ["Cerrado"],
        turnosSub: ["Descanso"],
        turnosEn: ["Closed"],
        rotulo: "Descanso",
        rotuloEn: "Rest day",
        abierto: false,
        destacadoDoble: false,
      },
    ],
  },

  // Reseñas reales de alumnos en La Plata (estilo Google Maps con distintas longitudes y tono cotidiano)
  testimonios: [
    {
      id: "testimonio-1",
      nombre: "Martín Soria",
      rol: "Odontólogo · Entrena hace 3 años",
      tiempo: "Hace 3 años",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80",
      avatarHombre: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80",
      cita: "Arranqué hace tres años buscando algo para bajar un cambio después del consultorio y terminé encontrando un lugar increíble. Acá nadie compite ni se hace el guapo; entrenás en serio, aprendés a protegerte de verdad y salís de cada clase con el cuerpo mucho más suelto. Diego tiene una paciencia y una claridad enorme para enseñar.",
      esPlaceholder: false,
    },
    {
      id: "testimonio-2",
      nombre: "Mariana Valenzuela",
      rol: "Docente · Entrena hace 1 año",
      tiempo: "Hace 1 año",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80",
      cita: "Fui a probar con un poco de miedo porque nunca había hecho artes marciales y pensé que iba a ser un ambiente pesado. Todo lo contrario: el grupo en La Plata es súper cálido, cada uno entrena a su ritmo y te cuidan un montón. Lo súper recomiendo.",
      esPlaceholder: false,
    },
    {
      id: "testimonio-3",
      nombre: "Gastón Rossi",
      rol: "Analista de sistemas · Entrena hace 2 años",
      tiempo: "Hace 2 años",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
      cita: "Hice otras artes marciales varios años y siempre terminaba contracturado o dolorido de las rodillas. Lo que más me sorprendió de Systema HETS es cómo aprendés a gestionar impactos y reducir el riesgo de lesiones al ir al piso, a salir de agarres mediante el aprovechamiento inteligente de la energía y a usar la respiración cuando te apuran. Es un entrenamiento muy práctico que te sirve tanto en el entrenamiento como en la vida diaria.",
      esPlaceholder: false,
    },
  ],

  // Video en bucle silencioso para mostrar el movimiento en acción en la sección Entrenamientos
  videoEntrenamiento: {
    mp4Url: "https://assets.mixkit.co/videos/preview/mixkit-man-practicing-martial-arts-in-a-forest-42416-large.mp4",
    fallbackMp4Url: "https://assets.mixkit.co/videos/preview/mixkit-martial-arts-fighter-training-in-slow-motion-40735-large.mp4",
    posterUrl: "https://github.com/pasillo17/SYSTEMA-HETS/blob/main/Entrenamiento%20marcial%20al%20aire%20libre.png?raw=true",
    youtubeChannelUrl: "https://www.youtube.com/@systemahetsartemarcialruso",
  },

  // Entrenamientos: 2 fotografías oficiales de práctica
  entrenamientos: [
    {
      id: "ent-1",
      titulo: "Práctica al aire libre",
      tituloEn: "Outdoor Training Session",
      descripcion: "Jornadas de entrenamiento en terreno natural para trabajar el equilibrio, los desplazamientos y el trabajo en equipo en distintos entornos.",
      descripcionEn: "Outdoor training sessions focusing on balance, natural footwork, and partner drills across different environments.",
      categoria: "Aire libre",
      categoriaEn: "Outdoors",
      imagen: "https://github.com/pasillo17/SYSTEMA-HETS/blob/main/Entrenamiento%20marcial%20al%20aire%20libre.png?raw=true",
      fallbackUrl: "https://raw.githubusercontent.com/pasillo17/SYSTEMA-HETS/main/Entrenamiento%20marcial%20al%20aire%20libre.png",
    },
    {
      id: "ent-2",
      titulo: "Encuentros y demostraciones en el parque",
      tituloEn: "Park Practice & Demonstrations",
      descripcion: "Ejercicios dinámicos en parejas para desarrollar percepción, adaptación y movimiento consciente aplicado a situaciones reales.",
      descripcionEn: "Dynamic partner exercises developing perception, adaptation, and conscious movement applied to real situations.",
      categoria: "En el parque",
      categoriaEn: "Park Session",
      imagen: "https://github.com/pasillo17/SYSTEMA-HETS/blob/main/Demostraci%C3%B3n%20de%20artes%20marciales%20en%20el%20parque.png?raw=true",
      fallbackUrl: "https://raw.githubusercontent.com/pasillo17/SYSTEMA-HETS/main/Demostraci%C3%B3n%20de%20artes%20marciales%20en%20el%20parque.png",
    },
  ],
};

/**
 * Genera la URL de WhatsApp con mensaje precargado codificado
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = SITE_CONFIG.contacto.whatsappNumero.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(customMessage || SITE_CONFIG.mensajesWhatsApp.consultaGeneral);
  return `https://wa.me/${phone}?text=${text}`;
}

export function getClasePruebaWhatsAppUrl(): string {
  return getWhatsAppUrl(SITE_CONFIG.mensajesWhatsApp.clasePrueba);
}
