# instructivo-facilitador/

Documento maestro para el profesor del curso. Es la guía que te acompaña desde la preparación hasta el post-curso.

## Archivos

| Archivo | Qué es | Cuándo usar |
|---|---|---|
| **`instructivo-facilitador.pdf`** | **PDF listo para leer/imprimir.** ~30 páginas. | **Abrir y leer. Es el documento principal.** |
| `instructivo.html` | Fuente HTML (con botón "Imprimir/Guardar como PDF" integrado). | Abrir en navegador si prefieres ver en web o regenerar el PDF. |
| `instructivo.md` | Misma información en markdown plano. | Si prefieres leer en editor o editar el contenido. |
| `README.md` | Este archivo. | Guía rápida. |

## Cómo regenerar el PDF

El PDF ya está en `instructivo-facilitador.pdf`. Si editas el HTML o el MD y quieres regenerarlo:

### Opción 0 · Edge headless (usada para generar la versión actual)

```bash
"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" \
  --headless --disable-gpu --print-to-pdf-no-header \
  --print-to-pdf="instructivo-facilitador.pdf" \
  "file:///ruta/completa/a/instructivo.html"
```

En Windows también funciona con Chrome (`chrome.exe`) si lo prefieres.

### Opción 1 · Browser manual (recomendado si editas)

1. Abre `instructivo.html` en Chrome, Edge o Firefox.
2. Haz click en el botón azul **"Imprimir / Guardar como PDF"** arriba a la derecha.
   - O usa `Ctrl+P` (Windows) / `Cmd+P` (Mac).
3. En el diálogo de impresión, selecciona **"Guardar como PDF"** como destino.
4. Configuración recomendada:
   - **Tamaño:** A4.
   - **Márgenes:** por defecto (el HTML ya tiene márgenes en CSS).
   - **Escala:** 100%.
   - **Encabezados y pies:** desmarcar.
   - **Gráficos de fondo:** marcar (para que respete los colores).
5. Click en **"Guardar"**. Elige nombre: `instructivo-facilitador.pdf`.

### Opción 2 · Pandoc (si ya lo tienes instalado)

```bash
pandoc instructivo.md -o instructivo.pdf --pdf-engine=xelatex
```

Requiere `xelatex` o similar para soporte de fuentes en español.

### Opción 3 · Online

Si no quieres configurar nada, hay convertidores online gratuitos (md-to-pdf, markdown2pdf). Subir `instructivo.md` → descargar PDF. El formato queda menos bonito que con el HTML pero sirve.

## Para qué sirve

Este instructivo responde a: *"¿Qué hago yo, como profesor, en cada momento del curso?"*

- **Antes del curso:** checklist de preparación (2 semanas, 1 semana, 1 día antes).
- **Cada sesión:** qué archivos abrir, qué decir (resumido), qué polls lanzar, qué proyectar.
- **Frases literales:** las 4 frases del curso que si dices exactamente, anclan el aprendizaje.
- **Contingencias:** qué hacer cuando algo falla (tecnología, dinámica, contenido).
- **Post-curso:** cronograma de seguimiento de 30 días.
- **Ensayo:** cómo practicar antes del día real.

## Cuándo actualizarlo

- Tras la primera cohorte, actualizar según lo aprendido.
- Si cambia la duración, estructura o metáfora madre del curso, actualizar.
- Si entrena a otro facilitador, pedirle que le agregue sus notas.

## Relación con el resto del material

Este instructivo es el **mapa**. Los `guion.md` de cada sesión son la **letra exacta**. Cuando estés en la sesión, tienes ambos abiertos: el mapa para orientarte, el guion para la línea precisa.
