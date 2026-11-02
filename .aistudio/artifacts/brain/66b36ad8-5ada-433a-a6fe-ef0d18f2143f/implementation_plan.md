# Plan de Atmósfera Visual: Gama Continua en Marrón Tierra Sombra y Adobe Oscuro Cálido

## Objetivo
Eliminar por completo los fondos blancos y crema claros (`#F8F3EB`, `#EFE7DA`, `#E5DAC9`) en las secciones intermedias y unificar toda la experiencia de **Systema HETS** bajo una atmósfera orgánica, profunda y marcial en tonos **Marrón Tierra Sombra (`#1F1916`)**, **Adobe Oscuro Cálido (`#261E1A`)** y **Quebracho Tostado (`#2E241F`)**, garantizando máxima legibilidad, contraste y coherencia de principio a fin.

---

## 1. Nueva Paleta de Fondos y Degradados Continuos (`src/index.css`)
Reemplazaremos las clases de transición `.bg-flow-*` que pasaban hacia tonos blancos por una progresión armónica de capas de tierra oscura cálida:

- **Base Principal (`Tierra Sombra Profunda`)**: `#1F1916`
- **Capa Intermedia (`Adobe Oscuro Cálido`)**: `#261E1A`
- **Capa de Realce / Superficie (`Quebracho Tostado`)**: `#2E241F` y `#342923`
- **Resplandores Ambientales**: Halos radiales sutiles en **Terracota Pampeana (`rgba(184, 83, 50, 0.12)`)** y **Ocre Arcilla (`rgba(196, 154, 100, 0.08)`)** para separar visualmente cada sección sin cortes bruscos ni parches blancos.

---

## 2. Actualización de Secciones y Contraste Tipográfico
Adaptaremos las secciones que antes tenían fondo claro para que luzcan impecables sobre la nueva gama **Tierra Sombra & Adobe Oscuro**:

1. **Franja de Principios (`src/components/FranjaPrincipios.tsx`)**:
   - Fondo en transición continua desde `#251D19` hacia `#1F1916`.
   - Tarjetas de los 4 principios en **Adobe Profundo (`#261E1A`)** con borde sutil en **Ocre Arcilla (`#C49A64/35`)**, títulos en **Hueso Cálido (`#F4EDE2`)**, acentos en **Terracota (`#C86442`)** y descripciones en **Arena Suave (`#D6C7B5`)**.
2. **El Systema (`src/components/ElSistema.tsx`)**:
   - Fondo en degradado cálido `#1F1916` → `#261E1A` → `#221B17`.
   - Textos principales en **Hueso Cálido (`#F4EDE2`)** y secundarios en **Arena Suave (`#C4B5A3`)**.
   - Tarjetas de los 4 pilares en `#2A211C` con bordes iluminados en Terracota y Ocre, logrando integración total con el bloque protagonista *"¿Por qué se llama Systema HETS?"*.
3. **Diego Martín Ledesma (`src/components/DiegoLedesma.tsx`)**:
   - Fondo en **Adobe Oscuro (`#221B17` → `#28201B` → `#1F1916`)**.
   - Cita destacada enmarcada en `#2A211C` con filetes en **Terracota Pampeana (`#C86442`)** y texto en `#F4EDE2`.
   - Biografía y credenciales con contraste nítido en Hueso Cálido y Ocre Arcilla.
4. **Galería de Entrenamientos (`src/components/Entrenamientos.tsx`)**:
   - Fondo oscuro cálido (`#1F1916` → `#261E1A`) que hace resaltar las fotografías y videos del carrusel como en una sala de proyección editorial.
   - Botones de filtro y controles en `#2A211C` con indicador activo en **Terracota Pampeana (`#B85332`)**.
5. **Sedes, Días y Horarios (`src/components/Clases.tsx`)**:
   - Integración orgánica del contenedor de la sede dentro de la gama Tierra Sombra (`#261E1A` / `#1F1916`) con realce perimetral en Ocre y Terracota.
6. **Testimonios y Frase Destacada (`src/components/Testimonios.tsx` y `src/components/FraseDestacada.tsx`)**:
   - Tarjetas de reseñas en **Adobe Cálido (`#261E1A`)** con estrellas en **Ocre Arcilla (`#C49A64`)** y relatos en `#F4EDE2`, seguidas de una transición fluida hacia la frase final y el bloque de contacto.
7. **Página de Novedades (`src/components/Novedades.tsx`)**:
   - Secciones informativas del **Buenos Aires Camp 2026** unificadas también en gama Tierra Sombra y Adobe oscuro para que toda la navegación mantenga la misma identidad visual.

---

## 3. Verificación
- Comprobación de contraste de lectura en todas las tarjetas, etiquetas y botones tanto en celular como en escritorio.
- Compilación completa del proyecto (`compile_applet`) sin errores.
