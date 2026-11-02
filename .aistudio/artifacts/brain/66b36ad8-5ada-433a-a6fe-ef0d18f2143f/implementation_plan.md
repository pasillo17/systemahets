# Systema HETS — Pulido Integral de Estética Marcial de Lujo

### User Review & Critical Decisions

- **Eliminación del bloque de WhatsApp en el Hero (Selección Focus Mode confirmada)**: Se retirará por completo el bloque inferior de consulta directa (`"¿Querés consultar directamente? Escribinos por WhatsApp"`) de la portada inicial, dejando exclusivamente los dos botones de exploración interna (`"Conocer el Systema"` y `"Ver Clases y Sedes"`) para fomentar el recorrido completo por la página antes de la conversión.
- **Barra de progreso de lectura dorada y navegación activa**: Se incorporará una línea de progreso de lectura superior en dorado bruñido que acompaña el scroll de principio a fin, junto con detección automática de la sección visible en la barra de navegación y divisores editoriales con filetes dorados entre secciones.
- **Refinamiento de tarjetas en Diego Ledesma, Clases y Sedes**: Se reemplazarán las etiquetas tipo cápsula/píldora y los bordes laterales gruesos por metadatos editoriales limpios con numeración monoespaciada (`01`, `02`, `03`), separadores tipográficos (`·`, `/`) y marcos de filete fino (`1px solid`), elevando la sobriedad e impacto visual.

---

### 1. Overview & Core Concept

El objetivo de esta iteración es llevar el portal oficial de **Systema HETS — Diego Ledesma** a su máxima expresión de **estética marcial de lujo**: sobria, con contrastes profundos de obsidiana y carbón cálido, filetes dorados de precisión y una jerarquía tipográfica editorial impecable.

Al eliminar la salida prematura hacia WhatsApp en el Hero, el sitio guía al visitante a través de una narrativa progresiva: desde el linaje eslavo y los principios biomecánicos, pasando por la trayectoria del Maestro Diego Ledesma y las modalidades de práctica, hasta culminar orgánicamente en el cronograma de la Sede Central y la reserva de clase de prueba al final del recorrido.

---

### 2. User Experience & Visual Design

- **Presupuestación Cromática 60-30-10 y Atmósfera**:
  - **60% Base Obsidiana (`#080807`)**: Fondo principal profundo que otorga autoridad y calma visual.
  - **30% Superficies de Carbón Cálido (`#12110F`)**: Tarjetas y módulos arquitectónicos delimitados por filetes sutiles (`rgba(165, 138, 96, 0.25)`).
  - **10% Bronce y Oro Bruñido (`#A58A60` / `#C2A87E`)**: Reservado para acentos interactivos, numeración editorial, filetes de foco y la barra de progreso de lectura.
- **Disciplina Editorial (Zero-Pill & Filetes Finos)**:
  - Las credenciales del Maestro Diego Ledesma (`VIII Dan`, linaje y certificaciones) y los indicadores de estado o categoría dejarán de mostrarse dentro de cápsulas naranjas para presentarse como cabeceras editoriales en tipografía monoespaciada con filetes horizontales finos.
  - Las citas destacadas sustituirán el borde lateral grueso por un diseño de cita editorial enmarcada con comillas tipográficas sutiles y filetes superiores e inferiores.
- **Jerarquía en Tarjetas de Clases y Cronograma Semanal**:
  - Las tres modalidades de entrenamiento incorporarán numeración de serie (`01`, `02`, `03`) en la esquina superior derecha y una separación clara entre el subtítulo técnico, el título principal, la premisa en serif itálica y el alcance práctico.
  - La grilla semanal de horarios utilizará números tabulares (`tabular-nums`) para alinear con precisión las franjas horarias y destacará los días activos mediante un filete superior dorado e indicador tipográfico limpio.
- **Progreso de Lectura y Transiciones entre Secciones**:
  - La cabecera fija integrará en su borde inferior una barra de progreso de lectura de `2px` en gradiente dorado (`#A58A60` → `#C2A87E` → `#F59E0B`) que refleja el avance exacto en la página, además de resaltar en dorado el ítem del menú correspondiente a la sección actual.

---

### 3. Key Product Decisions & Trade-Offs

- **Recorrido Narrativo antes que Redirección Inmediata**: Retirar el enlace de WhatsApp del Hero evita que el usuario abandone la página sin conocer la propuesta de valor, el linaje y los horarios de la sede, manteniendo el acceso directo a la reserva en la barra superior y en los bloques de Sedes y Contacto.
- **Sobriedad Editorial sobre Decoración Recargada**: En lugar de añadir insignias de colores llamativos o múltiples bordes gruesos que compiten por la atención, se prioriza el espacio negativo, los filetes de `1px` y el contraste entre tipografía geométrica (`Space Grotesk`), serif clásica (`Instrument Serif`) y técnica (`JetBrains Mono`).
- **Fluidez en Móvil y Escritorio**: La barra de progreso de lectura y el detector de sección activa operan mediante escuchas de scroll pasivas optimizadas con `requestAnimationFrame`, garantizando 60 FPS constantes en dispositivos móviles sin bloquear el hilo principal.

---

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        EXPERIENCIA DE NAVEGACIÓN                        │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Navbar Fija + Barra de Progreso Dorada (0% - 100%) + Sección Activa│  │
│  └───────────────┬───────────────────────────────────┬───────────────┘  │
│                  │ Scroll Suave (#systema)           │ Scroll (#clases) │
│                  ▼                                   ▼                  │
│  ┌───────────────────────────────┐   ┌───────────────────────────────┐  │
│  │ HERO (Portada Limpia)         │   │ SEDES Y CLASES                │  │
│  │ • Sin desvío prematuro a WSP  │   │ • Modalidades numeradas 01-03 │  │
│  │ • Doble CTA de exploración    │   │ • Cronograma tabular-nums     │  │
│  └───────────────┬───────────────┘   └───────────────┬───────────────┘  │
│                  │ Recorrido Editorial               │                  │
│                  ▼                                   ▼                  │
│  ┌───────────────────────────────┐   ┌───────────────────────────────┐  │
│  │ EL SYSTEMA & DIEGO LEDESMA    │   │ CONTACTO Y CONVERSIÓN FINAL   │  │
│  │ • Cabeceras Zero-Pill         │   │ • Cierre editorial de lujo    │  │
│  │ • Citas con filetes finos 1px │   │ • Reserva directa por WhatsApp│  │
│  └───────────────────────────────┘   └───────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Gestión de Estado de Lectura y Sección Activa**:
  - Cálculo reactivo del porcentaje de desplazamiento vertical (`scrollY / (scrollHeight - innerHeight)`) sincronizado con una barra de ancho dinámico en la cabecera.
  - Observación de las secciones principales (`#inicio`, `#systema`, `#diego-ledesma`, `#entrenamientos`, `#sedes-y-clases`, `#testimonios`, `#contacto`) para iluminar automáticamente el enlace activo en la barra de navegación.
- **Limpieza de Componentes y Consistencia Bilingüe (ES/EN)**:
  - Eliminación del nodo de consulta directa de WhatsApp en el Hero y depuración de importaciones no utilizadas.
  - Preservación estricta del soporte bilingüe español/inglés y de la grafía oficial **SYSTEMA** en todos los textos y metadatos editoriales.
