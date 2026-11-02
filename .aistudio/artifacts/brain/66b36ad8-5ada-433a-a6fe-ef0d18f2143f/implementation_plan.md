# Ajustes de Diseño Móvil (UI/UX) y Limpieza de Redundancias — Systema HETS

Este plan detalla las mejoras de experiencia móvil en el **botón flotante de WhatsApp**, el **footer**, la sección **Diego Martín Ledesma** y el carrusel de **Entrenamientos en acción**, junto con la eliminación de textos y modales redundantes en **Diego Martín Ledesma** y **El Systema**.

## Revisión y Decisiones Confirmadas

> [!IMPORTANT]
> Todos los cambios siguen al pie de la letra tus indicaciones:

- **1. Botón Flotante de WhatsApp y Footer**:
  - Tamaño reducido en móvil a **`44px × 44px`** (`w-11 h-11 sm:w-12 sm:h-12`) con posición fija en `bottom: 16px; right: 16px;` (`bottom-4 right-4`).
  - Se agrega **`padding-bottom: 80px`** (`pb-20`) al `Footer` para que al llegar al final de la página el botón flotante nunca tape el copyright ni los textos inferiores.
  - **Ocultamiento automático con modales**: El botón flotante detectará automáticamente cuando cualquier modal o menú desplegable esté abierto (`[role="dialog"]` o bloqueo de scroll en `body`) y se ocultará por completo (`opacity-0 pointer-events-none`) para no tapar nunca los botones de `"Cerrar"`.
- **2. Sección "Diego Martín Ledesma" (Layout Mobile + Biografía Unificada)**:
  - **Apilado en 1 columna en móvil (`< 768px`)**: En pantallas móviles (`flex flex-col md:grid md:grid-cols-12`), primero se mostrará la tarjeta del retrato centrada/ancho completo y debajo el texto ocupando el **100% del ancho disponible**, evitando la columna lateral apretada.
  - **Eliminación del botón y modal "Leer biografía completa"**: Se elimina el botón y su modal repetitivo, dejando un **único párrafo introductorio conciso** junto a su frase personal y delegando el detalle cronológico a la lista editorial *"Trayectoria Formativa"*. También se asegura la redacción correcta (`"ITF y"`).
- **3. Galería "Entrenamientos en acción" (Sincronización y Vista Móvil)**:
  - **Sincronización instantánea de foto, título y descripción**: Se precargan las imágenes del carrusel y se vinculan en un único bloque reactivo por diapositiva para que, al tocar las flechas o deslizar, la fotografía, el título (*"Práctica al aire libre"* / *"Encuentros y demostraciones en el parque"*) y la descripción cambien exactamente al mismo tiempo sin demoras de red.
  - **Sin botón de ampliar (lightbox) en móvil**: En la vista móvil se elimina el ícono de lupa/maximizar y la apertura del modal lightbox, ya que la imagen ya se visualiza al ancho completo del carrusel.
- **4. Sección "El Systema" sin bloques repetidos**:
  - Se eliminan los tres ítems (*"Adaptación"*, *"Movimiento sin desgaste"*, *"Calma bajo presión"*) que duplicaban los conceptos de los 3 pilares iniciales, dejando una composición limpia en 2 columnas: la fotografía *"Práctica en el dojo de La Plata"* y el bloque editorial *"El Systema"* con el botón *"Ver los 4 pilares del entrenamiento"*.

---

## 1. Arquitectura Visual y Flujo en Móvil

```
┌────────────────────────────────────────────────────────────────────────────┐
│                   Vista Móvil (< 768px) — Systema HETS                     │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  [El Systema]                                                              │
│   ├── Texto editorial + Botón "Ver los 4 pilares del entrenamiento"        │
│   └── Imagen "Práctica en el dojo de La Plata"                             │
│       (Sin los 3 ítems repetidos debajo)                                   │
│                                                                            │
│  [Diego Martín Ledesma] (flex-col en mobile: 100% ancho)                   │
│   ├── 1. Tarjeta de Retrato (ancho completo / centrado)                    │
│   ├── 2. Cita + Único párrafo introductorio conciso (100% ancho)           │
│   │      (Sin botón ni modal "Leer biografía completa")                    │
│   └── 3. Lista editorial "Trayectoria Formativa"                           │
│                                                                            │
│  [Entrenamientos en acción]                                                │
│   └── Carrusel sincronizado (Imagen + Título + Descripción al instante)    │
│       (Sin lightbox ni botón de ampliar en móvil)                          │
│                                                                            │
│  [Footer] (padding-bottom: 80px para despejar el copyright)                │
│                                                                            │
│  [FloatingWhatsApp] (44px × 44px en bottom: 16px, right: 16px)             │
│   └── Se oculta automáticamente si hay cualquier modal abierto             │
└────────────────────────────────────────────────────────────────────────────┘
```
