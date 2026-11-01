# Plan de Implementación: Automatización de Despliegue en GitHub Pages

Configuración completa y automatizada del proyecto para despliegue en GitHub Pages en el subdirectorio `/SYSTEMA-HETS/`, garantizando funcionamiento sin errores 404 y compatibilidad transparente con el entorno de desarrollo local.

## 1. Decisiones del Usuario y Alcance
- **Método de despliegue**: GitHub Actions automatizado con cada push a la rama principal (`main`).
- **Base de Vite**: Dinámica: `/SYSTEMA-HETS/` en compilación para producción (`npm run build`) y `/` en entorno de desarrollo local (`npm run dev`).
- **Manejo de rutas y 404**: Mecanismo SPA con `public/404.html` y script de reconstrucción de URL en `index.html` para subdirectorio de 1 nivel.

---

## 2. Cambios Propuestos

### Archivo 1: `vite.config.ts`
- Modificar la función `defineConfig` para recibir `{ mode }`.
- Configurar `base`:
  ```ts
  base: process.env.BASE_URL || (mode === 'production' ? '/SYSTEMA-HETS/' : '/'),
  ```
- Mantener los alias `@` a la raíz y las configuraciones de servidor existentes.

### Archivo 2: `.github/workflows/deploy.yml`
- Crear el flujo de trabajo de GitHub Actions oficial de GitHub Pages:
  - **Disparador**: `push` a la rama `main` (o `master`) y despacho manual (`workflow_dispatch`).
  - **Permisos requeridos**: `contents: read`, `pages: write`, `id-token: write`.
  - **Pasos**:
    1. `actions/checkout@v4`
    2. `actions/setup-node@v4` con Node 20 y caché de npm.
    3. Instalación de dependencias: `npm ci` (o `npm install`).
    4. Compilación del proyecto: `npm run build`.
    5. Configuración de Pages: `actions/configure-pages@v5`.
    6. Subida de artefactos desde la carpeta `dist`: `actions/upload-pages-artifact@v3` con `path: './dist'`.
    7. Despliegue en GitHub Pages: `actions/deploy-pages@v4`.

### Archivo 3: Verificación de activos y enlaces
- Asegurar que todas las rutas a imágenes en `index.html` y componentes utilicen rutas que resuelvan correctamente tanto en local como con la base de Vite en producción.
- `public/404.html` ya implementa `pathSegmentsToKeep = 1;` para resolver rutas hijas bajo `/SYSTEMA-HETS/`.

---

## 3. Plan de Verificación

### Compilación y Linter
- Ejecutar `compile_applet` para validar que `npm run build` genera los archivos en `dist` con los prefijos `/SYSTEMA-HETS/` en los assets de producción.
- Ejecutar `lint_applet` para verificar que no haya errores de TypeScript ni sintaxis en `vite.config.ts`.

### Prueba de Servidor Dev
- Reiniciar el servidor de desarrollo y verificar que la URL raíz responda correctamente en desarrollo local sin obligar al subdirectorio.

---

## 4. Pasos posteriores para el usuario en GitHub
Una vez subidos los cambios a tu repositorio:
1. En GitHub, ir a **Settings** > **Pages**.
2. En **Build and deployment** > **Source**, seleccionar **GitHub Actions** (en lugar de "Deploy from a branch").
3. Al hacer push a la rama `main`, la pestaña **Actions** ejecutará el despliegue de forma totalmente automática.
