# URLs del curso

Referencia única de todos los links del curso. Mantener esto actualizado.

## Google Forms · Evaluaciones

| Formulario | URL corto (compartir) | URL editar |
|---|---|---|
| Pre-test (antes de Sesión 1) | https://forms.gle/HwMAYPHj1fbDtKW89 | [editar](https://docs.google.com/forms/d/1tOnwGtcvCXqHg1yfETolGrZVASYXGnRNQdTrQOz3Cpk/edit) |
| Eval Sesión 1 | https://forms.gle/d9cRDhnCdVG7dCfE6 | [editar](https://docs.google.com/forms/d/1b-WM8D9yXsQgs1JwIJPi9P8_P8yQRYmOYk5rBuksYMM/edit) |
| Eval Sesión 2 | https://forms.gle/ZQtXx8SGroivW8WQ8 | [editar](https://docs.google.com/forms/d/1AjteBEQcvqh6TOj4laVJ1YYLsEtZKq_UGRSkqklmK5s/edit) |
| Eval Sesión 3 | https://forms.gle/wiz2Vs4uCHa5T8ZW8 | [editar](https://docs.google.com/forms/d/1ORD947s4IYVLNVpTfklaHgxSOVxrArXF-xykqzD1QTQ/edit) |
| Post-test (cierre curso) | https://forms.gle/juVNGrodnWJccfht9 | [editar](https://docs.google.com/forms/d/1bhUHLLvIJJbz0ZJdImpZXmhu-2I-PTkCfup5Y6bed_w/edit) |
| Feedback +30 días | https://forms.gle/C69JgyTdPLwXVDTc8 | [editar](https://docs.google.com/forms/d/1foN-EfLiUycGG31DXWqAvajw7ZNmx8-zYeBp7T0G3ww/edit) |

## Sitio del curso · GitHub Pages

**Raíz:** https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/

### ⭐ Landings por sesión (lo que escanean los participantes)

A partir de v1.2, **un solo QR por sesión** apunta a una landing con 4 pestañas (Polls · Herramienta · Evaluación · Material).

- Sesión 1: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-1-estados-financieros/landing/
- Sesión 2: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-2-flujo-caja/landing/
- Sesión 3: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-3-productos-financieros/landing/
- Sesión 4: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-4-financiamiento/landing/

**Generar los 4 QR (una sola vez):**
1. Abrir `https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/scripts/generar-qr.html`
2. Para cada sesión:
   - Pegar la URL de la landing
   - Descargar PNG
   - Renombrar a `landing-sesion-N.png`
   - Reemplazar en `sesiones/sesion-N-*/slides/qr/`
3. `git add` + `git commit` + `git push`

### Sistema de polls (vista facilitador)
- Vista facilitador con selector: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/polls/facilitador.html?token=TOKEN
- Setup completo: ver `polls/INSTRUCCIONES.md` en el repo.

### Slides por sesión (proyectables)
- Sesión 1: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-1-estados-financieros/slides/
- Sesión 2: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-2-flujo-caja/slides/
- Sesión 3: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-3-productos-financieros/slides/
- Sesión 4: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-4-financiamiento/slides/

### Herramientas por sesión (también accesibles vía la landing)
- Sesión 1 — Mi foto financiera: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-1-estados-financieros/herramientas/mi-foto-financiera/
- Sesión 2 — Mi película del mes: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-2-flujo-caja/herramientas/mi-pelicula-del-mes/
- Sesión 3 — Mi caja de herramientas: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-3-productos-financieros/herramientas/mi-caja-herramientas/
- Sesión 4 — Costo real del crédito: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/sesiones/sesion-4-financiamiento/herramientas/costo-real-credito/

### Navegación y utilidades
- Navegador del proyecto: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/indice.html
- Generador de QR: https://andresborrerom.github.io/capacitacion-cooperativas-mercantil/scripts/generar-qr.html

## Flujo recomendado de distribución

### Pre-curso (48 h antes de Sesión 1)
Correo a los 100 participantes con:
- Invitación al evento (plataforma Teams/Zoom con link).
- **Pre-test**: https://forms.gle/HwMAYPHj1fbDtKW89
- PDF previo de Sesión 1.
- Corte: responder pre-test 24 h antes.

### Durante cada sesión
El slide penúltimo de cada sesión muestra el QR de la eval. El facilitador también pega el link en el chat de la videollamada.

### Cierre de Sesión 4
En el slide de post-test, el facilitador pega el link al post-test + NPS en el chat. Tiempo sugerido: 10 minutos para que la mayoría responda estando todavía en la llamada.

### 14 días post-curso
Invitación opcional a sesión de seguimiento (solo a quienes respondieron "Sí" en post-test pregunta 27).

### 30 días post-curso
Correo con feedback extendido: https://forms.gle/C69JgyTdPLwXVDTc8

## Mantenimiento

Si re-corres `evaluacion/crear-formularios.gs`, se crean **nuevos** formularios (no actualiza los existentes). Reemplaza esta tabla si regeneras, y regenera los QR de slides con `scripts/generar-qr.html`.

Para ajustar preguntas sin recrear: abre cada form via el link "editar" y modifica directo en Google Forms.
