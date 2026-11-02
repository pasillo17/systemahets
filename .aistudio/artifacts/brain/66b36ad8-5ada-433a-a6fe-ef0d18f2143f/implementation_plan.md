# Actualización de Textos: Movimiento Consciente en El Systema y Los Pilares

Integración de los textos de referencia institucionales sobre **Movimiento Consciente**, **adaptación** y **autoprotección** en la sección **El Systema** y en la franja de **Los 3 Pilares**, manteniendo el **Hero** exactamente como está.

## User Review & Critical Decisions

> [!IMPORTANT]
> Se respetan las decisiones confirmadas para focalizar los nuevos textos sin alterar la portada (Hero).

- **Secciones a actualizar**: Se integrarán los textos principalmente en **El Systema** (cuerpo principal, síntesis destacada y modal de los 4 pilares) y en **Los 3 Pilares** (*Autoprotección*, *Movimiento Consciente*, *Salud y Desarrollo Humano*).
- **Hero sin cambios**: El encabezado principal (*Hero*) permanece intacto en estructura, textos, lemas y botones.
- **Sincronización bilingüe (ES / EN)**: Todas las actualizaciones en español tendrán su equivalente fiel en inglés dentro del selector de idioma.

---

## 1. Overview & Core Concept

- **Qué hace este cambio**: Articula el discurso de **Systema HETS** en torno al eje *"Movimiento Consciente — Menos tensión. Más libertad de movimiento"*, explicando con claridad cómo la respiración, la relajación, la percepción y el movimiento natural permiten regular el esfuerzo, gestionar impactos reduciendo riesgos y responder sin rigidez.
- **Valor principal**: Brinda al visitante una explicación clara, humana y directa de la propuesta pedagógica de la escuela apenas termina de ver el inicio, conectando los 3 pilares con el desarrollo de la sección *El Systema*.

---

## 2. User Experience & Visual Design

- **Distribución de los nuevos textos por sección**:
  1. **Franja de los 3 Pilares (`FranjaPrincipios`)**:
     - **Autoprotección**: *"Aprendé a resolver situaciones imprevistas utilizando el movimiento inteligente de tu cuerpo. No se trata de ser más fuerte que el otro, sino de conocerte mejor, comprender lo que sucede y desarrollar tu capacidad de adaptación."*
     - **Movimiento Consciente**: *"Menos tensión. Más libertad de movimiento. Exploramos posibilidades sin imponer movimientos rígidos para que cada persona descubra sus propias capacidades y desarrolle respuestas naturales, eficientes y adaptables."*
     - **Salud y Desarrollo Humano**: *"El movimiento como camino hacia el autoconocimiento y la autoprotección. A través de la respiración, la relajación y la percepción, aprendemos a regular el esfuerzo, liberar tensiones y fortalecer la confianza."*
  2. **Sección El Systema (`ElSistema`)**:
     - **Subtítulo editorial en Dorado Antiguo (`#C5A059`) bajo el título "El Systema"**: *"Movimiento Consciente — Menos tensión. Más libertad de movimiento."*
     - **Primer párrafo principal**: *"En Systema HETS, el movimiento consciente permite conocer el cuerpo, reconocer tensiones y responder con naturalidad ante situaciones imprevistas. A través de la respiración, la relajación y el movimiento, aprendemos a regular el esfuerzo, mejorar la coordinación y desarrollar nuestra capacidad de adaptación."*
     - **Segundo párrafo principal**: *"Entrenamos progresivamente la gestión de impactos, buscando reducir riesgos y fortalecer la confianza bajo presión. No imponemos movimientos rígidos: exploramos posibilidades para que cada persona descubra sus propias capacidades y desarrolle respuestas naturales, eficientes y adaptables."*
     - **Lema de síntesis antes del botón de acción**: *"Conocé tu cuerpo. Liberá tensiones. Movete con libertad."*
     - **Apertura del modal de los 4 Pilares**: *"Descubrí cómo la respiración, la relajación, la percepción y el movimiento natural pueden ayudarte a responder con mayor libertad, eficiencia y confianza. No se trata de ser más fuerte que el otro, sino de conocerte mejor, comprender lo que sucede y desarrollar tu capacidad de adaptación:"*
- **Identidad Visual y Tema**:
  - Se conserva la paleta oscura en Negro Obsidiana (`#07080A`), Negro Ónix (`#0D0E12`), Dorado Antiguo (`#C5A059` / `#D4AF37`), Blanco Humo (`#F4F4F6`) y Gris Plata (`#A0A5B1`), junto con los divisores discretos de `1px`.

---

## 3. Key Product Decisions & Trade-Offs

- **Decisión 1: Jerarquía de lectura en "El Systema"**
  - *Enfoque elegido*: Incorporar la bajada *"Movimiento Consciente — Menos tensión. Más libertad de movimiento."* justo debajo del título H2 y cerrar el bloque de texto con *"Conocé tu cuerpo. Liberá tensiones. Movete con libertad."* antes del botón de los 4 pilares.
  - *Por qué*: Permite escanear en 3 segundos las ideas fuerza del texto de referencia sin recargar los párrafos ni perder fluidez visual.
- **Decisión 2: Preservación total del Hero**
  - *Enfoque elegido*: Mantener intactos el título *"CONÓCETE Y PROGRESA"*, el lema en ruso y su fonética, la bajada de 3 conceptos y los botones de acción del Hero.
  - *Por qué*: Respeta la indicación explícita del usuario y evita duplicar frases entre la portada y las secciones inmediatas.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

```
┌──────────────────────────────────────────────────────────────────────┐
│                   Diccionario Bilingüe (ES / EN)                     │
│  • Claves de Los 3 Pilares (autoprotección, movimiento, salud)       │
│  • Claves de El Systema (subtítulo, párrafos, síntesis y modal)      │
└──────────────────┬───────────────────────────────────┬───────────────┘
                   │                                   │
                   ▼                                   ▼
┌─────────────────────────────────────┐ ┌──────────────────────────────┐
│     Componente: Los 3 Pilares       │ │    Componente: El Systema    │
│  • Renderiza los 3 ejes con los     │ │  • Muestra subtítulo dorado  │
│    nuevos textos de adaptación,     │ │  • Renderiza los 2 párrafos  │
│    movimiento inteligente y         │ │    y el lema de síntesis     │
│    autoconocimiento                 │ │  • Actualiza intro del modal │
└─────────────────────────────────────┘ └──────────────────────────────┘
```

- **Gestión de Textos e Idioma**:
  - Las cadenas en español e inglés se centralizan en el contexto de idioma para que el cambio entre `ES` y `EN` refleje de forma inmediata la nueva redacción tanto en la vista principal como dentro del modal interactivo de los 4 pilares.
