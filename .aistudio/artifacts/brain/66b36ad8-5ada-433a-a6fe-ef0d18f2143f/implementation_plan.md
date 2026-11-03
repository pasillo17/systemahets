# Actualización de CTA Final, Ventana Emergente de Prensa y Optimización de SEO Técnico y Web Performance — Systema HETS

Este plan integra la actualización del botón principal en el llamado a la acción final (**«Contacta y conoce la forma de acceder a tu clase»**), la creación del **botón y ventana emergente (modal) de Prensa** con sus 4 categorías (**Radio, Streaming, TV y Notas Escritas**), y el **diagnóstico experto junto con la implementación práctica de mejoras de SEO Técnico y Velocidad de Carga (Web Performance)** para `https://systemahets.com`.

---

## Decisiones Confirmadas

> [!IMPORTANT]
> Estas definiciones recogen las respuestas confirmadas para la ejecución del proyecto.

- **Confirmado — Botón y Modal de Prensa**: Se incorporará el botón **«Prensa»** en el menú principal (escritorio y móvil), en la sección de *Diego Martín Ledesma* y en el pie de página. Al pulsarlo se abrirá una ventana emergente con filtro por las **4 categorías** (**Radio**, **Streaming**, **TV** y **Notas Escritas**), preparada en la configuración centralizada para cargar o editar los enlaces de cada nota fácilmente.
- **Confirmado — Texto del Botón en el CTA Final**: El botón principal de WhatsApp en el bloque final de contacto llevará el texto **«Contacta y conoce la forma de acceder a tu clase»** (con su equivalente en inglés cuando se cambie de idioma).
- **Confirmado — Diagnóstico e Implementación de SEO Técnico y Web Performance**: Se incluye en este plan el diagnóstico técnico completo de `https://systemahets.com` y se aplicarán directamente en el código las mejoras de indexación, metadatos, archivos `robots.txt` / `sitemap.xml` y optimización de recursos de carga inicial.

---

## 1. Diagnóstico Experto de SEO Técnico y Web Performance (`https://systemahets.com`)

### A. Área 1: Optimización para Motores de Búsqueda (SEO Técnico y On-Page)

1. **Indexación y Renderizado en Buscadores (SPA vs. Googlebot)**:
   - *Diagnóstico*: Actualmente el HTML inicial presenta un contenedor `<div id="root"></div>` completamente vacío hasta que se descarga y ejecuta el bundle de JavaScript. Aunque Googlebot procesa JavaScript en una segunda fase (Web Rendering Service), otros rastreadores, previsualizadores y la primera pasada de indexación ven un cuerpo vacío. Además, el componente de precarga visual (`PagePreloader`) superpone una capa fija durante los primeros 950 ms, retrasando la pintura del contenido principal (LCP) para el rastreador.
   - *Solución a implementar*: Incluir contenido semántico estructurado de respaldo dentro de `<div id="root">` / `<noscript>` con la propuesta de valor, dirección en La Plata, horarios y enlaces principales para que cualquier bot lea el contenido en la primera pasada HTTP sin esperar la hidratación, y aligerar el preloader para no penalizar el Largest Contentful Paint (LCP).
2. **Estructura de Etiquetas Meta (`Title`, `Description`, `OpenGraph`) y Rutas Rotas**:
   - *Diagnóstico*:
     - La etiqueta `<meta name="description">` actual tiene **241 caracteres**, superando el límite óptimo de **150–160 caracteres**, lo que provoca que Google la trunque en los resultados de búsqueda.
     - Las etiquetas `<link rel="icon">`, `<link rel="preload">` y `og:image` apuntan a rutas de código fuente (`/src/assets/...` y `/public/assets/...`) que Vite transforma con hash al compilar a producción (`dist/`), generando enlaces `404` en la web subida para crawlers de redes sociales y buscadores.
     - No existen archivos `/public/robots.txt` ni `/public/sitemap.xml` en la raíz del dominio `https://systemahets.com`.
   - *Solución a implementar*: Ajustar `<title>` (58 caracteres) y `<meta name="description">` (155 caracteres) con palabras clave de alta intención (*Systema en La Plata y Argentina, Arte Marcial Ruso, Movimiento Consciente, Autoprotección, Diego Ledesma*), publicar los recursos de icono/OpenGraph desde `/public/` con URLs válidas en producción y generar `robots.txt` + `sitemap.xml`.
3. **Jerarquía de Encabezados (`H1`, `H2`, `H3`) y Oportunidades de Tráfico Orgánico**:
   - *Diagnóstico*: El `H1` actual dice únicamente *«CONÓCETE Y PROGRESA»*. Si bien es el lema institucional (y debe mantenerse visualmente idéntico), carece de contexto semántico para búsquedas como *"clases de Systema en La Plata"* o *"arte marcial ruso Argentina"*.
   - *Solución a implementar*: Conservar intacto el diseño visual del Hero y enriquecer semánticamente el encabezado principal mediante texto accesible para lectores de pantalla y buscadores (`sr-only`) junto al lema, asegurando una jerarquía estricta `H1` → `H2` (El Systema, Diego Martín Ledesma, Horarios de entrenamiento y sede, Lo que cuentan nuestros alumnos, Preguntas Frecuentes, Contacto) → `H3`.

### B. Área 2: Rendimiento y Velocidad de Carga (Web Performance)

1. **Optimización de Recursos Estáticos (Fuentes, Imágenes y Video)**:
   - *Diagnóstico*: Se están descargando **3 familias tipográficas completas con 14 variantes de peso** desde Google Fonts (`Cinzel`, `Oswald` y `Plus Jakarta Sans`), pese a que `Cinzel` casi no se utiliza. Además, el video de fondo del Hero se descarga desde un servidor externo en el primer renderizado.
   - *Solución a implementar*: Reducir la petición de Google Fonts únicamente a las familias y pesos realmente utilizados (`Oswald` 500/700 y `Plus Jakarta Sans` 400/500/600/700 con `display=swap`), corregir el `<link rel="preload">` roto en `index.html`, y añadir `decoding="async"` y dimensiones explícitas en imágenes para evitar desplazamientos de diseño (CLS = 0).
2. **Impacto de la Arquitectura SPA en las Métricas Iniciales (FCP / LCP / TBT)**:
   - *Diagnóstico*: Vistas secundarias como `Novedades` (Camp 2026) y el nuevo modal de `Prensa` no necesitan bloquear el bundle principal en el primer byte.
   - *Solución a implementar*: Aplicar carga diferida (`React.lazy` + `Suspense`) para la vista secundaria `Novedades` y el modal de `Prensa`, y configurar partición de código (`manualChunks`) en la compilación para separar las librerías de terceros del código principal.

---

## 2. Experiencia de Usuario y Diseño Visual

### A. Nuevo Botón y Ventana Emergente (Modal) de Prensa
- **Puntos de Acceso**:
  1. En la barra de navegación superior (`PREMIOS / PRENSA` → **«PRENSA»**) tanto en escritorio como en el menú móvil.
  2. En la sección de **Diego Martín Ledesma** (debajo de su reseña/trayectoria), como acceso directo a sus entrevistas y apariciones en medios.
  3. En la columna de navegación del **Footer**.
- **Diseño del Modal de Prensa**:
  - Estética en armonía con la paleta **Tierra Profunda (`#110D0A`)**, **Tierra Sombra (`#1B140F`)**, **Naranja Terracota (`#D97736`)** y **Dorado (`#C5A059` / `#D4AF37`)**.
  - Barra de filtros interactivos en la parte superior del modal para alternar entre **Todas**, **Radio**, **Streaming**, **TV** y **Notas Escritas**.
  - Cada tarjeta de prensa muestra: categoría y medio (en texto limpio separado por `·`), título de la nota o entrevista, breve resumen, fecha/programa y botón directo para **Ver / Escuchar / Leer nota** (o indicación clara para cargar el link en la configuración centralizada).

### B. Actualización del CTA Final de Contacto
- En la sección final de contacto (`#contacto`), el botón principal de WhatsApp se actualiza a:
  - Español: **«Contacta y conoce la forma de acceder a tu clase»**
  - Inglés: **«Contact us and learn how to join your class»**

---

## 3. Decisiones de Producto y Arquitectura

- **Configuración Centralizada de Prensa**:
  - *Enfoque elegido*: Agregar el arreglo `prensa` dentro de la configuración central del sitio con objetos estructurados por categoría (`"radio" | "streaming" | "tv" | "escrita"`), medio, título, descripción y `url`.
  - *Por qué*: Permite agregar o modificar cualquier enlace de YouTube, Spotify, portal de noticias o canal de TV editando un solo bloque de datos claramente comentado.
- **SEO para SPA en GitHub Pages**:
  - *Enfoque elegido*: Combinar contenido semántico de respaldo en el HTML inicial + `robots.txt` + `sitemap.xml` + corrección de rutas de activos públicos en `/public/`.
  - *Por qué*: Es 100% compatible con el alojamiento estático actual en GitHub Pages (`systemahets.com`) sin requerir un servidor Node en producción.

---

## 4. Arquitectura Técnica y Flujo de Componentes

```
┌──────────────────────────────────────────────────────────────────────────┐
│                        index.html + /public/                             │
│  • Meta Title (58 chars) & Description (155 chars) optimizados           │
│  • Schema.org JSON-LD + Contenido semántico inicial para Googlebot       │
│  • /public/robots.txt + /public/sitemap.xml                              │
└────────────────────────────────────┬─────────────────────────────────────┘
                                     │
                                     ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                              MainApp (SPA)                               │
├──────────────────────┬───────────────────────────┬───────────────────────┤
│   Navbar & Footer    │   Secciones Principales   │  Modal de Prensa      │
│  • Botón "PRENSA"    │  • Hero (LCP optimizado)  │  • Filtro interactivo:│
│    abre Modal Prensa │  • Linaje & 3 Pilares     │    - Todas            │
│  • Navegación fluida │  • El Systema + Galería   │    - Radio            │
│                      │  • Diego Ledesma (+botón  │    - Streaming        │
│                      │    Ver notas de prensa)   │    - TV               │
│                      │  • Sedes y Horarios       │    - Notas Escritas   │
│                      │  • Testimonios Google     │  • Tarjetas con links │
│                      │  • Preguntas Frecuentes   │    editables en       │
│                      │  • ContactoConversion:    │    configuración      │
│                      │    CTA "Contacta y conoce │                       │
│                      │    la forma de acceder    │                       │
│                      │    a tu clase"            │                       │
└──────────────────────┴───────────────────────────┴───────────────────────┘
```
