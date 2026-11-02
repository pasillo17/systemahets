# Separación Visual entre Secciones: Alternancia de Fondos y Divisores Dorados Luminosos — Systema HETS

> **User Review & Critical Decisions**
> - **Estrategia de Separación Seleccionada:** Se aplicará **alternancia de tonos de fondo entre Gris Carbón (`#121316`) y Gris Grafito (`#1C1E24`) combinada con divisores dorados luminosos** de ancho completo en cada cambio de sección.
> - **Contraste de Tarjetas Internas:** En las secciones cuyo fondo pase a ser Gris Grafito (`#1C1E24`), las tarjetas e ítems internos utilizarán Gris Carbón (`#121316`) con borde dorado y bisel especular, manteniendo siempre el contraste de capas y la profundidad 3D.
> - **Fidelidad de Paleta:** Se conservan estrictamente los colores oficiales (`#121316`, `#1C1E24`, `#C5A059`, `#D4AF37`, `#F4F4F6`, `#A0A5B1` y `rgba(197, 160, 89, 0.25)`).

---

## 1. Overview & Core Concept

Actualmente todas las secciones de la página comparten el mismo fondo continuo (`#121316`), haciendo que el recorrido vertical se perciba como un único bloque sin pausas claras. Para que cada sección tenga identidad propia y el usuario distinga de inmediato dónde termina un bloque y dónde comienza el siguiente, implementaremos un **ritmo cromático alternado (`#121316` ⇄ `#1C1E24`)** acompañado por **divisores arquitectónicos en Dorado Antiguo (`#C5A059`)** con halo luminoso central y sombras de transición.

---

## 2. User Experience & Visual Design

### Secuencia de Alternancia Cromática por Sección
1. **Hero (`#inicio`):** Fondo **Gris Carbón (`#121316`)** con viñeta profunda + borde inferior dorado luminoso.
2. **Linaje Oficial y 3 Pilares (`FranjaLinaje` + `FranjaPrincipios`):** Fondo **Gris Grafito (`#1C1E24`)** para enmarcar el respaldo internacional y los principios como un bloque institucional distinguido.
3. **El Systema (`#systema`):** Fondo **Gris Carbón (`#121316`)** con tarjetas en `#1C1E24`.
4. **Sobre Diego Martín Ledesma (`#diego-ledesma`):** Fondo **Gris Grafito (`#1C1E24`)** con retrato y detalles sobre superficie `#121316` y borde dorado.
5. **Entrenamientos en Acción (`#entrenamientos`):** Fondo **Gris Carbón (`#121316`)** con galería en `#1C1E24`.
6. **Sedes y Horarios (`#sedes-y-clases`):** Fondo **Gris Grafito (`#1C1E24`)** con tablero de horarios y banner del Camp 2026 contrastados sobre `#121316`.
7. **Testimonios (`#testimonios`):** Fondo **Gris Carbón (`#121316`)** con tarjetas de reseñas en `#1C1E24`.
8. **Frase Destacada (`FraseDestacada`):** Banda editorial en **Gris Grafito (`#1C1E24`)** con doble filete dorado superior e inferior.
9. **Preguntas Frecuentes (`#preguntas-frecuentes`):** Fondo **Gris Carbón (`#121316`)** con acordeón en `#1C1E24`.
10. **Contacto y Reserva (`#contacto`):** Fondo **Gris Grafito (`#1C1E24`)** con tarjeta principal contrastada en `#121316`.
11. **Pie de Página (`Footer`):** Cierre institucional en **Gris Carbón (`#121316`)**.

### Divisores Dorados Luminosos entre Bloques
- **Línea de Corte con Halo Central:** Cada frontera entre secciones contará con un divisor horizontal que combina una línea en degradado dorado (`transparent → #C5A059 → #D4AF37 → #C5A059 → transparent`), una sombra interior suave en el borde superior de cada sección (`inset 0 12px 24px -12px rgba(0, 0, 0, 0.65)`) y un rombo/emblema central sutil en Dorado Antiguo (`#C5A059`) con resplandor (`0 0 12px rgba(197, 160, 89, 0.55)`).
- **Espaciado Vertical Generoso:** Se ajustará el `padding` vertical de las secciones para dar aire limpio antes y después de cada divisor.

---

## 3. Key Product Decisions & Trade-Offs

1. **Inversión Inteligente de Superficies (`#121316` ⇄ `#1C1E24`):**
   - *Decisión:* Cuando una sección tiene fondo `#1C1E24`, sus tarjetas internas pasan a `#121316` (y viceversa).
   - *Por qué:* Evita que una tarjeta `#1C1E24` se pierda sobre un fondo `#1C1E24`, manteniendo intacto el contraste y el efecto de elevación 3D en toda la web.
2. **Divisores Ornamentales Sobrios:**
   - *Decisión:* Usar un filete dorado de `1px` con centro luminoso y un pequeño marcador geométrico (rombo de `6px`) en lugar de barras gruesas.
   - *Por qué:* Marca una separación nítida y visible a primera vista sin recargar la estética marcial y elegante.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                RITMO DE SECCIONES Y DIVISORES LUMINOSOS                 │
├─────────────────────────────────────────────────────────────────────────┤
│  Sección Impar: Fondo #121316 (Gris Carbón) + Tarjetas #1C1E24          │
├───────────────── ◆ ─── Divisor Dorado Luminoso ─── ◆ ───────────────────┤
│  Sección Par:   Fondo #1C1E24 (Gris Grafito) + Tarjetas #121316         │
├───────────────── ◆ ─── Divisor Dorado Luminoso ─── ◆ ───────────────────┤
│  Sección Impar: Fondo #121316 (Gris Carbón) + Tarjetas #1C1E24          │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Estilos Globales de Separación:** Se definirán clases dedicadas para las secciones alternadas y el divisor luminoso con nodo central dorado, asegurando nitidez tanto en pantallas móviles como en monitores de escritorio.
