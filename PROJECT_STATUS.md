# Project Status

## 1. Stack Detectado
- Framework: React (evidencia: [index.tsx](index.tsx#L1), [App.tsx](App.tsx#L1))
- Runtime: Node.js (desarrollo/build) y navegador (cliente) (evidencia: [vite.config.ts](vite.config.ts#L1-L40))
- Package Manager: npm (scripts en [package.json](package.json#L1-L40); no se detectó lockfile en repo)
- Build Tool: Vite (evidencia: [package.json](package.json#L1-L40), [vite.config.ts](vite.config.ts#L1-L40))
- Type System: TypeScript (evidencia: [tsconfig.json](tsconfig.json#L1-L40), dependencias en [package.json](package.json#L1-L40))
- Testing: Ninguno detectado (no se encontró configuración de test ni dependencias de test)
- Linting: Ninguno detectado (no se encontró `.eslintrc`, `eslint` en deps)
- Deploy Target: Static web hosting / Vite preview / AI Studio export (evidencia: [README.md](README.md#L1-L40) y estructura `index.html`)

## 2. Runbook – Cómo correr desde cero

Requisitos:
- Node: recomendada **Node 18.x o 20.x (LTS)**
- Package manager: `npm` (>=9 recommended)

Pasos exactos en terminal (VS Code) desde carpeta raíz:

1) Instalar dependencias
```bash
npm install
```

2) Variables de entorno
- Nota: Este proyecto no requiere variables de entorno para ejecución local por defecto. Si no vas a usar la Gemini API key no es necesario crear `.env.local`.
- Recomendación: eliminar `./.env.local` del repositorio y, si se prefiere, añadir un archivo de ejemplo vacío `./.env.local.example` para documentación.

3) Correr en desarrollo
```bash
npm run dev
```

4) Lint (no configurado en repo). Recomendación rápida (opcional):
```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npx eslint "**/*.{ts,tsx,js,jsx}" --fix
```

5) Test (no configurado). Recomendación rápida (opcional):
```bash
npm install -D vitest @testing-library/react
npx vitest
```

6) Build
```bash
npm run build
```

7) Preview
```bash
npm run preview
```

Troubleshooting común:
- Node incorrecto: instala la versión recomendada con `nvm` o `nvm-windows` y vuelve a `npm install`.
- Puertos ocupados: si `vite` no arranca en `3000`, matar proceso o cambiar `server.port` en [vite.config.ts](vite.config.ts#L1-L40).
- Variables faltantes: no aplican para ejecución local por defecto. Si en el futuro habilitas integración con Gemini, crea `.env.local` con `GEMINI_API_KEY`.
- Conflictos de lockfile: este repo ahora contiene `package-lock.json` (generado tras `npm install`) — ver evidencia: [package-lock.json](package-lock.json#L1-L20).

## 3. Auditoría Técnica

Revisa y reporta:

| Hallazgo | Severidad | Evidencia | Acción |
|---|---:|---|---|
|Proyecto exportado desde AI Studio — meta: app estática con Vite|Baja|[README.md](README.md#L1-L40)|OK — mantener documentación de AI Studio link en README|
|No hay lockfile (package-lock.json / yarn.lock / pnpm-lock.yaml).|Alta|(ausente en raíz; ver [package.json](package.json#L1-L40))|Generar `package-lock.json` con `npm install` y commitearlo.|
|No `engines` definido en `package.json` (Node version no forzada).|Media|[package.json](package.json#L1-L40)|Agregar `engines` en `package.json` y documentar Node LTS en README/CI.|
|Sin linter configurado (`eslint`) ni reglas de formato.|Media|no existe `.eslintrc*` ni `eslint` en [package.json](package.json#L1-L40)|Añadir ESLint + Prettier; crear script `lint` en `package.json`.|
|Sin framework de testing ni tests.|Media|no hay `vitest`/`jest` dependencias ni carpetas `__tests__`|Añadir `vitest` y pruebas básicas; crear script `test` en `package.json`.|
|Secrets inlining risk: `GEMINI_API_KEY` aparece en `vite.config.ts` pero si no se usa en el cliente el riesgo es menor.|Media|[vite.config.ts](vite.config.ts#L1-L40), [.env.local](.env.local#L1)|Eliminar o comentar la inyección en `define` si no es necesaria; si se necesita, mover la clave a un backend/proxy en vez de exponerla al bundle.|
|`.env.local` con placeholder presente en repo.|Media|[.env.local](.env.local#L1)|Eliminar `./.env.local` del repo y, si se desea documentar, añadir `./.env.local.example` sin valores sensibles.|
|Scripts npm mínimos (no hay `lint`, `test`, `format`).|Media|[package.json](package.json#L1-L40)|Agregar scripts estándar: `lint`, `test`, `format`, `prettier:check`.|
|No CI/CD ni workflows (`.github/workflows`) detectados.|Media|no existe carpeta `.github`|Crear CI básico (GitHub Actions) para `install`, `build`, `lint`, `test` y `deploy` a target.|
|No LICENSE presente.|Baja|no existe `LICENSE` en repo|Agregar licencia (p.ej. MIT) si corresponde.|
|Ausencia de docs de contribución / conventions (Commits).|Baja|no `.github` ni `CONTRIBUTING.md`|Añadir `CONTRIBUTING.md`, configurar `commitlint`/`husky` si se desea.|
|Posible optimización de imágenes (no verificada tamaño).|Media|[public/images](public/images) contiene imágenes|Revisar tamaños; usar lazy-loading / responsive images.|

## 4. Roadmap por Fases

Cada fase incluye tareas, dependencias y criterios claros.

### Fase 0 – Arranque Local Garantizado
| ID | Tarea Específica | Estado | Dependencias | Archivos | Comandos | Definition of Done |
|---|---|---|---|---|---|---|
|0.1|Instalar dependencias y generar lockfile|Completed|Ninguna|[package.json](package.json#L1-L40), [package-lock.json](package-lock.json#L1-L20)|`npm install`|`node_modules` presentes y `package-lock.json` generado y commiteado por el desarrollador|
|0.2|Crear `.env.local.example` y eliminar secret en repo|ToDo|0.1|`.env.local`|`cp .env.local .env.local.example`|`.env.local.example` en repo y `.env.local` en `.gitignore`|

### Fase 1 – Estabilidad Técnica
| ID | Tarea Específica | Estado | Dependencias | Archivos | Comandos | Definition of Done |
|1.1|Agregar `engines` y documentar Node|ToDo|0.1|[package.json](package.json#L1-L40)|Editar `package.json`|`package.json` updated y README con versión Node|
|1.2|Agregar ESLint + Prettier y scripts `lint`|ToDo|0.1|`.eslintrc`, `package.json`|`npm install -D eslint prettier`|`npm run lint` pasa sin errores y formato aplicado|
|1.3|Agregar Vitest y pruebas básicas|ToDo|1.2|`vitest` config, tests|`npm install -D vitest` `npm run test`|`npm run test` success en CI local|
|1.4|Revisar y eliminar exposure de keys en cliente|ToDo|0.2|[vite.config.ts](vite.config.ts#L1-L40)|refactor|No secrets inlined; petición con proxy/backend|

### Fase 2 – Hardening & Calidad
| ID | Tarea Específica | Estado | Dependencias | Archivos | Comandos | Definition of Done |
|2.1|Agregar CI (GitHub Actions): install/build/lint/test|ToDo|1.2,1.3|`.github/workflows/ci.yml`|`git push`|Workflow ejecuta y pasa en PRs|
|2.2|Auditoría de bundle y optimización de imágenes|ToDo|1.4|`public/images`, `vite.config.ts`|`npm run build`|Bundle size controlado, imágenes optimizadas|
|2.3|Accesibilidad básica (a11y) checks|ToDo|1.2|componentes UI|`npx axe`|Report con issues remediadas mínimas|

### Fase 3 – Release Ready
| ID | Tarea Específica | Estado | Dependencias | Archivos | Comandos | Definition of Done |
|3.1|Configuración de variables de entorno para producción|ToDo|2.1|`.env.production`|CI secrets|Build reproducible sin secretos en cliente|
|3.2|Build optimizado y test de preview|Completed|3.1|`package.json` scripts|`npm run build && npm run preview`|Build y `preview` ejecutados localmente por el desarrollador; preview estable y sin warnings críticos|


### Fase 4 – GitHub & Versionado Profesional
| ID | Tarea Específica | Estado | Dependencias | Archivos | Comandos | Definition of Done |
|4.1|README profesional, `.env.example`, LICENSE|ToDo|0.1|[README.md](README.md#L1-L40)|Editar/añadir archivos|Archivos presentes y claros para contributors|
|4.2|Convenciones: Conventional Commits, tag v0.1.0|ToDo|4.1|`package.json`|Ver sección GitHub más abajo|PRs con Conventional Commits y tag creado|

### Fase 5 – Post Release & Escalabilidad
| ID | Tarea Específica | Estado | Dependencias | Archivos | Comandos | Definition of Done |
|5.1|CI/CD de despliegue (staging/prod)|ToDo|3.2|`.github/workflows/deploy.yml`|Push a main con tag|Deploy automatizado en target elegido|
|5.2|Monitoreo y alertas|ToDo|5.1|Docs/infra|Integración con Sentry/Datadog|Alertas configuradas y doc|

## 5. Prompts Operativos por Fase

### Prompt Fase 0
```bash
npm ci || npm install && cp .env.local.example .env.local || true && npm run dev
```
Éxito: `vite` arranca y la app es accesible en `http://localhost:3000`.

### Prompt Fase 1
```bash
npm run lint || (npm install -D eslint && npx eslint "**/*.{ts,tsx,js,jsx}" --fix); npm run test || true; npm run build
```
Éxito: `npm run build` completa sin errores críticos.

### Prompt Fase 2
```bash
npx depcheck || true; npm run build && npx source-map-explorer dist/assets/*.js || true
```
Éxito: audit y report completado.

### Prompt Fase 3
```bash
export NODE_ENV=production; npm run build && npm run preview
```
Éxito: build reproducible y preview estable. (Confirmado localmente por el desarrollador)

### Prompt Fase 4
```bash
git init && git checkout -b main; git add .; git commit -m "chore: initial commit"; git tag -a v0.1.0 -m "v0.1.0"; git remote add origin <URL>; git push -u origin main --follow-tags
```
Éxito: repo en remote con tag v0.1.0.

---

Si confirmas, procedo a aplicar los cambios mínimos: crear `.env.local.example`, actualizar `package.json` con `engines` y scripts `lint`/`test`, crear `.github/workflows/ci.yml` básico y ejecutar `npm install` para generar `package-lock.json`. 
