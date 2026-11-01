# Plan de Solución: Corrección de Pantalla en Blanco en GitHub Pages

## 1. Diagnóstico de la Causa Raíz
Has identificado las dos razones exactas por las que la pantalla se muestra en blanco:
1. **Sensibilidad a mayúsculas/minúsculas**: Tu repositorio se llama `systema-hets` (minúsculas), mientras que la base anterior apuntaba a `/SYSTEMA-HETS/` (mayúsculas). En los servidores de GitHub Pages, esto produce un error 404 al intentar cargar los archivos JavaScript y CSS compilados.
2. **"Deploy from a branch" sirviendo archivos fuente sin compilar**: Al tener seleccionada la opción *"Deploy from a branch"* apuntando a la rama `main` en la raíz `/`, GitHub Pages está sirviendo directamente los archivos originales del proyecto (`index.html` con `<script src="/src/main.tsx">`) en lugar del código compilado en la carpeta `dist`. Los navegadores no pueden ejecutar TypeScript (`.tsx`) directamente, lo que detiene la ejecución y deja la página completamente blanca.

---

## 2. Solución Integral Propuesta

### Cambio 1: Base con Rutas Relativas Universales (`vite.config.ts`)
- Cambiar la propiedad `base` en `vite.config.ts` a rutas relativas `'./'`:
  ```ts
  base: './',
  ```
- **Ventaja**: Hace que el código compilado cargue sus recursos como `./assets/index-xxx.js` y `./assets/index-xxx.css`. Funciona **en cualquier nombre de repositorio**, ya sea `systema-hets`, `SYSTEMA-HETS`, dominio personalizado o subdirectorio, eliminando para siempre los errores 404 por discrepancia de nombres.

### Cambio 2: Soporte para Despliegue con `gh-pages` (para "Deploy from a branch")
- Instalar la herramienta estándar `gh-pages` como dependencia de desarrollo:
  - Script en `package.json`:
    - `"predeploy": "npm run build"`
    - `"deploy": "gh-pages -d dist"`
- Así, si prefieres mantener *"Deploy from a branch"*, solo ejecutas `npm run deploy` y publicará automáticamente la carpeta compilada `dist` en una rama separada llamada `gh-pages`.

### Cambio 3: Actualización del flujo de GitHub Actions (`.github/workflows/deploy.yml`)
- Mantener y ajustar el workflow automatizado para que funcione tanto si usas GitHub Actions como si usas la rama `gh-pages`.

### Cambio 4: Ajuste de `public/404.html`
- Adaptar el script de redirección a minúsculas (`systema-hets`) y hacerlo tolerante a mayúsculas o minúsculas.

---

## 3. Plan de Verificación

1. **Compilación local**:
   - Ejecutar `compile_applet` (`npm run build`).
   - Verificar en `dist/index.html` que los enlaces a assets sean relativos: `./assets/index-...js` y `./assets/index-...css`.
2. **Linter y tipos**:
   - Ejecutar `lint_applet` para asegurar 0 errores de TypeScript.
3. **Prueba en servidor**:
   - Verificar que la aplicación siga funcionando impecablemente tanto en local como con la nueva base.

---

## 4. Instrucciones Finales para el Usuario en GitHub
Se detallarán las 2 opciones sencillas para activar tu sitio en GitHub Pages:
- **Opción recomendada (automática)**: En GitHub > Settings > Pages > Source: cambiar a **GitHub Actions**.
- **Opción por rama (manual)**: Ejecutar `npm run deploy` y en GitHub > Settings > Pages seleccionar la rama **`gh-pages`** (en lugar de `main`).
