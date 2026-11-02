# Plan de Implementación: Animaciones de Entrada Suaves (Scroll Reveal)

## 1. Diagnóstico y Decisiones de Diseño
- **Objetivo del usuario**: Que los elementos y secciones del sitio no aparezcan de forma estática o rígida, sino que tengan una **aparición suave hacia arriba al hacer scroll** en todas las secciones y tarjetas principales.
- **Elecciones confirmadas**:
  - Estilo: *Aparición suave hacia arriba (fade-in + slide-up)* con curvas naturales (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - Alcance: *Todas las secciones principales y tarjetas del sitio*.
- **Enfoque técnico de alto rendimiento**:
  - Utilizar un hook/componente ligero basado en la API nativa `IntersectionObserver` de los navegadores.
  - Ventajas: 0 dependencias externas pesadas, aceleración por GPU (`transform: translate3d(...)` y `opacity`), sin caídas de frames en teléfonos móviles ni retrasos al scrollear.
  - Cumplimiento de accesibilidad: si el usuario tiene activado *"prefers-reduced-motion"*, las animaciones se desactivan automáticamente.

---

## 2. Pasos de la Implementación

### Paso 1: Componente y Hook `ScrollReveal`
- Crear el componente contenedor reutilizable `src/components/ScrollReveal.tsx` (y hook opcional `useScrollReveal`):
  - Detecta cuando el elemento entra en el viewport del usuario (con un umbral o margen de anticipación cómodo, ej. `rootMargin: "0px 0px -50px 0px"`).
  - Aplica clases de transición CSS:
    - Estado oculto inicial: `opacity-0 translate-y-6 sm:translate-y-8`
    - Estado visible animado: `opacity-100 translate-y-0 duration-700 ease-out`
  - Permite retardo opcional (`delay` en ms) para que tarjetas contiguas puedan aparecer con un ritmo escalonado armonioso.

### Paso 2: Integración en Secciones y Tarjetas Principales
1. **Hero**:
   - Aparición orquestada del logotipo central, títulos y botones de acción al cargar la página.
2. **Franja de Linaje Oficial (Escuelas Matrices)**:
   - Aparición fluida al scrollear desde el Hero.
3. **Franja de Principios**:
   - Revelado suave de las 4 tarjetas de principios con un desfase sutil entre ellas.
4. **El Systema**:
   - Entrada de la imagen de práctica biomecánica y los bloques conceptuales.
5. **Diego Ledesma**:
   - Revelado del retrato editorial, la biografía y la columna de trayectoria formativa.
6. **Entrenamientos (Fotos Oficiales y Carrusel)**:
   - Entrada suave de la cabecera y del visor/carrusel de fotos al llegar a la sección.
7. **Sedes y Clases**:
   - Revelado de las cifras de prueba social, las tarjetas de modalidad (grupal, individual, seminarios) y el mapa del dojo.
8. **Testimonios**:
   - Entrada suave de las tarjetas de testimonios de los alumnos.
9. **Contacto y Frase Destacada**:
   - Entrada de los bloques de reserva por WhatsApp y el cierre solemne institucional.

### Paso 3: Ajustes de CSS en `src/index.css`
- Declarar las clases de transición y optimizaciones para `will-change: opacity, transform` cuando la animación está activa, liberando recursos de memoria una vez completada.

---

## 3. Plan de Verificación

1. **Prueba visual y de scroll**:
   - Desplazarse por toda la página desde el inicio hasta el pie, verificando que cada sección y grupo de tarjetas se revele suavemente hacia arriba.
   - Probar en vista móvil emulando pantalla táctil para asegurar que el scroll sea completamente fluido y sin saltos bruscos.
2. **Auditoría de código**:
   - Ejecutar `lint_applet` (`tsc --noEmit`) para comprobar ausencia de errores de tipado o imports.
   - Ejecutar `compile_applet`.
   - Ejecutar `npm run build` para asegurar la correcta compilación y empaquetado de producción en Vite.
