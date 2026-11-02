# Plan de Optimización Integral para Celular (Accesibilidad, Menú, Modales y Botones)

## 1. Diagnóstico de los Problemas Detectados en Celular
1. **Menú de las 3 barritas (arriba a la derecha) no se abre en celular**:
   - El panel del menú móvil (`position: fixed`) está renderizado dentro de la etiqueta `<header>`, la cual tiene aplicado un filtro de desenfoque (`backdrop-blur`). En los navegadores móviles, cualquier contenedor con `backdrop-filter` atrapa a sus elementos hijos `fixed` dentro de los 56px de altura de la barra superior, impidiendo que el menú se despliegue en pantalla completa.
2. **Botón de reserva por WhatsApp en el CTA final desborda su contenedor**:
   - El botón *"Reservar mi clase de prueba por WhatsApp"* (y otros botones de acción) tiene forzada la clase `whitespace-nowrap` junto con un espaciado ancho entre letras (`tracking-widest`) y dos íconos laterales, haciendo que el texto supere el ancho de las pantallas de celular.
3. **Historia completa de Diego Ledesma no se ve entera al abrirse**:
   - La ventana modal tiene un nivel de capa (`z-50`) inferior al de la barra de navegación superior (`z-[90]`), por lo que la cabecera queda tapada en celular. Además, los títulos internos tienen recorte automático (`truncate`) y el contenedor carece de una estructura a pantalla completa con cabecera y botón de cierre fijos.
4. **Textos y botones recortados en distintas secciones en celular**:
   - Varias tarjetas y subtítulos (como la franja de Linaje, los 4 Principios, el pie de foto en El Systema y botones de Sedes y Contacto) tienen clases `truncate`, `line-clamp-1` o `line-clamp-2` que cortan frases por la mitad en pantallas chicas.

---

## 2. Soluciones y Mejoras a Implementar

### A. Menú Móvil (3 Barritas) Independiente y de Apertura Instantánea (`Navbar.tsx`)
- **Separación de capa**: Extraer el panel del menú móvil fuera de la etiqueta `<header>` para que no quede atrapado por el `backdrop-blur` y cubra el 100% real de la pantalla del celular (`fixed inset-0 z-[120]`).
- **Interacción táctil limpia**: Unificar el evento de apertura/cierre de las 3 barritas sin duplicar eventos táctiles (`onTouchEnd` + `onClick` simultáneos que se cancelaban entre sí), garantizando que abra al primer toque.
- **Accesibilidad en enlaces**: Botones de navegación amplios, legibles, con acceso directo a cada sección, al apartado de Novedades (*Systema HETS Camp 2026*) y a WhatsApp.

### B. Historia Completa de Diego y Modales a Pantalla Completa en Celular (`DiegoLedesma.tsx`, `ElSistema.tsx`, `Entrenamientos.tsx`)
- **Ventana a pantalla completa con scroll cómodo y cierre fijo**:
  - Elevar las ventanas modales a `z-[120]` (por encima de la barra de navegación) y estructurarlas en 3 zonas claras:
    1. **Cabecera fija superior**: Con el título completo (sin `truncate` para que nunca se corte) y botón `X` de cierre siempre visible.
    2. **Cuerpo central desplazable (`overflow-y-auto`)**: Con tipografía de 15px–16px (`text-sm sm:text-base`) e interlineado amplio (`leading-relaxed`) para leer los tres párrafos completos de la historia de Diego con total comodidad en cualquier celular.
    3. **Pie fijo inferior**: Con botón grande *"Cerrar Biografía"* siempre accesible al alcance del pulgar.

### C. Botones Adaptables a Dos Líneas sin Desbordes (`ContactoConversion.tsx`, `Hero.tsx`, `DiegoLedesma.tsx`, `ElSistema.tsx`, `Clases.tsx`, `Novedades.tsx`)
- **Fin del desborde horizontal**: Reemplazar `whitespace-nowrap` por `whitespace-normal sm:whitespace-nowrap` en todos los botones de llamada a la acción.
- **Ajuste en el CTA Final de WhatsApp**: Permitir que *"Reservar mi clase de prueba por WhatsApp"* se acomode limpiamente en dos líneas centradas en celular (`h-auto py-3.5 px-4 text-center leading-snug`), manteniendo los íconos alineados y el texto 100% dentro del botón.

### D. Auditoría Tipográfica y Eliminación de Textos Cortados en Celular
- **Franja de Linaje (`FranjaLinaje.tsx`)**: Quitar `truncate` en el título y subtítulo móvil para que se lea completo el respaldo de las escuelas de Moscú y Toronto.
- **Franja de Principios (`FranjaPrincipios.tsx`)**: Quitar `line-clamp-2` en celular para que las descripciones de *Defensa Personal*, *Movimiento*, *Salud* y *Autoconocimiento* se lean completas sin puntos suspensivos.
- **El Systema (`ElSistema.tsx`) y Diego Ledesma (`DiegoLedesma.tsx`)**: Quitar `truncate` y `line-clamp-1` en los epígrafes de imágenes y retratos.
- **Sedes, Clases y Contacto (`Clases.tsx`, `ContactoConversion.tsx`)**: Ajustar los botones de *"Ver Ubicación"*, *"Coordinar Clase"* y botones de redes sociales para que ningún texto se recorte en pantallas pequeñas.
