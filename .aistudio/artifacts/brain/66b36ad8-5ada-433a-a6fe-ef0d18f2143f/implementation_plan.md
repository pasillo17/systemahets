# Ajustes Tipográficos y Balance Visual del Hero (Mobile & Desktop)

Optimización de la jerarquía tipográfica, control de saltos de línea (`white-space: nowrap`) y proporción visual (`text-wrap: balance`) en la portada principal de Systema HETS para garantizar que ningún lema ni pilar conceptual se corte a la mitad o deje palabras huérfanas en pantallas móviles.

### User Review & Critical Decisions

> [!IMPORTANT]
> Todos los requerimientos tipográficos fueron especificados con precisión en la solicitud: separación en dos renglones independientes para el lema en ruso y su fonética, blindaje de cada concepto de la bajada con `white-space: nowrap` y aplicación transversal de `text-wrap: balance` en todos los textos centrados del Hero.

- **Disposición del Lema Oficial**: Separación vertical en dos líneas centradas e independientes (`ПОЗНАЙ СЕБЯ И РАЗВИВАЙСЯ` arriba y `(Poznái sebyá i razviváysya)` debajo), cada una con `white-space: nowrap` y escala tipográfica adaptada para móviles.
- **Blindaje de Pilares de Marca**: Cada concepto (`Arte Marcial Ruso`, `Desarrollo Humano`, `Autoprotección`) se envuelve en su propio `<span className="whitespace-nowrap">` con ajuste de `font-size` y ancho máximo en mobile para que entren en una sola línea o, en pantallas muy angostas, salten únicamente en el separador `·` sin partir jamás palabras compuestas.

---

### 1. Overview & Core Concept

- **What It Does**: Perfecciona la presentación tipográfica de la sección Hero para que el lema oficial en ruso, su transliteración fonética y los tres pilares de la escuela mantengan una lectura limpia, simétrica y sin cortes accidentales en cualquier ancho de pantalla móvil o desktop.
- **Target Audience / Persona**: Visitantes y futuros practicantes que acceden principalmente desde teléfonos móviles y perciben la identidad y seriedad de la escuela en el primer impacto visual.
- **Key Value**: Elimina palabras huérfanas y saltos de línea forzados a mitad de frase, reforzando una estética editorial prolija y equilibrada.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Lectura del Título y Lema Ruso**: Debajo del H1 (`CONÓCETE Y PROGRESA`), el usuario visualiza en un primer renglón íntegro el lema en cirílico `ПОЗНАЙ СЕБЯ И РАЗВИВАЙСЯ` y, en el renglón inmediatamente inferior, la fonética completa `(Poznái sebyá i razviváysya)` sin partirse en dos líneas.
  2. **Lectura de Categorías / Pilares**: En la línea `Arte Marcial Ruso · Desarrollo Humano · Autoprotección`, los tres conceptos se mantienen unidos internamente. En móviles estándar entran en un único renglón fluido; en pantallas ultra-compactas, si se produce un salto de línea, ocurre exclusivamente en el punto medio (`·`), preservando `"Desarrollo Humano"` y `"Arte Marcial Ruso"` intactos.
  3. **Armonía General del Hero**: Todos los encabezados, subtítulos y la línea de ubicación (`Sede Central · La Plata, Buenos Aires`) aplican `text-wrap: balance` para mantener bloques centrados visualmente proporcionados.
- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Editorial marcial sobria, orgánica y estructurada.
  - *Color Palette & Mood*: Se conserva la paleta cálida sobre fondo oscuro (`#F4EDE2` para el título principal, `#DF7E5B` para el lema en cirílico, `#C4B5A3` para la fonética y ubicación, y `#E5DAC9` para los pilares).
  - *Typography & Hierarchy*:
    - **H1 (`CONÓCETE Y PROGRESA`)**: `font-heading` en mayúsculas con `text-wrap: balance`.
    - **Lema en Ruso**: Primer renglón en `font-serif font-semibold tracking-wider whitespace-nowrap` con tamaño `text-[11px] xs:text-xs sm:text-sm md:text-base`.
    - **Fonética**: Segundo renglón en `font-sans italic whitespace-nowrap` con tamaño `text-[11px] xs:text-xs sm:text-sm md:text-base`.
    - **Subtítulo de Categorías**: `text-[12px] xs:text-[13px] sm:text-base lg:text-lg` sin la restricción estrecha de `max-w-[340px]` en mobile, permitiendo que los tres bloques `whitespace-nowrap` aprovechen el ancho disponible con `text-wrap: balance`.
- **Interactive Feedback & Motion**: Se mantienen intactas las transiciones suaves de carga del escudo y los estados interactivos de los botones de acción (`Reservar clase de prueba` y `Ver horarios y sede`).

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Estructura en dos líneas con `whitespace-nowrap` para Ruso y Fonética**
  - *Chosen Approach*: Renderizar el lema en ruso y su fonética como dos elementos de bloque/flex independientes en columna (`flex flex-col items-center gap-0.5`), aplicando `whitespace-nowrap` a cada uno y ajustando el tamaño en mobile (`text-[11px] xs:text-xs sm:text-sm md:text-base`).
  - *Why*: Garantiza matemáticamente que ninguna de las dos expresiones se divida en múltiples renglones sin importar el navegador móvil.
  - *Alternatives Considered*: Mantener ambos en un mismo `<p>` separado por espacio, lo cual provocaba que la fonética comenzara al final del primer renglón y se partiera a la mitad en el segundo.
- **Decision 2: Segmentación dinámica por `·` con `whitespace-nowrap` en Pilares**
  - *Chosen Approach*: Dividir la cadena del subtítulo por el separador `" · "` y envolver cada concepto en un `<span className="whitespace-nowrap">` acompañado de su separador tipográfico, ampliando el contenedor en mobile (`w-full max-w-md sm:max-w-2xl`) y ajustando la fuente móvil.
  - *Why*: Permite que tanto en español (`Arte Marcial Ruso · Desarrollo Humano · Autoprotección`) como en inglés (`Russian Martial Art · Human Development · Self-Protection`) cada concepto funcione como una unidad indivisible.

---

### 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:

```
┌───────────────────────────────────────────────────────────────────┐
│                         Sección Hero                              │
│                 (Contenedor Central Balanceado)                   │
├───────────────────────────────────────────────────────────────────┤
│  [Escudo Oficial Systema HETS]                                    │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ H1: CONÓCETE Y PROGRESA (text-wrap: balance)                │  │
│  ├─────────────────────────────────────────────────────────────┤  │
│  │ Renglón 1: ПОЗНАЙ СЕБЯ И РАЗВИВАЙСЯ (whitespace-nowrap)     │  │
│  │ Renglón 2: (Poznái sebyá i razviváysya) (whitespace-nowrap) │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Subtítulo de Categorías (text-wrap: balance)                │  │
│  │ [span.nowrap: Arte Marcial Ruso] ·                          │  │
│  │ [span.nowrap: Desarrollo Humano] ·                          │  │
│  │ [span.nowrap: Autoprotección]                               │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  [Botones CTA: Clase de Prueba / Horarios y Sede]                 │
│  [Ubicación: Sede Central · La Plata, Buenos Aires (balance)]     │
└───────────────────────────────────────────────────────────────────┘
```

- **Data Model & State**:
  - Consume las claves de traducción existentes (`hero.titulo`, `hero.lemaRuso`, `hero.lemaFonetica`, `hero.bajada`, `hero.location`) desde el contexto de idioma (`ES` / `EN`).
- **Interactive Component & State Mapping**:
  - Transforma dinámicamente `t("hero.bajada").split(" · ")` en nodos `<span className="whitespace-nowrap">` intercalados con el punto medio `·`, manteniendo compatibilidad reactiva al alternar el selector de idioma entre español e inglés.
