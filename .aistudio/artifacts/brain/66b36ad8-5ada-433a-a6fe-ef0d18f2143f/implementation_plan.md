# Plan de Refactorización: Diseño de Autor y Copywriting Rioplatense Natural — Systema HETS

## Objetivo
Transformar la landing page de **Systema HETS** en una web de diseño de autor más orgánica, limpia y humana, eliminando todos los patrones visuales y textuales de plantilla generada por IA y reescribiendo el copywriting en un español rioplatense directo, físico y auténtico.

---

## 1. Eliminación de "Patrones de IA" (UI/UX Editorial)

### A. Romper el exceso de cajas (Cards)
- **4 Pilares Iniciales (`FranjaPrincipios.tsx`)**: Presentar los 4 pilares (*Defensa Personal, Movimiento Consciente, Salud y Bienestar, Autoprotección*) completamente sueltos sobre el fondo con amplio respiro visual, separados únicamente por una línea divisoria sutil, sin recuadros ni fondos cerrados.
- **Secciones de Contenido (`ElSistema.tsx`, `Clases.tsx`, `FranjaLinaje.tsx`)**:
  - En **El Systema**, mantener los 3 conceptos (*Adaptación, Eficiencia, Conciencia*) sueltos como lista editorial limpia y transformar también el bloque *«¿Por qué se llama Systema HETS?»* en un bloque editorial abierto (sin tarjeta cerrada ni `SpotlightCard`), separado por filetes horizontales finos.
  - En **Sedes y Clases**, convertir las 3 modalidades (*Clases Grupales, Clases Individuales, Seminarios Intensivos*) de tarjetas encerradas en rectángulos a tres columnas editoriales abiertas sobre el fondo, separadas por líneas divisorias sutiles.
  - En **Franja de Linaje**, limpiar los recuadros recargados de las dos escuelas matrices para que respiren con un diseño editorial más sobrio y orgánico.

### B. Rediseñar "Trayectoria Formativa" (`DiegoLedesma.tsx`)
- Eliminar la tarjeta contenedora pesada y los rectángulos individuales de los 6 hitos (*40 Años, UNLP, ITF, RUS / CAN, HETS, Actualidad*) tanto en móvil como en escritorio.
- Reemplazarlos por una **lista editorial / línea de tiempo vertical limpia** separada únicamente por `border-bottom` finos (`border-[#C49A64]/20`), donde el hito u organización se alinea de forma clara con su descripción sin encerrar cada ítem en una caja.

### C. Borrar etiquetas superiores (Eyebrow / Kicker tags)
- Eliminar todos los textos pequeños en mayúsculas con `letter-spacing` ubicados encima de los títulos `H2` y subsecciones en toda la página:
  - Borrar *"METODOLOGÍA E IDENTIDAD"*, *"FUNDAMENTOS CONCEPTUALES"* e *"IDENTIDAD & RAÍZ TERRITORIAL"* en `ElSistema.tsx`.
  - Borrar *"DIRECCIÓN Y LINAJE"*, *"PERFIL ACADÉMICO Y MARCIAL"* y *"RYABKO · VASILIEV · HETS"* en `DiegoLedesma.tsx`.
  - Borrar *"REGISTRO DE PRÁCTICA"* y *"FLUIDEZ Y BIOMECÁNICA REAL"* en `Entrenamientos.tsx`.
  - Borrar *"MODALIDADES Y ESPACIOS DE PRÁCTICA"* y *"FORMATOS DE PRÁCTICA"* en `Clases.tsx`.
  - Borrar *"EXPERIENCIAS DE PRÁCTICA"* en `Testimonios.tsx`.
  - Borrar *"LINAJE & RAÍCES MARCIALES"* en `FranjaLinaje.tsx`.
  - Borrar *"DUDAS HABITUALES ANTES DE EMPEZAR"* en `PreguntasFrecuentes.tsx`.
  - Borrar *"PRIMERA CLASE DE PRUEBA"* en `ContactoConversion.tsx`.
- Dejar que los títulos `H2` hablen por sí solos con jerarquía tipográfica directa.

### D. Eliminar numeración robótica tipo dashboard
- Quitar todos los números decorativos (`01`, `02`, `03`, `04`, `01 — 03`, `01 / 03`, `01 / 02`, `01. Matriz`, `02. Matriz`) de:
  - Los 4 pilares en `FranjaPrincipios.tsx`.
  - Los 3 conceptos y el modal de pilares en `ElSistema.tsx`.
  - La trayectoria formativa y el perfil en `DiegoLedesma.tsx`.
  - Las fotos y carrusel de `Entrenamientos.tsx`.
  - Las 3 modalidades de práctica en `Clases.tsx`.
  - Las tarjetas de reseñas en `Testimonios.tsx`.
  - Las escuelas matrices en `FranjaLinaje.tsx`.

### E. Quitar comillas innecesarias y cursivas en textos introductorios
- Eliminar las comillas (`“...”`) y el estilo en cursiva (`italic`) de los textos introductorios y descriptivos debajo de los títulos:
  - Definición principal en `ElSistema.tsx` (`systema.definition`).
  - Subtítulo de `Clases.tsx` (`clases.subtitle`) y descripciones de las 3 modalidades (`m.descripcion`).
  - Bajada/cita en `DiegoLedesma.tsx` (`diego.quote`), presentándola como párrafo destacado de apertura sin comillas.

---

## 2. Simplificación de Estructura y Conversión

- **Hero (Portada — `Hero.tsx` y `LanguageContext.tsx`)**:
  - **CTA Principal sólido**: **«Reservar clase de prueba»** directo al WhatsApp de contacto.
  - **CTA Secundario**: Cambiar a **«Ver horarios y sede»** (con scroll suave directo a `#sedes-y-clases` / `#horarios`).
  - **Subtítulo del Hero**: Mencionar de forma directa y natural que son clases de arte marcial ruso (Systema) en **La Plata (Calle 22 entre 53 y 54)**, sin tecnicismos abstractos.
- **Horarios Unificados (`Clases.tsx`)**:
  - Mantener una única vista limpia, directa y fácil de escanear de lunes a viernes con acceso rápido a WhatsApp y ubicación en Google Maps, sin duplicaciones ni etiquetas superfluas.
- **Botón Flotante Discreto (`FloatingWhatsApp.tsx`)**:
  - Ajustar el botón flotante fijo en la esquina inferior derecha para que sea discreto, limpio y orgánico (sin animaciones estridentes ni aspecto de widget invasivo).

---

## 3. Humanización del Copywriting (Español Rioplatense Natural)

### A. Reescritura de los 4 Pilares y Descripciones (`LanguageContext.tsx` y `siteConfig.ts`)
Reemplazar el vocabulario de "diccionario médico" (*"economía biomecánica"*, *"soltura fascial"*, *"disipación del estrés"*, *"respiración diafragmática"*) por lenguaje físico, real y cercano:
- **Defensa Personal**: *"Aprendé a resolver situaciones reales e imprevistas con calma, usando el movimiento del cuerpo en lugar de la fuerza bruta."*
- **Movimiento Consciente**: *"Aprendé a absorber impactos sin lesionarte, soltá la tensión física acumulada y movete con naturalidad bajo presión."*
- **Salud y Bienestar**: *"Mejorá la postura, cuidá las articulaciones y sacate de encima la contractura y el estrés del día a día entrenando a tu ritmo."*
- **Autoprotección**: *"Usá la respiración para bajar las pulsaciones, pensar con claridad en momentos difíciles y recuperar la seguridad en tu propio cuerpo."*
- **El Systema y Sedes**: Ajustar los párrafos de presentación de *El Systema*, *Entrenamientos* y *Contacto* para que hablen de forma llana y directa sobre cómo es entrenar en el dojo.

### B. Testimonios Reales estilo Reseñas de Google Maps (`siteConfig.ts` y `Testimonios.tsx`)
Reescribir los 3 testimonios con voz auténtica de alumnos en Argentina, distintas extensiones de texto, sin comillas ni cursivas artificiales y sin repetir tecnicismos:
1. **Martín Soria** *(Texto medio — directo y cotidiano)*:
   > *"Arranqué hace tres años buscando algo para bajar un cambio después del consultorio y terminé encontrando un lugar increíble. Acá nadie compite ni se hace el guapo; entrenás en serio, aprendés a defenderte de verdad y salís de cada clase con el cuerpo mucho más suelto. Diego tiene una paciencia y una claridad enorme para enseñar."*
2. **Mariana Valenzuela** *(Texto más breve y espontáneo)*:
   > *"Fui a probar con un poco de miedo porque nunca había hecho artes marciales y pensé que iba a ser un ambiente pesado. Todo lo contrario: el grupo en La Plata es súper cálido, cada uno entrena a su ritmo y te cuidan un montón. Lo súper recomiendo."*
3. **Gastón Rossi** *(Texto más detallado — experiencia de entrenamiento)*:
   > *"Hice otras artes marciales varios años y siempre terminaba contracturado o dolorido de las rodillas. Lo que más me sorprendió de Systema HETS es cómo aprendés a caer al piso sin golpearte, a salir de agarres sin hacer fuerza de más y a usar la respiración cuando te apuran. Es un entrenamiento muy práctico que te sirve tanto adentro del dojo como en la calle."*
