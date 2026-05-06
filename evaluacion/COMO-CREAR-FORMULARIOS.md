# Cómo crear los 6 formularios del curso en 5 minutos

Este proceso crea 6 Google Forms de una sola corrida:

1. **Pre-test** (antes de Sesión 1).
2. **Evaluación Sesión 1** (al cierre).
3. **Evaluación Sesión 2** (al cierre).
4. **Evaluación Sesión 3** (al cierre).
5. **Post-test + NPS** (al cierre de Sesión 4).
6. **Feedback +30 días** (envío posterior).

## Paso a paso

### 1. Abre Google Apps Script
Ve a → **`https://script.google.com/home`**

Entra con la cuenta de Google donde quieres que queden los formularios (recomendado: tu cuenta corporativa de Mercantil Asset & Wealth Management, no una personal).

### 2. Crea un proyecto nuevo
- Click en el botón **"+ New project"** arriba a la izquierda.
- Te abre un editor de código con un `function myFunction() {}` por defecto.

### 3. Pega el script
- Selecciona todo el código que hay y bórralo (Ctrl+A, Delete).
- Abre el archivo **`crear-formularios.gs`** de esta misma carpeta.
- Copia su contenido completo y pégalo en el editor de Apps Script.

### 4. Guarda
- Click en el icono del disquete 💾 arriba, o `Ctrl+S`.
- Le puedes poner nombre al proyecto: *"Crear formularios curso"*. Da click en "Rename".

### 5. Ejecuta
- Arriba, donde dice una lista desplegable, asegúrate de que diga **`crearEvaluaciones`** (es la función principal).
- Click en el botón **"Run"** (▶).

### 6. Autoriza los permisos (solo primera vez)
Saldrá un popup pidiendo permiso para:
- Crear y modificar archivos en tu Drive (es para que cree los formularios).
- No hay más. El script no lee nada tuyo.

Sigue el flujo:
- Click **"Review permissions"**.
- Elige tu cuenta.
- Saldrá *"Google hasn't verified this app"* (normal, es tu propio script). Click **"Advanced"** → **"Go to [nombre proyecto] (unsafe)"**.
- Click **"Allow"**.

El script corre automáticamente después de autorizar. Espera 30-60 segundos.

### 7. Mira los URLs
- Abajo del editor se abre el panel **"Execution log"** con mensajes.
- Vas a ver algo así:

```
▶ Pre-test · Finanzas para dirigentes cooperativos
  Publico: https://docs.google.com/forms/d/e/1FA.../viewform
  Corto:   https://forms.gle/abc123
  Editar:  https://docs.google.com/forms/d/1FA.../edit

▶ Evaluación · Sesión 1 · Estados financieros sin miedo
  Publico: ...
```

**Copia los 6 URLs "Publico" o "Corto".** Esos son los que compartes con los participantes.

## Dónde quedan los formularios

En tu **Google Drive**, en la raíz. Puedes moverlos a una carpeta "Curso cooperativas" después para orden.

## Dónde quedan las respuestas

Cada formulario tiene su propia pestaña de respuestas. Puedes:
- Verlas en vivo en la vista del formulario → pestaña "Responses".
- Exportarlas a un Google Sheet (botón "Link to Sheets" en la vista de respuestas).

## Qué hacer con los URLs

Cuando los tengas:
1. Pégamelos de vuelta en el chat — yo los agrego a los slides de cada sesión.
2. O si prefieres editarlos tú: cada slide tiene un `<section>` de cierre donde puedes agregar el link.

## Si algo falla

**"Maximum execution time exceeded"** — el script tarda demasiado. Solución: corre los formularios de a uno comentando los otros. Ver en el array `FORMULARIOS` del script; deja un solo elemento activo.

**"Authorization required"** — no autorizaste. Vuelve al paso 6.

**No ves los URLs en el log** — es probable que el run no haya terminado. Espera 60 segundos más.

## Ajustes manuales (opcionales)

Una vez creados los formularios, puedes entrar a cada uno vía el "URL editar" y:
- Cambiar el diseño (tema del formulario → color Mercantil azul).
- Agregar tu foto o logo.
- Preguntar "email" al inicio si quieres emparejar pre-test y post-test de la misma persona.
- Marcar respuestas correctas si quieres convertirlo en "Quiz" (para conocimiento 1-8).

El script hace la estructura; el pulido se puede hacer a mano.
