# Plan de Transición Continua entre Fondos (Marrón Tierra y Blanco Cálido)

## Objetivo
Reemplazar los cortes rectos entre las secciones oscuras (**Tierra Sombra / Marrón `#1F1916`–`#261E1A`**) y las secciones claras (**Hueso / Arena Cálida `#F8F3EB`–`#EFE7DA`**) por **transiciones en degradado suave y orgánico**, logrando que todo el sitio se sienta como un único lienzo continuo donde los colores se funden entre sí.

## Cambios Propuestos

### 1. Utilidades de Gradientes de Transición (`src/index.css`)
- Incorporar tonos intermedios de fundido (**Arcilla Tostada `#5C4738`**, **Tierra Media `#8C725C`** y **Arena Suave `#D8CBB8`**) y clases de transición vertical para conectar sin cortes:
  - **De Marrón Profundo a Blanco/Hueso Cálido** (salida del Hero / Linaje hacia *Los 4 Principios*).
  - **Flujo suave entre tonos claros** (*Los 4 Principios* → *El Systema* → *Diego Ledesma* → *Entrenamientos* → *Sedes y Clases* → *Testimonios*), combinando `#F8F3EB` (Hueso Blanco Cálido) y `#EFE7DA` (Arena).
  - **De Blanco/Hueso Cálido a Marrón Profundo** (transición envolvente desde *Testimonios* hacia la *Frase de Cierre*, *Contacto* y *Footer*).
- Eliminar líneas divisorias rígidas (`border-b`) entre secciones que interrumpan la fusión cromática.

### 2. Integración Visual en las Secciones (`src/App.tsx`)
- **Apertura (Hero + Linaje → Los 4 Principios)**: Aplicar un degradado descendente al final del bloque de Linaje y al inicio de *Los 4 Principios* que funda el marrón oscuro (`#1F1916` / `#261E1A`) con el blanco hueso cálido (`#F8F3EB` / `#EFE7DA`).
- **Cuerpo Central (Secciones Claras y Bloques Destacados)**:
  - Conectar con degradados continuos las secciones de lectura clara para que pasen suavemente entre blanco cálido (`#F8F3EB`) y arena pampeana (`#EFE7DA`).
  - Integrar halos y bordes difuminados alrededor de las tarjetas internas en marrón (*¿Por qué se llama Systema HETS?*, *Trayectoria* y *Tablero de Horarios*) para que se fundan armónicamente con el fondo claro.
- **Cierre (Testimonios → Frase Final → Contacto)**: Aplicar un degradado progresivo que lleve el fondo desde el blanco hueso cálido nuevamente hacia el marrón tierra profundo del cierre.
