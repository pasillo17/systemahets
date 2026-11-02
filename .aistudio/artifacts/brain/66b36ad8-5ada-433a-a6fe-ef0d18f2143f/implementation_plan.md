# Plan de Optimización SEO Integral — Systema HETS Argentina

## Objetivo
Posicionar **Systema HETS (Prof. Diego Martín Ledesma)** en Google con alcance nacional en **toda Argentina** (seminarios intensivos, clases presenciales en La Plata/Buenos Aires y formación personalizada/online), incorporando metadatos optimizados, **Preguntas Frecuentes invisibles en JSON-LD (`FAQPage`)**, datos estructurados del evento **Systema HETS Camp 2026 (`Event`)** y archivos de indexación técnica (`robots.txt` y `sitemap.xml`).

---

## 1. Metadatos de Alcance Nacional y Redes Sociales (`/index.html` y `/src/App.tsx`)
- **Título SEO Principal (`<title>`, `og:title`, `twitter:title`)**:
  - `"Systema HETS Argentina | Arte Marcial Ruso, Clases y Seminarios – Diego Ledesma"` (optimizado para búsquedas en toda Argentina tanto de clases como de seminarios e instrucción en *Systema*).
- **Descripción Meta (`<meta name="description">`, `og:description`, `twitter:description`)**:
  - `"Escuela oficial de Systema (Arte Marcial Ruso) en Argentina dirigida por Diego Martín Ledesma. Seminarios en todo el país, clases presenciales y online de movimiento consciente, respiración y defensa personal."`
- **Palabras Clave y Geolocalización (`keywords`, `geo.region`, `theme-color`)**:
  - Etiquetas meta semánticas orientadas a *Systema Argentina, Arte Marcial Ruso Argentina, Seminarios de Systema, Clases de Systema online y presenciales, Defensa Personal Consciente, Diego Martín Ledesma, Mikhail Ryabko, Vladimir Vasiliev*.
  - `theme-color` actualizado a `#1F1916` (Marrón Tierra Sombra) y `body` sincronizado en `#1F1916`.
- **Actualización Dinámica de Título por Vista (`src/App.tsx`)**:
  - Cuando el usuario navega a `#novedades`, el título del documento cambia dinámicamente a `"Systema HETS Camp 2026 – Seminario Intensivo | Systema HETS Argentina"` y regresa al título principal al volver al inicio.

---

## 2. Datos Estructurados Avanzados Schema.org en JSON-LD (`/index.html`)
Se implementará un grafo unificado (`@graph`) en `<script type="application/ld+json">` totalmente invisible en el diseño visual pero leído directamente por los rastreadores de Google:

1. **`SportsActivityLocation` & `EducationalOrganization` (Alcance Nacional + Sede Oficial)**:
   - Teléfono oficial actualizado: `+54 9 11 5653-2401`.
   - Cobertura nacional (`areaServed: "Argentina"`) junto con la dirección física de la sede en La Plata (`Calle 22 Nº 1027 e/ 53 y 54`) y coordenadas GPS precisas.
   - Horarios oficiales detallados en `openingHoursSpecification` (Lunes a Viernes en turnos mañana `08:30–10:00`, mediodía `12:00–13:30` y noche `19:00–20:30`).
   - Enlaces `sameAs` verificados hacia Instagram, Facebook, YouTube y el Canal Oficial de WhatsApp.
2. **`FAQPage` Invisible para Google (Rich Snippets de Preguntas Frecuentes)**:
   - Incluye las preguntas clave que los usuarios buscan en Google en Argentina (sin alterar la estética de la página):
     - *¿Qué es Systema HETS y en qué se diferencia de otras artes marciales?*
     - *¿Dónde se dictan clases y seminarios de Systema HETS en Argentina?*
     - *¿Se necesita experiencia previa para empezar a entrenar Systema?*
     - *¿Cuáles son los horarios de entrenamiento y cómo reservo una clase de prueba o seminario?*
     - *¿Quién es el director e instructor de Systema HETS Argentina?*
3. **`Event` (Seminario Intensivo — Systema HETS Camp 2026)**:
   - Datos estructurados del **Systema HETS Camp 2026 (21 al 23 de noviembre en Estancia Santa Rita, Punta Indio)** con organizador, ubicación y valores oficiales para que Google indexe el evento en búsquedas de seminarios marciales en Argentina.

---

## 3. Archivos Técnicos de Indexación (`/public/robots.txt` y `/public/sitemap.xml`)
- **`/public/robots.txt`**:
  - Permite la indexación completa (`Allow: /`) a todos los motores de búsqueda (`User-agent: *`) y declara la ruta exacta del mapa del sitio (`Sitemap: https://systemahets.com/sitemap.xml`).
- **`/public/sitemap.xml`**:
  - Mapa del sitio XML estándar con las URLs principales de `https://systemahets.com/` y secciones clave, facilitando el alta inmediata en **Google Search Console**.
