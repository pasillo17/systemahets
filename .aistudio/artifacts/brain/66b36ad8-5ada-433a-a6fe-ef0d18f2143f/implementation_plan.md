# Nuevo Hero con Lema Oficial en Ruso y Español + Unificación en Autoprotección y Desarrollo Humano — Systema HETS

Este plan define la actualización jerárquica de la portada (**Hero**) con el lema oficial de la escuela en español y ruso, la consolidación de la franja de principios en **3 pilares abiertos** (*Autoprotección*, *Movimiento Consciente*, *Salud y Desarrollo Humano*) y el reemplazo integral del concepto comercial *"defensa personal"* / *"defensa aplicable"* por **Autoprotección** y **Desarrollo Humano** en toda la web.

## Revisión y Decisiones Confirmadas

> [!IMPORTANT]
> Todos los textos y jerarquías se aplicarán respetando exactamente tus definiciones:

- **1. Nueva Estructura Jerárquica del Hero (Portada)**:
  - **Título Principal (`H1`)**: `CONÓCETE Y PROGRESA`
  - **Lema en Ruso y fonética** (justo debajo del `H1`, con tipografía elegante, tamaño más contenido y color de acento Ocre Arcilla `#C49A64` / Terracota `#DF7E5B`): `ПОЗНАЙ СЕБЯ И РАЗВИВАЙСЯ` seguido en cursiva sutil por *(Poznái sebyá i razviváysya)*.
  - **Subtítulo (Pilares de marca)**: `Arte Marcial Ruso · Desarrollo Humano · Autoprotección`
  - Se conservan debajo los dos botones de acción (*"Reservar clase de prueba"* y *"Ver horarios y sede"*) y la línea discreta de ubicación (*"Dojo Central · La Plata, Buenos Aires"*).
- **2. Tres Pilares Principales sin Recuadros (debajo de Linaje Ryabko / Vasiliev)**:
  - Se elimina el bloque *"Defensa Personal"* y se unifica en una grilla limpia de **3 columnas** (`md:grid-cols-3`) separadas únicamente por líneas divisorias sutiles (`divide-[#C49A64]/20`):
    1. **AUTOPROTECCIÓN**: *"Aprendé a resolver situaciones imprevistas y proteger tu integridad usando la respiración, la calma bajo presión y el movimiento natural de tu cuerpo en lugar de chocar con fuerza bruta."*
    2. **MOVIMIENTO CONSCIENTE**: *"Aprendé a absorber impactos sin lesionarte, soltá la tensión física y respondé con fluidez y naturalidad."*
    3. **SALUD Y DESARROLLO HUMANO**: *"Mejorá tu postura, cuidá las articulaciones y sacate de encima las contracturas y el estrés de la semana en un entorno de respeto."*
- **3. Reemplazo en toda la Web de "Defensa Personal" / "Defensa Aplicable"**:
  - **Entrenamientos en acción**: Se cambia *"Soltura corporal y defensa aplicable"* por **"Soltura corporal, autoprotección y desarrollo humano"**.
  - **Clases Individuales**: Se cambia *"preparar temas puntuales de defensa personal"* por **"trabajar aspectos puntuales de autoprotección y desarrollo humano"**.
  - **Linaje, El Systema, Configuración y Metadatos SEO (`index.html`)**: Toda referencia a *"defensa personal"* o *"defensa práctica"* pasa a utilizar **"autoprotección"** y **"desarrollo humano"**.

---

## 1. Experiencia de Usuario y Jerarquía Visual

### A. Portada (Hero)
```
┌────────────────────────────────────────────────────────────────────────────┐
│                                [Logo HETS]                                 │
│                                                                            │
│                        H1: CONÓCETE Y PROGRESA                             │
│        ПОЗНАЙ СЕБЯ И РАЗВИВАЙСЯ  (Poznái sebyá i razviváysya)              │
│                                                                            │
│           Arte Marcial Ruso · Desarrollo Humano · Autoprotección           │
│                                                                            │
│      [ Reservar clase de prueba ]       [ Ver horarios y sede ↓ ]          │
│                    📍 Dojo Central · La Plata, Buenos Aires                │
└────────────────────────────────────────────────────────────────────────────┘
```

### B. Franja de 3 Pilares Editoriales (Sin Cajas Cerradas)
```
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│ 🛡️ AUTOPROTECCIÓN       │ ⚡ MOVIMIENTO CONSCIENTE │ ♥ SALUD Y DESARROLLO    │
│                         │                         │   HUMANO                │
│ Aprendé a resolver      │ Aprendé a absorber      │ Mejorá tu postura,      │
│ situaciones imprevistas │ impactos sin lesionarte,│ cuidá las articulaciones│
│ y proteger tu integridad│ soltá la tensión física │ y sacate de encima las  │
│ usando la respiración,  │ y respondé con fluidez  │ contracturas y el estrés│
│ la calma bajo presión y │ y naturalidad.          │ de la semana en un      │
│ el movimiento natural...│                         │ entorno de respeto.     │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```
