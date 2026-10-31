export interface Sede {
  id: string;
  nombre: string;
  subtitulo: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  email: string;
  horarios: {
    dias: string;
    clases: { hora: string; disciplina: string; nivel: string }[];
  }[];
  instalaciones: string[];
  transporte: string;
}

export interface Instructor {
  id: string;
  nombre: string;
  rol: string;
  rango: string;
  experiencia: string;
  especialidad: string;
  descripcion: string;
  certificaciones: string[];
  imagen?: string;
}

export interface GalleryItem {
  id: string;
  titulo: string;
  categoria: 'entrenamiento' | 'seminarios' | 'armas' | 'biomecanica' | 'exhibiciones';
  descripcion: string;
  lugar: string;
  fecha: string;
  imagen: string;
}

export const REDES_SOCIALES = {
  whatsappCanal: "https://www.whatsapp.com/channel/0029VbAwkq0JkK7BFH0sJ30f",
  facebook: "https://www.facebook.com/systemahets1",
  youtube: "https://www.youtube.com/@systemahetsartemarcialruso",
  logoUrl: "/src/assets/images/logo_systema_hets.png",
  logoExternalUrl: "https://github.com/pasillo17/galeriaPasillo/blob/main/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(2).png?raw=true"
};

export const MANIFIESTO_FUNDAMENTAL = "Systema es mucho más que defensa personal. Es un enfoque de autoconocimiento que integra herramientas para el desarrollo corporal, el movimiento consciente y el mejoramiento integral de la persona.";

export const SYSTEMA_HISTORIA = [
  {
    periodo: "Siglo X – Siglo XIX",
    titulo: "01. Raíces Guerreras Eslavas y Tradición Cosaca",
    texto: "Los orígenes de Systema se entrelazan con la historia de los antiguos guerreros eslavos (Bogatyres) y las comunidades cosacas de la estepa. En un territorio asediado constantemente desde Oriente y Occidente, los combatientes no podían depender de posturas rígidas ni técnicas estereotipadas. Desarrollaron un método de supervivencia integral donde la respiración constante, la movilidad instintiva sobre cualquier terreno y el aprovechamiento de la fuerza del oponente eran primordiales.",
    detalles: [
      "Supervivencia en terrenos extremos (nieve, bosque, pantano).",
      "Combate cuerpo a cuerpo y frente a múltiples agresores simultáneos.",
      "Uso de armas naturales: cuchillo de campo, bastón y látigo cosaco (nagaika)."
    ]
  },
  {
    periodo: "1917 – 1980s",
    titulo: "02. Laboratorios Militares y Desarrollo para Spetsnaz",
    texto: "Tras la Revolución de 1917, el gobierno soviético convocó a científicos de biomecánica, médicos deportivos y maestros marciales para sistematizar las artes de combate más eficientes. Investigadores como Nikolai Bernstein (pionero de la fisiología del movimiento) y Viktor Spiridonov aislaron los principios neurofisiológicos de la reacción humana bajo estrés extremo. Este conocimiento fue clasificado como secreto de estado y reservado exclusivamente para las unidades de élite Spetsnaz, escoltas presidenciales y servicios de inteligencia.",
    detalles: [
      "Estudio de la biomecánica motora y disipación del dolor mediante la respiración.",
      "Entrenamiento psicológico para actuar con serenidad bajo amenaza de muerte.",
      "Eliminación de formas fijas (Katas): el combate real nunca es predecible."
    ]
  },
  {
    periodo: "1990 – Presente",
    titulo: "03. Desclasificación, Legado Global y Enfoque HETS",
    texto: "Con la disolución de la Unión Soviética, el Coronel Mikhail Ryabko y Vladimir Vasiliev desclasificaron y enseñaron este arte al público internacional. En Systema HETS asumimos esta herencia desde su verdadera raíz humanista: no como un método para alimentar la violencia o la agresividad, sino como una disciplina integral de autoconocimiento, salud postural, respiración regenerativa y libertad de movimiento ante las tensiones del mundo contemporáneo.",
    detalles: [
      "Apertura de dojos y canales formativos oficiales en la comunidad hispana.",
      "Enfoque en la preservación de la vida: destruir la agresión, no al ser humano.",
      "Método adaptativo accesible para civiles, agentes de seguridad, deportistas y familias."
    ]
  }
];

export const FUNDAMENTOS_DATA = [
  {
    id: "respiracion",
    numero: "01",
    titulo: "Respiración (Дыхание)",
    lema: "La respiración es el combustible del cuerpo y el ancla del autoconocimiento.",
    descripcion: "La regla cardinal de Systema: nunca contengas la respiración. Bajo dolor, sorpresa o esfuerzo extremo, el cuerpo humano tiende instintivamente a bloquear el diafragma, acumulando tensión y ácido láctico. En Systema HETS entrenamos respiraciones continuas, respiración en ráfaga (burst breathing) y respiración diafragmática para metabolizar el estrés en tiempo real y recobrar la calma instantánea.",
    puntosClave: [
      "Inhalación nasal y exhalación bucal sin interrupciones.",
      "Eliminación del pánico y regulación del ritmo cardíaco bajo estrés.",
      "Capacidad de recibir impactos expulsando la onda de choque a través del aire.",
      "Recuperación acelerada del cansancio físico en segundos."
    ]
  },
  {
    id: "relajacion",
    numero: "02",
    titulo: "Relajación (Расслаbление)",
    lema: "La tensión es debilidad; el cuerpo relajado reacciona a la velocidad del pensamiento.",
    descripcion: "No es pasividad ni flojedad, sino ausencia de tensión parásita. Un cuerpo rígido es frágil como el cristal: se fatiga rápido, es fácil de desequilibrar y absorbe todo el daño de los impactos. Un cuerpo relajado absorbe la energía como el agua, redirige trayectorias y permite golpear con masa pura sin telegrafiar intenciones.",
    puntosClave: [
      "Detección y expulsión consciente de microtensiones corporales.",
      "Fluidez articular: los hombros, cadera y cuello permanecen libres.",
      "Ahorro de energía metabólica durante enfrentamientos prolongados.",
      "Capacidad de reaccionar desde cualquier postura sin preparación previa."
    ]
  },
  {
    id: "postura",
    numero: "03",
    titulo: "Estructura y Postura (Позиция)",
    lema: "La columna erguida y libre de ataduras es el eje del poder natural.",
    descripcion: "Systema prescinde de posturas fijas o guardias estereotipadas. Se fundamenta en la postura biológica neutral: columna erguida, pelvis centrada, rodillas elásticas y hombros caídos. Desde esta estructura natural, el practicante puede caminar, correr, defenderse o caer sin forzar las articulaciones ni perder el equilibrio.",
    puntosClave: [
      "Sin posturas rígidas de combate que delaten intenciones.",
      "Uso de la gravedad y la palanca ósea en lugar de fuerza muscular bruta.",
      "Protección constante de la línea media y órganos vitales.",
      "Transición espontánea entre de pie, rodillas y combate en el suelo."
    ]
  },
  {
    id: "movimiento",
    numero: "04",
    titulo: "Movimiento Consciente y Continuo (Движение)",
    lema: "El agua nunca choca con la roca: fluye y encuentra su camino.",
    descripcion: "El estancamiento significa vulnerabilidad. En Systema no bloqueamos los golpes con choque directo de fuerza contra fuerza; nos fundimos con la dirección del ataque y guiamos al atacante hacia su propia caída o desequilibrio. Es movimiento consciente que armoniza el cuerpo con su entorno.",
    puntosClave: [
      "Redirección de fuerza mediante curvas y espirales biomecánicas.",
      "Movimiento perpetuo que desorienta los puntos de referencia del rival.",
      "Caídas y rodamientos sobre tatami, cemento o tierra sin impacto óseo.",
      "Resolución instintiva frente a múltiples atacantes simultáneos."
    ]
  }
];

export const INSTRUCTORES_DATA: Instructor[] = [
  {
    id: "alexei-voronin",
    nombre: "Alexei Voronin",
    rol: "Director Técnico & Fundador HETS",
    rango: "Certificado Senior HQ Moscú / Toronto",
    experiencia: "24 años de práctica marcial · 16 años dedicado a Systema",
    especialidad: "Biomecánica del movimiento consciente y acondicionamiento táctico",
    descripcion: "Pionero en la divulgación de Systema en el ámbito hispanohablante. Concibe el arte como un camino de autoconocimiento y salud integral donde la serenidad mental prevalece sobre cualquier impulso agresivo.",
    certificaciones: [
      "Certificación Internacional Oficial Systema HQ (Toronto, Canadá)",
      "Diplomado en Biomecánica y Fisiología del Movimiento",
      "Especialista en Manejo y Desarme de Armas Blancas",
      "Instructor de Respiración Psicofisiológica Aplicada"
    ],
    imagen: "/src/assets/images/head_instructor_portrait_1793283801877.jpg"
  },
  {
    id: "elena-baranova",
    nombre: "Elena Baranova",
    rol: "Instructora Senior & Coordinadora de Salud",
    rango: "Instructora Certificada Nivel II",
    experiencia: "14 años de experiencia en artes marciales y biomecánica",
    especialidad: "Respiración táctica, movilidad restaurativa y autodefensa instintiva",
    descripcion: "Especialista en la aplicación del Systema para la gestión del estrés crónico, autodefensa sin necesidad de fuerza física y biomecánica femenina. Dirige los programas de respiración profunda y los talleres especiales.",
    certificaciones: [
      "Certificación de Instructor Systema Ryabko Lineage",
      "Especialista en Recuperación de Trauma Postural",
      "Instructora de Defensa Personal Táctica Urbana"
    ]
  },
  {
    id: "marcos-delgado",
    nombre: "Marcos Delgado",
    rol: "Instructor de Sedes y Combate en Suelo",
    rango: "Instructor Certificado Nivel I",
    experiencia: "11 años de práctica marcial continua",
    especialidad: "Transiciones al suelo, rodamientos dinámicos y desarme a corta distancia",
    descripcion: "Con amplia experiencia previa en lucha y artes de agarre, Marcos encontró en Systema la total ausencia de restricciones y lesiones articulares. Responsable de la formación técnica en sedes.",
    certificaciones: [
      "Instructor Certificado por la Asociación Systema HETS",
      "Especialista en Caídas y Rodamientos en Superficies Duras",
      "Primeros Auxilios Tácticos (Stop the Bleed)"
    ]
  },
  {
    id: "nikolai-petrov",
    nombre: "Nikolai Petrov",
    rol: "Maestro Invitado & Consultor Táctico",
    rango: "Veterano Instructor Militar Honorífico",
    experiencia: "30+ años en artes de combate y supervivencia",
    especialidad: "Defensa con armas tradicionales (cuchillo militar, bastón, nagaika)",
    descripcion: "Asesor permanente en seminarios internacionales y campamentos al aire libre. Su metodología conecta las raíces históricas de los cosacos con las necesidades de supervivencia moderna.",
    certificaciones: [
      "Master Class Systema Ryabko Veteran",
      "Consultor de Supervivencia en Climas Adversos"
    ]
  }
];

export const SEDES_DATA: Sede[] = [
  {
    id: "sede-central",
    nombre: "Sede Central · Dojo Metropolitano",
    subtitulo: "Centro Integral de Biomecánica y Movimiento Consciente",
    direccion: "Av. del Libertador 4820, Piso 2 (Zona Centro)",
    ciudad: "Distrito Central",
    telefono: "+34 912 345 678",
    email: "central@systemahets.com",
    horarios: [
      {
        dias: "Lunes y Miércoles",
        clases: [
          { hora: "08:00 - 09:30", disciplina: "Respiración y Movilidad Matutina", nivel: "Todos los niveles" },
          { hora: "18:30 - 20:00", disciplina: "Fundamentos y Biomecánica", nivel: "Iniciación / Intermedio" },
          { hora: "20:00 - 21:30", disciplina: "Combate Fluido y Trabajo en Suelo", nivel: "Avanzado" }
        ]
      },
      {
        dias: "Martes y Jueves",
        clases: [
          { hora: "19:00 - 20:30", disciplina: "Defensa Personal Táctica y Armas", nivel: "Todos los niveles" },
          { hora: "20:30 - 22:00", disciplina: "Sparring Lento y Redirección de Masa", nivel: "Intermedio / Avanzado" }
        ]
      },
      {
        dias: "Sábados",
        clases: [
          { hora: "10:30 - 13:00", disciplina: "Masterclass Intensiva de Fin de Semana", nivel: "Abierto a todos" }
        ]
      }
    ],
    instalaciones: [
      "220 m² de tatami continuo de doble densidad para caídas seguras",
      "Arsenal completo de armas de entrenamiento homologadas (madera y aluminio romo)",
      "Zona de acondicionamiento de respiración y suspensión corporal",
      "Vestuarios amplios con duchas y taquillas individuales"
    ],
    transporte: "Metro Línea 1 y 4 (Estación Central a 100m) · Parking público concertado."
  },
  {
    id: "sede-norte",
    nombre: "Sede Norte · Dojo Táctico",
    subtitulo: "Espacio de Entrenamiento Funcional y Movimiento Libre",
    direccion: "Calle San Jerónimo 115, Nave 4 (Polígono Tecnológico)",
    ciudad: "Zona Norte",
    telefono: "+34 914 987 654",
    email: "norte@systemahets.com",
    horarios: [
      {
        dias: "Lunes, Miércoles y Viernes",
        clases: [
          { hora: "19:00 - 20:30", disciplina: "Systema Integral: Postura y Respuesta", nivel: "Iniciación / Regular" },
          { hora: "20:30 - 22:00", disciplina: "Múltiples Oponentes y Entornos Confinados", nivel: "Intermedio / Avanzado" }
        ]
      },
      {
        dias: "Sábados",
        clases: [
          { hora: "11:00 - 13:00", disciplina: "Taller de Cuchillo y Desarme Reactivo", nivel: "Todos los niveles" }
        ]
      }
    ],
    instalaciones: [
      "160 m² de espacio diáfano con suelo de madera noble tratada",
      "Simulador de espacios estrechos (vehículos, pasillos y esquinas)",
      "Zona de impacto con sacos pesados de cuero y colchonetas de dispersión"
    ],
    transporte: "Bus urbano líneas 24 y 52 · Acceso directo desde Autovía M-30."
  },
  {
    id: "sede-sur",
    nombre: "Sede Sur & Campo Natural",
    subtitulo: "Entrenamiento Outdoor y Biomecánica en Terreno Real",
    direccion: "Camino de las Encinas s/n (Pinar de Valdelasfuentes)",
    ciudad: "Zona Sur / Forestal",
    telefono: "+34 916 555 432",
    email: "sur@systemahets.com",
    horarios: [
      {
        dias: "Martes y Jueves",
        clases: [
          { hora: "18:00 - 19:30", disciplina: "Systema Tradicional en Sala", nivel: "Todos los niveles" }
        ]
      },
      {
        dias: "Domingos (Práctica al Aire Libre)",
        clases: [
          { hora: "09:30 - 12:30", disciplina: "Seminario de Bosque: Caídas en Tierra y Supervivencia", nivel: "Abierto a todos" }
        ]
      }
    ],
    instalaciones: [
      "Dojo rústico cubierto con vigas de madera de roble",
      "Parcela privada de bosque natural de 4.000 m² para prácticas al aire libre",
      "Entrenamiento en pendientes, rocas y cursos de agua naturales"
    ],
    transporte: "Cercanías Renfe C-4 a 5 minutos a pie · Amplio aparcamiento gratuito."
  }
];

export const GALERIA_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    titulo: "Fluidez Biomecánica y Desequilibrio",
    categoria: "entrenamiento",
    descripcion: "Práctica de redirección de masa corporal sin colisión de fuerza. El defensor conduce el peso del oponente mediante contacto sutil y movimiento continuo en el dojo de madera.",
    lugar: "Sede Central · Dojo Metropolitano",
    fecha: "Temporada Actual",
    imagen: "/src/assets/images/hero_systema_dojo_1793283800364.jpg"
  },
  {
    id: "gal-2",
    titulo: "Defensa Táctica frente a Cuchillo",
    categoria: "armas",
    descripcion: "Entrenamiento dinámico de desarme y control de hoja a distancia cero. El trabajo se realiza relajado, sintiendo el filo sin entrar en pánico ni tensión muscular.",
    lugar: "Sede Norte · Sala de Armas",
    fecha: "Seminario de Armas HETS",
    imagen: "/src/assets/images/gallery_knife_training_1793283802821.jpg"
  },
  {
    id: "gal-3",
    titulo: "Seminario de Supervivencia y Movimiento en Bosque",
    categoria: "seminarios",
    descripcion: "Práctica en terreno irregular: rodamientos sobre hojas y raíces, adaptación al frío y caídas seguras sin tatami. Conectando con la herencia cosaca del arte.",
    lugar: "Sede Sur · Pinar de Valdelasfuentes",
    fecha: "Encuentro de Otoño HETS",
    imagen: "/src/assets/images/gallery_outdoor_seminar_1793283802865.jpg"
  },
  {
    id: "gal-4",
    titulo: "Respiración y Disipación de Tensión en Grupo",
    categoria: "biomecanica",
    descripcion: "Sesión matinal de control respiratorio y descarga diafragmática. Los alumnos aprenden a liberar la rigidez postural antes de iniciar el contacto marcial.",
    lugar: "Sede Central · Sala de Movimiento",
    fecha: "Práctica Matutina",
    imagen: "/src/assets/images/gallery_breath_work_1793283802095.jpg"
  },
  {
    id: "gal-5",
    titulo: "Combate y Rodamientos en el Suelo (Ground Flow)",
    categoria: "biomecanica",
    descripcion: "Transiciones fluidas en el suelo: aprender a rodar y levantarse sin usar las manos, absorbiendo peso y encontrando salidas espontáneas de llaves complejas.",
    lugar: "Sede Central · Tatami Principal",
    fecha: "Módulo de Suelo HETS",
    imagen: "/src/assets/images/gallery_ground_flow_1793283816523.jpg"
  },
  {
    id: "gal-6",
    titulo: "Demostración Internacional de Maestros y Múltiples Oponentes",
    categoria: "exhibiciones",
    descripcion: "Exhibición magistral en auditorio: resolución frente a 4 agresores coordinados simultáneos, aplicando el principio de flujo y cobertura circular continua.",
    lugar: "Auditorio Internacional de Artes Marciales",
    fecha: "Encuentro Internacional Systema HETS",
    imagen: "/src/assets/images/gallery_exhibition_1793283817104.jpg"
  }
];

export const TESTIMONIOS_DATA = [
  {
    nombre: "Dr. Carlos Menéndez",
    cargo: "Cirujano Traumatólogo",
    tiempo: "4 años practicando en HETS",
    cita: "Como médico, la comprensión de la biomecánica en Systema HETS me asombró desde el primer día. No forzamos ninguna articulación, aprendemos a soltar el estrés quirúrgico diario y no tengo lesiones a pesar de entrenar combate intenso semanalmente."
  },
  {
    nombre: "Valeria Santillana",
    cargo: "Arquitecta y Practicante de Defensa Personal",
    tiempo: "2 años practicando",
    cita: "Venía con miedo a los deportes de contacto por experiencias agresivas en otras disciplinas. En Systema HETS no hay egos ni cinturones; aprendí a respirar ante situaciones límite y a moverme con calma y contundencia sin depender de la fuerza física."
  },
  {
    nombre: "Ignacio Rivas",
    cargo: "Agente de Seguridad y Custodia",
    tiempo: "5 años practicando",
    cita: "El trabajo de desarme de cuchillo y la serenidad bajo estrés que te da Systema no la enseña ningún otro arte marcial moderno. Es real, sobrio y preserva tu vida y la de los demás."
  }
];

export const FAQS_DATA = [
  {
    q: "¿Por qué afirman que Systema es mucho más que defensa personal?",
    a: "Porque el combate es solo el laboratorio más exigente para poner a prueba tus reacciones psicofísicas. Las herramientas de respiración, soltura fascial y alineación postural que desarrollas en el dojo se aplican las 24 horas del día: para disolver el estrés laboral, superar el miedo, prevenir dolores de espalda y vivir con mayor libertad y autoconocimiento."
  },
  {
    q: "¿Necesito experiencia previa en artes marciales para empezar?",
    a: "No. De hecho, muchos de nuestros mejores alumnos nunca habían pisado un dojo. Dado que en Systema no aprendemos katas ni posturas artificiales, trabajamos directamente con la fisiología natural de tu propio cuerpo."
  },
  {
    q: "¿Por qué no existen cinturones ni grados de colores en Systema HETS?",
    a: "Systema considera que los cinturones fomentan el ego, la rigidez mental y una jerarquía artificial. Tu verdadero nivel se demuestra en tu capacidad de permanecer relajado, respirar bajo presión y adaptarte al movimiento en cada instante."
  },
  {
    q: "¿En qué consiste la primera clase de prueba gratuita?",
    a: "Es una sesión introductoria guiada de 90 minutos donde aprenderás los principios básicos de respiración, soltura articular y caídas suaves. Un instructor veterano te acompañará en todo momento a tu propio ritmo."
  },
  {
    q: "¿Qué indumentaria o equipo necesito traer el primer día?",
    a: "Solo ropa deportiva cómoda (pantalón largo tipo chándal o táctico y camiseta lisa de algodón). Entrenamos descalzos sobre tatami o con calzado ligero de suela fina para suelo de madera."
  },
  {
    q: "¿Hay límite de edad o condición física?",
    a: "No hay límite de edad. Tenemos alumnos desde los 18 hasta más de 70 años. Systema sana el cuerpo en lugar de desgastarlo, adaptándose a las condiciones individuales de cada practicante."
  }
];
