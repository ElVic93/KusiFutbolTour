# Plan de trabajo desde la auditoría

> Plantilla generada para convertir una auditoría en fases, tareas, dependencias y prompts ejecutables aquí.

## Instrucciones rápidas
- Pega la auditoría original en el archivo `AUDIT_SOURCE.md` o en la sección "Auditoría" más abajo.
- Sigue las fases en orden; cada fase lista tareas, subtareas y dependencias.
- Usa los "Prompts" para pedirle a este asistente que realice pasos automatizados.

---

## Resumen de fases
1. Preparación
2. Análisis y priorización
3. Implementación
4. Verificación y QA
5. Cierre y documentación

---

## Fase 0 — Preparación
- Objetivo: Reunir la auditoría y preparar el contexto.
- Tareas:
  - Crear `AUDIT_SOURCE.md` y pegar el contenido íntegro de la auditoría.
  - Confirmar alcance: alcance de repositorio, ambiente (dev/staging/production).
  - Asignar responsable(s).
- Tareas específicas:
  - Añadir metadata: fecha, autor, alcance.
  - Ejecutar búsqueda rápida para detectar archivos relacionados (ej.: config, package.json).
- Dependencias: ninguna.
- Prompt sugerido (para ejecutar aquí):

  "Resume la auditoría pegada en `AUDIT_SOURCE.md` y devuelve una lista JSON con campos: id, resumen, severidad(critico/alto/medio/bajo), componente/archivo sugerido, pasos para reproducir, recomendación breve."

---

## Fase 1 — Análisis y priorización
- Objetivo: Convertir hallazgos en tareas accionables y priorizarlas.
- Tareas:
  - Clasificar hallazgos por severidad y por componente.
  - Crear backlog de tareas (issues) con estimación inicial.
  - Identificar dependencias técnicas y de negocio.
- Tareas específicas:
  - Para cada hallazgo crítico: definir ticket de corregir y tests requeridos.
  - Para problemas de documentación: asignar actualización de docs y owner.
- Dependencias: Fase 0 completada.
- Prompt sugerido:

  "A partir del JSON de hallazgos, genera una lista de tareas (CSV/Markdown) con: título, descripción, prioridad, estimación (horas), responsable sugerido y dependencias técnicas. Agrupa por componente."

---

## Fase 2 — Implementación
- Objetivo: Ejecutar correcciones, mejoras y cambios planificados.
- Tareas:
  - Implementar fixes por prioridad (critico → alto → medio → bajo).
  - Añadir/actualizar pruebas unitarias e2e.
  - Refactor y mejoras de seguridad/performance cuando aplique.
- Tareas específicas:
  - Crear rama por tarea: `fix/<issue-id>-short-desc`.
  - Añadir test que reproduce el fallo antes de aplicar fix (cuando aplicable).
  - Ejecutar linters y arreglar warnings relevantes.
- Dependencias: Fase 1 completada (tickets creados y priorizados).
- Prompts sugeridos:

  - Para generar un PR template y descripción:

    "Genera una descripción de PR para la tarea {issue-id}: incluye resumen, pasos para probar localmente, cambios realizados y tests añadidos."

  - Para generar el diff de código sugerido (cuando el audit fue textual y se espera un cambio):

    "Basado en este hallazgo y el contexto del repo (describe archivos clave), propone el parche de código necesario en formato diff explicando cada cambio." 

---

## Fase 3 — Verificación y QA
- Objetivo: Asegurar que los cambios corrigen los problemas sin introducir regresiones.
- Tareas:
  - Ejecutar suite de pruebas automatizadas (unitarias, integración, e2e).
  - Revisar PRs (code review) y aprobar cuando pase QA.
  - Realizar pruebas manuales en entorno staging cuando necesario.
- Tareas específicas:
  - Definir checklists de QA para cada tipo de cambio.
  - Automatizar jobs de CI para prevenir regresiones.
- Dependencias: Fase 2 completada para las tareas correspondientes.
- Prompts sugeridos:

  "Genera una checklist de QA para el issue {issue-id} que incluya: pruebas automatizadas a correr, pasos manuales, datos de prueba y criterios de aceptación."

---

## Fase 4 — Cierre y documentación
- Objetivo: Documentar cambios, actualizar procesos y cerrar el ciclo.
- Tareas:
  - Actualizar documentación interna y pública (README, CHANGELOG, docs).
  - Re-evaluar métricas post-fix y añadir seguimiento (monitoring/alerts).
  - Cerrar issues y archivar la auditoría con resumen de acciones.
- Tareas específicas:
  - Añadir entrada en `CHANGELOG.md` por cada release que incluya fixes de la auditoría.
  - Hacer retro y lecciones aprendidas.
- Dependencias: Fase 3 completada.
- Prompt sugerido:

  "Genera una entrada para CHANGELOG.md y un resumen ejecutivo (1-2 párrafos) explicando los cambios principales realizados por la auditoría."

---

## Plantilla de dependencias (por tarea)
- Dependencia técnica: archivos/especificaciones que deben modificarse antes.
- Dependencia organizativa: aprobaciones, accesos, credenciales.
- Ejemplo de formato por tarea:

- id: ISSUE-123
  - título: Corregir validación X
  - dependencias: [CONFIG-LOAD, DB-MIGRATION]
  - necesita-approval: true
  - estima: 4h

---

## Prompts maestros (usar con este asistente)
- Extraer hallazgos desde raw audit:

  "Lee `AUDIT_SOURCE.md` y extrae todos los hallazgos en JSON con campos: id, resumen, severidad, componente, archivo sugerido, pasos, recomendación. Si faltan datos, marca como 'falta_info'."

- Generar backlog priorizado:

  "A partir del JSON generado, crea un backlog priorizado en Markdown con etiquetas (bug, improvement, doc) y añade comandos git/branch sugeridos para cada item."

- Crear PRs y descripciones:

  "Genera título y descripción de PR para la tarea {issue-id} incluyendo: resumen, cambios de archivos, comandos para reproducir el fallo, comandos para correr tests relevantes."

- Sugerir tests unitarios:

  "Para la función/archivo {ruta}, propone 3-5 casos de prueba unitarios con entradas, salidas esperadas y motivo de cada caso."

---

## Comandos útiles (ejemplos)
- Crear archivo de auditoría (PowerShell):

```powershell
New-Item -Path . -Name "AUDIT_SOURCE.md" -ItemType File -Value "Pegar aquí la auditoría" -Force
```

- Crear rama para una tarea (Git):

```bash
git checkout -b fix/ISSUE-123-short-desc
```

- Ejecutar dev server (si usa npm/yarn):

```bash
npm install
npm run dev
# o
pnpm install
pnpm dev
```

- Ejecutar tests (ajustar según proyecto):

```bash
npm test
# o
npm run test:unit
```

---

## Cómo usar esta plantilla aquí (flujo recomendado)
1. Pegar la auditoría en `AUDIT_SOURCE.md`.
2. Pedir al asistente: "Extrae la auditoría y genera JSON de hallazgos" (usar prompt maestro).
3. Pedir: "Genera backlog priorizado".
4. Seleccionar las 1-3 tareas críticas y pedir: "Genera PRs, tests y checklist de QA".

---

## Sección: Auditoría (pega aquí si quieres que la procese ahora)

[PEGA AQUÍ LA AUDITORÍA]

---

## Notas finales
- Ajusta los prompts y comandos según tu flujo de trabajo (scripts en `package.json`).
- Si quieres, puedo: extraer la auditoría ahora, crear los tickets en formato Markdown, y proponer parches iniciales.

